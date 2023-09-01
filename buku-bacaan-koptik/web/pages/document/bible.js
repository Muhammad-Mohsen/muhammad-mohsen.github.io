import { HTTP } from "../../core/http.js";

export const BibleRef = (function () {

	// types
	// 1. <BibleReference reference="1 Chronicles 15" type="title" showVerseNumbers="true"/> => (whole thing)
	// 2. <BibleReference reference="Titus 2:11-3:7" type="section"/> => from this chapter and verse to that chapter and verse
	// 3. <BibleReference reference="Titus 138:1-2" type="section"/> => from this verse to that verse (same chapter)
	// 4. <BibleReference reference="Psalms 104:4;138:1-2" type="comment"/> => discrete

	// types
	// single number -> whole chapter
	// semi-colon separated -> discrete chapter/verse
	// dash separated -> continuous chapter/verse

	let kjv, svd;

	async function render(node) {
		const ref = node.getAttribute('reference');
		await setBooks(ref);

		const verses = ref.split(';').reduce((verses, r) => verses.concat(getVerses(r)), []);

		return verses.map(v => renderVerse(v)).join('');
	}

	function renderVerse(chapterVerse) {
		// get verse from book
		const [chapter, verse] = chapterVerse.split(':');
		const kjvVerse = kjv.querySelector(`chapter[num="${chapter}"] verse[num="${verse}"]`)?.innerHTML ?? ''; // hide off-by-one errors!!
		const svdVerse = svd.querySelector(`chapter[num="${chapter}"] verse[num="${verse}"]`)?.innerHTML ?? ''; // hide off-by-one errors!!

		return `<bibleverse chapterverse="${chapterVerse}" verse="${verse}">
			<language id="English">${kjvVerse}</language>
			<language id="Arabic">${svdVerse}</language>
		</bibleverse>`;
	}

	async function setBooks(ref) {
		ref = ref.split(' ');
		const book = ref.pop(); // remove the chapter-verse data

		[kjv, svd] = await Promise.all([
			HTTP.get(`bible/kjv/${ref.join(' ')}`),
			HTTP.get(`bible/svd/${ref.join(' ')}`)
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

	function getLastVerseOfChapter(number) {
		const chapter = kjv.querySelector(`chapter[num="${number}"]`);
		return chapter.children.length;
	}

	return {
		render,
	}

})();
