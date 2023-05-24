// DateTime extensions

// TODO use Intl functions to do the conversions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
Date.prototype.toCoptic = function () {
	const fullDate = new Intl.DateTimeFormat('en', { calendar:'coptic', dateStyle:'full'}).format(this);
	return fullDate.substring(0, fullDate.indexOf('ERA') - 1);
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
