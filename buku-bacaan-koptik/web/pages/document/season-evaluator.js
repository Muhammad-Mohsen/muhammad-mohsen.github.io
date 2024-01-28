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

remaining functions
- SaintEvaluator.isSeason
	1. no psali for you
	2. isFeast: is{saint_name}? (111 functions or something like that!!)
	3. shouldDisplayCommemorations (from settings) not implemented :D
- evaluateSeason
	1. isDateInRange (if date...i.e. has a period)
	2. isSeason another one of those idiotic is{occasion} implementations because fuck me, right!!
*/

export const SeasonEvaluator = (() => {

	let element, copticDate;

	// takes the actual XML element because it needs to traverse up the tree to check forced seasons :)
	function exec(elem, date) {
		element = elem;

		const expression = element.getAttribute('id');
		const tokens = expression.replace(/(\^)|!/g, '').replace(/\s{2,}/g, ' ').split(' ');

		copticDate = date; // TODO get today's date
		// (from original constructor)
		// setTime(isLive() ? new CrDateTime() : Globals.Instance().getUserOptions().getActualGregorianTime(), false);

		tokens.forEach(t => expression = expression.replace(new RegExp(t, 'gi'), isInSeason(t))); // evaluate each token into the expression
		expression = expression.replace(/|/g, '||').replace(/\^/g, '&&'); // replace stupid operators with real ones

		return new Function(`return ${expression}`)(); // better than calling eval!
	}

	function isInSeason(token) {

		if (isForced(token.replace(/:w+/, ':All'))) return true; // check forced seasons (including saints)
		if (isDocumentAttr(token)) return true; // check document attrs

		// I don't really know what that is to be honest
		if (token != 'DisplayNonCustomaryPrayers' && isForced('All')) return true;
		if (token != 'DisplayNonCustomaryPrayers' && token != 'Other' && !isSaint(token) && isForced('IgnoreCurrentSeason')) return false;

		// customary prayers
		const displayNonCustomaryPrayers = SettingsPage.get().nonCustomaryPrayers;
		if (isForced('Joyful29thOfTheMonthRaw') && token == 'Joyful29thOfTheMonth') return displayNonCustomaryPrayers;
		if (token == 'Annunciation') return !displayNonCustomaryPrayers;

		if (SaintEvaluator.isSaint(token)) return SaintEvaluator.exec(token, copticDate);

		// if token is date (includes '.'), check if current date is between the range in token

		// else do the reflection thing :)
		const season = Seasons.querySelector(`[id="${token}"]`);

		// flatout date (range)
		// if (token.includes('.')) {

		// }

		// const season = seasons.querySelector(`[id="${token}"]`);
		// if (!season) throw new Error('tough titties!');

		// let occasions = season.getAttribute('occasion');
		// // if there's an occasion attr on the season, we're there, otherwise, look into all child occasions
		// occasions = occasions ? [occasions] : season.querySelectorAll('[occasion]').toArray();

		// for (let o of occasions) {
		// 	// TODO if 'today' lies within 'o', return true...LOL, that's cute
		// }

		// return false;
	}

	function isForced(element, season) { // DONE
		// <ForceSeason id="{simple_expression}">
		let current = element, parent, forced = [];

		// get the upstream forced seasons in the document
		while (parent = current.parentElement) {
			current = parent;

			if (parent.tagName.toLowerCase() != 'forceseason') continue;
			forced.push(parent.getAttribute('id'));
		}

		// if it's a saint season, change it to "Saint:All" before comparing
		season = isSaint(season) ? season.split(':').shift() + ':All' : season;

		return forced.join(' ').includes(season);
	}
	function isDocumentAttr(element, season) { // DONE
		return element.getRootNode().hasAttribute(season);
	}

	function checkCurrentSeason(str) {
		const activeDocument = Globals.Instance().getActiveDocument();
		if (activeDocument == null) {
			return false;
		}
		if (Saints.isSaintSeason(str)) {
			if (activeDocument.getStateManager().isForceSeason(
				Saints.createSaintSeason( // returns "{saintId}:All"
					Globals.Instance().getSaints().getSaintFromSeason(str, new StringBuilder()).getId(), // the ID from saints.cr.xml :D
					ALL
				)
			)) {

				return true;
			}
		}
		return activeDocument.getStateManager().isForceSeason(str);
	}

	// from saint-evaluator
	function isDate(month, day) {
		return isDate2(Date.fromCoptic(month, day));
	}
	function isDate2(date) {
		return copticDate.getMonth() == date.getMonth() && copticDate.getDate() == date.getDate();
	}
	function isCopticDate(str) {
		return str.includes('.');
	}

	function isDateInRange(from, to, bool) { // DONE!!
		if (typeof from == 'string') {
			if (isSpecialSeason(str)) return evaluateSpecialSeason(str);
			if (isSundaySeason(str)) return evaluateSundaySeason(str);

			[from, to] = from.split('-');
			from = from.toLowerCase() == 'nesi.6' ? Occasions.NEW_YEAR_NEXT_YEAR : Date.fromCoptic(...from.split('.'));
			to = to.toLowerCase() == 'nesi.6' ? Occasions.NEW_YEAR_NEXT_YEAR : Date.fromCoptic(...to.split('.'));
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

		return isDate2(date.addWeeks(nthSunday - 1));
	}
	function isSundaySeason(str) { return isCopticDate(str) && str.includes("Sunday"); }
	function isJonahFastSpecialSeason(str) { return str.includes('JonahFast'); }
	function isGreatFastSpecialSeason(str) { return str.includes('GreatFast'); }
	function isPentecostPeriodSpecialSeason(str) { return str.includes('PentecostPeriod'); }
	function isHosannaSundayFirstLiturgyGospel() { return false; }
	function isOther() { return true; }

	function isAfterDayTransitionTime() { // TODO
		return false;
	}

	function isSeasonOfHerbs() { return isDateInRange(Occasions.PAOPE_10, Occasions.TOBE_11, false); }
	function isSeasonOfAirAndFruits() { return isDateInRange(Occasions.TOBE_11, Occasions.PAONE_12, false); }
	function isSeasonOfWaters() { return !isSeasonOfHerbs() && !isSeasonOfAirAndFruits(); }

	function getFirstDayOfKoiahk() { return Occasions.KOIAHK_1 < Occasions.FIRST_SUNDAY_OF_KOIAHK ? Occasions.KOIAHK_1 : Occasions.FIRST_SUNDAY_OF_KOIAHK; }

	function isActualDay(i) { return copticDate.getDay() == i; }
	function isDay(i) { return copticDate.toCoptic().day == i; }

	function isMondays(bool) {
		if (isSundayEveningService()) return false;
		return isDay(Date.MONDAY, bool);
	}
	function isTodayMondays() { return isMondays(true); }
	function isTuesdays() { return isDay(Date.TUESDAY, false); }
	function isTodayTuesdays() { return isDay(Date.TUESDAY, true); }
	function isWednesdays() { return isDay(Date.WEDNESDAY, false); }
	function isTodayWednesdays() { return isDay(Date.WEDNESDAY, true); }
	function isThursdays() { return isDay(Date.THURSDAY, false); }
	function isTodayThursdays() { return isDay(Date.THURSDAY, true); }
	function isFridays() { return isDay(Date.FRIDAY, false); }
	function isTodayFridays() { return isDay(Date.FRIDAY, true); }
	function isSaturdays() { return isDay(Date.SATURDAY, false); }
	function isTodaySaturdays() { return isDay(CrDateTime.SATURDAY, true); }
	function isSundays(bool) {
		if (isSundayEveningService()) return true;
		return isDay(CrDateTime.SUNDAY, bool);
	}
	function isTodaySundays() { return isSundays(true); }
	function isCopticSunday() { return isTodaySundays(); }  // here, it's the same as isActualDay, but the java implementation is different

	function isSundayEveningService() {
		return isCurrentSeason('Vespers') && isGreatFast() && isDay(Date.MONDAY) && isActualDay(Date.SUNDAY);
	}
	function isVesperPraises() {
		return isCurrentSeason('VesperPraises');
	}
	function isPriestsOnly() {
		return isCurrentSeason('PriestsOnly');
	}
	function isFuneralTune() {
		return !isFeast() && (copticDate.getDay() != Date.SUNDAY || getSeasons().isSeason("Fasts"));
	}

	function isDayBefore(crDateTime, crDateTime2) {
		let withTimeAtStartOfDay = crDateTime.asCopticDate().withTimeAtStartOfDay();
		return crDateTime2.isAfter(withTimeAtStartOfDay) && CrDateTime.daysBetween(withTimeAtStartOfDay, crDateTime2) == 1;
	}

	function isDayBeforeMajorNightFeast(crDateTime) {
		return isDayBefore(crDateTime, Occasions.NATIVITY_CELEBRATE) || isDayBefore(crDateTime, Occasions.THEOPHANY) || isDayBefore(crDateTime, Occasions.RESURRECTION);
	}

	function isDayBeforeMajorNightFeast() {
		return isDayBeforeMajorNightFeast(this.m_oActualGregorianTime);
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
		return isDateInRange(Occasions.GREAT_FAST_BEGIN, Occasions.LAZARUS_SATURDAY, false) && !getSeasons().isSeason("Feasts");
	}

	function isLazarusSaturday() {
		return isDate(Occasions.LAZARUS_SATURDAY) && !getSeasons().isSeason("Feasts");
	}

	function isLastFridayOfGreatFast() {
		return isDate(Occasions.LAST_FRIDAY_OF_GREAT_FAST) && !getSeasons().isSeason("Feasts");
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
		if (isFirstSundayOfKoiahk() || isMajorFeast() || getSeasons().isSeason("MinorFeastsOfTheLord") || isNativityPeriod() || isTheophanyPeriod()) {
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
		if (isCurrentSeason("RaisingOfIncense")) {
			if (isActualDay(CrDateTime.SUNDAY) || isActualDay(CrDateTime.MONDAY) || isActualDay(CrDateTime.TUESDAY)) {
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

	// TODO
	function isFeast() {
		return getSeasons().isSeason("Feasts");
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
		return !isEffectiveKoiahkSeason() && !isDateInRange(Occasions.KOIAHK_1, Occasions.APOSTLES_FAST_BEGIN, false);
	}

	function isDisplayNonCustomaryPrayers() {
		return Globals.Instance().getUserOptions().isDisplayNonCustomaryPrayers();
	}

	function isStMaryFast() {
		return isDateInRange(Occasions.STMARY_FAST_BEGIN, Occasions.MESORE_16, false);
	}

	function isAssumptionStMary() {
		return isDate2(Occasions.MESORE_16);
	}
	function isStMaryFeast() {
		return isDate2(Occasions.MESORE_7) || isDate2(Occasions.PASHONS_1) || isDate2(Occasions.KOIAHK_3) || isDate2(Occasions.TOBE_21) || isAssumptionStMary() || isDate2(Occasions.PAONE_21) || isDate2(Occasions.PAREMHOTEP_24);
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

		const monthOfYear = Occasions.getNthSundayOfMonth(13, 1).getMonthOfYear();

		if (monthOfYear == 13) {
			return true;
		}
		return false;
	}

	function isFirstSundayOfNesi() {
		if (doesNesiHaveASunday()) {
			return isDate(Occasions.getNthSundayOfMonth(13, 1));
		}
		Occasions.getClass();
		return isDate(occasions2.getNthSundayOfMonth(12, 5));
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

	function isEffectiveKoiahkSeason() {
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

		if ((monthOfYear != 12 || doesNesiHaveASunday()) && !isFourthSundayOfThoout() && isCopticSunday() && copticDate.getDate() > 28) {
			return true;
		}
		return false;
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
		return getSeasons().isSeason("PentecostPeriod");
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

	return {
		exec
	}

})();