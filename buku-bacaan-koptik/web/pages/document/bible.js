import { BibleAddendums } from '../../data/bible-addendums.js';
import { Repository } from '../../data/repository.js';

export const BibleRef = (function () {

	// types
	// 1. <BibleReference reference="1 Chronicles 15" type="title" showVerseNumbers="true"/> => (whole thing)
	// 2. <BibleReference reference="Titus 2:11-3:7" type="section"/> => from this chapter and verse to that chapter and verse
	// 3. <BibleReference reference="Titus 138:1-2" type="section"/> => from this verse to that verse (same chapter)
	// 4. <BibleReference reference="Psalms 104:4;138:1-2" type="comment"/> => discrete
	// 5. <BibleReference reference="Psalms 25:18, 20" type="comment"/> => bulljive is what that is!!

	let nkjv, svd, tb;

	async function render(node) {
		const ref = node.getAttribute('reference').replace(/, /g, ',').replace(/; /g, ';'); // remove stupid spaces
		await setBooks(ref);

		const expandedRef = expandRef(ref);
		const verses = expandedRef.split(';').reduce((verses, r) => verses.concat(getVerses(r)), []);
		const addendums = getAddendums(node);
		const attrs = [...node.attributes].map(a => `${a.name}="${a.value}"`).join(' ');

		return verses.map(v => renderVerse(v, attrs, addendums)).join('');
	}

	function renderVerse(chapterVerse, attrs, addendums) {
		// get verse from book
		const [chapter, verse] = chapterVerse.split(':');
		const [kjvVerse, svdVerse, tbVerse] = [nkjv, svd, tb].map(b =>
			b.querySelector(`chapter[num="${chapter}"] verse[num="${verse}"]`)?.innerHTML ?? ''); // hide off-by-one errors!!

		return `${addendums.introduction}<bibleverse chapterverse="${chapterVerse}" verse="${verse}" ${attrs}>
			<language id="English">${kjvVerse}</language>
			<language id="Arabic">${svdVerse}</language>
			<language id="Indonesian">${tbVerse}</language>
		</bibleverse>${addendums.conclusion}`;
	}

	async function setBooks(ref) {
		ref = ref.split(' ');
		ref.pop(); // remove the chapter-verse data

		[nkjv, svd, tb] = await Promise.all([
			Repository.getDocument(`bible/nkjv/${ref.join(' ')}`),
			Repository.getDocument(`bible/svd/${ref.join(' ')}`),
			Repository.getDocument(`bible/tb/${ref.join(' ')}`)
		]);
	}

	// called AFTER splitting by ';'
	function getVerses(ref) {
		let startChapter, startVerse, endChapter, endVerse;

		const parts = ref.split(' ').pop().split('-');
		if (parts[1]?.includes(':') && parts[0].includes(':')) { // both parts include chapter and verse (#2)
			[startChapter, startVerse] = parts[0].split(':');
			[endChapter, endVerse] = parts[1].split(':')

		} else if (parts[1]) { // same chapter but range of verses (#3)
			[startChapter, startVerse] = parts[0].split(':');
			endVerse = parts[1];

		} else { // a plain ol', honest to god chapter:verse
			[startChapter, startVerse] = parts[0].split(':');
		}

		startChapter = parseInt(startChapter);
		endChapter = parseInt(endChapter || startChapter);
		startVerse = parseInt(startVerse);
		endVerse = parseInt(endVerse || startVerse);

		// console.log(parts, `chapters: ${startChapter} to ${endChapter}`, `verses ${startVerse} to ${endVerse}`);

		const verses = [];
		for (let i = 0; i < endChapter - startChapter + 1; i++) {

			if (endChapter == startChapter) {
				if (!startVerse) { // full chapter (#1)
					startVerse = 1;
					endVerse = getLastVerseOfChapter(startChapter);
				}

				for (let j = 0; j < endVerse - startVerse + 1; j++) {
					verses.push(`${startChapter + i}:${startVerse + j}`);
				}

			} else { // multi-chapter
				startVerse = i == 0 ? startVerse : 1; // if at the starting chapter, start from the starting verse
				endVerse = getLastVerseOfChapter(startChapter + i); // get the end verse of the current chapter

				for (let j = 0; j < endVerse - startVerse + 1; j++) {
					verses.push(`${startChapter + i}:${startVerse + j}`);
				}
			}
		}

		return verses;
	}

	// stupid fucking formatting!!!
	function expandRef(ref) {
		if (!ref.includes(',')) return ref;

		const refs = ref.split(';');

		return refs.flatMap(r => {
			if (!r.includes(',')) return r;

			const [chapter, verses] = r.split(':');
			return verses.split(',').map(v => `${chapter}:${v}`);
		}).join(';');
	}
	function getLastVerseOfChapter(number) {
		const chapter = nkjv.querySelector(`chapter[num="${number}"]`);
		return chapter.children.length;
	}

	function getAddendums(node) {
		const ref = node.getAttribute('reference');
		const name = getBibleName(ref);
		const addendums = BibleAddendums.get(name);

		const ignoreAddendums = !ref.match(/psalm.*:/i); // addendums are only shown if psalm & the verses have a colon!!
		const hideIntro = ignoreAddendums || node.getAttribute('hideIntro')?.toLowerCase() == 'true';
		const hideConclusion = ignoreAddendums || node.getAttribute('hideConclusion')?.toLowerCase() == 'true';
		const hideIntroConclusion = ignoreAddendums || node.getAttribute('hideIntroConclusion')?.toLowerCase() == 'true';

		return {
			introduction: (hideIntro || hideIntroConclusion) ? '' : addendums.introduction,
			conclusion: (hideConclusion || hideIntroConclusion) ? '' : addendums.conclusion,
		}
	}
	function updateGospelIntroductions(doc) {
		const gospelIntros = doc.querySelectorAll('Text[type="GospelIntro"], text[type="GospelIntro"]').toArray();
		if (!gospelIntros.length) return;

		// assume only one book!!
		const ref = doc.querySelector('bibleverse')?.getAttribute('reference');
		if (!ref) return;

		const name = getBibleName(ref);
		const title = BibleAddendums.getTitle(name);

		gospelIntros.forEach(gi => {
			gi.children.toArray().forEach(elem => {
				elem.innerHTML = elem.innerHTML.replace(/\[AUTHOR\]/g, title[elem.id]);
			});
		});
	}

	function getBibleName(ref) {
		let name = ref.replace(/, /g, ',').replace(/; /g, ';').split(' '); // remove stupid spaces
		name.pop(); // remove the chapter-verse data
		return name.join(' ');
	}

	return {
		render,
		updateGospelIntroductions,
	}

})();
