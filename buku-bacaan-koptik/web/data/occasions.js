export const Occasions = (() => {

	const THOOUT_2 = Date.fromCoptic(1, 2);
	const THOOUT_15 = Date.fromCoptic(1, 15);
	const THOOUT_FEAST_CROSS_1 = Date.fromCoptic(1, 17);
	const THOOUT_FEAST_CROSS_2 = Date.fromCoptic(1, 18);
	const THOOUT_FEAST_CROSS_3 = Date.fromCoptic(1, 19);
	const THOOUT_29 = Date.fromCoptic(1, 29);

	const thouut1 = Date.fromCoptic(1, 1);
	const FIRST_SUNDAY_OF_THOOUT = thouut1.firstSundayOfMonth();
    const SECOND_SUNDAY_OF_THOOUT = FIRST_SUNDAY_OF_THOOUT.addDays(7);
    const THIRD_SUNDAY_OF_THOOUT = SECOND_SUNDAY_OF_THOOUT.addDays(7);
    const FOURTH_SUNDAY_OF_THOOUT = THIRD_SUNDAY_OF_THOOUT.addDays(7);

	const PAOPE_10 = Date.fromCoptic(2, 10);
	const PAOPE_29 = Date.fromCoptic(2, 29);
	const PAOPE_30 = Date.fromCoptic(2, 30);

	const HATHOR_8 = Date.fromCoptic(3, 8);
	const NATIVITY_FAST_BEGIN = Date.fromCoptic(3, 16);
	const HATHOR_24 = Date.fromCoptic(3, 24);
	const HATHOR_29 = Date.fromCoptic(3, 29);

	const KOIAHK_1 = Date.fromCoptic(4, 1);
	const KOIAHK_3 = Date.fromCoptic(4, 3);
	const KOIAHK_13 = Date.fromCoptic(4, 13);
	const KOIAHK_22 = Date.fromCoptic(4, 22);
	const KOIAHK_30 = Date.fromCoptic(4, 30);

	const koiahk1 = Date.fromCoptic(4, 1);
	const FIRST_SUNDAY_OF_KOIAHK = koiahk1.firstSundayOfMonth();
    const SECOND_SUNDAY_OF_KOIAHK = FIRST_SUNDAY_OF_KOIAHK.addDays(7);
    const THIRD_SUNDAY_OF_KOIAHK = SECOND_SUNDAY_OF_KOIAHK.addDays(7);
    const FOURTH_SUNDAY_OF_KOIAHK = THIRD_SUNDAY_OF_KOIAHK.addDays(7);

	const TOBE_1 = Date.fromCoptic(5, 1);
	const CIRCUMCISION = Date.fromCoptic(5, 6);
	const TOBE_11 = Date.fromCoptic(5, 11);
	const WEDDING_CANA = Date.fromCoptic(5, 13);
	const TOBE_21 = Date.fromCoptic(5, 21);
	const TOBE_27 = Date.fromCoptic(5, 27);

	const PRESENTATION_IN_TEMPLE = Date.fromCoptic(6, 8);

	const PAREMHOTEP_FEAST_CROSS = Date.fromCoptic(7, 10);
	const PAREMHOTEP_24 = Date.fromCoptic(7, 24);
	const ANNUNCIATION = Date.fromCoptic(7, 29);

	const PARMOUTE_29 = Date.fromCoptic(8, 29);
	const PARMOUTE_30 = Date.fromCoptic(8, 30);

	const ENTRANCE_LORD_CHRIST = Date.fromCoptic(9, 24);
	const TRANSFIGURATION = Date.fromCoptic(12, 13);
	const APOSTLES_FEAST = Date.fromCoptic(11, 5);

	const PASHONS_1 = Date.fromCoptic(9, 1);
	const PASHONS_26 = Date.fromCoptic(9, 26);
	const PASHONS_29 = Date.fromCoptic(9, 29);

	const PAONE_2 = Date.fromCoptic(10, 2);
	const PAONE_12 = Date.fromCoptic(10, 12);
	const PAONE_21 = Date.fromCoptic(10, 21);
	const PAONE_26 = Date.fromCoptic(10, 26);
	const PAONE_29 = Date.fromCoptic(10, 29);
	const PAONE_30 = Date.fromCoptic(10, 30);

	const EPEP_27 = Date.fromCoptic(11, 27);
	const EPEP_29 = Date.fromCoptic(11, 29);

	const STMARY_FAST_BEGIN = Date.fromCoptic(12, 1);

	const MESORE_7 = Date.fromCoptic(12, 7);
	const MESORE_16 = Date.fromCoptic(12, 16);
	const MESORE_29 = Date.fromCoptic(12, 29);
	const MESORE_30 = Date.fromCoptic(12, 30);

	const NESI_3 = Date.fromCoptic(13, 3);
	const NESI_5 = Date.fromCoptic(13, 5);

	// WeIrD CaLcUlAtIoNs
	const createDate = Date.fromCoptic(4, 29);
	const dayOfMonth = createDate.getDate() - 7;

	const NATIVITY_CELEBRATE = createDate;
	NATIVITY_CELEBRATE.setDate(createDate.getDate() - dayOfMonth); // ???

	let NATIVITY_START;
	let NATIVITY_END;
	if (dayOfMonth > 0) {
	    const createDate2 = Date.fromCoptic(4, 28);
	    NATIVITY_START = createDate2;
	    NATIVITY_END = createDate2.addDays(1);

	} else if (dayOfMonth < 0) {
	    const createDate3 = Date.fromCoptic(4, 29);
	    NATIVITY_START = createDate3;
	    NATIVITY_END = createDate3.addDays(1);

	} else {
	    NATIVITY_START = Date.fromCoptic(4, 29);
	    NATIVITY_END = NATIVITY_START;
	}

	const DAY_AFTER_NATIVITY = NATIVITY_END.addDays(1);

	const NATIVITY_PARAMOUN_END = NATIVITY_CELEBRATE.addDays(-1);
	let NATIVITY_PARAMOUN_START
	if (NATIVITY_PARAMOUN_END.getDay() == Date.SUNDAY) NATIVITY_PARAMOUN_START = NATIVITY_PARAMOUN_END.addDays(-2);
	else if (NATIVITY_PARAMOUN_END.getDay() == Date.SATURDAY) NATIVITY_PARAMOUN_START = NATIVITY_PARAMOUN_END.addDays(-1);
	else NATIVITY_PARAMOUN_START = NATIVITY_PARAMOUN_END;

	const isLeap = Date.isLeap(thouut1.toCoptic().year);
    const NEW_YEAR_NEXT_YEAR = isLeap ? thouut1.addDays(366) : thouut1.addDays(365);

	const THEOPHANY = Date.fromCoptic(5, 11);
	const DAY_AFTER_THEOPHANY = THEOPHANY.addDays(1);
	const THEOPHANY_PARAMOUN_END = THEOPHANY.addDays(-1);
    let THEOPHANY_PARAMOUN_START = '';
	if (THEOPHANY_PARAMOUN_END.getDay() == Date.SUNDAY) THEOPHANY_PARAMOUN_START = NATIVITY_PARAMOUN_END.addDays(-2);
	else if (THEOPHANY_PARAMOUN_END.getDay() == Date.SATURDAY) THEOPHANY_PARAMOUN_START = THEOPHANY_PARAMOUN_END.addDays(-1);
	else NATIVITY_PARAMOUN_START = THEOPHANY_PARAMOUN_END;

	// https://www.assa.org.au/edm#:~:text=In%20most%20years%2C%20Orthodox%20Easter,skipped%22%20in%20the%20Gregorian%20calendar.
	// https://www.assa.org.au/edm#OrthCalculator
	// https://blog.georgekosmidis.net/c-calculating-orthodox-and-catholic-easter.html
	function getOrthodoxEaster(year) {
		var a = year % 19;
		var b = year % 7;
		var c = year % 4;

		var d = (19 * a + 16) % 30;
		var e = (2 * c + 4 * b + 6 * d) % 7;
		var f = (19 * a + 16) % 30;

		var key = f + e + 3;
		var month = (key > 30) ? 5 : 4;
		var day = (key > 30) ? key - 30 : key;

		return new Date(year, month - 1, day);
	}

	const RESURRECTION = getOrthodoxEaster(new Date().getUTCFullYear());
	const DAY_AFTER_RESURRECTION = RESURRECTION.addDays(1);

	const ASCENSION = RESURRECTION.addDays(39);

	const PENTECOST_FEAST = ASCENSION.addDays(10);
	const APOSTLES_FAST_BEGIN = PENTECOST_FEAST.addDays(1);
	const JOYOUS_SATURDAY = RESURRECTION.addDays(-1);
	const GREAT_FRIDAY = RESURRECTION.addDays(-2);
	const COVENANT_THURSDAY = GREAT_FRIDAY.addDays(-1);
	const HOSANNA_SUNDAY = RESURRECTION.addDays(-7);
	const LAST_FRIDAY_OF_GREAT_FAST = HOSANNA_SUNDAY.addDays(-2);
	const PASCHA_BEGIN = HOSANNA_SUNDAY.addDays(1);
	const LAZARUS_SATURDAY = HOSANNA_SUNDAY.addDays(-1);
	const GREAT_FAST_BEGIN = RESURRECTION.addDays(-55);
	const JONAH_FAST_BEGIN = GREAT_FAST_BEGIN.addDays(-14);
	const JONAH_FAST_END = JONAH_FAST_BEGIN.addDays(2);
	const JONAH_PASSOVER = JONAH_FAST_END.addDays(1);

	const GREAT_FAST_SUNDAY_6 = HOSANNA_SUNDAY.addWeeks(-1);
	const GREAT_FAST_SUNDAY_5 = HOSANNA_SUNDAY.addWeeks(-2);
	const GREAT_FAST_SUNDAY_4 = HOSANNA_SUNDAY.addWeeks(-3);
	const GREAT_FAST_SUNDAY_3 = HOSANNA_SUNDAY.addWeeks(-4);
	const GREAT_FAST_SUNDAY_2 = HOSANNA_SUNDAY.addWeeks(-5);
	const GREAT_FAST_SUNDAY_1 = HOSANNA_SUNDAY.addWeeks(-6);

	const GREAT_FAST_SUNDAY_0 = HOSANNA_SUNDAY.addWeeks(-7);
	const GREAT_FAST_SATURDAY_0 = GREAT_FAST_SUNDAY_0.addDays(-1);
	const GREAT_FAST_MONDAY_1 = GREAT_FAST_SUNDAY_0.addDays(1);
	const GREAT_FAST_MONDAY_2 = GREAT_FAST_SUNDAY_1.addDays(1);
	const GREAT_FAST_MONDAY_3 = GREAT_FAST_SUNDAY_2.addDays(1);
	const GREAT_FAST_MONDAY_4 = GREAT_FAST_SUNDAY_3.addDays(1);
	const GREAT_FAST_MONDAY_5 = GREAT_FAST_SUNDAY_4.addDays(1);
	const GREAT_FAST_MONDAY_6 = GREAT_FAST_SUNDAY_5.addDays(1);
	const GREAT_FAST_MONDAY_7 = GREAT_FAST_SUNDAY_6.addDays(1);

	const THOMAS_SUNDAY = RESURRECTION.addDays(7);
	const PENTECOST_SUNDAY_2 = THOMAS_SUNDAY.addWeeks(1);
	const PENTECOST_SUNDAY_3 = THOMAS_SUNDAY.addWeeks(2);
	const PENTECOST_SUNDAY_4 = THOMAS_SUNDAY.addWeeks(3);
	const PENTECOST_SUNDAY_5 = THOMAS_SUNDAY.addWeeks(4);
	const PENTECOST_SUNDAY_6 = THOMAS_SUNDAY.addWeeks(5);

	const PENTECOST_MONDAY_2 = THOMAS_SUNDAY.addDays(1);
	const PENTECOST_MONDAY_3 = PENTECOST_SUNDAY_2.addDays(1);
	const PENTECOST_MONDAY_4 = PENTECOST_SUNDAY_3.addDays(1);
	const PENTECOST_MONDAY_5 = PENTECOST_SUNDAY_4.addDays(1);
	const PENTECOST_MONDAY_6 = PENTECOST_SUNDAY_5.addDays(1);
	const PENTECOST_MONDAY_7 = PENTECOST_SUNDAY_6.addDays(1);

	return {
		THOOUT_2,
		THOOUT_15,
		THOOUT_FEAST_CROSS_1,
		THOOUT_FEAST_CROSS_2,
		THOOUT_FEAST_CROSS_3,
		THOOUT_29,
		FIRST_SUNDAY_OF_THOOUT,
		SECOND_SUNDAY_OF_THOOUT,
		THIRD_SUNDAY_OF_THOOUT,
		FOURTH_SUNDAY_OF_THOOUT,
		PAOPE_10,
		PAOPE_29,
		PAOPE_30,
		HATHOR_8,
		NATIVITY_FAST_BEGIN,
		HATHOR_24,
		HATHOR_29,
		KOIAHK_1,
		KOIAHK_3,
		KOIAHK_13,
		KOIAHK_22,
		KOIAHK_30,
		FIRST_SUNDAY_OF_KOIAHK,
		SECOND_SUNDAY_OF_KOIAHK,
		THIRD_SUNDAY_OF_KOIAHK,
		FOURTH_SUNDAY_OF_KOIAHK,
		TOBE_1,
		CIRCUMCISION,
		TOBE_11,
		WEDDING_CANA,
		TOBE_21,
		TOBE_27,
		PRESENTATION_IN_TEMPLE,
		PAREMHOTEP_FEAST_CROSS,
		PAREMHOTEP_24,
		ANNUNCIATION,
		ENTRANCE_LORD_CHRIST,
		TRANSFIGURATION,
		APOSTLES_FEAST,
		PARMOUTE_29,
		PARMOUTE_30,
		PASHONS_1,
		PASHONS_26,
		PASHONS_29,
		PAONE_2,
		PAONE_12,
		PAONE_21,
		PAONE_26,
		PAONE_29,
		PAONE_30,
		STMARY_FAST_BEGIN,
		EPEP_27,
		EPEP_29,
		MESORE_7,
		MESORE_16,
		MESORE_29,
		MESORE_30,
		NESI_3,
		NESI_5,
		NATIVITY_CELEBRATE,
		DAY_AFTER_NATIVITY,
		NATIVITY_PARAMOUN_START,
		NATIVITY_PARAMOUN_END,
		NEW_YEAR_NEXT_YEAR,
		THEOPHANY,
		DAY_AFTER_THEOPHANY,
		THEOPHANY_PARAMOUN_START,
		THEOPHANY_PARAMOUN_END,
		RESURRECTION,
		DAY_AFTER_RESURRECTION,
		ASCENSION,
		PENTECOST_FEAST,
		APOSTLES_FAST_BEGIN,
		JOYOUS_SATURDAY,
		GREAT_FRIDAY,
		COVENANT_THURSDAY,
		HOSANNA_SUNDAY,
		LAST_FRIDAY_OF_GREAT_FAST,
		PASCHA_BEGIN,
		LAZARUS_SATURDAY,
		GREAT_FAST_BEGIN,
		JONAH_FAST_BEGIN,
		JONAH_FAST_END,
		JONAH_PASSOVER,
		GREAT_FAST_SUNDAY_6,
		GREAT_FAST_SUNDAY_5,
		GREAT_FAST_SUNDAY_4,
		GREAT_FAST_SUNDAY_3,
		GREAT_FAST_SUNDAY_2,
		GREAT_FAST_SUNDAY_1,
		GREAT_FAST_SUNDAY_0,
		GREAT_FAST_SATURDAY_0,
		GREAT_FAST_MONDAY_1,
		GREAT_FAST_MONDAY_2,
		GREAT_FAST_MONDAY_3,
		GREAT_FAST_MONDAY_4,
		GREAT_FAST_MONDAY_5,
		GREAT_FAST_MONDAY_6,
		GREAT_FAST_MONDAY_7,
		THOMAS_SUNDAY,
		PENTECOST_SUNDAY_2,
		PENTECOST_SUNDAY_3,
		PENTECOST_SUNDAY_4,
		PENTECOST_SUNDAY_5,
		PENTECOST_SUNDAY_6,
		PENTECOST_MONDAY_2,
		PENTECOST_MONDAY_3,
		PENTECOST_MONDAY_4,
		PENTECOST_MONDAY_5,
		PENTECOST_MONDAY_6,
		PENTECOST_MONDAY_7,
	};

})();
