import { HTTP } from "../../core/http.js";
import { Router } from "../../core/router.js";
import { MainMenu } from "../../data/main-menu.js";
import { SettingsPage } from "../settings/settings.js";
import { BibleRef } from "./bible.js";
import { DocumentOutline } from "./outline.js";
import { DocumentSearch } from "./search.js";

export const DocumentPage = (() => {

	const element = document.querySelector('document');
	let searchContainer, outlineContainer, documentContainer;

	async function init(entry) {
		element.innerHTML = template({
			header: entry.name,
			subHeader: MainMenu.getParent(entry.uri)?.name ?? entry.sub,
		});

		searchContainer = element.querySelector('.search-container');
		outlineContainer = element.querySelector('aside');
		documentContainer = element.querySelector('main');

		toggleSearchMode(false); // reset the search (if any previous search was active!)

		setTimeout(() => element.classList.add('show'), 50);

		let doc = await HTTP.get(entry.path); // = await renderDocument(entry.path);
		doc = await renderFaster(doc);
		documentContainer.innerHTML = await postProcessDocument(doc);

		element.querySelector('loading').classList.remove('show'); // hide the loading indicator
		element.querySelector('#document-actions').classList.add('show'); // show document actions

		DocumentOutline.create(documentContainer, outlineContainer);
	}

	// elegant(er) but slow(er)
	async function renderDocument(path) {
		const doc = await HTTP.get(path);
		if (!doc) return '';

		const includes = doc.querySelectorAll('InsertDocument');
		for (let i of [...includes]) {
			const path = i.getAttribute('path');
			const innerDoc = await renderDocument(path);
			i.replaceWith(innerDoc);
		}

		return doc;
	}
	// I hate that we have to get the document first then recurse
	async function renderFaster(doc) {

		// TODO

		const includes = doc.querySelectorAll('InsertDocument');
		if (includes.length == 0) return doc;

		const promises = [];
		for (let i of [...includes]) {
			const path = i.getAttribute('path');
			promises.push(HTTP.get(path));
		}

		const innerDocs = await Promise.all(promises);
		innerDocs.forEach((doc, i) => includes[i].replaceWith(doc));

		return renderFaster(doc);
	}

	function discardOutOfSeason(doc) {
		const seasons = [...doc.querySelectorAll('season')];
		return doc;
	}

	// a final pass on the final document...some click handlers, and straight up string manipulations on the outerHTML!
	// brute force-ish, but very effective
	async function postProcessDocument(doc) {

		// track down section headers so we can add expand/collapse functions on them
		const sectionHeaders = doc.querySelectorAll('Section Title');
		for (let h of [...sectionHeaders]) h.setAttribute('data-section-header', 'true');

		doc = await renderBible(doc);

		applySettings(doc);

		return doc.outerHTML
			// remove post-decryption encoding error
			.replace(/\?�?/gi, '')
			.replace(/�/gi, '')

			// replace CopticReading id with Coptic...the coptic-row attr is used as an extra css selector for custom display
			.replace(/id="CopticReading"/gi, 'id="Coptic" coptic-row')

			// title element can only have text nodes, so we change it so it renders its inner HTML correctly
			.replace(/<title/gi, '<title-html')
			.replace(/<\/title>/gi, '</title-html>')

			// remove extra 'document' elements
			.replace(/<document xmlns="http:\/\/www.suscopts.org\/CopticReader">/gi, '')
			.replace(/<\/document>/gi, '')

			.replace(/<linkdocument /gi, `<linkdocument onclick="DocumentPage.goto(this);" `)

			.replace(/data-section-header="true"/gi, `onclick="DocumentPage.sectionExpandCollapse(this);"`);
	}

	// bible references aren't recursive, so they can just be called at the end
	async function renderBible(doc) {
		const refs = [...doc.querySelectorAll('BibleReference')];

		for (let r of refs) {
			const refNode = await BibleRef.render(r);
			r.outerHTML = refNode; // replaceWith(refNode);
		}

		return doc;
	}

	function applySettings(doc) {
		const settings = SettingsPage.get();
		element.style.fontSize = settings.fontSize + 'em';

		const falsy = (prop) => prop != 'true';
		const removeAll = (selector) => [...doc.querySelectorAll(selector)].forEach(e => e.remove());

		if (falsy(settings.comments)) removeAll('comment'); // comments

		// if (falsy(settings.silentPrayers)) removeAll('comment'); // silent prayers
		// if (falsy(settings.nonCustomaryPrayers)) removeAll('comment'); // non-customray prayers

		// roles
		// if (falsy(settings.rolePriest)) removeAll('rolePriest');
		// if (falsy(settings.roleDeacon)) removeAll('roleDeacon');
		// if (falsy(settings.rolePeople)) removeAll('rolePeople');

		// transition time??

		// languages...at the end to ensure that we removed the big, parent nodes first (roles/comments for example)
		if (falsy(settings.langEn)) removeAll('[id="English"]');
		if (falsy(settings.langCo)) removeAll('[id="Coptic"]');
		if (falsy(settings.langAr)) removeAll('[id="Arabic"]');
		if (falsy(settings.langId)) removeAll('[id="Indonesian"]');
	}

	function sectionExpandCollapse(target) {
		const section = target.closest('section');
		section.setAttribute('expanded', section.getAttribute('expanded') == 'false');
	}

	function toggleSearchMode(force) {
		searchContainer.classList.toggle('show', force);
		DocumentSearch.reset();
		searchContainer.querySelector('input').value = '';
		searchContainer.querySelector('#search-index').innerHTML = '';
	}
	function search() {
		DocumentSearch.reset(element);
		DocumentSearch.exec(documentContainer, element.querySelector('input').value);
		searchContainer.querySelector('#search-index').innerHTML = DocumentSearch.index(documentContainer);
	}
	function searchScroll(direction) {
		DocumentSearch.scroll(element, direction);
		element.querySelector('#search-index').innerHTML = DocumentSearch.index(documentContainer);
	}
	function goto(link) {
		const path = link.getAttribute('path');
		const entry = MainMenu.getEntryByPath(MainMenu.DATA, path);
		if (entry) Router.goto(entry.uri);
	}

	// documents can be very heavy, so they are removed once we navigate away
	function clear() {
		documentContainer.innerHTML = '';
	}

	function template(params) {
		return `
		<header>
			<button class="fab ripple" onclick="Router.back();DocumentPage.clear();"><span class="material-symbols-outlined">arrow_back</span></button>
			<div class="col">
				<h5 i18n>${params.subHeader}</h5>
				<h3 i18n>${params.header}</h3>
			</div>

			<!-- a bit of an unfortunate positioning, but I'll live with it -->
			<div id="document-actions" class="actions-container">
				<button class="fab ripple" onclick="DocumentOutline.toggle(true)"><span class="material-symbols-outlined">format_align_left</span></button>
				<button class="fab ripple" onclick="DocumentPage.toggleSearchMode(true)"><span class="material-symbols-outlined">search</span></button>
			</div>

			<div class="actions-container search-container">
				<input onchange="DocumentPage.search()" placeholder="Search">
				<span id="search-index"></span>
				<button class="fab ripple" onclick="DocumentPage.searchScroll(false)"><span class="material-symbols-outlined">expand_less</span></button>
				<button class="fab ripple" onclick="DocumentPage.searchScroll(true)"><span class="material-symbols-outlined">expand_more</span></button>
				<button class="fab ripple" onclick="DocumentPage.toggleSearchMode(false)"><span class="material-symbols-outlined">close</span></button>
			</div>

			<!-- document outline -->
			<aside></aside>

			<loading class="show"></loading>
		</header>

		<!-- document is rendered asynchronously, and is injected after that completes -->
		<main></main>
		`.trim();
	}

	return {
		init,
		clear,

		sectionExpandCollapse,
		goto,
		toggleSearchMode,
		search,
		searchScroll,
	}

})();
