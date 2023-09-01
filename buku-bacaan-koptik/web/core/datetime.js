// DateTime extensions

/*
coptic seasons & months

const COPTIC_ONE = new Date('0284-09-11T00:00:00Z')
const GREGORIAN_ONE = new Date('0001-01-01T00:00:00Z')
const EPOCH_OFFSET = 62135596800000;

var copticOne = new Date('0284-09-11T00:00:00Z')
var gregorianOne = new Date('0001-01-01T00:00:00Z')

var copticDate = new Date('1739-11-07')
var days = 7 + 11 * 30 + 1739 * 365 + parseInt(1739 / 4) // actual coptic date?
var millis = days * 24 * 60 * 60 * 1000


var diff = copticOne.getTime() - gregorianOne.getTime()


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

	'Pi Kogi Enavot' // this guy is the 13th month and it has 5 or 6 days -- current date (6/26/2023) comes back on mobile as '10/19/39'
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

// TODO - from bard! dumb bard
function convertCopticDateToGregorian(copticDate) {
	const copticYear = copticDate.year;
	const copticMonth = copticDate.month;
	const copticDay = copticDate.day;

	// The difference between the Coptic and Gregorian calendars is 28 years.
	const gregorianYear = copticYear - 28;

	// The Coptic calendar has 13 months, while the Gregorian calendar has 12.
	// The first 12 months of the Coptic calendar are the same as the Gregorian calendar.
	// The 13th month of the Coptic calendar is called Epagomenê, and it has 5 or 6 days.
	const gregorianMonth = copticMonth;
	if (copticMonth === 13) {
	  gregorianMonth = 12;
	  gregorianDay = copticDay - 5;
	} else {
	  gregorianDay = copticDay;
	}

	// return moment(`${gregorianYear}-${gregorianMonth}-${gregorianDay}`);
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
