import { Repository } from './repository.js';

export const Menu = (() => {

	function getData() {
		return Repository.getMenu() || DEFAULT_DATA;
	}

	function getItem(uri) {
		let item = { menu: getData() }; // to keep the symmetry
		uri.split('/').slice(1).forEach(part => item = item.menu.find(m => m.name.toLowerCase()?.replace(/ /g, '-')?.replace(/'/g, '') == part.toLowerCase()));

		return item;
	}

	function getItemByPath(menu, path) {
		for (let m of menu) {
			if (m.path == path) return m;
			if (m.menu) {
				const mm = getItemByPath(m.menu, path);
				if (mm) return mm;
			}
		}
	}

	function getParentItem(uri) {
		return getItem(`/${uri.split('/').slice(1, -1).join('/')}`);
	}

	var DEFAULT_DATA = [
		{
			"name": "Agpeya",
			"image": "assets/images/agpeya.jpg",
			"menu": [
				{
					"name": "1st Hour",
					"path": "agpeya/Agpeya - 1st Hour",
					"uri": "/agpeya/1st-hour"
				},
				{
					"name": "3rd Hour",
					"path": "agpeya/Agpeya - 3rd Hour",
					"uri": "/agpeya/3rd-hour"
				},
				{
					"name": "6th Hour",
					"path": "agpeya/Agpeya - 6th Hour",
					"uri": "/agpeya/6th-hour"
				},
				{
					"name": "9th Hour",
					"path": "agpeya/Agpeya - 9th Hour",
					"uri": "/agpeya/9th-hour"
				},
				{
					"name": "11th Hour",
					"path": "agpeya/Agpeya - 11th Hour",
					"uri": "/agpeya/11th-hour"
				},
				{
					"name": "12th Hour",
					"path": "agpeya/Agpeya - 12th Hour",
					"uri": "/agpeya/12th-hour"
				},
				{
					"name": "Veil",
					"path": "agpeya/Agpeya - Veil",
					"uri": "/agpeya/veil"
				},
				{
					"name": "Midnight",
					"path": "agpeya/Agpeya - Midnight Hour",
					"uri": "/agpeya/midnight"
				},
				{
					"name": "Prayers",
					"menu": [
						{
							"name": "Confession",
							"path": "agpeya/Agpeya - Confession",
							"uri": "/agpeya/prayers/confession"
						},
						{
							"name": "Communion",
							"path": "agpeya/Agpeya - Communion",
							"uri": "/agpeya/prayers/communion"
						},
						{
							"name": "Guidance",
							"path": "agpeya/Agpeya - Guidance",
							"uri": "/agpeya/prayers/guidance"
						},
						{
							"name": "Meals",
							"path": "agpeya/Agpeya - Meals",
							"uri": "/agpeya/prayers/meals"
						},
						{
							"name": "Priests",
							"path": "agpeya/Agpeya - Priests",
							"uri": "/agpeya/prayers/priests"
						},
						{
							"name": "Deacons",
							"path": "agpeya/Agpeya - Deacons",
							"uri": "/agpeya/prayers/deacons"
						}
					],
					"uri": "/agpeya/prayers"
				}
			],
			"uri": "/agpeya"
		},
		{
			"name": "Psalmody",
			"image": "assets/images/menu_ic_church_services.jpg",
			"menu": [
				{
					"name": "Vesper Praises",
					"path": "praises/Vesper Praises",
					"uri": "/psalmody/vesper-praises"
				},
				{
					"name": "Midnight Praises",
					"path": "praises/Midnight Praises",
					"uri": "/psalmody/midnight-praises"
				},
				{
					"name": "Morning Praises",
					"path": "praises/Morning Praises",
					"uri": "/psalmody/morning-praises"
				}
			],
			"uri": "/psalmody"
		},
		{
			"name": "Bible",
			"image": "assets/images/bible.jpg",
			"menu": [
				{
					"name": "Genesis",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Genesis/Genesis 1",
							"uri": "/bible/genesis/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Genesis/Genesis 2",
							"uri": "/bible/genesis/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Genesis/Genesis 3",
							"uri": "/bible/genesis/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Genesis/Genesis 4",
							"uri": "/bible/genesis/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Genesis/Genesis 5",
							"uri": "/bible/genesis/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Genesis/Genesis 6",
							"uri": "/bible/genesis/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Genesis/Genesis 7",
							"uri": "/bible/genesis/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Genesis/Genesis 8",
							"uri": "/bible/genesis/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Genesis/Genesis 9",
							"uri": "/bible/genesis/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Genesis/Genesis 10",
							"uri": "/bible/genesis/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Genesis/Genesis 11",
							"uri": "/bible/genesis/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Genesis/Genesis 12",
							"uri": "/bible/genesis/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Genesis/Genesis 13",
							"uri": "/bible/genesis/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Genesis/Genesis 14",
							"uri": "/bible/genesis/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Genesis/Genesis 15",
							"uri": "/bible/genesis/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Genesis/Genesis 16",
							"uri": "/bible/genesis/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Genesis/Genesis 17",
							"uri": "/bible/genesis/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Genesis/Genesis 18",
							"uri": "/bible/genesis/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Genesis/Genesis 19",
							"uri": "/bible/genesis/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Genesis/Genesis 20",
							"uri": "/bible/genesis/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Genesis/Genesis 21",
							"uri": "/bible/genesis/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Genesis/Genesis 22",
							"uri": "/bible/genesis/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Genesis/Genesis 23",
							"uri": "/bible/genesis/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Genesis/Genesis 24",
							"uri": "/bible/genesis/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Genesis/Genesis 25",
							"uri": "/bible/genesis/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Genesis/Genesis 26",
							"uri": "/bible/genesis/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Genesis/Genesis 27",
							"uri": "/bible/genesis/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Genesis/Genesis 28",
							"uri": "/bible/genesis/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Genesis/Genesis 29",
							"uri": "/bible/genesis/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Genesis/Genesis 30",
							"uri": "/bible/genesis/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Genesis/Genesis 31",
							"uri": "/bible/genesis/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Genesis/Genesis 32",
							"uri": "/bible/genesis/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Genesis/Genesis 33",
							"uri": "/bible/genesis/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Genesis/Genesis 34",
							"uri": "/bible/genesis/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Genesis/Genesis 35",
							"uri": "/bible/genesis/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Genesis/Genesis 36",
							"uri": "/bible/genesis/chapter-36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Genesis/Genesis 37",
							"uri": "/bible/genesis/chapter-37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Genesis/Genesis 38",
							"uri": "/bible/genesis/chapter-38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Genesis/Genesis 39",
							"uri": "/bible/genesis/chapter-39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Genesis/Genesis 40",
							"uri": "/bible/genesis/chapter-40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Genesis/Genesis 41",
							"uri": "/bible/genesis/chapter-41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Genesis/Genesis 42",
							"uri": "/bible/genesis/chapter-42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Genesis/Genesis 43",
							"uri": "/bible/genesis/chapter-43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Genesis/Genesis 44",
							"uri": "/bible/genesis/chapter-44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Genesis/Genesis 45",
							"uri": "/bible/genesis/chapter-45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Genesis/Genesis 46",
							"uri": "/bible/genesis/chapter-46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Genesis/Genesis 47",
							"uri": "/bible/genesis/chapter-47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Genesis/Genesis 48",
							"uri": "/bible/genesis/chapter-48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Genesis/Genesis 49",
							"uri": "/bible/genesis/chapter-49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Genesis/Genesis 50",
							"uri": "/bible/genesis/chapter-50"
						}
					],
					"uri": "/bible/genesis"
				},
				{
					"name": "Exodus",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Exodus/Exodus 1",
							"uri": "/bible/exodus/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Exodus/Exodus 2",
							"uri": "/bible/exodus/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Exodus/Exodus 3",
							"uri": "/bible/exodus/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Exodus/Exodus 4",
							"uri": "/bible/exodus/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Exodus/Exodus 5",
							"uri": "/bible/exodus/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Exodus/Exodus 6",
							"uri": "/bible/exodus/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Exodus/Exodus 7",
							"uri": "/bible/exodus/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Exodus/Exodus 8",
							"uri": "/bible/exodus/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Exodus/Exodus 9",
							"uri": "/bible/exodus/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Exodus/Exodus 10",
							"uri": "/bible/exodus/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Exodus/Exodus 11",
							"uri": "/bible/exodus/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Exodus/Exodus 12",
							"uri": "/bible/exodus/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Exodus/Exodus 13",
							"uri": "/bible/exodus/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Exodus/Exodus 14",
							"uri": "/bible/exodus/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Exodus/Exodus 15",
							"uri": "/bible/exodus/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Exodus/Exodus 16",
							"uri": "/bible/exodus/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Exodus/Exodus 17",
							"uri": "/bible/exodus/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Exodus/Exodus 18",
							"uri": "/bible/exodus/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Exodus/Exodus 19",
							"uri": "/bible/exodus/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Exodus/Exodus 20",
							"uri": "/bible/exodus/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Exodus/Exodus 21",
							"uri": "/bible/exodus/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Exodus/Exodus 22",
							"uri": "/bible/exodus/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Exodus/Exodus 23",
							"uri": "/bible/exodus/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Exodus/Exodus 24",
							"uri": "/bible/exodus/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Exodus/Exodus 25",
							"uri": "/bible/exodus/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Exodus/Exodus 26",
							"uri": "/bible/exodus/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Exodus/Exodus 27",
							"uri": "/bible/exodus/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Exodus/Exodus 28",
							"uri": "/bible/exodus/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Exodus/Exodus 29",
							"uri": "/bible/exodus/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Exodus/Exodus 30",
							"uri": "/bible/exodus/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Exodus/Exodus 31",
							"uri": "/bible/exodus/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Exodus/Exodus 32",
							"uri": "/bible/exodus/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Exodus/Exodus 33",
							"uri": "/bible/exodus/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Exodus/Exodus 34",
							"uri": "/bible/exodus/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Exodus/Exodus 35",
							"uri": "/bible/exodus/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Exodus/Exodus 36",
							"uri": "/bible/exodus/chapter-36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Exodus/Exodus 37",
							"uri": "/bible/exodus/chapter-37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Exodus/Exodus 38",
							"uri": "/bible/exodus/chapter-38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Exodus/Exodus 39",
							"uri": "/bible/exodus/chapter-39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Exodus/Exodus 40",
							"uri": "/bible/exodus/chapter-40"
						}
					],
					"uri": "/bible/exodus"
				},
				{
					"name": "Leviticus",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Leviticus/Leviticus 1",
							"uri": "/bible/leviticus/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Leviticus/Leviticus 2",
							"uri": "/bible/leviticus/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Leviticus/Leviticus 3",
							"uri": "/bible/leviticus/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Leviticus/Leviticus 4",
							"uri": "/bible/leviticus/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Leviticus/Leviticus 5",
							"uri": "/bible/leviticus/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Leviticus/Leviticus 6",
							"uri": "/bible/leviticus/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Leviticus/Leviticus 7",
							"uri": "/bible/leviticus/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Leviticus/Leviticus 8",
							"uri": "/bible/leviticus/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Leviticus/Leviticus 9",
							"uri": "/bible/leviticus/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Leviticus/Leviticus 10",
							"uri": "/bible/leviticus/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Leviticus/Leviticus 11",
							"uri": "/bible/leviticus/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Leviticus/Leviticus 12",
							"uri": "/bible/leviticus/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Leviticus/Leviticus 13",
							"uri": "/bible/leviticus/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Leviticus/Leviticus 14",
							"uri": "/bible/leviticus/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Leviticus/Leviticus 15",
							"uri": "/bible/leviticus/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Leviticus/Leviticus 16",
							"uri": "/bible/leviticus/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Leviticus/Leviticus 17",
							"uri": "/bible/leviticus/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Leviticus/Leviticus 18",
							"uri": "/bible/leviticus/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Leviticus/Leviticus 19",
							"uri": "/bible/leviticus/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Leviticus/Leviticus 20",
							"uri": "/bible/leviticus/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Leviticus/Leviticus 21",
							"uri": "/bible/leviticus/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Leviticus/Leviticus 22",
							"uri": "/bible/leviticus/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Leviticus/Leviticus 23",
							"uri": "/bible/leviticus/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Leviticus/Leviticus 24",
							"uri": "/bible/leviticus/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Leviticus/Leviticus 25",
							"uri": "/bible/leviticus/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Leviticus/Leviticus 26",
							"uri": "/bible/leviticus/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Leviticus/Leviticus 27",
							"uri": "/bible/leviticus/chapter-27"
						}
					],
					"uri": "/bible/leviticus"
				},
				{
					"name": "Numbers",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Numbers/Numbers 1",
							"uri": "/bible/numbers/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Numbers/Numbers 2",
							"uri": "/bible/numbers/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Numbers/Numbers 3",
							"uri": "/bible/numbers/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Numbers/Numbers 4",
							"uri": "/bible/numbers/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Numbers/Numbers 5",
							"uri": "/bible/numbers/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Numbers/Numbers 6",
							"uri": "/bible/numbers/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Numbers/Numbers 7",
							"uri": "/bible/numbers/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Numbers/Numbers 8",
							"uri": "/bible/numbers/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Numbers/Numbers 9",
							"uri": "/bible/numbers/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Numbers/Numbers 10",
							"uri": "/bible/numbers/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Numbers/Numbers 11",
							"uri": "/bible/numbers/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Numbers/Numbers 12",
							"uri": "/bible/numbers/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Numbers/Numbers 13",
							"uri": "/bible/numbers/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Numbers/Numbers 14",
							"uri": "/bible/numbers/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Numbers/Numbers 15",
							"uri": "/bible/numbers/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Numbers/Numbers 16",
							"uri": "/bible/numbers/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Numbers/Numbers 17",
							"uri": "/bible/numbers/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Numbers/Numbers 18",
							"uri": "/bible/numbers/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Numbers/Numbers 19",
							"uri": "/bible/numbers/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Numbers/Numbers 20",
							"uri": "/bible/numbers/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Numbers/Numbers 21",
							"uri": "/bible/numbers/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Numbers/Numbers 22",
							"uri": "/bible/numbers/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Numbers/Numbers 23",
							"uri": "/bible/numbers/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Numbers/Numbers 24",
							"uri": "/bible/numbers/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Numbers/Numbers 25",
							"uri": "/bible/numbers/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Numbers/Numbers 26",
							"uri": "/bible/numbers/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Numbers/Numbers 27",
							"uri": "/bible/numbers/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Numbers/Numbers 28",
							"uri": "/bible/numbers/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Numbers/Numbers 29",
							"uri": "/bible/numbers/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Numbers/Numbers 30",
							"uri": "/bible/numbers/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Numbers/Numbers 31",
							"uri": "/bible/numbers/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Numbers/Numbers 32",
							"uri": "/bible/numbers/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Numbers/Numbers 33",
							"uri": "/bible/numbers/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Numbers/Numbers 34",
							"uri": "/bible/numbers/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Numbers/Numbers 35",
							"uri": "/bible/numbers/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Numbers/Numbers 36",
							"uri": "/bible/numbers/chapter-36"
						}
					],
					"uri": "/bible/numbers"
				},
				{
					"name": "Deuteronomy",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Deuteronomy/Deuteronomy 1",
							"uri": "/bible/deuteronomy/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Deuteronomy/Deuteronomy 2",
							"uri": "/bible/deuteronomy/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Deuteronomy/Deuteronomy 3",
							"uri": "/bible/deuteronomy/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Deuteronomy/Deuteronomy 4",
							"uri": "/bible/deuteronomy/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Deuteronomy/Deuteronomy 5",
							"uri": "/bible/deuteronomy/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Deuteronomy/Deuteronomy 6",
							"uri": "/bible/deuteronomy/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Deuteronomy/Deuteronomy 7",
							"uri": "/bible/deuteronomy/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Deuteronomy/Deuteronomy 8",
							"uri": "/bible/deuteronomy/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Deuteronomy/Deuteronomy 9",
							"uri": "/bible/deuteronomy/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Deuteronomy/Deuteronomy 10",
							"uri": "/bible/deuteronomy/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Deuteronomy/Deuteronomy 11",
							"uri": "/bible/deuteronomy/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Deuteronomy/Deuteronomy 12",
							"uri": "/bible/deuteronomy/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Deuteronomy/Deuteronomy 13",
							"uri": "/bible/deuteronomy/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Deuteronomy/Deuteronomy 14",
							"uri": "/bible/deuteronomy/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Deuteronomy/Deuteronomy 15",
							"uri": "/bible/deuteronomy/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Deuteronomy/Deuteronomy 16",
							"uri": "/bible/deuteronomy/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Deuteronomy/Deuteronomy 17",
							"uri": "/bible/deuteronomy/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Deuteronomy/Deuteronomy 18",
							"uri": "/bible/deuteronomy/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Deuteronomy/Deuteronomy 19",
							"uri": "/bible/deuteronomy/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Deuteronomy/Deuteronomy 20",
							"uri": "/bible/deuteronomy/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Deuteronomy/Deuteronomy 21",
							"uri": "/bible/deuteronomy/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Deuteronomy/Deuteronomy 22",
							"uri": "/bible/deuteronomy/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Deuteronomy/Deuteronomy 23",
							"uri": "/bible/deuteronomy/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Deuteronomy/Deuteronomy 24",
							"uri": "/bible/deuteronomy/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Deuteronomy/Deuteronomy 25",
							"uri": "/bible/deuteronomy/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Deuteronomy/Deuteronomy 26",
							"uri": "/bible/deuteronomy/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Deuteronomy/Deuteronomy 27",
							"uri": "/bible/deuteronomy/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Deuteronomy/Deuteronomy 28",
							"uri": "/bible/deuteronomy/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Deuteronomy/Deuteronomy 29",
							"uri": "/bible/deuteronomy/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Deuteronomy/Deuteronomy 30",
							"uri": "/bible/deuteronomy/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Deuteronomy/Deuteronomy 31",
							"uri": "/bible/deuteronomy/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Deuteronomy/Deuteronomy 32",
							"uri": "/bible/deuteronomy/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Deuteronomy/Deuteronomy 33",
							"uri": "/bible/deuteronomy/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Deuteronomy/Deuteronomy 34",
							"uri": "/bible/deuteronomy/chapter-34"
						}
					],
					"uri": "/bible/deuteronomy"
				},
				{
					"name": "Joshua",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Joshua/Joshua 1",
							"uri": "/bible/joshua/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Joshua/Joshua 2",
							"uri": "/bible/joshua/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Joshua/Joshua 3",
							"uri": "/bible/joshua/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Joshua/Joshua 4",
							"uri": "/bible/joshua/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Joshua/Joshua 5",
							"uri": "/bible/joshua/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Joshua/Joshua 6",
							"uri": "/bible/joshua/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Joshua/Joshua 7",
							"uri": "/bible/joshua/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Joshua/Joshua 8",
							"uri": "/bible/joshua/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Joshua/Joshua 9",
							"uri": "/bible/joshua/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Joshua/Joshua 10",
							"uri": "/bible/joshua/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Joshua/Joshua 11",
							"uri": "/bible/joshua/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Joshua/Joshua 12",
							"uri": "/bible/joshua/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Joshua/Joshua 13",
							"uri": "/bible/joshua/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Joshua/Joshua 14",
							"uri": "/bible/joshua/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Joshua/Joshua 15",
							"uri": "/bible/joshua/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Joshua/Joshua 16",
							"uri": "/bible/joshua/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Joshua/Joshua 17",
							"uri": "/bible/joshua/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Joshua/Joshua 18",
							"uri": "/bible/joshua/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Joshua/Joshua 19",
							"uri": "/bible/joshua/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Joshua/Joshua 20",
							"uri": "/bible/joshua/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Joshua/Joshua 21",
							"uri": "/bible/joshua/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Joshua/Joshua 22",
							"uri": "/bible/joshua/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Joshua/Joshua 23",
							"uri": "/bible/joshua/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Joshua/Joshua 24",
							"uri": "/bible/joshua/chapter-24"
						}
					],
					"uri": "/bible/joshua"
				},
				{
					"name": "Judges",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Judges/Judges 1",
							"uri": "/bible/judges/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Judges/Judges 2",
							"uri": "/bible/judges/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Judges/Judges 3",
							"uri": "/bible/judges/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Judges/Judges 4",
							"uri": "/bible/judges/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Judges/Judges 5",
							"uri": "/bible/judges/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Judges/Judges 6",
							"uri": "/bible/judges/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Judges/Judges 7",
							"uri": "/bible/judges/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Judges/Judges 8",
							"uri": "/bible/judges/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Judges/Judges 9",
							"uri": "/bible/judges/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Judges/Judges 10",
							"uri": "/bible/judges/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Judges/Judges 11",
							"uri": "/bible/judges/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Judges/Judges 12",
							"uri": "/bible/judges/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Judges/Judges 13",
							"uri": "/bible/judges/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Judges/Judges 14",
							"uri": "/bible/judges/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Judges/Judges 15",
							"uri": "/bible/judges/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Judges/Judges 16",
							"uri": "/bible/judges/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Judges/Judges 17",
							"uri": "/bible/judges/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Judges/Judges 18",
							"uri": "/bible/judges/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Judges/Judges 19",
							"uri": "/bible/judges/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Judges/Judges 20",
							"uri": "/bible/judges/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Judges/Judges 21",
							"uri": "/bible/judges/chapter-21"
						}
					],
					"uri": "/bible/judges"
				},
				{
					"name": "Ruth",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ruth/Ruth 1",
							"uri": "/bible/ruth/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ruth/Ruth 2",
							"uri": "/bible/ruth/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ruth/Ruth 3",
							"uri": "/bible/ruth/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ruth/Ruth 4",
							"uri": "/bible/ruth/chapter-4"
						}
					],
					"uri": "/bible/ruth"
				},
				{
					"name": "1 Samuel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Samuel/1 Samuel 1",
							"uri": "/bible/1-samuel/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Samuel/1 Samuel 2",
							"uri": "/bible/1-samuel/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Samuel/1 Samuel 3",
							"uri": "/bible/1-samuel/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Samuel/1 Samuel 4",
							"uri": "/bible/1-samuel/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Samuel/1 Samuel 5",
							"uri": "/bible/1-samuel/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Samuel/1 Samuel 6",
							"uri": "/bible/1-samuel/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Samuel/1 Samuel 7",
							"uri": "/bible/1-samuel/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Samuel/1 Samuel 8",
							"uri": "/bible/1-samuel/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Samuel/1 Samuel 9",
							"uri": "/bible/1-samuel/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Samuel/1 Samuel 10",
							"uri": "/bible/1-samuel/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Samuel/1 Samuel 11",
							"uri": "/bible/1-samuel/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Samuel/1 Samuel 12",
							"uri": "/bible/1-samuel/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Samuel/1 Samuel 13",
							"uri": "/bible/1-samuel/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Samuel/1 Samuel 14",
							"uri": "/bible/1-samuel/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Samuel/1 Samuel 15",
							"uri": "/bible/1-samuel/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Samuel/1 Samuel 16",
							"uri": "/bible/1-samuel/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/1 Samuel/1 Samuel 17",
							"uri": "/bible/1-samuel/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/1 Samuel/1 Samuel 18",
							"uri": "/bible/1-samuel/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/1 Samuel/1 Samuel 19",
							"uri": "/bible/1-samuel/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/1 Samuel/1 Samuel 20",
							"uri": "/bible/1-samuel/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/1 Samuel/1 Samuel 21",
							"uri": "/bible/1-samuel/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/1 Samuel/1 Samuel 22",
							"uri": "/bible/1-samuel/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/1 Samuel/1 Samuel 23",
							"uri": "/bible/1-samuel/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/1 Samuel/1 Samuel 24",
							"uri": "/bible/1-samuel/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/1 Samuel/1 Samuel 25",
							"uri": "/bible/1-samuel/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/1 Samuel/1 Samuel 26",
							"uri": "/bible/1-samuel/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/1 Samuel/1 Samuel 27",
							"uri": "/bible/1-samuel/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/1 Samuel/1 Samuel 28",
							"uri": "/bible/1-samuel/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/1 Samuel/1 Samuel 29",
							"uri": "/bible/1-samuel/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/1 Samuel/1 Samuel 30",
							"uri": "/bible/1-samuel/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/1 Samuel/1 Samuel 31",
							"uri": "/bible/1-samuel/chapter-31"
						}
					],
					"uri": "/bible/1-samuel"
				},
				{
					"name": "2 Samuel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Samuel/2 Samuel 1",
							"uri": "/bible/2-samuel/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Samuel/2 Samuel 2",
							"uri": "/bible/2-samuel/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Samuel/2 Samuel 3",
							"uri": "/bible/2-samuel/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Samuel/2 Samuel 4",
							"uri": "/bible/2-samuel/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Samuel/2 Samuel 5",
							"uri": "/bible/2-samuel/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Samuel/2 Samuel 6",
							"uri": "/bible/2-samuel/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Samuel/2 Samuel 7",
							"uri": "/bible/2-samuel/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Samuel/2 Samuel 8",
							"uri": "/bible/2-samuel/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Samuel/2 Samuel 9",
							"uri": "/bible/2-samuel/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Samuel/2 Samuel 10",
							"uri": "/bible/2-samuel/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Samuel/2 Samuel 11",
							"uri": "/bible/2-samuel/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Samuel/2 Samuel 12",
							"uri": "/bible/2-samuel/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Samuel/2 Samuel 13",
							"uri": "/bible/2-samuel/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/2 Samuel/2 Samuel 14",
							"uri": "/bible/2-samuel/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/2 Samuel/2 Samuel 15",
							"uri": "/bible/2-samuel/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/2 Samuel/2 Samuel 16",
							"uri": "/bible/2-samuel/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/2 Samuel/2 Samuel 17",
							"uri": "/bible/2-samuel/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/2 Samuel/2 Samuel 18",
							"uri": "/bible/2-samuel/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/2 Samuel/2 Samuel 19",
							"uri": "/bible/2-samuel/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/2 Samuel/2 Samuel 20",
							"uri": "/bible/2-samuel/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/2 Samuel/2 Samuel 21",
							"uri": "/bible/2-samuel/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/2 Samuel/2 Samuel 22",
							"uri": "/bible/2-samuel/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/2 Samuel/2 Samuel 23",
							"uri": "/bible/2-samuel/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/2 Samuel/2 Samuel 24",
							"uri": "/bible/2-samuel/chapter-24"
						}
					],
					"uri": "/bible/2-samuel"
				},
				{
					"name": "1 Kings",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Kings/1 Kings 1",
							"uri": "/bible/1-kings/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Kings/1 Kings 2",
							"uri": "/bible/1-kings/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Kings/1 Kings 3",
							"uri": "/bible/1-kings/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Kings/1 Kings 4",
							"uri": "/bible/1-kings/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Kings/1 Kings 5",
							"uri": "/bible/1-kings/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Kings/1 Kings 6",
							"uri": "/bible/1-kings/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Kings/1 Kings 7",
							"uri": "/bible/1-kings/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Kings/1 Kings 8",
							"uri": "/bible/1-kings/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Kings/1 Kings 9",
							"uri": "/bible/1-kings/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Kings/1 Kings 10",
							"uri": "/bible/1-kings/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Kings/1 Kings 11",
							"uri": "/bible/1-kings/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Kings/1 Kings 12",
							"uri": "/bible/1-kings/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Kings/1 Kings 13",
							"uri": "/bible/1-kings/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Kings/1 Kings 14",
							"uri": "/bible/1-kings/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Kings/1 Kings 15",
							"uri": "/bible/1-kings/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Kings/1 Kings 16",
							"uri": "/bible/1-kings/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/1 Kings/1 Kings 17",
							"uri": "/bible/1-kings/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/1 Kings/1 Kings 18",
							"uri": "/bible/1-kings/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/1 Kings/1 Kings 19",
							"uri": "/bible/1-kings/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/1 Kings/1 Kings 20",
							"uri": "/bible/1-kings/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/1 Kings/1 Kings 21",
							"uri": "/bible/1-kings/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/1 Kings/1 Kings 22",
							"uri": "/bible/1-kings/chapter-22"
						}
					],
					"uri": "/bible/1-kings"
				},
				{
					"name": "2 Kings",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Kings/2 Kings 1",
							"uri": "/bible/2-kings/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Kings/2 Kings 2",
							"uri": "/bible/2-kings/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Kings/2 Kings 3",
							"uri": "/bible/2-kings/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Kings/2 Kings 4",
							"uri": "/bible/2-kings/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Kings/2 Kings 5",
							"uri": "/bible/2-kings/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Kings/2 Kings 6",
							"uri": "/bible/2-kings/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Kings/2 Kings 7",
							"uri": "/bible/2-kings/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Kings/2 Kings 8",
							"uri": "/bible/2-kings/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Kings/2 Kings 9",
							"uri": "/bible/2-kings/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Kings/2 Kings 10",
							"uri": "/bible/2-kings/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Kings/2 Kings 11",
							"uri": "/bible/2-kings/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Kings/2 Kings 12",
							"uri": "/bible/2-kings/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Kings/2 Kings 13",
							"uri": "/bible/2-kings/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/2 Kings/2 Kings 14",
							"uri": "/bible/2-kings/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/2 Kings/2 Kings 15",
							"uri": "/bible/2-kings/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/2 Kings/2 Kings 16",
							"uri": "/bible/2-kings/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/2 Kings/2 Kings 17",
							"uri": "/bible/2-kings/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/2 Kings/2 Kings 18",
							"uri": "/bible/2-kings/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/2 Kings/2 Kings 19",
							"uri": "/bible/2-kings/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/2 Kings/2 Kings 20",
							"uri": "/bible/2-kings/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/2 Kings/2 Kings 21",
							"uri": "/bible/2-kings/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/2 Kings/2 Kings 22",
							"uri": "/bible/2-kings/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/2 Kings/2 Kings 23",
							"uri": "/bible/2-kings/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/2 Kings/2 Kings 24",
							"uri": "/bible/2-kings/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/2 Kings/2 Kings 25",
							"uri": "/bible/2-kings/chapter-25"
						}
					],
					"uri": "/bible/2-kings"
				},
				{
					"name": "1 Chronicles",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Chronicles/1 Chronicles 1",
							"uri": "/bible/1-chronicles/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Chronicles/1 Chronicles 2",
							"uri": "/bible/1-chronicles/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Chronicles/1 Chronicles 3",
							"uri": "/bible/1-chronicles/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Chronicles/1 Chronicles 4",
							"uri": "/bible/1-chronicles/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Chronicles/1 Chronicles 5",
							"uri": "/bible/1-chronicles/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Chronicles/1 Chronicles 6",
							"uri": "/bible/1-chronicles/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Chronicles/1 Chronicles 7",
							"uri": "/bible/1-chronicles/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Chronicles/1 Chronicles 8",
							"uri": "/bible/1-chronicles/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Chronicles/1 Chronicles 9",
							"uri": "/bible/1-chronicles/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Chronicles/1 Chronicles 10",
							"uri": "/bible/1-chronicles/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Chronicles/1 Chronicles 11",
							"uri": "/bible/1-chronicles/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Chronicles/1 Chronicles 12",
							"uri": "/bible/1-chronicles/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Chronicles/1 Chronicles 13",
							"uri": "/bible/1-chronicles/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Chronicles/1 Chronicles 14",
							"uri": "/bible/1-chronicles/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Chronicles/1 Chronicles 15",
							"uri": "/bible/1-chronicles/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Chronicles/1 Chronicles 16",
							"uri": "/bible/1-chronicles/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/1 Chronicles/1 Chronicles 17",
							"uri": "/bible/1-chronicles/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/1 Chronicles/1 Chronicles 18",
							"uri": "/bible/1-chronicles/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/1 Chronicles/1 Chronicles 19",
							"uri": "/bible/1-chronicles/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/1 Chronicles/1 Chronicles 20",
							"uri": "/bible/1-chronicles/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/1 Chronicles/1 Chronicles 21",
							"uri": "/bible/1-chronicles/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/1 Chronicles/1 Chronicles 22",
							"uri": "/bible/1-chronicles/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/1 Chronicles/1 Chronicles 23",
							"uri": "/bible/1-chronicles/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/1 Chronicles/1 Chronicles 24",
							"uri": "/bible/1-chronicles/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/1 Chronicles/1 Chronicles 25",
							"uri": "/bible/1-chronicles/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/1 Chronicles/1 Chronicles 26",
							"uri": "/bible/1-chronicles/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/1 Chronicles/1 Chronicles 27",
							"uri": "/bible/1-chronicles/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/1 Chronicles/1 Chronicles 28",
							"uri": "/bible/1-chronicles/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/1 Chronicles/1 Chronicles 29",
							"uri": "/bible/1-chronicles/chapter-29"
						}
					],
					"uri": "/bible/1-chronicles"
				},
				{
					"name": "2 Chronicles",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Chronicles/2 Chronicles 1",
							"uri": "/bible/2-chronicles/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Chronicles/2 Chronicles 2",
							"uri": "/bible/2-chronicles/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Chronicles/2 Chronicles 3",
							"uri": "/bible/2-chronicles/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Chronicles/2 Chronicles 4",
							"uri": "/bible/2-chronicles/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Chronicles/2 Chronicles 5",
							"uri": "/bible/2-chronicles/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Chronicles/2 Chronicles 6",
							"uri": "/bible/2-chronicles/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Chronicles/2 Chronicles 7",
							"uri": "/bible/2-chronicles/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Chronicles/2 Chronicles 8",
							"uri": "/bible/2-chronicles/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Chronicles/2 Chronicles 9",
							"uri": "/bible/2-chronicles/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Chronicles/2 Chronicles 10",
							"uri": "/bible/2-chronicles/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Chronicles/2 Chronicles 11",
							"uri": "/bible/2-chronicles/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Chronicles/2 Chronicles 12",
							"uri": "/bible/2-chronicles/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Chronicles/2 Chronicles 13",
							"uri": "/bible/2-chronicles/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/2 Chronicles/2 Chronicles 14",
							"uri": "/bible/2-chronicles/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/2 Chronicles/2 Chronicles 15",
							"uri": "/bible/2-chronicles/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/2 Chronicles/2 Chronicles 16",
							"uri": "/bible/2-chronicles/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/2 Chronicles/2 Chronicles 17",
							"uri": "/bible/2-chronicles/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/2 Chronicles/2 Chronicles 18",
							"uri": "/bible/2-chronicles/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/2 Chronicles/2 Chronicles 19",
							"uri": "/bible/2-chronicles/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/2 Chronicles/2 Chronicles 20",
							"uri": "/bible/2-chronicles/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/2 Chronicles/2 Chronicles 21",
							"uri": "/bible/2-chronicles/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/2 Chronicles/2 Chronicles 22",
							"uri": "/bible/2-chronicles/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/2 Chronicles/2 Chronicles 23",
							"uri": "/bible/2-chronicles/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/2 Chronicles/2 Chronicles 24",
							"uri": "/bible/2-chronicles/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/2 Chronicles/2 Chronicles 25",
							"uri": "/bible/2-chronicles/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/2 Chronicles/2 Chronicles 26",
							"uri": "/bible/2-chronicles/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/2 Chronicles/2 Chronicles 27",
							"uri": "/bible/2-chronicles/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/2 Chronicles/2 Chronicles 28",
							"uri": "/bible/2-chronicles/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/2 Chronicles/2 Chronicles 29",
							"uri": "/bible/2-chronicles/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/2 Chronicles/2 Chronicles 30",
							"uri": "/bible/2-chronicles/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/2 Chronicles/2 Chronicles 31",
							"uri": "/bible/2-chronicles/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/2 Chronicles/2 Chronicles 32",
							"uri": "/bible/2-chronicles/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/2 Chronicles/2 Chronicles 33",
							"uri": "/bible/2-chronicles/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/2 Chronicles/2 Chronicles 34",
							"uri": "/bible/2-chronicles/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/2 Chronicles/2 Chronicles 35",
							"uri": "/bible/2-chronicles/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/2 Chronicles/2 Chronicles 36",
							"uri": "/bible/2-chronicles/chapter-36"
						}
					],
					"uri": "/bible/2-chronicles"
				},
				{
					"name": "Ezra",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ezra/Ezra 1",
							"uri": "/bible/ezra/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ezra/Ezra 2",
							"uri": "/bible/ezra/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ezra/Ezra 3",
							"uri": "/bible/ezra/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ezra/Ezra 4",
							"uri": "/bible/ezra/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Ezra/Ezra 5",
							"uri": "/bible/ezra/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Ezra/Ezra 6",
							"uri": "/bible/ezra/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Ezra/Ezra 7",
							"uri": "/bible/ezra/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Ezra/Ezra 8",
							"uri": "/bible/ezra/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Ezra/Ezra 9",
							"uri": "/bible/ezra/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Ezra/Ezra 10",
							"uri": "/bible/ezra/chapter-10"
						}
					],
					"uri": "/bible/ezra"
				},
				{
					"name": "Nehemiah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Nehemiah/Nehemiah 1",
							"uri": "/bible/nehemiah/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Nehemiah/Nehemiah 2",
							"uri": "/bible/nehemiah/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Nehemiah/Nehemiah 3",
							"uri": "/bible/nehemiah/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Nehemiah/Nehemiah 4",
							"uri": "/bible/nehemiah/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Nehemiah/Nehemiah 5",
							"uri": "/bible/nehemiah/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Nehemiah/Nehemiah 6",
							"uri": "/bible/nehemiah/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Nehemiah/Nehemiah 7",
							"uri": "/bible/nehemiah/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Nehemiah/Nehemiah 8",
							"uri": "/bible/nehemiah/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Nehemiah/Nehemiah 9",
							"uri": "/bible/nehemiah/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Nehemiah/Nehemiah 10",
							"uri": "/bible/nehemiah/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Nehemiah/Nehemiah 11",
							"uri": "/bible/nehemiah/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Nehemiah/Nehemiah 12",
							"uri": "/bible/nehemiah/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Nehemiah/Nehemiah 13",
							"uri": "/bible/nehemiah/chapter-13"
						}
					],
					"uri": "/bible/nehemiah"
				},
				{
					"name": "Tobit",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Tobit/Tobit 1",
							"uri": "/bible/tobit/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Tobit/Tobit 2",
							"uri": "/bible/tobit/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Tobit/Tobit 3",
							"uri": "/bible/tobit/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Tobit/Tobit 4",
							"uri": "/bible/tobit/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Tobit/Tobit 5",
							"uri": "/bible/tobit/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Tobit/Tobit 6",
							"uri": "/bible/tobit/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Tobit/Tobit 7",
							"uri": "/bible/tobit/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Tobit/Tobit 8",
							"uri": "/bible/tobit/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Tobit/Tobit 9",
							"uri": "/bible/tobit/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Tobit/Tobit 10",
							"uri": "/bible/tobit/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Tobit/Tobit 11",
							"uri": "/bible/tobit/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Tobit/Tobit 12",
							"uri": "/bible/tobit/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Tobit/Tobit 13",
							"uri": "/bible/tobit/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Tobit/Tobit 14",
							"uri": "/bible/tobit/chapter-14"
						}
					],
					"uri": "/bible/tobit"
				},
				{
					"name": "Judith",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Judith/Judith 1",
							"uri": "/bible/judith/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Judith/Judith 2",
							"uri": "/bible/judith/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Judith/Judith 3",
							"uri": "/bible/judith/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Judith/Judith 4",
							"uri": "/bible/judith/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Judith/Judith 5",
							"uri": "/bible/judith/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Judith/Judith 6",
							"uri": "/bible/judith/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Judith/Judith 7",
							"uri": "/bible/judith/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Judith/Judith 8",
							"uri": "/bible/judith/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Judith/Judith 9",
							"uri": "/bible/judith/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Judith/Judith 10",
							"uri": "/bible/judith/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Judith/Judith 11",
							"uri": "/bible/judith/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Judith/Judith 12",
							"uri": "/bible/judith/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Judith/Judith 13",
							"uri": "/bible/judith/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Judith/Judith 14",
							"uri": "/bible/judith/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Judith/Judith 15",
							"uri": "/bible/judith/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Judith/Judith 16",
							"uri": "/bible/judith/chapter-16"
						}
					],
					"uri": "/bible/judith"
				},
				{
					"name": "Esther",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Esther/Esther 1",
							"uri": "/bible/esther/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Esther/Esther 2",
							"uri": "/bible/esther/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Esther/Esther 3",
							"uri": "/bible/esther/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Esther/Esther 4",
							"uri": "/bible/esther/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Esther/Esther 5",
							"uri": "/bible/esther/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Esther/Esther 6",
							"uri": "/bible/esther/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Esther/Esther 7",
							"uri": "/bible/esther/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Esther/Esther 8",
							"uri": "/bible/esther/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Esther/Esther 9",
							"uri": "/bible/esther/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Esther/Esther 10",
							"uri": "/bible/esther/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Esther/Esther 11",
							"uri": "/bible/esther/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Esther/Esther 12",
							"uri": "/bible/esther/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Esther/Esther 13",
							"uri": "/bible/esther/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Esther/Esther 14",
							"uri": "/bible/esther/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Esther/Esther 15",
							"uri": "/bible/esther/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Esther/Esther 16",
							"uri": "/bible/esther/chapter-16"
						}
					],
					"uri": "/bible/esther"
				},
				{
					"name": "Job",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Job/Job 1",
							"uri": "/bible/job/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Job/Job 2",
							"uri": "/bible/job/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Job/Job 3",
							"uri": "/bible/job/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Job/Job 4",
							"uri": "/bible/job/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Job/Job 5",
							"uri": "/bible/job/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Job/Job 6",
							"uri": "/bible/job/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Job/Job 7",
							"uri": "/bible/job/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Job/Job 8",
							"uri": "/bible/job/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Job/Job 9",
							"uri": "/bible/job/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Job/Job 10",
							"uri": "/bible/job/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Job/Job 11",
							"uri": "/bible/job/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Job/Job 12",
							"uri": "/bible/job/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Job/Job 13",
							"uri": "/bible/job/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Job/Job 14",
							"uri": "/bible/job/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Job/Job 15",
							"uri": "/bible/job/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Job/Job 16",
							"uri": "/bible/job/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Job/Job 17",
							"uri": "/bible/job/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Job/Job 18",
							"uri": "/bible/job/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Job/Job 19",
							"uri": "/bible/job/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Job/Job 20",
							"uri": "/bible/job/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Job/Job 21",
							"uri": "/bible/job/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Job/Job 22",
							"uri": "/bible/job/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Job/Job 23",
							"uri": "/bible/job/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Job/Job 24",
							"uri": "/bible/job/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Job/Job 25",
							"uri": "/bible/job/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Job/Job 26",
							"uri": "/bible/job/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Job/Job 27",
							"uri": "/bible/job/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Job/Job 28",
							"uri": "/bible/job/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Job/Job 29",
							"uri": "/bible/job/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Job/Job 30",
							"uri": "/bible/job/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Job/Job 31",
							"uri": "/bible/job/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Job/Job 32",
							"uri": "/bible/job/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Job/Job 33",
							"uri": "/bible/job/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Job/Job 34",
							"uri": "/bible/job/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Job/Job 35",
							"uri": "/bible/job/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Job/Job 36",
							"uri": "/bible/job/chapter-36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Job/Job 37",
							"uri": "/bible/job/chapter-37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Job/Job 38",
							"uri": "/bible/job/chapter-38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Job/Job 39",
							"uri": "/bible/job/chapter-39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Job/Job 40",
							"uri": "/bible/job/chapter-40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Job/Job 41",
							"uri": "/bible/job/chapter-41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Job/Job 42",
							"uri": "/bible/job/chapter-42"
						}
					],
					"uri": "/bible/job"
				},
				{
					"name": "Psalms",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Psalms/Psalms 1",
							"uri": "/bible/psalms/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Psalms/Psalms 2",
							"uri": "/bible/psalms/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Psalms/Psalms 3",
							"uri": "/bible/psalms/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Psalms/Psalms 4",
							"uri": "/bible/psalms/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Psalms/Psalms 5",
							"uri": "/bible/psalms/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Psalms/Psalms 6",
							"uri": "/bible/psalms/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Psalms/Psalms 7",
							"uri": "/bible/psalms/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Psalms/Psalms 8",
							"uri": "/bible/psalms/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Psalms/Psalms 9",
							"uri": "/bible/psalms/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Psalms/Psalms 10",
							"uri": "/bible/psalms/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Psalms/Psalms 11",
							"uri": "/bible/psalms/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Psalms/Psalms 12",
							"uri": "/bible/psalms/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Psalms/Psalms 13",
							"uri": "/bible/psalms/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Psalms/Psalms 14",
							"uri": "/bible/psalms/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Psalms/Psalms 15",
							"uri": "/bible/psalms/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Psalms/Psalms 16",
							"uri": "/bible/psalms/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Psalms/Psalms 17",
							"uri": "/bible/psalms/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Psalms/Psalms 18",
							"uri": "/bible/psalms/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Psalms/Psalms 19",
							"uri": "/bible/psalms/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Psalms/Psalms 20",
							"uri": "/bible/psalms/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Psalms/Psalms 21",
							"uri": "/bible/psalms/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Psalms/Psalms 22",
							"uri": "/bible/psalms/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Psalms/Psalms 23",
							"uri": "/bible/psalms/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Psalms/Psalms 24",
							"uri": "/bible/psalms/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Psalms/Psalms 25",
							"uri": "/bible/psalms/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Psalms/Psalms 26",
							"uri": "/bible/psalms/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Psalms/Psalms 27",
							"uri": "/bible/psalms/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Psalms/Psalms 28",
							"uri": "/bible/psalms/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Psalms/Psalms 29",
							"uri": "/bible/psalms/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Psalms/Psalms 30",
							"uri": "/bible/psalms/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Psalms/Psalms 31",
							"uri": "/bible/psalms/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Psalms/Psalms 32",
							"uri": "/bible/psalms/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Psalms/Psalms 33",
							"uri": "/bible/psalms/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Psalms/Psalms 34",
							"uri": "/bible/psalms/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Psalms/Psalms 35",
							"uri": "/bible/psalms/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Psalms/Psalms 36",
							"uri": "/bible/psalms/chapter-36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Psalms/Psalms 37",
							"uri": "/bible/psalms/chapter-37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Psalms/Psalms 38",
							"uri": "/bible/psalms/chapter-38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Psalms/Psalms 39",
							"uri": "/bible/psalms/chapter-39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Psalms/Psalms 40",
							"uri": "/bible/psalms/chapter-40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Psalms/Psalms 41",
							"uri": "/bible/psalms/chapter-41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Psalms/Psalms 42",
							"uri": "/bible/psalms/chapter-42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Psalms/Psalms 43",
							"uri": "/bible/psalms/chapter-43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Psalms/Psalms 44",
							"uri": "/bible/psalms/chapter-44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Psalms/Psalms 45",
							"uri": "/bible/psalms/chapter-45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Psalms/Psalms 46",
							"uri": "/bible/psalms/chapter-46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Psalms/Psalms 47",
							"uri": "/bible/psalms/chapter-47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Psalms/Psalms 48",
							"uri": "/bible/psalms/chapter-48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Psalms/Psalms 49",
							"uri": "/bible/psalms/chapter-49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Psalms/Psalms 50",
							"uri": "/bible/psalms/chapter-50"
						},
						{
							"name": "Chapter 51",
							"path": "readings/bible/Psalms/Psalms 51",
							"uri": "/bible/psalms/chapter-51"
						},
						{
							"name": "Chapter 52",
							"path": "readings/bible/Psalms/Psalms 52",
							"uri": "/bible/psalms/chapter-52"
						},
						{
							"name": "Chapter 53",
							"path": "readings/bible/Psalms/Psalms 53",
							"uri": "/bible/psalms/chapter-53"
						},
						{
							"name": "Chapter 54",
							"path": "readings/bible/Psalms/Psalms 54",
							"uri": "/bible/psalms/chapter-54"
						},
						{
							"name": "Chapter 55",
							"path": "readings/bible/Psalms/Psalms 55",
							"uri": "/bible/psalms/chapter-55"
						},
						{
							"name": "Chapter 56",
							"path": "readings/bible/Psalms/Psalms 56",
							"uri": "/bible/psalms/chapter-56"
						},
						{
							"name": "Chapter 57",
							"path": "readings/bible/Psalms/Psalms 57",
							"uri": "/bible/psalms/chapter-57"
						},
						{
							"name": "Chapter 58",
							"path": "readings/bible/Psalms/Psalms 58",
							"uri": "/bible/psalms/chapter-58"
						},
						{
							"name": "Chapter 59",
							"path": "readings/bible/Psalms/Psalms 59",
							"uri": "/bible/psalms/chapter-59"
						},
						{
							"name": "Chapter 60",
							"path": "readings/bible/Psalms/Psalms 60",
							"uri": "/bible/psalms/chapter-60"
						},
						{
							"name": "Chapter 61",
							"path": "readings/bible/Psalms/Psalms 61",
							"uri": "/bible/psalms/chapter-61"
						},
						{
							"name": "Chapter 62",
							"path": "readings/bible/Psalms/Psalms 62",
							"uri": "/bible/psalms/chapter-62"
						},
						{
							"name": "Chapter 63",
							"path": "readings/bible/Psalms/Psalms 63",
							"uri": "/bible/psalms/chapter-63"
						},
						{
							"name": "Chapter 64",
							"path": "readings/bible/Psalms/Psalms 64",
							"uri": "/bible/psalms/chapter-64"
						},
						{
							"name": "Chapter 65",
							"path": "readings/bible/Psalms/Psalms 65",
							"uri": "/bible/psalms/chapter-65"
						},
						{
							"name": "Chapter 66",
							"path": "readings/bible/Psalms/Psalms 66",
							"uri": "/bible/psalms/chapter-66"
						},
						{
							"name": "Chapter 67",
							"path": "readings/bible/Psalms/Psalms 67",
							"uri": "/bible/psalms/chapter-67"
						},
						{
							"name": "Chapter 68",
							"path": "readings/bible/Psalms/Psalms 68",
							"uri": "/bible/psalms/chapter-68"
						},
						{
							"name": "Chapter 69",
							"path": "readings/bible/Psalms/Psalms 69",
							"uri": "/bible/psalms/chapter-69"
						},
						{
							"name": "Chapter 70",
							"path": "readings/bible/Psalms/Psalms 70",
							"uri": "/bible/psalms/chapter-70"
						},
						{
							"name": "Chapter 71",
							"path": "readings/bible/Psalms/Psalms 71",
							"uri": "/bible/psalms/chapter-71"
						},
						{
							"name": "Chapter 72",
							"path": "readings/bible/Psalms/Psalms 72",
							"uri": "/bible/psalms/chapter-72"
						},
						{
							"name": "Chapter 73",
							"path": "readings/bible/Psalms/Psalms 73",
							"uri": "/bible/psalms/chapter-73"
						},
						{
							"name": "Chapter 74",
							"path": "readings/bible/Psalms/Psalms 74",
							"uri": "/bible/psalms/chapter-74"
						},
						{
							"name": "Chapter 75",
							"path": "readings/bible/Psalms/Psalms 75",
							"uri": "/bible/psalms/chapter-75"
						},
						{
							"name": "Chapter 76",
							"path": "readings/bible/Psalms/Psalms 76",
							"uri": "/bible/psalms/chapter-76"
						},
						{
							"name": "Chapter 77",
							"path": "readings/bible/Psalms/Psalms 77",
							"uri": "/bible/psalms/chapter-77"
						},
						{
							"name": "Chapter 78",
							"path": "readings/bible/Psalms/Psalms 78",
							"uri": "/bible/psalms/chapter-78"
						},
						{
							"name": "Chapter 79",
							"path": "readings/bible/Psalms/Psalms 79",
							"uri": "/bible/psalms/chapter-79"
						},
						{
							"name": "Chapter 80",
							"path": "readings/bible/Psalms/Psalms 80",
							"uri": "/bible/psalms/chapter-80"
						},
						{
							"name": "Chapter 81",
							"path": "readings/bible/Psalms/Psalms 81",
							"uri": "/bible/psalms/chapter-81"
						},
						{
							"name": "Chapter 82",
							"path": "readings/bible/Psalms/Psalms 82",
							"uri": "/bible/psalms/chapter-82"
						},
						{
							"name": "Chapter 83",
							"path": "readings/bible/Psalms/Psalms 83",
							"uri": "/bible/psalms/chapter-83"
						},
						{
							"name": "Chapter 84",
							"path": "readings/bible/Psalms/Psalms 84",
							"uri": "/bible/psalms/chapter-84"
						},
						{
							"name": "Chapter 85",
							"path": "readings/bible/Psalms/Psalms 85",
							"uri": "/bible/psalms/chapter-85"
						},
						{
							"name": "Chapter 86",
							"path": "readings/bible/Psalms/Psalms 86",
							"uri": "/bible/psalms/chapter-86"
						},
						{
							"name": "Chapter 87",
							"path": "readings/bible/Psalms/Psalms 87",
							"uri": "/bible/psalms/chapter-87"
						},
						{
							"name": "Chapter 88",
							"path": "readings/bible/Psalms/Psalms 88",
							"uri": "/bible/psalms/chapter-88"
						},
						{
							"name": "Chapter 89",
							"path": "readings/bible/Psalms/Psalms 89",
							"uri": "/bible/psalms/chapter-89"
						},
						{
							"name": "Chapter 90",
							"path": "readings/bible/Psalms/Psalms 90",
							"uri": "/bible/psalms/chapter-90"
						},
						{
							"name": "Chapter 91",
							"path": "readings/bible/Psalms/Psalms 91",
							"uri": "/bible/psalms/chapter-91"
						},
						{
							"name": "Chapter 92",
							"path": "readings/bible/Psalms/Psalms 92",
							"uri": "/bible/psalms/chapter-92"
						},
						{
							"name": "Chapter 93",
							"path": "readings/bible/Psalms/Psalms 93",
							"uri": "/bible/psalms/chapter-93"
						},
						{
							"name": "Chapter 94",
							"path": "readings/bible/Psalms/Psalms 94",
							"uri": "/bible/psalms/chapter-94"
						},
						{
							"name": "Chapter 95",
							"path": "readings/bible/Psalms/Psalms 95",
							"uri": "/bible/psalms/chapter-95"
						},
						{
							"name": "Chapter 96",
							"path": "readings/bible/Psalms/Psalms 96",
							"uri": "/bible/psalms/chapter-96"
						},
						{
							"name": "Chapter 97",
							"path": "readings/bible/Psalms/Psalms 97",
							"uri": "/bible/psalms/chapter-97"
						},
						{
							"name": "Chapter 98",
							"path": "readings/bible/Psalms/Psalms 98",
							"uri": "/bible/psalms/chapter-98"
						},
						{
							"name": "Chapter 99",
							"path": "readings/bible/Psalms/Psalms 99",
							"uri": "/bible/psalms/chapter-99"
						},
						{
							"name": "Chapter 100",
							"path": "readings/bible/Psalms/Psalms 100",
							"uri": "/bible/psalms/chapter-100"
						},
						{
							"name": "Chapter 101",
							"path": "readings/bible/Psalms/Psalms 101",
							"uri": "/bible/psalms/chapter-101"
						},
						{
							"name": "Chapter 102",
							"path": "readings/bible/Psalms/Psalms 102",
							"uri": "/bible/psalms/chapter-102"
						},
						{
							"name": "Chapter 103",
							"path": "readings/bible/Psalms/Psalms 103",
							"uri": "/bible/psalms/chapter-103"
						},
						{
							"name": "Chapter 104",
							"path": "readings/bible/Psalms/Psalms 104",
							"uri": "/bible/psalms/chapter-104"
						},
						{
							"name": "Chapter 105",
							"path": "readings/bible/Psalms/Psalms 105",
							"uri": "/bible/psalms/chapter-105"
						},
						{
							"name": "Chapter 106",
							"path": "readings/bible/Psalms/Psalms 106",
							"uri": "/bible/psalms/chapter-106"
						},
						{
							"name": "Chapter 107",
							"path": "readings/bible/Psalms/Psalms 107",
							"uri": "/bible/psalms/chapter-107"
						},
						{
							"name": "Chapter 108",
							"path": "readings/bible/Psalms/Psalms 108",
							"uri": "/bible/psalms/chapter-108"
						},
						{
							"name": "Chapter 109",
							"path": "readings/bible/Psalms/Psalms 109",
							"uri": "/bible/psalms/chapter-109"
						},
						{
							"name": "Chapter 110",
							"path": "readings/bible/Psalms/Psalms 110",
							"uri": "/bible/psalms/chapter-110"
						},
						{
							"name": "Chapter 111",
							"path": "readings/bible/Psalms/Psalms 111",
							"uri": "/bible/psalms/chapter-111"
						},
						{
							"name": "Chapter 112",
							"path": "readings/bible/Psalms/Psalms 112",
							"uri": "/bible/psalms/chapter-112"
						},
						{
							"name": "Chapter 113",
							"path": "readings/bible/Psalms/Psalms 113",
							"uri": "/bible/psalms/chapter-113"
						},
						{
							"name": "Chapter 114",
							"path": "readings/bible/Psalms/Psalms 114",
							"uri": "/bible/psalms/chapter-114"
						},
						{
							"name": "Chapter 115",
							"path": "readings/bible/Psalms/Psalms 115",
							"uri": "/bible/psalms/chapter-115"
						},
						{
							"name": "Chapter 116",
							"path": "readings/bible/Psalms/Psalms 116",
							"uri": "/bible/psalms/chapter-116"
						},
						{
							"name": "Chapter 117",
							"path": "readings/bible/Psalms/Psalms 117",
							"uri": "/bible/psalms/chapter-117"
						},
						{
							"name": "Chapter 118",
							"path": "readings/bible/Psalms/Psalms 118",
							"uri": "/bible/psalms/chapter-118"
						},
						{
							"name": "Chapter 119",
							"path": "readings/bible/Psalms/Psalms 119",
							"uri": "/bible/psalms/chapter-119"
						},
						{
							"name": "Chapter 120",
							"path": "readings/bible/Psalms/Psalms 120",
							"uri": "/bible/psalms/chapter-120"
						},
						{
							"name": "Chapter 121",
							"path": "readings/bible/Psalms/Psalms 121",
							"uri": "/bible/psalms/chapter-121"
						},
						{
							"name": "Chapter 122",
							"path": "readings/bible/Psalms/Psalms 122",
							"uri": "/bible/psalms/chapter-122"
						},
						{
							"name": "Chapter 123",
							"path": "readings/bible/Psalms/Psalms 123",
							"uri": "/bible/psalms/chapter-123"
						},
						{
							"name": "Chapter 124",
							"path": "readings/bible/Psalms/Psalms 124",
							"uri": "/bible/psalms/chapter-124"
						},
						{
							"name": "Chapter 125",
							"path": "readings/bible/Psalms/Psalms 125",
							"uri": "/bible/psalms/chapter-125"
						},
						{
							"name": "Chapter 126",
							"path": "readings/bible/Psalms/Psalms 126",
							"uri": "/bible/psalms/chapter-126"
						},
						{
							"name": "Chapter 127",
							"path": "readings/bible/Psalms/Psalms 127",
							"uri": "/bible/psalms/chapter-127"
						},
						{
							"name": "Chapter 128",
							"path": "readings/bible/Psalms/Psalms 128",
							"uri": "/bible/psalms/chapter-128"
						},
						{
							"name": "Chapter 129",
							"path": "readings/bible/Psalms/Psalms 129",
							"uri": "/bible/psalms/chapter-129"
						},
						{
							"name": "Chapter 130",
							"path": "readings/bible/Psalms/Psalms 130",
							"uri": "/bible/psalms/chapter-130"
						},
						{
							"name": "Chapter 131",
							"path": "readings/bible/Psalms/Psalms 131",
							"uri": "/bible/psalms/chapter-131"
						},
						{
							"name": "Chapter 132",
							"path": "readings/bible/Psalms/Psalms 132",
							"uri": "/bible/psalms/chapter-132"
						},
						{
							"name": "Chapter 133",
							"path": "readings/bible/Psalms/Psalms 133",
							"uri": "/bible/psalms/chapter-133"
						},
						{
							"name": "Chapter 134",
							"path": "readings/bible/Psalms/Psalms 134",
							"uri": "/bible/psalms/chapter-134"
						},
						{
							"name": "Chapter 135",
							"path": "readings/bible/Psalms/Psalms 135",
							"uri": "/bible/psalms/chapter-135"
						},
						{
							"name": "Chapter 136",
							"path": "readings/bible/Psalms/Psalms 136",
							"uri": "/bible/psalms/chapter-136"
						},
						{
							"name": "Chapter 137",
							"path": "readings/bible/Psalms/Psalms 137",
							"uri": "/bible/psalms/chapter-137"
						},
						{
							"name": "Chapter 138",
							"path": "readings/bible/Psalms/Psalms 138",
							"uri": "/bible/psalms/chapter-138"
						},
						{
							"name": "Chapter 139",
							"path": "readings/bible/Psalms/Psalms 139",
							"uri": "/bible/psalms/chapter-139"
						},
						{
							"name": "Chapter 140",
							"path": "readings/bible/Psalms/Psalms 140",
							"uri": "/bible/psalms/chapter-140"
						},
						{
							"name": "Chapter 141",
							"path": "readings/bible/Psalms/Psalms 141",
							"uri": "/bible/psalms/chapter-141"
						},
						{
							"name": "Chapter 142",
							"path": "readings/bible/Psalms/Psalms 142",
							"uri": "/bible/psalms/chapter-142"
						},
						{
							"name": "Chapter 143",
							"path": "readings/bible/Psalms/Psalms 143",
							"uri": "/bible/psalms/chapter-143"
						},
						{
							"name": "Chapter 144",
							"path": "readings/bible/Psalms/Psalms 144",
							"uri": "/bible/psalms/chapter-144"
						},
						{
							"name": "Chapter 145",
							"path": "readings/bible/Psalms/Psalms 145",
							"uri": "/bible/psalms/chapter-145"
						},
						{
							"name": "Chapter 146",
							"path": "readings/bible/Psalms/Psalms 146",
							"uri": "/bible/psalms/chapter-146"
						},
						{
							"name": "Chapter 147",
							"path": "readings/bible/Psalms/Psalms 147",
							"uri": "/bible/psalms/chapter-147"
						},
						{
							"name": "Chapter 148",
							"path": "readings/bible/Psalms/Psalms 148",
							"uri": "/bible/psalms/chapter-148"
						},
						{
							"name": "Chapter 149",
							"path": "readings/bible/Psalms/Psalms 149",
							"uri": "/bible/psalms/chapter-149"
						},
						{
							"name": "Chapter 150",
							"path": "readings/bible/Psalms/Psalms 150",
							"uri": "/bible/psalms/chapter-150"
						},
						{
							"name": "Chapter 151",
							"path": "readings/bible/Psalms/Psalms 151",
							"uri": "/bible/psalms/chapter-151"
						}
					],
					"uri": "/bible/psalms"
				},
				{
					"name": "Proverbs",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Proverbs/Proverbs 1",
							"uri": "/bible/proverbs/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Proverbs/Proverbs 2",
							"uri": "/bible/proverbs/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Proverbs/Proverbs 3",
							"uri": "/bible/proverbs/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Proverbs/Proverbs 4",
							"uri": "/bible/proverbs/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Proverbs/Proverbs 5",
							"uri": "/bible/proverbs/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Proverbs/Proverbs 6",
							"uri": "/bible/proverbs/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Proverbs/Proverbs 7",
							"uri": "/bible/proverbs/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Proverbs/Proverbs 8",
							"uri": "/bible/proverbs/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Proverbs/Proverbs 9",
							"uri": "/bible/proverbs/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Proverbs/Proverbs 10",
							"uri": "/bible/proverbs/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Proverbs/Proverbs 11",
							"uri": "/bible/proverbs/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Proverbs/Proverbs 12",
							"uri": "/bible/proverbs/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Proverbs/Proverbs 13",
							"uri": "/bible/proverbs/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Proverbs/Proverbs 14",
							"uri": "/bible/proverbs/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Proverbs/Proverbs 15",
							"uri": "/bible/proverbs/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Proverbs/Proverbs 16",
							"uri": "/bible/proverbs/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Proverbs/Proverbs 17",
							"uri": "/bible/proverbs/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Proverbs/Proverbs 18",
							"uri": "/bible/proverbs/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Proverbs/Proverbs 19",
							"uri": "/bible/proverbs/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Proverbs/Proverbs 20",
							"uri": "/bible/proverbs/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Proverbs/Proverbs 21",
							"uri": "/bible/proverbs/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Proverbs/Proverbs 22",
							"uri": "/bible/proverbs/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Proverbs/Proverbs 23",
							"uri": "/bible/proverbs/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Proverbs/Proverbs 24",
							"uri": "/bible/proverbs/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Proverbs/Proverbs 25",
							"uri": "/bible/proverbs/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Proverbs/Proverbs 26",
							"uri": "/bible/proverbs/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Proverbs/Proverbs 27",
							"uri": "/bible/proverbs/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Proverbs/Proverbs 28",
							"uri": "/bible/proverbs/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Proverbs/Proverbs 29",
							"uri": "/bible/proverbs/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Proverbs/Proverbs 30",
							"uri": "/bible/proverbs/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Proverbs/Proverbs 31",
							"uri": "/bible/proverbs/chapter-31"
						}
					],
					"uri": "/bible/proverbs"
				},
				{
					"name": "Ecclesiastes",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 1",
							"uri": "/bible/ecclesiastes/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 2",
							"uri": "/bible/ecclesiastes/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 3",
							"uri": "/bible/ecclesiastes/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 4",
							"uri": "/bible/ecclesiastes/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 5",
							"uri": "/bible/ecclesiastes/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 6",
							"uri": "/bible/ecclesiastes/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 7",
							"uri": "/bible/ecclesiastes/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 8",
							"uri": "/bible/ecclesiastes/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 9",
							"uri": "/bible/ecclesiastes/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 10",
							"uri": "/bible/ecclesiastes/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 11",
							"uri": "/bible/ecclesiastes/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Ecclesiastes/Ecclesiastes 12",
							"uri": "/bible/ecclesiastes/chapter-12"
						}
					],
					"uri": "/bible/ecclesiastes"
				},
				{
					"name": "Song of Solomon",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Song of Solomon/Song of Solomon 1",
							"uri": "/bible/song-of-solomon/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Song of Solomon/Song of Solomon 2",
							"uri": "/bible/song-of-solomon/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Song of Solomon/Song of Solomon 3",
							"uri": "/bible/song-of-solomon/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Song of Solomon/Song of Solomon 4",
							"uri": "/bible/song-of-solomon/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Song of Solomon/Song of Solomon 5",
							"uri": "/bible/song-of-solomon/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Song of Solomon/Song of Solomon 6",
							"uri": "/bible/song-of-solomon/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Song of Solomon/Song of Solomon 7",
							"uri": "/bible/song-of-solomon/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Song of Solomon/Song of Solomon 8",
							"uri": "/bible/song-of-solomon/chapter-8"
						}
					],
					"uri": "/bible/song-of-solomon"
				},
				{
					"name": "Wisdom",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Wisdom/Wisdom 1",
							"uri": "/bible/wisdom/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Wisdom/Wisdom 2",
							"uri": "/bible/wisdom/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Wisdom/Wisdom 3",
							"uri": "/bible/wisdom/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Wisdom/Wisdom 4",
							"uri": "/bible/wisdom/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Wisdom/Wisdom 5",
							"uri": "/bible/wisdom/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Wisdom/Wisdom 6",
							"uri": "/bible/wisdom/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Wisdom/Wisdom 7",
							"uri": "/bible/wisdom/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Wisdom/Wisdom 8",
							"uri": "/bible/wisdom/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Wisdom/Wisdom 9",
							"uri": "/bible/wisdom/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Wisdom/Wisdom 10",
							"uri": "/bible/wisdom/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Wisdom/Wisdom 11",
							"uri": "/bible/wisdom/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Wisdom/Wisdom 12",
							"uri": "/bible/wisdom/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Wisdom/Wisdom 13",
							"uri": "/bible/wisdom/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Wisdom/Wisdom 14",
							"uri": "/bible/wisdom/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Wisdom/Wisdom 15",
							"uri": "/bible/wisdom/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Wisdom/Wisdom 16",
							"uri": "/bible/wisdom/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Wisdom/Wisdom 17",
							"uri": "/bible/wisdom/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Wisdom/Wisdom 18",
							"uri": "/bible/wisdom/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Wisdom/Wisdom 19",
							"uri": "/bible/wisdom/chapter-19"
						}
					],
					"uri": "/bible/wisdom"
				},
				{
					"name": "Sirach",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Sirach/Sirach 1",
							"uri": "/bible/sirach/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Sirach/Sirach 2",
							"uri": "/bible/sirach/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Sirach/Sirach 3",
							"uri": "/bible/sirach/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Sirach/Sirach 4",
							"uri": "/bible/sirach/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Sirach/Sirach 5",
							"uri": "/bible/sirach/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Sirach/Sirach 6",
							"uri": "/bible/sirach/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Sirach/Sirach 7",
							"uri": "/bible/sirach/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Sirach/Sirach 8",
							"uri": "/bible/sirach/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Sirach/Sirach 9",
							"uri": "/bible/sirach/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Sirach/Sirach 10",
							"uri": "/bible/sirach/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Sirach/Sirach 11",
							"uri": "/bible/sirach/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Sirach/Sirach 12",
							"uri": "/bible/sirach/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Sirach/Sirach 13",
							"uri": "/bible/sirach/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Sirach/Sirach 14",
							"uri": "/bible/sirach/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Sirach/Sirach 15",
							"uri": "/bible/sirach/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Sirach/Sirach 16",
							"uri": "/bible/sirach/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Sirach/Sirach 17",
							"uri": "/bible/sirach/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Sirach/Sirach 18",
							"uri": "/bible/sirach/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Sirach/Sirach 19",
							"uri": "/bible/sirach/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Sirach/Sirach 20",
							"uri": "/bible/sirach/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Sirach/Sirach 21",
							"uri": "/bible/sirach/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Sirach/Sirach 22",
							"uri": "/bible/sirach/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Sirach/Sirach 23",
							"uri": "/bible/sirach/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Sirach/Sirach 24",
							"uri": "/bible/sirach/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Sirach/Sirach 25",
							"uri": "/bible/sirach/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Sirach/Sirach 26",
							"uri": "/bible/sirach/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Sirach/Sirach 27",
							"uri": "/bible/sirach/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Sirach/Sirach 28",
							"uri": "/bible/sirach/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Sirach/Sirach 29",
							"uri": "/bible/sirach/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Sirach/Sirach 30",
							"uri": "/bible/sirach/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Sirach/Sirach 31",
							"uri": "/bible/sirach/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Sirach/Sirach 32",
							"uri": "/bible/sirach/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Sirach/Sirach 33",
							"uri": "/bible/sirach/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Sirach/Sirach 34",
							"uri": "/bible/sirach/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Sirach/Sirach 35",
							"uri": "/bible/sirach/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Sirach/Sirach 36",
							"uri": "/bible/sirach/chapter-36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Sirach/Sirach 37",
							"uri": "/bible/sirach/chapter-37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Sirach/Sirach 38",
							"uri": "/bible/sirach/chapter-38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Sirach/Sirach 39",
							"uri": "/bible/sirach/chapter-39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Sirach/Sirach 40",
							"uri": "/bible/sirach/chapter-40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Sirach/Sirach 41",
							"uri": "/bible/sirach/chapter-41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Sirach/Sirach 42",
							"uri": "/bible/sirach/chapter-42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Sirach/Sirach 43",
							"uri": "/bible/sirach/chapter-43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Sirach/Sirach 44",
							"uri": "/bible/sirach/chapter-44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Sirach/Sirach 45",
							"uri": "/bible/sirach/chapter-45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Sirach/Sirach 46",
							"uri": "/bible/sirach/chapter-46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Sirach/Sirach 47",
							"uri": "/bible/sirach/chapter-47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Sirach/Sirach 48",
							"uri": "/bible/sirach/chapter-48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Sirach/Sirach 49",
							"uri": "/bible/sirach/chapter-49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Sirach/Sirach 50",
							"uri": "/bible/sirach/chapter-50"
						},
						{
							"name": "Chapter 51",
							"path": "readings/bible/Sirach/Sirach 51",
							"uri": "/bible/sirach/chapter-51"
						}
					],
					"uri": "/bible/sirach"
				},
				{
					"name": "Isaiah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Isaiah/Isaiah 1",
							"uri": "/bible/isaiah/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Isaiah/Isaiah 2",
							"uri": "/bible/isaiah/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Isaiah/Isaiah 3",
							"uri": "/bible/isaiah/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Isaiah/Isaiah 4",
							"uri": "/bible/isaiah/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Isaiah/Isaiah 5",
							"uri": "/bible/isaiah/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Isaiah/Isaiah 6",
							"uri": "/bible/isaiah/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Isaiah/Isaiah 7",
							"uri": "/bible/isaiah/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Isaiah/Isaiah 8",
							"uri": "/bible/isaiah/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Isaiah/Isaiah 9",
							"uri": "/bible/isaiah/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Isaiah/Isaiah 10",
							"uri": "/bible/isaiah/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Isaiah/Isaiah 11",
							"uri": "/bible/isaiah/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Isaiah/Isaiah 12",
							"uri": "/bible/isaiah/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Isaiah/Isaiah 13",
							"uri": "/bible/isaiah/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Isaiah/Isaiah 14",
							"uri": "/bible/isaiah/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Isaiah/Isaiah 15",
							"uri": "/bible/isaiah/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Isaiah/Isaiah 16",
							"uri": "/bible/isaiah/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Isaiah/Isaiah 17",
							"uri": "/bible/isaiah/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Isaiah/Isaiah 18",
							"uri": "/bible/isaiah/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Isaiah/Isaiah 19",
							"uri": "/bible/isaiah/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Isaiah/Isaiah 20",
							"uri": "/bible/isaiah/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Isaiah/Isaiah 21",
							"uri": "/bible/isaiah/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Isaiah/Isaiah 22",
							"uri": "/bible/isaiah/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Isaiah/Isaiah 23",
							"uri": "/bible/isaiah/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Isaiah/Isaiah 24",
							"uri": "/bible/isaiah/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Isaiah/Isaiah 25",
							"uri": "/bible/isaiah/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Isaiah/Isaiah 26",
							"uri": "/bible/isaiah/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Isaiah/Isaiah 27",
							"uri": "/bible/isaiah/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Isaiah/Isaiah 28",
							"uri": "/bible/isaiah/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Isaiah/Isaiah 29",
							"uri": "/bible/isaiah/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Isaiah/Isaiah 30",
							"uri": "/bible/isaiah/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Isaiah/Isaiah 31",
							"uri": "/bible/isaiah/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Isaiah/Isaiah 32",
							"uri": "/bible/isaiah/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Isaiah/Isaiah 33",
							"uri": "/bible/isaiah/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Isaiah/Isaiah 34",
							"uri": "/bible/isaiah/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Isaiah/Isaiah 35",
							"uri": "/bible/isaiah/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Isaiah/Isaiah 36",
							"uri": "/bible/isaiah/chapter-36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Isaiah/Isaiah 37",
							"uri": "/bible/isaiah/chapter-37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Isaiah/Isaiah 38",
							"uri": "/bible/isaiah/chapter-38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Isaiah/Isaiah 39",
							"uri": "/bible/isaiah/chapter-39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Isaiah/Isaiah 40",
							"uri": "/bible/isaiah/chapter-40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Isaiah/Isaiah 41",
							"uri": "/bible/isaiah/chapter-41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Isaiah/Isaiah 42",
							"uri": "/bible/isaiah/chapter-42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Isaiah/Isaiah 43",
							"uri": "/bible/isaiah/chapter-43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Isaiah/Isaiah 44",
							"uri": "/bible/isaiah/chapter-44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Isaiah/Isaiah 45",
							"uri": "/bible/isaiah/chapter-45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Isaiah/Isaiah 46",
							"uri": "/bible/isaiah/chapter-46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Isaiah/Isaiah 47",
							"uri": "/bible/isaiah/chapter-47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Isaiah/Isaiah 48",
							"uri": "/bible/isaiah/chapter-48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Isaiah/Isaiah 49",
							"uri": "/bible/isaiah/chapter-49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Isaiah/Isaiah 50",
							"uri": "/bible/isaiah/chapter-50"
						},
						{
							"name": "Chapter 51",
							"path": "readings/bible/Isaiah/Isaiah 51",
							"uri": "/bible/isaiah/chapter-51"
						},
						{
							"name": "Chapter 52",
							"path": "readings/bible/Isaiah/Isaiah 52",
							"uri": "/bible/isaiah/chapter-52"
						},
						{
							"name": "Chapter 53",
							"path": "readings/bible/Isaiah/Isaiah 53",
							"uri": "/bible/isaiah/chapter-53"
						},
						{
							"name": "Chapter 54",
							"path": "readings/bible/Isaiah/Isaiah 54",
							"uri": "/bible/isaiah/chapter-54"
						},
						{
							"name": "Chapter 55",
							"path": "readings/bible/Isaiah/Isaiah 55",
							"uri": "/bible/isaiah/chapter-55"
						},
						{
							"name": "Chapter 56",
							"path": "readings/bible/Isaiah/Isaiah 56",
							"uri": "/bible/isaiah/chapter-56"
						},
						{
							"name": "Chapter 57",
							"path": "readings/bible/Isaiah/Isaiah 57",
							"uri": "/bible/isaiah/chapter-57"
						},
						{
							"name": "Chapter 58",
							"path": "readings/bible/Isaiah/Isaiah 58",
							"uri": "/bible/isaiah/chapter-58"
						},
						{
							"name": "Chapter 59",
							"path": "readings/bible/Isaiah/Isaiah 59",
							"uri": "/bible/isaiah/chapter-59"
						},
						{
							"name": "Chapter 60",
							"path": "readings/bible/Isaiah/Isaiah 60",
							"uri": "/bible/isaiah/chapter-60"
						},
						{
							"name": "Chapter 61",
							"path": "readings/bible/Isaiah/Isaiah 61",
							"uri": "/bible/isaiah/chapter-61"
						},
						{
							"name": "Chapter 62",
							"path": "readings/bible/Isaiah/Isaiah 62",
							"uri": "/bible/isaiah/chapter-62"
						},
						{
							"name": "Chapter 63",
							"path": "readings/bible/Isaiah/Isaiah 63",
							"uri": "/bible/isaiah/chapter-63"
						},
						{
							"name": "Chapter 64",
							"path": "readings/bible/Isaiah/Isaiah 64",
							"uri": "/bible/isaiah/chapter-64"
						},
						{
							"name": "Chapter 65",
							"path": "readings/bible/Isaiah/Isaiah 65",
							"uri": "/bible/isaiah/chapter-65"
						},
						{
							"name": "Chapter 66",
							"path": "readings/bible/Isaiah/Isaiah 66",
							"uri": "/bible/isaiah/chapter-66"
						}
					],
					"uri": "/bible/isaiah"
				},
				{
					"name": "Jeremiah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Jeremiah/Jeremiah 1",
							"uri": "/bible/jeremiah/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Jeremiah/Jeremiah 2",
							"uri": "/bible/jeremiah/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Jeremiah/Jeremiah 3",
							"uri": "/bible/jeremiah/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Jeremiah/Jeremiah 4",
							"uri": "/bible/jeremiah/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Jeremiah/Jeremiah 5",
							"uri": "/bible/jeremiah/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Jeremiah/Jeremiah 6",
							"uri": "/bible/jeremiah/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Jeremiah/Jeremiah 7",
							"uri": "/bible/jeremiah/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Jeremiah/Jeremiah 8",
							"uri": "/bible/jeremiah/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Jeremiah/Jeremiah 9",
							"uri": "/bible/jeremiah/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Jeremiah/Jeremiah 10",
							"uri": "/bible/jeremiah/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Jeremiah/Jeremiah 11",
							"uri": "/bible/jeremiah/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Jeremiah/Jeremiah 12",
							"uri": "/bible/jeremiah/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Jeremiah/Jeremiah 13",
							"uri": "/bible/jeremiah/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Jeremiah/Jeremiah 14",
							"uri": "/bible/jeremiah/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Jeremiah/Jeremiah 15",
							"uri": "/bible/jeremiah/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Jeremiah/Jeremiah 16",
							"uri": "/bible/jeremiah/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Jeremiah/Jeremiah 17",
							"uri": "/bible/jeremiah/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Jeremiah/Jeremiah 18",
							"uri": "/bible/jeremiah/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Jeremiah/Jeremiah 19",
							"uri": "/bible/jeremiah/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Jeremiah/Jeremiah 20",
							"uri": "/bible/jeremiah/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Jeremiah/Jeremiah 21",
							"uri": "/bible/jeremiah/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Jeremiah/Jeremiah 22",
							"uri": "/bible/jeremiah/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Jeremiah/Jeremiah 23",
							"uri": "/bible/jeremiah/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Jeremiah/Jeremiah 24",
							"uri": "/bible/jeremiah/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Jeremiah/Jeremiah 25",
							"uri": "/bible/jeremiah/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Jeremiah/Jeremiah 26",
							"uri": "/bible/jeremiah/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Jeremiah/Jeremiah 27",
							"uri": "/bible/jeremiah/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Jeremiah/Jeremiah 28",
							"uri": "/bible/jeremiah/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Jeremiah/Jeremiah 29",
							"uri": "/bible/jeremiah/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Jeremiah/Jeremiah 30",
							"uri": "/bible/jeremiah/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Jeremiah/Jeremiah 31",
							"uri": "/bible/jeremiah/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Jeremiah/Jeremiah 32",
							"uri": "/bible/jeremiah/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Jeremiah/Jeremiah 33",
							"uri": "/bible/jeremiah/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Jeremiah/Jeremiah 34",
							"uri": "/bible/jeremiah/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Jeremiah/Jeremiah 35",
							"uri": "/bible/jeremiah/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Jeremiah/Jeremiah 36",
							"uri": "/bible/jeremiah/chapter-36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Jeremiah/Jeremiah 37",
							"uri": "/bible/jeremiah/chapter-37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Jeremiah/Jeremiah 38",
							"uri": "/bible/jeremiah/chapter-38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Jeremiah/Jeremiah 39",
							"uri": "/bible/jeremiah/chapter-39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Jeremiah/Jeremiah 40",
							"uri": "/bible/jeremiah/chapter-40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Jeremiah/Jeremiah 41",
							"uri": "/bible/jeremiah/chapter-41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Jeremiah/Jeremiah 42",
							"uri": "/bible/jeremiah/chapter-42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Jeremiah/Jeremiah 43",
							"uri": "/bible/jeremiah/chapter-43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Jeremiah/Jeremiah 44",
							"uri": "/bible/jeremiah/chapter-44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Jeremiah/Jeremiah 45",
							"uri": "/bible/jeremiah/chapter-45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Jeremiah/Jeremiah 46",
							"uri": "/bible/jeremiah/chapter-46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Jeremiah/Jeremiah 47",
							"uri": "/bible/jeremiah/chapter-47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Jeremiah/Jeremiah 48",
							"uri": "/bible/jeremiah/chapter-48"
						},
						{
							"name": "Chapter 49",
							"path": "readings/bible/Jeremiah/Jeremiah 49",
							"uri": "/bible/jeremiah/chapter-49"
						},
						{
							"name": "Chapter 50",
							"path": "readings/bible/Jeremiah/Jeremiah 50",
							"uri": "/bible/jeremiah/chapter-50"
						},
						{
							"name": "Chapter 51",
							"path": "readings/bible/Jeremiah/Jeremiah 51",
							"uri": "/bible/jeremiah/chapter-51"
						},
						{
							"name": "Chapter 52",
							"path": "readings/bible/Jeremiah/Jeremiah 52",
							"uri": "/bible/jeremiah/chapter-52"
						}
					],
					"uri": "/bible/jeremiah"
				},
				{
					"name": "Lamentations",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Lamentations/Lamentations 1",
							"uri": "/bible/lamentations/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Lamentations/Lamentations 2",
							"uri": "/bible/lamentations/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Lamentations/Lamentations 3",
							"uri": "/bible/lamentations/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Lamentations/Lamentations 4",
							"uri": "/bible/lamentations/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Lamentations/Lamentations 5",
							"uri": "/bible/lamentations/chapter-5"
						}
					],
					"uri": "/bible/lamentations"
				},
				{
					"name": "Baruch",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Baruch/Baruch 1",
							"uri": "/bible/baruch/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Baruch/Baruch 2",
							"uri": "/bible/baruch/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Baruch/Baruch 3",
							"uri": "/bible/baruch/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Baruch/Baruch 4",
							"uri": "/bible/baruch/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Baruch/Baruch 5",
							"uri": "/bible/baruch/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Baruch/Baruch 6",
							"uri": "/bible/baruch/chapter-6"
						}
					],
					"uri": "/bible/baruch"
				},
				{
					"name": "Ezekiel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ezekiel/Ezekiel 1",
							"uri": "/bible/ezekiel/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ezekiel/Ezekiel 2",
							"uri": "/bible/ezekiel/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ezekiel/Ezekiel 3",
							"uri": "/bible/ezekiel/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ezekiel/Ezekiel 4",
							"uri": "/bible/ezekiel/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Ezekiel/Ezekiel 5",
							"uri": "/bible/ezekiel/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Ezekiel/Ezekiel 6",
							"uri": "/bible/ezekiel/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Ezekiel/Ezekiel 7",
							"uri": "/bible/ezekiel/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Ezekiel/Ezekiel 8",
							"uri": "/bible/ezekiel/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Ezekiel/Ezekiel 9",
							"uri": "/bible/ezekiel/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Ezekiel/Ezekiel 10",
							"uri": "/bible/ezekiel/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Ezekiel/Ezekiel 11",
							"uri": "/bible/ezekiel/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Ezekiel/Ezekiel 12",
							"uri": "/bible/ezekiel/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Ezekiel/Ezekiel 13",
							"uri": "/bible/ezekiel/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Ezekiel/Ezekiel 14",
							"uri": "/bible/ezekiel/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Ezekiel/Ezekiel 15",
							"uri": "/bible/ezekiel/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Ezekiel/Ezekiel 16",
							"uri": "/bible/ezekiel/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Ezekiel/Ezekiel 17",
							"uri": "/bible/ezekiel/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Ezekiel/Ezekiel 18",
							"uri": "/bible/ezekiel/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Ezekiel/Ezekiel 19",
							"uri": "/bible/ezekiel/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Ezekiel/Ezekiel 20",
							"uri": "/bible/ezekiel/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Ezekiel/Ezekiel 21",
							"uri": "/bible/ezekiel/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Ezekiel/Ezekiel 22",
							"uri": "/bible/ezekiel/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Ezekiel/Ezekiel 23",
							"uri": "/bible/ezekiel/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Ezekiel/Ezekiel 24",
							"uri": "/bible/ezekiel/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Ezekiel/Ezekiel 25",
							"uri": "/bible/ezekiel/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Ezekiel/Ezekiel 26",
							"uri": "/bible/ezekiel/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Ezekiel/Ezekiel 27",
							"uri": "/bible/ezekiel/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Ezekiel/Ezekiel 28",
							"uri": "/bible/ezekiel/chapter-28"
						},
						{
							"name": "Chapter 29",
							"path": "readings/bible/Ezekiel/Ezekiel 29",
							"uri": "/bible/ezekiel/chapter-29"
						},
						{
							"name": "Chapter 30",
							"path": "readings/bible/Ezekiel/Ezekiel 30",
							"uri": "/bible/ezekiel/chapter-30"
						},
						{
							"name": "Chapter 31",
							"path": "readings/bible/Ezekiel/Ezekiel 31",
							"uri": "/bible/ezekiel/chapter-31"
						},
						{
							"name": "Chapter 32",
							"path": "readings/bible/Ezekiel/Ezekiel 32",
							"uri": "/bible/ezekiel/chapter-32"
						},
						{
							"name": "Chapter 33",
							"path": "readings/bible/Ezekiel/Ezekiel 33",
							"uri": "/bible/ezekiel/chapter-33"
						},
						{
							"name": "Chapter 34",
							"path": "readings/bible/Ezekiel/Ezekiel 34",
							"uri": "/bible/ezekiel/chapter-34"
						},
						{
							"name": "Chapter 35",
							"path": "readings/bible/Ezekiel/Ezekiel 35",
							"uri": "/bible/ezekiel/chapter-35"
						},
						{
							"name": "Chapter 36",
							"path": "readings/bible/Ezekiel/Ezekiel 36",
							"uri": "/bible/ezekiel/chapter-36"
						},
						{
							"name": "Chapter 37",
							"path": "readings/bible/Ezekiel/Ezekiel 37",
							"uri": "/bible/ezekiel/chapter-37"
						},
						{
							"name": "Chapter 38",
							"path": "readings/bible/Ezekiel/Ezekiel 38",
							"uri": "/bible/ezekiel/chapter-38"
						},
						{
							"name": "Chapter 39",
							"path": "readings/bible/Ezekiel/Ezekiel 39",
							"uri": "/bible/ezekiel/chapter-39"
						},
						{
							"name": "Chapter 40",
							"path": "readings/bible/Ezekiel/Ezekiel 40",
							"uri": "/bible/ezekiel/chapter-40"
						},
						{
							"name": "Chapter 41",
							"path": "readings/bible/Ezekiel/Ezekiel 41",
							"uri": "/bible/ezekiel/chapter-41"
						},
						{
							"name": "Chapter 42",
							"path": "readings/bible/Ezekiel/Ezekiel 42",
							"uri": "/bible/ezekiel/chapter-42"
						},
						{
							"name": "Chapter 43",
							"path": "readings/bible/Ezekiel/Ezekiel 43",
							"uri": "/bible/ezekiel/chapter-43"
						},
						{
							"name": "Chapter 44",
							"path": "readings/bible/Ezekiel/Ezekiel 44",
							"uri": "/bible/ezekiel/chapter-44"
						},
						{
							"name": "Chapter 45",
							"path": "readings/bible/Ezekiel/Ezekiel 45",
							"uri": "/bible/ezekiel/chapter-45"
						},
						{
							"name": "Chapter 46",
							"path": "readings/bible/Ezekiel/Ezekiel 46",
							"uri": "/bible/ezekiel/chapter-46"
						},
						{
							"name": "Chapter 47",
							"path": "readings/bible/Ezekiel/Ezekiel 47",
							"uri": "/bible/ezekiel/chapter-47"
						},
						{
							"name": "Chapter 48",
							"path": "readings/bible/Ezekiel/Ezekiel 48",
							"uri": "/bible/ezekiel/chapter-48"
						}
					],
					"uri": "/bible/ezekiel"
				},
				{
					"name": "Daniel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Daniel/Daniel 1",
							"uri": "/bible/daniel/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Daniel/Daniel 2",
							"uri": "/bible/daniel/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Daniel/Daniel 3",
							"uri": "/bible/daniel/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Daniel/Daniel 4",
							"uri": "/bible/daniel/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Daniel/Daniel 5",
							"uri": "/bible/daniel/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Daniel/Daniel 6",
							"uri": "/bible/daniel/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Daniel/Daniel 7",
							"uri": "/bible/daniel/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Daniel/Daniel 8",
							"uri": "/bible/daniel/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Daniel/Daniel 9",
							"uri": "/bible/daniel/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Daniel/Daniel 10",
							"uri": "/bible/daniel/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Daniel/Daniel 11",
							"uri": "/bible/daniel/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Daniel/Daniel 12",
							"uri": "/bible/daniel/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Daniel/Daniel 13",
							"uri": "/bible/daniel/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Daniel/Daniel 14",
							"uri": "/bible/daniel/chapter-14"
						}
					],
					"uri": "/bible/daniel"
				},
				{
					"name": "Hosea",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Hosea/Hosea 1",
							"uri": "/bible/hosea/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Hosea/Hosea 2",
							"uri": "/bible/hosea/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Hosea/Hosea 3",
							"uri": "/bible/hosea/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Hosea/Hosea 4",
							"uri": "/bible/hosea/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Hosea/Hosea 5",
							"uri": "/bible/hosea/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Hosea/Hosea 6",
							"uri": "/bible/hosea/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Hosea/Hosea 7",
							"uri": "/bible/hosea/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Hosea/Hosea 8",
							"uri": "/bible/hosea/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Hosea/Hosea 9",
							"uri": "/bible/hosea/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Hosea/Hosea 10",
							"uri": "/bible/hosea/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Hosea/Hosea 11",
							"uri": "/bible/hosea/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Hosea/Hosea 12",
							"uri": "/bible/hosea/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Hosea/Hosea 13",
							"uri": "/bible/hosea/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Hosea/Hosea 14",
							"uri": "/bible/hosea/chapter-14"
						}
					],
					"uri": "/bible/hosea"
				},
				{
					"name": "Joel",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Joel/Joel 1",
							"uri": "/bible/joel/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Joel/Joel 2",
							"uri": "/bible/joel/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Joel/Joel 3",
							"uri": "/bible/joel/chapter-3"
						}
					],
					"uri": "/bible/joel"
				},
				{
					"name": "Amos",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Amos/Amos 1",
							"uri": "/bible/amos/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Amos/Amos 2",
							"uri": "/bible/amos/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Amos/Amos 3",
							"uri": "/bible/amos/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Amos/Amos 4",
							"uri": "/bible/amos/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Amos/Amos 5",
							"uri": "/bible/amos/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Amos/Amos 6",
							"uri": "/bible/amos/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Amos/Amos 7",
							"uri": "/bible/amos/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Amos/Amos 8",
							"uri": "/bible/amos/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Amos/Amos 9",
							"uri": "/bible/amos/chapter-9"
						}
					],
					"uri": "/bible/amos"
				},
				{
					"name": "Obadiah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Obadiah/Obadiah 1",
							"uri": "/bible/obadiah/chapter-1"
						}
					],
					"uri": "/bible/obadiah"
				},
				{
					"name": "Jonah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Jonah/Jonah 1",
							"uri": "/bible/jonah/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Jonah/Jonah 2",
							"uri": "/bible/jonah/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Jonah/Jonah 3",
							"uri": "/bible/jonah/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Jonah/Jonah 4",
							"uri": "/bible/jonah/chapter-4"
						}
					],
					"uri": "/bible/jonah"
				},
				{
					"name": "Micah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Micah/Micah 1",
							"uri": "/bible/micah/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Micah/Micah 2",
							"uri": "/bible/micah/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Micah/Micah 3",
							"uri": "/bible/micah/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Micah/Micah 4",
							"uri": "/bible/micah/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Micah/Micah 5",
							"uri": "/bible/micah/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Micah/Micah 6",
							"uri": "/bible/micah/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Micah/Micah 7",
							"uri": "/bible/micah/chapter-7"
						}
					],
					"uri": "/bible/micah"
				},
				{
					"name": "Nahum",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Nahum/Nahum 1",
							"uri": "/bible/nahum/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Nahum/Nahum 2",
							"uri": "/bible/nahum/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Nahum/Nahum 3",
							"uri": "/bible/nahum/chapter-3"
						}
					],
					"uri": "/bible/nahum"
				},
				{
					"name": "Habakkuk",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Habakkuk/Habakkuk 1",
							"uri": "/bible/habakkuk/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Habakkuk/Habakkuk 2",
							"uri": "/bible/habakkuk/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Habakkuk/Habakkuk 3",
							"uri": "/bible/habakkuk/chapter-3"
						}
					],
					"uri": "/bible/habakkuk"
				},
				{
					"name": "Zephaniah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Zephaniah/Zephaniah 1",
							"uri": "/bible/zephaniah/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Zephaniah/Zephaniah 2",
							"uri": "/bible/zephaniah/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Zephaniah/Zephaniah 3",
							"uri": "/bible/zephaniah/chapter-3"
						}
					],
					"uri": "/bible/zephaniah"
				},
				{
					"name": "Haggai",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Haggai/Haggai 1",
							"uri": "/bible/haggai/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Haggai/Haggai 2",
							"uri": "/bible/haggai/chapter-2"
						}
					],
					"uri": "/bible/haggai"
				},
				{
					"name": "Zechariah",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Zechariah/Zechariah 1",
							"uri": "/bible/zechariah/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Zechariah/Zechariah 2",
							"uri": "/bible/zechariah/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Zechariah/Zechariah 3",
							"uri": "/bible/zechariah/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Zechariah/Zechariah 4",
							"uri": "/bible/zechariah/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Zechariah/Zechariah 5",
							"uri": "/bible/zechariah/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Zechariah/Zechariah 6",
							"uri": "/bible/zechariah/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Zechariah/Zechariah 7",
							"uri": "/bible/zechariah/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Zechariah/Zechariah 8",
							"uri": "/bible/zechariah/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Zechariah/Zechariah 9",
							"uri": "/bible/zechariah/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Zechariah/Zechariah 10",
							"uri": "/bible/zechariah/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Zechariah/Zechariah 11",
							"uri": "/bible/zechariah/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Zechariah/Zechariah 12",
							"uri": "/bible/zechariah/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Zechariah/Zechariah 13",
							"uri": "/bible/zechariah/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Zechariah/Zechariah 14",
							"uri": "/bible/zechariah/chapter-14"
						}
					],
					"uri": "/bible/zechariah"
				},
				{
					"name": "Malachi",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Malachi/Malachi 1",
							"uri": "/bible/malachi/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Malachi/Malachi 2",
							"uri": "/bible/malachi/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Malachi/Malachi 3",
							"uri": "/bible/malachi/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Malachi/Malachi 4",
							"uri": "/bible/malachi/chapter-4"
						}
					],
					"uri": "/bible/malachi"
				},
				{
					"name": "1 Maccabees",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Maccabees/1 Maccabees 1",
							"uri": "/bible/1-maccabees/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Maccabees/1 Maccabees 2",
							"uri": "/bible/1-maccabees/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Maccabees/1 Maccabees 3",
							"uri": "/bible/1-maccabees/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Maccabees/1 Maccabees 4",
							"uri": "/bible/1-maccabees/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Maccabees/1 Maccabees 5",
							"uri": "/bible/1-maccabees/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Maccabees/1 Maccabees 6",
							"uri": "/bible/1-maccabees/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Maccabees/1 Maccabees 7",
							"uri": "/bible/1-maccabees/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Maccabees/1 Maccabees 8",
							"uri": "/bible/1-maccabees/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Maccabees/1 Maccabees 9",
							"uri": "/bible/1-maccabees/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Maccabees/1 Maccabees 10",
							"uri": "/bible/1-maccabees/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Maccabees/1 Maccabees 11",
							"uri": "/bible/1-maccabees/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Maccabees/1 Maccabees 12",
							"uri": "/bible/1-maccabees/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Maccabees/1 Maccabees 13",
							"uri": "/bible/1-maccabees/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Maccabees/1 Maccabees 14",
							"uri": "/bible/1-maccabees/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Maccabees/1 Maccabees 15",
							"uri": "/bible/1-maccabees/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Maccabees/1 Maccabees 16",
							"uri": "/bible/1-maccabees/chapter-16"
						}
					],
					"uri": "/bible/1-maccabees"
				},
				{
					"name": "2 Maccabees",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Maccabees/2 Maccabees 1",
							"uri": "/bible/2-maccabees/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Maccabees/2 Maccabees 2",
							"uri": "/bible/2-maccabees/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Maccabees/2 Maccabees 3",
							"uri": "/bible/2-maccabees/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Maccabees/2 Maccabees 4",
							"uri": "/bible/2-maccabees/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Maccabees/2 Maccabees 5",
							"uri": "/bible/2-maccabees/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Maccabees/2 Maccabees 6",
							"uri": "/bible/2-maccabees/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Maccabees/2 Maccabees 7",
							"uri": "/bible/2-maccabees/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Maccabees/2 Maccabees 8",
							"uri": "/bible/2-maccabees/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Maccabees/2 Maccabees 9",
							"uri": "/bible/2-maccabees/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Maccabees/2 Maccabees 10",
							"uri": "/bible/2-maccabees/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Maccabees/2 Maccabees 11",
							"uri": "/bible/2-maccabees/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Maccabees/2 Maccabees 12",
							"uri": "/bible/2-maccabees/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Maccabees/2 Maccabees 13",
							"uri": "/bible/2-maccabees/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/2 Maccabees/2 Maccabees 14",
							"uri": "/bible/2-maccabees/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/2 Maccabees/2 Maccabees 15",
							"uri": "/bible/2-maccabees/chapter-15"
						}
					],
					"uri": "/bible/2-maccabees"
				},
				{
					"name": "Prayer of Manasseh",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Prayer of Manasseh/Prayer of Manasseh 1",
							"uri": "/bible/prayer-of-manasseh/chapter-1"
						}
					],
					"uri": "/bible/prayer-of-manasseh"
				},
				{
					"name": "Matthew",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Matthew/Matthew 1",
							"uri": "/bible/matthew/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Matthew/Matthew 2",
							"uri": "/bible/matthew/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Matthew/Matthew 3",
							"uri": "/bible/matthew/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Matthew/Matthew 4",
							"uri": "/bible/matthew/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Matthew/Matthew 5",
							"uri": "/bible/matthew/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Matthew/Matthew 6",
							"uri": "/bible/matthew/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Matthew/Matthew 7",
							"uri": "/bible/matthew/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Matthew/Matthew 8",
							"uri": "/bible/matthew/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Matthew/Matthew 9",
							"uri": "/bible/matthew/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Matthew/Matthew 10",
							"uri": "/bible/matthew/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Matthew/Matthew 11",
							"uri": "/bible/matthew/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Matthew/Matthew 12",
							"uri": "/bible/matthew/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Matthew/Matthew 13",
							"uri": "/bible/matthew/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Matthew/Matthew 14",
							"uri": "/bible/matthew/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Matthew/Matthew 15",
							"uri": "/bible/matthew/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Matthew/Matthew 16",
							"uri": "/bible/matthew/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Matthew/Matthew 17",
							"uri": "/bible/matthew/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Matthew/Matthew 18",
							"uri": "/bible/matthew/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Matthew/Matthew 19",
							"uri": "/bible/matthew/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Matthew/Matthew 20",
							"uri": "/bible/matthew/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Matthew/Matthew 21",
							"uri": "/bible/matthew/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Matthew/Matthew 22",
							"uri": "/bible/matthew/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Matthew/Matthew 23",
							"uri": "/bible/matthew/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Matthew/Matthew 24",
							"uri": "/bible/matthew/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Matthew/Matthew 25",
							"uri": "/bible/matthew/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Matthew/Matthew 26",
							"uri": "/bible/matthew/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Matthew/Matthew 27",
							"uri": "/bible/matthew/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Matthew/Matthew 28",
							"uri": "/bible/matthew/chapter-28"
						}
					],
					"uri": "/bible/matthew"
				},
				{
					"name": "Mark",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Mark/Mark 1",
							"uri": "/bible/mark/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Mark/Mark 2",
							"uri": "/bible/mark/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Mark/Mark 3",
							"uri": "/bible/mark/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Mark/Mark 4",
							"uri": "/bible/mark/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Mark/Mark 5",
							"uri": "/bible/mark/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Mark/Mark 6",
							"uri": "/bible/mark/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Mark/Mark 7",
							"uri": "/bible/mark/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Mark/Mark 8",
							"uri": "/bible/mark/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Mark/Mark 9",
							"uri": "/bible/mark/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Mark/Mark 10",
							"uri": "/bible/mark/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Mark/Mark 11",
							"uri": "/bible/mark/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Mark/Mark 12",
							"uri": "/bible/mark/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Mark/Mark 13",
							"uri": "/bible/mark/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Mark/Mark 14",
							"uri": "/bible/mark/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Mark/Mark 15",
							"uri": "/bible/mark/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Mark/Mark 16",
							"uri": "/bible/mark/chapter-16"
						}
					],
					"uri": "/bible/mark"
				},
				{
					"name": "Luke",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Luke/Luke 1",
							"uri": "/bible/luke/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Luke/Luke 2",
							"uri": "/bible/luke/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Luke/Luke 3",
							"uri": "/bible/luke/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Luke/Luke 4",
							"uri": "/bible/luke/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Luke/Luke 5",
							"uri": "/bible/luke/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Luke/Luke 6",
							"uri": "/bible/luke/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Luke/Luke 7",
							"uri": "/bible/luke/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Luke/Luke 8",
							"uri": "/bible/luke/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Luke/Luke 9",
							"uri": "/bible/luke/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Luke/Luke 10",
							"uri": "/bible/luke/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Luke/Luke 11",
							"uri": "/bible/luke/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Luke/Luke 12",
							"uri": "/bible/luke/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Luke/Luke 13",
							"uri": "/bible/luke/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Luke/Luke 14",
							"uri": "/bible/luke/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Luke/Luke 15",
							"uri": "/bible/luke/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Luke/Luke 16",
							"uri": "/bible/luke/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Luke/Luke 17",
							"uri": "/bible/luke/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Luke/Luke 18",
							"uri": "/bible/luke/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Luke/Luke 19",
							"uri": "/bible/luke/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Luke/Luke 20",
							"uri": "/bible/luke/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Luke/Luke 21",
							"uri": "/bible/luke/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Luke/Luke 22",
							"uri": "/bible/luke/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Luke/Luke 23",
							"uri": "/bible/luke/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Luke/Luke 24",
							"uri": "/bible/luke/chapter-24"
						}
					],
					"uri": "/bible/luke"
				},
				{
					"name": "John",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/John/John 1",
							"uri": "/bible/john/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/John/John 2",
							"uri": "/bible/john/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/John/John 3",
							"uri": "/bible/john/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/John/John 4",
							"uri": "/bible/john/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/John/John 5",
							"uri": "/bible/john/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/John/John 6",
							"uri": "/bible/john/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/John/John 7",
							"uri": "/bible/john/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/John/John 8",
							"uri": "/bible/john/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/John/John 9",
							"uri": "/bible/john/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/John/John 10",
							"uri": "/bible/john/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/John/John 11",
							"uri": "/bible/john/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/John/John 12",
							"uri": "/bible/john/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/John/John 13",
							"uri": "/bible/john/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/John/John 14",
							"uri": "/bible/john/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/John/John 15",
							"uri": "/bible/john/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/John/John 16",
							"uri": "/bible/john/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/John/John 17",
							"uri": "/bible/john/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/John/John 18",
							"uri": "/bible/john/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/John/John 19",
							"uri": "/bible/john/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/John/John 20",
							"uri": "/bible/john/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/John/John 21",
							"uri": "/bible/john/chapter-21"
						}
					],
					"uri": "/bible/john"
				},
				{
					"name": "Acts",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Acts/Acts 1",
							"uri": "/bible/acts/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Acts/Acts 2",
							"uri": "/bible/acts/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Acts/Acts 3",
							"uri": "/bible/acts/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Acts/Acts 4",
							"uri": "/bible/acts/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Acts/Acts 5",
							"uri": "/bible/acts/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Acts/Acts 6",
							"uri": "/bible/acts/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Acts/Acts 7",
							"uri": "/bible/acts/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Acts/Acts 8",
							"uri": "/bible/acts/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Acts/Acts 9",
							"uri": "/bible/acts/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Acts/Acts 10",
							"uri": "/bible/acts/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Acts/Acts 11",
							"uri": "/bible/acts/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Acts/Acts 12",
							"uri": "/bible/acts/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Acts/Acts 13",
							"uri": "/bible/acts/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Acts/Acts 14",
							"uri": "/bible/acts/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Acts/Acts 15",
							"uri": "/bible/acts/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Acts/Acts 16",
							"uri": "/bible/acts/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Acts/Acts 17",
							"uri": "/bible/acts/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Acts/Acts 18",
							"uri": "/bible/acts/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Acts/Acts 19",
							"uri": "/bible/acts/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Acts/Acts 20",
							"uri": "/bible/acts/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Acts/Acts 21",
							"uri": "/bible/acts/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Acts/Acts 22",
							"uri": "/bible/acts/chapter-22"
						},
						{
							"name": "Chapter 23",
							"path": "readings/bible/Acts/Acts 23",
							"uri": "/bible/acts/chapter-23"
						},
						{
							"name": "Chapter 24",
							"path": "readings/bible/Acts/Acts 24",
							"uri": "/bible/acts/chapter-24"
						},
						{
							"name": "Chapter 25",
							"path": "readings/bible/Acts/Acts 25",
							"uri": "/bible/acts/chapter-25"
						},
						{
							"name": "Chapter 26",
							"path": "readings/bible/Acts/Acts 26",
							"uri": "/bible/acts/chapter-26"
						},
						{
							"name": "Chapter 27",
							"path": "readings/bible/Acts/Acts 27",
							"uri": "/bible/acts/chapter-27"
						},
						{
							"name": "Chapter 28",
							"path": "readings/bible/Acts/Acts 28",
							"uri": "/bible/acts/chapter-28"
						}
					],
					"uri": "/bible/acts"
				},
				{
					"name": "Romans",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Romans/Romans 1",
							"uri": "/bible/romans/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Romans/Romans 2",
							"uri": "/bible/romans/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Romans/Romans 3",
							"uri": "/bible/romans/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Romans/Romans 4",
							"uri": "/bible/romans/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Romans/Romans 5",
							"uri": "/bible/romans/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Romans/Romans 6",
							"uri": "/bible/romans/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Romans/Romans 7",
							"uri": "/bible/romans/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Romans/Romans 8",
							"uri": "/bible/romans/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Romans/Romans 9",
							"uri": "/bible/romans/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Romans/Romans 10",
							"uri": "/bible/romans/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Romans/Romans 11",
							"uri": "/bible/romans/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Romans/Romans 12",
							"uri": "/bible/romans/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Romans/Romans 13",
							"uri": "/bible/romans/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Romans/Romans 14",
							"uri": "/bible/romans/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Romans/Romans 15",
							"uri": "/bible/romans/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Romans/Romans 16",
							"uri": "/bible/romans/chapter-16"
						}
					],
					"uri": "/bible/romans"
				},
				{
					"name": "1 Corinthians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Corinthians/1 Corinthians 1",
							"uri": "/bible/1-corinthians/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Corinthians/1 Corinthians 2",
							"uri": "/bible/1-corinthians/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Corinthians/1 Corinthians 3",
							"uri": "/bible/1-corinthians/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Corinthians/1 Corinthians 4",
							"uri": "/bible/1-corinthians/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Corinthians/1 Corinthians 5",
							"uri": "/bible/1-corinthians/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Corinthians/1 Corinthians 6",
							"uri": "/bible/1-corinthians/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/1 Corinthians/1 Corinthians 7",
							"uri": "/bible/1-corinthians/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/1 Corinthians/1 Corinthians 8",
							"uri": "/bible/1-corinthians/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/1 Corinthians/1 Corinthians 9",
							"uri": "/bible/1-corinthians/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/1 Corinthians/1 Corinthians 10",
							"uri": "/bible/1-corinthians/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/1 Corinthians/1 Corinthians 11",
							"uri": "/bible/1-corinthians/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/1 Corinthians/1 Corinthians 12",
							"uri": "/bible/1-corinthians/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/1 Corinthians/1 Corinthians 13",
							"uri": "/bible/1-corinthians/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/1 Corinthians/1 Corinthians 14",
							"uri": "/bible/1-corinthians/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/1 Corinthians/1 Corinthians 15",
							"uri": "/bible/1-corinthians/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/1 Corinthians/1 Corinthians 16",
							"uri": "/bible/1-corinthians/chapter-16"
						}
					],
					"uri": "/bible/1-corinthians"
				},
				{
					"name": "2 Corinthians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Corinthians/2 Corinthians 1",
							"uri": "/bible/2-corinthians/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Corinthians/2 Corinthians 2",
							"uri": "/bible/2-corinthians/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Corinthians/2 Corinthians 3",
							"uri": "/bible/2-corinthians/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Corinthians/2 Corinthians 4",
							"uri": "/bible/2-corinthians/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/2 Corinthians/2 Corinthians 5",
							"uri": "/bible/2-corinthians/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/2 Corinthians/2 Corinthians 6",
							"uri": "/bible/2-corinthians/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/2 Corinthians/2 Corinthians 7",
							"uri": "/bible/2-corinthians/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/2 Corinthians/2 Corinthians 8",
							"uri": "/bible/2-corinthians/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/2 Corinthians/2 Corinthians 9",
							"uri": "/bible/2-corinthians/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/2 Corinthians/2 Corinthians 10",
							"uri": "/bible/2-corinthians/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/2 Corinthians/2 Corinthians 11",
							"uri": "/bible/2-corinthians/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/2 Corinthians/2 Corinthians 12",
							"uri": "/bible/2-corinthians/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/2 Corinthians/2 Corinthians 13",
							"uri": "/bible/2-corinthians/chapter-13"
						}
					],
					"uri": "/bible/2-corinthians"
				},
				{
					"name": "Galatians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Galatians/Galatians 1",
							"uri": "/bible/galatians/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Galatians/Galatians 2",
							"uri": "/bible/galatians/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Galatians/Galatians 3",
							"uri": "/bible/galatians/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Galatians/Galatians 4",
							"uri": "/bible/galatians/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Galatians/Galatians 5",
							"uri": "/bible/galatians/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Galatians/Galatians 6",
							"uri": "/bible/galatians/chapter-6"
						}
					],
					"uri": "/bible/galatians"
				},
				{
					"name": "Ephesians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Ephesians/Ephesians 1",
							"uri": "/bible/ephesians/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Ephesians/Ephesians 2",
							"uri": "/bible/ephesians/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Ephesians/Ephesians 3",
							"uri": "/bible/ephesians/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Ephesians/Ephesians 4",
							"uri": "/bible/ephesians/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Ephesians/Ephesians 5",
							"uri": "/bible/ephesians/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Ephesians/Ephesians 6",
							"uri": "/bible/ephesians/chapter-6"
						}
					],
					"uri": "/bible/ephesians"
				},
				{
					"name": "Philippians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Philippians/Philippians 1",
							"uri": "/bible/philippians/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Philippians/Philippians 2",
							"uri": "/bible/philippians/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Philippians/Philippians 3",
							"uri": "/bible/philippians/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Philippians/Philippians 4",
							"uri": "/bible/philippians/chapter-4"
						}
					],
					"uri": "/bible/philippians"
				},
				{
					"name": "Colossians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Colossians/Colossians 1",
							"uri": "/bible/colossians/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Colossians/Colossians 2",
							"uri": "/bible/colossians/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Colossians/Colossians 3",
							"uri": "/bible/colossians/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Colossians/Colossians 4",
							"uri": "/bible/colossians/chapter-4"
						}
					],
					"uri": "/bible/colossians"
				},
				{
					"name": "1 Thessalonians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 1",
							"uri": "/bible/1-thessalonians/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 2",
							"uri": "/bible/1-thessalonians/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 3",
							"uri": "/bible/1-thessalonians/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 4",
							"uri": "/bible/1-thessalonians/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Thessalonians/1 Thessalonians 5",
							"uri": "/bible/1-thessalonians/chapter-5"
						}
					],
					"uri": "/bible/1-thessalonians"
				},
				{
					"name": "2 Thessalonians",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Thessalonians/2 Thessalonians 1",
							"uri": "/bible/2-thessalonians/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Thessalonians/2 Thessalonians 2",
							"uri": "/bible/2-thessalonians/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Thessalonians/2 Thessalonians 3",
							"uri": "/bible/2-thessalonians/chapter-3"
						}
					],
					"uri": "/bible/2-thessalonians"
				},
				{
					"name": "1 Timothy",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Timothy/1 Timothy 1",
							"uri": "/bible/1-timothy/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Timothy/1 Timothy 2",
							"uri": "/bible/1-timothy/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Timothy/1 Timothy 3",
							"uri": "/bible/1-timothy/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Timothy/1 Timothy 4",
							"uri": "/bible/1-timothy/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Timothy/1 Timothy 5",
							"uri": "/bible/1-timothy/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/1 Timothy/1 Timothy 6",
							"uri": "/bible/1-timothy/chapter-6"
						}
					],
					"uri": "/bible/1-timothy"
				},
				{
					"name": "2 Timothy",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Timothy/2 Timothy 1",
							"uri": "/bible/2-timothy/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Timothy/2 Timothy 2",
							"uri": "/bible/2-timothy/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Timothy/2 Timothy 3",
							"uri": "/bible/2-timothy/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/2 Timothy/2 Timothy 4",
							"uri": "/bible/2-timothy/chapter-4"
						}
					],
					"uri": "/bible/2-timothy"
				},
				{
					"name": "Titus",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Titus/Titus 1",
							"uri": "/bible/titus/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Titus/Titus 2",
							"uri": "/bible/titus/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Titus/Titus 3",
							"uri": "/bible/titus/chapter-3"
						}
					],
					"uri": "/bible/titus"
				},
				{
					"name": "Philemon",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Philemon/Philemon 1",
							"uri": "/bible/philemon/chapter-1"
						}
					],
					"uri": "/bible/philemon"
				},
				{
					"name": "Hebrews",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Hebrews/Hebrews 1",
							"uri": "/bible/hebrews/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Hebrews/Hebrews 2",
							"uri": "/bible/hebrews/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Hebrews/Hebrews 3",
							"uri": "/bible/hebrews/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Hebrews/Hebrews 4",
							"uri": "/bible/hebrews/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Hebrews/Hebrews 5",
							"uri": "/bible/hebrews/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Hebrews/Hebrews 6",
							"uri": "/bible/hebrews/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Hebrews/Hebrews 7",
							"uri": "/bible/hebrews/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Hebrews/Hebrews 8",
							"uri": "/bible/hebrews/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Hebrews/Hebrews 9",
							"uri": "/bible/hebrews/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Hebrews/Hebrews 10",
							"uri": "/bible/hebrews/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Hebrews/Hebrews 11",
							"uri": "/bible/hebrews/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Hebrews/Hebrews 12",
							"uri": "/bible/hebrews/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Hebrews/Hebrews 13",
							"uri": "/bible/hebrews/chapter-13"
						}
					],
					"uri": "/bible/hebrews"
				},
				{
					"name": "James",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/James/James 1",
							"uri": "/bible/james/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/James/James 2",
							"uri": "/bible/james/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/James/James 3",
							"uri": "/bible/james/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/James/James 4",
							"uri": "/bible/james/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/James/James 5",
							"uri": "/bible/james/chapter-5"
						}
					],
					"uri": "/bible/james"
				},
				{
					"name": "1 Peter",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 Peter/1 Peter 1",
							"uri": "/bible/1-peter/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 Peter/1 Peter 2",
							"uri": "/bible/1-peter/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 Peter/1 Peter 3",
							"uri": "/bible/1-peter/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 Peter/1 Peter 4",
							"uri": "/bible/1-peter/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 Peter/1 Peter 5",
							"uri": "/bible/1-peter/chapter-5"
						}
					],
					"uri": "/bible/1-peter"
				},
				{
					"name": "2 Peter",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 Peter/2 Peter 1",
							"uri": "/bible/2-peter/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/2 Peter/2 Peter 2",
							"uri": "/bible/2-peter/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/2 Peter/2 Peter 3",
							"uri": "/bible/2-peter/chapter-3"
						}
					],
					"uri": "/bible/2-peter"
				},
				{
					"name": "1 John",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/1 John/1 John 1",
							"uri": "/bible/1-john/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/1 John/1 John 2",
							"uri": "/bible/1-john/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/1 John/1 John 3",
							"uri": "/bible/1-john/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/1 John/1 John 4",
							"uri": "/bible/1-john/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/1 John/1 John 5",
							"uri": "/bible/1-john/chapter-5"
						}
					],
					"uri": "/bible/1-john"
				},
				{
					"name": "2 John",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/2 John/2 John 1",
							"uri": "/bible/2-john/chapter-1"
						}
					],
					"uri": "/bible/2-john"
				},
				{
					"name": "3 John",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/3 John/3 John 1",
							"uri": "/bible/3-john/chapter-1"
						}
					],
					"uri": "/bible/3-john"
				},
				{
					"name": "Jude",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Jude/Jude 1",
							"uri": "/bible/jude/chapter-1"
						}
					],
					"uri": "/bible/jude"
				},
				{
					"name": "Revelation",
					"menu": [
						{
							"name": "Chapter 1",
							"path": "readings/bible/Revelation/Revelation 1",
							"uri": "/bible/revelation/chapter-1"
						},
						{
							"name": "Chapter 2",
							"path": "readings/bible/Revelation/Revelation 2",
							"uri": "/bible/revelation/chapter-2"
						},
						{
							"name": "Chapter 3",
							"path": "readings/bible/Revelation/Revelation 3",
							"uri": "/bible/revelation/chapter-3"
						},
						{
							"name": "Chapter 4",
							"path": "readings/bible/Revelation/Revelation 4",
							"uri": "/bible/revelation/chapter-4"
						},
						{
							"name": "Chapter 5",
							"path": "readings/bible/Revelation/Revelation 5",
							"uri": "/bible/revelation/chapter-5"
						},
						{
							"name": "Chapter 6",
							"path": "readings/bible/Revelation/Revelation 6",
							"uri": "/bible/revelation/chapter-6"
						},
						{
							"name": "Chapter 7",
							"path": "readings/bible/Revelation/Revelation 7",
							"uri": "/bible/revelation/chapter-7"
						},
						{
							"name": "Chapter 8",
							"path": "readings/bible/Revelation/Revelation 8",
							"uri": "/bible/revelation/chapter-8"
						},
						{
							"name": "Chapter 9",
							"path": "readings/bible/Revelation/Revelation 9",
							"uri": "/bible/revelation/chapter-9"
						},
						{
							"name": "Chapter 10",
							"path": "readings/bible/Revelation/Revelation 10",
							"uri": "/bible/revelation/chapter-10"
						},
						{
							"name": "Chapter 11",
							"path": "readings/bible/Revelation/Revelation 11",
							"uri": "/bible/revelation/chapter-11"
						},
						{
							"name": "Chapter 12",
							"path": "readings/bible/Revelation/Revelation 12",
							"uri": "/bible/revelation/chapter-12"
						},
						{
							"name": "Chapter 13",
							"path": "readings/bible/Revelation/Revelation 13",
							"uri": "/bible/revelation/chapter-13"
						},
						{
							"name": "Chapter 14",
							"path": "readings/bible/Revelation/Revelation 14",
							"uri": "/bible/revelation/chapter-14"
						},
						{
							"name": "Chapter 15",
							"path": "readings/bible/Revelation/Revelation 15",
							"uri": "/bible/revelation/chapter-15"
						},
						{
							"name": "Chapter 16",
							"path": "readings/bible/Revelation/Revelation 16",
							"uri": "/bible/revelation/chapter-16"
						},
						{
							"name": "Chapter 17",
							"path": "readings/bible/Revelation/Revelation 17",
							"uri": "/bible/revelation/chapter-17"
						},
						{
							"name": "Chapter 18",
							"path": "readings/bible/Revelation/Revelation 18",
							"uri": "/bible/revelation/chapter-18"
						},
						{
							"name": "Chapter 19",
							"path": "readings/bible/Revelation/Revelation 19",
							"uri": "/bible/revelation/chapter-19"
						},
						{
							"name": "Chapter 20",
							"path": "readings/bible/Revelation/Revelation 20",
							"uri": "/bible/revelation/chapter-20"
						},
						{
							"name": "Chapter 21",
							"path": "readings/bible/Revelation/Revelation 21",
							"uri": "/bible/revelation/chapter-21"
						},
						{
							"name": "Chapter 22",
							"path": "readings/bible/Revelation/Revelation 22",
							"uri": "/bible/revelation/chapter-22"
						}
					],
					"uri": "/bible/revelation"
				}
			],
			"uri": "/bible"
		},
		{
			"name": "Liturgies",
			"image": "assets/images/liturgies.jpg",
			"menu": [
				{
					"name": "St. Basil",
					"menu": [
						{
							"name": "Offering of the Lamb",
							"path": "liturgies/basil/Offering of the Lamb",
							"uri": "/liturgies/st.-basil/offering-of-the-lamb"
						},
						{
							"name": "Liturgy of the Word",
							"path": "liturgies/basil/Liturgy of the Word",
							"uri": "/liturgies/st.-basil/liturgy-of-the-word"
						},
						{
							"name": "Liturgy of the Faithful",
							"path": "liturgies/basil/Liturgy of the Faithful",
							"uri": "/liturgies/st.-basil/liturgy-of-the-faithful"
						},
						{
							"name": "Distribution",
							"path": "liturgies/basil/Distribution of the Holy Mysteries",
							"uri": "/liturgies/st.-basil/distribution"
						}
					],
					"uri": "/liturgies/st.-basil"
				},
				{
					"name": "St. Gregory",
					"menu": [
						{
							"name": "Offering of the Lamb",
							"path": "liturgies/gregory/Offering of the Lamb",
							"uri": "/liturgies/st.-gregory/offering-of-the-lamb"
						},
						{
							"name": "Liturgy of the Word",
							"path": "liturgies/gregory/Liturgy of the Word",
							"uri": "/liturgies/st.-gregory/liturgy-of-the-word"
						},
						{
							"name": "Liturgy of the Faithful",
							"path": "liturgies/gregory/Liturgy of the Faithful",
							"uri": "/liturgies/st.-gregory/liturgy-of-the-faithful"
						},
						{
							"name": "Distribution",
							"path": "liturgies/gregory/Distribution of the Holy Mysteries",
							"uri": "/liturgies/st.-gregory/distribution"
						}
					],
					"uri": "/liturgies/st.-gregory"
				},
				{
					"name": "St. Cyril",
					"menu": [
						{
							"name": "Offering of the Lamb",
							"path": "liturgies/cyril/Offering of the Lamb",
							"uri": "/liturgies/st.-cyril/offering-of-the-lamb"
						},
						{
							"name": "Liturgy of the Word",
							"path": "liturgies/cyril/Liturgy of the Word",
							"uri": "/liturgies/st.-cyril/liturgy-of-the-word"
						},
						{
							"name": "Liturgy of the Faithful",
							"path": "liturgies/cyril/Liturgy of the Faithful",
							"uri": "/liturgies/st.-cyril/liturgy-of-the-faithful"
						},
						{
							"name": "Distribution",
							"path": "liturgies/cyril/Distribution of the Holy Mysteries",
							"uri": "/liturgies/st.-cyril/distribution"
						}
					],
					"uri": "/liturgies/st.-cyril"
				},
				{
					"name": "Matins",
					"path": "raisingOfIncense/Matins",
					"uri": "/liturgies/matins"
				},
				{
					"name": "Vespers",
					"path": "raisingOfIncense/Vespers",
					"uri": "/liturgies/vespers"
				}
			],
			"uri": "/liturgies"
		},
		{
			"name": "Readings",
			"image": "assets/images/menu_ic_books.jpg",
			"menu": [
				{
					"name": "Vespers",
					"path": "readings/Vespers Psalm and Gospel",
					"uri": "/readings/vespers"
				},
				{
					"name": "Matins",
					"menu": [
						{
							"name": "Prophecies",
							"path": "readings/Prophecies",
							"uri": "/readings/matins/prophecies"
						},
						{
							"name": "Psalm and Gospel",
							"path": "readings/Matins Psalm and Gospel",
							"uri": "/readings/matins/psalm-and-gospel"
						}
					],
					"uri": "/readings/matins"
				},
				{
					"name": "Liturgy",
					"menu": [
						{
							"name": "Pauline Epistle",
							"path": "readings/Pauline Epistle",
							"uri": "/readings/liturgy/pauline-epistle"
						},
						{
							"name": "Catholic Epistle",
							"path": "readings/Catholic Epistle",
							"uri": "/readings/liturgy/catholic-epistle"
						},
						{
							"name": "Praxis",
							"path": "readings/Praxis",
							"uri": "/readings/liturgy/praxis"
						},
						{
							"name": "Synaxarion",
							"path": "readings/Synaxarion",
							"uri": "/readings/liturgy/synaxarion"
						},
						{
							"name": "Psalm and Gospel",
							"path": "readings/Liturgy Psalm and Gospel",
							"uri": "/readings/liturgy/psalm-and-gospel"
						}
					],
					"uri": "/readings/liturgy"
				},
				{
					"name": "Antiphonary",
					"path": "antiphonary/Antiphonary",
					"uri": "/readings/antiphonary"
				}
			],
			"uri": "/readings"
		},
		{
			"name": "Melodies",
			"image": "assets/images/melodies.jpg",
			"path": "melodies/Melodies",
			"uri": "/melodies"
		},
		{
			"name": "Index",
			"image": "assets/images/index.jpg",
			"menu": [
				{
					"name": "Feasts",
					"menu": [
						{
							"name": "Coptic New Year",
							"path": "liturgies/index/Coptic New Year",
							"uri": "/index/feasts/coptic-new-year"
						},
						{
							"name": "Feast of the Cross",
							"path": "liturgies/index/Feast of the Cross",
							"uri": "/index/feasts/feast-of-the-cross"
						},
						{
							"name": "Apostles' Feast",
							"path": "liturgies/index/Apostles' Feast",
							"uri": "/index/feasts/apostles-feast"
						},
						{
							"name": "Joyful 29th of the Month",
							"path": "liturgies/index/Joyful 29th of the Month",
							"uri": "/index/feasts/joyful-29th-of-the-month"
						},
						{
							"name": "Major Feasts of the Lord",
							"menu": [
								{
									"name": "Nativity",
									"path": "liturgies/index/Nativity",
									"uri": "/index/feasts/major-feasts-of-the-lord/nativity"
								},
								{
									"name": "Theophany",
									"path": "liturgies/index/Theophany",
									"uri": "/index/feasts/major-feasts-of-the-lord/theophany"
								},
								{
									"name": "Annunciation",
									"path": "liturgies/index/Annunciation",
									"uri": "/index/feasts/major-feasts-of-the-lord/annunciation"
								},
								{
									"name": "Hosanna Sunday",
									"path": "liturgies/index/Hosanna Sunday",
									"uri": "/index/feasts/major-feasts-of-the-lord/hosanna-sunday"
								},
								{
									"name": "Holy 50 Days",
									"menu": [
										{
											"name": "Days 1-39",
											"path": "liturgies/index/pentecost/Resurrection Days 1-39",
											"uri": "/index/feasts/major-feasts-of-the-lord/holy-50-days/days-1-39"
										},
										{
											"name": "Days 40-49",
											"path": "liturgies/index/pentecost/Resurrection Days 40-49",
											"uri": "/index/feasts/major-feasts-of-the-lord/holy-50-days/days-40-49"
										},
										{
											"name": "Thomas Sunday",
											"path": "liturgies/index/pentecost/Thomas Sunday",
											"uri": "/index/feasts/major-feasts-of-the-lord/holy-50-days/thomas-sunday"
										},
										{
											"name": "Pentecost",
											"path": "liturgies/index/pentecost/Pentecost",
											"uri": "/index/feasts/major-feasts-of-the-lord/holy-50-days/pentecost"
										}
									],
									"uri": "/index/feasts/major-feasts-of-the-lord/holy-50-days"
								}
							],
							"uri": "/index/feasts/major-feasts-of-the-lord"
						},
						{
							"name": "Minor Feasts of the Lord",
							"menu": [
								{
									"name": "Circumcision",
									"path": "liturgies/index/Circumcision",
									"uri": "/index/feasts/minor-feasts-of-the-lord/circumcision"
								},
								{
									"name": "Wedding at Cana of Galilee",
									"path": "liturgies/index/Wedding at Cana of Galilee",
									"uri": "/index/feasts/minor-feasts-of-the-lord/wedding-at-cana-of-galilee"
								},
								{
									"name": "Presentation of the Lord Christ in the Temple",
									"path": "liturgies/index/Presentation of the Lord Christ in the Temple",
									"uri": "/index/feasts/minor-feasts-of-the-lord/presentation-of-the-lord-christ-in-the-temple"
								},
								{
									"name": "Covenant Thursday",
									"path": "liturgies/index/Covenant Thursday",
									"uri": "/index/feasts/minor-feasts-of-the-lord/covenant-thursday"
								},
								{
									"name": "Entrance of the Lord Christ into the Land of Egypt",
									"path": "liturgies/index/Entrance of the Lord Christ into the Land of Egypt",
									"uri": "/index/feasts/minor-feasts-of-the-lord/entrance-of-the-lord-christ-into-the-land-of-egypt"
								},
								{
									"name": "Transfiguration",
									"path": "liturgies/index/Transfiguration",
									"uri": "/index/feasts/minor-feasts-of-the-lord/transfiguration"
								}
							],
							"uri": "/index/feasts/minor-feasts-of-the-lord"
						}
					],
					"uri": "/index/feasts"
				},
				{
					"name": "Fasts",
					"menu": [
						{
							"name": "Nativity Fast",
							"path": "liturgies/index/Nativity Fast",
							"uri": "/index/fasts/nativity-fast"
						},
						{
							"name": "Month of Koiahk",
							"menu": [
								{
									"name": "Weekdays",
									"path": "liturgies/index/koiahk/Koiahk Weekdays",
									"uri": "/index/fasts/month-of-koiahk/weekdays"
								},
								{
									"name": "Weekends",
									"path": "liturgies/index/koiahk/Koiahk Weekends",
									"uri": "/index/fasts/month-of-koiahk/weekends"
								}
							],
							"uri": "/index/fasts/month-of-koiahk"
						},
						{
							"name": "Nativity Paramoun",
							"path": "liturgies/index/Nativity Paramoun",
							"uri": "/index/fasts/nativity-paramoun"
						},
						{
							"name": "Theophany Paramoun",
							"path": "liturgies/index/Theophany Paramoun",
							"uri": "/index/fasts/theophany-paramoun"
						},
						{
							"name": "Jonah's Fast",
							"path": "liturgies/index/Jonah's Fast",
							"uri": "/index/fasts/jonahs-fast"
						},
						{
							"name": "Jonah's Passover",
							"path": "liturgies/index/Jonah's Passover",
							"uri": "/index/fasts/jonahs-passover"
						},
						{
							"name": "Great Fast",
							"menu": [
								{
									"name": "Preparation Sunday",
									"path": "liturgies/index/greatfast/Preparation Sunday of the Great Fast",
									"uri": "/index/fasts/great-fast/preparation-sunday"
								},
								{
									"name": "Last Friday",
									"path": "liturgies/index/greatfast/Last Friday of the Great Fast",
									"uri": "/index/fasts/great-fast/last-friday"
								},
								{
									"name": "Weekdays",
									"path": "liturgies/index/greatfast/Great Fast Weekdays",
									"uri": "/index/fasts/great-fast/weekdays"
								},
								{
									"name": "Weekends",
									"path": "liturgies/index/greatfast/Great Fast Weekends",
									"uri": "/index/fasts/great-fast/weekends"
								}
							],
							"uri": "/index/fasts/great-fast"
						},
						{
							"name": "Lazarus Saturday",
							"path": "liturgies/index/Lazarus Saturday",
							"uri": "/index/fasts/lazarus-saturday"
						},
						{
							"name": "Apostles' Fast",
							"path": "liturgies/index/Apostles' Fast",
							"uri": "/index/fasts/apostles-fast"
						}
					],
					"uri": "/index/fasts"
				},
				{
					"name": "Saints",
					"menu": [
						{
							"name": "St. Mary the Mother of God",
							"path": "liturgies/index/saints/St. Mary the Mother of God",
							"uri": "/index/saints/st.-mary-the-mother-of-god"
						},
						{
							"name": "Angels",
							"menu": [
								{
									"name": "Archangel Michael",
									"path": "liturgies/index/saints/Archangel Michael",
									"uri": "/index/saints/angels/archangel-michael"
								},
								{
									"name": "Archangel Gabriel",
									"path": "liturgies/index/saints/Archangel Gabriel",
									"uri": "/index/saints/angels/archangel-gabriel"
								},
								{
									"name": "Archangel Raphael",
									"path": "liturgies/index/saints/Archangel Raphael",
									"uri": "/index/saints/angels/archangel-raphael"
								},
								{
									"name": "Archangel Suriel",
									"path": "liturgies/index/saints/Archangel Suriel",
									"uri": "/index/saints/angels/archangel-suriel"
								},
								{
									"name": "Four Incorporeal Creatures",
									"path": "liturgies/index/saints/Four Incorporeal Creatures",
									"uri": "/index/saints/angels/four-incorporeal-creatures"
								},
								{
									"name": "Twenty-Four Priests",
									"path": "liturgies/index/saints/Twenty-Four Priests",
									"uri": "/index/saints/angels/twenty-four-priests"
								}
							],
							"uri": "/index/saints/angels"
						},
						{
							"name": "Apostles",
							"menu": [
								{
									"name": "St. Andrew the Apostle",
									"path": "liturgies/index/saints/St. Andrew the Apostle",
									"uri": "/index/saints/apostles/st.-andrew-the-apostle"
								},
								{
									"name": "St. John the Evangelist",
									"path": "liturgies/index/saints/St. John the Evangelist",
									"uri": "/index/saints/apostles/st.-john-the-evangelist"
								},
								{
									"name": "St. Peter and St. Paul",
									"path": "liturgies/index/saints/St. Peter and St. Paul",
									"uri": "/index/saints/apostles/st.-peter-and-st.-paul"
								},
								{
									"name": "St. Paul the Apostle",
									"path": "liturgies/index/saints/St. Paul the Apostle",
									"uri": "/index/saints/apostles/st.-paul-the-apostle"
								},
								{
									"name": "St. Mark the Apostle",
									"path": "liturgies/index/saints/St. Mark the Apostle",
									"uri": "/index/saints/apostles/st.-mark-the-apostle"
								},
								{
									"name": "St. Luke the Evangelist",
									"path": "liturgies/index/saints/St. Luke the Evangelist",
									"uri": "/index/saints/apostles/st.-luke-the-evangelist"
								}
							],
							"uri": "/index/saints/apostles"
						},
						{
							"name": "Male Martyrs",
							"menu": [
								{
									"name": "St. John the Baptist",
									"path": "liturgies/index/saints/St. John the Baptist",
									"uri": "/index/saints/male-martyrs/st.-john-the-baptist"
								},
								{
									"name": "Children of Bethlehem",
									"path": "liturgies/index/saints/Children of Bethlehem",
									"uri": "/index/saints/male-martyrs/children-of-bethlehem"
								},
								{
									"name": "St. Stephen the Archdeacon and Protomartyr",
									"path": "liturgies/index/saints/St. Stephen the Archdeacon and Protomartyr",
									"uri": "/index/saints/male-martyrs/st.-stephen-the-archdeacon-and-protomartyr"
								},
								{
									"name": "St. George Prince of Martyrs",
									"path": "liturgies/index/saints/St. George Prince of Martyrs",
									"uri": "/index/saints/male-martyrs/st.-george-prince-of-martyrs"
								},
								{
									"name": "Prince Theodore the Son of John of Shotep",
									"path": "liturgies/index/saints/Prince Theodore the Son of John of Shotep",
									"uri": "/index/saints/male-martyrs/prince-theodore-the-son-of-john-of-shotep"
								},
								{
									"name": "Prince Theodore Anatolius",
									"path": "liturgies/index/saints/Prince Theodore Anatolius",
									"uri": "/index/saints/male-martyrs/prince-theodore-anatolius"
								},
								{
									"name": "St. Philopater Mercurius",
									"path": "liturgies/index/saints/St. Philopater Mercurius",
									"uri": "/index/saints/male-martyrs/st.-philopater-mercurius"
								},
								{
									"name": "St. Mena the Wonderworker",
									"path": "liturgies/index/saints/St. Mena the Wonderworker",
									"uri": "/index/saints/male-martyrs/st.-mena-the-wonderworker"
								},
								{
									"name": "St. Apanoub of Nehis",
									"path": "liturgies/index/saints/St. Apanoub of Nehis",
									"uri": "/index/saints/male-martyrs/st.-apanoub-of-nehis"
								},
								{
									"name": "St. Victor Son of Romanus",
									"path": "liturgies/index/saints/St. Victor Son of Romanus",
									"uri": "/index/saints/male-martyrs/st.-victor-son-of-romanus"
								},
								{
									"name": "St. Apatir and His Sister St. Irini",
									"path": "liturgies/index/saints/St. Apatir and His Sister St. Irini",
									"uri": "/index/saints/male-martyrs/st.-apatir-and-his-sister-st.-irini"
								},
								{
									"name": "St. Claudius Son of Ptolemy",
									"path": "liturgies/index/saints/St. Claudius Son of Ptolemy",
									"uri": "/index/saints/male-martyrs/st.-claudius-son-of-ptolemy"
								},
								{
									"name": "St. Apoli, Son of Justus",
									"path": "liturgies/index/saints/St. Apoli, Son of Justus",
									"uri": "/index/saints/male-martyrs/st.-apoli,-son-of-justus"
								},
								{
									"name": "St. Eskhyron of Callin",
									"path": "liturgies/index/saints/St. Eskhyron of Callin",
									"uri": "/index/saints/male-martyrs/st.-eskhyron-of-callin"
								},
								{
									"name": "St. John of Heraclia",
									"path": "liturgies/index/saints/St. John of Heraclia",
									"uri": "/index/saints/male-martyrs/st.-john-of-heraclia"
								},
								{
									"name": "St. Abe-Fam the Soldier",
									"path": "liturgies/index/saints/St. Abe-Fam the Soldier",
									"uri": "/index/saints/male-martyrs/st.-abe-fam-the-soldier"
								},
								{
									"name": "St. Sergius and St. Bacchus",
									"path": "liturgies/index/saints/St. Sergius and St. Bacchus",
									"uri": "/index/saints/male-martyrs/st.-sergius-and-st.-bacchus"
								},
								{
									"name": "St. Cosmas and St. Damian, their Brothers and Mother",
									"path": "liturgies/index/saints/St. Cosmas and St. Damian, their Brothers and Mother",
									"uri": "/index/saints/male-martyrs/st.-cosmas-and-st.-damian,-their-brothers-and-mother"
								},
								{
									"name": "St. Apakir and St. John",
									"path": "liturgies/index/saints/St. Apakir and St. John",
									"uri": "/index/saints/male-martyrs/st.-apakir-and-st.-john"
								},
								{
									"name": "Sts. Apakir, John, Ptolemy, and Philip",
									"path": "liturgies/index/saints/Sts. Apakir, John, Ptolemy, and Philip",
									"uri": "/index/saints/male-martyrs/sts.-apakir,-john,-ptolemy,-and-philip"
								},
								{
									"name": "St. Sarapamon Bishop of Nikios",
									"path": "liturgies/index/saints/St. Sarapamon Bishop of Nikios",
									"uri": "/index/saints/male-martyrs/st.-sarapamon-bishop-of-nikios"
								},
								{
									"name": "St. Pisura the Bishop",
									"path": "liturgies/index/saints/St. Pisura the Bishop",
									"uri": "/index/saints/male-martyrs/st.-pisura-the-bishop"
								},
								{
									"name": "St. Castor of Bardanuha",
									"path": "liturgies/index/saints/St. Castor of Bardanuha",
									"uri": "/index/saints/male-martyrs/st.-castor-of-bardanuha"
								},
								{
									"name": "St. Bisada the Bishop",
									"path": "liturgies/index/saints/St. Bisada the Bishop",
									"uri": "/index/saints/male-martyrs/st.-bisada-the-bishop"
								},
								{
									"name": "St. Dioscorus and St. Esklabius",
									"path": "liturgies/index/saints/St. Dioscorus and St. Esklabius",
									"uri": "/index/saints/male-martyrs/st.-dioscorus-and-st.-esklabius"
								},
								{
									"name": "St. Maurice",
									"path": "liturgies/index/saints/St. Maurice",
									"uri": "/index/saints/male-martyrs/st.-maurice"
								},
								{
									"name": "St. Philotheus",
									"path": "liturgies/index/saints/St. Philotheus",
									"uri": "/index/saints/male-martyrs/st.-philotheus"
								},
								{
									"name": "St. Isi and St. Thecla His Sister",
									"path": "liturgies/index/saints/St. Isi and St. Thecla His Sister",
									"uri": "/index/saints/male-martyrs/st.-isi-and-st.-thecla-his-sister"
								},
								{
									"name": "St. George Muzahim",
									"path": "liturgies/index/saints/St. George Muzahim",
									"uri": "/index/saints/male-martyrs/st.-george-muzahim"
								},
								{
									"name": "St. Julius of Ekbehs",
									"path": "liturgies/index/saints/St. Julius of Ekbehs",
									"uri": "/index/saints/male-martyrs/st.-julius-of-ekbehs"
								},
								{
									"name": "St. Peter the Seal of the Martyrs",
									"path": "liturgies/index/saints/St. Peter the Seal of the Martyrs",
									"uri": "/index/saints/male-martyrs/st.-peter-the-seal-of-the-martyrs"
								},
								{
									"name": "St. Cyprian and St. Justina",
									"path": "liturgies/index/saints/St. Cyprian and St. Justina",
									"uri": "/index/saints/male-martyrs/st.-cyprian-and-st.-justina"
								},
								{
									"name": "Forty-Nine Martyrs and Elders of Scetis",
									"path": "liturgies/index/saints/Forty-Nine Martyrs and Elders of Scetis",
									"uri": "/index/saints/male-martyrs/forty-nine-martyrs-and-elders-of-scetis"
								},
								{
									"name": "Martyrs of Akmim",
									"path": "liturgies/index/saints/Martyrs of Akmim",
									"uri": "/index/saints/male-martyrs/martyrs-of-akmim"
								},
								{
									"name": "Martyrs of Fayoum",
									"path": "liturgies/index/saints/Martyrs of Fayoum",
									"uri": "/index/saints/male-martyrs/martyrs-of-fayoum"
								}
							],
							"uri": "/index/saints/male-martyrs"
						},
						{
							"name": "Female Martyrs",
							"menu": [
								{
									"name": "St. Demiana",
									"path": "liturgies/index/saints/St. Demiana",
									"uri": "/index/saints/female-martyrs/st.-demiana"
								},
								{
									"name": "St. Dolagy",
									"path": "liturgies/index/saints/St. Dolagy",
									"uri": "/index/saints/female-martyrs/st.-dolagy"
								},
								{
									"name": "St. Barbara",
									"path": "liturgies/index/saints/St. Barbara",
									"uri": "/index/saints/female-martyrs/st.-barbara"
								},
								{
									"name": "St. Juliana",
									"path": "liturgies/index/saints/St. Juliana",
									"uri": "/index/saints/female-martyrs/st.-juliana"
								},
								{
									"name": "St. Marina the Martyr",
									"path": "liturgies/index/saints/St. Marina the Martyr",
									"uri": "/index/saints/female-martyrs/st.-marina-the-martyr"
								},
								{
									"name": "St. Rebecca and Her Five Children",
									"path": "liturgies/index/saints/St. Rebecca and Her Five Children",
									"uri": "/index/saints/female-martyrs/st.-rebecca-and-her-five-children"
								},
								{
									"name": "St. Catherine of Alexandria",
									"path": "liturgies/index/saints/St. Catherine of Alexandria",
									"uri": "/index/saints/female-martyrs/st.-catherine-of-alexandria"
								}
							],
							"uri": "/index/saints/female-martyrs"
						},
						{
							"name": "Male Saints",
							"menu": [
								{
									"name": "St. Joseph the Carpenter",
									"path": "liturgies/index/saints/St. Joseph the Carpenter",
									"uri": "/index/saints/male-saints/st.-joseph-the-carpenter"
								},
								{
									"name": "St. Anthony the Great",
									"path": "liturgies/index/saints/St. Anthony the Great",
									"uri": "/index/saints/male-saints/st.-anthony-the-great"
								},
								{
									"name": "St. Paul the Hermit",
									"path": "liturgies/index/saints/St. Paul the Hermit",
									"uri": "/index/saints/male-saints/st.-paul-the-hermit"
								},
								{
									"name": "St. Thomas the Hermit",
									"path": "liturgies/index/saints/St. Thomas the Hermit",
									"uri": "/index/saints/male-saints/st.-thomas-the-hermit"
								},
								{
									"name": "St. Macarius the Great",
									"path": "liturgies/index/saints/St. Macarius the Great",
									"uri": "/index/saints/male-saints/st.-macarius-the-great"
								},
								{
									"name": "St. Macarius of Alexandria",
									"path": "liturgies/index/saints/St. Macarius of Alexandria",
									"uri": "/index/saints/male-saints/st.-macarius-of-alexandria"
								},
								{
									"name": "St. Macarius Bishop of Edkow",
									"path": "liturgies/index/saints/St. Macarius Bishop of Edkow",
									"uri": "/index/saints/male-saints/st.-macarius-bishop-of-edkow"
								},
								{
									"name": "St. John the Short",
									"path": "liturgies/index/saints/St. John the Short",
									"uri": "/index/saints/male-saints/st.-john-the-short"
								},
								{
									"name": "St. Pishoy and St. Paul of Tammah",
									"path": "liturgies/index/saints/St. Pishoy and St. Paul of Tammah",
									"uri": "/index/saints/male-saints/st.-pishoy-and-st.-paul-of-tammah"
								},
								{
									"name": "St. Arsenius the Teacher of the Kings",
									"path": "liturgies/index/saints/St. Arsenius the Teacher of the Kings",
									"uri": "/index/saints/male-saints/st.-arsenius-the-teacher-of-the-kings"
								},
								{
									"name": "St. Maximus and St. Dometius",
									"path": "liturgies/index/saints/St. Maximus and St. Dometius",
									"uri": "/index/saints/male-saints/st.-maximus-and-st.-dometius"
								},
								{
									"name": "St. Moses the Strong",
									"path": "liturgies/index/saints/St. Moses the Strong",
									"uri": "/index/saints/male-saints/st.-moses-the-strong"
								},
								{
									"name": "St. John Kame",
									"path": "liturgies/index/saints/St. John Kame",
									"uri": "/index/saints/male-saints/st.-john-kame"
								},
								{
									"name": "St. Pachom and St. Theodore",
									"path": "liturgies/index/saints/St. Pachom and St. Theodore",
									"uri": "/index/saints/male-saints/st.-pachom-and-st.-theodore"
								},
								{
									"name": "St. Misael the Anchorite",
									"path": "liturgies/index/saints/St. Misael the Anchorite",
									"uri": "/index/saints/male-saints/st.-misael-the-anchorite"
								},
								{
									"name": "St. Shenute the Archimandrite",
									"path": "liturgies/index/saints/St. Shenute the Archimandrite",
									"uri": "/index/saints/male-saints/st.-shenute-the-archimandrite"
								},
								{
									"name": "St. Besa",
									"path": "liturgies/index/saints/St. Besa",
									"uri": "/index/saints/male-saints/st.-besa"
								},
								{
									"name": "St. Samuel the Confessor",
									"path": "liturgies/index/saints/St. Samuel the Confessor",
									"uri": "/index/saints/male-saints/st.-samuel-the-confessor"
								},
								{
									"name": "St. Nopher the Anchorite",
									"path": "liturgies/index/saints/St. Nopher the Anchorite",
									"uri": "/index/saints/male-saints/st.-nopher-the-anchorite"
								},
								{
									"name": "King David the Prophet",
									"path": "liturgies/index/saints/King David the Prophet",
									"uri": "/index/saints/male-saints/king-david-the-prophet"
								},
								{
									"name": "St. Karas the Anchorite",
									"path": "liturgies/index/saints/St. Karas the Anchorite",
									"uri": "/index/saints/male-saints/st.-karas-the-anchorite"
								},
								{
									"name": "St. Apollo and St. Apip",
									"path": "liturgies/index/saints/St. Apollo and St. Apip",
									"uri": "/index/saints/male-saints/st.-apollo-and-st.-apip"
								},
								{
									"name": "St. Parsouma the Naked",
									"path": "liturgies/index/saints/St. Parsouma the Naked",
									"uri": "/index/saints/male-saints/st.-parsouma-the-naked"
								},
								{
									"name": "St. Roweis (Teji)",
									"path": "liturgies/index/saints/St. Roweis (Teji)",
									"uri": "/index/saints/male-saints/st.-roweis-(teji)"
								},
								{
									"name": "St. Mark Abba Antony",
									"path": "liturgies/index/saints/St. Mark Abba Antony",
									"uri": "/index/saints/male-saints/st.-mark-abba-antony"
								},
								{
									"name": "St. Bashouna the Monk and Martyr",
									"path": "liturgies/index/saints/St. Bashouna the Monk and Martyr",
									"uri": "/index/saints/male-saints/st.-bashouna-the-monk-and-martyr"
								},
								{
									"name": "St. Athanasius the Apostolic",
									"path": "liturgies/index/saints/St. Athanasius the Apostolic",
									"uri": "/index/saints/male-saints/st.-athanasius-the-apostolic"
								},
								{
									"name": "St. Gregory the Theologian",
									"path": "liturgies/index/saints/St. Gregory the Theologian",
									"uri": "/index/saints/male-saints/st.-gregory-the-theologian"
								},
								{
									"name": "St. Severus Patriarch of Antioch",
									"path": "liturgies/index/saints/St. Severus Patriarch of Antioch",
									"uri": "/index/saints/male-saints/st.-severus-patriarch-of-antioch"
								},
								{
									"name": "St. Cyril of Alexandria",
									"path": "liturgies/index/saints/St. Cyril of Alexandria",
									"uri": "/index/saints/male-saints/st.-cyril-of-alexandria"
								},
								{
									"name": "St. Takla Haymanout",
									"path": "liturgies/index/saints/St. Takla Haymanout",
									"uri": "/index/saints/male-saints/st.-takla-haymanout"
								},
								{
									"name": "St. Pistavros",
									"path": "liturgies/index/saints/St. Pistavros",
									"uri": "/index/saints/male-saints/st.-pistavros"
								},
								{
									"name": "St. Simon the Tanner",
									"path": "liturgies/index/saints/St. Simon the Tanner",
									"uri": "/index/saints/male-saints/st.-simon-the-tanner"
								},
								{
									"name": "King Constantine and Queen Helen",
									"path": "liturgies/index/saints/King Constantine and Queen Helen",
									"uri": "/index/saints/male-saints/king-constantine-and-queen-helen"
								},
								{
									"name": "Patriarchs Abraham, Isaac, and Jacob",
									"path": "liturgies/index/saints/Patriarchs Abraham, Isaac, and Jacob",
									"uri": "/index/saints/male-saints/patriarchs-abraham,-isaac,-and-jacob"
								},
								{
									"name": "The Three Holy Youth",
									"path": "liturgies/index/saints/The Three Holy Youth",
									"uri": "/index/saints/male-saints/the-three-holy-youth"
								}
							],
							"uri": "/index/saints/male-saints"
						},
						{
							"name": "Female Saints",
							"menu": [
								{
									"name": "St. Mary Magdalene",
									"path": "liturgies/index/saints/St. Mary Magdalene",
									"uri": "/index/saints/female-saints/st.-mary-magdalene"
								},
								{
									"name": "St. Verena",
									"path": "liturgies/index/saints/St. Verena",
									"uri": "/index/saints/female-saints/st.-verena"
								},
								{
									"name": "St. Monica and St. Augustine",
									"path": "liturgies/index/saints/St. Monica and St. Augustine",
									"uri": "/index/saints/female-saints/st.-monica-and-st.-augustine"
								},
								{
									"name": "St. Mary of Egypt",
									"path": "liturgies/index/saints/St. Mary of Egypt",
									"uri": "/index/saints/female-saints/st.-mary-of-egypt"
								},
								{
									"name": "St. Veronica",
									"path": "liturgies/index/saints/St. Veronica",
									"uri": "/index/saints/female-saints/st.-veronica"
								}
							],
							"uri": "/index/saints/female-saints"
						},
						{
							"name": "Clergy",
							"menu": [
								{
									"name": "Anba Abraam Bishop of Fayoum",
									"path": "liturgies/index/saints/Anba Abraam Bishop of Fayoum",
									"uri": "/index/saints/clergy/anba-abraam-bishop-of-fayoum"
								},
								{
									"name": "Fr. Abdelmessih El-Manahri",
									"path": "liturgies/index/saints/Fr. Abdelmessih El-Manahri",
									"uri": "/index/saints/clergy/fr.-abdelmessih-el-manahri"
								},
								{
									"name": "His Holiness Pope Kyrillos VI",
									"path": "liturgies/index/saints/His Holiness Pope Kyrillos VI",
									"uri": "/index/saints/clergy/his-holiness-pope-kyrillos-vi"
								},
								{
									"name": "St. Habib Girgis",
									"path": "liturgies/index/saints/St. Habib Girgis",
									"uri": "/index/saints/clergy/st.-habib-girgis"
								},
								{
									"name": "Patriarch",
									"path": "liturgies/index/saints/Patriarch",
									"uri": "/index/saints/clergy/patriarch"
								}
							],
							"uri": "/index/saints/clergy"
						}
					],
					"uri": "/index/saints"
				},
				{
					"name": "Fractions",
					"path": "liturgies/index/Fractions Full Index",
					"uri": "/index/fractions"
				},
				{
					"name": "Doxologies",
					"path": "include/doxologies/Doxologies Full Index",
					"uri": "/index/doxologies"
				},
				{
					"name": "Papal",
					"menu": [
						{
							"name": "Papal Hymns",
							"path": "papal/Papal Hymns",
							"uri": "/index/papal/papal-hymns"
						},
						{
							"name": "Departed Patriarchs",
							"path": "papal/Departed Patriarchs",
							"uri": "/index/papal/departed-patriarchs"
						}
					],
					"uri": "/index/papal"
				}
			],
			"uri": "/index"
		},
		{
			"name": "Clergy",
			"image": "assets/images/clergy.jpg",
			"menu": [
				{
					"name": "Psalms and Absolution",
					"path": "clergy/Psalms and Absolution",
					"uri": "/clergy/psalms-and-absolution"
				},
				{
					"name": "Litanies",
					"path": "clergy/Litanies",
					"uri": "/clergy/litanies"
				},
				{
					"name": "Healing to the Sick",
					"path": "clergy/Healing to the Sick",
					"uri": "/clergy/healing-to-the-sick"
				},
				{
					"name": "Three Absolutions",
					"path": "clergy/Three Absolutions and Short Blessing",
					"uri": "/clergy/three-absolutions"
				},
				{
					"name": "Procession of the Lamb",
					"path": "clergy/Procession of the Lamb",
					"uri": "/clergy/procession-of-the-lamb"
				},
				{
					"name": "Absolution of the Servants",
					"path": "clergy/Absolution of the Servants",
					"uri": "/clergy/absolution-of-the-servants"
				},
				{
					"name": "Epistle Prayers",
					"path": "clergy/Epistle Prayers",
					"uri": "/clergy/epistle-prayers"
				},
				{
					"name": "Mystery of the Gospel",
					"path": "clergy/Mystery of the Gospel",
					"uri": "/clergy/mystery-of-the-gospel"
				},
				{
					"name": "Prayer of the Veil",
					"path": "clergy/Prayer of the Veil",
					"uri": "/clergy/prayer-of-the-veil"
				},
				{
					"name": "Confession",
					"path": "clergy/Confession",
					"uri": "/clergy/confession"
				},
				{
					"name": "Great Fast Litanies",
					"path": "clergy/Great Fast Litanies",
					"uri": "/clergy/great-fast-litanies"
				},
				{
					"name": "Prayer at the Tomb",
					"path": "clergy/Prayer at the Tomb",
					"uri": "/clergy/prayer-at-the-tomb"
				},
				{
					"name": "Benediction",
					"path": "clergy/Benediction",
					"uri": "/clergy/benediction"
				}
			],
			"uri": "/clergy"
		},
		{
			"name": "Special",
			"image": "assets/images/app_icon.png",
			"menu": [
				{
					"name": "Baptism",
					"menu": [
						{
							"name": "Absolution of the Woman (Boy)",
							"path": "baptism/Baptism - Absolution of the Woman (Boy)",
							"uri": "/special/baptism/absolution-of-the-woman-(boy)"
						},
						{
							"name": "Absolution of the Woman (Girl)",
							"path": "baptism/Baptism - Absolution of the Woman (Girl)",
							"uri": "/special/baptism/absolution-of-the-woman-(girl)"
						},
						{
							"name": "Holy Baptism",
							"path": "baptism/Baptism - Holy Baptism",
							"uri": "/special/baptism/holy-baptism"
						},
						{
							"name": "Consecrating the Water",
							"path": "baptism/Baptism - Consecrating the Water",
							"uri": "/special/baptism/consecrating-the-water"
						},
						{
							"name": "Holy Myron",
							"path": "baptism/Baptism - Holy Myron",
							"uri": "/special/baptism/holy-myron"
						},
						{
							"name": "Loosing the Girdle",
							"path": "baptism/Baptism - Loosing the Girdle",
							"uri": "/special/baptism/loosing-the-girdle"
						},
						{
							"name": "Bathing Prayer",
							"path": "baptism/Baptism - Bathing Prayer",
							"uri": "/special/baptism/bathing-prayer"
						}
					],
					"uri": "/special/baptism"
				},
				{
					"name": "Crowning",
					"menu": [
						{
							"name": "Engagement Prayer",
							"path": "crowning/Engagement Prayer",
							"uri": "/special/crowning/engagement-prayer"
						},
						{
							"name": "Crowning Prayer",
							"path": "crowning/Crowning Prayer",
							"uri": "/special/crowning/crowning-prayer"
						},
						{
							"name": "Second Marriage Prayer",
							"path": "crowning/Second Marriage Prayer",
							"uri": "/special/crowning/second-marriage-prayer"
						}
					],
					"uri": "/special/crowning"
				},
				{
					"name": "Unction",
					"menu": [
						{
							"name": "First Prayer",
							"path": "unction/Unction - First Prayer",
							"uri": "/special/unction/first-prayer"
						},
						{
							"name": "Second Prayer",
							"path": "unction/Unction - Second Prayer",
							"uri": "/special/unction/second-prayer"
						},
						{
							"name": "Third Prayer",
							"path": "unction/Unction - Third Prayer",
							"uri": "/special/unction/third-prayer"
						},
						{
							"name": "Fourth Prayer",
							"path": "unction/Unction - Fourth Prayer",
							"uri": "/special/unction/fourth-prayer"
						},
						{
							"name": "Fifth Prayer",
							"path": "unction/Unction - Fifth Prayer",
							"uri": "/special/unction/fifth-prayer"
						},
						{
							"name": "Sixth Prayer",
							"path": "unction/Unction - Sixth Prayer",
							"uri": "/special/unction/sixth-prayer"
						},
						{
							"name": "Seventh Prayer",
							"path": "unction/Unction - Seventh Prayer",
							"uri": "/special/unction/seventh-prayer"
						}
					],
					"uri": "/special/unction"
				},
				{
					"name": "Veneration",
					"path": "veneration/Veneration",
					"uri": "/special/veneration"
				},
				{
					"name": "Funeral",
					"menu": [
						{
							"name": "Men",
							"path": "funeral/Funeral for Men",
							"uri": "/special/funeral/men"
						},
						{
							"name": "Women",
							"path": "funeral/Funeral for Women",
							"uri": "/special/funeral/women"
						},
						{
							"name": "Women During Delivery",
							"path": "funeral/Funeral for Women During Delivery",
							"uri": "/special/funeral/women-during-delivery"
						},
						{
							"name": "Boys",
							"path": "funeral/Funeral for Boys",
							"uri": "/special/funeral/boys"
						},
						{
							"name": "Girls",
							"path": "funeral/Funeral for Girls",
							"uri": "/special/funeral/girls"
						},
						{
							"name": "Deacons",
							"path": "funeral/Funeral for Deacons",
							"uri": "/special/funeral/deacons"
						},
						{
							"name": "Priests",
							"path": "funeral/Funeral for Priests",
							"uri": "/special/funeral/priests"
						},
						{
							"name": "Bishops",
							"path": "funeral/Funeral for Bishops",
							"uri": "/special/funeral/bishops"
						},
						{
							"name": "Monk Priests",
							"path": "funeral/Funeral for Monk Priests",
							"uri": "/special/funeral/monk-priests"
						},
						{
							"name": "Monks",
							"path": "funeral/Funeral for Monks",
							"uri": "/special/funeral/monks"
						},
						{
							"name": "Nuns",
							"path": "funeral/Funeral for Nuns",
							"uri": "/special/funeral/nuns"
						},
						{
							"name": "3rd and 40th Days",
							"path": "funeral/Funeral for 3rd and 40th Days",
							"uri": "/special/funeral/3rd-and-40th-days"
						},
						{
							"name": "Prayer at the Tomb",
							"path": "funeral/Prayer at the Tomb",
							"uri": "/special/funeral/prayer-at-the-tomb"
						}
					],
					"uri": "/special/funeral"
				},
				{
					"name": "Consecrations",
					"menu": [
						{
							"name": "Church",
							"menu": [
								{
									"name": "Part 1",
									"path": "consecrations/church/Church Consecration Part 1",
									"uri": "/special/consecrations/church/part-1"
								},
								{
									"name": "Part 2",
									"path": "consecrations/church/Church Consecration Part 2",
									"uri": "/special/consecrations/church/part-2"
								},
								{
									"name": "Part 3",
									"path": "consecrations/church/Church Consecration Part 3",
									"uri": "/special/consecrations/church/part-3"
								},
								{
									"name": "Part 4",
									"path": "consecrations/church/Church Consecration Part 4",
									"uri": "/special/consecrations/church/part-4"
								},
								{
									"name": "Vespers",
									"path": "consecrations/church/Vespers",
									"uri": "/special/consecrations/church/vespers"
								},
								{
									"name": "Liturgy of the Word",
									"path": "consecrations/church/Liturgy of the Word",
									"uri": "/special/consecrations/church/liturgy-of-the-word"
								}
							],
							"uri": "/special/consecrations/church"
						},
						{
							"name": "Altar",
							"path": "consecrations/Consecration of the Altar",
							"uri": "/special/consecrations/altar"
						},
						{
							"name": "Vessels, Censers, and Icons",
							"path": "consecrations/Consecration of Vessels, Censers, and Icons",
							"uri": "/special/consecrations/vessels,-censers,-and-icons"
						},
						{
							"name": "Baptistery",
							"path": "consecrations/Consecration of the Baptistery",
							"uri": "/special/consecrations/baptistery"
						},
						{
							"name": "Cornerstone",
							"path": "consecrations/Laying of the Church Cornerstone",
							"uri": "/special/consecrations/cornerstone"
						},
						{
							"name": "Oil",
							"menu": [
								{
									"name": "Myron",
									"menu": [
										{
											"name": "Preparation",
											"path": "consecrations/oil/Preparation of the Holy Myron",
											"uri": "/special/consecrations/oil/myron/preparation"
										},
										{
											"name": "Consecration",
											"path": "consecrations/oil/Consecration of the Holy Myron",
											"uri": "/special/consecrations/oil/myron/consecration"
										}
									],
									"uri": "/special/consecrations/oil/myron"
								},
								{
									"name": "Oil of Gladness",
									"path": "consecrations/oil/Sanctification of Oil of Gladness",
									"uri": "/special/consecrations/oil/oil-of-gladness"
								},
								{
									"name": "Pre-sanctified Chrism",
									"path": "consecrations/oil/Reservation of the Pre-sanctified Chrism",
									"uri": "/special/consecrations/oil/pre-sanctified-chrism"
								}
							],
							"uri": "/special/consecrations/oil"
						},
						{
							"name": "Ordinations",
							"menu": [
								{
									"name": "Chanter",
									"path": "consecrations/ordinations/Chanter Ordination",
									"uri": "/special/consecrations/ordinations/chanter"
								},
								{
									"name": "Reader",
									"path": "consecrations/ordinations/Reader Ordination",
									"uri": "/special/consecrations/ordinations/reader"
								},
								{
									"name": "Subdeacon",
									"path": "consecrations/ordinations/Subdeacon Ordination",
									"uri": "/special/consecrations/ordinations/subdeacon"
								},
								{
									"name": "Deacon",
									"path": "consecrations/ordinations/Deacon Ordination",
									"uri": "/special/consecrations/ordinations/deacon"
								},
								{
									"name": "Archdeacon",
									"path": "consecrations/ordinations/Archdeacon Ordination",
									"uri": "/special/consecrations/ordinations/archdeacon"
								},
								{
									"name": "Priest",
									"path": "consecrations/ordinations/Priest Ordination",
									"uri": "/special/consecrations/ordinations/priest"
								},
								{
									"name": "Hegumen",
									"path": "consecrations/ordinations/Hegumen Ordination",
									"uri": "/special/consecrations/ordinations/hegumen"
								},
								{
									"name": "Bishop",
									"path": "consecrations/ordinations/Bishop Ordination",
									"uri": "/special/consecrations/ordinations/bishop"
								},
								{
									"name": "Metropolitan",
									"path": "consecrations/ordinations/Metropolitan Ordination",
									"uri": "/special/consecrations/ordinations/metropolitan"
								},
								{
									"name": "Papal Enthronement",
									"path": "papal/Papal Enthronement",
									"uri": "/special/consecrations/ordinations/papal-enthronement"
								}
							],
							"uri": "/special/consecrations/ordinations"
						},
						{
							"name": "Monk",
							"path": "consecrations/Consecration of Monks",
							"uri": "/special/consecrations/monk"
						},
						{
							"name": "Nuns",
							"path": "consecrations/Consecration of Nuns",
							"uri": "/special/consecrations/nuns"
						},
						{
							"name": "Sisters",
							"path": "consecrations/Consecration of Sisters",
							"uri": "/special/consecrations/sisters"
						},
						{
							"name": "Reception of New Priest",
							"path": "consecrations/reception/Reception of New Priest",
							"uri": "/special/consecrations/reception-of-new-priest"
						},
						{
							"name": "Home Blessing",
							"path": "consecrations/Blessing of the Home",
							"uri": "/special/consecrations/home-blessing"
						}
					],
					"uri": "/special/consecrations"
				},
				{
					"name": "Prostration",
					"menu": [
						{
							"name": "Praises",
							"path": "prostration/Praises",
							"uri": "/special/prostration/praises"
						},
						{
							"name": "First Prostration",
							"path": "prostration/First Prostration",
							"uri": "/special/prostration/first-prostration"
						},
						{
							"name": "Second Prostration",
							"path": "prostration/Second Prostration",
							"uri": "/special/prostration/second-prostration"
						},
						{
							"name": "Third Prostration",
							"path": "prostration/Third Prostration",
							"uri": "/special/prostration/third-prostration"
						}
					],
					"uri": "/special/prostration"
				},
				{
					"name": "Pascha",
					"menu": [
						{
							"name": "Sunday",
							"menu": [
								{
									"name": "General Funeral Prayer",
									"path": "pascha/sunday/General Funeral Prayer",
									"uri": "/special/pascha/sunday/general-funeral-prayer"
								},
								{
									"name": "Insights",
									"path": "pascha/include/insights/Sunday",
									"uri": "/special/pascha/sunday/insights"
								},
								{
									"name": "Sunday Day",
									"menu": [
										{
											"name": "9th Hour",
											"path": "pascha/sunday/Sunday - 9th Hour",
											"uri": "/special/pascha/sunday/sunday-day/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/sunday/Sunday - 11th Hour",
											"uri": "/special/pascha/sunday/sunday-day/11th-hour"
										}
									],
									"uri": "/special/pascha/sunday/sunday-day"
								},
								{
									"name": "Monday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/monday/Monday Eve - 1st Hour",
											"uri": "/special/pascha/sunday/monday-eve/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/monday/Monday Eve - 3rd Hour",
											"uri": "/special/pascha/sunday/monday-eve/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/monday/Monday Eve - 6th Hour",
											"uri": "/special/pascha/sunday/monday-eve/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/monday/Monday Eve - 9th Hour",
											"uri": "/special/pascha/sunday/monday-eve/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/monday/Monday Eve - 11th Hour",
											"uri": "/special/pascha/sunday/monday-eve/11th-hour"
										}
									],
									"uri": "/special/pascha/sunday/monday-eve"
								}
							],
							"uri": "/special/pascha/sunday"
						},
						{
							"name": "Monday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Monday",
									"uri": "/special/pascha/monday/insights"
								},
								{
									"name": "Monday Day",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/monday/Monday - 1st Hour",
											"uri": "/special/pascha/monday/monday-day/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/monday/Monday - 3rd Hour",
											"uri": "/special/pascha/monday/monday-day/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/monday/Monday - 6th Hour",
											"uri": "/special/pascha/monday/monday-day/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/monday/Monday - 9th Hour",
											"uri": "/special/pascha/monday/monday-day/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/monday/Monday - 11th Hour",
											"uri": "/special/pascha/monday/monday-day/11th-hour"
										}
									],
									"uri": "/special/pascha/monday/monday-day"
								},
								{
									"name": "Tuesday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/tuesday/Tuesday Eve - 1st Hour",
											"uri": "/special/pascha/monday/tuesday-eve/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/tuesday/Tuesday Eve - 3rd Hour",
											"uri": "/special/pascha/monday/tuesday-eve/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/tuesday/Tuesday Eve - 6th Hour",
											"uri": "/special/pascha/monday/tuesday-eve/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/tuesday/Tuesday Eve - 9th Hour",
											"uri": "/special/pascha/monday/tuesday-eve/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/tuesday/Tuesday Eve - 11th Hour",
											"uri": "/special/pascha/monday/tuesday-eve/11th-hour"
										}
									],
									"uri": "/special/pascha/monday/tuesday-eve"
								}
							],
							"uri": "/special/pascha/monday"
						},
						{
							"name": "Tuesday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Tuesday",
									"uri": "/special/pascha/tuesday/insights"
								},
								{
									"name": "Tuesday Day",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/tuesday/Tuesday - 1st Hour",
											"uri": "/special/pascha/tuesday/tuesday-day/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/tuesday/Tuesday - 3rd Hour",
											"uri": "/special/pascha/tuesday/tuesday-day/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/tuesday/Tuesday - 6th Hour",
											"uri": "/special/pascha/tuesday/tuesday-day/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/tuesday/Tuesday - 9th Hour",
											"uri": "/special/pascha/tuesday/tuesday-day/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/tuesday/Tuesday - 11th Hour",
											"uri": "/special/pascha/tuesday/tuesday-day/11th-hour"
										}
									],
									"uri": "/special/pascha/tuesday/tuesday-day"
								},
								{
									"name": "Wednesday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/wednesday/Wednesday Eve - 1st Hour",
											"uri": "/special/pascha/tuesday/wednesday-eve/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/wednesday/Wednesday Eve - 3rd Hour",
											"uri": "/special/pascha/tuesday/wednesday-eve/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/wednesday/Wednesday Eve - 6th Hour",
											"uri": "/special/pascha/tuesday/wednesday-eve/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/wednesday/Wednesday Eve - 9th Hour",
											"uri": "/special/pascha/tuesday/wednesday-eve/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/wednesday/Wednesday Eve - 11th Hour",
											"uri": "/special/pascha/tuesday/wednesday-eve/11th-hour"
										}
									],
									"uri": "/special/pascha/tuesday/wednesday-eve"
								}
							],
							"uri": "/special/pascha/tuesday"
						},
						{
							"name": "Wednesday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Wednesday",
									"uri": "/special/pascha/wednesday/insights"
								},
								{
									"name": "Wednesday Day",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/wednesday/Wednesday - 1st Hour",
											"uri": "/special/pascha/wednesday/wednesday-day/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/wednesday/Wednesday - 3rd Hour",
											"uri": "/special/pascha/wednesday/wednesday-day/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/wednesday/Wednesday - 6th Hour",
											"uri": "/special/pascha/wednesday/wednesday-day/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/wednesday/Wednesday - 9th Hour",
											"uri": "/special/pascha/wednesday/wednesday-day/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/wednesday/Wednesday - 11th Hour",
											"uri": "/special/pascha/wednesday/wednesday-day/11th-hour"
										}
									],
									"uri": "/special/pascha/wednesday/wednesday-day"
								},
								{
									"name": "Thursday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/thursday/Thursday Eve - 1st Hour",
											"uri": "/special/pascha/wednesday/thursday-eve/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/thursday/Thursday Eve - 3rd Hour",
											"uri": "/special/pascha/wednesday/thursday-eve/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/thursday/Thursday Eve - 6th Hour",
											"uri": "/special/pascha/wednesday/thursday-eve/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/thursday/Thursday Eve - 9th Hour",
											"uri": "/special/pascha/wednesday/thursday-eve/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/thursday/Thursday Eve - 11th Hour",
											"uri": "/special/pascha/wednesday/thursday-eve/11th-hour"
										}
									],
									"uri": "/special/pascha/wednesday/thursday-eve"
								}
							],
							"uri": "/special/pascha/wednesday"
						},
						{
							"name": "Thursday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Thursday",
									"uri": "/special/pascha/thursday/insights"
								},
								{
									"name": "Thursday Day",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/thursday/Thursday - 1st Hour",
											"uri": "/special/pascha/thursday/thursday-day/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/thursday/Thursday - 3rd Hour",
											"uri": "/special/pascha/thursday/thursday-day/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/thursday/Thursday - 6th Hour",
											"uri": "/special/pascha/thursday/thursday-day/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/thursday/Thursday - 9th Hour",
											"uri": "/special/pascha/thursday/thursday-day/9th-hour"
										},
										{
											"name": "Liturgy of the Waters",
											"path": "pascha/thursday/Liturgy of the Waters",
											"uri": "/special/pascha/thursday/thursday-day/liturgy-of-the-waters"
										},
										{
											"name": "Offering of the Lamb",
											"path": "liturgies/pascha/covenantThursday/Offering of the Lamb",
											"uri": "/special/pascha/thursday/thursday-day/offering-of-the-lamb"
										},
										{
											"name": "Liturgy of the Word",
											"path": "liturgies/pascha/covenantThursday/Liturgy of the Word",
											"uri": "/special/pascha/thursday/thursday-day/liturgy-of-the-word"
										},
										{
											"name": "Liturgy of the Faithful",
											"path": "liturgies/pascha/covenantThursday/Liturgy of the Faithful",
											"uri": "/special/pascha/thursday/thursday-day/liturgy-of-the-faithful"
										},
										{
											"name": "Distribution",
											"path": "liturgies/pascha/covenantThursday/Distribution of the Holy Mysteries",
											"uri": "/special/pascha/thursday/thursday-day/distribution"
										},
										{
											"name": "11th Hour",
											"path": "pascha/thursday/Thursday - 11th Hour",
											"uri": "/special/pascha/thursday/thursday-day/11th-hour"
										}
									],
									"uri": "/special/pascha/thursday/thursday-day"
								},
								{
									"name": "Friday Eve",
									"menu": [
										{
											"name": "1st Hour",
											"path": "pascha/friday/Friday Eve - 1st Hour",
											"uri": "/special/pascha/thursday/friday-eve/1st-hour"
										},
										{
											"name": "3rd Hour",
											"path": "pascha/friday/Friday Eve - 3rd Hour",
											"uri": "/special/pascha/thursday/friday-eve/3rd-hour"
										},
										{
											"name": "6th Hour",
											"path": "pascha/friday/Friday Eve - 6th Hour",
											"uri": "/special/pascha/thursday/friday-eve/6th-hour"
										},
										{
											"name": "9th Hour",
											"path": "pascha/friday/Friday Eve - 9th Hour",
											"uri": "/special/pascha/thursday/friday-eve/9th-hour"
										},
										{
											"name": "11th Hour",
											"path": "pascha/friday/Friday Eve - 11th Hour",
											"uri": "/special/pascha/thursday/friday-eve/11th-hour"
										}
									],
									"uri": "/special/pascha/thursday/friday-eve"
								}
							],
							"uri": "/special/pascha/thursday"
						},
						{
							"name": "Friday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Friday",
									"uri": "/special/pascha/friday/insights"
								},
								{
									"name": "1st Hour",
									"path": "pascha/friday/Friday - 1st Hour",
									"uri": "/special/pascha/friday/1st-hour"
								},
								{
									"name": "3rd Hour",
									"path": "pascha/friday/Friday - 3rd Hour",
									"uri": "/special/pascha/friday/3rd-hour"
								},
								{
									"name": "6th Hour",
									"path": "pascha/friday/Friday - 6th Hour",
									"uri": "/special/pascha/friday/6th-hour"
								},
								{
									"name": "9th Hour",
									"path": "pascha/friday/Friday - 9th Hour",
									"uri": "/special/pascha/friday/9th-hour"
								},
								{
									"name": "11th Hour",
									"path": "pascha/friday/Friday - 11th Hour",
									"uri": "/special/pascha/friday/11th-hour"
								},
								{
									"name": "12th Hour",
									"path": "pascha/friday/Friday - 12th Hour",
									"uri": "/special/pascha/friday/12th-hour"
								}
							],
							"uri": "/special/pascha/friday"
						},
						{
							"name": "Saturday",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Saturday",
									"uri": "/special/pascha/saturday/insights"
								},
								{
									"name": "Praises",
									"path": "pascha/saturday/Vigil of the Apocalypse - Midnight Praises",
									"uri": "/special/pascha/saturday/praises"
								},
								{
									"name": "Matins",
									"path": "pascha/saturday/Vigil of the Apocalypse - Matins",
									"uri": "/special/pascha/saturday/matins"
								},
								{
									"name": "Third and Sixth Hours",
									"path": "pascha/saturday/Vigil of the Apocalypse - Third and Sixth Hours",
									"uri": "/special/pascha/saturday/third-and-sixth-hours"
								},
								{
									"name": "Revelation",
									"path": "pascha/saturday/Vigil of the Apocalypse - Revelation",
									"uri": "/special/pascha/saturday/revelation"
								},
								{
									"name": "Ninth Hour",
									"path": "pascha/saturday/Vigil of the Apocalypse - Ninth Hour",
									"uri": "/special/pascha/saturday/ninth-hour"
								},
								{
									"name": "Offering of the Lamb",
									"path": "liturgies/pascha/joyousSaturday/Offering of the Lamb",
									"uri": "/special/pascha/saturday/offering-of-the-lamb"
								},
								{
									"name": "Liturgy of the Word",
									"path": "liturgies/pascha/joyousSaturday/Liturgy of the Word",
									"uri": "/special/pascha/saturday/liturgy-of-the-word"
								},
								{
									"name": "Liturgy of the Faithful",
									"path": "liturgies/pascha/joyousSaturday/Liturgy of the Faithful",
									"uri": "/special/pascha/saturday/liturgy-of-the-faithful"
								},
								{
									"name": "Distribution",
									"path": "liturgies/pascha/joyousSaturday/Distribution of the Holy Mysteries",
									"uri": "/special/pascha/saturday/distribution"
								}
							],
							"uri": "/special/pascha/saturday"
						},
						{
							"name": "Resurrection",
							"menu": [
								{
									"name": "Insights",
									"path": "pascha/include/insights/Resurrection",
									"uri": "/special/pascha/resurrection/insights"
								},
								{
									"name": "Prophecies",
									"path": "pascha/resurrection/Prophecies",
									"uri": "/special/pascha/resurrection/prophecies"
								}
							],
							"uri": "/special/pascha/resurrection"
						}
					],
					"uri": "/special/pascha"
				},
				{
					"name": "Lakkan",
					"menu": [
						{
							"name": "Theophany",
							"path": "lakkan/Theophany - Liturgy of the Waters",
							"uri": "/special/lakkan/theophany"
						},
						{
							"name": "Covenant Thursday",
							"path": "lakkan/Covenant Thursday - Liturgy of the Waters",
							"uri": "/special/lakkan/covenant-thursday"
						},
						{
							"name": "Apostles Feast",
							"path": "lakkan/Apostles Feast - Liturgy of the Waters",
							"uri": "/special/lakkan/apostles-feast"
						}
					],
					"uri": "/special/lakkan"
				}
			],
			"uri": "/special"
		},
		{
			"name": "include",
			"image": "assets/images/agpeya.jpg",
			"menu": [
				{
					"name": "AbsolutionOfTheServants",
					"path": "include/AbsolutionOfTheServants",
					"uri": "/include/AbsolutionOfTheServants"
				},
				{
					"name": "AccordingToYourMercy",
					"path": "include/AccordingToYourMercy",
					"uri": "/include/AccordingToYourMercy"
				},
				{
					"name": "Afermethre",
					"path": "include/Afermethre",
					"uri": "/include/Afermethre"
				},
				{
					"name": "AfrekEtve",
					"path": "include/AfrekEtve",
					"uri": "/include/AfrekEtve"
				},
				{
					"name": "AgainLetUsAsk",
					"path": "include/AgainLetUsAsk",
					"uri": "/include/AgainLetUsAsk"
				},
				{
					"name": "Agios3",
					"path": "include/Agios3",
					"uri": "/include/Agios3"
				},
				{
					"name": "AgiosAgiosAgios",
					"path": "include/AgiosAgiosAgios",
					"uri": "/include/AgiosAgiosAgios"
				},
				{
					"name": "Alleluia",
					"path": "include/Alleluia",
					"uri": "/include/Alleluia"
				},
				{
					"name": "Alleluia3",
					"path": "include/Alleluia3",
					"uri": "/include/Alleluia3"
				},
				{
					"name": "AlleluiaGloryBeToOurGod",
					"path": "include/AlleluiaGloryBeToOurGod",
					"uri": "/include/AlleluiaGloryBeToOurGod"
				},
				{
					"name": "AllTheChoirsRefrain",
					"path": "include/AllTheChoirsRefrain",
					"uri": "/include/AllTheChoirsRefrain"
				},
				{
					"name": "AllYouHeavenlyOrders",
					"path": "include/AllYouHeavenlyOrders",
					"uri": "/include/AllYouHeavenlyOrders"
				},
				{
					"name": "AlternateConfessionResponse",
					"path": "include/AlternateConfessionResponse",
					"uri": "/include/AlternateConfessionResponse"
				},
				{
					"name": "AlternateLitanyOfTheGospel",
					"path": "include/AlternateLitanyOfTheGospel",
					"uri": "/include/AlternateLitanyOfTheGospel"
				},
				{
					"name": "Amen",
					"path": "include/Amen",
					"uri": "/include/Amen"
				},
				{
					"name": "AmenLordHaveMercy10",
					"path": "include/AmenLordHaveMercy10",
					"uri": "/include/AmenLordHaveMercy10"
				},
				{
					"name": "AmenLordHaveMercy3",
					"path": "include/AmenLordHaveMercy3",
					"uri": "/include/AmenLordHaveMercy3"
				},
				{
					"name": "AmenPeople",
					"path": "include/AmenPeople",
					"uri": "/include/AmenPeople"
				},
				{
					"name": "Anaphora",
					"path": "include/Anaphora",
					"uri": "/include/Anaphora"
				},
				{
					"name": "AnaphoraIntro.1",
					"path": "include/AnaphoraIntro.1",
					"uri": "/include/AnaphoraIntro.1"
				},
				{
					"name": "AnaphoraIntro",
					"path": "include/AnaphoraIntro",
					"uri": "/include/AnaphoraIntro"
				},
				{
					"name": "AnaphoraTheCherubim.1",
					"path": "include/AnaphoraTheCherubim.1",
					"uri": "/include/AnaphoraTheCherubim.1"
				},
				{
					"name": "AnaphoraTheCherubim.2",
					"path": "include/AnaphoraTheCherubim.2",
					"uri": "/include/AnaphoraTheCherubim.2"
				},
				{
					"name": "AnaphoraTheCherubim",
					"path": "include/AnaphoraTheCherubim",
					"uri": "/include/AnaphoraTheCherubim"
				},
				{
					"name": "AndThoseWhoRightly",
					"path": "include/AndThoseWhoRightly",
					"uri": "/include/AndThoseWhoRightly"
				},
				{
					"name": "AndWithYourSpirit",
					"path": "include/AndWithYourSpirit",
					"uri": "/include/AndWithYourSpirit"
				},
				{
					"name": "AriseOLordGod",
					"path": "include/AriseOLordGod",
					"uri": "/include/AriseOLordGod"
				},
				{
					"name": "AsItWasBasil",
					"path": "include/AsItWasBasil",
					"uri": "/include/AsItWasBasil"
				},
				{
					"name": "Asomen",
					"path": "include/Asomen",
					"uri": "/include/Asomen"
				},
				{
					"name": "AsomenRefrainEnglishArabic",
					"path": "include/AsomenRefrainEnglishArabic",
					"uri": "/include/AsomenRefrainEnglishArabic"
				},
				{
					"name": "AsomenRefrainGreekCoptic",
					"path": "include/AsomenRefrainGreekCoptic",
					"uri": "/include/AsomenRefrainGreekCoptic"
				},
				{
					"name": "AxionKeDikeon3",
					"path": "include/AxionKeDikeon3",
					"uri": "/include/AxionKeDikeon3"
				},
				{
					"name": "BeforeYou",
					"path": "include/BeforeYou",
					"uri": "/include/BeforeYou"
				},
				{
					"name": "BlessedBeTheLord",
					"path": "include/BlessedBeTheLord",
					"uri": "/include/BlessedBeTheLord"
				},
				{
					"name": "BlessMeBlessMe",
					"path": "include/BlessMeBlessMe",
					"uri": "/include/BlessMeBlessMe"
				},
				{
					"name": "BlessMeLo",
					"path": "include/BlessMeLo",
					"uri": "/include/BlessMeLo"
				},
				{
					"name": "BowYourHeads",
					"path": "include/BowYourHeads",
					"uri": "/include/BowYourHeads"
				},
				{
					"name": "CatholicEpistle",
					"path": "include/CatholicEpistle",
					"uri": "/include/CatholicEpistle"
				},
				{
					"name": "CatholicEpistleIntroduction",
					"path": "include/CatholicEpistleIntroduction",
					"uri": "/include/CatholicEpistleIntroduction"
				},
				{
					"name": "ChantedPsalmIntro",
					"path": "include/ChantedPsalmIntro",
					"uri": "/include/ChantedPsalmIntro"
				},
				{
					"name": "ChristOurGod",
					"path": "include/ChristOurGod",
					"uri": "/include/ChristOurGod"
				},
				{
					"name": "CommemorationOfTheSaints",
					"path": "include/CommemorationOfTheSaints",
					"uri": "/include/CommemorationOfTheSaints"
				},
				{
					"name": "CommemorationOfTheSaintsDeaconResponse",
					"path": "include/CommemorationOfTheSaintsDeaconResponse",
					"uri": "/include/CommemorationOfTheSaintsDeaconResponse"
				},
				{
					"name": "CommemorationOfTheSaintsHymns",
					"path": "include/CommemorationOfTheSaintsHymns",
					"uri": "/include/CommemorationOfTheSaintsHymns"
				},
				{
					"name": "CommonHymnsOfResurrection",
					"path": "include/CommonHymnsOfResurrection",
					"uri": "/include/CommonHymnsOfResurrection"
				},
				{
					"name": "Confession",
					"path": "include/Confession",
					"uri": "/include/Confession"
				},
				{
					"name": "Creed",
					"path": "include/Creed",
					"uri": "/include/Creed"
				},
				{
					"name": "CreedCollapsed",
					"path": "include/CreedCollapsed",
					"uri": "/include/CreedCollapsed"
				},
				{
					"name": "CreedContents",
					"path": "include/CreedContents",
					"uri": "/include/CreedContents"
				},
				{
					"name": "CreedPeople",
					"path": "include/CreedPeople",
					"uri": "/include/CreedPeople"
				},
				{
					"name": "DoxaPatri",
					"path": "include/DoxaPatri",
					"uri": "/include/DoxaPatri"
				},
				{
					"name": "DoxaPatriAlleluia",
					"path": "include/DoxaPatriAlleluia",
					"uri": "/include/DoxaPatriAlleluia"
				},
				{
					"name": "EAghapy",
					"path": "include/EAghapy",
					"uri": "/include/EAghapy"
				},
				{
					"name": "Ensofia",
					"path": "include/Ensofia",
					"uri": "/include/Ensofia"
				},
				{
					"name": "EParthenos",
					"path": "include/EParthenos",
					"uri": "/include/EParthenos"
				},
				{
					"name": "EpiclesisCyril",
					"path": "include/EpiclesisCyril",
					"uri": "/include/EpiclesisCyril"
				},
				{
					"name": "EthveFai",
					"path": "include/EthveFai",
					"uri": "/include/EthveFai"
				},
				{
					"name": "Eulogimenoc",
					"path": "include/Eulogimenoc",
					"uri": "/include/Eulogimenoc"
				},
				{
					"name": "EulogimenocIntro.1",
					"path": "include/EulogimenocIntro.1",
					"uri": "/include/EulogimenocIntro.1"
				},
				{
					"name": "EulogimenocIntro",
					"path": "include/EulogimenocIntro",
					"uri": "/include/EulogimenocIntro"
				},
				{
					"name": "EveryNight",
					"path": "include/EveryNight",
					"uri": "/include/EveryNight"
				},
				{
					"name": "EvnotiNaiNan.1",
					"path": "include/EvnotiNaiNan.1",
					"uri": "/include/EvnotiNaiNan.1"
				},
				{
					"name": "EvnotiNaiNan.2",
					"path": "include/EvnotiNaiNan.2",
					"uri": "/include/EvnotiNaiNan.2"
				},
				{
					"name": "EvnotiNaiNan.3",
					"path": "include/EvnotiNaiNan.3",
					"uri": "/include/EvnotiNaiNan.3"
				},
				{
					"name": "EvnotiNaiNan.4",
					"path": "include/EvnotiNaiNan.4",
					"uri": "/include/EvnotiNaiNan.4"
				},
				{
					"name": "EvnotiNaiNan",
					"path": "include/EvnotiNaiNan",
					"uri": "/include/EvnotiNaiNan"
				},
				{
					"name": "EyrenhwcSeasonalResponse",
					"path": "include/EyrenhwcSeasonalResponse",
					"uri": "/include/EyrenhwcSeasonalResponse"
				},
				{
					"name": "EyrenhwcSeasonalResponseShort",
					"path": "include/EyrenhwcSeasonalResponseShort",
					"uri": "/include/EyrenhwcSeasonalResponseShort"
				},
				{
					"name": "FaiErePeoo",
					"path": "include/FaiErePeoo",
					"uri": "/include/FaiErePeoo"
				},
				{
					"name": "FeastOfTheCrossExpositions",
					"path": "include/FeastOfTheCrossExpositions",
					"uri": "/include/FeastOfTheCrossExpositions"
				},
				{
					"name": "FeeEthemsi",
					"path": "include/FeeEthemsi",
					"uri": "/include/FeeEthemsi"
				},
				{
					"name": "FempsaGar",
					"path": "include/FempsaGar",
					"uri": "/include/FempsaGar"
				},
				{
					"name": "FiveShortLitanies",
					"path": "include/FiveShortLitanies",
					"uri": "/include/FiveShortLitanies"
				},
				{
					"name": "ForThisWeGlorifyHim",
					"path": "include/ForThisWeGlorifyHim",
					"uri": "/include/ForThisWeGlorifyHim"
				},
				{
					"name": "ForYourPeople",
					"path": "include/ForYourPeople",
					"uri": "/include/ForYourPeople"
				},
				{
					"name": "ForYourPeopleContents.1",
					"path": "include/ForYourPeopleContents.1",
					"uri": "/include/ForYourPeopleContents.1"
				},
				{
					"name": "ForYourPeopleContents.2",
					"path": "include/ForYourPeopleContents.2",
					"uri": "/include/ForYourPeopleContents.2"
				},
				{
					"name": "ForYourPeopleContents",
					"path": "include/ForYourPeopleContents",
					"uri": "/include/ForYourPeopleContents"
				},
				{
					"name": "ForYourPeopleCyril",
					"path": "include/ForYourPeopleCyril",
					"uri": "/include/ForYourPeopleCyril"
				},
				{
					"name": "Geneylion",
					"path": "include/Geneylion",
					"uri": "/include/Geneylion"
				},
				{
					"name": "GloryAndHonor",
					"path": "include/GloryAndHonor",
					"uri": "/include/GloryAndHonor"
				},
				{
					"name": "GloryBeToGodForever",
					"path": "include/GloryBeToGodForever",
					"uri": "/include/GloryBeToGodForever"
				},
				{
					"name": "GloryBeToOurGodAgain",
					"path": "include/GloryBeToOurGodAgain",
					"uri": "/include/GloryBeToOurGodAgain"
				},
				{
					"name": "GospelBishopIntro",
					"path": "include/GospelBishopIntro",
					"uri": "/include/GospelBishopIntro"
				},
				{
					"name": "GreatFastLitanies",
					"path": "include/GreatFastLitanies",
					"uri": "/include/GreatFastLitanies"
				},
				{
					"name": "GreatPinishti",
					"path": "include/GreatPinishti",
					"uri": "/include/GreatPinishti"
				},
				{
					"name": "GreetOneAnotherLong",
					"path": "include/GreetOneAnotherLong",
					"uri": "/include/GreetOneAnotherLong"
				},
				{
					"name": "GreetOneAnotherShort",
					"path": "include/GreetOneAnotherShort",
					"uri": "/include/GreetOneAnotherShort"
				},
				{
					"name": "HailToTheBridalChamber",
					"path": "include/HailToTheBridalChamber",
					"uri": "/include/HailToTheBridalChamber"
				},
				{
					"name": "HaveMercyUponUsPantocrator3",
					"path": "include/HaveMercyUponUsPantocrator3",
					"uri": "/include/HaveMercyUponUsPantocrator3"
				},
				{
					"name": "HaveMercyUponUsPantocratorPriest3",
					"path": "include/HaveMercyUponUsPantocratorPriest3",
					"uri": "/include/HaveMercyUponUsPantocratorPriest3"
				},
				{
					"name": "HaveMercyUponUsSavior3",
					"path": "include/HaveMercyUponUsSavior3",
					"uri": "/include/HaveMercyUponUsSavior3"
				},
				{
					"name": "HaveMercyUponUsSaviorPriest3",
					"path": "include/HaveMercyUponUsSaviorPriest3",
					"uri": "/include/HaveMercyUponUsSaviorPriest3"
				},
				{
					"name": "HealingToTheSick",
					"path": "include/HealingToTheSick",
					"uri": "/include/HealingToTheSick"
				},
				{
					"name": "HealingToTheSickContents",
					"path": "include/HealingToTheSickContents",
					"uri": "/include/HealingToTheSickContents"
				},
				{
					"name": "HealingToTheSickSilent",
					"path": "include/HealingToTheSickSilent",
					"uri": "/include/HealingToTheSickSilent"
				},
				{
					"name": "HeWhoSitsUponTheCherubim",
					"path": "include/HeWhoSitsUponTheCherubim",
					"uri": "/include/HeWhoSitsUponTheCherubim"
				},
				{
					"name": "HosannaInTheHighest",
					"path": "include/HosannaInTheHighest",
					"uri": "/include/HosannaInTheHighest"
				},
				{
					"name": "HosannaResponse",
					"path": "include/HosannaResponse",
					"uri": "/include/HosannaResponse"
				},
				{
					"name": "HosannaSundayExpositions",
					"path": "include/HosannaSundayExpositions",
					"uri": "/include/HosannaSundayExpositions"
				},
				{
					"name": "HymnForThomas",
					"path": "include/HymnForThomas",
					"uri": "/include/HymnForThomas"
				},
				{
					"name": "HymnOfBlessing",
					"path": "include/HymnOfBlessing",
					"uri": "/include/HymnOfBlessing"
				},
				{
					"name": "HymnOfConstantine",
					"path": "include/HymnOfConstantine",
					"uri": "/include/HymnOfConstantine"
				},
				{
					"name": "HymnOfSevenTunes",
					"path": "include/HymnOfSevenTunes",
					"uri": "/include/HymnOfSevenTunes"
				},
				{
					"name": "HymnOfTheCenser",
					"path": "include/HymnOfTheCenser",
					"uri": "/include/HymnOfTheCenser"
				},
				{
					"name": "HymnOfTheCross",
					"path": "include/HymnOfTheCross",
					"uri": "/include/HymnOfTheCross"
				},
				{
					"name": "HymnOfTheOblations",
					"path": "include/HymnOfTheOblations",
					"uri": "/include/HymnOfTheOblations"
				},
				{
					"name": "HymnOfTheResurrection",
					"path": "include/HymnOfTheResurrection",
					"uri": "/include/HymnOfTheResurrection"
				},
				{
					"name": "HymnOfVirtues",
					"path": "include/HymnOfVirtues",
					"uri": "/include/HymnOfVirtues"
				},
				{
					"name": "HymnsOfTheResurrection",
					"path": "include/HymnsOfTheResurrection",
					"uri": "/include/HymnsOfTheResurrection"
				},
				{
					"name": "InaudiblePrayerForThePraxis",
					"path": "include/InaudiblePrayerForThePraxis",
					"uri": "/include/InaudiblePrayerForThePraxis"
				},
				{
					"name": "InChristJesusOurLord",
					"path": "include/InChristJesusOurLord",
					"uri": "/include/InChristJesusOurLord"
				},
				{
					"name": "InstitutionNarrative",
					"path": "include/InstitutionNarrative",
					"uri": "/include/InstitutionNarrative"
				},
				{
					"name": "Jefcmarwout",
					"path": "include/Jefcmarwout",
					"uri": "/include/Jefcmarwout"
				},
				{
					"name": "JesusChristIsTheSame",
					"path": "include/JesusChristIsTheSame",
					"uri": "/include/JesusChristIsTheSame"
				},
				{
					"name": "JoyfulDaysComment",
					"path": "include/JoyfulDaysComment",
					"uri": "/include/JoyfulDaysComment"
				},
				{
					"name": "JudasWhoHasBrokenTheLaw",
					"path": "include/JudasWhoHasBrokenTheLaw",
					"uri": "/include/JudasWhoHasBrokenTheLaw"
				},
				{
					"name": "JudasWhoHasBrokenTheLawRefrain",
					"path": "include/JudasWhoHasBrokenTheLawRefrain",
					"uri": "/include/JudasWhoHasBrokenTheLawRefrain"
				},
				{
					"name": "KcmarwoutSeasonalResponse",
					"path": "include/KcmarwoutSeasonalResponse",
					"uri": "/include/KcmarwoutSeasonalResponse"
				},
				{
					"name": "KcmarwoutSeasonalResponseComment",
					"path": "include/KcmarwoutSeasonalResponseComment",
					"uri": "/include/KcmarwoutSeasonalResponseComment"
				},
				{
					"name": "KcmarwoutSeasonalResponseNoComment",
					"path": "include/KcmarwoutSeasonalResponseNoComment",
					"uri": "/include/KcmarwoutSeasonalResponseNoComment"
				},
				{
					"name": "KcmarwoutSeasonalResponseShort",
					"path": "include/KcmarwoutSeasonalResponseShort",
					"uri": "/include/KcmarwoutSeasonalResponseShort"
				},
				{
					"name": "KcmarwoutSeasonalResponseShortNoComment",
					"path": "include/KcmarwoutSeasonalResponseShortNoComment",
					"uri": "/include/KcmarwoutSeasonalResponseShortNoComment"
				},
				{
					"name": "KeepHimSecureForUs",
					"path": "include/KeepHimSecureForUs",
					"uri": "/include/KeepHimSecureForUs"
				},
				{
					"name": "KeepThemSecureForUs",
					"path": "include/KeepThemSecureForUs",
					"uri": "/include/KeepThemSecureForUs"
				},
				{
					"name": "KeNinAmenAlleluia",
					"path": "include/KeNinAmenAlleluia",
					"uri": "/include/KeNinAmenAlleluia"
				},
				{
					"name": "KhenEfran",
					"path": "include/KhenEfran",
					"uri": "/include/KhenEfran"
				},
				{
					"name": "KhenEfranAmen",
					"path": "include/KhenEfranAmen",
					"uri": "/include/KhenEfranAmen"
				},
				{
					"name": "LetMySoulLive",
					"path": "include/LetMySoulLive",
					"uri": "/include/LetMySoulLive"
				},
				{
					"name": "LetUsAttend",
					"path": "include/LetUsAttend",
					"uri": "/include/LetUsAttend"
				},
				{
					"name": "LetUsBow",
					"path": "include/LetUsBow",
					"uri": "/include/LetUsBow"
				},
				{
					"name": "LetUsEntreat",
					"path": "include/LetUsEntreat",
					"uri": "/include/LetUsEntreat"
				},
				{
					"name": "LetUsEntreatContents",
					"path": "include/LetUsEntreatContents",
					"uri": "/include/LetUsEntreatContents"
				},
				{
					"name": "LetUsGiveThanks",
					"path": "include/LetUsGiveThanks",
					"uri": "/include/LetUsGiveThanks"
				},
				{
					"name": "LetUsPray",
					"path": "include/LetUsPray",
					"uri": "/include/LetUsPray"
				},
				{
					"name": "LiftUpYourHearts",
					"path": "include/LiftUpYourHearts",
					"uri": "/include/LiftUpYourHearts"
				},
				{
					"name": "LitanyOfTheGospel",
					"path": "include/LitanyOfTheGospel",
					"uri": "/include/LitanyOfTheGospel"
				},
				{
					"name": "LitanyOfTheGospelIntro",
					"path": "include/LitanyOfTheGospelIntro",
					"uri": "/include/LitanyOfTheGospelIntro"
				},
				{
					"name": "LitanyOfTheGospelIntroStandard",
					"path": "include/LitanyOfTheGospelIntroStandard",
					"uri": "/include/LitanyOfTheGospelIntroStandard"
				},
				{
					"name": "LiturgyExpositions",
					"path": "include/LiturgyExpositions",
					"uri": "/include/LiturgyExpositions"
				},
				{
					"name": "LiturgyOfTheFaithfulContent",
					"path": "include/LiturgyOfTheFaithfulContent",
					"uri": "/include/LiturgyOfTheFaithfulContent"
				},
				{
					"name": "LiturgyOfTheWordContent",
					"path": "include/LiturgyOfTheWordContent",
					"uri": "/include/LiturgyOfTheWordContent"
				},
				{
					"name": "LookTowardsTheEast",
					"path": "include/LookTowardsTheEast",
					"uri": "/include/LookTowardsTheEast"
				},
				{
					"name": "LooseRemit",
					"path": "include/LooseRemit",
					"uri": "/include/LooseRemit"
				},
				{
					"name": "LooseTheBound.1",
					"path": "include/LooseTheBound.1",
					"uri": "/include/LooseTheBound.1"
				},
				{
					"name": "LooseTheBound.2",
					"path": "include/LooseTheBound.2",
					"uri": "/include/LooseTheBound.2"
				},
				{
					"name": "LooseTheBound.3",
					"path": "include/LooseTheBound.3",
					"uri": "/include/LooseTheBound.3"
				},
				{
					"name": "LooseTheBound.4",
					"path": "include/LooseTheBound.4",
					"uri": "/include/LooseTheBound.4"
				},
				{
					"name": "LooseTheBound.5",
					"path": "include/LooseTheBound.5",
					"uri": "/include/LooseTheBound.5"
				},
				{
					"name": "LooseTheBound.6",
					"path": "include/LooseTheBound.6",
					"uri": "/include/LooseTheBound.6"
				},
				{
					"name": "LooseTheBound",
					"path": "include/LooseTheBound",
					"uri": "/include/LooseTheBound"
				},
				{
					"name": "LooseTheBoundBishop",
					"path": "include/LooseTheBoundBishop",
					"uri": "/include/LooseTheBoundBishop"
				},
				{
					"name": "LordHaveMercy",
					"path": "include/LordHaveMercy",
					"uri": "/include/LordHaveMercy"
				},
				{
					"name": "LordHaveMercy10",
					"path": "include/LordHaveMercy10",
					"uri": "/include/LordHaveMercy10"
				},
				{
					"name": "LordHaveMercy100",
					"path": "include/LordHaveMercy100",
					"uri": "/include/LordHaveMercy100"
				},
				{
					"name": "LordHaveMercy3",
					"path": "include/LordHaveMercy3",
					"uri": "/include/LordHaveMercy3"
				},
				{
					"name": "LordHaveMercy41",
					"path": "include/LordHaveMercy41",
					"uri": "/include/LordHaveMercy41"
				},
				{
					"name": "LordHaveMercy41Intro",
					"path": "include/LordHaveMercy41Intro",
					"uri": "/include/LordHaveMercy41Intro"
				},
				{
					"name": "LordHaveMercyNoRole",
					"path": "include/LordHaveMercyNoRole",
					"uri": "/include/LordHaveMercyNoRole"
				},
				{
					"name": "LordHearUs",
					"path": "include/LordHearUs",
					"uri": "/include/LordHearUs"
				},
				{
					"name": "LordsPrayer",
					"path": "include/LordsPrayer",
					"uri": "/include/LordsPrayer"
				},
				{
					"name": "LordsPrayerCollapsed",
					"path": "include/LordsPrayerCollapsed",
					"uri": "/include/LordsPrayerCollapsed"
				},
				{
					"name": "LordsPrayerContents",
					"path": "include/LordsPrayerContents",
					"uri": "/include/LordsPrayerContents"
				},
				{
					"name": "LordsPrayerNoTitle",
					"path": "include/LordsPrayerNoTitle",
					"uri": "/include/LordsPrayerNoTitle"
				},
				{
					"name": "MayGodBlessUs",
					"path": "include/MayGodBlessUs",
					"uri": "/include/MayGodBlessUs"
				},
				{
					"name": "MayTheClergy",
					"path": "include/MayTheClergy",
					"uri": "/include/MayTheClergy"
				},
				{
					"name": "MayTheSayingsOfGod",
					"path": "include/MayTheSayingsOfGod",
					"uri": "/include/MayTheSayingsOfGod"
				},
				{
					"name": "Nefcenti",
					"path": "include/Nefcenti",
					"uri": "/include/Nefcenti"
				},
				{
					"name": "Niromi",
					"path": "include/Niromi",
					"uri": "/include/Niromi"
				},
				{
					"name": "Nisavev.1",
					"path": "include/Nisavev.1",
					"uri": "/include/Nisavev.1"
				},
				{
					"name": "Nisavev.2",
					"path": "include/Nisavev.2",
					"uri": "/include/Nisavev.2"
				},
				{
					"name": "Nisavev",
					"path": "include/Nisavev",
					"uri": "/include/Nisavev"
				},
				{
					"name": "NiSherobim",
					"path": "include/NiSherobim",
					"uri": "/include/NiSherobim"
				},
				{
					"name": "NonCustomaryComments",
					"path": "include/NonCustomaryComments",
					"uri": "/include/NonCustomaryComments"
				},
				{
					"name": "NonLiturgyConcludingAbsolutions",
					"path": "include/NonLiturgyConcludingAbsolutions",
					"uri": "/include/NonLiturgyConcludingAbsolutions"
				},
				{
					"name": "NonLiturgyConcludingAbsolutionsIntro",
					"path": "include/NonLiturgyConcludingAbsolutionsIntro",
					"uri": "/include/NonLiturgyConcludingAbsolutionsIntro"
				},
				{
					"name": "Nywten",
					"path": "include/Nywten",
					"uri": "/include/Nywten"
				},
				{
					"name": "OfferatoryChant",
					"path": "include/OfferatoryChant",
					"uri": "/include/OfferatoryChant"
				},
				{
					"name": "OfferatoryChantConclusion",
					"path": "include/OfferatoryChantConclusion",
					"uri": "/include/OfferatoryChantConclusion"
				},
				{
					"name": "OfferatoryChantIntro",
					"path": "include/OfferatoryChantIntro",
					"uri": "/include/OfferatoryChantIntro"
				},
				{
					"name": "OfferatoryChant_Bishop",
					"path": "include/OfferatoryChant_Bishop",
					"uri": "/include/OfferatoryChant_Bishop"
				},
				{
					"name": "Offering.Priest.1",
					"path": "include/Offering.Priest.1",
					"uri": "/include/Offering.Priest.1"
				},
				{
					"name": "Offering.Priest.2",
					"path": "include/Offering.Priest.2",
					"uri": "/include/Offering.Priest.2"
				},
				{
					"name": "Offering.Priest.3",
					"path": "include/Offering.Priest.3",
					"uri": "/include/Offering.Priest.3"
				},
				{
					"name": "OfferingOfTheLambContent",
					"path": "include/OfferingOfTheLambContent",
					"uri": "/include/OfferingOfTheLambContent"
				},
				{
					"name": "OfferingOfTheLambPostThanksgivingPrayer",
					"path": "include/OfferingOfTheLambPostThanksgivingPrayer",
					"uri": "/include/OfferingOfTheLambPostThanksgivingPrayer"
				},
				{
					"name": "OfferingOfTheLamb_LordHaveMercy_3",
					"path": "include/OfferingOfTheLamb_LordHaveMercy_3",
					"uri": "/include/OfferingOfTheLamb_LordHaveMercy_3"
				},
				{
					"name": "OfferInOrder",
					"path": "include/OfferInOrder",
					"uri": "/include/OfferInOrder"
				},
				{
					"name": "OLordOfKnowledge",
					"path": "include/OLordOfKnowledge",
					"uri": "/include/OLordOfKnowledge"
				},
				{
					"name": "Omonogenees",
					"path": "include/Omonogenees",
					"uri": "/include/Omonogenees"
				},
				{
					"name": "OneIsTheAllHoly",
					"path": "include/OneIsTheAllHoly",
					"uri": "/include/OneIsTheAllHoly"
				},
				{
					"name": "OneIsTheHoly",
					"path": "include/OneIsTheHoly",
					"uri": "/include/OneIsTheHoly"
				},
				{
					"name": "OnTheWayTheySpreadGarments",
					"path": "include/OnTheWayTheySpreadGarments",
					"uri": "/include/OnTheWayTheySpreadGarments"
				},
				{
					"name": "Ontos",
					"path": "include/Ontos",
					"uri": "/include/Ontos"
				},
				{
					"name": "Ordinations",
					"path": "include/Ordinations",
					"uri": "/include/Ordinations"
				},
				{
					"name": "OurFatherGreatFast",
					"path": "include/OurFatherGreatFast",
					"uri": "/include/OurFatherGreatFast"
				},
				{
					"name": "PanotiPanoti",
					"path": "include/PanotiPanoti",
					"uri": "/include/PanotiPanoti"
				},
				{
					"name": "PaulineEpistle",
					"path": "include/PaulineEpistle",
					"uri": "/include/PaulineEpistle"
				},
				{
					"name": "PaulineEpistleConclusion",
					"path": "include/PaulineEpistleConclusion",
					"uri": "/include/PaulineEpistleConclusion"
				},
				{
					"name": "PaulineEpistleGreatResponse",
					"path": "include/PaulineEpistleGreatResponse",
					"uri": "/include/PaulineEpistleGreatResponse"
				},
				{
					"name": "PaulineEpistleIntroduction",
					"path": "include/PaulineEpistleIntroduction",
					"uri": "/include/PaulineEpistleIntroduction"
				},
				{
					"name": "PaulineEpistleResponses",
					"path": "include/PaulineEpistleResponses",
					"uri": "/include/PaulineEpistleResponses"
				},
				{
					"name": "PaulineEpistleStandardResponse",
					"path": "include/PaulineEpistleStandardResponse",
					"uri": "/include/PaulineEpistleStandardResponse"
				},
				{
					"name": "PeaceBeWithAll",
					"path": "include/PeaceBeWithAll",
					"uri": "/include/PeaceBeWithAll"
				},
				{
					"name": "PentecostThirdHourRefrain",
					"path": "include/PentecostThirdHourRefrain",
					"uri": "/include/PentecostThirdHourRefrain"
				},
				{
					"name": "PiEpnevma",
					"path": "include/PiEpnevma",
					"uri": "/include/PiEpnevma"
				},
				{
					"name": "PiEpnevmaPope",
					"path": "include/PiEpnevmaPope",
					"uri": "/include/PiEpnevmaPope"
				},
				{
					"name": "Pijenmisi",
					"path": "include/Pijenmisi",
					"uri": "/include/Pijenmisi"
				},
				{
					"name": "PopeGospelIntro",
					"path": "include/PopeGospelIntro",
					"uri": "/include/PopeGospelIntro"
				},
				{
					"name": "PostEvnotiNaiNan",
					"path": "include/PostEvnotiNaiNan",
					"uri": "/include/PostEvnotiNaiNan"
				},
				{
					"name": "PostLitanyOfTheGospel",
					"path": "include/PostLitanyOfTheGospel",
					"uri": "/include/PostLitanyOfTheGospel"
				},
				{
					"name": "PostProcessionOfTheLambIntro",
					"path": "include/PostProcessionOfTheLambIntro",
					"uri": "/include/PostProcessionOfTheLambIntro"
				},
				{
					"name": "Pouro.1",
					"path": "include/Pouro.1",
					"uri": "/include/Pouro.1"
				},
				{
					"name": "Pouro.2",
					"path": "include/Pouro.2",
					"uri": "/include/Pouro.2"
				},
				{
					"name": "Pouro.3",
					"path": "include/Pouro.3",
					"uri": "/include/Pouro.3"
				},
				{
					"name": "Pouro.4",
					"path": "include/Pouro.4",
					"uri": "/include/Pouro.4"
				},
				{
					"name": "Pouro",
					"path": "include/Pouro",
					"uri": "/include/Pouro"
				},
				{
					"name": "PouroConclusion",
					"path": "include/PouroConclusion",
					"uri": "/include/PouroConclusion"
				},
				{
					"name": "PouroSection",
					"path": "include/PouroSection",
					"uri": "/include/PouroSection"
				},
				{
					"name": "Praxis",
					"path": "include/Praxis",
					"uri": "/include/Praxis"
				},
				{
					"name": "PraxisReading",
					"path": "include/PraxisReading",
					"uri": "/include/PraxisReading"
				},
				{
					"name": "Pray",
					"path": "include/Pray",
					"uri": "/include/Pray"
				},
				{
					"name": "PrayerAfterOurFather",
					"path": "include/PrayerAfterOurFather",
					"uri": "/include/PrayerAfterOurFather"
				},
				{
					"name": "PrayerOfAbsolutionToTheFather",
					"path": "include/PrayerOfAbsolutionToTheFather",
					"uri": "/include/PrayerOfAbsolutionToTheFather"
				},
				{
					"name": "PrayerOfAbsolutionToTheSon",
					"path": "include/PrayerOfAbsolutionToTheSon",
					"uri": "/include/PrayerOfAbsolutionToTheSon"
				},
				{
					"name": "PrayerOfAbsolutionToTheSonContent",
					"path": "include/PrayerOfAbsolutionToTheSonContent",
					"uri": "/include/PrayerOfAbsolutionToTheSonContent"
				},
				{
					"name": "PrayerOfIncenseForPaulineEpistle",
					"path": "include/PrayerOfIncenseForPaulineEpistle",
					"uri": "/include/PrayerOfIncenseForPaulineEpistle"
				},
				{
					"name": "PrayerOfProthesis",
					"path": "include/PrayerOfProthesis",
					"uri": "/include/PrayerOfProthesis"
				},
				{
					"name": "PrayerOfReconciliation",
					"path": "include/PrayerOfReconciliation",
					"uri": "/include/PrayerOfReconciliation"
				},
				{
					"name": "PrayerOfReconciliationResponse",
					"path": "include/PrayerOfReconciliationResponse",
					"uri": "/include/PrayerOfReconciliationResponse"
				},
				{
					"name": "PrayerOfReconciliationStCyril1",
					"path": "include/PrayerOfReconciliationStCyril1",
					"uri": "/include/PrayerOfReconciliationStCyril1"
				},
				{
					"name": "PrayerOfReconciliationStCyril2",
					"path": "include/PrayerOfReconciliationStCyril2",
					"uri": "/include/PrayerOfReconciliationStCyril2"
				},
				{
					"name": "PrayerOfSubmissionToTheFather",
					"path": "include/PrayerOfSubmissionToTheFather",
					"uri": "/include/PrayerOfSubmissionToTheFather"
				},
				{
					"name": "PrayerOfSubmissionToTheSon",
					"path": "include/PrayerOfSubmissionToTheSon",
					"uri": "/include/PrayerOfSubmissionToTheSon"
				},
				{
					"name": "PrayerOfTheVeil",
					"path": "include/PrayerOfTheVeil",
					"uri": "/include/PrayerOfTheVeil"
				},
				{
					"name": "PrayerOfVeilIntroComment",
					"path": "include/PrayerOfVeilIntroComment",
					"uri": "/include/PrayerOfVeilIntroComment"
				},
				{
					"name": "PreHymnOfTheResurrection",
					"path": "include/PreHymnOfTheResurrection",
					"uri": "/include/PreHymnOfTheResurrection"
				},
				{
					"name": "ProcessionOfIncense",
					"path": "include/ProcessionOfIncense",
					"uri": "/include/ProcessionOfIncense"
				},
				{
					"name": "ProcessionOfIncenseDuringDoxologies",
					"path": "include/ProcessionOfIncenseDuringDoxologies",
					"uri": "/include/ProcessionOfIncenseDuringDoxologies"
				},
				{
					"name": "ProcessionOfIncenseSilentPart",
					"path": "include/ProcessionOfIncenseSilentPart",
					"uri": "/include/ProcessionOfIncenseSilentPart"
				},
				{
					"name": "ProcessionOfIncense_Matins",
					"path": "include/ProcessionOfIncense_Matins",
					"uri": "/include/ProcessionOfIncense_Matins"
				},
				{
					"name": "ProcessionOfIncense_Vespers",
					"path": "include/ProcessionOfIncense_Vespers",
					"uri": "/include/ProcessionOfIncense_Vespers"
				},
				{
					"name": "ProcessionOfTheCross",
					"path": "include/ProcessionOfTheCross",
					"uri": "/include/ProcessionOfTheCross"
				},
				{
					"name": "ProcessionOfTheCrossIntro",
					"path": "include/ProcessionOfTheCrossIntro",
					"uri": "/include/ProcessionOfTheCrossIntro"
				},
				{
					"name": "ProcessionOfTheLambIntro.1",
					"path": "include/ProcessionOfTheLambIntro.1",
					"uri": "/include/ProcessionOfTheLambIntro.1"
				},
				{
					"name": "ProcessionOfTheLambIntro",
					"path": "include/ProcessionOfTheLambIntro",
					"uri": "/include/ProcessionOfTheLambIntro"
				},
				{
					"name": "ProcessionOfTheResurrection",
					"path": "include/ProcessionOfTheResurrection",
					"uri": "/include/ProcessionOfTheResurrection"
				},
				{
					"name": "ProcessionOfTheResurrection_SilentPrayer",
					"path": "include/ProcessionOfTheResurrection_SilentPrayer",
					"uri": "/include/ProcessionOfTheResurrection_SilentPrayer"
				},
				{
					"name": "Psalm114Content",
					"path": "include/Psalm114Content",
					"uri": "/include/Psalm114Content"
				},
				{
					"name": "Psalm151Chant",
					"path": "include/Psalm151Chant",
					"uri": "/include/Psalm151Chant"
				},
				{
					"name": "Psalm50AndGloryBeToOurGod",
					"path": "include/Psalm50AndGloryBeToOurGod",
					"uri": "/include/Psalm50AndGloryBeToOurGod"
				},
				{
					"name": "RememberMe.1",
					"path": "include/RememberMe.1",
					"uri": "/include/RememberMe.1"
				},
				{
					"name": "RememberMe.2",
					"path": "include/RememberMe.2",
					"uri": "/include/RememberMe.2"
				},
				{
					"name": "RememberMe.3",
					"path": "include/RememberMe.3",
					"uri": "/include/RememberMe.3"
				},
				{
					"name": "ResurrectionReenactment",
					"path": "include/ResurrectionReenactment",
					"uri": "/include/ResurrectionReenactment"
				},
				{
					"name": "SavedAmen",
					"path": "include/SavedAmen",
					"uri": "/include/SavedAmen"
				},
				{
					"name": "SavedAmenMedium",
					"path": "include/SavedAmenMedium",
					"uri": "/include/SavedAmenMedium"
				},
				{
					"name": "SavedAmenShort",
					"path": "include/SavedAmenShort",
					"uri": "/include/SavedAmenShort"
				},
				{
					"name": "SevenGreatLitanies",
					"path": "include/SevenGreatLitanies",
					"uri": "/include/SevenGreatLitanies"
				},
				{
					"name": "ShallComeUpon",
					"path": "include/ShallComeUpon",
					"uri": "/include/ShallComeUpon"
				},
				{
					"name": "ShereMaria",
					"path": "include/ShereMaria",
					"uri": "/include/ShereMaria"
				},
				{
					"name": "ShortBlessing",
					"path": "include/ShortBlessing",
					"uri": "/include/ShortBlessing"
				},
				{
					"name": "ShortBlessingToEnd",
					"path": "include/ShortBlessingToEnd",
					"uri": "/include/ShortBlessingToEnd"
				},
				{
					"name": "ShortLiturgyLitanies",
					"path": "include/ShortLiturgyLitanies",
					"uri": "/include/ShortLiturgyLitanies"
				},
				{
					"name": "SilentPrayerCatholicEpistle",
					"path": "include/SilentPrayerCatholicEpistle",
					"uri": "/include/SilentPrayerCatholicEpistle"
				},
				{
					"name": "SilentPrayerGospel.1",
					"path": "include/SilentPrayerGospel.1",
					"uri": "/include/SilentPrayerGospel.1"
				},
				{
					"name": "SilentPrayerGospel.10",
					"path": "include/SilentPrayerGospel.10",
					"uri": "/include/SilentPrayerGospel.10"
				},
				{
					"name": "SilentPrayerGospel.11",
					"path": "include/SilentPrayerGospel.11",
					"uri": "/include/SilentPrayerGospel.11"
				},
				{
					"name": "SilentPrayerGospel.12",
					"path": "include/SilentPrayerGospel.12",
					"uri": "/include/SilentPrayerGospel.12"
				},
				{
					"name": "SilentPrayerGospel.13",
					"path": "include/SilentPrayerGospel.13",
					"uri": "/include/SilentPrayerGospel.13"
				},
				{
					"name": "SilentPrayerGospel.2",
					"path": "include/SilentPrayerGospel.2",
					"uri": "/include/SilentPrayerGospel.2"
				},
				{
					"name": "SilentPrayerGospel.3",
					"path": "include/SilentPrayerGospel.3",
					"uri": "/include/SilentPrayerGospel.3"
				},
				{
					"name": "SilentPrayerGospel.4",
					"path": "include/SilentPrayerGospel.4",
					"uri": "/include/SilentPrayerGospel.4"
				},
				{
					"name": "SilentPrayerGospel.5",
					"path": "include/SilentPrayerGospel.5",
					"uri": "/include/SilentPrayerGospel.5"
				},
				{
					"name": "SilentPrayerGospel.6",
					"path": "include/SilentPrayerGospel.6",
					"uri": "/include/SilentPrayerGospel.6"
				},
				{
					"name": "SilentPrayerGospel.7",
					"path": "include/SilentPrayerGospel.7",
					"uri": "/include/SilentPrayerGospel.7"
				},
				{
					"name": "SilentPrayerGospel.8",
					"path": "include/SilentPrayerGospel.8",
					"uri": "/include/SilentPrayerGospel.8"
				},
				{
					"name": "SilentPrayerGospel.9",
					"path": "include/SilentPrayerGospel.9",
					"uri": "/include/SilentPrayerGospel.9"
				},
				{
					"name": "SilentPrayerGospel",
					"path": "include/SilentPrayerGospel",
					"uri": "/include/SilentPrayerGospel"
				},
				{
					"name": "SilentPrayerPraxisBaptism",
					"path": "include/SilentPrayerPraxisBaptism",
					"uri": "/include/SilentPrayerPraxisBaptism"
				},
				{
					"name": "SilentPrayerPraxisPart",
					"path": "include/SilentPrayerPraxisPart",
					"uri": "/include/SilentPrayerPraxisPart"
				},
				{
					"name": "SilentPriestConclusion",
					"path": "include/SilentPriestConclusion",
					"uri": "/include/SilentPriestConclusion"
				},
				{
					"name": "SilentPriestConclusionEnding",
					"path": "include/SilentPriestConclusionEnding",
					"uri": "/include/SilentPriestConclusionEnding"
				},
				{
					"name": "SilentPriestOfferingPreparation",
					"path": "include/SilentPriestOfferingPreparation",
					"uri": "/include/SilentPriestOfferingPreparation"
				},
				{
					"name": "SilentPriestOfferingPreparationPart",
					"path": "include/SilentPriestOfferingPreparationPart",
					"uri": "/include/SilentPriestOfferingPreparationPart"
				},
				{
					"name": "SilentPriestProcession",
					"path": "include/SilentPriestProcession",
					"uri": "/include/SilentPriestProcession"
				},
				{
					"name": "SilentPriestProcessionIntroduction",
					"path": "include/SilentPriestProcessionIntroduction",
					"uri": "/include/SilentPriestProcessionIntroduction"
				},
				{
					"name": "SilentPriestProcessionIntroduction1",
					"path": "include/SilentPriestProcessionIntroduction1",
					"uri": "/include/SilentPriestProcessionIntroduction1"
				},
				{
					"name": "SilentPriestProcessionIntroIntro",
					"path": "include/SilentPriestProcessionIntroIntro",
					"uri": "/include/SilentPriestProcessionIntroIntro"
				},
				{
					"name": "SilentPriestProcession_Matins",
					"path": "include/SilentPriestProcession_Matins",
					"uri": "/include/SilentPriestProcession_Matins"
				},
				{
					"name": "SilentPriestProcession_Vespers",
					"path": "include/SilentPriestProcession_Vespers",
					"uri": "/include/SilentPriestProcession_Vespers"
				},
				{
					"name": "StandardPachoicConclusion",
					"path": "include/StandardPachoicConclusion",
					"uri": "/include/StandardPachoicConclusion"
				},
				{
					"name": "StandardPrayerIntro",
					"path": "include/StandardPrayerIntro",
					"uri": "/include/StandardPrayerIntro"
				},
				{
					"name": "StartOfService.1",
					"path": "include/StartOfService.1",
					"uri": "/include/StartOfService.1"
				},
				{
					"name": "StartOfService",
					"path": "include/StartOfService",
					"uri": "/include/StartOfService"
				},
				{
					"name": "Synaxarion",
					"path": "include/Synaxarion",
					"uri": "/include/Synaxarion"
				},
				{
					"name": "Taishoree",
					"path": "include/Taishoree",
					"uri": "/include/Taishoree"
				},
				{
					"name": "TaishoreeContents",
					"path": "include/TaishoreeContents",
					"uri": "/include/TaishoreeContents"
				},
				{
					"name": "Teeshoree",
					"path": "include/Teeshoree",
					"uri": "/include/Teeshoree"
				},
				{
					"name": "TenichiciEmo",
					"path": "include/TenichiciEmo",
					"uri": "/include/TenichiciEmo"
				},
				{
					"name": "TenouwstSeasonalResponse",
					"path": "include/TenouwstSeasonalResponse",
					"uri": "/include/TenouwstSeasonalResponse"
				},
				{
					"name": "TenouwstSeasonalResponseShort",
					"path": "include/TenouwstSeasonalResponseShort",
					"uri": "/include/TenouwstSeasonalResponseShort"
				},
				{
					"name": "TentiNem",
					"path": "include/TentiNem",
					"uri": "/include/TentiNem"
				},
				{
					"name": "ThanksgivingPrayer",
					"path": "include/ThanksgivingPrayer",
					"uri": "/include/ThanksgivingPrayer"
				},
				{
					"name": "ThanksgivingPrayer.Priest.1",
					"path": "include/ThanksgivingPrayer.Priest.1",
					"uri": "/include/ThanksgivingPrayer.Priest.1"
				},
				{
					"name": "ThanksgivingPrayer.Priest.2",
					"path": "include/ThanksgivingPrayer.Priest.2",
					"uri": "/include/ThanksgivingPrayer.Priest.2"
				},
				{
					"name": "ThanksgivingPrayer.Priest.3",
					"path": "include/ThanksgivingPrayer.Priest.3",
					"uri": "/include/ThanksgivingPrayer.Priest.3"
				},
				{
					"name": "ThanksgivingPrayer.Priest.4",
					"path": "include/ThanksgivingPrayer.Priest.4",
					"uri": "/include/ThanksgivingPrayer.Priest.4"
				},
				{
					"name": "ThanksgivingPrayer_Bishop",
					"path": "include/ThanksgivingPrayer_Bishop",
					"uri": "/include/ThanksgivingPrayer_Bishop"
				},
				{
					"name": "ThatChristOurGod",
					"path": "include/ThatChristOurGod",
					"uri": "/include/ThatChristOurGod"
				},
				{
					"name": "TheLoveOfGodTheFather",
					"path": "include/TheLoveOfGodTheFather",
					"uri": "/include/TheLoveOfGodTheFather"
				},
				{
					"name": "TheWorshipOfIdols",
					"path": "include/TheWorshipOfIdols",
					"uri": "/include/TheWorshipOfIdols"
				},
				{
					"name": "ThreeAbsolutions",
					"path": "include/ThreeAbsolutions",
					"uri": "/include/ThreeAbsolutions"
				},
				{
					"name": "ThreeGreatLitanies",
					"path": "include/ThreeGreatLitanies",
					"uri": "/include/ThreeGreatLitanies"
				},
				{
					"name": "TodayTheSayingsAreFulfilled",
					"path": "include/TodayTheSayingsAreFulfilled",
					"uri": "/include/TodayTheSayingsAreFulfilled"
				},
				{
					"name": "ToMakario",
					"path": "include/ToMakario",
					"uri": "/include/ToMakario"
				},
				{
					"name": "VespersNotPrayedComment",
					"path": "include/VespersNotPrayedComment",
					"uri": "/include/VespersNotPrayedComment"
				},
				{
					"name": "WhereCanIGo",
					"path": "include/WhereCanIGo",
					"uri": "/include/WhereCanIGo"
				},
				{
					"name": "WorshipGodInFear",
					"path": "include/WorshipGodInFear",
					"uri": "/include/WorshipGodInFear"
				},
				{
					"name": "YeaOLord",
					"path": "include/YeaOLord",
					"uri": "/include/YeaOLord"
				},
				{
					"name": "YeaOLordContents",
					"path": "include/YeaOLordContents",
					"uri": "/include/YeaOLordContents"
				},
				{
					"name": "YouShallSprinkle",
					"path": "include/YouShallSprinkle",
					"uri": "/include/YouShallSprinkle"
				},
				{
					"name": "YouShallSprinkleIntroduction",
					"path": "include/YouShallSprinkleIntroduction",
					"uri": "/include/YouShallSprinkleIntroduction"
				},
				{
					"name": "YouWhoAreSeated",
					"path": "include/YouWhoAreSeated",
					"uri": "/include/YouWhoAreSeated"
				}
			],
			"uri": "/include",
			"hidden": true
		}
	];

	return {
		getData,

		getItem,
		getItemByPath,
		getParentItem,
	}

})();
