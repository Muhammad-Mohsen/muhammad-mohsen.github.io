// DateTime extensions related to coptic dates

Date.SUNDAY = 0;
Date.MONDAY = 1;
Date.TUESDAY = 2;
Date.WEDNESDAY = 3;
Date.THURSDAY = 4;
Date.FRIDAY = 5;
Date.SATURDAY = 6;

Date.COPTIC_MONTHS = [
	'', // no zero-indexed month for you...this ain't java

	// Akhet
	'Thouut', // 1 THOOUT
	'Paope', // 2 PAOPE
	'Hathor', // 3 HATHOR
	'Koiahk', // 4 KOIAHK

	// Proyet, Peret, or Poret
	'Tobe', // 5 TOBE
	'Meshir', // 6 // MESHIR
	'Paremhotep', // 7 PAREMHOTEP
	'Parmoute', // 8 PARMOUTE

	// Shomu or Shemu
	'Pashons', // 9 PASHONS
	'Paone', // 10 PAONE
	'Epep', // 11 EPEP
	'Mesore', // 12 MESORE

	'Nesi' // 13 NESI this guy is the 13th month and it has 5 or 6 days
];

// this is guaranteed to work (it uses Intl...not mylogic :D)
Date.prototype.toCoptic = function () {
	let date = new Intl.DateTimeFormat('en', { calendar:'coptic', weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'}).format(this);
	const [month, day, year] = date.match(/[0-9]{4}|[0-9]{2}/g);
	const weekday = date.split(',')[0];

	return { year, month, day, weekday };
}

/**
 * I'm sure this will fail in some cases (leap years, maybe?)
 *
 * @param {number} copticMonth
 * @param {number} copticDay
 * @returns Date
 */
Date.fromCoptic = (copticMonth, copticDay) => {
	// just figure out the difference between today's coptic date and the one we want (assuming the same year)...
	const copticToday = new Date().toCoptic();
	const dayDiff = (copticToday.month - copticMonth) * 30 + (copticToday.day - copticDay);

	// ...and just slap it on top of the current greg date
	const gregorianDate = new Date();
	gregorianDate.setDate(gregorianDate.getDate() - dayDiff);

	return gregorianDate;
}

// Intl's 'long' date style doesn't exactly work on mobile...the month names aren't there :D
Date.prototype.formatCoptic = function (hideWeekday) {
	const { weekday, day, month, year } = this.toCoptic();
	return `${hideWeekday ? '' : (weekday + ', ')}${Date.COPTIC_MONTHS[parseInt(month)]} ${day}, ${year}`
}

Date.prototype.formatGregorian = function (dateStyle) {
	return new Intl.DateTimeFormat('en', { calendar:'gregory', dateStyle: dateStyle || 'long'}).format(this);
}

Date.prototype.addDays = function (daysToAdd) {
	const newDate = new Date(this);
	newDate.setDate(newDate.getDate() + daysToAdd);
	return newDate;
}
Date.prototype.addWeeks = function (weeksToAdd) {
	return this.addDays(weeksToAdd * 7);
}
Date.prototype.addYears = function (yearsToAdd) {
	// of course leap years aren't considered because we're in coptic world anyway and it shouldn't matter much
	return this.addDays(365 * yearsToAdd);
}
Date.prototype.firstSundayOfMonth = function () {
	const firstDayOfWeek = this.getDay();
	if (firstDayOfWeek == Date.SUNDAY) return this; // already on Sunday, we're good

	const daysToAdd = 7 - firstDayOfWeek;
	return this.addDays(daysToAdd);
}
Date.isLeap = function (copticYear) {
	// coptic leap day is added to the preceding year, that's why we + 1...they don't seem to be doing the 100 year correction thing
	return (copticYear + 1) % 4 != 0;
}

Date.prototype.isBetween = function (from, to) {
	if (from > to) to = to.addDays(365);
	return this >= from && this <= to;
}

// to set date inputs directly
Date.prototype.value = function () {
	return this.toJSON().substring(0, 10);
}

// not currently localized
Date.prototype.getDateOrdinal = function () {
	const suffixes = new Map([
		['one', 'st'],
		['two', 'nd'],
		['few', 'rd'],
		['other', 'th'],
	]);

	const rules = new Intl.PluralRules('en-US', { type: 'ordinal' });

	const today = this.getDate();
	const rule = rules.select(today);
	return `${today}${suffixes.get(rule)}`;
}

Date.prototype.equals = function (arg0, arg1) {
	if (arg0 instanceof Date) {
		return this.getMonth() == arg0.getMonth() && this.getDate() == arg0.getDate();

	} else if (arg0 && arg1) {
		const date = Date.fromCoptic(arg0, arg1);
		return this.getMonth() == date.getMonth() && this.getDate() == date.getDate();
	}
}
