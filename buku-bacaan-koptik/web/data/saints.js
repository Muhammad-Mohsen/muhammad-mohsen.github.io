// absolutely useless so far
export const Saints = (() => {

	const XML = `<?xml version="1.0" encoding="UTF-8"?>
	<Saints>
		<Saint id="HolyCross" name="Holy Cross">
			<VersesOfCymbals/>
			<Doxology/>
		</Saint>
		<Saint id="StMary" name="St. Mary the Mother of God"/>
		<Saint id="StMaryFeast" name="St. Mary the Mother of God"/>
		<Saint id="ArchangelMichael" name="Archangel Michael">
			<VersesOfCymbals default="true"/>
			<Melody/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="ArchangelGabriel" name="Archangel Gabriel">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="ArchangelRaphael" name="Archangel Raphael">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="ArchangelSuriel" name="Archangel Suriel">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="FourIncorporealCreatures" name="Four Incorporeal Creatures">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="TwentyFourPriests" name="Twenty-Four Priests">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StJosephTheCarpenter" name="St. Joseph the Carpenter">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<Melody/>
			<GospelResponse/>
		</Saint>
		<Saint id="StJohnTheBaptist" name="St. John the Baptist">
			<Melody/>
			<VersesOfCymbals default="true"/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="ChildrenOfBethlehem" name="Children of Bethlehem">
			<Doxology/>
			<GospelResponse/>
		</Saint>
		<Saint id="StPeterAndStPaul" name="St. Peter and St. Paul">
			<Intercessions/>
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
		</Saint>
		<Saint id="StAndrewTheApostle" name="St. Andrew the Apostle">
			<Psali/>
		</Saint>
		<Saint id="StJohnTheEvangelist" name="St. John the Evangelist">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="AnyApostle" name="Any Apostle">
			<Doxology/>
		</Saint>
		<Saint id="StStephen" name="St. Stephen the Archdeacon and Protomartyr">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<Melody/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StPaulTheApostle" name="St. Paul the Apostle">
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
			<Intercessions/>
			<Melody/>
			<PraxisResponse/>
		</Saint>
		<Saint id="StMark" name="St. Mark the Apostle">
			<VersesOfCymbals default="true"/>
			<Doxology default="true"/>
			<Intercessions default="true"/>
			<Melody/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StLukeTheEvangelist" name="St. Luke the Evangelist">
			<Intercessions/>
			<VersesOfCymbals/>
			<Doxology/>
			<PraxisResponse/>
			<GospelResponse/>
			<Melody/>
		</Saint>
		<Saint id="StMaryMagdalene" name="St. Mary Magdalene">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<Melody/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StGeorge" name="St. George Prince of Martyrs">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<PraxisResponse/>
			<Psali/>
		</Saint>
		<Saint id="StTheodoreShotep" name="Prince Theodore the Son of John of Shotep">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
			<Intercessions/>
			<PraxisResponse/>
			<Psali/>
		</Saint>
		<Saint id="StTheodoreAnatolius" name="Prince Theodore Anatolius">
			<Doxology/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StPhilopaterMercurius" name="St. Philopater Mercurius">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
			<Intercessions/>
			<PraxisResponse/>
			<Psali/>
		</Saint>
		<Saint id="StMena" name="St. Mena the Wonderworker">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<PraxisResponse/>
			<Psali/>
		</Saint>
		<Saint id="StApanoub" name="St. Apanoub of Nehis">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StVictor" name="St. Victor Son of Romanus">
			<Doxology/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StApatirAndStIrini" name="St. Apatir and His Sister St. Irini">
			<Psali/>
		</Saint>
		<Saint id="StClaudius" name="St. Claudius Son of Ptolemy">
			<Psali/>
		</Saint>
		<Saint id="StApoli" name="St. Apoli, Son of Justus">
			<Psali/>
		</Saint>
		<Saint id="StEskhyron" name="St. Eskhyron of Callin">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Melody/>
		</Saint>
		<Saint id="StJohnOfHeraclia" name="St. John of Heraclia">
			<Psali/>
		</Saint>
		<Saint id="StAbeFam" name="St. Abe-Fam the Soldier">
			<Psali/>
		</Saint>
		<Saint id="StSergiusAndStBacchus" name="St. Sergius and St. Bacchus">
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StCosmas" name="St. Cosmas and St. Damian, their Brothers and Mother">
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
		</Saint>
		<Saint id="StApakirAndStJohn" name="St. Apakir and St. John">
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StApakirJohnPtolemyPhilip" name="Sts. Apakir, John, Ptolemy, and Philip">
			<Psali/>
		</Saint>
		<Saint id="StSarapamon" name="St. Sarapamon Bishop of Nikios">
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
			<Intercessions/>
			<Psali/>
		</Saint>
		<Saint id="StPisura" name="St. Pisura the Bishop">
			<Psali/>
		</Saint>
		<Saint id="StCastor" name="St. Castor of Bardanuha">
			<Psali/>
		</Saint>
		<Saint id="StBisada" name="St. Bisada the Bishop">
			<Psali/>
		</Saint>
		<Saint id="StDioscorusAndStEsklabius" name="St. Dioscorus and St. Esklabius">
			<Psali/>
		</Saint>
		<Saint id="StMaurice" name="St. Maurice">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StPhilotheus" name="St. Philotheus">
			<Psali/>
		</Saint>
		<Saint id="StIsiAndStThecla" name="St. Isi and St. Thecla His Sister">
			<Psali/>
		</Saint>
		<Saint id="StGeorgeTheZahimian" name="St. George the Zahimian">
			<Doxology/>
			<GospelResponse/>
		</Saint>
		<Saint id="StJuliusOfEkbehs" name="St. Julius of Ekbehs">
			<Melody/>
		</Saint>
		<Saint id="StPeterSealOfTheMartyrs" name="St. Peter the Seal of the Martyrs">
			<Doxology/>
			<GospelResponse/>
		</Saint>
		<Saint id="StDemiana" name="St. Demiana">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StDolagy" name="St. Dolagy"></Saint>
		<Saint id="StBarbara" name="St. Barbara">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<Melody/>
			<Psali/>
		</Saint>
		<Saint id="StJuliana" name="St. Juliana">
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
		</Saint>
		<Saint id="StMarina" name="St. Marina the Martyr">
			<VersesOfCymbals/>
			<Doxology/>
			<PraxisResponse/>
			<GospelResponse/>
			<Melody/>
			<Psali/>
		</Saint>
		<Saint id="StRebecca" name="St. Rebecca and Her Five Children">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StCatherine" name="St. Catherine of Alexandria">
			<VersesOfCymbals/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StCyprianAndStJustina" name="St. Cyprian and St. Justina">
			<Melody/>
		</Saint>
		<Saint id="FortyNineMartyrs" name="Forty-Nine Martyrs and Elders of Scetis">
			<Psali/>
		</Saint>
		<Saint id="MartyrsOfAkmim" name="Martyrs of Akmim">
			<Intercessions/>
		</Saint>
		<Saint id="MartyrsOfFayoum" name="Martyrs of Fayoum"/>
		<Saint id="AllMartyrs" name="All Martyrs">
			<Doxology/>
		</Saint>
		<Saint id="StAnthony" name="St. Anthony the Great">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StPaulTheHermit" name="St. Paul the Hermit">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StThomasTheHermit" name="St. Thomas the Hermit">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StMacariusTheGreat" name="St. Macarius the Great">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StMacariusOfAlexandria" name="St. Macarius of Alexandria">
			<VersesOfCymbals/>
			<Doxology/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StMacariusOfEdkow" name="St. Macarius Bishop of Edkow">
			<VersesOfCymbals/>
			<Doxology/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StJohnTheShort" name="St. John the Short">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
		</Saint>
		<Saint id="StPishoyAndStPaulOfTammah" name="St. Pishoy and St. Paul of Tammah">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<PraxisResponse/>
		</Saint>
		<Saint id="StArsenius" name="St. Arsenius the Teacher of the Kings">
			<Doxology/>
		</Saint>
		<Saint id="StMaximusAndStDometius" name="St. Maximus and St. Dometius">
			<Melody/>
			<Psali/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
		</Saint>
		<Saint id="StMoses" name="St. Moses the Strong">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<GospelResponse/>
			<Intercessions/>
			<PraxisResponse/>
			<Psali/>
		</Saint>
		<Saint id="StJohnKame" name="St. John Kame">
			<Doxology/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StPachomAndStTheodore" name="St. Pachom and St. Theodore">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<PraxisResponse/>
			<Psali/>
		</Saint>
		<Saint id="StMisael" name="St. Misael the Anchorite">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StShenuteTheArchimandrite" name="St. Shenute the Archimandrite">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StBesa" name="St. Besa">
			<VersesOfCymbals/>
			<Doxology/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StSamuelTheConfessor" name="St. Samuel the Confessor">
			<Melody/>
			<Doxology/>
			<GospelResponse/>
		</Saint>
		<Saint id="StNopher" name="St. Nopher the Anchorite">
			<Melody/>
		</Saint>
		<Saint id="KingDavid" name="King David the Prophet">
			<Intercessions/>
			<GospelResponse/>
		</Saint>
		<Saint id="StKaras" name="St. Karas the Anchorite">
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<Melody/>
		</Saint>
		<Saint id="StApolloAndStApip" name="St. Apollo and St. Apip">
			<Psali/>
		</Saint>
		<Saint id="StParsoumaTheNaked" name="St. Parsouma the Naked">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StRoweis" name="St. Roweis (Teji)">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StMarkAbbaAnthony" name="St. Mark Abba Antony">
			<Psali/>
		</Saint>
		<Saint id="StBashouna" name="St. Bashouna the Monk and Martyr">
			<Doxology/>
		</Saint>
		<Saint id="StAthanasius" name="St. Athanasius the Apostolic">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StGregoryTheTheologian" name="St. Gregory the Theologian">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StSeverus" name="St. Severus Patriarch of Antioch">
			<Doxology/>
			<GospelResponse/>
		</Saint>
		<Saint id="StCyrilOfAlexandria" name="St. Cyril of Alexandria">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StTaklaHaymanout" name="St. Takla Haymanout">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
			<Psali/>
		</Saint>
		<Saint id="StPistavros" name="St. Pistavros">
			<Psali/>
		</Saint>
		<Saint id="StVerena" name="St. Verena">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
			<Melody/>
		</Saint>
		<Saint id="StMonicaAndStAugustine" name="St. Monica and St. Augustine">
			<VersesOfCymbals/>
			<Intercessions/>
		</Saint>
		<Saint id="StMaryOfEgypt" name="St. Mary of Egypt">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
		</Saint>
		<Saint id="StVeronica" name="St. Veronica">
			<Melody/>
		</Saint>
		<Saint id="StSimonTheTanner" name="St. Simon the Tanner">
			<Melody/>
			<Doxology/>
		</Saint>
		<Saint id="KingConstantineAndQueenHelen" name="King Constantine and Queen Helen">
			<VersesOfCymbals/>
			<Intercessions/>
		</Saint>
		<Saint id="AbrahamIsaacJacob" name="Patriarchs Abraham, Isaac, and Jacob">
			<VersesOfCymbals/>
			<Doxology/>
			<Psali/>
		</Saint>
		<Saint id="ThreeHolyYouth" name="The Three Holy Youth">
			<VersesOfCymbals/>
			<Doxology/>
			<PraxisResponse/>
			<GospelResponse/>
			<Intercessions/>
		</Saint>
		<Saint id="StAbraam" name="Anba Abraam Bishop of Fayoum">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<GospelResponse/>
		</Saint>
		<Saint id="FrAbdelmessihElManahri" name="Fr. Abdelmessih El-Manahri">
			<Melody/>
		</Saint>
		<Saint id="PopeKyrillos" name="His Holiness Pope Kyrillos VI">
			<Melody/>
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions/>
			<PraxisResponse/>
			<GospelResponse/>
		</Saint>
		<Saint id="StHabibGirgis" name="St. Habib Girgis">
			<Intercessions/>
		</Saint>
		<Saint id="AllSaints" name="All Saints">
			<Doxology/>
		</Saint>
		<Saint id="Patriarch" name="Patriarch">
			<VersesOfCymbals/>
			<Doxology/>
			<Intercessions default="true"/>
			<GospelResponse/>
		</Saint>
	</Saints>`;

	return new DOMParser().parseFromString(XML, "text/xml").documentElement;

})();