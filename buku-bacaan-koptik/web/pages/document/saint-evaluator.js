import { Occasions } from "../../data/occasions.js";

export const SaintEvaluator = (() => {

	// not needed apparently!! they are just used in stupid isSupported checks afaik
	const modifiers = {
		1: 'Feast',
		2: 'Verses of the Cymbals',
		3: 'Doxology',
		4: 'Intercessions',
		5: 'Praxis Response',
		6: 'Gospel Response',
		7: 'Melody',
		8: 'Psali',
	}

	let copticDate;

	function exec(saint, date) {
		copticDate = date;
		if (saint.match(/:Psali$/)) return false;

		// run the appropriate is${saint} function
		return Function(`return SaintEvaluator.is${saint.split(':').shift()}()`)();
	}

	function isSaint(season) {
		return season.includes(':');
	}

	function isDate(month, day) {
		return isDate2(Date.fromCoptic(month, day));
	}
	function isDate2(date) {
		return copticDate.getMonth() == date.getMonth() && copticDate.getDate() == date.getDate();
	}

	// used in commemorations
	function modifyDate(i) {
		// copticDate = this.m_oOriginalCopticDate.addDays(i);
	}
	function restoreDate() {
		// copticDate = this.m_oOriginalCopticDate;
	}

	function isAllMartyrs() { return false; }
	function isAllSaints() { return false; }
	function isAnyApostle() { return false; }
	function isHolyCross() { return false; }
	function isKingDavid() { return false; }
	function isMartyrsOfFayoum() { return false; }
	function isPatriarch() { return false; }
	function isStPaulTheApostle() { return false; }
	function isStSimonTheTanner() { return false; }
	function isStVeronica() { return false; }
	function isThreeHolyYouth() { return false; }
	function isStMary() { return copticDate.getDate() == 21; }

	function isStMaryFeast() {
		return isDate2(Occasions.MESORE_7) || isDate2(Occasions.PASHONS_1) || isDate2(Occasions.KOIAHK_3) || isDate2(Occasions.TOBE_21) || isAssumptionStMary() || isDate2(Occasions.PAONE_21) || isDate2(Occasions.PAREMHOTEP_24);
	}

	function isAssumptionStMary() {
		return isDate2(Occasions.MESORE_16);
	}

	function isStAndrewTheApostle() { return isDate(4, 4); }
	function isStJohnOfHeraclia() { return isDate(4, 4); }
	function isStIsiAndStThecla() { return isDate(4, 8); }
	function isStBisada() { return isDate(4, 27); }
	function isStDioscorusAndStEsklabius() { return isDate(5, 1); }
	function isStPhilotheus() { return isDate(5, 16); }
	function isStAbeFam() { return isDate(5, 27); }
	function isStClaudius() { return isDate(10, 11); }
	function isStMarkAbbaAnthony() { return isDate(11, 8); }
	function isStApoli() { return isDate(12, 1); }
	function isStPisura() { return isDate(1, 9); }
	function isStCastor() { return isDate(1, 17); }
	function isStApatirAndStIrini() { return isDate(1, 28); }

	function isStApolloAndStApip() {
		if (!isDate(2, 25)) {
			return isDate(6, 5);
		}
	}

	function isStPistavros() { return isDate(4, 3); }
	function isArchangelMichael() { return copticDate.getDate() == 12; }

	function isArchangelGabriel() {
		if (!isDate2(Occasions.KOIAHK_22)) {
			if (!isDate(7, 30) && !isDate2(Occasions.PAONE_26)) {
				if (!isDate(10, 13)) {
					return isDate(3, 13);
				}
			}
		}
	}

	function isArchangelRaphael() {
		if (!isDate2(Occasions.NESI_3)) {
			return isDate(4, 13);
		}
	}

	function isArchangelSuriel() { return isDate2(Occasions.TOBE_27); }
	function isFourIncorporealCreatures() { return isDate2(Occasions.HATHOR_8); }
	function isTwentyFourPriests() { return isDate2(Occasions.HATHOR_24); }
	function isStJosephTheCarpenter() { return isDate(11, 26); }
	function isStJohnTheBaptist() {
		if (isDate2(Occasions.THOOUT_2)) {
			return true;
		}
		if (isDate(1, 26)) {
			return true;
		}
		return isDate(6, 30) || isDate2(Occasions.PAONE_2) || isDate2(Occasions.PAONE_30);
	}

	function isChildrenOfBethlehem() { return isDate(5, 3); }

	function isStJohnTheEvangelist() {
		if (!isDate(5, 4)) {
			return isDate(9, 16);
		}
	}

	function isStStephen() { return isDate2(Occasions.TOBE_1) || isDate2(Occasions.THOOUT_15); }

	function isStMark() {
		if (!isDate2(Occasions.PAOPE_30) && !isDate2(Occasions.PARMOUTE_30)) {
			if (!isDate(10, 15)) {
				if (!isDate(10, 17)) {
					if (!isDate(10, 18)) {
						return isDate(10, 19);
					}
				}
			}
		}
	}

	function isStGeorge() {
		if (!isDate(3, 7)) {
			if (!isDate(8, 23)) {
				if (!isDate(10, 3)) {
					return isDate(11, 16);
				}
			}
		}
	}

	function isStPhilopaterMercurius() {
		if (!isDate(3, 25)) {
			if (!isDate(11, 25)) {
				return isDate(10, 9);
			}
		}
	}

	function isStMena() {
		if (isDate(3, 15)) {
			return true;
		}
		if (isDate(10, 15)) {
			return true;
		}
		return isDate(11, 1);
	}

	function isStApakirAndStJohn() {
		if (!isDate(6, 6)) {
			return isDate(11, 4);
		}
	}

	function isStApakirJohnPtolemyPhilip() {
		return isDate(10, 14);
	}

	function isStSergiusAndStBacchus() {
		if (!isDate(2, 4)) {
			if (!isDate(2, 10)) {
				return isDate(3, 19);
			}
		}
	}

	function isStCosmas() {
		if (!isDate(3, 22)) {
			if (!isDate(3, 30)) {
				return isDate(10, 22);
			}
		}
	}

	function isStPeterAndStPaul() {
		return isDate2(Occasions.APOSTLES_FEAST);
	}

	function isStTheodoreShotep() {
		if (!isDate(11, 20)) {
			if (!isDate(3, 5)) {
				return isDate(3, 20);
			}
		}
	}

	function isStTheodoreAnatolius() {
		if (!isDate(5, 12)) {
			return isDate(3, 20);
		}
	}

	function isStGeorgeTheZahimian() { return isDate(10, 19); }

	function isStJuliusOfEkbehs() {
		if (isDate(1, 22)) {
			return true;
		}
		return isDate(2, 25);
	}

	function isStPeterSealOfTheMartyrs() {
		if (isDate(3, 29)) {
			return true;
		}
		return isDate(6, 1);
	}

	function isStApanoub() { return isDate(11, 24); }

	function isStVictor() {
		if (!isDate(8, 27)) {
			if (!isDate(10, 5)) {
				return isDate(3, 27);
			}
		}
	}

	function isStEskhyron() { return isDate(10, 7); }
	function isStMaurice() { return isDate(1, 25); }
	function isStCyprianAndStJustina() { return isDate(1, 21); }

	function isStDemiana() {
		if (!isDate(5, 13)) {
			return isDate(9, 12);
		}
	}

	function isStDolagy() { return isDate(9, 6); }

	function isStBarbara() {
		if (!isDate(4, 8)) {
			return isDate(12, 8);
		}
	}

	function isStJuliana() { return isDate(4, 8); }

	function isStMarina() {
		if (!isDate(3, 23)) {
			return isDate(11, 23);
		}
	}

	function isStRebecca() { return isDate(1, 7); }
	function isStCatherine() { return isDate(3, 29); }
	function isStMoses() { return isDate(10, 24); }

	function isStSarapamon() {
		if (!isDate(3, 28)) {
			return isDate(10, 28);
		}
	}

	function isStPachomAndStTheodore() {
		if (!isDate(9, 2)) {
			return isDate(9, 14);
		}
	}

	function isStPaulTheHermit() { return isDate(6, 2); }

	function isStAnthony() {
		if (!isDate(5, 22)) {
			return isDate(12, 4);
		}
	}

	function isStThomasTheHermit() { return isDate(9, 27); }

	function isStMacariusTheGreat() {
		if (!isDate(7, 13)) {
			if (!isDate(7, 27)) {
				if (!isDate(5, 8)) {
					return isDate(12, 19);
				}
			}
		}
	}

	function isStMacariusOfAlexandria() {
		if (!isDate(9, 6)) {
			return isDate(7, 13);
		}
	}

	function isStMacariusOfEdkow() { return isDate(2, 27); }

	function isStShenuteTheArchimandrite() {
		if (isDate(4, 1)) {
			return true;
		}
		return isDate(11, 7);
	}

	function isStBesa() { return isDate(12, 6); }

	function isStJohnTheShort() {
		if (!isDate(2, 20)) {
			return isDate(12, 29);
		}
	}

	function isStPishoyAndStPaulOfTammah() {
		if (!isDate(2, 7)) {
			if (!isDate(11, 8)) {
				return isDate(4, 4);
			}
		}
	}

	function isStArsenius() { return isDate(9, 13); }

	function isStMaximusAndStDometius() {
		if (!isDate(5, 14)) {
			return isDate(5, 17);
		}
	}

	function isStSamuelTheConfessor() { return isDate(4, 8); }

	function isStNopher() {
		if (!isDate(10, 16)) {
			return isDate(3, 16);
		}
	}

	function isFortyNineMartyrs() {
		if (!isDate(5, 26)) {
			return isDate(6, 5);
		}
	}

	function isStJohnKame() {
		if (!isDate(4, 25)) {
			return isDate(3, 21);
		}
	}

	function isAbrahamIsaacJacob() { return isDate(12, 28); }
	function isStRoweis() { return isDate(2, 21); }
	function isStBashouna() { return isDate(9, 24); }
	function isStKaras() { return isDate(11, 8); }
	function isStParsoumaTheNaked() { return isDate(13, 5); }
	function isStAthanasius() { return isDate(1, 30) || isDate(9, 7); }

	function isStGregoryTheTheologian() { return isDate(1, 24); }

	function isStSeverus() {
		if (!isDate(2, 2)) {
			if (!isDate(4, 10)) {
				return isDate(6, 14);
			}
		}
	}

	function isStMisael() { return isDate(4, 13); }
	function isStCyrilOfAlexandria() { return isDate(11, 3); }
	function isStTaklaHaymanout() { return isDate(12, 24); }

	function isKingConstantineAndQueenHelen() {
		if (!isDate(7, 28)) {
			if (!isDate(9, 9)) {
				return isDate(12, 12);
			}
		}
	}

	function isStAbraam() { return isDate(10, 3); }
	function isFrAbdelmessihElManahri() { return isDate(8, 6); }
	function isPopeKyrillos() { return isDate(6, 30); }
	function isStHabibGirgis() { return isDate(12, 15); }
	function isStMaryMagdalene() { return isDate(11, 28); }
	function isStVerena() { return isDate(1, 4); }
	function isStMonicaAndStAugustine() { return isDate(12, 22); }
	function isMartyrsOfAkmim() { return isDate(4, 29); }
	function isStMaryOfEgypt() { return isDate(8, 6); }

	return {
		exec,
		isSaint,

		isAllMartyrs,
		isAllSaints,
		isAnyApostle,
		isHolyCross,
		isKingDavid,
		isMartyrsOfFayoum,
		isPatriarch,
		isStPaulTheApostle,
		isStSimonTheTanner,
		isStVeronica,
		isThreeHolyYouth,
		isStMary,
		isStMaryFeast,
		isAssumptionStMary,
		isStAndrewTheApostle,
		isStJohnOfHeraclia,
		isStIsiAndStThecla,
		isStBisada,
		isStDioscorusAndStEsklabius,
		isStPhilotheus,
		isStAbeFam,
		isStClaudius,
		isStMarkAbbaAnthony,
		isStApoli,
		isStPisura,
		isStCastor,
		isStApatirAndStIrini,
		isStApolloAndStApip,
		isStPistavros,
		isArchangelMichael,
		isArchangelGabriel,
		isArchangelRaphael,
		isArchangelSuriel,
		isFourIncorporealCreatures,
		isTwentyFourPriests,
		isStJosephTheCarpenter,
		isStJohnTheBaptist,
		isChildrenOfBethlehem,
		isStJohnTheEvangelist,
		isStStephen,
		isStMark,
		isStGeorge,
		isStPhilopaterMercurius,
		isStMena,
		isStApakirAndStJohn,
		isStApakirJohnPtolemyPhilip,
		isStSergiusAndStBacchus,
		isStCosmas,
		isStPeterAndStPaul,
		isStTheodoreShotep,
		isStTheodoreAnatolius,
		isStGeorgeTheZahimian,
		isStJuliusOfEkbehs,
		isStPeterSealOfTheMartyrs,
		isStApanoub,
		isStVictor,
		isStEskhyron,
		isStMaurice,
		isStCyprianAndStJustina,
		isStDemiana,
		isStDolagy,
		isStBarbara,
		isStJuliana,
		isStMarina,
		isStRebecca,
		isStCatherine,
		isStMoses,
		isStSarapamon,
		isStPachomAndStTheodore,
		isStPaulTheHermit,
		isStAnthony,
		isStThomasTheHermit,
		isStMacariusTheGreat,
		isStMacariusOfAlexandria,
		isStMacariusOfEdkow,
		isStShenuteTheArchimandrite,
		isStBesa,
		isStJohnTheShort,
		isStPishoyAndStPaulOfTammah,
		isStArsenius,
		isStMaximusAndStDometius,
		isStSamuelTheConfessor,
		isStNopher,
		isFortyNineMartyrs,
		isStJohnKame,
		isAbrahamIsaacJacob,
		isStRoweis,
		isStBashouna,
		isStKaras,
		isStParsoumaTheNaked,
		isStAthanasius,
		isStGregoryTheTheologian,
		isStSeverus,
		isStMisael,
		isStCyrilOfAlexandria,
		isStTaklaHaymanout,
		isKingConstantineAndQueenHelen,
		isStAbraam,
		isFrAbdelmessihElManahri,
		isPopeKyrillos,
		isStHabibGirgis,
		isStMaryMagdalene,
		isStVerena,
		isStMonicaAndStAugustine,
		isMartyrsOfAkmim,
		isStMaryOfEgypt,
	}

})();
