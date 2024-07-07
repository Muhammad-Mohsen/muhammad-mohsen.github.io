import { Occasions } from "../../data/occasions.js";
import { Seasons } from "../../data/seasons.js";
import { SettingsPage } from "../settings/settings.js";
import { SaintEvaluator } from "./saint-evaluator.js";

/* season expressions
1. Thoout.1-Meshir.30
2. VesperPraises
3.1 !Feasts ^ !Sundays ^ !GreatFast ^ !JonahFast ^ !PentecostPeriod
3.2 ChurchConsecration ^ !Vespers
3.3 NativityPeriod | NativityParamoun | Circumcision
3.4 PreAscensionPentecostPeriod ^ !(Liturgy ^ ThomasSunday ^ DisplayNonCustomaryPrayers) // !!!WTF
*/

export const SeasonEvaluator = (() => {

	let element, copticDate;

	// takes the actual XML element because it needs to traverse up the tree to check forced seasons :)
	function exec(elem, date) {
		if (!elem.getRootNode().documentElement) return true; // already removed
		element = elem;
		copticDate = date;

		let expression = element.getAttribute('id');
		const tokens = expression.replace(/[(\^)|!]/g, '').replace(/\s{2,}/g, ' ').split(' ');

		tokens.forEach(t => expression = expression.replace(new RegExp(`\\b${t}\\b`, 'gi'), isInSeason(t))); // evaluate each token into the expression
		expression = expression.replace(/\|/g, '||').replace(/\^/g, '&&'); // replace stupid operators with real ones

		return Function(`return ${expression}`)(); // better than calling eval!
	}

	function isInSeason(token, noReflection) {

		if (isForced(token.replace(/:w+/, ':All'))) return true; // check forced seasons (including saints)
		if (isDocumentAttrSeason(token)) return isDocumentAttr(token); // check document attrs

		// I don't really know what that is to be honest
		if (token != 'DisplayNonCustomaryPrayers' && isForced('All')) return true;
		if (token != 'DisplayNonCustomaryPrayers' && token != 'Other' && !SaintEvaluator.isSaint(token) && isForced('IgnoreCurrentSeason')) return false;

		// customary prayers
		const displayNonCustomaryPrayers = SettingsPage.get().nonCustomaryPrayers;
		if (isForced('Joyful29thOfTheMonthRaw') && token == 'Joyful29thOfTheMonth') return displayNonCustomaryPrayers;
		if (token == 'Annunciation') return !displayNonCustomaryPrayers;

		if (SaintEvaluator.isSaint(token)) return SaintEvaluator.exec(token, copticDate);

		// if token is date, check if current date is between the range in token
		if (isCopticDate(token)) return isDateInRange(token);

		if (noReflection) {
			for (let s of Seasons.children(token)) {
				if (isInSeason(s)) return true;
			}

			return false;
		}

		// else do the reflection thing :)
		return Function(`return SeasonEvaluator.is${token}()`)();
	}

	 // DONE - <ForceSeason id="{simple_expression}">
	function isForced(season) {
		if (!element) return false;

		let current = element, parent, forced = [];

		// get the upstream forced seasons in the document
		while (parent = current.parentElement) {
			current = parent;

			if (parent.tagName.toLowerCase() != 'forceseason') continue;
			forced.push(parent.getAttribute('id'));
		}

		// if it's a saint season, change it to "Saint:All" before comparing
		season = SaintEvaluator.isSaint(season) ? season.split(':').shift() + ':All' : season;

		return forced.join(' ').includes(season);
	}
	function isDocumentAttr(season) {
		if (!element) return false;
		return element.getRootNode().documentElement.hasAttribute(season);
	}
	function isDocumentAttrSeason(season) {
		return Seasons.documentAttrSeasons().find(s => s.id == season);
	}

	// from saint-evaluator
	// can be called with a full-on date object, or month + day ints
	function isDate(arg0, arg1) {
		// if arg0 is date, then compare directly
		if (arg0 instanceof Date) return copticDate.getMonth() == arg0.getMonth() && copticDate.getDate() == arg0.getDate();
		else return copticDate.getMonth() == arg0 && copticDate.getDate() == arg1;
	}
	function isCopticDate(str) {
		return str.includes('.');
	}

	function isDateInRange(from, to, bool) {
		if (typeof from == 'string') {
			if (isSpecialSeason(from)) return evaluateSpecialSeason(from);
			if (isSundaySeason(from)) return evaluateSundaySeason(from);

			[from, to] = from.split('-');

			let [fm, fd] = from.split('.');
			from = from.toLowerCase() == 'nesi.6' ? Occasions.NEW_YEAR_NEXT_YEAR : Date.fromCoptic(Date.COPTIC_MONTHS.indexOf(fm), fd);

			if (!to) return copticDate.equals(from);

			let [tm, td] = to.split('.');
			to = to.toLowerCase() == 'nesi.6' ? Occasions.NEW_YEAR_NEXT_YEAR : Date.fromCoptic(Date.COPTIC_MONTHS.indexOf(tm), td);
		}

		if (from > to) to = to.addYears(1);
		if (!bool) to = to.addDays(-1); // ??
		return copticDate.isBetween(from, to);
	}

	function evaluateSpecialSeason(str) { // DONE
		let startFrom = Occasions.RESURRECTION;
		if (isJonahFastSpecialSeason(str)) startFrom = Occasions.JONAH_FAST_BEGIN;
		else if (isGreatFastSpecialSeason(str)) startFrom = Occasions.GREAT_FAST_MONDAY_1;

		const addedDays = parseInt(str.split('.')?.[1]) - 1;
		if (!addedDays) return false;

		return copticDate.equals(startFrom.addDays(addedDays));
	}
	function isSpecialSeason(str) {  // DONE
		if (!isCopticDate(str)) return false;
		if (isJonahFastSpecialSeason(str) || isGreatFastSpecialSeason(str) || isPentecostPeriodSpecialSeason(str)) {
			return true;
		}
		return false;
	}

	function evaluateSundaySeason(str) { // DONE
		const [m, d] = str.split('.');
		const month = Date.COPTIC_MONTHS.indexOf(m);
		const nthSunday = parseInt(d.substring(0, 1));
		const date = Date.fromCoptic(month, 1).firstSundayOfMonth();

		return isDate(date.addWeeks(nthSunday - 1));
	}
	function isSundaySeason(str) { return isCopticDate(str) && str.includes("Sunday"); }
	function isJonahFastSpecialSeason(str) { return str.includes('JonahFast'); }
	function isGreatFastSpecialSeason(str) { return str.includes('GreatFast'); }
	function isPentecostPeriodSpecialSeason(str) { return str.includes('PentecostPeriod'); }
	function isHosannaSundayFirstLiturgyGospel() { return false; }
	function isOther() { return true; }

	function isSeasonOfHerbs() { return isDateInRange(Occasions.PAOPE_10, Occasions.TOBE_11, false); }
	function isSeasonOfAirAndFruits() { return isDateInRange(Occasions.TOBE_11, Occasions.PAONE_12, false); }
	function isSeasonOfWaters() { return !isSeasonOfHerbs() && !isSeasonOfAirAndFruits(); }

	function getFirstDayOfKoiahk() { return Occasions.KOIAHK_1 < Occasions.FIRST_SUNDAY_OF_KOIAHK ? Occasions.KOIAHK_1 : Occasions.FIRST_SUNDAY_OF_KOIAHK; }

	function isGregorianDay(i) { return copticDate.getDay() == i; }
	function isCopticDay(i) { return copticDate.toCoptic().day == i; }

	function isMondays(bool) {
		if (isSundayEveningService()) return false;
		return isCopticDay(Date.MONDAY, bool);
	}
	function isTodayMondays() { return isMondays(true); }
	function isTuesdays() { return isCopticDay(Date.TUESDAY, false); }
	function isTodayTuesdays() { return isCopticDay(Date.TUESDAY, true); }
	function isWednesdays() { return isCopticDay(Date.WEDNESDAY, false); }
	function isTodayWednesdays() { return isCopticDay(Date.WEDNESDAY, true); }
	function isThursdays() { return isCopticDay(Date.THURSDAY, false); }
	function isTodayThursdays() { return isCopticDay(Date.THURSDAY, true); }
	function isFridays() { return isCopticDay(Date.FRIDAY, false); }
	function isTodayFridays() { return isCopticDay(Date.FRIDAY, true); }
	function isSaturdays() { return isCopticDay(Date.SATURDAY, false); }
	function isTodaySaturdays() { return isCopticDay(Date.SATURDAY, true); }
	function isSundays(bool) {
		if (isSundayEveningService()) return true;
		return isCopticDay(Date.SUNDAY, bool);
	}
	function isTodaySundays() { return isSundays(true); }
	function isCopticSunday() { return isTodaySundays(); }

	function isSundayEveningService() {
		return isInSeason('Vespers') && isGreatFast() && isCopticDay(Date.MONDAY) && isGregorianDay(Date.SUNDAY);
	}
	function isVesperPraises() {
		return isInSeason('VesperPraises');
	}
	function isPriestsOnly() {
		return isInSeason('PriestsOnly');
	}
	function isFuneralTune() {
		return !isFeast() && (copticDate.getDay() != Date.SUNDAY || isInSeason('Fasts', 'noreflection'));
	}

	function isDayBefore(date1, date2) {
		return date2.addDays(-1).equals(date1);
	}

	function isDayBeforeMajorNightFeast(date) {
		date = date || copticDate;
		return isDayBefore(date, Occasions.NATIVITY_CELEBRATE) || isDayBefore(date, Occasions.THEOPHANY) || isDayBefore(date, Occasions.RESURRECTION);
	}

	function isMajorNightFeasts() {
		return isNativity() || isTheophany() || isResurrection();
	}

	function isAnnunciationRaw() {
		return copticDate.equals(Occasions.ANNUNCIATION) && !isDateInRange(Occasions.LAST_FRIDAY_OF_GREAT_FAST, Occasions.DAY_AFTER_RESURRECTION, true);
	}

	function isAnnunciation() {
		return isAnnunciationRaw() || (isJoyful29thOfTheMonthRaw() && !isDisplayNonCustomaryPrayers());
	}

	function isCopticNewYear() {
		return isDate(Occasions.NEW_YEAR) || isDate(Occasions.NEW_YEAR_NEXT_YEAR);
	}

	function isCopticNewYearPeriod() {
		return isCopticNewYear() || isDateInRange(Occasions.NEW_YEAR, Occasions.THOOUT_FEAST_CROSS_1, false);
	}

	function isNativityFast() {
		return isDateInRange(Occasions.NATIVITY_FAST_BEGIN, Occasions.NATIVITY_START, false);
	}

	function isNativity() {
		return isDateInRange(Occasions.NATIVITY_START, Occasions.NATIVITY_END, true);
	}

	function isDayAfterNativity() {
		return isDate(Occasions.DAY_AFTER_NATIVITY);
	}

	function isNativityPeriod() {
		return isDateInRange(Occasions.NATIVITY_START, Occasions.CIRCUMCISION, false);
	}

	function isCircumcision() {
		return isDate(Occasions.CIRCUMCISION);
	}

	function isTheophany() {
		return isDate(Occasions.THEOPHANY);
	}

	function isDayAfterTheophany() {
		return isDate(Occasions.DAY_AFTER_THEOPHANY);
	}

	function isDayAfterResurrection() {
		return isDate(Occasions.DAY_AFTER_RESURRECTION);
	}

	function isWeddingCana() {
		return isDate(Occasions.WEDDING_CANA);
	}

	function isTheophanyPeriod() {
		return isDateInRange(Occasions.THEOPHANY, Occasions.WEDDING_CANA, false);
	}

	function isPresentationInTemple() {
		return isDate(Occasions.PRESENTATION_IN_TEMPLE);
	}

	function isEntranceOfTheLordChrist() {
		return isDate(Occasions.ENTRANCE_LORD_CHRIST);
	}

	function isTransfiguration() {
		return isDate(Occasions.TRANSFIGURATION);
	}

	function isApostlesFeast() {
		return isDate(Occasions.APOSTLES_FEAST) && !isJoyful29thOfTheMonthRaw();
	}

	function isThooutFeastOfTheCross1() {
		return isDate(Occasions.THOOUT_FEAST_CROSS_1);
	}

	function isThooutFeastOfTheCross2() {
		return isDate(Occasions.THOOUT_FEAST_CROSS_2);
	}

	function isThooutFeastOfTheCross3() {
		return isDate(Occasions.THOOUT_FEAST_CROSS_3);
	}

	function isParemhotepFeastOfTheCross() {
		return isDate(Occasions.PAREMHOTEP_FEAST_CROSS);
	}

	function isFeastOfTheCross() {
		return isDateInRange(Occasions.THOOUT_FEAST_CROSS_1, Occasions.THOOUT_FEAST_CROSS_3, true) || isParemhotepFeastOfTheCross();
	}

	function isJonahFast() {
		return isDateInRange(Occasions.JONAH_FAST_BEGIN, Occasions.JONAH_FAST_END, true);
	}

	function isJonahPassover() {
		return isDate(Occasions.JONAH_PASSOVER);
	}

	function isGreatFast() {
		return isDateInRange(Occasions.GREAT_FAST_BEGIN, Occasions.LAZARUS_SATURDAY, false) && !isFeast();
	}

	function isLazarusSaturday() {
		return isDate(Occasions.LAZARUS_SATURDAY) && !isFeast();
	}

	function isLastFridayOfGreatFast() {
		return isDate(Occasions.LAST_FRIDAY_OF_GREAT_FAST) && !isFeast();
	}

	function isHosannaSunday() {
		return isDate(Occasions.HOSANNA_SUNDAY);
	}

	function isPaschaWeek() {
		return isDateInRange(Occasions.PASCHA_BEGIN, Occasions.JOYOUS_SATURDAY, true);
	}

	function isCovenantThursday() {
		return isDate(Occasions.COVENANT_THURSDAY);
	}

	function isGreatFriday() {
		return isDate(Occasions.GREAT_FRIDAY);
	}

	function isJoyousSaturday() {
		return isDate(Occasions.JOYOUS_SATURDAY);
	}

	function isResurrection() {
		return isDate(Occasions.RESURRECTION);
	}

	function isPreAscensionPentecostPeriod() {
		return isDateInRange(Occasions.RESURRECTION, Occasions.ASCENSION, false);
	}

	function isThomasSunday() {
		return isDate(Occasions.THOMAS_SUNDAY);
	}

	function isAscension() {
		return isDate(Occasions.ASCENSION);
	}

	function isPostAscensionPentecostPeriod() {
		return isDateInRange(Occasions.ASCENSION, Occasions.PENTECOST_FEAST, false);
	}

	function isPentecost() {
		return isDate(Occasions.PENTECOST_FEAST);
	}

	function isApostlesFast() {
		return isDateInRange(Occasions.APOSTLES_FAST_BEGIN, Occasions.APOSTLES_FEAST, false) && !isJoyful29thOfTheMonthRaw();
	}

	function isGreatFastSaturday0() {
		return isDate(Occasions.GREAT_FAST_SATURDAY_0);
	}

	function isGreatFastSunday0() {
		return isDate(Occasions.GREAT_FAST_SUNDAY_0);
	}

	function isGreatFastWeek1() {
		return isDateInRange(Occasions.GREAT_FAST_MONDAY_1, Occasions.GREAT_FAST_SUNDAY_1, true);
	}

	function isGreatFastWeek2() {
		return isDateInRange(Occasions.GREAT_FAST_MONDAY_2, Occasions.GREAT_FAST_SUNDAY_2, true);
	}

	function isGreatFastWeek3() {
		return isDateInRange(Occasions.GREAT_FAST_MONDAY_3, Occasions.GREAT_FAST_SUNDAY_3, true);
	}

	function isGreatFastWeek4() {
		return isDateInRange(Occasions.GREAT_FAST_MONDAY_4, Occasions.GREAT_FAST_SUNDAY_4, true);
	}

	function isGreatFastWeek5() {
		return isDateInRange(Occasions.GREAT_FAST_MONDAY_5, Occasions.GREAT_FAST_SUNDAY_5, true);
	}

	function isGreatFastWeek6() {
		return isDateInRange(Occasions.GREAT_FAST_MONDAY_6, Occasions.GREAT_FAST_SUNDAY_6, true);
	}

	function isGreatFastWeek7() {
		return isDateInRange(Occasions.GREAT_FAST_MONDAY_7, Occasions.LAST_FRIDAY_OF_GREAT_FAST, true);
	}

	function isGreatFastSunday1() {
		return isDate(Occasions.GREAT_FAST_SUNDAY_1);
	}

	function isGreatFastSunday2() {
		return isDate(Occasions.GREAT_FAST_SUNDAY_2);
	}

	function isGreatFastSunday3() {
		return isDate(Occasions.GREAT_FAST_SUNDAY_3);
	}

	function isGreatFastSunday4() {
		return isDate(Occasions.GREAT_FAST_SUNDAY_4);
	}

	function isGreatFastSunday5() {
		return isDate(Occasions.GREAT_FAST_SUNDAY_5);
	}

	function isGreatFastSunday6() {
		return isDate(Occasions.GREAT_FAST_SUNDAY_6);
	}

	function isPentecostWeek1() {
		return isDateInRange(Occasions.DAY_AFTER_RESURRECTION, Occasions.THOMAS_SUNDAY, true);
	}

	function isPentecostWeek2() {
		return isDateInRange(Occasions.PENTECOST_MONDAY_2, Occasions.PENTECOST_SUNDAY_2, true);
	}

	function isPentecostWeek3() {
		return isDateInRange(Occasions.PENTECOST_MONDAY_3, Occasions.PENTECOST_SUNDAY_3, true);
	}

	function isPentecostWeek4() {
		return isDateInRange(Occasions.PENTECOST_MONDAY_4, Occasions.PENTECOST_SUNDAY_4, true);
	}

	function isPentecostWeek5() {
		return isDateInRange(Occasions.PENTECOST_MONDAY_5, Occasions.PENTECOST_SUNDAY_5, true);
	}

	function isPentecostWeek6() {
		return isDateInRange(Occasions.PENTECOST_MONDAY_6, Occasions.PENTECOST_SUNDAY_6, true);
	}

	function isPentecostWeek7() {
		return isDateInRange(Occasions.PENTECOST_MONDAY_7, Occasions.PENTECOST_FEAST, true);
	}

	function isPentecostSunday2() {
		return isDate(Occasions.PENTECOST_SUNDAY_2);
	}

	function isPentecostSunday3() {
		return isDate(Occasions.PENTECOST_SUNDAY_3);
	}

	function isPentecostSunday4() {
		return isDate(Occasions.PENTECOST_SUNDAY_4);
	}

	function isPentecostSunday5() {
		return isDate(Occasions.PENTECOST_SUNDAY_5);
	}

	function isPentecostSunday6() {
		return isDate(Occasions.PENTECOST_SUNDAY_6);
	}

	function isJoyful29thOfTheMonthRaw() {
		if (isFirstSundayOfKoiahk() || isMajorFeast() || isInSeason('MinorFeastsOfTheLord', 'noreflection') || isNativityPeriod() || isTheophanyPeriod()) {
			return false;
		}
		if (isDate(Occasions.THOOUT_29) || isDate(Occasions.PAOPE_29) || isDate(Occasions.HATHOR_29) || isDate(Occasions.PARMOUTE_29) || isDate(Occasions.PASHONS_29) || isDate(Occasions.PAONE_29) || isDate(Occasions.EPEP_29) || isDate(Occasions.MESORE_29)) {
			return true;
		}
		return false;
	}

	function isJoyful29thOfTheMonth() {
		return isDisplayNonCustomaryPrayers() && isJoyful29thOfTheMonthRaw();
	}

	function isAdamDays() {
		if (isInSeason('RaisingOfIncense', 'noreflection')) {
			if (isGregorianDay(Date.SUNDAY) || isGregorianDay(Date.MONDAY) || isGregorianDay(Date.TUESDAY)) {
				return true;
			}
			return false;
		} else if (isSundays() || isMondays() || isTuesdays()) {
			return true;
		} else {
			return false;
		}
	}

	function isWatosDays() {
		return !isAdamDays();
	}

	function isWeekdays() {
		return isMondays() || isTuesdays() || isWednesdays() || isThursdays() || isFridays();
	}
	function isWeekend() {
		return isSaturdays() || isSundays();
	}

	function isFeast() {
		return isInSeason('Feasts', 'noreflection');
	}
	function isFeastsOfTheLordPeriods() {
		isInSeason('FeastsOfTheLordPeriods', 'noreflection');
	}
	function isMinorFeastsOfTheLord() {
		isInSeason('MinorFeastsOfTheLord', 'noreflection');
	}
	function isFasts() {
		return isInSeason('Fasts', 'noreflection');
	}

	function isWeekdayFastingDays() {
		if (isMajorFeast()) return false;
		if (isWednesdays() || isFridays()) return true;

		return false;
	}

	function isMajorFeast() {
		return isAnnunciationRaw() || isNativity() || isTheophany() || isHosannaSunday() || isResurrection() || isAscension() || isPentecost() || isPentecostPeriod();
	}

	function isApostlesFastToLastDayOfHathor() {
		return !isKoiahkSeason() && !isDateInRange(Occasions.KOIAHK_1, Occasions.APOSTLES_FAST_BEGIN, false);
	}

	function isDisplayNonCustomaryPrayers() {
		return SettingsPage.get().nonCustomaryPrayers == 'true';
	}

	function isStMaryFast() {
		return isDateInRange(Occasions.STMARY_FAST_BEGIN, Occasions.MESORE_16, false);
	}

	function isAssumptionStMary() {
		return isDate(Occasions.MESORE_16);
	}
	function isStMaryFeast() {
		return isDate(Occasions.MESORE_7) || isDate(Occasions.PASHONS_1) || isDate(Occasions.KOIAHK_3) || isDate(Occasions.TOBE_21) || isAssumptionStMary() || isDate(Occasions.PAONE_21) || isDate(Occasions.PAREMHOTEP_24);
	}

	function isStMaryCommemoration() {
		return copticDate.toCoptic().day == 21;
	}

	function isThoout() { return copticDate.toCoptic().month == 1; }
	function isPaope() { return copticDate.toCoptic().month == 2; }
	function isHathor() { return copticDate.toCoptic().month == 3; }
	function isKoiahk() { return copticDate.toCoptic().month == 4; }
	function isTobe() { return copticDate.toCoptic().month == 5; }
	function isMeshir() { return copticDate.toCoptic().month == 6; }
	function isParemhotep() { return copticDate.toCoptic().month == 7; }
	function isParmoute() { return copticDate.toCoptic().month == 8; }
	function isPashons() { return copticDate.toCoptic().month == 9; }
	function isPaone() { return copticDate.toCoptic().month == 10; }
	function isEpep() { return copticDate.toCoptic().month == 11; }
	function isMesore() { return copticDate.toCoptic().month == 12; }
	function isNesi() { return copticDate.toCoptic().month == 13; }

	function isFirstSundayOfThoout() {
		return isDate(Occasions.FIRST_SUNDAY_OF_THOOUT);
	}

	function isSecondSundayOfThoout() {
		return isDate(Occasions.SECOND_SUNDAY_OF_THOOUT);
	}

	function isThirdSundayOfThoout() {
		return isDate(Occasions.THIRD_SUNDAY_OF_THOOUT);
	}

	function isFourthSundayOfThoout() {
		return isDate(Occasions.FOURTH_SUNDAY_OF_THOOUT);
	}

	function doesNesiHaveASunday() {
		const nesi = Date.fromCoptic(13, 1); // if this is a monday (or a tuesday on non-leap years), this should return false
		return ![Date.MONDAY, Date.TUESDAY].includes(nesi.getDay());
	}

	function isFirstSundayOfNesi() {
		if (doesNesiHaveASunday()) {
			return isDate(Date.fromCoptic(13, 1).firstSundayOfMonth());
		}

		return isDate(Date.fromCoptic(12, 1).firstSundayOfMonth().addWeeks(4)); // check against fifth sunday of 12
	}

	function isFirstSundayOfKoiahk() {
		return isDate(Occasions.FIRST_SUNDAY_OF_KOIAHK);
	}
	function isSecondSundayOfKoiahk() {
		return isDate(Occasions.SECOND_SUNDAY_OF_KOIAHK);
	}
	function isThirdSundayOfKoiahk() {
		return isDate(Occasions.THIRD_SUNDAY_OF_KOIAHK);
	}
	function isFourthSundayOfKoiahk() {
		return isDate(Occasions.FOURTH_SUNDAY_OF_KOIAHK);
	}
	function isKoiahkSeason() {
		return isFirstWeekOfKoiahk() || isSecondWeekOfKoiahk() || isThirdWeekOfKoiahk() || isFourthWeekOfKoiahk();
	}

	function isFirstWeekOfKoiahk() {
		const firstDayOfKoiahk = getFirstDayOfKoiahk();
		return isDateInRange(firstDayOfKoiahk, firstDayOfKoiahk.addWeeks(1), false);
	}

	function isSecondWeekOfKoiahk() {
		const firstDayOfKoiahk = getFirstDayOfKoiahk();
		return isDateInRange(firstDayOfKoiahk.addWeeks(1), firstDayOfKoiahk.addWeeks(2), false);
	}

	function isThirdWeekOfKoiahk() {
		const firstDayOfKoiahk = getFirstDayOfKoiahk();
		return isDateInRange(firstDayOfKoiahk.addWeeks(2), firstDayOfKoiahk.addWeeks(3), false);
	}

	function isFourthWeekOfKoiahk() {
		return isDateInRange(getFirstDayOfKoiahk().addWeeks(3), Occasions.NATIVITY_PARAMOUN_START, false);
	}

	function isNativityParamounStart() {
		return isDate(Occasions.NATIVITY_PARAMOUN_START);
	}

	function isNativityParamoun() {
		return isDateInRange(Occasions.NATIVITY_PARAMOUN_START, Occasions.NATIVITY_PARAMOUN_END, true);
	}

	function isTodayNativityParamoun() {
		return isDateInRange(Occasions.NATIVITY_PARAMOUN_START, Occasions.NATIVITY_PARAMOUN_END, true, true);
	}

	function isTheophanyParamounStart() {
		return isDate(Occasions.THEOPHANY_PARAMOUN_START);
	}

	function isTheophanyParamoun() {
		return isDateInRange(Occasions.THEOPHANY_PARAMOUN_START, Occasions.THEOPHANY_PARAMOUN_END, true);
	}

	function isTodayTheophanyParamoun() {
		return isDateInRange(Occasions.THEOPHANY_PARAMOUN_START, Occasions.THEOPHANY_PARAMOUN_END, true, true);
	}

	function isFifthSunday() {
		const monthOfYear = copticDate.getMonth();
		return (monthOfYear != 12 || doesNesiHaveASunday()) && !isFourthSundayOfThoout() && isCopticSunday() && copticDate.getDate() > 28;
	}

	function is5thSundayOfFirstSixMonths() {
		if (!isFifthSunday()) {
			return false;
		}
		const monthOfYear = copticDate.getMonth();

		if (monthOfYear != 1) {
			const monthOfYear2 = copticDate.getMonth();

			if (monthOfYear2 != 2) {
				const monthOfYear3 = copticDate.getMonth();

				if (monthOfYear3 != 3) {
					const monthOfYear4 = copticDate.getMonth();

					if (monthOfYear4 != 4) {
						const monthOfYear5 = copticDate.getMonth();

						if (monthOfYear5 != 5) {
							const monthOfYear6 = copticDate.getMonth();

							if (monthOfYear6 == 6) {
								return true;
							}
							return false;
						}
					}
				}
			}
		}
		return true;
	}

	function is5thSundayOfLastSixMonths() {
		if (!isFifthSunday()) {
			return false;
		}
		const monthOfYear = copticDate.getMonth();

		if (monthOfYear != 9) {
			const monthOfYear2 = copticDate.getMonth();

			if (monthOfYear2 != 10) {
				const monthOfYear3 = copticDate.getMonth();

				if (monthOfYear3 != 11) {
					const monthOfYear4 = copticDate.getMonth();

					if (monthOfYear4 != 12) {
						const monthOfYear5 = copticDate.getMonth();

						if (monthOfYear5 != 7) {
							const monthOfYear6 = copticDate.getMonth();

							if (monthOfYear6 == 8) {
								return true;
							}
							return false;
						}
					}
				}
			}
		}
		return true;
	}

	function isPentecostPeriod() {
		return isInSeason('PentecostPeriod', 'noreflection');
	}

	// used in selectable-occasions
	function getAssumptionStMary() { return Occasions.MESORE_16; }
	function getAnnunciation() { return Occasions.ANNUNCIATION; }
	function getNativity() { return Occasions.NATIVITY_CELEBRATE; }
	function getTheophany() { return Occasions.THEOPHANY; }
	function getHosannaSunday() { return Occasions.HOSANNA_SUNDAY; }
	function getResurrection() { return Occasions.RESURRECTION; }
	function getAscension() { return Occasions.ASCENSION; }
	function getPentecost() { return Occasions.PENTECOST_FEAST; }
	function getCircumcision() { return Occasions.CIRCUMCISION; }
	function getPresentationInTemple() { return Occasions.PRESENTATION_IN_TEMPLE; }
	function getEntranceOfTheLordChrist() { return Occasions.ENTRANCE_LORD_CHRIST; }
	function getWeddingCana() { return Occasions.WEDDING_CANA; }
	function getTransfiguration() { return Occasions.TRANSFIGURATION; }
	function getCovenantThursday() { return Occasions.COVENANT_THURSDAY; }
	function getGreatFriday() { return Occasions.GREAT_FRIDAY; }
	function getThomasSunday() { return Occasions.THOMAS_SUNDAY; }
	function getFeastOfTheCross() { return Occasions.THOOUT_FEAST_CROSS_1; }
	function getParemhotepFeastOfTheCross() { return Occasions.PAREMHOTEP_FEAST_CROSS; }
	function getApostlesFeast() { return Occasions.APOSTLES_FEAST; }
	function getCopticNewYear() { return Occasions.NEW_YEAR; }
	function getJoyousSaturday() { return Occasions.JOYOUS_SATURDAY; }
	function getLastFridayOfGreatFast() { return Occasions.LAST_FRIDAY_OF_GREAT_FAST; }
	function getGreatFastSaturday0() { return Occasions.GREAT_FAST_SATURDAY_0; }
	function getGreatFastSunday0() { return Occasions.GREAT_FAST_SUNDAY_0; }
	function getGreatFastSunday1() { return Occasions.GREAT_FAST_SUNDAY_1; }
	function getGreatFastSunday2() { return Occasions.GREAT_FAST_SUNDAY_2; }
	function getGreatFastSunday3() { return Occasions.GREAT_FAST_SUNDAY_3; }
	function getGreatFastSunday4() { return Occasions.GREAT_FAST_SUNDAY_4; }
	function getGreatFastSunday5() { return Occasions.GREAT_FAST_SUNDAY_5; }
	function getGreatFastSunday6() { return Occasions.GREAT_FAST_SUNDAY_6; }
	function getPentecostSunday2() { return Occasions.PENTECOST_SUNDAY_2; }
	function getPentecostSunday3() { return Occasions.PENTECOST_SUNDAY_3; }
	function getPentecostSunday4() { return Occasions.PENTECOST_SUNDAY_4; }
	function getPentecostSunday5() { return Occasions.PENTECOST_SUNDAY_5; }
	function getPentecostSunday6() { return Occasions.PENTECOST_SUNDAY_6; }
	function getFirstSundayOfKoiahk() { return Occasions.FIRST_SUNDAY_OF_KOIAHK; }
	function getSecondSundayOfKoiahk() { return Occasions.SECOND_SUNDAY_OF_KOIAHK; }
	function getThirdSundayOfKoiahk() { return Occasions.THIRD_SUNDAY_OF_KOIAHK; }
	function getFourthSundayOfKoiahk() { return Occasions.FOURTH_SUNDAY_OF_KOIAHK; }
	function getNativityParamoun() { return Occasions.NATIVITY_PARAMOUN_START; }
	function getTheophanyParamoun() { return Occasions.THEOPHANY_PARAMOUN_START; }
	function getDayAfterTheophany() { return Occasions.DAY_AFTER_THEOPHANY; }
	function getDayAfterNativity() { return Occasions.DAY_AFTER_NATIVITY; }
	function getDayAfterResurrection() { return Occasions.DAY_AFTER_RESURRECTION; }
	function getJonahPassover() { return Occasions.JONAH_PASSOVER; }
	function getLazarusSaturday() { return Occasions.LAZARUS_SATURDAY; }
	function getJonahFast() { return Occasions.JONAH_FAST_BEGIN; }

	function getStBasilId() { return "StBasilLiturgy"; }
	function getStCyrilId() { return "StCyrilLiturgy"; }
	function getStGregoryId() { return "StGregoryLiturgy"; }

	// fuck me
	return {
		exec,

		isInSeason,
		isForced,
		isDocumentAttr,
		isDocumentAttrSeason,
		isDate,
		isCopticDate,
		isDateInRange,
		evaluateSpecialSeason,
		isSpecialSeason,
		evaluateSundaySeason,
		isSundaySeason,
		isJonahFastSpecialSeason,
		isGreatFastSpecialSeason,
		isPentecostPeriodSpecialSeason,
		isHosannaSundayFirstLiturgyGospel,
		isOther,
		isSeasonOfHerbs,
		isSeasonOfAirAndFruits,
		isSeasonOfWaters,
		getFirstDayOfKoiahk,
		isGregorianDay,
		isCopticDay,
		isMondays,
		isTodayMondays,
		isTuesdays,
		isTodayTuesdays,
		isWednesdays,
		isTodayWednesdays,
		isThursdays,
		isTodayThursdays,
		isFridays,
		isTodayFridays,
		isSaturdays,
		isTodaySaturdays,
		isSundays,
		isTodaySundays,
		isCopticSunday,
		isSundayEveningService,
		isVesperPraises,
		isPriestsOnly,
		isFuneralTune,
		isDayBefore,
		isDayBeforeMajorNightFeast,
		isMajorNightFeasts,
		isAnnunciationRaw,
		isAnnunciation,
		isCopticNewYear,
		isCopticNewYearPeriod,
		isNativityFast,
		isNativity,
		isDayAfterNativity,
		isNativityPeriod,
		isCircumcision,
		isTheophany,
		isDayAfterTheophany,
		isDayAfterResurrection,
		isWeddingCana,
		isTheophanyPeriod,
		isPresentationInTemple,
		isEntranceOfTheLordChrist,
		isTransfiguration,
		isApostlesFeast,
		isThooutFeastOfTheCross1,
		isThooutFeastOfTheCross2,
		isThooutFeastOfTheCross3,
		isParemhotepFeastOfTheCross,
		isJonahFast,
		isJonahPassover,
		isGreatFast,
		isLazarusSaturday,
		isLastFridayOfGreatFast,
		isHosannaSunday,
		isPaschaWeek,
		isCovenantThursday,
		isGreatFriday,
		isJoyousSaturday,
		isResurrection,
		isPreAscensionPentecostPeriod,
		isThomasSunday,
		isAscension,
		isPostAscensionPentecostPeriod,
		isPentecost,
		isApostlesFast,
		isGreatFastSaturday0,
		isGreatFastSunday0,
		isGreatFastWeek1,
		isGreatFastWeek2,
		isGreatFastWeek3,
		isGreatFastWeek4,
		isGreatFastWeek5,
		isGreatFastWeek6,
		isGreatFastWeek7,
		isGreatFastSunday1,
		isGreatFastSunday2,
		isGreatFastSunday3,
		isGreatFastSunday4,
		isGreatFastSunday5,
		isGreatFastSunday6,
		isPentecostWeek1,
		isPentecostWeek2,
		isPentecostWeek3,
		isPentecostWeek4,
		isPentecostWeek5,
		isPentecostWeek6,
		isPentecostWeek7,
		isPentecostSunday2,
		isPentecostSunday3,
		isPentecostSunday4,
		isPentecostSunday5,
		isPentecostSunday6,
		isJoyful29thOfTheMonthRaw,
		isJoyful29thOfTheMonth,
		isAdamDays,
		isWatosDays,
		isWeekdays,
		isWeekend,
		isFeast,
		isFeasts: isFeast,
		isFeastOfTheCross,
		isFeastsOfTheLordPeriods,
		isMinorFeastsOfTheLord,
		isFasts,
		isWeekdayFastingDays,
		isMajorFeast,
		isApostlesFastToLastDayOfHathor,
		isDisplayNonCustomaryPrayers,
		isStMaryFast,
		isAssumptionStMary,
		isStMaryFeast,
		isStMaryCommemoration,
		isThoout,
		isPaope,
		isHathor,
		isKoiahk,
		isTobe,
		isMeshir,
		isParemhotep,
		isParmoute,
		isPashons,
		isPaone,
		isEpep,
		isMesore,
		isNesi,
		isFirstSundayOfThoout,
		isSecondSundayOfThoout,
		isThirdSundayOfThoout,
		isFourthSundayOfThoout,
		doesNesiHaveASunday,
		isFirstSundayOfNesi,
		isFirstSundayOfKoiahk,
		isSecondSundayOfKoiahk,
		isThirdSundayOfKoiahk,
		isFourthSundayOfKoiahk,
		isKoiahkSeason,
		isFirstWeekOfKoiahk,
		isSecondWeekOfKoiahk,
		isThirdWeekOfKoiahk,
		isFourthWeekOfKoiahk,
		isNativityParamounStart,
		isNativityParamoun,
		isTodayNativityParamoun,
		isTheophanyParamounStart,
		isTheophanyParamoun,
		isTodayTheophanyParamoun,
		isFifthSunday,
		is5thSundayOfFirstSixMonths,
		is5thSundayOfLastSixMonths,
		isPentecostPeriod,
		getAssumptionStMary,
		getAnnunciation,
		getNativity,
		getTheophany,
		getHosannaSunday,
		getResurrection,
		getAscension,
		getPentecost,
		getCircumcision,
		getPresentationInTemple,
		getEntranceOfTheLordChrist,
		getWeddingCana,
		getTransfiguration,
		getCovenantThursday,
		getGreatFriday,
		getThomasSunday,
		getFeastOfTheCross,
		getParemhotepFeastOfTheCross,
		getApostlesFeast,
		getCopticNewYear,
		getJoyousSaturday,
		getLastFridayOfGreatFast,
		getGreatFastSaturday0,
		getGreatFastSunday0,
		getGreatFastSunday1,
		getGreatFastSunday2,
		getGreatFastSunday3,
		getGreatFastSunday4,
		getGreatFastSunday5,
		getGreatFastSunday6,
		getPentecostSunday2,
		getPentecostSunday3,
		getPentecostSunday4,
		getPentecostSunday5,
		getPentecostSunday6,
		getFirstSundayOfKoiahk,
		getSecondSundayOfKoiahk,
		getThirdSundayOfKoiahk,
		getFourthSundayOfKoiahk,
		getNativityParamoun,
		getTheophanyParamoun,
		getDayAfterTheophany,
		getDayAfterNativity,
		getDayAfterResurrection,
		getJonahPassover,
		getLazarusSaturday,
		getJonahFast,
		getStBasilId,
		getStCyrilId,
		getStGregoryId,
	}

})();