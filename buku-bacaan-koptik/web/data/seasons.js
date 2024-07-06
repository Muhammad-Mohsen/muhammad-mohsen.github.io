export const Seasons = (() => {

	const XML = `<?xml version="1.0" encoding="utf-8"?>
	<Seasons>
		<Season occasion="DAY_AFTER_NATIVITY" id="DayAfterNativity" name="2nd Day of the Nativity" displayable="true" selectable="true" />
		<Season occasion="DAY_AFTER_THEOPHANY" id="DayAfterTheophany" name="2nd Day of the Theophany" displayable="true" selectable="true" />
		<Season occasion="DAY_AFTER_RESURRECTION" id="DayAfterResurrection" name="2nd Day of the Resurrection" displayable="true" selectable="true" />
		<Season id="Feasts" name="Feasts">
			<Season id="FeastsOfTheLordPeriods">
				<Season id="MinorFeastsOfTheLord">
					<Season occasion="CIRCUMCISION" id="Circumcision" name="Circumcision" selectable="true" displayable="true"/>
					<Season occasion="PRESENTATION_IN_TEMPLE" id="PresentationInTemple" name="Presentation of the Lord Christ in the Temple" selectable="true" displayable="true"/>
					<Season occasion="ENTRANCE_LORD_CHRIST" id="EntranceOfTheLordChrist" name="Entrance of the Lord Christ into the Land of Egypt" selectable="true" displayable="true"/>
					<Season occasion="WEDDING_CANA" id="WeddingCana" name="Wedding at Cana of Galilee" selectable="true" displayable="true"/>
					<Season occasion="TRANSFIGURATION" id="Transfiguration" name="Transfiguration" selectable="true" displayable="true"/>
					<Season occasion="COVENANT_THURSDAY" id="CovenantThursday" name="Covenant Thursday" selectable="true" displayable="true"/>
					<Season occasion="THOMAS_SUNDAY" id="ThomasSunday" name="Thomas Sunday" selectable="true" displayable="true"/>
				</Season>
				<Season id="MajorFeastsOfTheLordPeriods" name="Feasts of the Lord Periods">

					<!-- ??? -->
					<Season id="Joyful29thOfTheMonthRaw" name="Joyful 29th of the Month" displayable="true"/>
					<Season id="Joyful29thOfTheMonth" name="Joyful 29th of the Month"/>

					<Season id="MajorFeastsOfTheLord" name="Feasts of the Lord">
						<Season occasion="ANNUNCIATION" id="Annunciation" name="Annunciation" selectable="true" displayable="true"/>
						<Season occasion="NATIVITY_CELEBRATE" id="Nativity" name="Nativity" selectable="true" displayable="true"/>
						<Season occasion="THEOPHANY" id="Theophany" name="Theophany" selectable="true" displayable="true"/>
						<Season occasion="HOSANNA_SUNDAY" id="HosannaSunday" name="Hosanna Sunday" selectable="true" displayable="true"/>
						<Season occasion="RESURRECTION" id="Resurrection" name="Resurrection" selectable="true" displayable="true"/>
						<Season occasion="ASCENSION" id="Ascension" name="Ascension" selectable="true" displayable="true"/>
						<Season occasion="PENTECOST_FEAST" id="Pentecost" name="Pentecost" selectable="true" displayable="true"/>
					</Season>
					<Season id="NativityPeriod" name="Nativity Period" displayable="true"/>
					<Season id="TheophanyPeriod" name="Theophany Period" displayable="true"/>
					<Season occasion="PENTECOST_SUNDAY_2" id="PentecostSunday2" name="2nd Sunday of Pentecost" selectable="true" displayable="true"/>
					<Season occasion="PENTECOST_SUNDAY_3" id="PentecostSunday3" name="3rd Sunday of Pentecost" selectable="true" displayable="true"/>
					<Season occasion="PENTECOST_SUNDAY_4" id="PentecostSunday4" name="4th Sunday of Pentecost" selectable="true" displayable="true"/>
					<Season occasion="PENTECOST_SUNDAY_5" id="PentecostSunday5" name="5th Sunday of Pentecost" selectable="true" displayable="true"/>
					<Season occasion="PENTECOST_SUNDAY_6" id="PentecostSunday6" name="6th Sunday of Pentecost" selectable="true" displayable="true"/>

					<!-- ??? -->
					<Season occasion="" id="PentecostWeek1" name="1st Week of Pentecost" selectable="false" displayable="true"/>
					<Season occasion="" id="PentecostWeek2" name="2nd Week of Pentecost" selectable="false" displayable="true"/>
					<Season occasion="" id="PentecostWeek3" name="3rd Week of Pentecost" selectable="false" displayable="true"/>
					<Season occasion="" id="PentecostWeek4" name="4th Week of Pentecost" selectable="false" displayable="true"/>
					<Season occasion="" id="PentecostWeek5" name="5th Week of Pentecost" selectable="false" displayable="true"/>
					<Season occasion="" id="PentecostWeek6" name="6th Week of Pentecost" selectable="false" displayable="true"/>
					<Season occasion="" id="PentecostWeek7" name="7th Week of Pentecost" selectable="false" displayable="true"/>
					<Season occasion="" id="PentecostPeriod" name="Pentecost Period">
						<Season id="PreAscensionPentecostPeriod" name="Pentecost before Ascension"/>
						<Season id="PostAscensionPentecostPeriod" name="Pentecost after Ascension"/>
						<Season id="Pentecost" name="Pentecost" selectable="true" displayable="true"/>
					</Season>
				</Season>
			</Season>
			<Season id="FeastOfTheCross" name="Feast of the Cross" selectable="true" displayable="true"/>
			<Season id="ThooutFeastOfTheCross1" name="Feast of the Cross" displayable="true"/>
			<Season id="ThooutFeastOfTheCross2" name="Feast of the Cross" displayable="true"/>
			<Season id="ThooutFeastOfTheCross3" name="Feast of the Cross" displayable="true"/>
			<Season id="ParemhotepFeastOfTheCross" name="Feast of the Cross" selectable="true" displayable="true"/>
			<Season id="CopticNewYear" name="Coptic New Year" selectable="true" displayable="true"/>
			<Season id="CopticNewYearPeriod" name="Coptic New Year Period" displayable="true"/>
		</Season>
		<Season id="AnnunciationRaw" name="Annunciation Raw" selectable="false" displayable="false"/>
		<Season id="ApostlesFeast" name="Apostles' Feast" selectable="true" displayable="true"/>
		<Season id="GreatFriday" name="Great Friday" selectable="true" displayable="true"/>
		<Season id="JoyousSaturday" name="Joyous Saturday" selectable="true" displayable="true"/>
		<Season id="ApostlesFastToLastDayOfHathor" name="Apostles Fast to the Last day of Hathor"/>
		<Season id="FirstSundayOfThoout" name="1st Sunday of Thoout" displayable="true"/>
		<Season id="SecondSundayOfThoout" name="2nd Sunday of Thoout" displayable="true"/>
		<Season id="ThirdSundayOfThoout" name="3rd Sunday of Thoout" displayable="true"/>
		<Season id="FourthSundayOfThoout" name="4th Sunday of Thoout" displayable="true"/>
		<Season id="FirstSundayOfNesi" name="1st Sunday of Nesi" displayable="true"/>
		<Season id="FirstSundayOfKoiahk" name="1st Sunday of Koiahk" selectable="true" displayable="true"/>
		<Season id="SecondSundayOfKoiahk" name="2nd Sunday of Koiahk" selectable="true" displayable="true"/>
		<Season id="ThirdSundayOfKoiahk" name="3rd Sunday of Koiahk" selectable="true" displayable="true"/>
		<Season id="FourthSundayOfKoiahk" name="4th Sunday of Koiahk" selectable="true" displayable="true"/>
		<Season id="KoiahkSeason" name="Koiahk Season">
			<Season id="FirstWeekOfKoiahk" name="1st Week of Koiahk" displayable="true"/>
			<Season id="SecondWeekOfKoiahk" name="2nd Week of Koiahk" displayable="true"/>
			<Season id="ThirdWeekOfKoiahk" name="3rd Week of Koiahk" displayable="true"/>
			<Season id="FourthWeekOfKoiahk" name="4th Week of Koiahk" displayable="true"/>
		</Season>
		<Season id="NativityParamounStart" name="Nativity Paramoun Start" selectable="false" displayable="false"/>
		<Season id="NativityParamoun" name="Nativity Paramoun" selectable="true" displayable="true"/>
		<Season id="TheophanyParamounStart" name="Theophany Paramoun Start" selectable="false" displayable="false"/>
		<Season id="TheophanyParamoun" name="Theophany Paramoun" selectable="true" displayable="true"/>
		<Season id="MajorNightFeasts" name="Major Night Feasts"/>
		<Season id="JonahPassover" name="Jonah's Passover" selectable="true" displayable="true"/>
		<Season id="LastFridayOfGreatFast" name="Last Friday of Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastSaturday0" name="Saturday before the Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastSunday0" name="Sunday before the Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastSunday1" name="1st Sunday of Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastSunday2" name="2nd Sunday of Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastSunday3" name="3rd Sunday of Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastSunday4" name="4th Sunday of Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastSunday5" name="5th Sunday of Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastSunday6" name="6th Sunday of Great Fast" selectable="true" displayable="true"/>
		<Season id="GreatFastWeek1" name="1st Week of Great Fast" selectable="false" displayable="true"/>
		<Season id="GreatFastWeek2" name="2nd Week of Great Fast" selectable="false" displayable="true"/>
		<Season id="GreatFastWeek3" name="3rd Week of Great Fast" selectable="false" displayable="true"/>
		<Season id="GreatFastWeek4" name="4th Week of Great Fast" selectable="false" displayable="true"/>
		<Season id="GreatFastWeek5" name="5th Week of Great Fast" selectable="false" displayable="true"/>
		<Season id="GreatFastWeek6" name="6th Week of Great Fast" selectable="false" displayable="true"/>
		<Season id="GreatFastWeek7" name="7th Week of Great Fast" selectable="false" displayable="true"/>
		<Season id="Fasts">
			<Season id="GreatFast" name="Great Fast" displayable="false"/>
			<Season id="NativityFast" name="Nativity Fast" displayable="true"/>
			<Season id="JonahFast" name="Jonah's Fast" selectable="true" displayable="true"/>
			<Season id="PaschaWeek" name="Holy Pascha Week" displayable="true"/>
			<Season id="ApostlesFast" name="Apostles' Fast" displayable="true"/>
			<Season id="StMaryFast" name="St. Mary's Fast" displayable="true"/>
			<Season id="WeekdayFastingDays" name="Weekday Fasting Days"/>
			<Season id="LazarusSaturday" name="Lazarus Saturday" selectable="true" displayable="true"/>
		</Season>
		<Season id="AdamDays" name="Adam Days"/>
		<Season id="WatosDays" name="Watos Days"/>
		<Season id="FuneralTune" name="Funeral Tune"/>
		<Season id="5thSundayOfFirstSixMonths" name="5th Sunday of First Six Months of Coptic Year"/>
		<Season id="5thSundayOfLastSixMonths" name="5th Sunday of Last Six Months of Coptic Year"/>
		<Season id="AssumptionStMary" name="Assumption of the Body of St. Mary" selectable="true" displayable="true"/>
		<Season id="Weekdays" name="Weekdays">
			<Season id="Mondays" name="Mondays"/>
			<Season id="Tuesdays" name="Tuesdays"/>
			<Season id="Wednesdays" name="Wednesdays"/>
			<Season id="Thursdays" name="Thursdays"/>
			<Season id="Fridays" name="Fridays"/>
		</Season>
		<Season id="TodayMondays" name="Mondays"/>
		<Season id="TodayTuesdays" name="Tuesdays"/>
		<Season id="TodayWednesdays" name="Wednesdays"/>
		<Season id="TodayThursdays" name="Thursdays"/>
		<Season id="TodayFridays" name="Fridays"/>
		<Season id="TodaySaturdays" name="Saturdays"/>
		<Season id="TodaySundays" name="Sundays"/>
		<Season id="Weekend" name="Weekend">
			<Season id="Saturdays" name="Saturdays"/>
			<Season id="Sundays" name="Sundays"/>
		</Season>
		<Season id="CopticMonths" name="Coptic Months">
			<Season id="Thoout" name="Thoout"/>
			<Season id="Paope" name="Paope"/>
			<Season id="Hathor" name="Hathor"/>
			<Season id="Koiahk" name="Koiahk"/>
			<Season id="Tobe" name="Tobe"/>
			<Season id="Meshir" name="Meshir"/>
			<Season id="Paremhotep" name="Paremhotep"/>
			<Season id="Parmoute" name="Parmoute"/>
			<Season id="Pashons" name="Pashons"/>
			<Season id="Paone" name="Paone"/>
			<Season id="Epep" name="Epep"/>
			<Season id="Mesore" name="Mesore"/>
			<Season id="Nesi" name="Nesi"/>
		</Season>
		<Season id="Other" name="Other"/>
		<Season id="DisplayNonCustomaryPrayers" name="Display Non-Customary Prayers"/>
		<Season id="FifthSunday" name="Fifth Sunday of the Coptic Month"/>
		<Season id="SeasonOfWaters" name="Season of the Waters"/>
		<Season id="SeasonOfHerbs" name="Season of the Herbs"/>
		<Season id="SeasonOfAirAndFruits" name="Season of the Air and Fruits"/>
		<Season id="HosannaSundayFirstLiturgyGospel" name="Hosanna Sunday First Liturgy Gospel"/>
		<Season id="StMary" name="St. Mary">
			<Season id="StMaryCommemoration" name="St. Mary Commemoration"/>
			<Season id="StMaryFeast" name="St. Mary Feast"/>
			<Season id="StMaryFast" name="St. Mary Fast"/>
		</Season>
		<Season id="TodayNativityParamoun" name="Today Nativity Paramoun"/>
		<Season id="TodayTheophanyParamoun" name="Today Theophany Paramoun"/>


		<Season id="ForceCommentsVisible" name="Force Comments Visible" documentAttribute="true"/>
		<Season id="IgnoreRoles" name="Ignore Roles" documentAttribute="true"/>
		<Season id="IgnoreGroups" name="Ignore Groups" documentAttribute="true"/>
		<Season id="IgnoreCurrentSeason" name="Ignore Current Season" documentAttribute="true"/>
		<Season id="FixedDateDocument" name="Fixed Date Document" documentAttribute="true"/>
		<Season id="ExpandSections" name="Expand Sections" documentAttribute="true"/>
		<Season id="Matins" name="Matins" documentAttribute="true"/>
		<Season id="Vespers" name="Vespers" documentAttribute="true"/>
		<Season id="RaisingOfIncense" name="Raising Of Incense" documentAttribute="true"/>
		<Season id="Liturgy" name="Liturgy" documentAttribute="true"/>
		<Season id="OfferingOfLamb" name="Offering of the Lamb" documentAttribute="true"/>
		<Season id="StBasilLiturgy" name="St. Basil Liturgy" documentAttribute="true"/>
		<Season id="StGregoryLiturgy" name="St. Gregory Liturgy" documentAttribute="true"/>
		<Season id="StCyrilLiturgy" name="St. Cyril Liturgy" documentAttribute="true"/>
		<Season id="VesperPraises" name="Vesper Praises" documentAttribute="true"/>
		<Season id="MidnightPraises" name="Midnight Praises" documentAttribute="true"/>
		<Season id="FuneralPrayer" name="Funeral Prayer" documentAttribute="true"/>
		<Season id="FuneralMen" name="Funeral Men" documentAttribute="true"/>
		<Season id="FuneralWomen" name="Funeral Women" documentAttribute="true"/>
		<Season id="FuneralWomenDelivery" name="Funeral Women Delivery" documentAttribute="true"/>
		<Season id="FuneralBoys" name="Funeral Boys" documentAttribute="true"/>
		<Season id="FuneralGirls" name="Funeral Girls" documentAttribute="true"/>
		<Season id="FuneralDeacons" name="Funeral Deacons" documentAttribute="true"/>
		<Season id="FuneralPriests" name="Funeral Priests" documentAttribute="true"/>
		<Season id="FuneralBishops" name="Funeral Bishops" documentAttribute="true"/>
		<Season id="FuneralMonkPriests" name="Funeral Monk Priests" documentAttribute="true"/>
		<Season id="FuneralMonks" name="Funeral Monks" documentAttribute="true"/>
		<Season id="FuneralNuns" name="Funeral Nuns" documentAttribute="true"/>
		<Season id="FuneralMemorial" name="Funeral Memorial" documentAttribute="true"/>
		<Season id="GeneralFuneralPrayer" name="General Funeral Prayer" documentAttribute="true"/>
		<Season id="Baptism" name="Baptism" documentAttribute="true"/>
		<Season id="AbsolutionOfWoman" name="Absolution of the Woman" documentAttribute="true"/>
		<Season id="ConsecrationOfWaters" name="Consecration of the Waters" documentAttribute="true"/>
		<Season id="BathingPrayer" name="Bathing Prayer" documentAttribute="true"/>
		<Season id="LoosingTheGirdle" name="Loosing the Girdle" documentAttribute="true"/>
		<Season id="AbsolutionOfWomanBoy" name="Absolution of the Woman (Boy)" documentAttribute="true"/>
		<Season id="AbsolutionOfWomanGirl" name="Absolution of the Woman (Girl)" documentAttribute="true"/>
		<Season id="Unction" name="Unction of the Sick" documentAttribute="true"/>
		<Season id="Unction1" name="Unction of the Sick 1" documentAttribute="true"/>
		<Season id="Unction2" name="Unction of the Sick 2" documentAttribute="true"/>
		<Season id="Unction3" name="Unction of the Sick 3" documentAttribute="true"/>
		<Season id="Unction4" name="Unction of the Sick 4" documentAttribute="true"/>
		<Season id="Unction5" name="Unction of the Sick 5" documentAttribute="true"/>
		<Season id="Unction6" name="Unction of the Sick 6 " documentAttribute="true"/>
		<Season id="Unction7" name="Unction of the Sick 7" documentAttribute="true"/>
		<Season id="PriestsOnly" name="Priests Only" documentAttribute="true"/>
		<Season id="Enthronement" name="Enthronement" documentAttribute="true"/>
		<Season id="Crowning" name="Crowning" documentAttribute="true"/>
		<Season id="SecondMarriage" name="SecondMarriage" documentAttribute="true"/>
		<Season id="Engagement" name="Engagement" documentAttribute="true"/>
		<Season id="LiturgyOfTheWaters" name="Liturgy of the Waters" documentAttribute="true"/>
		<Season id="TheophanyLiturgyOfTheWaters" name="Theophany Liturgy of the Waters" documentAttribute="true"/>
		<Season id="ApostlesFeastLiturgyOfTheWaters" name="Apostles Feast Liturgy of the Waters" documentAttribute="true"/>
		<Season id="PaschaLiturgyOfTheWaters" name="Pascha Liturgy of the Waters" documentAttribute="true"/>
		<Season id="HomeBlessing" name="Home Blessing" documentAttribute="true"/>
		<Season id="Baptistery" name="Baptistery" documentAttribute="true"/>
		<Season id="Cornerstone" name="Cornerstone" documentAttribute="true"/>
		<Season id="Pascha" name="Pascha" documentAttribute="true"/>
		<Season id="SundayPascha" name="Sunday Pascha" documentAttribute="true"/>
		<Season id="FirstProstration" name="First Prostration Prayer" documentAttribute="true"/>
		<Season id="SecondProstration" name="Second Prostration Prayer" documentAttribute="true"/>
		<Season id="ThirdProstration" name="Third Prostration Prayer" documentAttribute="true"/>
		<Season id="Consecration" name="Consecration" documentAttribute="true"/>
		<Season id="ChurchConsecration" name="Church Consecration" documentAttribute="true"/>
		<Season id="ReceptionNewPriest" name="Reception of a New Priest" documentAttribute="true"/>
		<Season id="Ordination" name="Ordination" documentAttribute="true"/>
		<Season id="Agpeya" name="Agpeya" documentAttribute="true"/>
		<Season id="MyronConsecration" name="Myron Consecration" documentAttribute="true"/>
		<Season id="GladnessConsecration" name="Gladness Consecration" documentAttribute="true"/>
		<Season id="MorningPraises" name="Morning Praises" documentAttribute="true"/>
		<Season id="CovenantThursday11thHour" name="Covenant Thursday 11th Hour" documentAttribute="true"/>
		<Season id="AltarConsecration" name="Altar Consecration" documentAttribute="true"/>
		<Season id="MonkOrdination" name="Monk Ordination" documentAttribute="true"/>
		<Season id="NunConsecration" name="Nun Consecration" documentAttribute="true"/>
		<Season id="JoyousSaturdayAttribute" name="JoyousSaturday" documentAttribute="true"/>
	</Seasons>`;

	const DATA = new DOMParser().parseFromString(XML, "text/xml").documentElement;

	// matches getLeafChildren
	function children(id) {
		return DATA.getElementById(id).querySelectorAll('Season').toArray().map(s => s.id);
	}
	function documentAttrSeasons() {
		return DATA.querySelectorAll('[documentAttribute="true"]').toArray().map(s => ({
			id: s.getAttribute('id'),
			name: s.getAttribute('name')
		}));
	}

	return {
		DATA,
		children,
		documentAttrSeasons,
	}

})();
