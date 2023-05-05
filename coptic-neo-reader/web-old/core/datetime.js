// DateTime extensions

// TODO use Intl functions to do the conversions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
Date.prototype.toCoptic = () => {
	return toUTCString(); // TODO
}
Date.prototype.fromCoptic = (coptic) => {
	// TODO set the date
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