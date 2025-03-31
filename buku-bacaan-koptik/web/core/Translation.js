import { SettingsPage } from "../pages/settings/settings.js";

export const Translation = (() => {

	const translations = {
		"Thoout": {
			"en": "Thoout",
			"ar": "توت",
			"id": "Tut"
		},
		"Paope": {
			"en": "Paope",
			"ar": "بابة",
			"id": "Babah"
		},
		"Hathor": {
			"en": "Hathor",
			"ar": "هاتور",
			"id": "Hatur"
		},
		"Koiahk": {
			"en": "Koiahk",
			"ar": "كيهك",
			"id": "Kiahk"
		},
		"Tobe": {
			"en": "Tobe",
			"ar": "طوبة",
			"id": "Tubah"
		},
		"Meshir": {
			"en": "Meshir",
			"ar": "أمشير",
			"id": "Amshir"
		},
		"Paremhotep": {
			"en": "Paremhotep",
			"ar": "برمهات",
			"id": "Baramhat"
		},
		"Parmoute": {
			"en": "Parmoute",
			"ar": "برمودة",
			"id": "Baramudah"
		},
		"Pashons": {
			"en": "Pashons",
			"ar": "بشنس",
			"id": "Bashan"
		},
		"Paone": {
			"en": "Paone",
			"ar": "بوؤنة",
			"id": "Baonah"
		},
		"Epep": {
			"en": "Epep",
			"ar": "أبييب",
			"id": "Abib"
		},
		"Mesore": {
			"en": "Mesore",
			"ar": "مسرى",
			"id": "Misra"
		},
		"Nesi": {
			"en": "Nesi",
			"ar": "النسيء",
			"id": "Alnasi"
		},

		// the comma and extra space make it simpler to split the full date
		"Satu, ": {
			"en": "Satu, ",
			"ar": "السبت",
			"id": "Sabtu, "
		},
		"Sunday, ": {
			"en": "Sunday, ",
			"ar": "الأحد",
			"id": "Minggu, "
		},
		"Monday, ": {
			"en": "Monday, ",
			"ar": "الإثنين",
			"id": "Senin, "
		},
		"Tuesday, ": {
			"en": "Tuesday, ",
			"ar": "الثلاثاء",
			"id": "Selasa, "
		},
		"Wednesday, ": {
			"en": "Wednesday, ",
			"ar": "الأربعاء",
			"id": "Rabu, "
		},
		"Thursday, ": {
			"en": "Thursday, ",
			"ar": "الخميس",
			"id": "Kamis, "
		},
		"Friday, ": {
			"en": "Friday, ",
			"ar": "الجمعة",
			"id": "Jumat, "
		},
		"January": {
			"en": "January",
			"ar": "يناير",
			"id": "Januari"
		},
		"February": {
			"en": "February",
			"ar": "فبراير",
			"id": "Februari"
		},
		"March": {
			"en": "March",
			"ar": "مارس",
			"id": "Maret"
		},
		"April": {
			"en": "April",
			"ar": "أبريل",
			"id": "April"
		},
		"May": {
			"en": "May",
			"ar": "مايو",
			"id": "Mei"
		},
		"June": {
			"en": "June",
			"ar": "يونيو",
			"id": "Juni"
		},
		"July": {
			"en": "July",
			"ar": "يوليو",
			"id": "Juli"
		},
		"August": {
			"en": "August",
			"ar": "أغسطس",
			"id": "Agustus"
		},
		"September": {
			"en": "September",
			"ar": "سبتمبر",
			"id": "September"
		},
		"October": {
			"en": "October",
			"ar": "أكتوبر",
			"id": "Oktober"
		},
		"November": {
			"en": "November",
			"ar": "نوفمبر",
			"id": "November"
		},
		"December": {
			"en": "December",
			"ar": "ديسمبر",
			"id": "Desember"
		},

		"Agpeya": {
			"en": "Agpeya",
			"ar": "أجبية",
			"id": "Agpeya"
		},
		"1st Hour": {
			"en": "1st Hour",
			"ar": "الساعة الأولى",
			"id": "Jam Pertama"
		},
		"3rd Hour": {
			"en": "3rd Hour",
			"ar": "الساعة الثالثة",
			"id": "Jam Ketiga"
		},
		"6th Hour": {
			"en": "6th Hour",
			"ar": "الساعة السادسة",
			"id": "Jam Keenam"
		},
		"9th Hour": {
			"en": "9th Hour",
			"ar": "الساعة التاسعة",
			"id": "Jam Kesembilan"
		},
		"11th Hour": {
			"en": "11th Hour",
			"ar": "الساعة الحادية عشر",
			"id": "Jam Kesebelas"
		},
		"12th Hour": {
			"en": "12th Hour",
			"ar": "الساعة الثانية عشر",
			"id": "Jam kedua belas"
		},
		"Veil": {
			"en": "Veil",
			"ar": "الستار",
			"id": "Tudung"
		},
		"Midnight": {
			"en": "Midnight",
			"ar": "نصف الليل",
			"id": "Tengah Malam"
		},
		"Prayers": {
			"en": "Prayers",
			"ar": "صلوات",
			"id": "Doa lain"
		},
		"Confession": {
			"en": "Confession",
			"ar": "الاعتراف",
			"id": "Pengakuan Dosa"
		},
		"Communion": {
			"en": "Communion",
			"ar": "التناول",
			"id": "Komuni"
		},
		"Guidance": {
			"en": "Guidance",
			"ar": "طلب المشورة",
			"id": "Untuk meminta bimbingan"
		},
		"Meals": {
			"en": "Meals",
			"ar": "الطعام",
			"id": "Makan"
		},
		"Priests": {
			"en": "Priests",
			"ar": "الكهنة",
			"id": "Para Imam"
		},
		"Deacons": {
			"en": "Deacons",
			"ar": "الشمامسة",
			"id": "Para Diakon"
		},
		"Psalmody": {
			"en": "Psalmody",
			"ar": "الأبصلمودية",
			"id": "Psalmody"
		},
		"Vesper Praises": {
			"en": "Vesper Praises",
			"ar": "تسبحة عشية",
			"id": "Pujian Doa Malam"
		},
		"Midnight Praises": {
			"en": "Midnight Praises",
			"ar": "تسبحة نصف الليل",
			"id": "Pujian Tengah Malam"
		},
		"Morning Praises": {
			"en": "Morning Praises",
			"ar": "ذكصولوجية باكر",
			"id": "Doxology Matins"
		},
		"Bible": {
			"en": "Bible",
			"ar": "الكتاب المقدس",
			"id": "Alkitab"
		},
		"Genesis": {
			"en": "Genesis",
			"ar": "تكوين",
			"id": "Kejadian"
		},
		"Chapter 1": {
			"en": "Chapter 1",
			"ar": "اصحاح 1",
			"id": "Pasal 1"
		},
		"Chapter 2": {
			"en": "Chapter 2",
			"ar": "اصحاح 2",
			"id": "Pasal 2"
		},
		"Chapter 3": {
			"en": "Chapter 3",
			"ar": "اصحاح 3",
			"id": "Pasal 3"
		},
		"Chapter 4": {
			"en": "Chapter 4",
			"ar": "اصحاح 4",
			"id": "Pasal 4"
		},
		"Chapter 5": {
			"en": "Chapter 5",
			"ar": "اصحاح 5",
			"id": "Pasal 5"
		},
		"Chapter 6": {
			"en": "Chapter 6",
			"ar": "اصحاح 6",
			"id": "Pasal 6"
		},
		"Chapter 7": {
			"en": "Chapter 7",
			"ar": "اصحاح 7",
			"id": "Pasal 7"
		},
		"Chapter 8": {
			"en": "Chapter 8",
			"ar": "اصحاح 8",
			"id": "Pasal 8"
		},
		"Chapter 9": {
			"en": "Chapter 9",
			"ar": "اصحاح 9",
			"id": "Pasal 9"
		},
		"Chapter 10": {
			"en": "Chapter 10",
			"ar": "اصحاح 10",
			"id": "Pasal 10"
		},
		"Chapter 11": {
			"en": "Chapter 11",
			"ar": "اصحاح 11",
			"id": "Pasal 11"
		},
		"Chapter 12": {
			"en": "Chapter 12",
			"ar": "اصحاح 12",
			"id": "Pasal 12"
		},
		"Chapter 13": {
			"en": "Chapter 13",
			"ar": "اصحاح 13",
			"id": "Pasal 13"
		},
		"Chapter 14": {
			"en": "Chapter 14",
			"ar": "اصحاح 14",
			"id": "Pasal 14"
		},
		"Chapter 15": {
			"en": "Chapter 15",
			"ar": "اصحاح 15",
			"id": "Pasal 15"
		},
		"Chapter 16": {
			"en": "Chapter 16",
			"ar": "اصحاح 16",
			"id": "Pasal 16"
		},
		"Chapter 17": {
			"en": "Chapter 17",
			"ar": "اصحاح 17",
			"id": "Pasal 17"
		},
		"Chapter 18": {
			"en": "Chapter 18",
			"ar": "اصحاح 18",
			"id": "Pasal 18"
		},
		"Chapter 19": {
			"en": "Chapter 19",
			"ar": "اصحاح 19",
			"id": "Pasal 19"
		},
		"Chapter 20": {
			"en": "Chapter 20",
			"ar": "اصحاح 20",
			"id": "Pasal 20"
		},
		"Chapter 21": {
			"en": "Chapter 21",
			"ar": "اصحاح 21",
			"id": "Pasal 21"
		},
		"Chapter 22": {
			"en": "Chapter 22",
			"ar": "اصحاح 22",
			"id": "Pasal 22"
		},
		"Chapter 23": {
			"en": "Chapter 23",
			"ar": "اصحاح 23",
			"id": "Pasal 23"
		},
		"Chapter 24": {
			"en": "Chapter 24",
			"ar": "اصحاح 24",
			"id": "Pasal 24"
		},
		"Chapter 25": {
			"en": "Chapter 25",
			"ar": "اصحاح 25",
			"id": "Pasal 25"
		},
		"Chapter 26": {
			"en": "Chapter 26",
			"ar": "اصحاح 26",
			"id": "Pasal 26"
		},
		"Chapter 27": {
			"en": "Chapter 27",
			"ar": "اصحاح 27",
			"id": "Pasal 27"
		},
		"Chapter 28": {
			"en": "Chapter 28",
			"ar": "اصحاح 28",
			"id": "Pasal 28"
		},
		"Chapter 29": {
			"en": "Chapter 29",
			"ar": "اصحاح 29",
			"id": "Pasal 29"
		},
		"Chapter 30": {
			"en": "Chapter 30",
			"ar": "اصحاح 30",
			"id": "Pasal 30"
		},
		"Chapter 31": {
			"en": "Chapter 31",
			"ar": "اصحاح 31",
			"id": "Pasal 31"
		},
		"Chapter 32": {
			"en": "Chapter 32",
			"ar": "اصحاح 32",
			"id": "Pasal 32"
		},
		"Chapter 33": {
			"en": "Chapter 33",
			"ar": "اصحاح 33",
			"id": "Pasal 33"
		},
		"Chapter 34": {
			"en": "Chapter 34",
			"ar": "اصحاح 34",
			"id": "Pasal 34"
		},
		"Chapter 35": {
			"en": "Chapter 35",
			"ar": "اصحاح 35",
			"id": "Pasal 35"
		},
		"Chapter 36": {
			"en": "Chapter 36",
			"ar": "اصحاح 36",
			"id": "Pasal 36"
		},
		"Chapter 37": {
			"en": "Chapter 37",
			"ar": "اصحاح 37",
			"id": "Pasal 37"
		},
		"Chapter 38": {
			"en": "Chapter 38",
			"ar": "اصحاح 38",
			"id": "Pasal 38"
		},
		"Chapter 39": {
			"en": "Chapter 39",
			"ar": "اصحاح 39",
			"id": "Pasal 39"
		},
		"Chapter 40": {
			"en": "Chapter 40",
			"ar": "اصحاح 40",
			"id": "Pasal 40"
		},
		"Chapter 41": {
			"en": "Chapter 41",
			"ar": "اصحاح 41",
			"id": "Pasal 41"
		},
		"Chapter 42": {
			"en": "Chapter 42",
			"ar": "اصحاح 42",
			"id": "Pasal 42"
		},
		"Chapter 43": {
			"en": "Chapter 43",
			"ar": "اصحاح 43",
			"id": "Pasal 43"
		},
		"Chapter 44": {
			"en": "Chapter 44",
			"ar": "اصحاح 44",
			"id": "Pasal 44"
		},
		"Chapter 45": {
			"en": "Chapter 45",
			"ar": "اصحاح 45",
			"id": "Pasal 45"
		},
		"Chapter 46": {
			"en": "Chapter 46",
			"ar": "اصحاح 46",
			"id": "Pasal 46"
		},
		"Chapter 47": {
			"en": "Chapter 47",
			"ar": "اصحاح 47",
			"id": "Pasal 47"
		},
		"Chapter 48": {
			"en": "Chapter 48",
			"ar": "اصحاح 48",
			"id": "Pasal 48"
		},
		"Chapter 49": {
			"en": "Chapter 49",
			"ar": "اصحاح 49",
			"id": "Pasal 49"
		},
		"Chapter 50": {
			"en": "Chapter 50",
			"ar": "اصحاح 50",
			"id": "Pasal 50"
		},
		"Exodus": {
			"en": "Exodus",
			"ar": "الخروج",
			"id": "Keluaran"
		},
		"Leviticus": {
			"en": "Leviticus",
			"ar": "لاويين",
			"id": "lmamat"
		},
		"Numbers": {
			"en": "Numbers",
			"ar": "العدد",
			"id": "Bilangan"
		},
		"Deuteronomy": {
			"en": "Deuteronomy",
			"ar": "تثنية",
			"id": "Ulangan"
		},
		"Joshua": {
			"en": "Joshua",
			"ar": "يشوع",
			"id": "Yosua"
		},
		"Judges": {
			"en": "Judges",
			"ar": "القضاة",
			"id": "Hakim-hakim"
		},
		"Ruth": {
			"en": "Ruth",
			"ar": "راعوث",
			"id": "Rut"
		},
		"1 Samuel": {
			"en": "1 Samuel",
			"ar": "١ صموئيل",
			"id": "I Samuel"
		},
		"2 Samuel": {
			"en": "2 Samuel",
			"ar": "٢ صموئيل",
			"id": "II Samuel"
		},
		"1 Kings": {
			"en": "1 Kings",
			"ar": "١ ملوك",
			"id": "I Raja-Raja"
		},
		"2 Kings": {
			"en": "2 Kings",
			"ar": "٢ ملوك",
			"id": "II Raja-Raja"
		},
		"1 Chronicles": {
			"en": "1 Chronicles",
			"ar": "١ اخبار",
			"id": "I Tawarikh"
		},
		"2 Chronicles": {
			"en": "2 Chronicles",
			"ar": "٢ اخبار",
			"id": "II Tawarikh"
		},
		"Ezra": {
			"en": "Ezra",
			"ar": "عزرا",
			"id": "Ezra"
		},
		"Nehemiah": {
			"en": "Nehemiah",
			"ar": "نحميا",
			"id": "Nehemia"
		},
		"Tobit": {
			"en": "Tobit",
			"ar": "طوبيا",
			"id": "Tobit"
		},
		"Judith": {
			"en": "Judith",
			"ar": "يهوديت",
			"id": "Yudit"
		},
		"Esther": {
			"en": "Esther",
			"ar": "استير",
			"id": "Ester"
		},
		"Job": {
			"en": "Job",
			"ar": "ايوب",
			"id": "Ayub"
		},
		"Psalms": {
			"en": "Psalms",
			"ar": "مزامير",
			"id": "Mazmur"
		},
		"Chapter 51": {
			"en": "Chapter 51",
			"ar": "اصحاح ٥١",
			"id": "Pasal 51"
		},
		"Chapter 52": {
			"en": "Chapter 52",
			"ar": "اصحاح ٥٢",
			"id": "Pasal 52"
		},
		"Chapter 53": {
			"en": "Chapter 53",
			"ar": "اصحاح ٥٣",
			"id": "Pasal 53"
		},
		"Chapter 54": {
			"en": "Chapter 54",
			"ar": "اصحاح ٥٤",
			"id": "Pasal 54"
		},
		"Chapter 55": {
			"en": "Chapter 55",
			"ar": "اصحاح ٥٥",
			"id": "Pasal 56"
		},
		"Chapter 56": {
			"en": "Chapter 56",
			"ar": "اصحاح ٥٦",
			"id": "Pasal 56"
		},
		"Chapter 57": {
			"en": "Chapter 57",
			"ar": "اصحاح ٥٧",
			"id": "Pasal 57"
		},
		"Chapter 58": {
			"en": "Chapter 58",
			"ar": "اصحاح ٥٨",
			"id": "Pasal 58"
		},
		"Chapter 59": {
			"en": "Chapter 59",
			"ar": "اصحاح ٥٩",
			"id": "Pasal 59"
		},
		"Chapter 60": {
			"en": "Chapter 60",
			"ar": "اصحاح ٦٠",
			"id": "Pasal 60"
		},
		"Chapter 61": {
			"en": "Chapter 61",
			"ar": "اصحاح ٦١",
			"id": "Pasal 61"
		},
		"Chapter 62": {
			"en": "Chapter 62",
			"ar": "اصحاح ٦٢",
			"id": "Pasal 62"
		},
		"Chapter 63": {
			"en": "Chapter 63",
			"ar": "اصحاح ٦٣",
			"id": "Pasal 63"
		},
		"Chapter 64": {
			"en": "Chapter 64",
			"ar": "اصحاح ٦٤",
			"id": "Pasal 64"
		},
		"Chapter 65": {
			"en": "Chapter 65",
			"ar": "اصحاح ٦٥",
			"id": "Pasal 65"
		},
		"Chapter 66": {
			"en": "Chapter 66",
			"ar": "اصحاح ٦٦",
			"id": "Pasal 66"
		},
		"Chapter 67": {
			"en": "Chapter 67",
			"ar": "اصحاح ٦٧",
			"id": "Pasal 67"
		},
		"Chapter 68": {
			"en": "Chapter 68",
			"ar": "اصحاح ٦٨",
			"id": "Pasal 68"
		},
		"Chapter 69": {
			"en": "Chapter 69",
			"ar": "اصحاح ٦٩",
			"id": "Pasal 69"
		},
		"Chapter 70": {
			"en": "Chapter 70",
			"ar": "اصحاح ٧٠",
			"id": "Pasal 70"
		},
		"Chapter 71": {
			"en": "Chapter 71",
			"ar": "اصحاح ٧١",
			"id": "Pasal 71"
		},
		"Chapter 72": {
			"en": "Chapter 72",
			"ar": "اصحاح ٧٢",
			"id": "Pasal 72"
		},
		"Chapter 73": {
			"en": "Chapter 73",
			"ar": "اصحاح ٧٣",
			"id": "Pasal 73"
		},
		"Chapter 74": {
			"en": "Chapter 74",
			"ar": "اصحاح ٧٤",
			"id": "Pasal 74"
		},
		"Chapter 75": {
			"en": "Chapter 75",
			"ar": "اصحاح ٧٥",
			"id": "Pasal 75"
		},
		"Chapter 76": {
			"en": "Chapter 76",
			"ar": "اصحاح ٧٦",
			"id": "Pasal 76"
		},
		"Chapter 77": {
			"en": "Chapter 77",
			"ar": "اصحاح ٧٧",
			"id": "Pasal 77"
		},
		"Chapter 78": {
			"en": "Chapter 78",
			"ar": "اصحاح ٧٨",
			"id": "Pasal 78"
		},
		"Chapter 79": {
			"en": "Chapter 79",
			"ar": "اصحاح ٧٩",
			"id": "Pasal 79"
		},
		"Chapter 80": {
			"en": "Chapter 80",
			"ar": "اصحاح ٨٠",
			"id": "Pasal 80"
		},
		"Chapter 81": {
			"en": "Chapter 81",
			"ar": "اصحاح ٨١",
			"id": "Pasal 81"
		},
		"Chapter 82": {
			"en": "Chapter 82",
			"ar": "اصحاح ٨٢",
			"id": "Pasal 82"
		},
		"Chapter 83": {
			"en": "Chapter 83",
			"ar": "اصحاح ٨٣",
			"id": "Pasal 83"
		},
		"Chapter 84": {
			"en": "Chapter 84",
			"ar": "اصحاح ٨٤",
			"id": "Pasal 84"
		},
		"Chapter 85": {
			"en": "Chapter 85",
			"ar": "اصحاح ٨٥",
			"id": "Pasal 85"
		},
		"Chapter 86": {
			"en": "Chapter 86",
			"ar": "اصحاح ٨٦",
			"id": "Pasal 86"
		},
		"Chapter 87": {
			"en": "Chapter 87",
			"ar": "اصحاح ٨٧",
			"id": "Pasal 87"
		},
		"Chapter 88": {
			"en": "Chapter 88",
			"ar": "اصحاح ٨٨",
			"id": "Pasal 88"
		},
		"Chapter 89": {
			"en": "Chapter 89",
			"ar": "اصحاح ٨٩",
			"id": "Pasal 89"
		},
		"Chapter 90": {
			"en": "Chapter 90",
			"ar": "اصحاح ٩٠",
			"id": "Pasal 90"
		},
		"Chapter 91": {
			"en": "Chapter 91",
			"ar": "اصحاح ٩١",
			"id": "Pasal 91"
		},
		"Chapter 92": {
			"en": "Chapter 92",
			"ar": "اصحاح ٩٢",
			"id": "Pasal 92"
		},
		"Chapter 93": {
			"en": "Chapter 93",
			"ar": "اصحاح ٩٣",
			"id": "Pasal 93"
		},
		"Chapter 94": {
			"en": "Chapter 94",
			"ar": "اصحاح ٩٤",
			"id": "Pasal 94"
		},
		"Chapter 95": {
			"en": "Chapter 95",
			"ar": "اصحاح ٩٥",
			"id": "Pasal 95"
		},
		"Chapter 96": {
			"en": "Chapter 96",
			"ar": "اصحاح ٩٦",
			"id": "Pasal 96"
		},
		"Chapter 97": {
			"en": "Chapter 97",
			"ar": "اصحاح ٩٧",
			"id": "Pasal 97"
		},
		"Chapter 98": {
			"en": "Chapter 98",
			"ar": "اصحاح ٩٨",
			"id": "Pasal 98"
		},
		"Chapter 99": {
			"en": "Chapter 99",
			"ar": "اصحاح ٩٩",
			"id": "Pasal 99"
		},
		"Chapter 100": {
			"en": "Chapter 100",
			"ar": "اصحاح ١٠٠",
			"id": "Pasal 100"
		},
		"Chapter 101": {
			"en": "Chapter 101",
			"ar": "اصحاح ١٠١",
			"id": "Pasal 101"
		},
		"Chapter 102": {
			"en": "Chapter 102",
			"ar": "اصحاح ١٠٢",
			"id": "Pasal 102"
		},
		"Chapter 103": {
			"en": "Chapter 103",
			"ar": "الإصحاح ١٠٣",
			"id": "Pasal 103"
		},
		"Chapter 104": {
			"en": "Chapter 104",
			"ar": "الإصحاح ١٠٤",
			"id": "Pasal 104"
		},
		"Chapter 105": {
			"en": "Chapter 105",
			"ar": "الإصحاح ١٠٥",
			"id": "Pasal 105"
		},
		"Chapter 106": {
			"en": "Chapter 106",
			"ar": "الإصحاح ١٠٦",
			"id": "Pasal 106"
		},
		"Chapter 107": {
			"en": "Chapter 107",
			"ar": "الإصحاح ١٠٧",
			"id": "Pasal 107"
		},
		"Chapter 108": {
			"en": "Chapter 108",
			"ar": "الإصحاح ١٠٨",
			"id": "Pasal 108"
		},
		"Chapter 109": {
			"en": "Chapter 109",
			"ar": "الإصحاح ١٠٩",
			"id": "Pasal 109"
		},
		"Chapter 110": {
			"en": "Chapter 110",
			"ar": "الإصحاح ١١٠",
			"id": "Pasal 110"
		},
		"Chapter 111": {
			"en": "Chapter 111",
			"ar": "الإصحاح ١١١",
			"id": "Pasal 111"
		},
		"Chapter 112": {
			"en": "Chapter 112",
			"ar": "الإصحاح ١١٢",
			"id": "Pasal 112"
		},
		"Chapter 113": {
			"en": "Chapter 113",
			"ar": "الإصحاح ١١٣",
			"id": "Pasal 113"
		},
		"Chapter 114": {
			"en": "Chapter 114",
			"ar": "الإصحاح ١١٤",
			"id": "Pasal 114"
		},
		"Chapter 115": {
			"en": "Chapter 115",
			"ar": "الإصحاح ١١٥",
			"id": "Pasal 115"
		},
		"Chapter 116": {
			"en": "Chapter 116",
			"ar": "الإصحاح ١١٦",
			"id": "Pasal 116"
		},
		"Chapter 117": {
			"en": "Chapter 117",
			"ar": "الإصحاح ١١٧",
			"id": "Pasal 117"
		},
		"Chapter 118": {
			"en": "Chapter 118",
			"ar": "الإصحاح ١١٨",
			"id": "Pasal 118"
		},
		"Chapter 119": {
			"en": "Chapter 119",
			"ar": "الإصحاح ١١٩",
			"id": "Pasal 119"
		},
		"Chapter 120": {
			"en": "Chapter 120",
			"ar": "الإصحاح ١٢٠",
			"id": "Pasal 120"
		},
		"Chapter 121": {
			"en": "Chapter 121",
			"ar": "الإصحاح ١٢١",
			"id": "Pasal 121"
		},
		"Chapter 122": {
			"en": "Chapter 122",
			"ar": "الإصحاح ١٢٢",
			"id": "Pasal 122"
		},
		"Chapter 123": {
			"en": "Chapter 123",
			"ar": "الإصحاح ١٢٣",
			"id": "Pasal 123"
		},
		"Chapter 124": {
			"en": "Chapter 124",
			"ar": "الإصحاح ١٢٤",
			"id": "Pasal 124"
		},
		"Chapter 125": {
			"en": "Chapter 125",
			"ar": "الإصحاح ١٢٥",
			"id": "Pasal 125"
		},
		"Chapter 126": {
			"en": "Chapter 126",
			"ar": "الإصحاح ١٢٦",
			"id": "Pasal 126"
		},
		"Chapter 127": {
			"en": "Chapter 127",
			"ar": "الإصحاح ١٢٧",
			"id": "Pasal 127"
		},
		"Proverbs": {
			"en": "Proverbs",
			"ar": "أمثال",
			"id": "Amsal"
		},
		"Ecclesiastes": {
			"en": "Ecclesiastes",
			"ar": "جامعة",
			"id": "Pengkhotbah"
		},
		"Song of Solomon": {
			"en": "Song of Solomon",
			"ar": "نشيد الأنشاد",
			"id": "Kidung"
		},
		"Wisdom": {
			"en": "Wisdom",
			"ar": "حكمة سليمان",
			"id": "Kebijaksanaan Salomo"
		},
		"Sirach": {
			"en": "Sirach",
			"ar": "يشوع بن سيراخ",
			"id": "Yesus bin Sirakh"
		},
		"Isaiah": {
			"en": "Isaiah",
			"ar": "أشعياء",
			"id": "Yesaya"
		},
		"Jeremiah": {
			"en": "Jeremiah",
			"ar": "أرميا",
			"id": "Yeremia"
		},
		"Lamentations": {
			"en": "Lamentations",
			"ar": "مراثى أرميا",
			"id": "Ratapan"
		},
		"Baruch": {
			"en": "Baruch",
			"ar": "باروخ",
			"id": "Barukh"
		},
		"Ezekiel": {
			"en": "Ezekiel",
			"ar": "حزقيال",
			"id": "Yehezkiel"
		},
		"Daniel": {
			"en": "Daniel",
			"ar": "دانيال",
			"id": "Daniel"
		},
		"Hosea": {
			"en": "Hosea",
			"ar": "هوشع",
			"id": "Hosea"
		},
		"Joel": {
			"en": "Joel",
			"ar": "يوئيل",
			"id": "Yoel"
		},
		"Amos": {
			"en": "Amos",
			"ar": "عاموس",
			"id": "Amos"
		},
		"Obadiah": {
			"en": "Obadiah",
			"ar": "عوبيديا",
			"id": "Obaia"
		},
		"Jonah": {
			"en": "Jonah",
			"ar": "يونان",
			"id": "Yunus"
		},
		"Micah": {
			"en": "Micah",
			"ar": "ميخا",
			"id": "Mikha"
		},
		"Nahum": {
			"en": "Nahum",
			"ar": "ناحوم",
			"id": "Nahum"
		},
		"Habakkuk": {
			"en": "Habakkuk",
			"ar": "حبقوق",
			"id": "Habakuk"
		},
		"Zephaniah": {
			"en": "Zephaniah",
			"ar": "صفنيا",
			"id": "Zefanya"
		},
		"Haggai": {
			"en": "Haggai",
			"ar": "حجي",
			"id": "Hagai"
		},
		"Zechariah": {
			"en": "Zechariah",
			"ar": "زكريا",
			"id": "Zakharia"
		},
		"Malachi": {
			"en": "Malachi",
			"ar": "ملاخي",
			"id": "Maleakhi"
		},
		"1 Maccabees": {
			"en": "1 Maccabees",
			"ar": "١ مكابيين",
			"id": "1 Makabe"
		},
		"2 Maccabees": {
			"en": "2 Maccabees",
			"ar": "٢ مكابيين",
			"id": "2 Makabe"
		},
		"Prayer of Manasseh": {
			"en": "Prayer of Manasseh",
			"ar": "صلاة منسى",
			"id": "Doa Manasye"
		},
		"Matthew": {
			"en": "Matthew",
			"ar": "متى",
			"id": "Matius"
		},
		"Mark": {
			"en": "Mark",
			"ar": "مرقس",
			"id": "Markus"
		},
		"Luke": {
			"en": "Luke",
			"ar": "لوقا",
			"id": "Lukas"
		},
		"John": {
			"en": "John",
			"ar": "يوحنا",
			"id": "Yohanes"
		},
		"Acts": {
			"en": "Acts",
			"ar": "اعمال الرسل",
			"id": "Kisah Para Rasul"
		},
		"Romans": {
			"en": "Romans",
			"ar": "رومية",
			"id": "Roma"
		},
		"1 Corinthians": {
			"en": "1 Corinthians",
			"ar": "١ كورنثوس",
			"id": "I Korintus"
		},
		"2 Corinthians": {
			"en": "2 Corinthians",
			"ar": "٢ كورنثوس",
			"id": "II Korintus"
		},
		"Galatians": {
			"en": "Galatians",
			"ar": "غلاطية",
			"id": "Galatia"
		},
		"Ephesians": {
			"en": "Ephesians",
			"ar": "أفسس",
			"id": "Efesus"
		},
		"Philippians": {
			"en": "Philippians",
			"ar": "فيلبي",
			"id": "Filipi"
		},
		"Colossians": {
			"en": "Colossians",
			"ar": "كولوسي",
			"id": "Kolose"
		},
		"1 Thessalonians": {
			"en": "1 Thessalonians",
			"ar": "١ تسالونيكي",
			"id": "I Tesalonika"
		},
		"2 Thessalonians": {
			"en": "2 Thessalonians",
			"ar": "٢ تسالونيكي",
			"id": "II Tesalonika"
		},
		"1 Timothy": {
			"en": "1 Timothy",
			"ar": "١ تيموثاوس",
			"id": "I Timotius"
		},
		"2 Timothy": {
			"en": "2 Timothy",
			"ar": "٢ تيموثاوس",
			"id": "II Timotius"
		},
		"Titus": {
			"en": "Titus",
			"ar": "تيطس",
			"id": "Titus"
		},
		"Philemon": {
			"en": "Philemon",
			"ar": "فليمون",
			"id": "Filemon"
		},
		"Hebrews": {
			"en": "Hebrews",
			"ar": "عبرانيين",
			"id": "Ibrani"
		},
		"James": {
			"en": "James",
			"ar": "يعقوب",
			"id": "Yakobus"
		},
		"1 Peter": {
			"en": "1 Peter",
			"ar": "١ يطرس",
			"id": "I Petrus"
		},
		"2 Peter": {
			"en": "2 Peter",
			"ar": "٢ بطرس",
			"id": "II Petrus"
		},
		"1 John": {
			"en": "1 John",
			"ar": "١ يوحنا",
			"id": "I Yohanes"
		},
		"2 John": {
			"en": "2 John",
			"ar": "٢ يوحنا",
			"id": "II Yohanes"
		},
		"3 John": {
			"en": "3 John",
			"ar": "3 يوحنا",
			"id": "III Yohanes"
		},
		"Jude": {
			"en": "Jude",
			"ar": "يهوذا",
			"id": "Yudas"
		},
		"Revelation": {
			"en": "Revelation",
			"ar": "رؤيا يوحنا",
			"id": "Wahyu"
		},
		"Liturgies": {
			"en": "Liturgies",
			"ar": "القداسات",
			"id": "Misa Kudus"
		},
		"St. Basil": {
			"en": "St. Basil",
			"ar": "الباسيلي",
			"id": "Santo Basil"
		},
		"Offering of the Lamb": {
			"en": "Offering of the Lamb",
			"ar": "تقديم الحمل",
			"id": "Prosessi Domba Allah"
		},
		"Liturgy of the Word": {
			"en": "Liturgy of the Word",
			"ar": "قداس الكلمة",
			"id": "Liturgi Firman"
		},
		"Liturgy of the Faithful": {
			"en": "Liturgy of the Faithful",
			"ar": "قداس المؤمنين",
			"id": "Liturgi Orang Percaya"
		},
		"Distribution": {
			"en": "Distribution",
			"ar": "التوزيع",
			"id": "Distribusi"
		},
		"St. Gregory": {
			"en": "St. Gregory",
			"ar": "الغريغوري",
			"id": "Santo Gregorious"
		},
		"St. Cyril": {
			"en": "St. Cyril",
			"ar": "الكيرلسي",
			"id": "Santo Cyril"
		},
		"Matins": {
			"en": "Matins",
			"ar": "باكر",
			"id": "Matins (Doa Pagi)"
		},
		"Vespers": {
			"en": "Vespers",
			"ar": "عشية",
			"id": "Doa Malam (Vespers)"
		},
		"Readings": {
			"en": "Readings",
			"ar": "القراءات",
			"id": "Pembacaan"
		},
		"Prophecies": {
			"en": "Prophecies",
			"ar": "النبوات",
			"id": "Nubuat-Nubuat"
		},
		"Psalm and Gospel": {
			"en": "Psalm and Gospel",
			"ar": "مزمور وانجيل",
			"id": "Mazmur dan Injil"
		},
		"Liturgy": {
			"en": "Liturgy",
			"ar": "القداس",
			"id": "Liturgi"
		},
		"Pauline Epistle": {
			"en": "Pauline Epistle",
			"ar": "البولس",
			"id": "Santo Paulus"
		},
		"Catholic Epistle": {
			"en": "Catholic Epistle",
			"ar": "الكاثوليكون",
			"id": "Katolikon"
		},
		"Praxis": {
			"en": "Praxis",
			"ar": "الابركسيس",
			"id": "Praksis"
		},
		"Synaxarion": {
			"en": "Synaxarion",
			"ar": "السنكسار",
			"id": "Synaksarion"
		},
		"Antiphonary": {
			"en": "Antiphonary",
			"ar": "الدفنار",
			"id": "Antifonari"
		},
		"Melodies": {
			"en": "Melodies",
			"ar": "مدائح",
			"id": "Pujian pujian"
		},
		"Index": {
			"en": "Index",
			"ar": "فهرس",
			"id": "Indeks"
		},
		"Feasts": {
			"en": "Feasts",
			"ar": "اعياد",
			"id": "Perayaan"
		},
		"Coptic New Year": {
			"en": "Coptic New Year",
			"ar": "النيروز",
			"id": "Nayrouz"
		},
		"Feast of the Cross": {
			"en": "Feast of the Cross",
			"ar": "عيد الصليب",
			"id": "Perayaan Salib"
		},
		"Apostles' Feast": {
			"en": "Apostles' Feast",
			"ar": "عيد الرسل",
			"id": "Perayaan Para Rasul"
		},
		"Joyful 29th of the Month": {
			"en": "Joyful 29th of the Month",
			"ar": "التاسع والعشرون من الشهر",
			"id": "Hari Gembira - 29 dari bulan Koptik"
		},
		"Major Feasts of the Lord": {
			"en": "Major Feasts of the Lord",
			"ar": "الأعياد السيدية الكبار",
			"id": "Perayaan Besar tentang Tuhan Yesus"
		},
		"Nativity": {
			"en": "Nativity",
			"ar": "الميلاد",
			"id": "Natal"
		},
		"Theophany": {
			"en": "Theophany",
			"ar": "الغطاس",
			"id": "Theofani - Baptisan Tuhan Yesus"
		},
		"Annunciation": {
			"en": "Annunciation",
			"ar": "البشارة",
			"id": "Kabar Sukacita"
		},
		"Hosanna Sunday": {
			"en": "Hosanna Sunday",
			"ar": "أحد الشعانين",
			"id": "Minggu Palma"
		},
		"Holy 50 Days": {
			"en": "Holy 50 Days",
			"ar": "الخمسين المقدسة",
			"id": "50 Hari Suci"
		},
		"Days 1-39": {
			"en": "Days 1-39",
			"ar": "أيام ١-٣٩ ",
			"id": "Hari 1-39"
		},
		"Days 40-49": {
			"en": "Days 40-49",
			"ar": "أيام ٤٠-٤٩",
			"id": "Hari 40-49"
		},
		"Thomas Sunday": {
			"en": "Thomas Sunday",
			"ar": "أحد توما",
			"id": "Minggu Tomas"
		},
		"Pentecost": {
			"en": "Pentecost",
			"ar": "العنصرة",
			"id": "Pentakosta"
		},
		"Minor Feasts of the Lord": {
			"en": "Minor Feasts of the Lord",
			"ar": "الأعياد السيدية الصغار",
			"id": "Perayaan Kecil tentang Tuhan Yesus"
		},
		"Circumcision": {
			"en": "Circumcision",
			"ar": "الختان",
			"id": "Sunat"
		},
		"Wedding at Cana of Galilee": {
			"en": "Wedding at Cana of Galilee",
			"ar": "عرس قانا الجليل",
			"id": "Pernikahan di Kana Galilea"
		},
		"Presentation of the Lord Christ in the Temple": {
			"en": "Presentation of the Lord Christ in the Temple",
			"ar": "دخول المسيح الهيكل",
			"id": "Tuhan Yesus Masuk ke Bait Allah"
		},
		"Covenant Thursday": {
			"en": "Covenant Thursday",
			"ar": "خميس العهد",
			"id": "Kamis Agung"
		},
		"Entrance of the Lord Christ into the Land of Egypt": {
			"en": "Entrance of the Lord Christ into the Land of Egypt",
			"ar": "دخول السيد المسيح أرض مصر",
			"id": "Tuhan Yesus Masuk ke Tanah Mesir"
		},
		"Transfiguration": {
			"en": "Transfiguration",
			"ar": "التجلي",
			"id": "Transfigurasi"
		},
		"Fasts": {
			"en": "Fasts",
			"ar": "الأصوام",
			"id": "Puasa"
		},
		"Nativity Fast": {
			"en": "Nativity Fast",
			"ar": "صوم الميلاد",
			"id": "Puasa Natal"
		},
		"Month of Koiahk": {
			"en": "Month of Koiahk",
			"ar": "شهر كيهك",
			"id": "Bulan Kiahk"
		},
		"Weekdays": {
			"en": "Weekdays",
			"ar": "أيام الأسبوع",
			"id": "Hari hari biasa"
		},
		"Weekends": {
			"en": "Weekends",
			"ar": "السبوت والأحاد",
			"id": "Sabtu dan Minggu"
		},
		"Nativity Paramoun": {
			"en": "Nativity Paramoun",
			"ar": "برمون الميلاد",
			"id": "Paramouni Perayaan Natal"
		},
		"Theophany Paramoun": {
			"en": "Theophany Paramoun",
			"ar": "برمون الغطاس",
			"id": "Paramoni Teofani"
		},
		"Jonah's Fast": {
			"en": "Jonah's Fast",
			"ar": "صوم نينوى",
			"id": "Puasa Niniwe"
		},
		"Jonah's Passover": {
			"en": "Jonah's Passover",
			"ar": "فطر يونان",
			"id": "Paskah Puasa Yunus"
		},
		"Great Fast": {
			"en": "Great Fast",
			"ar": "الصوم الكبير",
			"id": "Puasa Agung"
		},
		"Preparation Sunday": {
			"en": "Preparation Sunday",
			"ar": "أحد الاستعداد",
			"id": "Minggu Persiapan"
		},
		"Last Friday": {
			"en": "Last Friday",
			"ar": "الجمعة الأخيرة",
			"id": "Jumat Terakhir"
		},
		"Lazarus Saturday": {
			"en": "Lazarus Saturday",
			"ar": "سبت لعازر",
			"id": "Sabtu Lazarus"
		},
		"Apostles' Fast": {
			"en": "Apostles' Fast",
			"ar": "صوم الرسل",
			"id": "Puasa Para Rasul"
		},
		"Saints": {
			"en": "Saints",
			"ar": "القديسين",
			"id": "Orang-orang Kudus"
		},
		"St. Mary the Mother of God": {
			"en": "St. Mary the Mother of God",
			"ar": "السيدة العذراء مريم",
			"id": "Perawan Santa Maria"
		},
		"Angels": {
			"en": "Angels",
			"ar": "الملائكة",
			"id": "Malaikat"
		},
		"Archangel Michael": {
			"en": "Archangel Michael",
			"ar": "الملاك ميخائيل",
			"id": "Malaikat Mikail"
		},
		"Archangel Gabriel": {
			"en": "Archangel Gabriel",
			"ar": "الملاك جبرائيل",
			"id": "Malaikat Gabriel"
		},
		"Archangel Raphael": {
			"en": "Archangel Raphael",
			"ar": "الملاك روفائيل",
			"id": "Malaikat Rafael"
		},
		"Archangel Suriel": {
			"en": "Archangel Suriel",
			"ar": "الملاك سوريال",
			"id": "Malaikat Uriel"
		},
		"Four Incorporeal Creatures": {
			"en": "Four Incorporeal Creatures",
			"ar": "الأربعة الحيوانات الغير متجسدين",
			"id": "Empat Makhluk Surgawi"
		},
		"Twenty-Four Priests": {
			"en": "Twenty-Four Priests",
			"ar": "الأربعة والعشرين قسيسا",
			"id": "Dua Puluh Empat Imam"
		},
		"Apostles": {
			"en": "Apostles",
			"ar": "الرسل",
			"id": "Para Rasul"
		},
		"St. Andrew the Apostle": {
			"en": "St. Andrew the Apostle",
			"ar": "القديس أندراوس الرسول",
			"id": "Santo Andreas Sang Rasul"
		},
		"St. John the Evangelist": {
			"en": "St. John the Evangelist",
			"ar": "القديس يوحنا الانجيلي",
			"id": "Santo Yohanes Penginjil"
		},
		"St. Peter and St. Paul": {
			"en": "St. Peter and St. Paul",
			"ar": "القديسين بطرس وبولس",
			"id": "Santo Petrus dan Santo Paulus"
		},
		"St. Paul the Apostle": {
			"en": "St. Paul the Apostle",
			"ar": "القديس يولس الرسول",
			"id": "Santo Paulus Sang Rasul"
		},
		"St. Mark the Apostle": {
			"en": "St. Mark the Apostle",
			"ar": "القديس مرقس الرسول",
			"id": "Santo Markus sang Rasul"
		},
		"St. Luke the Evangelist": {
			"en": "St. Luke the Evangelist",
			"ar": "القديس لوقا الانجيلي",
			"id": "Santo Lukas Penginjil"
		},
		"Male Martyrs": {
			"en": "Male Martyrs",
			"ar": "الشهداء",
			"id": "Para Martir (Laki laki)"
		},
		"St. John the Baptist": {
			"en": "St. John the Baptist",
			"ar": "القديس يوحنا المعمدان",
			"id": "Santo Yohanes Pembaptis"
		},
		"Children of Bethlehem": {
			"en": "Children of Bethlehem",
			"ar": "الأطفال المائة والأربعة والأربعين ألفا",
			"id": "Anak-anak Betlehem"
		},
		"St. Stephen the Archdeacon and Protomartyr": {
			"en": "St. Stephen the Archdeacon and Protomartyr",
			"ar": "القديس استفانوس رئيس الشمامسة وأول الشهداء",
			"id": "Santo Stefanus, Diakon Agung dan Martir Pertama"
		},
		"St. George Prince of Martyrs": {
			"en": "St. George Prince of Martyrs",
			"ar": "الشهيد مارجرجس الروماني امير الشهداء",
			"id": "Pengeran Martir Santo Georgi "
		},
		"Prince Theodore the Son of John of Shotep": {
			"en": "Prince Theodore the Son of John of Shotep",
			"ar": "الأمير تادرس بن يوحنا الشطبي",
			"id": "Pangeran Teodor anak Yohanes dari Shotep"
		},
		"Prince Theodore Anatolius": {
			"en": "Prince Theodore Anatolius",
			"ar": "الأمير تادرس المشرقى",
			"id": "Pangeran Tadros Anatolius"
		},
		"St. Philopater Mercurius": {
			"en": "St. Philopater Mercurius",
			"ar": "الشهيد مرقوريوس",
			"id": "Santo Filopatir Merkurius"
		},
		"St. Mena the Wonderworker": {
			"en": "St. Mena the Wonderworker",
			"ar": "الشهيد مارمينا العجايبي",
			"id": "Santo Mina Pekerja Ajaib"
		},
		"St. Apanoub of Nehis": {
			"en": "St. Apanoub of Nehis",
			"ar": "الشهيد أبانوب النهيسي",
			"id": "Santo Abanoub dari Nehis"
		},
		"St. Victor Son of Romanus": {
			"en": "St. Victor Son of Romanus",
			"ar": "القديس بقطر بن رومانيوس",
			"id": "Santo Victor anak Romanus"
		},
		"St. Apatir and His Sister St. Irini": {
			"en": "St. Apatir and His Sister St. Irini",
			"ar": "القديسين أبادير وايريني أخته",
			"id": "Santo Abatir dan Irini adiknya"
		},
		"St. Claudius Son of Ptolemy": {
			"en": "St. Claudius Son of Ptolemy",
			"ar": "القديس اقلاديوس ابن ابطلماوس",
			"id": "Santo Klaudius anal Ptolemy"
		},
		"St. Apoli, Son of Justus": {
			"en": "St. Apoli, Son of Justus",
			"ar": "القديس أبالي بن يسطس",
			"id": "Santo Apoli anak Justus"
		},
		"St. Eskhyron of Callin": {
			"en": "St. Eskhyron of Callin",
			"ar": "الشهيد اياسخيرون القليني",
			"id": "Santo Eskhyron dari kallin"
		},
		"St. John of Heraclia": {
			"en": "St. John of Heraclia",
			"ar": "القديس الأنبا يوحنا الهرقلي",
			"id": "Santo Yohanes dari Heraklia"
		},
		"St. Abe-Fam the Soldier": {
			"en": "St. Abe-Fam the Soldier",
			"ar": "القديس أبي فام الجندي",
			"id": "Santo Abi Fam sang Prajurit "
		},
		"St. Sergius and St. Bacchus": {
			"en": "St. Sergius and St. Bacchus",
			"ar": "القديس سرجيوس و واخس",
			"id": "Santo Sergiud dan Santo Bakhus"
		},
		"St. Cosmas and St. Damian, their Brothers and Mother": {
			"en": "St. Cosmas and St. Damian, their Brothers and Mother",
			"ar": "الشهيدان قزمان ودميان واخوتهما وأمهم الشهداء",
			"id": "Santo Kosmas dan Santo Demian, saudara dan Ibun mereka"
		},
		"St. Apakir and St. John": {
			"en": "St. Apakir and St. John",
			"ar": "القديسين أباكير ويوحنا",
			"id": "Santo Apakir dan Santo Yohanes"
		},
		"Sts. Apakir, John, Ptolemy, and Philip": {
			"en": "Sts. Apakir, John, Ptolemy, and Philip",
			"ar": "الشهداء أباكير ويوحنا واخوتهما",
			"id": "Santo Apakir, Yohanes dan Ptolemy dan Filip"
		},
		"St. Sarapamon Bishop of Nikios": {
			"en": "St. Sarapamon Bishop of Nikios",
			"ar": "الشهيد الأنبا صرابامون",
			"id": "Santo Sarabamon dari Nikios"
		},
		"St. Pisura the Bishop": {
			"en": "St. Pisura the Bishop",
			"ar": "القديس أنبا بيسوره الأسقف",
			"id": "St. Pisura Sang Uskup"
		},
		"St. Castor of Bardanuha": {
			"en": "St. Castor of Bardanuha",
			"ar": "القديس أبا قسطور البردنوهي",
			"id": "St. Castor dari Bardanuha"
		},
		"St. Bisada the Bishop": {
			"en": "St. Bisada the Bishop",
			"ar": "القديس الأنبا بِسادة الأسقف",
			"id": "St. Bisada Sang Uskup"
		},
		"St. Dioscorus and St. Esklabius": {
			"en": "St. Dioscorus and St. Esklabius",
			"ar": "القديس ديسقورس وسكلابيوس أخيه",
			"id": "St. Dioscorus dan St. Esklabius"
		},
		"St. Maurice": {
			"en": "St. Maurice",
			"ar": "الشهيد موريـــس",
			"id": "St. Maurice"
		},
		"St. Philotheus": {
			"en": "St. Philotheus",
			"ar": "القديس فيلوثاوُس",
			"id": "St. Philotheus"
		},
		"St. Isi and St. Thecla His Sister": {
			"en": "St. Isi and St. Thecla His Sister",
			"ar": "لقديسين إيسى وتكلا أخته",
			"id": "St. Isi dan St. Thekla Saudarinya"
		},
		"St. George Muzahim": {
			"en": "St. George Muzahim",
			"ar": "الشهيد مار جرجس المزاحم",
			"id": "St. George Muzahim"
		},
		"St. Julius of Ekbehs": {
			"en": "St. Julius of Ekbehs",
			"ar": "القديس يوليوس الإقفهصي",
			"id": "St. Julius dari Ekbehs"
		},
		"St. Peter the Seal of the Martyrs": {
			"en": "St. Peter the Seal of the Martyrs",
			"ar": "استشهاد البابا بطرس خاتم الشهداء",
			"id": "St. Peter segel para martir"
		},
		"St. Cyprian and St. Justina": {
			"en": "St. Cyprian and St. Justina",
			"ar": "الشهيد كبريانوس و الشهيدة يوستينا",
			"id": "St. Cyprian dan St. Justina"
		},
		"Forty-Nine Martyrs and Elders of Scetis": {
			"en": "Forty-Nine Martyrs and Elders of Scetis",
			"ar": "تسعة وأربعون شهيدا شيوخ شيهات",
			"id": "Empat Puluh Sembilan Martir dan Para Pemimpin Scetis"
		},
		"Martyrs of Akmim": {
			"en": "Martyrs of Akmim",
			"ar": "شهداء أخميم",
			"id": "Para Martir Akmim"
		},
		"Martyrs of Fayoum": {
			"en": "Martyrs of Fayoum",
			"ar": "الشهداء الفيوم",
			"id": "Para Martir Fayoum"
		},
		"Female Martyrs": {
			"en": "Female Martyrs",
			"ar": "الشهيدات",
			"id": "Martir Wanita"
		},
		"St. Demiana": {
			"en": "St. Demiana",
			"ar": "الشهيدة دميانه",
			"id": "St. Demiana"
		},
		"St. Dolagy": {
			"en": "St. Dolagy",
			"ar": "الشهيدة دولاجى",
			"id": "St. Dolagy"
		},
		"St. Barbara": {
			"en": "St. Barbara",
			"ar": "القديسة بربارة",
			"id": "St. Barbara"
		},
		"St. Juliana": {
			"en": "St. Juliana",
			"ar": "القديسة يوليانه",
			"id": "St. Juliana"
		},
		"St. Marina the Martyr": {
			"en": "St. Marina the Martyr",
			"ar": "الشهيدة مارينا",
			"id": "St. Marina Sang Martir"
		},
		"St. Rebecca and Her Five Children": {
			"en": "St. Rebecca and Her Five Children",
			"ar": "الشهيدة رفقة وأولادها الخمسة",
			"id": "St. Rebecca dan Lima Anak-anaknya"
		},
		"St. Catherine of Alexandria": {
			"en": "St. Catherine of Alexandria",
			"ar": "الشهيدة كاترين الإسكندرانية",
			"id": "St. Catherine dari Alexandria"
		},
		"Male Saints": {
			"en": "Male Saints",
			"ar": "القديسون",
			"id": "Para Santo Lelaki"
		},
		"St. Joseph the Carpenter": {
			"en": "St. Joseph the Carpenter",
			"ar": "القديس يوسف النجار",
			"id": "St. Yusuf sang Tukang Kayu"
		},
		"St. Anthony the Great": {
			"en": "St. Anthony the Great",
			"ar": "القديس أنطونيوس الكبير",
			"id": "St. Anthony yang Agung"
		},
		"St. Paul the Hermit": {
			"en": "St. Paul the Hermit",
			"ar": "القديس بولس الناسك",
			"id": "St. Paulus si Pertapa"
		},
		"St. Thomas the Hermit": {
			"en": "St. Thomas the Hermit",
			"ar": "القديس توما الناسك",
			"id": "St. Thomas si Pertapa"
		},
		"St. Macarius the Great": {
			"en": "St. Macarius the Great",
			"ar": "القديس مكاريوس الكبير",
			"id": "St. Macarius yang Agung"
		},
		"St. Macarius of Alexandria": {
			"en": "St. Macarius of Alexandria",
			"ar": "القديس مكاريوس الإسكندري",
			"id": "St. Macarius dari Aleksandria"
		},
		"St. Macarius Bishop of Edkow": {
			"en": "St. Macarius Bishop of Edkow",
			"ar": "القديس مكاريوس أسقف إدفو",
			"id": "St. Macarius Uskup Edkow"
		},
		"St. John the Short": {
			"en": "St. John the Short",
			"ar": "القديس يوحنا القصير",
			"id": "St. Yohanes si Pendek"
		},
		"St. Pishoy and St. Paul of Tammah": {
			"en": "St. Pishoy and St. Paul of Tammah",
			"ar": "القديس بشوي والقديس بولس الطماوي",
			"id": "St. Pishoy dan St. Paulus dari Tammah"
		},
		"St. Arsenius the Teacher of the Kings": {
			"en": "St. Arsenius the Teacher of the Kings",
			"ar": "القديس أرسانيوس معلم الملوك",
			"id": "St. Arsenius Pengajar Para Raja"
		},
		"St. Maximus and St. Dometius": {
			"en": "St. Maximus and St. Dometius",
			"ar": "القديس ماكسيموس والقديس دومتياس",
			"id": "St. Maximus dan St. Dometius"
		},
		"St. Moses the Strong": {
			"en": "St. Moses the Strong",
			"ar": "القديس موسى القوي",
			"id": "St. Musa yang Kuat"
		},
		"St. John Kame": {
			"en": "St. John Kame",
			"ar": "القديس يوحنا كامي",
			"id": "St. Yohanes Kame"
		},
		"St. Pachom and St. Theodore": {
			"en": "St. Pachom and St. Theodore",
			"ar": "القديس باخوميوس والقديس ثيودورس",
			"id": "St. Pachom dan St. Theodore"
		},
		"St. Misael the Anchorite": {
			"en": "St. Misael the Anchorite",
			"ar": "القديس ميسائيل الناسك",
			"id": "St. Misael si Pertapa"
		},
		"St. Shenute the Archimandrite": {
			"en": "St. Shenute the Archimandrite",
			"ar": "القديس شنودة رئيس المتوحدين",
			"id": "St. Shenute si Kepala Pertapa"
		},
		"St. Besa": {
			"en": "St. Besa",
			"ar": "القديس بيسا",
			"id": "St. Besa"
		},
		"St. Samuel the Confessor": {
			"en": "St. Samuel the Confessor",
			"ar": "القديس صموئيل المعترف",
			"id": "St. Samuel si Pengaku iman"
		},
		"St. Nopher the Anchorite": {
			"en": "St. Nopher the Anchorite",
			"ar": "القديس نوفير الناسك",
			"id": "St. Nopher si Pertapa"
		},
		"King David the Prophet": {
			"en": "King David the Prophet",
			"ar": "الملك داوود النبي",
			"id": "Raja Daud sang Nabi"
		},
		"St. Karas the Anchorite": {
			"en": "St. Karas the Anchorite",
			"ar": "القديس كاراس الناسك",
			"id": "St. Karas si Pertapa"
		},
		"St. Apollo and St. Apip": {
			"en": "St. Apollo and St. Apip",
			"ar": "القديس أبولونيوس والقديس أبيب",
			"id": "St. Apollo dan St. Apip"
		},
		"St. Parsouma the Naked": {
			"en": "St. Parsouma the Naked",
			"ar": "القديس بارسوميا العاري",
			"id": "St. Parsouma si Telanjang"
		},
		"St. Roweis (Teji)": {
			"en": "St. Roweis (Teji)",
			"ar": "القديس رويس (تيجي)",
			"id": "St. Roweis (Teji)"
		},
		"St. Mark Abba Antony": {
			"en": "St. Mark Abba Antony",
			"ar": "القديس مرقس أبا أنطونيوس",
			"id": "St. Markus Abba Antonius"
		},
		"St. Bashouna the Monk and Martyr": {
			"en": "St. Bashouna the Monk and Martyr",
			"ar": "القديس باشونة الراهب والشهيد",
			"id": "St. Bashouna si Rahib dan Martir"
		},
		"St. Athanasius the Apostolic": {
			"en": "St. Athanasius the Apostolic",
			"ar": "القديس أثناسيوس الرسولي",
			"id": "St. Athanasius sang Rasul"
		},
		"St. Gregory the Theologian": {
			"en": "St. Gregory the Theologian",
			"ar": "القديس غريغوريوس اللاهوتي",
			"id": "St. Gregorius sang Teolog"
		},
		"St. Severus Patriarch of Antioch": {
			"en": "St. Severus Patriarch of Antioch",
			"ar": "القديس سيفيروس بطريرك أنطاكية",
			"id": "St. Severus Patriark dari Antiokhia"
		},
		"St. Cyril of Alexandria": {
			"en": "St. Cyril of Alexandria",
			"ar": "القديس سيريلوس الإسكندري",
			"id": "St. Cyril dari Aleksandria"
		},
		"St. Takla Haymanout": {
			"en": "St. Takla Haymanout",
			"ar": "القديسة تكلة هيمانوت",
			"id": "St. Takla Haymanout"
		},
		"St. Pistavros": {
			"en": "St. Pistavros",
			"ar": "القديس بيستافروس",
			"id": "St. Pistavros"
		},
		"St. Simon the Tanner": {
			"en": "St. Simon the Tanner",
			"ar": "القديس سمعان الجلودي",
			"id": "St. Simon si Pengolahan Kulit"
		},
		"King Constantine and Queen Helen": {
			"en": "King Constantine and Queen Helen",
			"ar": "الملك قسطنطين والملكة هيلانة",
			"id": "Raja Konstantinus dan Ratu Helena"
		},
		"Patriarchs Abraham, Isaac, and Jacob": {
			"en": "Patriarchs Abraham, Isaac, and Jacob",
			"ar": "الآباء إبراهيم وإسحاق ويعقوب",
			"id": "Para Patriark Abraham, Ishak, dan Yakub"
		},
		"The Three Holy Youth": {
			"en": "The Three Holy Youth",
			"ar": "الفتيان الثلاثة القديسون",
			"id": "Tiga Pemuda Suci"
		},
		"Female Saints": {
			"en": "Female Saints",
			"ar": "القديسات",
			"id": "Para Santa Wanita"
		},
		"St. Mary Magdalene": {
			"en": "St. Mary Magdalene",
			"ar": "القديسة مريم المجدلية",
			"id": "St. Maria Magdalena"
		},
		"St. Verena": {
			"en": "St. Verena",
			"ar": "القديسة فيرينا",
			"id": "St. Verena"
		},
		"St. Monica and St. Augustine": {
			"en": "St. Monica and St. Augustine",
			"ar": "القديسة مونيكا والقديس أوغسطينوس",
			"id": "St. Monica dan St. Agustinus"
		},
		"St. Mary of Egypt": {
			"en": "St. Mary of Egypt",
			"ar": "القديسة مريم المصرية",
			"id": "St. Maria dari Mesir"
		},
		"St. Veronica": {
			"en": "St. Veronica",
			"ar": "القديسة فيرونيكا",
			"id": "St. Veronika"
		},
		"Clergy": {
			"en": "Clergy",
			"ar": "رجال الدين",
			"id": "Klerus"
		},
		"Anba Abraam Bishop of Fayoum": {
			"en": "Anba Abraam Bishop of Fayoum",
			"ar": "الأنبا إبرام أسقف الفيوم",
			"id": "Anba Abraam Uskup Fayoum"
		},
		"Fr. Abdelmessih El-Manahri": {
			"en": "Fr. Abdelmessih El-Manahri",
			"ar": "القس عبدالمسيح المنهري",
			"id": "Fr. Abdelmessih El-Manahri"
		},
		"His Holiness Pope Kyrillos VI": {
			"en": "His Holiness Pope Kyrillos VI",
			"ar": "قداسة البابا كيرلس السادس",
			"id": "Kudus Paus Kyrillos VI"
		},
		"St. Habib Girgis": {
			"en": "St. Habib Girgis",
			"ar": "القديس حبيب جرجس",
			"id": "St. Habib Girgis"
		},
		"Patriarch": {
			"en": "Patriarch",
			"ar": "البطريرك",
			"id": "Paus"
		},
		"Fractions": {
			"en": "Fractions",
			"ar": "القسمة",
			"id": "Fraksi"
		},
		"Doxologies": {
			"en": "Doxologies",
			"ar": "الذكصولوجيات",
			"id": "Doksologi"
		},
		"Papal": {
			"en": "Papal",
			"ar": "البطريرك",
			"id": "Paus"
		},
		"Papal Hymns": {
			"en": "Papal Hymns",
			"ar": "ألحان البطرك",
			"id": "Lagu untuk Paus"
		},
		"Departed Patriarchs": {
			"en": "Departed Patriarchs",
			"ar": "البطاركة الراحلون",
			"id": "Paus yang Berpulang"
		},
		"Psalms and Absolution": {
			"en": "Psalms and Absolution",
			"ar": "المزامير والتحليل",
			"id": "Mazmur dan Absolusi"
		},
		"Litanies": {
			"en": "Litanies",
			"ar": "الاواشي",
			"id": "Litani"
		},
		"Healing to the Sick": {
			"en": "Healing to the Sick",
			"ar": "اوشية المرضى",
			"id": "Penyembuhan Orang Sakit"
		},
		"Three Absolutions": {
			"en": "Three Absolutions",
			"ar": "ثلاث تحاليل",
			"id": "Tiga Absolusi"
		},
		"Procession of the Lamb": {
			"en": "Procession of the Lamb",
			"ar": "دورة الحمل",
			"id": "Prosessi Domba Allah"
		},
		"Absolution of the Servants": {
			"en": "Absolution of the Servants",
			"ar": "تحليل الخدام",
			"id": "Absolusi Pelayan"
		},
		"Epistle Prayers": {
			"en": "Epistle Prayers",
			"ar": "صلوات الرسائل",
			"id": "Doa Surat-surat"
		},
		"Mystery of the Gospel": {
			"en": "Mystery of the Gospel",
			"ar": "سر الإنجيل",
			"id": "Rahasia Injil"
		},
		"Prayer of the Veil": {
			"en": "Prayer of the Veil",
			"ar": "صلاة الحجاب",
			"id": "Doa Veil"
		},
		"Great Fast Litanies": {
			"en": "Great Fast Litanies",
			"ar": "طلبات للصوم الكبير",
			"id": "Litani Puasa Agung"
		},
		"Prayer at the Tomb": {
			"en": "Prayer at the Tomb",
			"ar": "الصلاة على القبر",
			"id": "Doa di depan Kubur"
		},
		"Benediction": {
			"en": "Benediction",
			"ar": "البركة القصيرة",
			"id": "Berkat Pendek"
		},
		"Special": {
			"en": "Special",
			"ar": "مناسبات",
			"id": "Acara Spesial"
		},
		"Baptism": {
			"en": "Baptism",
			"ar": "المعمودية",
			"id": "Baptisan"
		},
		"Absolution of the Woman (Boy)": {
			"en": "Absolution of the Woman (Boy)",
			"ar": "تحليل المرأة (ذكرا)",
			"id": "Absolusi Wanita (Laki-Laki)"
		},
		"Absolution of the Woman (Girl)": {
			"en": "Absolution of the Woman (Girl)",
			"ar": "تحليل المرأة (انثى)",
			"id": "Absolusi Wanita (Perempuan)"
		},
		"Holy Baptism": {
			"en": "Holy Baptism",
			"ar": "المعمودية المقدسة",
			"id": "Baptisan Suci"
		},
		"Consecrating the Water": {
			"en": "Consecrating the Water",
			"ar": "تقديس ماء المعمودية",
			"id": "Konsekrasi Air Baptisan"
		},
		"Holy Myron": {
			"en": "Holy Myron",
			"ar": "الميرون المقدس",
			"id": "Mairun Suci"
		},
		"Loosing the Girdle": {
			"en": "Loosing the Girdle",
			"ar": "صلاة حل زنار المعمدين",
			"id": "Melepaskan Selempang Ikat Mereka yang Telah Dibaptis"
		},
		"Bathing Prayer": {
			"en": "Bathing Prayer",
			"ar": "صلاة الحميم",
			"id": "Doa Pembasuhan"
		},
		"Crowning": {
			"en": "Crowning",
			"ar": "الإكليل",
			"id": "Pernikahan"
		},
		"Engagement Prayer": {
			"en": "Engagement Prayer",
			"ar": "صلاة الخطبة",
			"id": "Doa Bertunangan"
		},
		"Crowning Prayer": {
			"en": "Crowning Prayer",
			"ar": "صلاة الاكليل",
			"id": "Doa Pernikahan"
		},
		"Second Marriage Prayer": {
			"en": "Second Marriage Prayer",
			"ar": "صلاة الزيجة الثانية",
			"id": "Doa untuk Pernikahan Kedua"
		},
		"Unction": {
			"en": "Unction",
			"ar": "المسحة المقدسة",
			"id": "Pengurapan Suci"
		},
		"First Prayer": {
			"en": "First Prayer",
			"ar": "الصلاة الأولى",
			"id": "Doa Pertama"
		},
		"Second Prayer": {
			"en": "Second Prayer",
			"ar": "الصلاة الثانية",
			"id": "Doa Kedua"
		},
		"Third Prayer": {
			"en": "Third Prayer",
			"ar": "الصلاة الثالثة",
			"id": "Doa Ketiga"
		},
		"Fourth Prayer": {
			"en": "Fourth Prayer",
			"ar": "الصلاة الرابعة",
			"id": "Doa Keempat"
		},
		"Fifth Prayer": {
			"en": "Fifth Prayer",
			"ar": "Doa Kelima",
			"id": "الصلاة الخامسة"
		},
		"Sixth Prayer": {
			"en": "Sixth Prayer",
			"ar": "الصلاة السادسة",
			"id": "Doa Keempat"
		},
		"Seventh Prayer": {
			"en": "Seventh Prayer",
			"ar": "الصلاة السابعة",
			"id": "Doa Ketujuh"
		},
		"Veneration": {
			"en": "Veneration",
			"ar": "التمجيد",
			"id": "Pujian Orang Kudus"
		},
		"Funeral": {
			"en": "Funeral",
			"ar": "الجناز",
			"id": "Pemakaman"
		},
		"Men": {
			"en": "Men",
			"ar": "الرجال الكبار",
			"id": "Laki-Laki Dewasa"
		},
		"Women": {
			"en": "Women",
			"ar": "النساء الكبار",
			"id": "Perempuan Dewasa"
		},
		"Women During Delivery": {
			"en": "Women During Delivery",
			"ar": "تجنيز النساء أثناء الولادة",
			"id": "Perempuan Saat Mlahirkan"
		},
		"Boys": {
			"en": "Boys",
			"ar": "الصبيان",
			"id": "Pemuda - Laki-Laki"
		},
		"Girls": {
			"en": "Girls",
			"ar": "البنات",
			"id": "Pemuda - Perempuan"
		},
		"Bishops": {
			"en": "Bishops",
			"ar": "الأساقفة",
			"id": "Para Uskup"
		},
		"Monk Priests": {
			"en": "Monk Priests",
			"ar": "الرهبان الكهنة",
			"id": "Para Biarawan sang Imam"
		},
		"Monks": {
			"en": "Monks",
			"ar": "الرهبان",
			"id": "Para Biarawan"
		},
		"Nuns": {
			"en": "Nuns",
			"ar": "الراهبات",
			"id": "Para Biarawati"
		},
		"3rd and 40th Days": {
			"en": "3rd and 40th Days",
			"ar": "صلاة الثالث والاربعين",
			"id": "Doa Hari Ketiga dan Keempat Puluh"
		},
		"Consecrations": {
			"en": "Consecrations",
			"ar": "التكريس",
			"id": "konsekrasi"
		},
		"Church": {
			"en": "Church",
			"ar": "الكنيسة",
			"id": "Gereja"
		},
		"Part 1": {
			"en": "Part 1",
			"ar": "الجزء 1",
			"id": "Bagian ke-1"
		},
		"Part 2": {
			"en": "Part 2",
			"ar": "الجزء 2",
			"id": "Bagian ke-2"
		},
		"Part 3": {
			"en": "Part 3",
			"ar": "الجزء 3",
			"id": "Bagian ke-3"
		},
		"Part 4": {
			"en": "Part 4",
			"ar": "الجزء الرابع",
			"id": "Bagian ke-4"
		},
		"Altar": {
			"en": "Altar",
			"ar": "المذبح",
			"id": "Altar"
		},
		"Vessels, Censers, and Icons": {
			"en": "Vessels, Censers, and Icons",
			"ar": "صلوات تكريس الأواني والمجامر والأيقونات",
			"id": "Konsekrasi Piring, Pedupaan dan Ikon"
		},
		"Baptistery": {
			"en": "Baptistery",
			"ar": "المعمودية",
			"id": "Kolam Baptisan"
		},
		"Cornerstone": {
			"en": "Cornerstone",
			"ar": "حجر الأساس",
			"id": "Batu Fondasi"
		},
		"Oil": {
			"en": "Oil",
			"ar": "الزيت",
			"id": "Minyak"
		},
		"Myron": {
			"en": "Myron",
			"ar": "الميرون",
			"id": "Mairon"
		},
		"Preparation": {
			"en": "Preparation",
			"ar": "الأعداد",
			"id": "Mempersiapkan"
		},
		"Consecration": {
			"en": "Consecration",
			"ar": "التكريس",
			"id": "Konsekrasi"
		},
		"Oil of Gladness": {
			"en": "Oil of Gladness",
			"ar": "زيت الفرح",
			"id": "Minyak Kegembiraan"
		},
		"Pre-sanctified Chrism": {
			"en": "Pre-sanctified Chrism",
			"ar": "إيداع الخميرة",
			"id": "Penambahan Fermipan"
		},
		"Ordinations": {
			"en": "Ordinations",
			"ar": "الرسامات",
			"id": "Ordinasi"
		},
		"Chanter": {
			"en": "Chanter",
			"ar": "الابصلتس",
			"id": "Penyanyi - Psaltos"
		},
		"Reader": {
			"en": "Reader",
			"ar": "الاغنسطس",
			"id": "Pembaca - Oghnostos"
		},
		"Subdeacon": {
			"en": "Subdeacon",
			"ar": "الأيبوذياكون",
			"id": "Ebediakon"
		},
		"Deacon": {
			"en": "Deacon",
			"ar": "الشماس",
			"id": "Diakon"
		},
		"Archdeacon": {
			"en": "Archdeacon",
			"ar": "رئيس الشمامسة",
			"id": "Kepala Diaken (Arch-diaken)"
		},
		"Priest": {
			"en": "Priest",
			"ar": "الكاهن",
			"id": "Imam"
		},
		"Hegumen": {
			"en": "Hegumen",
			"ar": "القمص",
			"id": "Hegumen"
		},
		"Bishop": {
			"en": "Bishop",
			"ar": "الأسقف",
			"id": "Seorang Uskup"
		},
		"Metropolitan": {
			"en": "Metropolitan",
			"ar": "المطران",
			"id": "Metropolitan"
		},
		"Papal Enthronement": {
			"en": "Papal Enthronement",
			"ar": "تنصيب قداسة البابا",
			"id": "Penobatan Paus"
		},
		"Monk": {
			"en": "Monk",
			"ar": "الراهب",
			"id": "Seorang Biarawan"
		},
		"Sisters": {
			"en": "Sisters",
			"ar": "المكرسات",
			"id": "Wanita Ditahbiskan"
		},
		"Reception of New Priest": {
			"en": "Reception of New Priest",
			"ar": "استقبال الكاهن الجديد",
			"id": "Penerimaan Imam Baru"
		},
		"Home Blessing": {
			"en": "Home Blessing",
			"ar": "تبريك المنازل",
			"id": "Doa untuk Memberkati Rumah"
		},
		"Prostration": {
			"en": "Prostration",
			"ar": "صلاة السجدة",
			"id": "Doa Bersujud"
		},
		"Praises": {
			"en": "Praises",
			"ar": "تسبحة",
			"id": "Pujian"
		},
		"First Prostration": {
			"en": "First Prostration",
			"ar": "السجدة الأولى",
			"id": "Doa Bersujud Pertama"
		},
		"Second Prostration": {
			"en": "Second Prostration",
			"ar": "السجدة الثانية",
			"id": "Doa Bersujud Kedua"
		},
		"Third Prostration": {
			"en": "Third Prostration",
			"ar": "السجدة الثالثة",
			"id": "Doa Bersujud Ketiga"
		},
		"Pascha": {
			"en": "Pascha",
			"ar": "البصخة",
			"id": "Doa Paskah"
		},
		"Sunday": {
			"en": "Sunday",
			"ar": "الأحد",
			"id": "Minggu"
		},
		"General Funeral Prayer": {
			"en": "General Funeral Prayer",
			"ar": "صلاة الجناز العام",
			"id": "Doa Pemakaman Umum"
		},
		"Insights": {
			"en": "Insights",
			"ar": "بيان",
			"id": "Wawasan"
		},
		"Sunday Day": {
			"en": "Sunday Day",
			"ar": "يوم الاحد",
			"id": "Hari Minggu"
		},
		"Monday Eve": {
			"en": "Monday Eve",
			"ar": "ليلة لأثنين",
			"id": "Malam Hari Senin"
		},
		"Monday": {
			"en": "Monday",
			"ar": "الاثنين",
			"id": "Senin"
		},
		"Monday Day": {
			"en": "Monday Day",
			"ar": "يوم الاثنين",
			"id": "Hari Senin"
		},
		"Tuesday Eve": {
			"en": "Tuesday Eve",
			"ar": "ليلة الثلاثاء",
			"id": "Malam Hari Selasa"
		},
		"Tuesday": {
			"en": "Tuesday",
			"ar": "الثلاثاء",
			"id": "Selasa"
		},
		"Tuesday Day": {
			"en": "Tuesday Day",
			"ar": "يوم الثلاثاء",
			"id": "Hari Selasa"
		},
		"Wednesday Eve": {
			"en": "Wednesday Eve",
			"ar": "ليلة الأربعاء",
			"id": "Malam Hari Rabu"
		},
		"Wednesday": {
			"en": "Wednesday",
			"ar": "الأربعاء",
			"id": "Rabu"
		},
		"Wednesday Day": {
			"en": "Wednesday Day",
			"ar": "يوم الأربعاء",
			"id": "Hari Rabu"
		},
		"Thursday Eve": {
			"en": "Thursday Eve",
			"ar": "ليلة الخميس",
			"id": "Malam Hari Kamis"
		},
		"Thursday": {
			"en": "Thursday",
			"ar": "الخميس",
			"id": "Kamis"
		},
		"Thursday Day": {
			"en": "Thursday Day",
			"ar": "يوم الخميس",
			"id": "Hari Kamis"
		},
		"Liturgy of the Waters": {
			"en": "Liturgy of the Waters",
			"ar": "قداس المياه",
			"id": "Liturgi Air"
		},
		"Friday Eve": {
			"en": "Friday Eve",
			"ar": "ليله الجمعة",
			"id": "Malam hari Jumat"
		},
		"Friday": {
			"en": "Friday",
			"ar": "الجمعة",
			"id": "Jumat"
		},
		"Saturday": {
			"en": "Saturday",
			"ar": "السبت",
			"id": "Sabtu"
		},
		"Third and Sixth Hours": {
			"en": "Third and Sixth Hours",
			"ar": "الساعة السادسة والتاسعة",
			"id": "Jam Keenam dan Kesembilan"
		},
		"Ninth Hour": {
			"en": "Ninth Hour",
			"ar": "الساعة التاسعة",
			"id": "Kam Kesembilan"
		},
		"Resurrection": {
			"en": "Resurrection",
			"ar": "القيامة",
			"id": "Kebangkitan"
		},
		"Lakkan": {
			"en": "Lakkan",
			"ar": "اللقان",
			"id": "lakkan"
		},
		"Apostles Feast": {
			"en": "Apostles Feast",
			"ar": "صوم الرسل",
			"id": "Puasa Para Rasul"
		},

		"Settings": {
			"en": "Settings",
			"ar": "الخصائص",
			"id": "Pengaturan"
		}
	}

	function setKeys() {
		document.querySelectorAll('[i18n]').forEach(elem => {
			if (elem.getAttribute('i18n') || !elem.innerHTML) return; // already has the key, or empty
			elem.setAttribute('i18n', elem.childNodes[0].textContent.replace(/[\t\n]/g, ''));
		});
	}

	function exec() {
		const lang = SettingsPage.get('appLang');
		setKeys();

		document.querySelectorAll('[i18n]').forEach(elem => {
			const textNode = elem.childNodes[0];
			if (!textNode) return; // can be null if elem is empty

			const key = elem.getAttribute('i18n');
			textNode.textContent = translations[key]?.[lang] || key;
		});

		document.documentElement.setAttribute('dir', lang == 'ar' ? 'rtl' : 'ltr');
	}

	return {
		exec,
	}

})();