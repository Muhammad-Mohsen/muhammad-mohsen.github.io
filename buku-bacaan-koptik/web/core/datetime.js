// DateTime extensions

/*
coptic seasons & months

Akhet
	Thout
	Paopi
	Hathor
	Koiak

Proyet, Peret, Poret
	Tobi
	Meshir
	Paremhat
	Parmouti

Shomu or Shemu
	Pashons
	Paoni
	Epip
	Mesori
	Pi Kogi Enavot
*/

const MONTHS = [
	'', // no zero-indexed month...this isn't java
	'Thout',
	'Paopi',
	'Hathor',
	'Koiak',
	'Tobi',
	'Meshir',
	'Paremhat',
	'Parmouti',
	'Pashons',
	'Paoni',
	'Epip',
	'Mesori',

	'Pi Kogi Enavot' // this guy is the 13th month and it has 5 days -- current date (6/26/2023) comes back on mobile as '10/19/39'
];

// TODO use Intl functions to do the conversions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
Date.prototype.toCoptic = function () {
	let date = new Intl.DateTimeFormat('en', { calendar:'coptic', weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'}).format(this);
	const [month, day, year] = date.match(/[0-9]{4}|[0-9]{2}/g);

	return `${date.split(',')[0]}, ${MONTHS[month]} ${day}, ${year}`;
}
Date.prototype.fromCoptic = (coptic) => {
	// TODO set the date
}

Date.prototype.toGregory = function () {
	return new Intl.DateTimeFormat('en', { calendar:'gregory', dateStyle:'long'}).format(this);
}

// param can be ticks, string, or an actual date object
Date.prototype.isLessThan = function (date) {
	return this < new Date(date);
}
Date.prototype.isGreaterThan = function (date) {
	return this > new Date(date);
}
Date.prototype.isBetween = function (from, to) {
	return this > new Date(from) && this < new Date(to);
}
