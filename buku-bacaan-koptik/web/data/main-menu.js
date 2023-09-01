export const MainMenu = (() => {

	const DATA = [

		// AGPEYA
		{
			"name": "Agpeya",
			"image": "assets/images/agpeya.jpg",
			"menu": [
				{
					"name": "1st Hour",
					"path": "agpeya/Agpeya - 1st Hour"
				},
				{
					"name": "3rd Hour",
					"path": "agpeya/Agpeya - 3rd Hour"
				},
				{
					"name": "6th Hour",
					"path": "agpeya/Agpeya - 6th Hour"
				},
				{
					"name": "9th Hour",
					"path": "agpeya/Agpeya - 9th Hour"
				},
				{
					"name": "11th Hour",
					"path": "agpeya/Agpeya - 11th Hour"
				},
				{
					"name": "12th Hour",
					"path": "agpeya/Agpeya - 12th Hour"
				},
				{
					"name": "Veil",
					"path": "agpeya/Agpeya - Veil"
				},
				{
					"name": "Midnight",
					"path": "agpeya/Agpeya - Midnight Hour"
				},
				{
					"name": "Prayers",
					"menu": [
						{
							"name": "Confession",
							"path": "agpeya/Agpeya - Confession"
						},
						{
							"name": "Communion",
							"path": "agpeya/Agpeya - Communion"
						},
						{
							"name": "Guidance",
							"path": "agpeya/Agpeya - Guidance"
						},
						{
							"name": "Meals",
							"path": "agpeya/Agpeya - Meals"
						},
						{
							"name": "Priests",
							"path": "agpeya/Agpeya - Priests"
						},
						{
							"name": "Deacons",
							"path": "agpeya/Agpeya - Deacons"
						}
					]
				}
			]
		},

		// PSALMODY
		{
			"name": "Psalmody",
			"image": "assets/images/menu_ic_church_services.jpg",
			"menu": [
				{
					"name": "Vesper Praises",
					"path": "praises/Vesper Praises"
				},
				{
					"name": "Midnight Praises",
					"path": "praises/Midnight Praises"
				},
				{
					"name": "Morning Praises",
					"path": "praises/Morning Praises"
				}
			]
		},

		// BIBLE
		{
			"name": "Bible",
			"image": "assets/images/bible.jpg",
			"menu": [
				{
					"name": "Genesis",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Genesis/Genesis 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Genesis/Genesis 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Genesis/Genesis 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Genesis/Genesis 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Genesis/Genesis 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Genesis/Genesis 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Genesis/Genesis 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Genesis/Genesis 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Genesis/Genesis 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Genesis/Genesis 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Genesis/Genesis 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Genesis/Genesis 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Genesis/Genesis 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Genesis/Genesis 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Genesis/Genesis 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Genesis/Genesis 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Genesis/Genesis 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Genesis/Genesis 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Genesis/Genesis 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Genesis/Genesis 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Genesis/Genesis 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Genesis/Genesis 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Genesis/Genesis 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Genesis/Genesis 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Genesis/Genesis 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Genesis/Genesis 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Genesis/Genesis 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Genesis/Genesis 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Genesis/Genesis 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Genesis/Genesis 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Genesis/Genesis 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Genesis/Genesis 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Genesis/Genesis 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Genesis/Genesis 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Genesis/Genesis 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Genesis/Genesis 36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Genesis/Genesis 37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Genesis/Genesis 38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Genesis/Genesis 39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Genesis/Genesis 40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Genesis/Genesis 41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Genesis/Genesis 42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Genesis/Genesis 43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Genesis/Genesis 44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Genesis/Genesis 45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Genesis/Genesis 46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Genesis/Genesis 47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Genesis/Genesis 48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Genesis/Genesis 49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Genesis/Genesis 50"
						}
					]
				},
				{
					"name": "Exodus",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Exodus/Exodus 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Exodus/Exodus 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Exodus/Exodus 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Exodus/Exodus 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Exodus/Exodus 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Exodus/Exodus 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Exodus/Exodus 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Exodus/Exodus 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Exodus/Exodus 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Exodus/Exodus 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Exodus/Exodus 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Exodus/Exodus 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Exodus/Exodus 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Exodus/Exodus 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Exodus/Exodus 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Exodus/Exodus 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Exodus/Exodus 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Exodus/Exodus 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Exodus/Exodus 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Exodus/Exodus 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Exodus/Exodus 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Exodus/Exodus 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Exodus/Exodus 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Exodus/Exodus 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Exodus/Exodus 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Exodus/Exodus 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Exodus/Exodus 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Exodus/Exodus 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Exodus/Exodus 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Exodus/Exodus 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Exodus/Exodus 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Exodus/Exodus 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Exodus/Exodus 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Exodus/Exodus 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Exodus/Exodus 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Exodus/Exodus 36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Exodus/Exodus 37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Exodus/Exodus 38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Exodus/Exodus 39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Exodus/Exodus 40"
						}
					]
				},
				{
					"name": "Leviticus",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Leviticus/Leviticus 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Leviticus/Leviticus 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Leviticus/Leviticus 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Leviticus/Leviticus 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Leviticus/Leviticus 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Leviticus/Leviticus 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Leviticus/Leviticus 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Leviticus/Leviticus 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Leviticus/Leviticus 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Leviticus/Leviticus 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Leviticus/Leviticus 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Leviticus/Leviticus 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Leviticus/Leviticus 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Leviticus/Leviticus 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Leviticus/Leviticus 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Leviticus/Leviticus 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Leviticus/Leviticus 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Leviticus/Leviticus 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Leviticus/Leviticus 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Leviticus/Leviticus 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Leviticus/Leviticus 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Leviticus/Leviticus 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Leviticus/Leviticus 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Leviticus/Leviticus 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Leviticus/Leviticus 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Leviticus/Leviticus 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Leviticus/Leviticus 27"
						}
					]
				},
				{
					"name": "Numbers",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Numbers/Numbers 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Numbers/Numbers 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Numbers/Numbers 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Numbers/Numbers 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Numbers/Numbers 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Numbers/Numbers 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Numbers/Numbers 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Numbers/Numbers 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Numbers/Numbers 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Numbers/Numbers 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Numbers/Numbers 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Numbers/Numbers 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Numbers/Numbers 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Numbers/Numbers 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Numbers/Numbers 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Numbers/Numbers 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Numbers/Numbers 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Numbers/Numbers 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Numbers/Numbers 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Numbers/Numbers 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Numbers/Numbers 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Numbers/Numbers 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Numbers/Numbers 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Numbers/Numbers 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Numbers/Numbers 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Numbers/Numbers 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Numbers/Numbers 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Numbers/Numbers 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Numbers/Numbers 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Numbers/Numbers 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Numbers/Numbers 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Numbers/Numbers 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Numbers/Numbers 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Numbers/Numbers 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Numbers/Numbers 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Numbers/Numbers 36"
						}
					]
				},
				{
					"name": "Deuteronomy",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Deuteronomy/Deuteronomy 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Deuteronomy/Deuteronomy 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Deuteronomy/Deuteronomy 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Deuteronomy/Deuteronomy 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Deuteronomy/Deuteronomy 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Deuteronomy/Deuteronomy 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Deuteronomy/Deuteronomy 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Deuteronomy/Deuteronomy 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Deuteronomy/Deuteronomy 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Deuteronomy/Deuteronomy 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Deuteronomy/Deuteronomy 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Deuteronomy/Deuteronomy 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Deuteronomy/Deuteronomy 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Deuteronomy/Deuteronomy 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Deuteronomy/Deuteronomy 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Deuteronomy/Deuteronomy 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Deuteronomy/Deuteronomy 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Deuteronomy/Deuteronomy 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Deuteronomy/Deuteronomy 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Deuteronomy/Deuteronomy 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Deuteronomy/Deuteronomy 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Deuteronomy/Deuteronomy 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Deuteronomy/Deuteronomy 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Deuteronomy/Deuteronomy 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Deuteronomy/Deuteronomy 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Deuteronomy/Deuteronomy 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Deuteronomy/Deuteronomy 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Deuteronomy/Deuteronomy 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Deuteronomy/Deuteronomy 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Deuteronomy/Deuteronomy 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Deuteronomy/Deuteronomy 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Deuteronomy/Deuteronomy 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Deuteronomy/Deuteronomy 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Deuteronomy/Deuteronomy 34"
						}
					]
				},
				{
					"name": "Joshua",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Joshua/Joshua 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Joshua/Joshua 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Joshua/Joshua 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Joshua/Joshua 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Joshua/Joshua 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Joshua/Joshua 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Joshua/Joshua 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Joshua/Joshua 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Joshua/Joshua 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Joshua/Joshua 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Joshua/Joshua 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Joshua/Joshua 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Joshua/Joshua 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Joshua/Joshua 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Joshua/Joshua 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Joshua/Joshua 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Joshua/Joshua 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Joshua/Joshua 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Joshua/Joshua 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Joshua/Joshua 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Joshua/Joshua 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Joshua/Joshua 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Joshua/Joshua 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Joshua/Joshua 24"
						}
					]
				},
				{
					"name": "Judges",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Judges/Judges 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Judges/Judges 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Judges/Judges 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Judges/Judges 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Judges/Judges 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Judges/Judges 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Judges/Judges 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Judges/Judges 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Judges/Judges 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Judges/Judges 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Judges/Judges 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Judges/Judges 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Judges/Judges 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Judges/Judges 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Judges/Judges 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Judges/Judges 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Judges/Judges 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Judges/Judges 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Judges/Judges 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Judges/Judges 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Judges/Judges 21"
						}
					]
				},
				{
					"name": "Ruth",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ruth/Ruth 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ruth/Ruth 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ruth/Ruth 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ruth/Ruth 4"
						}
					]
				},
				{
					"name": "1 Samuel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Samuel/1 Samuel 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Samuel/1 Samuel 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Samuel/1 Samuel 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Samuel/1 Samuel 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Samuel/1 Samuel 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Samuel/1 Samuel 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Samuel/1 Samuel 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Samuel/1 Samuel 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Samuel/1 Samuel 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Samuel/1 Samuel 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Samuel/1 Samuel 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Samuel/1 Samuel 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Samuel/1 Samuel 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Samuel/1 Samuel 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Samuel/1 Samuel 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Samuel/1 Samuel 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/1 Samuel/1 Samuel 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/1 Samuel/1 Samuel 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/1 Samuel/1 Samuel 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/1 Samuel/1 Samuel 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/1 Samuel/1 Samuel 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/1 Samuel/1 Samuel 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/1 Samuel/1 Samuel 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/1 Samuel/1 Samuel 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/1 Samuel/1 Samuel 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/1 Samuel/1 Samuel 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/1 Samuel/1 Samuel 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/1 Samuel/1 Samuel 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/1 Samuel/1 Samuel 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/1 Samuel/1 Samuel 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/1 Samuel/1 Samuel 31"
						}
					]
				},
				{
					"name": "2 Samuel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Samuel/2 Samuel 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Samuel/2 Samuel 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Samuel/2 Samuel 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Samuel/2 Samuel 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Samuel/2 Samuel 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Samuel/2 Samuel 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Samuel/2 Samuel 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Samuel/2 Samuel 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Samuel/2 Samuel 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Samuel/2 Samuel 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Samuel/2 Samuel 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Samuel/2 Samuel 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Samuel/2 Samuel 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/2 Samuel/2 Samuel 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/2 Samuel/2 Samuel 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/2 Samuel/2 Samuel 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/2 Samuel/2 Samuel 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/2 Samuel/2 Samuel 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/2 Samuel/2 Samuel 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/2 Samuel/2 Samuel 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/2 Samuel/2 Samuel 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/2 Samuel/2 Samuel 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/2 Samuel/2 Samuel 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/2 Samuel/2 Samuel 24"
						}
					]
				},
				{
					"name": "1 Kings",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Kings/1 Kings 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Kings/1 Kings 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Kings/1 Kings 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Kings/1 Kings 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Kings/1 Kings 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Kings/1 Kings 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Kings/1 Kings 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Kings/1 Kings 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Kings/1 Kings 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Kings/1 Kings 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Kings/1 Kings 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Kings/1 Kings 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Kings/1 Kings 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Kings/1 Kings 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Kings/1 Kings 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Kings/1 Kings 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/1 Kings/1 Kings 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/1 Kings/1 Kings 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/1 Kings/1 Kings 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/1 Kings/1 Kings 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/1 Kings/1 Kings 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/1 Kings/1 Kings 22"
						}
					]
				},
				{
					"name": "2 Kings",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Kings/2 Kings 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Kings/2 Kings 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Kings/2 Kings 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Kings/2 Kings 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Kings/2 Kings 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Kings/2 Kings 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Kings/2 Kings 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Kings/2 Kings 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Kings/2 Kings 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Kings/2 Kings 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Kings/2 Kings 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Kings/2 Kings 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Kings/2 Kings 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/2 Kings/2 Kings 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/2 Kings/2 Kings 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/2 Kings/2 Kings 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/2 Kings/2 Kings 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/2 Kings/2 Kings 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/2 Kings/2 Kings 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/2 Kings/2 Kings 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/2 Kings/2 Kings 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/2 Kings/2 Kings 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/2 Kings/2 Kings 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/2 Kings/2 Kings 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/2 Kings/2 Kings 25"
						}
					]
				},
				{
					"name": "1 Chronicles",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Chronicles/1 Chronicles 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Chronicles/1 Chronicles 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Chronicles/1 Chronicles 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Chronicles/1 Chronicles 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Chronicles/1 Chronicles 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Chronicles/1 Chronicles 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Chronicles/1 Chronicles 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Chronicles/1 Chronicles 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Chronicles/1 Chronicles 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Chronicles/1 Chronicles 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Chronicles/1 Chronicles 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Chronicles/1 Chronicles 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Chronicles/1 Chronicles 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Chronicles/1 Chronicles 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Chronicles/1 Chronicles 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Chronicles/1 Chronicles 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/1 Chronicles/1 Chronicles 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/1 Chronicles/1 Chronicles 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/1 Chronicles/1 Chronicles 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/1 Chronicles/1 Chronicles 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/1 Chronicles/1 Chronicles 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/1 Chronicles/1 Chronicles 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/1 Chronicles/1 Chronicles 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/1 Chronicles/1 Chronicles 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/1 Chronicles/1 Chronicles 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/1 Chronicles/1 Chronicles 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/1 Chronicles/1 Chronicles 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/1 Chronicles/1 Chronicles 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/1 Chronicles/1 Chronicles 29"
						}
					]
				},
				{
					"name": "2 Chronicles",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Chronicles/2 Chronicles 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Chronicles/2 Chronicles 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Chronicles/2 Chronicles 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Chronicles/2 Chronicles 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Chronicles/2 Chronicles 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Chronicles/2 Chronicles 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Chronicles/2 Chronicles 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Chronicles/2 Chronicles 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Chronicles/2 Chronicles 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Chronicles/2 Chronicles 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Chronicles/2 Chronicles 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Chronicles/2 Chronicles 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Chronicles/2 Chronicles 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/2 Chronicles/2 Chronicles 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/2 Chronicles/2 Chronicles 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/2 Chronicles/2 Chronicles 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/2 Chronicles/2 Chronicles 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/2 Chronicles/2 Chronicles 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/2 Chronicles/2 Chronicles 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/2 Chronicles/2 Chronicles 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/2 Chronicles/2 Chronicles 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/2 Chronicles/2 Chronicles 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/2 Chronicles/2 Chronicles 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/2 Chronicles/2 Chronicles 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/2 Chronicles/2 Chronicles 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/2 Chronicles/2 Chronicles 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/2 Chronicles/2 Chronicles 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/2 Chronicles/2 Chronicles 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/2 Chronicles/2 Chronicles 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/2 Chronicles/2 Chronicles 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/2 Chronicles/2 Chronicles 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/2 Chronicles/2 Chronicles 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/2 Chronicles/2 Chronicles 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/2 Chronicles/2 Chronicles 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/2 Chronicles/2 Chronicles 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/2 Chronicles/2 Chronicles 36"
						}
					]
				},
				{
					"name": "Ezra",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ezra/Ezra 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ezra/Ezra 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ezra/Ezra 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ezra/Ezra 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Ezra/Ezra 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Ezra/Ezra 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Ezra/Ezra 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Ezra/Ezra 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Ezra/Ezra 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Ezra/Ezra 10"
						}
					]
				},
				{
					"name": "Nehemiah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Nehemiah/Nehemiah 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Nehemiah/Nehemiah 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Nehemiah/Nehemiah 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Nehemiah/Nehemiah 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Nehemiah/Nehemiah 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Nehemiah/Nehemiah 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Nehemiah/Nehemiah 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Nehemiah/Nehemiah 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Nehemiah/Nehemiah 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Nehemiah/Nehemiah 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Nehemiah/Nehemiah 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Nehemiah/Nehemiah 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Nehemiah/Nehemiah 13"
						}
					]
				},
				{
					"name": "Tobit",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Tobit/Tobit 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Tobit/Tobit 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Tobit/Tobit 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Tobit/Tobit 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Tobit/Tobit 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Tobit/Tobit 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Tobit/Tobit 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Tobit/Tobit 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Tobit/Tobit 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Tobit/Tobit 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Tobit/Tobit 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Tobit/Tobit 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Tobit/Tobit 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Tobit/Tobit 14"
						}
					]
				},
				{
					"name": "Judith",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Judith/Judith 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Judith/Judith 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Judith/Judith 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Judith/Judith 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Judith/Judith 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Judith/Judith 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Judith/Judith 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Judith/Judith 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Judith/Judith 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Judith/Judith 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Judith/Judith 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Judith/Judith 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Judith/Judith 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Judith/Judith 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Judith/Judith 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Judith/Judith 16"
						}
					]
				},
				{
					"name": "Esther",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Esther/Esther 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Esther/Esther 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Esther/Esther 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Esther/Esther 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Esther/Esther 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Esther/Esther 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Esther/Esther 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Esther/Esther 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Esther/Esther 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Esther/Esther 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Esther/Esther 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Esther/Esther 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Esther/Esther 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Esther/Esther 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Esther/Esther 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Esther/Esther 16"
						}
					]
				},
				{
					"name": "Job",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Job/Job 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Job/Job 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Job/Job 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Job/Job 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Job/Job 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Job/Job 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Job/Job 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Job/Job 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Job/Job 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Job/Job 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Job/Job 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Job/Job 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Job/Job 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Job/Job 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Job/Job 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Job/Job 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Job/Job 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Job/Job 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Job/Job 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Job/Job 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Job/Job 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Job/Job 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Job/Job 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Job/Job 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Job/Job 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Job/Job 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Job/Job 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Job/Job 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Job/Job 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Job/Job 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Job/Job 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Job/Job 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Job/Job 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Job/Job 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Job/Job 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Job/Job 36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Job/Job 37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Job/Job 38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Job/Job 39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Job/Job 40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Job/Job 41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Job/Job 42"
						}
					]
				},
				{
					"name": "Psalms",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Psalms/Psalms 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Psalms/Psalms 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Psalms/Psalms 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Psalms/Psalms 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Psalms/Psalms 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Psalms/Psalms 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Psalms/Psalms 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Psalms/Psalms 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Psalms/Psalms 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Psalms/Psalms 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Psalms/Psalms 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Psalms/Psalms 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Psalms/Psalms 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Psalms/Psalms 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Psalms/Psalms 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Psalms/Psalms 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Psalms/Psalms 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Psalms/Psalms 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Psalms/Psalms 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Psalms/Psalms 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Psalms/Psalms 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Psalms/Psalms 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Psalms/Psalms 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Psalms/Psalms 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Psalms/Psalms 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Psalms/Psalms 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Psalms/Psalms 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Psalms/Psalms 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Psalms/Psalms 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Psalms/Psalms 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Psalms/Psalms 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Psalms/Psalms 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Psalms/Psalms 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Psalms/Psalms 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Psalms/Psalms 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Psalms/Psalms 36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Psalms/Psalms 37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Psalms/Psalms 38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Psalms/Psalms 39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Psalms/Psalms 40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Psalms/Psalms 41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Psalms/Psalms 42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Psalms/Psalms 43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Psalms/Psalms 44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Psalms/Psalms 45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Psalms/Psalms 46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Psalms/Psalms 47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Psalms/Psalms 48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Psalms/Psalms 49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Psalms/Psalms 50"
						},
						{
							"name": "Chapter 51",
							"path": "readings/bible/Psalms/Psalms 51"
						},
						{
							"name": "Chapter 52",
							"path": "readings/bible/Psalms/Psalms 52"
						},
						{
							"name": "Chapter 53",
							"path": "readings/bible/Psalms/Psalms 53"
						},
						{
							"name": "Chapter 54",
							"path": "readings/bible/Psalms/Psalms 54"
						},
						{
							"name": "Chapter 55",
							"path": "readings/bible/Psalms/Psalms 55"
						},
						{
							"name": "Chapter 56",
							"path": "readings/bible/Psalms/Psalms 56"
						},
						{
							"name": "Chapter 57",
							"path": "readings/bible/Psalms/Psalms 57"
						},
						{
							"name": "Chapter 58",
							"path": "readings/bible/Psalms/Psalms 58"
						},
						{
							"name": "Chapter 59",
							"path": "readings/bible/Psalms/Psalms 59"
						},
						{
							"name": "Chapter 60",
							"path": "readings/bible/Psalms/Psalms 60"
						},
						{
							"name": "Chapter 61",
							"path": "readings/bible/Psalms/Psalms 61"
						},
						{
							"name": "Chapter 62",
							"path": "readings/bible/Psalms/Psalms 62"
						},
						{
							"name": "Chapter 63",
							"path": "readings/bible/Psalms/Psalms 63"
						},
						{
							"name": "Chapter 64",
							"path": "readings/bible/Psalms/Psalms 64"
						},
						{
							"name": "Chapter 65",
							"path": "readings/bible/Psalms/Psalms 65"
						},
						{
							"name": "Chapter 66",
							"path": "readings/bible/Psalms/Psalms 66"
						},
						{
							"name": "Chapter 67",
							"path": "readings/bible/Psalms/Psalms 67"
						},
						{
							"name": "Chapter 68",
							"path": "readings/bible/Psalms/Psalms 68"
						},
						{
							"name": "Chapter 69",
							"path": "readings/bible/Psalms/Psalms 69"
						},
						{
							"name": "Chapter 70",
							"path": "readings/bible/Psalms/Psalms 70"
						},
						{
							"name": "Chapter 71",
							"path": "readings/bible/Psalms/Psalms 71"
						},
						{
							"name": "Chapter 72",
							"path": "readings/bible/Psalms/Psalms 72"
						},
						{
							"name": "Chapter 73",
							"path": "readings/bible/Psalms/Psalms 73"
						},
						{
							"name": "Chapter 74",
							"path": "readings/bible/Psalms/Psalms 74"
						},
						{
							"name": "Chapter 75",
							"path": "readings/bible/Psalms/Psalms 75"
						},
						{
							"name": "Chapter 76",
							"path": "readings/bible/Psalms/Psalms 76"
						},
						{
							"name": "Chapter 77",
							"path": "readings/bible/Psalms/Psalms 77"
						},
						{
							"name": "Chapter 78",
							"path": "readings/bible/Psalms/Psalms 78"
						},
						{
							"name": "Chapter 79",
							"path": "readings/bible/Psalms/Psalms 79"
						},
						{
							"name": "Chapter 80",
							"path": "readings/bible/Psalms/Psalms 80"
						},
						{
							"name": "Chapter 81",
							"path": "readings/bible/Psalms/Psalms 81"
						},
						{
							"name": "Chapter 82",
							"path": "readings/bible/Psalms/Psalms 82"
						},
						{
							"name": "Chapter 83",
							"path": "readings/bible/Psalms/Psalms 83"
						},
						{
							"name": "Chapter 84",
							"path": "readings/bible/Psalms/Psalms 84"
						},
						{
							"name": "Chapter 85",
							"path": "readings/bible/Psalms/Psalms 85"
						},
						{
							"name": "Chapter 86",
							"path": "readings/bible/Psalms/Psalms 86"
						},
						{
							"name": "Chapter 87",
							"path": "readings/bible/Psalms/Psalms 87"
						},
						{
							"name": "Chapter 88",
							"path": "readings/bible/Psalms/Psalms 88"
						},
						{
							"name": "Chapter 89",
							"path": "readings/bible/Psalms/Psalms 89"
						},
						{
							"name": "Chapter 90",
							"path": "readings/bible/Psalms/Psalms 90"
						},
						{
							"name": "Chapter 91",
							"path": "readings/bible/Psalms/Psalms 91"
						},
						{
							"name": "Chapter 92",
							"path": "readings/bible/Psalms/Psalms 92"
						},
						{
							"name": "Chapter 93",
							"path": "readings/bible/Psalms/Psalms 93"
						},
						{
							"name": "Chapter 94",
							"path": "readings/bible/Psalms/Psalms 94"
						},
						{
							"name": "Chapter 95",
							"path": "readings/bible/Psalms/Psalms 95"
						},
						{
							"name": "Chapter 96",
							"path": "readings/bible/Psalms/Psalms 96"
						},
						{
							"name": "Chapter 97",
							"path": "readings/bible/Psalms/Psalms 97"
						},
						{
							"name": "Chapter 98",
							"path": "readings/bible/Psalms/Psalms 98"
						},
						{
							"name": "Chapter 99",
							"path": "readings/bible/Psalms/Psalms 99"
						},
						{
							"name": "Chapter 100",
							"path": "readings/bible/Psalms/Psalms 100"
						},
						{
							"name": "Chapter 101",
							"path": "readings/bible/Psalms/Psalms 101"
						},
						{
							"name": "Chapter 102",
							"path": "readings/bible/Psalms/Psalms 102"
						},
						{
							"name": "Chapter 103",
							"path": "readings/bible/Psalms/Psalms 103"
						},
						{
							"name": "Chapter 104",
							"path": "readings/bible/Psalms/Psalms 104"
						},
						{
							"name": "Chapter 105",
							"path": "readings/bible/Psalms/Psalms 105"
						},
						{
							"name": "Chapter 106",
							"path": "readings/bible/Psalms/Psalms 106"
						},
						{
							"name": "Chapter 107",
							"path": "readings/bible/Psalms/Psalms 107"
						},
						{
							"name": "Chapter 108",
							"path": "readings/bible/Psalms/Psalms 108"
						},
						{
							"name": "Chapter 109",
							"path": "readings/bible/Psalms/Psalms 109"
						},
						{
							"name": "Chapter 110",
							"path": "readings/bible/Psalms/Psalms 110"
						},
						{
							"name": "Chapter 111",
							"path": "readings/bible/Psalms/Psalms 111"
						},
						{
							"name": "Chapter 112",
							"path": "readings/bible/Psalms/Psalms 112"
						},
						{
							"name": "Chapter 113",
							"path": "readings/bible/Psalms/Psalms 113"
						},
						{
							"name": "Chapter 114",
							"path": "readings/bible/Psalms/Psalms 114"
						},
						{
							"name": "Chapter 115",
							"path": "readings/bible/Psalms/Psalms 115"
						},
						{
							"name": "Chapter 116",
							"path": "readings/bible/Psalms/Psalms 116"
						},
						{
							"name": "Chapter 117",
							"path": "readings/bible/Psalms/Psalms 117"
						},
						{
							"name": "Chapter 118",
							"path": "readings/bible/Psalms/Psalms 118"
						},
						{
							"name": "Chapter 119",
							"path": "readings/bible/Psalms/Psalms 119"
						},
						{
							"name": "Chapter 120",
							"path": "readings/bible/Psalms/Psalms 120"
						},
						{
							"name": "Chapter 121",
							"path": "readings/bible/Psalms/Psalms 121"
						},
						{
							"name": "Chapter 122",
							"path": "readings/bible/Psalms/Psalms 122"
						},
						{
							"name": "Chapter 123",
							"path": "readings/bible/Psalms/Psalms 123"
						},
						{
							"name": "Chapter 124",
							"path": "readings/bible/Psalms/Psalms 124"
						},
						{
							"name": "Chapter 125",
							"path": "readings/bible/Psalms/Psalms 125"
						},
						{
							"name": "Chapter 126",
							"path": "readings/bible/Psalms/Psalms 126"
						},
						{
							"name": "Chapter 127",
							"path": "readings/bible/Psalms/Psalms 127"
						},
						{
							"name": "Chapter 128",
							"path": "readings/bible/Psalms/Psalms 128"
						},
						{
							"name": "Chapter 129",
							"path": "readings/bible/Psalms/Psalms 129"
						},
						{
							"name": "Chapter 130",
							"path": "readings/bible/Psalms/Psalms 130"
						},
						{
							"name": "Chapter 131",
							"path": "readings/bible/Psalms/Psalms 131"
						},
						{
							"name": "Chapter 132",
							"path": "readings/bible/Psalms/Psalms 132"
						},
						{
							"name": "Chapter 133",
							"path": "readings/bible/Psalms/Psalms 133"
						},
						{
							"name": "Chapter 134",
							"path": "readings/bible/Psalms/Psalms 134"
						},
						{
							"name": "Chapter 135",
							"path": "readings/bible/Psalms/Psalms 135"
						},
						{
							"name": "Chapter 136",
							"path": "readings/bible/Psalms/Psalms 136"
						},
						{
							"name": "Chapter 137",
							"path": "readings/bible/Psalms/Psalms 137"
						},
						{
							"name": "Chapter 138",
							"path": "readings/bible/Psalms/Psalms 138"
						},
						{
							"name": "Chapter 139",
							"path": "readings/bible/Psalms/Psalms 139"
						},
						{
							"name": "Chapter 140",
							"path": "readings/bible/Psalms/Psalms 140"
						},
						{
							"name": "Chapter 141",
							"path": "readings/bible/Psalms/Psalms 141"
						},
						{
							"name": "Chapter 142",
							"path": "readings/bible/Psalms/Psalms 142"
						},
						{
							"name": "Chapter 143",
							"path": "readings/bible/Psalms/Psalms 143"
						},
						{
							"name": "Chapter 144",
							"path": "readings/bible/Psalms/Psalms 144"
						},
						{
							"name": "Chapter 145",
							"path": "readings/bible/Psalms/Psalms 145"
						},
						{
							"name": "Chapter 146",
							"path": "readings/bible/Psalms/Psalms 146"
						},
						{
							"name": "Chapter 147",
							"path": "readings/bible/Psalms/Psalms 147"
						},
						{
							"name": "Chapter 148",
							"path": "readings/bible/Psalms/Psalms 148"
						},
						{
							"name": "Chapter 149",
							"path": "readings/bible/Psalms/Psalms 149"
						},
						{
							"name": "Chapter 150",
							"path": "readings/bible/Psalms/Psalms 150"
						},
						{
							"name": "Chapter 151",
							"path": "readings/bible/Psalms/Psalms 151"
						}
					]
				},
				{
					"name": "Proverbs",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Proverbs/Proverbs 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Proverbs/Proverbs 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Proverbs/Proverbs 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Proverbs/Proverbs 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Proverbs/Proverbs 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Proverbs/Proverbs 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Proverbs/Proverbs 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Proverbs/Proverbs 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Proverbs/Proverbs 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Proverbs/Proverbs 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Proverbs/Proverbs 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Proverbs/Proverbs 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Proverbs/Proverbs 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Proverbs/Proverbs 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Proverbs/Proverbs 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Proverbs/Proverbs 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Proverbs/Proverbs 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Proverbs/Proverbs 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Proverbs/Proverbs 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Proverbs/Proverbs 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Proverbs/Proverbs 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Proverbs/Proverbs 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Proverbs/Proverbs 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Proverbs/Proverbs 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Proverbs/Proverbs 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Proverbs/Proverbs 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Proverbs/Proverbs 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Proverbs/Proverbs 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Proverbs/Proverbs 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Proverbs/Proverbs 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Proverbs/Proverbs 31"
						}
					]
				},
				{
					"name": "Ecclesiastes",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 12"
						}
					]
				},
				{
					"name": "Song of Solomon",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Song of Solomon/Song of Solomon 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Song of Solomon/Song of Solomon 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Song of Solomon/Song of Solomon 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Song of Solomon/Song of Solomon 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Song of Solomon/Song of Solomon 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Song of Solomon/Song of Solomon 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Song of Solomon/Song of Solomon 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Song of Solomon/Song of Solomon 8"
						}
					]
				},
				{
					"name": "Wisdom",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Wisdom/Wisdom 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Wisdom/Wisdom 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Wisdom/Wisdom 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Wisdom/Wisdom 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Wisdom/Wisdom 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Wisdom/Wisdom 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Wisdom/Wisdom 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Wisdom/Wisdom 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Wisdom/Wisdom 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Wisdom/Wisdom 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Wisdom/Wisdom 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Wisdom/Wisdom 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Wisdom/Wisdom 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Wisdom/Wisdom 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Wisdom/Wisdom 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Wisdom/Wisdom 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Wisdom/Wisdom 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Wisdom/Wisdom 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Wisdom/Wisdom 19"
						}
					]
				},
				{
					"name": "Sirach",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Sirach/Sirach 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Sirach/Sirach 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Sirach/Sirach 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Sirach/Sirach 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Sirach/Sirach 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Sirach/Sirach 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Sirach/Sirach 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Sirach/Sirach 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Sirach/Sirach 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Sirach/Sirach 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Sirach/Sirach 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Sirach/Sirach 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Sirach/Sirach 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Sirach/Sirach 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Sirach/Sirach 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Sirach/Sirach 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Sirach/Sirach 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Sirach/Sirach 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Sirach/Sirach 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Sirach/Sirach 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Sirach/Sirach 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Sirach/Sirach 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Sirach/Sirach 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Sirach/Sirach 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Sirach/Sirach 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Sirach/Sirach 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Sirach/Sirach 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Sirach/Sirach 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Sirach/Sirach 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Sirach/Sirach 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Sirach/Sirach 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Sirach/Sirach 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Sirach/Sirach 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Sirach/Sirach 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Sirach/Sirach 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Sirach/Sirach 36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Sirach/Sirach 37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Sirach/Sirach 38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Sirach/Sirach 39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Sirach/Sirach 40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Sirach/Sirach 41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Sirach/Sirach 42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Sirach/Sirach 43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Sirach/Sirach 44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Sirach/Sirach 45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Sirach/Sirach 46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Sirach/Sirach 47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Sirach/Sirach 48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Sirach/Sirach 49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Sirach/Sirach 50"
						},
						{
							"name": "Chapter 51",
							"path": "readings/bible/Sirach/Sirach 51"
						}
					]
				},
				{
					"name": "Isaiah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Isaiah/Isaiah 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Isaiah/Isaiah 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Isaiah/Isaiah 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Isaiah/Isaiah 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Isaiah/Isaiah 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Isaiah/Isaiah 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Isaiah/Isaiah 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Isaiah/Isaiah 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Isaiah/Isaiah 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Isaiah/Isaiah 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Isaiah/Isaiah 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Isaiah/Isaiah 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Isaiah/Isaiah 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Isaiah/Isaiah 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Isaiah/Isaiah 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Isaiah/Isaiah 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Isaiah/Isaiah 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Isaiah/Isaiah 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Isaiah/Isaiah 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Isaiah/Isaiah 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Isaiah/Isaiah 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Isaiah/Isaiah 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Isaiah/Isaiah 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Isaiah/Isaiah 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Isaiah/Isaiah 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Isaiah/Isaiah 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Isaiah/Isaiah 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Isaiah/Isaiah 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Isaiah/Isaiah 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Isaiah/Isaiah 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Isaiah/Isaiah 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Isaiah/Isaiah 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Isaiah/Isaiah 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Isaiah/Isaiah 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Isaiah/Isaiah 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Isaiah/Isaiah 36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Isaiah/Isaiah 37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Isaiah/Isaiah 38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Isaiah/Isaiah 39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Isaiah/Isaiah 40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Isaiah/Isaiah 41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Isaiah/Isaiah 42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Isaiah/Isaiah 43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Isaiah/Isaiah 44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Isaiah/Isaiah 45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Isaiah/Isaiah 46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Isaiah/Isaiah 47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Isaiah/Isaiah 48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Isaiah/Isaiah 49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Isaiah/Isaiah 50"
						},
						{
							"name": "Chapter 51",
							"path": "readings/bible/Isaiah/Isaiah 51"
						},
						{
							"name": "Chapter 52",
							"path": "readings/bible/Isaiah/Isaiah 52"
						},
						{
							"name": "Chapter 53",
							"path": "readings/bible/Isaiah/Isaiah 53"
						},
						{
							"name": "Chapter 54",
							"path": "readings/bible/Isaiah/Isaiah 54"
						},
						{
							"name": "Chapter 55",
							"path": "readings/bible/Isaiah/Isaiah 55"
						},
						{
							"name": "Chapter 56",
							"path": "readings/bible/Isaiah/Isaiah 56"
						},
						{
							"name": "Chapter 57",
							"path": "readings/bible/Isaiah/Isaiah 57"
						},
						{
							"name": "Chapter 58",
							"path": "readings/bible/Isaiah/Isaiah 58"
						},
						{
							"name": "Chapter 59",
							"path": "readings/bible/Isaiah/Isaiah 59"
						},
						{
							"name": "Chapter 60",
							"path": "readings/bible/Isaiah/Isaiah 60"
						},
						{
							"name": "Chapter 61",
							"path": "readings/bible/Isaiah/Isaiah 61"
						},
						{
							"name": "Chapter 62",
							"path": "readings/bible/Isaiah/Isaiah 62"
						},
						{
							"name": "Chapter 63",
							"path": "readings/bible/Isaiah/Isaiah 63"
						},
						{
							"name": "Chapter 64",
							"path": "readings/bible/Isaiah/Isaiah 64"
						},
						{
							"name": "Chapter 65",
							"path": "readings/bible/Isaiah/Isaiah 65"
						},
						{
							"name": "Chapter 66",
							"path": "readings/bible/Isaiah/Isaiah 66"
						}
					]
				},
				{
					"name": "Jeremiah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Jeremiah/Jeremiah 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Jeremiah/Jeremiah 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Jeremiah/Jeremiah 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Jeremiah/Jeremiah 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Jeremiah/Jeremiah 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Jeremiah/Jeremiah 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Jeremiah/Jeremiah 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Jeremiah/Jeremiah 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Jeremiah/Jeremiah 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Jeremiah/Jeremiah 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Jeremiah/Jeremiah 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Jeremiah/Jeremiah 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Jeremiah/Jeremiah 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Jeremiah/Jeremiah 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Jeremiah/Jeremiah 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Jeremiah/Jeremiah 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Jeremiah/Jeremiah 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Jeremiah/Jeremiah 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Jeremiah/Jeremiah 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Jeremiah/Jeremiah 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Jeremiah/Jeremiah 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Jeremiah/Jeremiah 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Jeremiah/Jeremiah 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Jeremiah/Jeremiah 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Jeremiah/Jeremiah 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Jeremiah/Jeremiah 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Jeremiah/Jeremiah 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Jeremiah/Jeremiah 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Jeremiah/Jeremiah 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Jeremiah/Jeremiah 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Jeremiah/Jeremiah 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Jeremiah/Jeremiah 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Jeremiah/Jeremiah 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Jeremiah/Jeremiah 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Jeremiah/Jeremiah 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Jeremiah/Jeremiah 36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Jeremiah/Jeremiah 37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Jeremiah/Jeremiah 38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Jeremiah/Jeremiah 39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Jeremiah/Jeremiah 40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Jeremiah/Jeremiah 41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Jeremiah/Jeremiah 42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Jeremiah/Jeremiah 43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Jeremiah/Jeremiah 44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Jeremiah/Jeremiah 45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Jeremiah/Jeremiah 46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Jeremiah/Jeremiah 47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Jeremiah/Jeremiah 48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Jeremiah/Jeremiah 49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Jeremiah/Jeremiah 50"
						},
						{
							"name": "Chapter 51",
							"path": "readings/bible/Jeremiah/Jeremiah 51"
						},
						{
							"name": "Chapter 52",
							"path": "readings/bible/Jeremiah/Jeremiah 52"
						}
					]
				},
				{
					"name": "Lamentations",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Lamentations/Lamentations 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Lamentations/Lamentations 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Lamentations/Lamentations 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Lamentations/Lamentations 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Lamentations/Lamentations 5"
						}
					]
				},
				{
					"name": "Baruch",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Baruch/Baruch 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Baruch/Baruch 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Baruch/Baruch 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Baruch/Baruch 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Baruch/Baruch 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Baruch/Baruch 6"
						}
					]
				},
				{
					"name": "Ezekiel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ezekiel/Ezekiel 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ezekiel/Ezekiel 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ezekiel/Ezekiel 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ezekiel/Ezekiel 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Ezekiel/Ezekiel 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Ezekiel/Ezekiel 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Ezekiel/Ezekiel 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Ezekiel/Ezekiel 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Ezekiel/Ezekiel 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Ezekiel/Ezekiel 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Ezekiel/Ezekiel 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Ezekiel/Ezekiel 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Ezekiel/Ezekiel 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Ezekiel/Ezekiel 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Ezekiel/Ezekiel 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Ezekiel/Ezekiel 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Ezekiel/Ezekiel 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Ezekiel/Ezekiel 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Ezekiel/Ezekiel 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Ezekiel/Ezekiel 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Ezekiel/Ezekiel 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Ezekiel/Ezekiel 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Ezekiel/Ezekiel 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Ezekiel/Ezekiel 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Ezekiel/Ezekiel 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Ezekiel/Ezekiel 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Ezekiel/Ezekiel 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Ezekiel/Ezekiel 28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Ezekiel/Ezekiel 29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Ezekiel/Ezekiel 30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Ezekiel/Ezekiel 31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Ezekiel/Ezekiel 32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Ezekiel/Ezekiel 33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Ezekiel/Ezekiel 34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Ezekiel/Ezekiel 35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Ezekiel/Ezekiel 36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Ezekiel/Ezekiel 37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Ezekiel/Ezekiel 38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Ezekiel/Ezekiel 39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Ezekiel/Ezekiel 40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Ezekiel/Ezekiel 41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Ezekiel/Ezekiel 42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Ezekiel/Ezekiel 43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Ezekiel/Ezekiel 44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Ezekiel/Ezekiel 45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Ezekiel/Ezekiel 46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Ezekiel/Ezekiel 47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Ezekiel/Ezekiel 48"
						}
					]
				},
				{
					"name": "Daniel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Daniel/Daniel 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Daniel/Daniel 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Daniel/Daniel 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Daniel/Daniel 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Daniel/Daniel 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Daniel/Daniel 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Daniel/Daniel 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Daniel/Daniel 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Daniel/Daniel 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Daniel/Daniel 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Daniel/Daniel 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Daniel/Daniel 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Daniel/Daniel 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Daniel/Daniel 14"
						}
					]
				},
				{
					"name": "Hosea",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Hosea/Hosea 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Hosea/Hosea 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Hosea/Hosea 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Hosea/Hosea 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Hosea/Hosea 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Hosea/Hosea 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Hosea/Hosea 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Hosea/Hosea 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Hosea/Hosea 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Hosea/Hosea 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Hosea/Hosea 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Hosea/Hosea 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Hosea/Hosea 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Hosea/Hosea 14"
						}
					]
				},
				{
					"name": "Joel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Joel/Joel 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Joel/Joel 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Joel/Joel 3"
						}
					]
				},
				{
					"name": "Amos",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Amos/Amos 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Amos/Amos 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Amos/Amos 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Amos/Amos 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Amos/Amos 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Amos/Amos 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Amos/Amos 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Amos/Amos 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Amos/Amos 9"
						}
					]
				},
				{
					"name": "Obadiah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Obadiah/Obadiah 1"
						}
					]
				},
				{
					"name": "Jonah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Jonah/Jonah 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Jonah/Jonah 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Jonah/Jonah 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Jonah/Jonah 4"
						}
					]
				},
				{
					"name": "Micah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Micah/Micah 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Micah/Micah 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Micah/Micah 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Micah/Micah 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Micah/Micah 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Micah/Micah 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Micah/Micah 7"
						}
					]
				},
				{
					"name": "Nahum",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Nahum/Nahum 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Nahum/Nahum 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Nahum/Nahum 3"
						}
					]
				},
				{
					"name": "Habakkuk",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Habakkuk/Habakkuk 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Habakkuk/Habakkuk 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Habakkuk/Habakkuk 3"
						}
					]
				},
				{
					"name": "Zephaniah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Zephaniah/Zephaniah 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Zephaniah/Zephaniah 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Zephaniah/Zephaniah 3"
						}
					]
				},
				{
					"name": "Haggai",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Haggai/Haggai 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Haggai/Haggai 2"
						}
					]
				},
				{
					"name": "Zechariah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Zechariah/Zechariah 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Zechariah/Zechariah 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Zechariah/Zechariah 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Zechariah/Zechariah 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Zechariah/Zechariah 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Zechariah/Zechariah 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Zechariah/Zechariah 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Zechariah/Zechariah 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Zechariah/Zechariah 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Zechariah/Zechariah 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Zechariah/Zechariah 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Zechariah/Zechariah 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Zechariah/Zechariah 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Zechariah/Zechariah 14"
						}
					]
				},
				{
					"name": "Malachi",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Malachi/Malachi 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Malachi/Malachi 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Malachi/Malachi 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Malachi/Malachi 4"
						}
					]
				},
				{
					"name": "1 Maccabees",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Maccabees/1 Maccabees 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Maccabees/1 Maccabees 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Maccabees/1 Maccabees 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Maccabees/1 Maccabees 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Maccabees/1 Maccabees 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Maccabees/1 Maccabees 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Maccabees/1 Maccabees 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Maccabees/1 Maccabees 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Maccabees/1 Maccabees 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Maccabees/1 Maccabees 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Maccabees/1 Maccabees 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Maccabees/1 Maccabees 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Maccabees/1 Maccabees 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Maccabees/1 Maccabees 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Maccabees/1 Maccabees 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Maccabees/1 Maccabees 16"
						}
					]
				},
				{
					"name": "2 Maccabees",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Maccabees/2 Maccabees 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Maccabees/2 Maccabees 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Maccabees/2 Maccabees 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Maccabees/2 Maccabees 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Maccabees/2 Maccabees 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Maccabees/2 Maccabees 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Maccabees/2 Maccabees 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Maccabees/2 Maccabees 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Maccabees/2 Maccabees 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Maccabees/2 Maccabees 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Maccabees/2 Maccabees 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Maccabees/2 Maccabees 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Maccabees/2 Maccabees 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/2 Maccabees/2 Maccabees 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/2 Maccabees/2 Maccabees 15"
						}
					]
				},
				{
					"name": "Prayer of Manasseh",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Prayer of Manasseh/Prayer of Manasseh 1"
						}
					]
				},
				{
					"name": "Matthew",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Matthew/Matthew 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Matthew/Matthew 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Matthew/Matthew 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Matthew/Matthew 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Matthew/Matthew 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Matthew/Matthew 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Matthew/Matthew 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Matthew/Matthew 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Matthew/Matthew 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Matthew/Matthew 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Matthew/Matthew 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Matthew/Matthew 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Matthew/Matthew 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Matthew/Matthew 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Matthew/Matthew 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Matthew/Matthew 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Matthew/Matthew 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Matthew/Matthew 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Matthew/Matthew 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Matthew/Matthew 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Matthew/Matthew 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Matthew/Matthew 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Matthew/Matthew 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Matthew/Matthew 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Matthew/Matthew 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Matthew/Matthew 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Matthew/Matthew 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Matthew/Matthew 28"
						}
					]
				},
				{
					"name": "Mark",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Mark/Mark 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Mark/Mark 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Mark/Mark 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Mark/Mark 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Mark/Mark 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Mark/Mark 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Mark/Mark 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Mark/Mark 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Mark/Mark 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Mark/Mark 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Mark/Mark 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Mark/Mark 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Mark/Mark 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Mark/Mark 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Mark/Mark 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Mark/Mark 16"
						}
					]
				},
				{
					"name": "Luke",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Luke/Luke 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Luke/Luke 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Luke/Luke 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Luke/Luke 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Luke/Luke 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Luke/Luke 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Luke/Luke 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Luke/Luke 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Luke/Luke 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Luke/Luke 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Luke/Luke 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Luke/Luke 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Luke/Luke 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Luke/Luke 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Luke/Luke 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Luke/Luke 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Luke/Luke 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Luke/Luke 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Luke/Luke 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Luke/Luke 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Luke/Luke 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Luke/Luke 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Luke/Luke 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Luke/Luke 24"
						}
					]
				},
				{
					"name": "John",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/John/John 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/John/John 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/John/John 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/John/John 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/John/John 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/John/John 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/John/John 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/John/John 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/John/John 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/John/John 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/John/John 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/John/John 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/John/John 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/John/John 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/John/John 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/John/John 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/John/John 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/John/John 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/John/John 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/John/John 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/John/John 21"
						}
					]
				},
				{
					"name": "Acts",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Acts/Acts 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Acts/Acts 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Acts/Acts 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Acts/Acts 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Acts/Acts 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Acts/Acts 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Acts/Acts 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Acts/Acts 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Acts/Acts 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Acts/Acts 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Acts/Acts 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Acts/Acts 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Acts/Acts 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Acts/Acts 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Acts/Acts 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Acts/Acts 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Acts/Acts 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Acts/Acts 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Acts/Acts 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Acts/Acts 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Acts/Acts 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Acts/Acts 22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Acts/Acts 23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Acts/Acts 24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Acts/Acts 25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Acts/Acts 26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Acts/Acts 27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Acts/Acts 28"
						}
					]
				},
				{
					"name": "Romans",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Romans/Romans 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Romans/Romans 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Romans/Romans 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Romans/Romans 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Romans/Romans 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Romans/Romans 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Romans/Romans 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Romans/Romans 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Romans/Romans 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Romans/Romans 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Romans/Romans 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Romans/Romans 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Romans/Romans 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Romans/Romans 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Romans/Romans 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Romans/Romans 16"
						}
					]
				},
				{
					"name": "1 Corinthians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Corinthians/1 Corinthians 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Corinthians/1 Corinthians 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Corinthians/1 Corinthians 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Corinthians/1 Corinthians 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Corinthians/1 Corinthians 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Corinthians/1 Corinthians 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Corinthians/1 Corinthians 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Corinthians/1 Corinthians 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Corinthians/1 Corinthians 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Corinthians/1 Corinthians 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Corinthians/1 Corinthians 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Corinthians/1 Corinthians 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Corinthians/1 Corinthians 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Corinthians/1 Corinthians 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Corinthians/1 Corinthians 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Corinthians/1 Corinthians 16"
						}
					]
				},
				{
					"name": "2 Corinthians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Corinthians/2 Corinthians 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Corinthians/2 Corinthians 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Corinthians/2 Corinthians 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Corinthians/2 Corinthians 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Corinthians/2 Corinthians 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Corinthians/2 Corinthians 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Corinthians/2 Corinthians 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Corinthians/2 Corinthians 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Corinthians/2 Corinthians 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Corinthians/2 Corinthians 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Corinthians/2 Corinthians 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Corinthians/2 Corinthians 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Corinthians/2 Corinthians 13"
						}
					]
				},
				{
					"name": "Galatians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Galatians/Galatians 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Galatians/Galatians 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Galatians/Galatians 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Galatians/Galatians 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Galatians/Galatians 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Galatians/Galatians 6"
						}
					]
				},
				{
					"name": "Ephesians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ephesians/Ephesians 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ephesians/Ephesians 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ephesians/Ephesians 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ephesians/Ephesians 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Ephesians/Ephesians 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Ephesians/Ephesians 6"
						}
					]
				},
				{
					"name": "Philippians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Philippians/Philippians 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Philippians/Philippians 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Philippians/Philippians 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Philippians/Philippians 4"
						}
					]
				},
				{
					"name": "Colossians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Colossians/Colossians 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Colossians/Colossians 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Colossians/Colossians 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Colossians/Colossians 4"
						}
					]
				},
				{
					"name": "1 Thessalonians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 5"
						}
					]
				},
				{
					"name": "2 Thessalonians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Thessalonians/2 Thessalonians 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Thessalonians/2 Thessalonians 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Thessalonians/2 Thessalonians 3"
						}
					]
				},
				{
					"name": "1 Timothy",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Timothy/1 Timothy 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Timothy/1 Timothy 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Timothy/1 Timothy 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Timothy/1 Timothy 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Timothy/1 Timothy 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Timothy/1 Timothy 6"
						}
					]
				},
				{
					"name": "2 Timothy",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Timothy/2 Timothy 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Timothy/2 Timothy 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Timothy/2 Timothy 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Timothy/2 Timothy 4"
						}
					]
				},
				{
					"name": "Titus",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Titus/Titus 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Titus/Titus 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Titus/Titus 3"
						}
					]
				},
				{
					"name": "Philemon",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Philemon/Philemon 1"
						}
					]
				},
				{
					"name": "Hebrews",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Hebrews/Hebrews 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Hebrews/Hebrews 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Hebrews/Hebrews 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Hebrews/Hebrews 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Hebrews/Hebrews 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Hebrews/Hebrews 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Hebrews/Hebrews 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Hebrews/Hebrews 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Hebrews/Hebrews 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Hebrews/Hebrews 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Hebrews/Hebrews 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Hebrews/Hebrews 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Hebrews/Hebrews 13"
						}
					]
				},
				{
					"name": "James",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/James/James 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/James/James 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/James/James 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/James/James 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/James/James 5"
						}
					]
				},
				{
					"name": "1 Peter",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Peter/1 Peter 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Peter/1 Peter 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Peter/1 Peter 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Peter/1 Peter 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Peter/1 Peter 5"
						}
					]
				},
				{
					"name": "2 Peter",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Peter/2 Peter 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Peter/2 Peter 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Peter/2 Peter 3"
						}
					]
				},
				{
					"name": "1 John",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 John/1 John 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 John/1 John 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 John/1 John 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 John/1 John 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 John/1 John 5"
						}
					]
				},
				{
					"name": "2 John",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 John/2 John 1"
						}
					]
				},
				{
					"name": "3 John",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/3 John/3 John 1"
						}
					]
				},
				{
					"name": "Jude",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Jude/Jude 1"
						}
					]
				},
				{
					"name": "Revelation",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Revelation/Revelation 1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Revelation/Revelation 2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Revelation/Revelation 3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Revelation/Revelation 4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Revelation/Revelation 5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Revelation/Revelation 6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Revelation/Revelation 7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Revelation/Revelation 8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Revelation/Revelation 9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Revelation/Revelation 10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Revelation/Revelation 11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Revelation/Revelation 12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Revelation/Revelation 13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Revelation/Revelation 14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Revelation/Revelation 15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Revelation/Revelation 16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Revelation/Revelation 17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Revelation/Revelation 18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Revelation/Revelation 19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Revelation/Revelation 20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Revelation/Revelation 21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Revelation/Revelation 22"
						}
					]
				}
			]
		},

		// LITURGIES
		{
			"name": "Liturgies",
			"image": "assets/images/liturgies.jpg",
			"menu": [
				{
					"name": "St. Basil",
					"menu": [
						{
							"name": "Offering of the Lamb",
							"path": "liturgies/basil/Offering of the Lamb"
						},
						{
							"name": "Liturgy of the Word",
							"path": "liturgies/basil/Liturgy of the Word"
						},
						{
							"name": "Liturgy of the Faithful",
							"path": "liturgies/basil/Liturgy of the Faithful"
						},
						{
							"name": "Distribution",
							"path": "liturgies/basil/Distribution of the Holy Mysteries"
						}
					]
				},
				{
					"name": "St. Gregory",
					"menu": [
						{
							"name": "Offering of the Lamb",
							"path": "liturgies/gregory/Offering of the Lamb"
						},
						{
							"name": "Liturgy of the Word",
							"path": "liturgies/gregory/Liturgy of the Word"
						},
						{
							"name": "Liturgy of the Faithful",
							"path": "liturgies/gregory/Liturgy of the Faithful"
						},
						{
							"name": "Distribution",
							"path": "liturgies/gregory/Distribution of the Holy Mysteries"
						}
					]
				},
				{
					"name": "St. Cyril",
					"menu": [
						{
							"name": "Offering of the Lamb",
							"path": "liturgies/cyril/Offering of the Lamb"
						},
						{
							"name": "Liturgy of the Word",
							"path": "liturgies/cyril/Liturgy of the Word"
						},
						{
							"name": "Liturgy of the Faithful",
							"path": "liturgies/cyril/Liturgy of the Faithful"
						},
						{
							"name": "Distribution",
							"path": "liturgies/cyril/Distribution of the Holy Mysteries"
						}
					]
				},
				{
					"name": "Matins",
					"path": "raisingOfIncense/Matins"
				},
				{
					"name": "Vespers",
					"path": "raisingOfIncense/Vespers"
				}
			]
		},

		// READINGS
		{
			"name": "Readings",
			"image": "assets/images/menu_ic_books.jpg",
			"menu": [
				{
					"name": "Vespers",
					"path": "readings/Vespers Psalm and Gospel"
				},
				{
					"name": "Matins",
					"menu": [
						{
							"name": "Prophecies",
							"path": "readings/Prophecies"
						},
						{
							"name": "Psalm and Gospel",
							"path": "readings/Matins Psalm and Gospel"
						}
					]
				},
				{
					"name": "Liturgy",
					"menu": [
						{
							"name": "Pauline Epistle",
							"path": "readings/Pauline Epistle"
						},
						{
							"name": "Catholic Epistle",
							"path": "readings/Catholic Epistle"
						},
						{
							"name": "Praxis",
							"path": "readings/Praxis"
						},
						{
							"name": "Synaxarion",
							"path": "readings/Synaxarion"
						},
						{
							"name": "Psalm and Gospel",
							"path": "readings/Liturgy Psalm and Gospel"
						}
					]
				},
				{
					"name": "Antiphonary",
					"path": "antiphonary/Antiphonary"
				}
			]
		},

		// MELODIES
		{
			"name": "Melodies",
			"image": "assets/images/melodies.jpg",
			"path": "melodies/Melodies"
		},

		// INDEX
		{
			"name": "Index",
			"image": "assets/images/index.jpg",
			"menu": [
				{
					"name": "Feasts",
					"menu": [
						{
							"name": "Coptic New Year",
							"path": "liturgies/index/Coptic New Year"
						},
						{
							"name": "Feast of the Cross",
							"path": "liturgies/index/Feast of the Cross"
						},
						{
							"name": "Apostles' Feast",
							"path": "liturgies/index/Apostles' Feast"
						},
						{
							"name": "Joyful 29th of the Month",
							"path": "liturgies/index/Joyful 29th of the Month"
						},
						{
							"name": "Major Feasts of the Lord",
							"menu": [
								{
									"name": "Nativity",
									"path": "liturgies/index/Nativity"
								},
								{
									"name": "Theophany",
									"path": "liturgies/index/Theophany"
								},
								{
									"name": "Annunciation",
									"path": "liturgies/index/Annunciation"
								},
								{
									"name": "Hosanna Sunday",
									"path": "liturgies/index/Hosanna Sunday"
								},
								{
									"name": "Holy 50 Days",
									"menu": [
										{
											"name": "Days 1-39",
											"path": "liturgies/index/pentecost/Resurrection Days 1-39"
										},
										{
											"name": "Days 40-49",
											"path": "liturgies/index/pentecost/Resurrection Days 40-49"
										},
										{
											"name": "Thomas Sunday",
											"path": "liturgies/index/pentecost/Thomas Sunday"
										},
										{
											"name": "Pentecost",
											"path": "liturgies/index/pentecost/Pentecost"
										}
									]
								}
							]
						},
						{
							"name": "Minor Feasts of the Lord",
							"menu": [
								{
									"name": "Circumcision",
									"path": "liturgies/index/Circumcision"
								},
								{
									"name": "Wedding at Cana of Galilee",
									"path": "liturgies/index/Wedding at Cana of Galilee"
								},
								{
									"name": "Presentation of the Lord Christ in the Temple",
									"path": "liturgies/index/Presentation of the Lord Christ in the Temple"
								},
								{
									"name": "Covenant Thursday",
									"path": "liturgies/index/Covenant Thursday"
								},
								{
									"name": "Entrance of the Lord Christ into the Land of Egypt",
									"path": "liturgies/index/Entrance of the Lord Christ into the Land of Egypt"
								},
								{
									"name": "Transfiguration",
									"path": "liturgies/index/Transfiguration"
								}
							]
						}
					]
				},
				{
					"name": "Fasts",
					"menu": [
						{
							"name": "Nativity Fast",
							"path": "liturgies/index/Nativity Fast"
						},
						{
							"name": "Month of Koiahk",
							"menu": [
								{
									"name": "Weekdays",
									"path": "liturgies/index/koiahk/Koiahk Weekdays"
								},
								{
									"name": "Weekends",
									"path": "liturgies/index/koiahk/Koiahk Weekends"
								}
							]
						},
						{
							"name": "Nativity Paramoun",
							"path": "liturgies/index/Nativity Paramoun"
						},
						{
							"name": "Theophany Paramoun",
							"path": "liturgies/index/Theophany Paramoun"
						},
						{
							"name": "Jonah's Fast",
							"path": "liturgies/index/Jonah's Fast"
						},
						{
							"name": "Jonah's Passover",
							"path": "liturgies/index/Jonah's Passover"
						},
						{
							"name": "Great Fast",
							"menu": [
								{
									"name": "Preparation Sunday",
									"path": "liturgies/index/greatfast/Preparation Sunday of the Great Fast"
								},
								{
									"name": "Last Friday",
									"path": "liturgies/index/greatfast/Last Friday of the Great Fast"
								},
								{
									"name": "Weekdays",
									"path": "liturgies/index/greatfast/Great Fast Weekdays"
								},
								{
									"name": "Weekends",
									"path": "liturgies/index/greatfast/Great Fast Weekends"
								}
							]
						},
						{
							"name": "Lazarus Saturday",
							"path": "liturgies/index/Lazarus Saturday"
						},
						{
							"name": "Apostles' Fast",
							"path": "liturgies/index/Apostles' Fast"
						}
					]
				},
				{
					"name": "Saints",
					"menu": [
						{
							"name": "St. Mary the Mother of God",
							"path": "liturgies/index/saints/St. Mary the Mother of God"
						},
						{
							"name": "Angels",
							"menu": [
								{
									"name": "Archangel Michael",
									"path": "liturgies/index/saints/Archangel Michael"
								},
								{
									"name": "Archangel Gabriel",
									"path": "liturgies/index/saints/Archangel Gabriel"
								},
								{
									"name": "Archangel Raphael",
									"path": "liturgies/index/saints/Archangel Raphael"
								},
								{
									"name": "Archangel Suriel",
									"path": "liturgies/index/saints/Archangel Suriel"
								},
								{
									"name": "Four Incorporeal Creatures",
									"path": "liturgies/index/saints/Four Incorporeal Creatures"
								},
								{
									"name": "Twenty-Four Priests",
									"path": "liturgies/index/saints/Twenty-Four Priests"
								}
							]
						},
						{
							"name": "Apostles",
							"menu": [
								{
									"name": "St. Andrew the Apostle",
									"path": "liturgies/index/saints/St. Andrew the Apostle"
								},
								{
									"name": "St. John the Evangelist",
									"path": "liturgies/index/saints/St. John the Evangelist"
								},
								{
									"name": "St. Peter and St. Paul",
									"path": "liturgies/index/saints/St. Peter and St. Paul"
								},
								{
									"name": "St. Paul the Apostle",
									"path": "liturgies/index/saints/St. Paul the Apostle"
								},
								{
									"name": "St. Mark the Apostle",
									"path": "liturgies/index/saints/St. Mark the Apostle"
								},
								{
									"name": "St. Luke the Evangelist",
									"path": "liturgies/index/saints/St. Luke the Evangelist"
								}
							]
						},
						{
							"name": "Male Martyrs",
							"menu": [
								{
									"name": "St. John the Baptist",
									"path": "liturgies/index/saints/St. John the Baptist"
								},
								{
									"name": "Children of Bethlehem",
									"path": "liturgies/index/saints/Children of Bethlehem"
								},
								{
									"name": "St. Stephen the Archdeacon and Protomartyr",
									"path": "liturgies/index/saints/St. Stephen the Archdeacon and Protomartyr"
								},
								{
									"name": "St. George Prince of Martyrs",
									"path": "liturgies/index/saints/St. George Prince of Martyrs"
								},
								{
									"name": "Prince Theodore the Son of John of Shotep",
									"path": "liturgies/index/saints/Prince Theodore the Son of John of Shotep"
								},
								{
									"name": "Prince Theodore Anatolius",
									"path": "liturgies/index/saints/Prince Theodore Anatolius"
								},
								{
									"name": "St. Philopater Mercurius",
									"path": "liturgies/index/saints/St. Philopater Mercurius"
								},
								{
									"name": "St. Mena the Wonderworker",
									"path": "liturgies/index/saints/St. Mena the Wonderworker"
								},
								{
									"name": "St. Apanoub of Nehis",
									"path": "liturgies/index/saints/St. Apanoub of Nehis"
								},
								{
									"name": "St. Victor Son of Romanus",
									"path": "liturgies/index/saints/St. Victor Son of Romanus"
								},
								{
									"name": "St. Apatir and His Sister St. Irini",
									"path": "liturgies/index/saints/St. Apatir and His Sister St. Irini"
								},
								{
									"name": "St. Claudius Son of Ptolemy",
									"path": "liturgies/index/saints/St. Claudius Son of Ptolemy"
								},
								{
									"name": "St. Apoli, Son of Justus",
									"path": "liturgies/index/saints/St. Apoli, Son of Justus"
								},
								{
									"name": "St. Eskhyron of Callin",
									"path": "liturgies/index/saints/St. Eskhyron of Callin"
								},
								{
									"name": "St. John of Heraclia",
									"path": "liturgies/index/saints/St. John of Heraclia"
								},
								{
									"name": "St. Abe-Fam the Soldier",
									"path": "liturgies/index/saints/St. Abe-Fam the Soldier"
								},
								{
									"name": "St. Sergius and St. Bacchus",
									"path": "liturgies/index/saints/St. Sergius and St. Bacchus"
								},
								{
									"name": "St. Cosmas and St. Damian, their Brothers and Mother",
									"path": "liturgies/index/saints/St. Cosmas and St. Damian, their Brothers and Mother"
								},
								{
									"name": "St. Apakir and St. John",
									"path": "liturgies/index/saints/St. Apakir and St. John"
								},
								{
									"name": "Sts. Apakir, John, Ptolemy, and Philip",
									"path": "liturgies/index/saints/Sts. Apakir, John, Ptolemy, and Philip"
								},
								{
									"name": "St. Sarapamon Bishop of Nikios",
									"path": "liturgies/index/saints/St. Sarapamon Bishop of Nikios"
								},
								{
									"name": "St. Pisura the Bishop",
									"path": "liturgies/index/saints/St. Pisura the Bishop"
								},
								{
									"name": "St. Castor of Bardanuha",
									"path": "liturgies/index/saints/St. Castor of Bardanuha"
								},
								{
									"name": "St. Bisada the Bishop",
									"path": "liturgies/index/saints/St. Bisada the Bishop"
								},
								{
									"name": "St. Dioscorus and St. Esklabius",
									"path": "liturgies/index/saints/St. Dioscorus and St. Esklabius"
								},
								{
									"name": "St. Maurice",
									"path": "liturgies/index/saints/St. Maurice"
								},
								{
									"name": "St. Philotheus",
									"path": "liturgies/index/saints/St. Philotheus"
								},
								{
									"name": "St. Isi and St. Thecla His Sister",
									"path": "liturgies/index/saints/St. Isi and St. Thecla His Sister"
								},
								{
									"name": "St. George Muzahim",
									"path": "liturgies/index/saints/St. George Muzahim"
								},
								{
									"name": "St. Julius of Ekbehs",
									"path": "liturgies/index/saints/St. Julius of Ekbehs"
								},
								{
									"name": "St. Peter the Seal of the Martyrs",
									"path": "liturgies/index/saints/St. Peter the Seal of the Martyrs"
								},
								{
									"name": "St. Cyprian and St. Justina",
									"path": "liturgies/index/saints/St. Cyprian and St. Justina"
								},
								{
									"name": "Forty-Nine Martyrs and Elders of Scetis",
									"path": "liturgies/index/saints/Forty-Nine Martyrs and Elders of Scetis"
								},
								{
									"name": "Martyrs of Akmim",
									"path": "liturgies/index/saints/Martyrs of Akmim"
								},
								{
									"name": "Martyrs of Fayoum",
									"path": "liturgies/index/saints/Martyrs of Fayoum"
								}
							]
						},
						{
							"name": "Female Martyrs",
							"menu": [
								{
									"name": "St. Demiana",
									"path": "liturgies/index/saints/St. Demiana"
								},
								{
									"name": "St. Dolagy",
									"path": "liturgies/index/saints/St. Dolagy"
								},
								{
									"name": "St. Barbara",
									"path": "liturgies/index/saints/St. Barbara"
								},
								{
									"name": "St. Juliana",
									"path": "liturgies/index/saints/St. Juliana"
								},
								{
									"name": "St. Marina the Martyr",
									"path": "liturgies/index/saints/St. Marina the Martyr"
								},
								{
									"name": "St. Rebecca and Her Five Children",
									"path": "liturgies/index/saints/St. Rebecca and Her Five Children"
								},
								{
									"name": "St. Catherine of Alexandria",
									"path": "liturgies/index/saints/St. Catherine of Alexandria"
								}
							]
						},
						{
							"name": "Male Saints",
							"menu": [
								{
									"name": "St. Joseph the Carpenter",
									"path": "liturgies/index/saints/St. Joseph the Carpenter"
								},
								{
									"name": "St. Anthony the Great",
									"path": "liturgies/index/saints/St. Anthony the Great"
								},
								{
									"name": "St. Paul the Hermit",
									"path": "liturgies/index/saints/St. Paul the Hermit"
								},
								{
									"name": "St. Thomas the Hermit",
									"path": "liturgies/index/saints/St. Thomas the Hermit"
								},
								{
									"name": "St. Macarius the Great",
									"path": "liturgies/index/saints/St. Macarius the Great"
								},
								{
									"name": "St. Macarius of Alexandria",
									"path": "liturgies/index/saints/St. Macarius of Alexandria"
								},
								{
									"name": "St. Macarius Bishop of Edkow",
									"path": "liturgies/index/saints/St. Macarius Bishop of Edkow"
								},
								{
									"name": "St. John the Short",
									"path": "liturgies/index/saints/St. John the Short"
								},
								{
									"name": "St. Pishoy and St. Paul of Tammah",
									"path": "liturgies/index/saints/St. Pishoy and St. Paul of Tammah"
								},
								{
									"name": "St. Arsenius the Teacher of the Kings",
									"path": "liturgies/index/saints/St. Arsenius the Teacher of the Kings"
								},
								{
									"name": "St. Maximus and St. Dometius",
									"path": "liturgies/index/saints/St. Maximus and St. Dometius"
								},
								{
									"name": "St. Moses the Strong",
									"path": "liturgies/index/saints/St. Moses the Strong"
								},
								{
									"name": "St. John Kame",
									"path": "liturgies/index/saints/St. John Kame"
								},
								{
									"name": "St. Pachom and St. Theodore",
									"path": "liturgies/index/saints/St. Pachom and St. Theodore"
								},
								{
									"name": "St. Misael the Anchorite",
									"path": "liturgies/index/saints/St. Misael the Anchorite"
								},
								{
									"name": "St. Shenute the Archimandrite",
									"path": "liturgies/index/saints/St. Shenute the Archimandrite"
								},
								{
									"name": "St. Besa",
									"path": "liturgies/index/saints/St. Besa"
								},
								{
									"name": "St. Samuel the Confessor",
									"path": "liturgies/index/saints/St. Samuel the Confessor"
								},
								{
									"name": "St. Nopher the Anchorite",
									"path": "liturgies/index/saints/St. Nopher the Anchorite"
								},
								{
									"name": "King David the Prophet",
									"path": "liturgies/index/saints/King David the Prophet"
								},
								{
									"name": "St. Karas the Anchorite",
									"path": "liturgies/index/saints/St. Karas the Anchorite"
								},
								{
									"name": "St. Apollo and St. Apip",
									"path": "liturgies/index/saints/St. Apollo and St. Apip"
								},
								{
									"name": "St. Parsouma the Naked",
									"path": "liturgies/index/saints/St. Parsouma the Naked"
								},
								{
									"name": "St. Roweis (Teji)",
									"path": "liturgies/index/saints/St. Roweis (Teji)"
								},
								{
									"name": "St. Mark Abba Antony",
									"path": "liturgies/index/saints/St. Mark Abba Antony"
								},
								{
									"name": "St. Bashouna the Monk and Martyr",
									"path": "liturgies/index/saints/St. Bashouna the Monk and Martyr"
								},
								{
									"name": "St. Athanasius the Apostolic",
									"path": "liturgies/index/saints/St. Athanasius the Apostolic"
								},
								{
									"name": "St. Gregory the Theologian",
									"path": "liturgies/index/saints/St. Gregory the Theologian"
								},
								{
									"name": "St. Severus Patriarch of Antioch",
									"path": "liturgies/index/saints/St. Severus Patriarch of Antioch"
								},
								{
									"name": "St. Cyril of Alexandria",
									"path": "liturgies/index/saints/St. Cyril of Alexandria"
								},
								{
									"name": "St. Takla Haymanout",
									"path": "liturgies/index/saints/St. Takla Haymanout"
								},
								{
									"name": "St. Pistavros",
									"path": "liturgies/index/saints/St. Pistavros"
								},
								{
									"name": "St. Simon the Tanner",
									"path": "liturgies/index/saints/St. Simon the Tanner"
								},
								{
									"name": "King Constantine and Queen Helen",
									"path": "liturgies/index/saints/King Constantine and Queen Helen"
								},
								{
									"name": "Patriarchs Abraham, Isaac, and Jacob",
									"path": "liturgies/index/saints/Patriarchs Abraham, Isaac, and Jacob"
								},
								{
									"name": "The Three Holy Youth",
									"path": "liturgies/index/saints/The Three Holy Youth"
								}
							]
						},
						{
							"name": "Female Saints",
							"menu": [
								{
									"name": "St. Mary Magdalene",
									"path": "liturgies/index/saints/St. Mary Magdalene"
								},
								{
									"name": "St. Verena",
									"path": "liturgies/index/saints/St. Verena"
								},
								{
									"name": "St. Monica and St. Augustine",
									"path": "liturgies/index/saints/St. Monica and St. Augustine"
								},
								{
									"name": "St. Mary of Egypt",
									"path": "liturgies/index/saints/St. Mary of Egypt"
								},
								{
									"name": "St. Veronica",
									"path": "liturgies/index/saints/St. Veronica"
								}
							]
						},
						{
							"name": "Clergy",
							"menu": [
								{
									"name": "Anba Abraam Bishop of Fayoum",
									"path": "liturgies/index/saints/Anba Abraam Bishop of Fayoum"
								},
								{
									"name": "Fr. Abdelmessih El-Manahri",
									"path": "liturgies/index/saints/Fr. Abdelmessih El-Manahri"
								},
								{
									"name": "His Holiness Pope Kyrillos VI",
									"path": "liturgies/index/saints/His Holiness Pope Kyrillos VI"
								},
								{
									"name": "St. Habib Girgis",
									"path": "liturgies/index/saints/St. Habib Girgis"
								},
								{
									"name": "Patriarch",
									"path": "liturgies/index/saints/Patriarch"
								}
							]
						}
					]
				},
				{
					"name": "Fractions",
					"path": "liturgies/index/Fractions Full Index"
				},
				{
					"name": "Doxologies",
					"path": "include/doxologies/Doxologies Full Index"
				},
				{
					"name": "Papal",
					"menu": [
						{
							"name": "Papal Hymns",
							"path": "papal/Papal Hymns"
						},
						{
							"name": "Departed Patriarchs",
							"path": "papal/Departed Patriarchs"
						}
					]
				}
			]
		},

		// CLERGY
		{
			"name": "Clergy",
			"image": "assets/images/clergy.jpg",
			"menu": [
				{
					"name": "Psalms and Absolution",
					"path": "clergy/Psalms and Absolution"
				},
				{
					"name": "Litanies",
					"path": "clergy/Litanies"
				},
				{
					"name": "Healing to the Sick",
					"path": "clergy/Healing to the Sick"
				},
				{
					"name": "Three Absolutions",
					"path": "clergy/Three Absolutions and Short Blessing"
				},
				{
					"name": "Procession of the Lamb",
					"path": "clergy/Procession of the Lamb"
				},
				{
					"name": "Absolution of the Servants",
					"path": "clergy/Absolution of the Servants"
				},
				{
					"name": "Epistle Prayers",
					"path": "clergy/Epistle Prayers"
				},
				{
					"name": "Mystery of the Gospel",
					"path": "clergy/Mystery of the Gospel"
				},
				{
					"name": "Prayer of the Veil",
					"path": "clergy/Prayer of the Veil"
				},
				{
					"name": "Confession",
					"path": "clergy/Confession"
				},
				{
					"name": "Great Fast Litanies",
					"path": "clergy/Great Fast Litanies"
				},
				{
					"name": "Prayer at the Tomb",
					"path": "clergy/Prayer at the Tomb"
				},
				{
					"name": "Benediction",
					"path": "clergy/Benediction"
				}
			]
		},

		// SPECIAL
		{
			"name": "Special",
			"image": "assets/images/app_icon.png",
			"menu": [
				{
					"name": "Baptism",
					"menu": [
						{
							"name": "Absolution of the Woman (Boy)",
							"path": "baptism/Baptism - Absolution of the Woman (Boy)"
						},
						{
							"name": "Absolution of the Woman (Girl)",
							"path": "baptism/Baptism - Absolution of the Woman (Girl)"
						},
						{
							"name": "Holy Baptism",
							"path": "baptism/Baptism - Holy Baptism"
						},
						{
							"name": "Consecrating the Water",
							"path": "baptism/Baptism - Consecrating the Water"
						},
						{
							"name": "Holy Myron",
							"path": "baptism/Baptism - Holy Myron"
						},
						{
							"name": "Loosing the Girdle",
							"path": "baptism/Baptism - Loosing the Girdle"
						},
						{
							"name": "Bathing Prayer",
							"path": "baptism/Baptism - Bathing Prayer"
						}
					]
				},
				{
					"name": "Crowning",
					"menu": [
						{
							"name": "Engagement Prayer",
							"path": "crowning/Engagement Prayer"
						},
						{
							"name": "Crowning Prayer",
							"path": "crowning/Crowning Prayer"
						},
						{
							"name": "Second Marriage Prayer",
							"path": "crowning/Second Marriage Prayer"
						}
					]
				},
				{
					"name": "Unction",
					"menu": [
						{
							"name": "First Prayer",
							"path": "unction/Unction - First Prayer"
						},
						{
							"name": "Second Prayer",
							"path": "unction/Unction - Second Prayer"
						},
						{
							"name": "Third Prayer",
							"path": "unction/Unction - Third Prayer"
						},
						{
							"name": "Fourth Prayer",
							"path": "unction/Unction - Fourth Prayer"
						},
						{
							"name": "Fifth Prayer",
							"path": "unction/Unction - Fifth Prayer"
						},
						{
							"name": "Sixth Prayer",
							"path": "unction/Unction - Sixth Prayer"
						},
						{
							"name": "Seventh Prayer",
							"path": "unction/Unction - Seventh Prayer"
						}
					]
				},
				{
					"name": "Veneration",
					"path": "veneration/Veneration"
				},
				{
					"name": "Funeral",
					"menu": [
						{
							"name": "Men",
							"path": "funeral/Funeral for Men"
						},
						{
							"name": "Women",
							"path": "funeral/Funeral for Women"
						},
						{
							"name": "Women During Delivery",
							"path": "funeral/Funeral for Women During Delivery"
						},
						{
							"name": "Boys",
							"path": "funeral/Funeral for Boys"
						},
						{
							"name": "Girls",
							"path": "funeral/Funeral for Girls"
						},
						{
							"name": "Deacons",
							"path": "funeral/Funeral for Deacons"
						},
						{
							"name": "Priests",
							"path": "funeral/Funeral for Priests"
						},
						{
							"name": "Bishops",
							"path": "funeral/Funeral for Bishops"
						},
						{
							"name": "Monk Priests",
							"path": "funeral/Funeral for Monk Priests"
						},
						{
							"name": "Monks",
							"path": "funeral/Funeral for Monks"
						},
						{
							"name": "Nuns",
							"path": "funeral/Funeral for Nuns"
						},
						{
							"name": "3rd and 40th Days",
							"path": "funeral/Funeral for 3rd and 40th Days"
						},
						{
							"name": "Prayer at the Tomb",
							"path": "funeral/Prayer at the Tomb"
						}
					]
				},
				{
					"name": "Consecrations",
					"menu": [
						{
							"name": "Church",
							"menu": [
								{
									"name": "Part 1",
									"path": "consecrations/church/Church Consecration Part 1"
								},
								{
									"name": "Part 2",
									"path": "consecrations/church/Church Consecration Part 2"
								},
								{
									"name": "Part 3",
									"path": "consecrations/church/Church Consecration Part 3"
								},
								{
									"name": "Part 4",
									"path": "consecrations/church/Church Consecration Part 4"
								},
								{
									"name": "Vespers",
									"path": "consecrations/church/Vespers"
								},
								{
									"name": "Liturgy of the Word",
									"path": "consecrations/church/Liturgy of the Word"
								}
							]
						},
						{
							"name": "Altar",
							"path": "consecrations/Consecration of the Altar"
						},
						{
							"name": "Vessels, Censers, and Icons",
							"path": "consecrations/Consecration of Vessels, Censers, and Icons"
						},
						{
							"name": "Baptistery",
							"path": "consecrations/Consecration of the Baptistery"
						},
						{
							"name": "Cornerstone",
							"path": "consecrations/Laying of the Church Cornerstone"
						},
						{
							"name": "Oil",
							"menu": [
								{
									"name": "Myron",
									"menu": [
										{
											"name": "Preparation",
											"path": "consecrations/oil/Preparation of the Holy Myron"
										},
										{
											"name": "Consecration",
											"path": "consecrations/oil/Consecration of the Holy Myron"
										}
									]
								},
								{
									"name": "Oil of Gladness",
									"path": "consecrations/oil/Sanctification of Oil of Gladness"
								},
								{
									"name": "Pre-sanctified Chrism",
									"path": "consecrations/oil/Reservation of the Pre-sanctified Chrism"
								}
							]
						},
						{
							"name": "Ordinations",
							"menu": [
								{
									"name": "Chanter",
									"path": "consecrations/ordinations/Chanter Ordination"
								},
								{
									"name": "Reader",
									"path": "consecrations/ordinations/Reader Ordination"
								},
								{
									"name": "Subdeacon",
									"path": "consecrations/ordinations/Subdeacon Ordination"
								},
								{
									"name": "Deacon",
									"path": "consecrations/ordinations/Deacon Ordination"
								},
								{
									"name": "Archdeacon",
									"path": "consecrations/ordinations/Archdeacon Ordination"
								},
								{
									"name": "Priest",
									"path": "consecrations/ordinations/Priest Ordination"
								},
								{
									"name": "Hegumen",
									"path": "consecrations/ordinations/Hegumen Ordination"
								},
								{
									"name": "Bishop",
									"path": "consecrations/ordinations/Bishop Ordination"
								},
								{
									"name": "Metropolitan",
									"path": "consecrations/ordinations/Metropolitan Ordination"
								},
								{
									"name": "Papal Enthronement",
									"path": "papal/Papal Enthronement"
								}
							]
						},
						{
							"name": "Monk",
							"path": "consecrations/Consecration of Monks"
						},
						{
							"name": "Nuns",
							"path": "consecrations/Consecration of Nuns"
						},
						{
							"name": "Sisters",
							"path": "consecrations/Consecration of Sisters"
						},
						{
							"name": "Reception of New Priest",
							"path": "consecrations/reception/Reception of New Priest"
						},
						{
							"name": "Home Blessing",
							"path": "consecrations/Blessing of the Home"
						}
					]
				},
				{
					"name": "Prostration",
					"menu": [
						{
							"name": "Praises",
							"path": "prostration/Praises"
						},
						{
							"name": "First Prostration",
							"path": "prostration/First Prostration"
						},
						{
							"name": "Second Prostration",
							"path": "prostration/Second Prostration"
						},
						{
							"name": "Third Prostration",
							"path": "prostration/Third Prostration"
						}
					]
				},
				{
					"name": "Pascha",
					"menu": [
						{
							"name": "Sunday",
							"menu": [
								{
									"name": "General Funeral Prayer",
									"path": "pascha/sunday/General Funeral Prayer"
								},
								{
									"name": "Insights",
									"path": "pascha/include/insights/Sunday"
								},
								{
									"name": "Sunday Day",
									"menu": [
										{
											"name": "9th Hour",
											"path": "pascha/sunday/Sunday - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/sunday/Sunday - 11th Hour"
										}
									]
								},
								{
									"name": "Monday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/monday/Monday Eve - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/monday/Monday Eve - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/monday/Monday Eve - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/monday/Monday Eve - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/monday/Monday Eve - 11th Hour"
										}
									]
								}
							]
						},
						{
							"name": "Monday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Monday"
								},
								{
									"name": "Monday Day",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/monday/Monday - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/monday/Monday - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/monday/Monday - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/monday/Monday - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/monday/Monday - 11th Hour"
										}
									]
								},
								{
									"name": "Tuesday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/tuesday/Tuesday Eve - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/tuesday/Tuesday Eve - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/tuesday/Tuesday Eve - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/tuesday/Tuesday Eve - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/tuesday/Tuesday Eve - 11th Hour"
										}
									]
								}
							]
						},
						{
							"name": "Tuesday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Tuesday"
								},
								{
									"name": "Tuesday Day",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/tuesday/Tuesday - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/tuesday/Tuesday - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/tuesday/Tuesday - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/tuesday/Tuesday - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/tuesday/Tuesday - 11th Hour"
										}
									]
								},
								{
									"name": "Wednesday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/wednesday/Wednesday Eve - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/wednesday/Wednesday Eve - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/wednesday/Wednesday Eve - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/wednesday/Wednesday Eve - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/wednesday/Wednesday Eve - 11th Hour"
										}
									]
								}
							]
						},
						{
							"name": "Wednesday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Wednesday"
								},
								{
									"name": "Wednesday Day",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/wednesday/Wednesday - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/wednesday/Wednesday - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/wednesday/Wednesday - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/wednesday/Wednesday - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/wednesday/Wednesday - 11th Hour"
										}
									]
								},
								{
									"name": "Thursday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/thursday/Thursday Eve - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/thursday/Thursday Eve - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/thursday/Thursday Eve - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/thursday/Thursday Eve - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/thursday/Thursday Eve - 11th Hour"
										}
									]
								}
							]
						},
						{
							"name": "Thursday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Thursday"
								},
								{
									"name": "Thursday Day",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/thursday/Thursday - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/thursday/Thursday - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/thursday/Thursday - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/thursday/Thursday - 9th Hour"
										},
										{
											"name": "Liturgy of the Waters",
											"path": "pascha/thursday/Liturgy of the Waters"
										},
										{
											"name": "Offering of the Lamb",
											"path": "liturgies/pascha/covenantThursday/Offering of the Lamb"
										},
										{
											"name": "Liturgy of the Word",
											"path": "liturgies/pascha/covenantThursday/Liturgy of the Word"
										},
										{
											"name": "Liturgy of the Faithful",
											"path": "liturgies/pascha/covenantThursday/Liturgy of the Faithful"
										},
										{
											"name": "Distribution",
											"path": "liturgies/pascha/covenantThursday/Distribution of the Holy Mysteries"
										},
										{
											"name": "11th Hour",
											"path": "pascha/thursday/Thursday - 11th Hour"
										}
									]
								},
								{
									"name": "Friday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/friday/Friday Eve - 1st Hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/friday/Friday Eve - 3rd Hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/friday/Friday Eve - 6th Hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/friday/Friday Eve - 9th Hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/friday/Friday Eve - 11th Hour"
										}
									]
								}
							]
						},
						{
							"name": "Friday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Friday"
								},
								{
									"name": "1st Hour",
									"path": "pascha/friday/Friday - 1st Hour"
								},
								{
									"name": "3rd Hour",
									"path": "pascha/friday/Friday - 3rd Hour"
								},
								{
									"name": "6th Hour",
									"path": "pascha/friday/Friday - 6th Hour"
								},
								{
									"name": "9th Hour",
									"path": "pascha/friday/Friday - 9th Hour"
								},
								{
									"name": "11th Hour",
									"path": "pascha/friday/Friday - 11th Hour"
								},
								{
									"name": "12th Hour",
									"path": "pascha/friday/Friday - 12th Hour"
								}
							]
						},
						{
							"name": "Saturday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Saturday"
								},
								{
									"name": "Praises",
									"path": "pascha/saturday/Vigil of the Apocalypse - Midnight Praises"
								},
								{
									"name": "Matins",
									"path": "pascha/saturday/Vigil of the Apocalypse - Matins"
								},
								{
									"name": "Third and Sixth Hours",
									"path": "pascha/saturday/Vigil of the Apocalypse - Third and Sixth Hours"
								},
								{
									"name": "Revelation",
									"path": "pascha/saturday/Vigil of the Apocalypse - Revelation"
								},
								{
									"name": "Ninth Hour",
									"path": "pascha/saturday/Vigil of the Apocalypse - Ninth Hour"
								},
								{
									"name": "Offering of the Lamb",
									"path": "liturgies/pascha/joyousSaturday/Offering of the Lamb"
								},
								{
									"name": "Liturgy of the Word",
									"path": "liturgies/pascha/joyousSaturday/Liturgy of the Word"
								},
								{
									"name": "Liturgy of the Faithful",
									"path": "liturgies/pascha/joyousSaturday/Liturgy of the Faithful"
								},
								{
									"name": "Distribution",
									"path": "liturgies/pascha/joyousSaturday/Distribution of the Holy Mysteries"
								}
							]
						},
						{
							"name": "Resurrection",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Resurrection"
								},
								{
									"name": "Prophecies",
									"path": "pascha/resurrection/Prophecies"
								}
							]
						}
					]
				},
				{
					"name": "Lakkan",
					"menu": [
						{
							"name": "Theophany",
							"path": "lakkan/Theophany - Liturgy of the Waters"
						},
						{
							"name": "Covenant Thursday",
							"path": "lakkan/Covenant Thursday - Liturgy of the Waters"
						},
						{
							"name": "Apostles Feast",
							"path": "lakkan/Apostles Feast - Liturgy of the Waters"
						}
					]
				}
			]
		}
	];

	function setURI(base, menu) {
		menu.forEach(m => {
			m.uri = base + '/' + toURI(m.name.toLowerCase()?.replace(/ /g, '-'));
			if (m.menu?.length) setURI(m.uri, m.menu);
		});
	}

	function toURI(name) {
		return name.toLowerCase()?.replace(/ /g, '-')?.replace(/'/g, '');
	}

	function getEntry(uri) {
		const parts = uri.split('/');
		parts.shift();

		let entry = { menu: DATA }; // to keep the symmetry
		parts.forEach(p => entry = entry.menu.find(m => toURI(m.name) == p));

		return entry;
	}

	function getEntryByPath(menu, path) {
		for (let m of menu) {
			if (m.path == path) return m;
			if (m.menu) {
				const mm = getEntryByPath(m.menu, path);
				if (mm) return mm;
			}
		}
	}

	function getParent(uri) {
		const parts = uri.split('/');
		parts.shift();
		parts.pop();

		return getEntry(`/${parts.join('/')}`);
	}

	return {
		DATA: DATA,

		setURI: setURI,
		toURI: toURI,
		getEntry: getEntry,
		getEntryByPath: getEntryByPath,
		getParent: getParent,
	}

})();
