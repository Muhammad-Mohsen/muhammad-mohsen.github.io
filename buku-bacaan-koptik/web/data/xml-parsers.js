const MenuParser = (() => {

	const menu = `<?xml version="1.0" encoding="utf-8"?>
	<Menu id="ContentLibrary" name="Content Library" menuStyle="icons_with_season">
		<Menu id="Agpeya" name="Agpeya" menuStyle="icons">
			<Document path="agpeya/Agpeya - 1st Hour" icon="agpeya_1" name="1st Hour"/>
			<Document path="agpeya/Agpeya - 3rd Hour" icon="agpeya_3" name="3rd Hour"/>
			<Document path="agpeya/Agpeya - 6th Hour" icon="agpeya_6" name="6th Hour"/>
			<Document path="agpeya/Agpeya - 9th Hour" icon="agpeya_9" name="9th Hour"/>
			<Document path="agpeya/Agpeya - 11th Hour" icon="agpeya_11" name="11th Hour"/>
			<Document path="agpeya/Agpeya - 12th Hour" icon="agpeya_12" name="12th Hour"/>
			<Document path="agpeya/Agpeya - Veil" icon="agpeya_veil" name="Veil"/>
			<Document path="agpeya/Agpeya - Midnight Hour" icon="agpeya_midnight" name="Midnight"/>
			<Menu id="Prayers" name="Prayers" icon="agpeya_selectedprayers" menuStyle="list">
				<Document path="agpeya/Agpeya - Confession" name="Confession"/>
				<Document path="agpeya/Agpeya - Communion" name="Communion"/>
				<Document path="agpeya/Agpeya - Guidance" name="Guidance"/>
				<Document path="agpeya/Agpeya - Meals" name="Meals"/>
				<Document path="agpeya/Agpeya - Priests" name="Priests"/>
				<Document path="agpeya/Agpeya - Deacons" name="Deacons"/>
			</Menu>
		</Menu>
		<Menu id="Psalmody" name="Psalmody" menuStyle="list">
			<Document path="praises/Vesper Praises"/>
			<Document path="praises/Midnight Praises"/>
			<Document path="praises/Morning Praises"/>
		</Menu>
		<Menu id="Bible" name="Bible" menuStyle="list">
			<Menu id="Genesis" name="Genesis" menuStyle="list">
				<Document path="readings/bible/Genesis/Genesis 1" name="Chapter 1"/>
				<Document path="readings/bible/Genesis/Genesis 2" name="Chapter 2"/>
				<Document path="readings/bible/Genesis/Genesis 3" name="Chapter 3"/>
				<Document path="readings/bible/Genesis/Genesis 4" name="Chapter 4"/>
				<Document path="readings/bible/Genesis/Genesis 5" name="Chapter 5"/>
				<Document path="readings/bible/Genesis/Genesis 6" name="Chapter 6"/>
				<Document path="readings/bible/Genesis/Genesis 7" name="Chapter 7"/>
				<Document path="readings/bible/Genesis/Genesis 8" name="Chapter 8"/>
				<Document path="readings/bible/Genesis/Genesis 9" name="Chapter 9"/>
				<Document path="readings/bible/Genesis/Genesis 10" name="Chapter 10"/>
				<Document path="readings/bible/Genesis/Genesis 11" name="Chapter 11"/>
				<Document path="readings/bible/Genesis/Genesis 12" name="Chapter 12"/>
				<Document path="readings/bible/Genesis/Genesis 13" name="Chapter 13"/>
				<Document path="readings/bible/Genesis/Genesis 14" name="Chapter 14"/>
				<Document path="readings/bible/Genesis/Genesis 15" name="Chapter 15"/>
				<Document path="readings/bible/Genesis/Genesis 16" name="Chapter 16"/>
				<Document path="readings/bible/Genesis/Genesis 17" name="Chapter 17"/>
				<Document path="readings/bible/Genesis/Genesis 18" name="Chapter 18"/>
				<Document path="readings/bible/Genesis/Genesis 19" name="Chapter 19"/>
				<Document path="readings/bible/Genesis/Genesis 20" name="Chapter 20"/>
				<Document path="readings/bible/Genesis/Genesis 21" name="Chapter 21"/>
				<Document path="readings/bible/Genesis/Genesis 22" name="Chapter 22"/>
				<Document path="readings/bible/Genesis/Genesis 23" name="Chapter 23"/>
				<Document path="readings/bible/Genesis/Genesis 24" name="Chapter 24"/>
				<Document path="readings/bible/Genesis/Genesis 25" name="Chapter 25"/>
				<Document path="readings/bible/Genesis/Genesis 26" name="Chapter 26"/>
				<Document path="readings/bible/Genesis/Genesis 27" name="Chapter 27"/>
				<Document path="readings/bible/Genesis/Genesis 28" name="Chapter 28"/>
				<Document path="readings/bible/Genesis/Genesis 29" name="Chapter 29"/>
				<Document path="readings/bible/Genesis/Genesis 30" name="Chapter 30"/>
				<Document path="readings/bible/Genesis/Genesis 31" name="Chapter 31"/>
				<Document path="readings/bible/Genesis/Genesis 32" name="Chapter 32"/>
				<Document path="readings/bible/Genesis/Genesis 33" name="Chapter 33"/>
				<Document path="readings/bible/Genesis/Genesis 34" name="Chapter 34"/>
				<Document path="readings/bible/Genesis/Genesis 35" name="Chapter 35"/>
				<Document path="readings/bible/Genesis/Genesis 36" name="Chapter 36"/>
				<Document path="readings/bible/Genesis/Genesis 37" name="Chapter 37"/>
				<Document path="readings/bible/Genesis/Genesis 38" name="Chapter 38"/>
				<Document path="readings/bible/Genesis/Genesis 39" name="Chapter 39"/>
				<Document path="readings/bible/Genesis/Genesis 40" name="Chapter 40"/>
				<Document path="readings/bible/Genesis/Genesis 41" name="Chapter 41"/>
				<Document path="readings/bible/Genesis/Genesis 42" name="Chapter 42"/>
				<Document path="readings/bible/Genesis/Genesis 43" name="Chapter 43"/>
				<Document path="readings/bible/Genesis/Genesis 44" name="Chapter 44"/>
				<Document path="readings/bible/Genesis/Genesis 45" name="Chapter 45"/>
				<Document path="readings/bible/Genesis/Genesis 46" name="Chapter 46"/>
				<Document path="readings/bible/Genesis/Genesis 47" name="Chapter 47"/>
				<Document path="readings/bible/Genesis/Genesis 48" name="Chapter 48"/>
				<Document path="readings/bible/Genesis/Genesis 49" name="Chapter 49"/>
				<Document path="readings/bible/Genesis/Genesis 50" name="Chapter 50"/>
			</Menu>
			<Menu id="Exodus" name="Exodus" menuStyle="list">
				<Document path="readings/bible/Exodus/Exodus 1" name="Chapter 1"/>
				<Document path="readings/bible/Exodus/Exodus 2" name="Chapter 2"/>
				<Document path="readings/bible/Exodus/Exodus 3" name="Chapter 3"/>
				<Document path="readings/bible/Exodus/Exodus 4" name="Chapter 4"/>
				<Document path="readings/bible/Exodus/Exodus 5" name="Chapter 5"/>
				<Document path="readings/bible/Exodus/Exodus 6" name="Chapter 6"/>
				<Document path="readings/bible/Exodus/Exodus 7" name="Chapter 7"/>
				<Document path="readings/bible/Exodus/Exodus 8" name="Chapter 8"/>
				<Document path="readings/bible/Exodus/Exodus 9" name="Chapter 9"/>
				<Document path="readings/bible/Exodus/Exodus 10" name="Chapter 10"/>
				<Document path="readings/bible/Exodus/Exodus 11" name="Chapter 11"/>
				<Document path="readings/bible/Exodus/Exodus 12" name="Chapter 12"/>
				<Document path="readings/bible/Exodus/Exodus 13" name="Chapter 13"/>
				<Document path="readings/bible/Exodus/Exodus 14" name="Chapter 14"/>
				<Document path="readings/bible/Exodus/Exodus 15" name="Chapter 15"/>
				<Document path="readings/bible/Exodus/Exodus 16" name="Chapter 16"/>
				<Document path="readings/bible/Exodus/Exodus 17" name="Chapter 17"/>
				<Document path="readings/bible/Exodus/Exodus 18" name="Chapter 18"/>
				<Document path="readings/bible/Exodus/Exodus 19" name="Chapter 19"/>
				<Document path="readings/bible/Exodus/Exodus 20" name="Chapter 20"/>
				<Document path="readings/bible/Exodus/Exodus 21" name="Chapter 21"/>
				<Document path="readings/bible/Exodus/Exodus 22" name="Chapter 22"/>
				<Document path="readings/bible/Exodus/Exodus 23" name="Chapter 23"/>
				<Document path="readings/bible/Exodus/Exodus 24" name="Chapter 24"/>
				<Document path="readings/bible/Exodus/Exodus 25" name="Chapter 25"/>
				<Document path="readings/bible/Exodus/Exodus 26" name="Chapter 26"/>
				<Document path="readings/bible/Exodus/Exodus 27" name="Chapter 27"/>
				<Document path="readings/bible/Exodus/Exodus 28" name="Chapter 28"/>
				<Document path="readings/bible/Exodus/Exodus 29" name="Chapter 29"/>
				<Document path="readings/bible/Exodus/Exodus 30" name="Chapter 30"/>
				<Document path="readings/bible/Exodus/Exodus 31" name="Chapter 31"/>
				<Document path="readings/bible/Exodus/Exodus 32" name="Chapter 32"/>
				<Document path="readings/bible/Exodus/Exodus 33" name="Chapter 33"/>
				<Document path="readings/bible/Exodus/Exodus 34" name="Chapter 34"/>
				<Document path="readings/bible/Exodus/Exodus 35" name="Chapter 35"/>
				<Document path="readings/bible/Exodus/Exodus 36" name="Chapter 36"/>
				<Document path="readings/bible/Exodus/Exodus 37" name="Chapter 37"/>
				<Document path="readings/bible/Exodus/Exodus 38" name="Chapter 38"/>
				<Document path="readings/bible/Exodus/Exodus 39" name="Chapter 39"/>
				<Document path="readings/bible/Exodus/Exodus 40" name="Chapter 40"/>
			</Menu>
			<Menu id="Leviticus" name="Leviticus" menuStyle="list">
				<Document path="readings/bible/Leviticus/Leviticus 1" name="Chapter 1"/>
				<Document path="readings/bible/Leviticus/Leviticus 2" name="Chapter 2"/>
				<Document path="readings/bible/Leviticus/Leviticus 3" name="Chapter 3"/>
				<Document path="readings/bible/Leviticus/Leviticus 4" name="Chapter 4"/>
				<Document path="readings/bible/Leviticus/Leviticus 5" name="Chapter 5"/>
				<Document path="readings/bible/Leviticus/Leviticus 6" name="Chapter 6"/>
				<Document path="readings/bible/Leviticus/Leviticus 7" name="Chapter 7"/>
				<Document path="readings/bible/Leviticus/Leviticus 8" name="Chapter 8"/>
				<Document path="readings/bible/Leviticus/Leviticus 9" name="Chapter 9"/>
				<Document path="readings/bible/Leviticus/Leviticus 10" name="Chapter 10"/>
				<Document path="readings/bible/Leviticus/Leviticus 11" name="Chapter 11"/>
				<Document path="readings/bible/Leviticus/Leviticus 12" name="Chapter 12"/>
				<Document path="readings/bible/Leviticus/Leviticus 13" name="Chapter 13"/>
				<Document path="readings/bible/Leviticus/Leviticus 14" name="Chapter 14"/>
				<Document path="readings/bible/Leviticus/Leviticus 15" name="Chapter 15"/>
				<Document path="readings/bible/Leviticus/Leviticus 16" name="Chapter 16"/>
				<Document path="readings/bible/Leviticus/Leviticus 17" name="Chapter 17"/>
				<Document path="readings/bible/Leviticus/Leviticus 18" name="Chapter 18"/>
				<Document path="readings/bible/Leviticus/Leviticus 19" name="Chapter 19"/>
				<Document path="readings/bible/Leviticus/Leviticus 20" name="Chapter 20"/>
				<Document path="readings/bible/Leviticus/Leviticus 21" name="Chapter 21"/>
				<Document path="readings/bible/Leviticus/Leviticus 22" name="Chapter 22"/>
				<Document path="readings/bible/Leviticus/Leviticus 23" name="Chapter 23"/>
				<Document path="readings/bible/Leviticus/Leviticus 24" name="Chapter 24"/>
				<Document path="readings/bible/Leviticus/Leviticus 25" name="Chapter 25"/>
				<Document path="readings/bible/Leviticus/Leviticus 26" name="Chapter 26"/>
				<Document path="readings/bible/Leviticus/Leviticus 27" name="Chapter 27"/>
			</Menu>
			<Menu id="Numbers" name="Numbers" menuStyle="list">
				<Document path="readings/bible/Numbers/Numbers 1" name="Chapter 1"/>
				<Document path="readings/bible/Numbers/Numbers 2" name="Chapter 2"/>
				<Document path="readings/bible/Numbers/Numbers 3" name="Chapter 3"/>
				<Document path="readings/bible/Numbers/Numbers 4" name="Chapter 4"/>
				<Document path="readings/bible/Numbers/Numbers 5" name="Chapter 5"/>
				<Document path="readings/bible/Numbers/Numbers 6" name="Chapter 6"/>
				<Document path="readings/bible/Numbers/Numbers 7" name="Chapter 7"/>
				<Document path="readings/bible/Numbers/Numbers 8" name="Chapter 8"/>
				<Document path="readings/bible/Numbers/Numbers 9" name="Chapter 9"/>
				<Document path="readings/bible/Numbers/Numbers 10" name="Chapter 10"/>
				<Document path="readings/bible/Numbers/Numbers 11" name="Chapter 11"/>
				<Document path="readings/bible/Numbers/Numbers 12" name="Chapter 12"/>
				<Document path="readings/bible/Numbers/Numbers 13" name="Chapter 13"/>
				<Document path="readings/bible/Numbers/Numbers 14" name="Chapter 14"/>
				<Document path="readings/bible/Numbers/Numbers 15" name="Chapter 15"/>
				<Document path="readings/bible/Numbers/Numbers 16" name="Chapter 16"/>
				<Document path="readings/bible/Numbers/Numbers 17" name="Chapter 17"/>
				<Document path="readings/bible/Numbers/Numbers 18" name="Chapter 18"/>
				<Document path="readings/bible/Numbers/Numbers 19" name="Chapter 19"/>
				<Document path="readings/bible/Numbers/Numbers 20" name="Chapter 20"/>
				<Document path="readings/bible/Numbers/Numbers 21" name="Chapter 21"/>
				<Document path="readings/bible/Numbers/Numbers 22" name="Chapter 22"/>
				<Document path="readings/bible/Numbers/Numbers 23" name="Chapter 23"/>
				<Document path="readings/bible/Numbers/Numbers 24" name="Chapter 24"/>
				<Document path="readings/bible/Numbers/Numbers 25" name="Chapter 25"/>
				<Document path="readings/bible/Numbers/Numbers 26" name="Chapter 26"/>
				<Document path="readings/bible/Numbers/Numbers 27" name="Chapter 27"/>
				<Document path="readings/bible/Numbers/Numbers 28" name="Chapter 28"/>
				<Document path="readings/bible/Numbers/Numbers 29" name="Chapter 29"/>
				<Document path="readings/bible/Numbers/Numbers 30" name="Chapter 30"/>
				<Document path="readings/bible/Numbers/Numbers 31" name="Chapter 31"/>
				<Document path="readings/bible/Numbers/Numbers 32" name="Chapter 32"/>
				<Document path="readings/bible/Numbers/Numbers 33" name="Chapter 33"/>
				<Document path="readings/bible/Numbers/Numbers 34" name="Chapter 34"/>
				<Document path="readings/bible/Numbers/Numbers 35" name="Chapter 35"/>
				<Document path="readings/bible/Numbers/Numbers 36" name="Chapter 36"/>
			</Menu>
			<Menu id="Deuteronomy" name="Deuteronomy" menuStyle="list">
				<Document path="readings/bible/Deuteronomy/Deuteronomy 1" name="Chapter 1"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 2" name="Chapter 2"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 3" name="Chapter 3"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 4" name="Chapter 4"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 5" name="Chapter 5"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 6" name="Chapter 6"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 7" name="Chapter 7"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 8" name="Chapter 8"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 9" name="Chapter 9"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 10" name="Chapter 10"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 11" name="Chapter 11"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 12" name="Chapter 12"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 13" name="Chapter 13"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 14" name="Chapter 14"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 15" name="Chapter 15"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 16" name="Chapter 16"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 17" name="Chapter 17"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 18" name="Chapter 18"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 19" name="Chapter 19"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 20" name="Chapter 20"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 21" name="Chapter 21"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 22" name="Chapter 22"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 23" name="Chapter 23"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 24" name="Chapter 24"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 25" name="Chapter 25"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 26" name="Chapter 26"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 27" name="Chapter 27"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 28" name="Chapter 28"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 29" name="Chapter 29"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 30" name="Chapter 30"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 31" name="Chapter 31"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 32" name="Chapter 32"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 33" name="Chapter 33"/>
				<Document path="readings/bible/Deuteronomy/Deuteronomy 34" name="Chapter 34"/>
			</Menu>
			<Menu id="Joshua" name="Joshua" menuStyle="list">
				<Document path="readings/bible/Joshua/Joshua 1" name="Chapter 1"/>
				<Document path="readings/bible/Joshua/Joshua 2" name="Chapter 2"/>
				<Document path="readings/bible/Joshua/Joshua 3" name="Chapter 3"/>
				<Document path="readings/bible/Joshua/Joshua 4" name="Chapter 4"/>
				<Document path="readings/bible/Joshua/Joshua 5" name="Chapter 5"/>
				<Document path="readings/bible/Joshua/Joshua 6" name="Chapter 6"/>
				<Document path="readings/bible/Joshua/Joshua 7" name="Chapter 7"/>
				<Document path="readings/bible/Joshua/Joshua 8" name="Chapter 8"/>
				<Document path="readings/bible/Joshua/Joshua 9" name="Chapter 9"/>
				<Document path="readings/bible/Joshua/Joshua 10" name="Chapter 10"/>
				<Document path="readings/bible/Joshua/Joshua 11" name="Chapter 11"/>
				<Document path="readings/bible/Joshua/Joshua 12" name="Chapter 12"/>
				<Document path="readings/bible/Joshua/Joshua 13" name="Chapter 13"/>
				<Document path="readings/bible/Joshua/Joshua 14" name="Chapter 14"/>
				<Document path="readings/bible/Joshua/Joshua 15" name="Chapter 15"/>
				<Document path="readings/bible/Joshua/Joshua 16" name="Chapter 16"/>
				<Document path="readings/bible/Joshua/Joshua 17" name="Chapter 17"/>
				<Document path="readings/bible/Joshua/Joshua 18" name="Chapter 18"/>
				<Document path="readings/bible/Joshua/Joshua 19" name="Chapter 19"/>
				<Document path="readings/bible/Joshua/Joshua 20" name="Chapter 20"/>
				<Document path="readings/bible/Joshua/Joshua 21" name="Chapter 21"/>
				<Document path="readings/bible/Joshua/Joshua 22" name="Chapter 22"/>
				<Document path="readings/bible/Joshua/Joshua 23" name="Chapter 23"/>
				<Document path="readings/bible/Joshua/Joshua 24" name="Chapter 24"/>
			</Menu>
			<Menu id="Judges" name="Judges" menuStyle="list">
				<Document path="readings/bible/Judges/Judges 1" name="Chapter 1"/>
				<Document path="readings/bible/Judges/Judges 2" name="Chapter 2"/>
				<Document path="readings/bible/Judges/Judges 3" name="Chapter 3"/>
				<Document path="readings/bible/Judges/Judges 4" name="Chapter 4"/>
				<Document path="readings/bible/Judges/Judges 5" name="Chapter 5"/>
				<Document path="readings/bible/Judges/Judges 6" name="Chapter 6"/>
				<Document path="readings/bible/Judges/Judges 7" name="Chapter 7"/>
				<Document path="readings/bible/Judges/Judges 8" name="Chapter 8"/>
				<Document path="readings/bible/Judges/Judges 9" name="Chapter 9"/>
				<Document path="readings/bible/Judges/Judges 10" name="Chapter 10"/>
				<Document path="readings/bible/Judges/Judges 11" name="Chapter 11"/>
				<Document path="readings/bible/Judges/Judges 12" name="Chapter 12"/>
				<Document path="readings/bible/Judges/Judges 13" name="Chapter 13"/>
				<Document path="readings/bible/Judges/Judges 14" name="Chapter 14"/>
				<Document path="readings/bible/Judges/Judges 15" name="Chapter 15"/>
				<Document path="readings/bible/Judges/Judges 16" name="Chapter 16"/>
				<Document path="readings/bible/Judges/Judges 17" name="Chapter 17"/>
				<Document path="readings/bible/Judges/Judges 18" name="Chapter 18"/>
				<Document path="readings/bible/Judges/Judges 19" name="Chapter 19"/>
				<Document path="readings/bible/Judges/Judges 20" name="Chapter 20"/>
				<Document path="readings/bible/Judges/Judges 21" name="Chapter 21"/>
			</Menu>
			<Menu id="Ruth" name="Ruth" menuStyle="list">
				<Document path="readings/bible/Ruth/Ruth 1" name="Chapter 1"/>
				<Document path="readings/bible/Ruth/Ruth 2" name="Chapter 2"/>
				<Document path="readings/bible/Ruth/Ruth 3" name="Chapter 3"/>
				<Document path="readings/bible/Ruth/Ruth 4" name="Chapter 4"/>
			</Menu>
			<Menu id="1Samuel" name="1 Samuel" menuStyle="list">
				<Document path="readings/bible/1 Samuel/1 Samuel 1" name="Chapter 1"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 2" name="Chapter 2"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 3" name="Chapter 3"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 4" name="Chapter 4"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 5" name="Chapter 5"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 6" name="Chapter 6"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 7" name="Chapter 7"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 8" name="Chapter 8"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 9" name="Chapter 9"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 10" name="Chapter 10"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 11" name="Chapter 11"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 12" name="Chapter 12"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 13" name="Chapter 13"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 14" name="Chapter 14"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 15" name="Chapter 15"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 16" name="Chapter 16"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 17" name="Chapter 17"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 18" name="Chapter 18"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 19" name="Chapter 19"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 20" name="Chapter 20"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 21" name="Chapter 21"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 22" name="Chapter 22"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 23" name="Chapter 23"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 24" name="Chapter 24"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 25" name="Chapter 25"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 26" name="Chapter 26"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 27" name="Chapter 27"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 28" name="Chapter 28"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 29" name="Chapter 29"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 30" name="Chapter 30"/>
				<Document path="readings/bible/1 Samuel/1 Samuel 31" name="Chapter 31"/>
			</Menu>
			<Menu id="2Samuel" name="2 Samuel" menuStyle="list">
				<Document path="readings/bible/2 Samuel/2 Samuel 1" name="Chapter 1"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 2" name="Chapter 2"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 3" name="Chapter 3"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 4" name="Chapter 4"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 5" name="Chapter 5"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 6" name="Chapter 6"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 7" name="Chapter 7"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 8" name="Chapter 8"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 9" name="Chapter 9"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 10" name="Chapter 10"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 11" name="Chapter 11"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 12" name="Chapter 12"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 13" name="Chapter 13"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 14" name="Chapter 14"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 15" name="Chapter 15"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 16" name="Chapter 16"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 17" name="Chapter 17"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 18" name="Chapter 18"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 19" name="Chapter 19"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 20" name="Chapter 20"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 21" name="Chapter 21"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 22" name="Chapter 22"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 23" name="Chapter 23"/>
				<Document path="readings/bible/2 Samuel/2 Samuel 24" name="Chapter 24"/>
			</Menu>
			<Menu id="1Kings" name="1 Kings" menuStyle="list">
				<Document path="readings/bible/1 Kings/1 Kings 1" name="Chapter 1"/>
				<Document path="readings/bible/1 Kings/1 Kings 2" name="Chapter 2"/>
				<Document path="readings/bible/1 Kings/1 Kings 3" name="Chapter 3"/>
				<Document path="readings/bible/1 Kings/1 Kings 4" name="Chapter 4"/>
				<Document path="readings/bible/1 Kings/1 Kings 5" name="Chapter 5"/>
				<Document path="readings/bible/1 Kings/1 Kings 6" name="Chapter 6"/>
				<Document path="readings/bible/1 Kings/1 Kings 7" name="Chapter 7"/>
				<Document path="readings/bible/1 Kings/1 Kings 8" name="Chapter 8"/>
				<Document path="readings/bible/1 Kings/1 Kings 9" name="Chapter 9"/>
				<Document path="readings/bible/1 Kings/1 Kings 10" name="Chapter 10"/>
				<Document path="readings/bible/1 Kings/1 Kings 11" name="Chapter 11"/>
				<Document path="readings/bible/1 Kings/1 Kings 12" name="Chapter 12"/>
				<Document path="readings/bible/1 Kings/1 Kings 13" name="Chapter 13"/>
				<Document path="readings/bible/1 Kings/1 Kings 14" name="Chapter 14"/>
				<Document path="readings/bible/1 Kings/1 Kings 15" name="Chapter 15"/>
				<Document path="readings/bible/1 Kings/1 Kings 16" name="Chapter 16"/>
				<Document path="readings/bible/1 Kings/1 Kings 17" name="Chapter 17"/>
				<Document path="readings/bible/1 Kings/1 Kings 18" name="Chapter 18"/>
				<Document path="readings/bible/1 Kings/1 Kings 19" name="Chapter 19"/>
				<Document path="readings/bible/1 Kings/1 Kings 20" name="Chapter 20"/>
				<Document path="readings/bible/1 Kings/1 Kings 21" name="Chapter 21"/>
				<Document path="readings/bible/1 Kings/1 Kings 22" name="Chapter 22"/>
			</Menu>
			<Menu id="2Kings" name="2 Kings" menuStyle="list">
				<Document path="readings/bible/2 Kings/2 Kings 1" name="Chapter 1"/>
				<Document path="readings/bible/2 Kings/2 Kings 2" name="Chapter 2"/>
				<Document path="readings/bible/2 Kings/2 Kings 3" name="Chapter 3"/>
				<Document path="readings/bible/2 Kings/2 Kings 4" name="Chapter 4"/>
				<Document path="readings/bible/2 Kings/2 Kings 5" name="Chapter 5"/>
				<Document path="readings/bible/2 Kings/2 Kings 6" name="Chapter 6"/>
				<Document path="readings/bible/2 Kings/2 Kings 7" name="Chapter 7"/>
				<Document path="readings/bible/2 Kings/2 Kings 8" name="Chapter 8"/>
				<Document path="readings/bible/2 Kings/2 Kings 9" name="Chapter 9"/>
				<Document path="readings/bible/2 Kings/2 Kings 10" name="Chapter 10"/>
				<Document path="readings/bible/2 Kings/2 Kings 11" name="Chapter 11"/>
				<Document path="readings/bible/2 Kings/2 Kings 12" name="Chapter 12"/>
				<Document path="readings/bible/2 Kings/2 Kings 13" name="Chapter 13"/>
				<Document path="readings/bible/2 Kings/2 Kings 14" name="Chapter 14"/>
				<Document path="readings/bible/2 Kings/2 Kings 15" name="Chapter 15"/>
				<Document path="readings/bible/2 Kings/2 Kings 16" name="Chapter 16"/>
				<Document path="readings/bible/2 Kings/2 Kings 17" name="Chapter 17"/>
				<Document path="readings/bible/2 Kings/2 Kings 18" name="Chapter 18"/>
				<Document path="readings/bible/2 Kings/2 Kings 19" name="Chapter 19"/>
				<Document path="readings/bible/2 Kings/2 Kings 20" name="Chapter 20"/>
				<Document path="readings/bible/2 Kings/2 Kings 21" name="Chapter 21"/>
				<Document path="readings/bible/2 Kings/2 Kings 22" name="Chapter 22"/>
				<Document path="readings/bible/2 Kings/2 Kings 23" name="Chapter 23"/>
				<Document path="readings/bible/2 Kings/2 Kings 24" name="Chapter 24"/>
				<Document path="readings/bible/2 Kings/2 Kings 25" name="Chapter 25"/>
			</Menu>
			<Menu id="1Chronicles" name="1 Chronicles" menuStyle="list">
				<Document path="readings/bible/1 Chronicles/1 Chronicles 1" name="Chapter 1"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 2" name="Chapter 2"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 3" name="Chapter 3"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 4" name="Chapter 4"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 5" name="Chapter 5"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 6" name="Chapter 6"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 7" name="Chapter 7"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 8" name="Chapter 8"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 9" name="Chapter 9"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 10" name="Chapter 10"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 11" name="Chapter 11"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 12" name="Chapter 12"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 13" name="Chapter 13"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 14" name="Chapter 14"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 15" name="Chapter 15"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 16" name="Chapter 16"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 17" name="Chapter 17"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 18" name="Chapter 18"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 19" name="Chapter 19"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 20" name="Chapter 20"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 21" name="Chapter 21"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 22" name="Chapter 22"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 23" name="Chapter 23"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 24" name="Chapter 24"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 25" name="Chapter 25"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 26" name="Chapter 26"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 27" name="Chapter 27"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 28" name="Chapter 28"/>
				<Document path="readings/bible/1 Chronicles/1 Chronicles 29" name="Chapter 29"/>
			</Menu>
			<Menu id="2Chronicles" name="2 Chronicles" menuStyle="list">
				<Document path="readings/bible/2 Chronicles/2 Chronicles 1" name="Chapter 1"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 2" name="Chapter 2"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 3" name="Chapter 3"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 4" name="Chapter 4"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 5" name="Chapter 5"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 6" name="Chapter 6"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 7" name="Chapter 7"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 8" name="Chapter 8"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 9" name="Chapter 9"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 10" name="Chapter 10"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 11" name="Chapter 11"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 12" name="Chapter 12"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 13" name="Chapter 13"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 14" name="Chapter 14"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 15" name="Chapter 15"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 16" name="Chapter 16"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 17" name="Chapter 17"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 18" name="Chapter 18"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 19" name="Chapter 19"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 20" name="Chapter 20"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 21" name="Chapter 21"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 22" name="Chapter 22"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 23" name="Chapter 23"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 24" name="Chapter 24"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 25" name="Chapter 25"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 26" name="Chapter 26"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 27" name="Chapter 27"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 28" name="Chapter 28"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 29" name="Chapter 29"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 30" name="Chapter 30"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 31" name="Chapter 31"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 32" name="Chapter 32"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 33" name="Chapter 33"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 34" name="Chapter 34"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 35" name="Chapter 35"/>
				<Document path="readings/bible/2 Chronicles/2 Chronicles 36" name="Chapter 36"/>
			</Menu>
			<Menu id="Ezra" name="Ezra" menuStyle="list">
				<Document path="readings/bible/Ezra/Ezra 1" name="Chapter 1"/>
				<Document path="readings/bible/Ezra/Ezra 2" name="Chapter 2"/>
				<Document path="readings/bible/Ezra/Ezra 3" name="Chapter 3"/>
				<Document path="readings/bible/Ezra/Ezra 4" name="Chapter 4"/>
				<Document path="readings/bible/Ezra/Ezra 5" name="Chapter 5"/>
				<Document path="readings/bible/Ezra/Ezra 6" name="Chapter 6"/>
				<Document path="readings/bible/Ezra/Ezra 7" name="Chapter 7"/>
				<Document path="readings/bible/Ezra/Ezra 8" name="Chapter 8"/>
				<Document path="readings/bible/Ezra/Ezra 9" name="Chapter 9"/>
				<Document path="readings/bible/Ezra/Ezra 10" name="Chapter 10"/>
			</Menu>
			<Menu id="Nehemiah" name="Nehemiah" menuStyle="list">
				<Document path="readings/bible/Nehemiah/Nehemiah 1" name="Chapter 1"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 2" name="Chapter 2"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 3" name="Chapter 3"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 4" name="Chapter 4"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 5" name="Chapter 5"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 6" name="Chapter 6"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 7" name="Chapter 7"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 8" name="Chapter 8"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 9" name="Chapter 9"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 10" name="Chapter 10"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 11" name="Chapter 11"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 12" name="Chapter 12"/>
				<Document path="readings/bible/Nehemiah/Nehemiah 13" name="Chapter 13"/>
			</Menu>
			<Menu id="Tobit" name="Tobit" menuStyle="list">
				<Document path="readings/bible/Tobit/Tobit 1" name="Chapter 1"/>
				<Document path="readings/bible/Tobit/Tobit 2" name="Chapter 2"/>
				<Document path="readings/bible/Tobit/Tobit 3" name="Chapter 3"/>
				<Document path="readings/bible/Tobit/Tobit 4" name="Chapter 4"/>
				<Document path="readings/bible/Tobit/Tobit 5" name="Chapter 5"/>
				<Document path="readings/bible/Tobit/Tobit 6" name="Chapter 6"/>
				<Document path="readings/bible/Tobit/Tobit 7" name="Chapter 7"/>
				<Document path="readings/bible/Tobit/Tobit 8" name="Chapter 8"/>
				<Document path="readings/bible/Tobit/Tobit 9" name="Chapter 9"/>
				<Document path="readings/bible/Tobit/Tobit 10" name="Chapter 10"/>
				<Document path="readings/bible/Tobit/Tobit 11" name="Chapter 11"/>
				<Document path="readings/bible/Tobit/Tobit 12" name="Chapter 12"/>
				<Document path="readings/bible/Tobit/Tobit 13" name="Chapter 13"/>
				<Document path="readings/bible/Tobit/Tobit 14" name="Chapter 14"/>
			</Menu>
			<Menu id="Judith" name="Judith" menuStyle="list">
				<Document path="readings/bible/Judith/Judith 1" name="Chapter 1"/>
				<Document path="readings/bible/Judith/Judith 2" name="Chapter 2"/>
				<Document path="readings/bible/Judith/Judith 3" name="Chapter 3"/>
				<Document path="readings/bible/Judith/Judith 4" name="Chapter 4"/>
				<Document path="readings/bible/Judith/Judith 5" name="Chapter 5"/>
				<Document path="readings/bible/Judith/Judith 6" name="Chapter 6"/>
				<Document path="readings/bible/Judith/Judith 7" name="Chapter 7"/>
				<Document path="readings/bible/Judith/Judith 8" name="Chapter 8"/>
				<Document path="readings/bible/Judith/Judith 9" name="Chapter 9"/>
				<Document path="readings/bible/Judith/Judith 10" name="Chapter 10"/>
				<Document path="readings/bible/Judith/Judith 11" name="Chapter 11"/>
				<Document path="readings/bible/Judith/Judith 12" name="Chapter 12"/>
				<Document path="readings/bible/Judith/Judith 13" name="Chapter 13"/>
				<Document path="readings/bible/Judith/Judith 14" name="Chapter 14"/>
				<Document path="readings/bible/Judith/Judith 15" name="Chapter 15"/>
				<Document path="readings/bible/Judith/Judith 16" name="Chapter 16"/>
			</Menu>
			<Menu id="Esther" name="Esther" menuStyle="list">
				<Document path="readings/bible/Esther/Esther 1" name="Chapter 1"/>
				<Document path="readings/bible/Esther/Esther 2" name="Chapter 2"/>
				<Document path="readings/bible/Esther/Esther 3" name="Chapter 3"/>
				<Document path="readings/bible/Esther/Esther 4" name="Chapter 4"/>
				<Document path="readings/bible/Esther/Esther 5" name="Chapter 5"/>
				<Document path="readings/bible/Esther/Esther 6" name="Chapter 6"/>
				<Document path="readings/bible/Esther/Esther 7" name="Chapter 7"/>
				<Document path="readings/bible/Esther/Esther 8" name="Chapter 8"/>
				<Document path="readings/bible/Esther/Esther 9" name="Chapter 9"/>
				<Document path="readings/bible/Esther/Esther 10" name="Chapter 10"/>
				<Document path="readings/bible/Esther/Esther 11" name="Chapter 11"/>
				<Document path="readings/bible/Esther/Esther 12" name="Chapter 12"/>
				<Document path="readings/bible/Esther/Esther 13" name="Chapter 13"/>
				<Document path="readings/bible/Esther/Esther 14" name="Chapter 14"/>
				<Document path="readings/bible/Esther/Esther 15" name="Chapter 15"/>
				<Document path="readings/bible/Esther/Esther 16" name="Chapter 16"/>
			</Menu>
			<Menu id="Job" name="Job" menuStyle="list">
				<Document path="readings/bible/Job/Job 1" name="Chapter 1"/>
				<Document path="readings/bible/Job/Job 2" name="Chapter 2"/>
				<Document path="readings/bible/Job/Job 3" name="Chapter 3"/>
				<Document path="readings/bible/Job/Job 4" name="Chapter 4"/>
				<Document path="readings/bible/Job/Job 5" name="Chapter 5"/>
				<Document path="readings/bible/Job/Job 6" name="Chapter 6"/>
				<Document path="readings/bible/Job/Job 7" name="Chapter 7"/>
				<Document path="readings/bible/Job/Job 8" name="Chapter 8"/>
				<Document path="readings/bible/Job/Job 9" name="Chapter 9"/>
				<Document path="readings/bible/Job/Job 10" name="Chapter 10"/>
				<Document path="readings/bible/Job/Job 11" name="Chapter 11"/>
				<Document path="readings/bible/Job/Job 12" name="Chapter 12"/>
				<Document path="readings/bible/Job/Job 13" name="Chapter 13"/>
				<Document path="readings/bible/Job/Job 14" name="Chapter 14"/>
				<Document path="readings/bible/Job/Job 15" name="Chapter 15"/>
				<Document path="readings/bible/Job/Job 16" name="Chapter 16"/>
				<Document path="readings/bible/Job/Job 17" name="Chapter 17"/>
				<Document path="readings/bible/Job/Job 18" name="Chapter 18"/>
				<Document path="readings/bible/Job/Job 19" name="Chapter 19"/>
				<Document path="readings/bible/Job/Job 20" name="Chapter 20"/>
				<Document path="readings/bible/Job/Job 21" name="Chapter 21"/>
				<Document path="readings/bible/Job/Job 22" name="Chapter 22"/>
				<Document path="readings/bible/Job/Job 23" name="Chapter 23"/>
				<Document path="readings/bible/Job/Job 24" name="Chapter 24"/>
				<Document path="readings/bible/Job/Job 25" name="Chapter 25"/>
				<Document path="readings/bible/Job/Job 26" name="Chapter 26"/>
				<Document path="readings/bible/Job/Job 27" name="Chapter 27"/>
				<Document path="readings/bible/Job/Job 28" name="Chapter 28"/>
				<Document path="readings/bible/Job/Job 29" name="Chapter 29"/>
				<Document path="readings/bible/Job/Job 30" name="Chapter 30"/>
				<Document path="readings/bible/Job/Job 31" name="Chapter 31"/>
				<Document path="readings/bible/Job/Job 32" name="Chapter 32"/>
				<Document path="readings/bible/Job/Job 33" name="Chapter 33"/>
				<Document path="readings/bible/Job/Job 34" name="Chapter 34"/>
				<Document path="readings/bible/Job/Job 35" name="Chapter 35"/>
				<Document path="readings/bible/Job/Job 36" name="Chapter 36"/>
				<Document path="readings/bible/Job/Job 37" name="Chapter 37"/>
				<Document path="readings/bible/Job/Job 38" name="Chapter 38"/>
				<Document path="readings/bible/Job/Job 39" name="Chapter 39"/>
				<Document path="readings/bible/Job/Job 40" name="Chapter 40"/>
				<Document path="readings/bible/Job/Job 41" name="Chapter 41"/>
				<Document path="readings/bible/Job/Job 42" name="Chapter 42"/>
			</Menu>
			<Menu id="Psalms" name="Psalms" menuStyle="list">
				<Document path="readings/bible/Psalms/Psalms 1" name="Chapter 1"/>
				<Document path="readings/bible/Psalms/Psalms 2" name="Chapter 2"/>
				<Document path="readings/bible/Psalms/Psalms 3" name="Chapter 3"/>
				<Document path="readings/bible/Psalms/Psalms 4" name="Chapter 4"/>
				<Document path="readings/bible/Psalms/Psalms 5" name="Chapter 5"/>
				<Document path="readings/bible/Psalms/Psalms 6" name="Chapter 6"/>
				<Document path="readings/bible/Psalms/Psalms 7" name="Chapter 7"/>
				<Document path="readings/bible/Psalms/Psalms 8" name="Chapter 8"/>
				<Document path="readings/bible/Psalms/Psalms 9" name="Chapter 9"/>
				<Document path="readings/bible/Psalms/Psalms 10" name="Chapter 10"/>
				<Document path="readings/bible/Psalms/Psalms 11" name="Chapter 11"/>
				<Document path="readings/bible/Psalms/Psalms 12" name="Chapter 12"/>
				<Document path="readings/bible/Psalms/Psalms 13" name="Chapter 13"/>
				<Document path="readings/bible/Psalms/Psalms 14" name="Chapter 14"/>
				<Document path="readings/bible/Psalms/Psalms 15" name="Chapter 15"/>
				<Document path="readings/bible/Psalms/Psalms 16" name="Chapter 16"/>
				<Document path="readings/bible/Psalms/Psalms 17" name="Chapter 17"/>
				<Document path="readings/bible/Psalms/Psalms 18" name="Chapter 18"/>
				<Document path="readings/bible/Psalms/Psalms 19" name="Chapter 19"/>
				<Document path="readings/bible/Psalms/Psalms 20" name="Chapter 20"/>
				<Document path="readings/bible/Psalms/Psalms 21" name="Chapter 21"/>
				<Document path="readings/bible/Psalms/Psalms 22" name="Chapter 22"/>
				<Document path="readings/bible/Psalms/Psalms 23" name="Chapter 23"/>
				<Document path="readings/bible/Psalms/Psalms 24" name="Chapter 24"/>
				<Document path="readings/bible/Psalms/Psalms 25" name="Chapter 25"/>
				<Document path="readings/bible/Psalms/Psalms 26" name="Chapter 26"/>
				<Document path="readings/bible/Psalms/Psalms 27" name="Chapter 27"/>
				<Document path="readings/bible/Psalms/Psalms 28" name="Chapter 28"/>
				<Document path="readings/bible/Psalms/Psalms 29" name="Chapter 29"/>
				<Document path="readings/bible/Psalms/Psalms 30" name="Chapter 30"/>
				<Document path="readings/bible/Psalms/Psalms 31" name="Chapter 31"/>
				<Document path="readings/bible/Psalms/Psalms 32" name="Chapter 32"/>
				<Document path="readings/bible/Psalms/Psalms 33" name="Chapter 33"/>
				<Document path="readings/bible/Psalms/Psalms 34" name="Chapter 34"/>
				<Document path="readings/bible/Psalms/Psalms 35" name="Chapter 35"/>
				<Document path="readings/bible/Psalms/Psalms 36" name="Chapter 36"/>
				<Document path="readings/bible/Psalms/Psalms 37" name="Chapter 37"/>
				<Document path="readings/bible/Psalms/Psalms 38" name="Chapter 38"/>
				<Document path="readings/bible/Psalms/Psalms 39" name="Chapter 39"/>
				<Document path="readings/bible/Psalms/Psalms 40" name="Chapter 40"/>
				<Document path="readings/bible/Psalms/Psalms 41" name="Chapter 41"/>
				<Document path="readings/bible/Psalms/Psalms 42" name="Chapter 42"/>
				<Document path="readings/bible/Psalms/Psalms 43" name="Chapter 43"/>
				<Document path="readings/bible/Psalms/Psalms 44" name="Chapter 44"/>
				<Document path="readings/bible/Psalms/Psalms 45" name="Chapter 45"/>
				<Document path="readings/bible/Psalms/Psalms 46" name="Chapter 46"/>
				<Document path="readings/bible/Psalms/Psalms 47" name="Chapter 47"/>
				<Document path="readings/bible/Psalms/Psalms 48" name="Chapter 48"/>
				<Document path="readings/bible/Psalms/Psalms 49" name="Chapter 49"/>
				<Document path="readings/bible/Psalms/Psalms 50" name="Chapter 50"/>
				<Document path="readings/bible/Psalms/Psalms 51" name="Chapter 51"/>
				<Document path="readings/bible/Psalms/Psalms 52" name="Chapter 52"/>
				<Document path="readings/bible/Psalms/Psalms 53" name="Chapter 53"/>
				<Document path="readings/bible/Psalms/Psalms 54" name="Chapter 54"/>
				<Document path="readings/bible/Psalms/Psalms 55" name="Chapter 55"/>
				<Document path="readings/bible/Psalms/Psalms 56" name="Chapter 56"/>
				<Document path="readings/bible/Psalms/Psalms 57" name="Chapter 57"/>
				<Document path="readings/bible/Psalms/Psalms 58" name="Chapter 58"/>
				<Document path="readings/bible/Psalms/Psalms 59" name="Chapter 59"/>
				<Document path="readings/bible/Psalms/Psalms 60" name="Chapter 60"/>
				<Document path="readings/bible/Psalms/Psalms 61" name="Chapter 61"/>
				<Document path="readings/bible/Psalms/Psalms 62" name="Chapter 62"/>
				<Document path="readings/bible/Psalms/Psalms 63" name="Chapter 63"/>
				<Document path="readings/bible/Psalms/Psalms 64" name="Chapter 64"/>
				<Document path="readings/bible/Psalms/Psalms 65" name="Chapter 65"/>
				<Document path="readings/bible/Psalms/Psalms 66" name="Chapter 66"/>
				<Document path="readings/bible/Psalms/Psalms 67" name="Chapter 67"/>
				<Document path="readings/bible/Psalms/Psalms 68" name="Chapter 68"/>
				<Document path="readings/bible/Psalms/Psalms 69" name="Chapter 69"/>
				<Document path="readings/bible/Psalms/Psalms 70" name="Chapter 70"/>
				<Document path="readings/bible/Psalms/Psalms 71" name="Chapter 71"/>
				<Document path="readings/bible/Psalms/Psalms 72" name="Chapter 72"/>
				<Document path="readings/bible/Psalms/Psalms 73" name="Chapter 73"/>
				<Document path="readings/bible/Psalms/Psalms 74" name="Chapter 74"/>
				<Document path="readings/bible/Psalms/Psalms 75" name="Chapter 75"/>
				<Document path="readings/bible/Psalms/Psalms 76" name="Chapter 76"/>
				<Document path="readings/bible/Psalms/Psalms 77" name="Chapter 77"/>
				<Document path="readings/bible/Psalms/Psalms 78" name="Chapter 78"/>
				<Document path="readings/bible/Psalms/Psalms 79" name="Chapter 79"/>
				<Document path="readings/bible/Psalms/Psalms 80" name="Chapter 80"/>
				<Document path="readings/bible/Psalms/Psalms 81" name="Chapter 81"/>
				<Document path="readings/bible/Psalms/Psalms 82" name="Chapter 82"/>
				<Document path="readings/bible/Psalms/Psalms 83" name="Chapter 83"/>
				<Document path="readings/bible/Psalms/Psalms 84" name="Chapter 84"/>
				<Document path="readings/bible/Psalms/Psalms 85" name="Chapter 85"/>
				<Document path="readings/bible/Psalms/Psalms 86" name="Chapter 86"/>
				<Document path="readings/bible/Psalms/Psalms 87" name="Chapter 87"/>
				<Document path="readings/bible/Psalms/Psalms 88" name="Chapter 88"/>
				<Document path="readings/bible/Psalms/Psalms 89" name="Chapter 89"/>
				<Document path="readings/bible/Psalms/Psalms 90" name="Chapter 90"/>
				<Document path="readings/bible/Psalms/Psalms 91" name="Chapter 91"/>
				<Document path="readings/bible/Psalms/Psalms 92" name="Chapter 92"/>
				<Document path="readings/bible/Psalms/Psalms 93" name="Chapter 93"/>
				<Document path="readings/bible/Psalms/Psalms 94" name="Chapter 94"/>
				<Document path="readings/bible/Psalms/Psalms 95" name="Chapter 95"/>
				<Document path="readings/bible/Psalms/Psalms 96" name="Chapter 96"/>
				<Document path="readings/bible/Psalms/Psalms 97" name="Chapter 97"/>
				<Document path="readings/bible/Psalms/Psalms 98" name="Chapter 98"/>
				<Document path="readings/bible/Psalms/Psalms 99" name="Chapter 99"/>
				<Document path="readings/bible/Psalms/Psalms 100" name="Chapter 100"/>
				<Document path="readings/bible/Psalms/Psalms 101" name="Chapter 101"/>
				<Document path="readings/bible/Psalms/Psalms 102" name="Chapter 102"/>
				<Document path="readings/bible/Psalms/Psalms 103" name="Chapter 103"/>
				<Document path="readings/bible/Psalms/Psalms 104" name="Chapter 104"/>
				<Document path="readings/bible/Psalms/Psalms 105" name="Chapter 105"/>
				<Document path="readings/bible/Psalms/Psalms 106" name="Chapter 106"/>
				<Document path="readings/bible/Psalms/Psalms 107" name="Chapter 107"/>
				<Document path="readings/bible/Psalms/Psalms 108" name="Chapter 108"/>
				<Document path="readings/bible/Psalms/Psalms 109" name="Chapter 109"/>
				<Document path="readings/bible/Psalms/Psalms 110" name="Chapter 110"/>
				<Document path="readings/bible/Psalms/Psalms 111" name="Chapter 111"/>
				<Document path="readings/bible/Psalms/Psalms 112" name="Chapter 112"/>
				<Document path="readings/bible/Psalms/Psalms 113" name="Chapter 113"/>
				<Document path="readings/bible/Psalms/Psalms 114" name="Chapter 114"/>
				<Document path="readings/bible/Psalms/Psalms 115" name="Chapter 115"/>
				<Document path="readings/bible/Psalms/Psalms 116" name="Chapter 116"/>
				<Document path="readings/bible/Psalms/Psalms 117" name="Chapter 117"/>
				<Document path="readings/bible/Psalms/Psalms 118" name="Chapter 118"/>
				<Document path="readings/bible/Psalms/Psalms 119" name="Chapter 119"/>
				<Document path="readings/bible/Psalms/Psalms 120" name="Chapter 120"/>
				<Document path="readings/bible/Psalms/Psalms 121" name="Chapter 121"/>
				<Document path="readings/bible/Psalms/Psalms 122" name="Chapter 122"/>
				<Document path="readings/bible/Psalms/Psalms 123" name="Chapter 123"/>
				<Document path="readings/bible/Psalms/Psalms 124" name="Chapter 124"/>
				<Document path="readings/bible/Psalms/Psalms 125" name="Chapter 125"/>
				<Document path="readings/bible/Psalms/Psalms 126" name="Chapter 126"/>
				<Document path="readings/bible/Psalms/Psalms 127" name="Chapter 127"/>
				<Document path="readings/bible/Psalms/Psalms 128" name="Chapter 128"/>
				<Document path="readings/bible/Psalms/Psalms 129" name="Chapter 129"/>
				<Document path="readings/bible/Psalms/Psalms 130" name="Chapter 130"/>
				<Document path="readings/bible/Psalms/Psalms 131" name="Chapter 131"/>
				<Document path="readings/bible/Psalms/Psalms 132" name="Chapter 132"/>
				<Document path="readings/bible/Psalms/Psalms 133" name="Chapter 133"/>
				<Document path="readings/bible/Psalms/Psalms 134" name="Chapter 134"/>
				<Document path="readings/bible/Psalms/Psalms 135" name="Chapter 135"/>
				<Document path="readings/bible/Psalms/Psalms 136" name="Chapter 136"/>
				<Document path="readings/bible/Psalms/Psalms 137" name="Chapter 137"/>
				<Document path="readings/bible/Psalms/Psalms 138" name="Chapter 138"/>
				<Document path="readings/bible/Psalms/Psalms 139" name="Chapter 139"/>
				<Document path="readings/bible/Psalms/Psalms 140" name="Chapter 140"/>
				<Document path="readings/bible/Psalms/Psalms 141" name="Chapter 141"/>
				<Document path="readings/bible/Psalms/Psalms 142" name="Chapter 142"/>
				<Document path="readings/bible/Psalms/Psalms 143" name="Chapter 143"/>
				<Document path="readings/bible/Psalms/Psalms 144" name="Chapter 144"/>
				<Document path="readings/bible/Psalms/Psalms 145" name="Chapter 145"/>
				<Document path="readings/bible/Psalms/Psalms 146" name="Chapter 146"/>
				<Document path="readings/bible/Psalms/Psalms 147" name="Chapter 147"/>
				<Document path="readings/bible/Psalms/Psalms 148" name="Chapter 148"/>
				<Document path="readings/bible/Psalms/Psalms 149" name="Chapter 149"/>
				<Document path="readings/bible/Psalms/Psalms 150" name="Chapter 150"/>
				<Document path="readings/bible/Psalms/Psalms 151" name="Chapter 151"/>
			</Menu>
			<Menu id="Proverbs" name="Proverbs" menuStyle="list">
				<Document path="readings/bible/Proverbs/Proverbs 1" name="Chapter 1"/>
				<Document path="readings/bible/Proverbs/Proverbs 2" name="Chapter 2"/>
				<Document path="readings/bible/Proverbs/Proverbs 3" name="Chapter 3"/>
				<Document path="readings/bible/Proverbs/Proverbs 4" name="Chapter 4"/>
				<Document path="readings/bible/Proverbs/Proverbs 5" name="Chapter 5"/>
				<Document path="readings/bible/Proverbs/Proverbs 6" name="Chapter 6"/>
				<Document path="readings/bible/Proverbs/Proverbs 7" name="Chapter 7"/>
				<Document path="readings/bible/Proverbs/Proverbs 8" name="Chapter 8"/>
				<Document path="readings/bible/Proverbs/Proverbs 9" name="Chapter 9"/>
				<Document path="readings/bible/Proverbs/Proverbs 10" name="Chapter 10"/>
				<Document path="readings/bible/Proverbs/Proverbs 11" name="Chapter 11"/>
				<Document path="readings/bible/Proverbs/Proverbs 12" name="Chapter 12"/>
				<Document path="readings/bible/Proverbs/Proverbs 13" name="Chapter 13"/>
				<Document path="readings/bible/Proverbs/Proverbs 14" name="Chapter 14"/>
				<Document path="readings/bible/Proverbs/Proverbs 15" name="Chapter 15"/>
				<Document path="readings/bible/Proverbs/Proverbs 16" name="Chapter 16"/>
				<Document path="readings/bible/Proverbs/Proverbs 17" name="Chapter 17"/>
				<Document path="readings/bible/Proverbs/Proverbs 18" name="Chapter 18"/>
				<Document path="readings/bible/Proverbs/Proverbs 19" name="Chapter 19"/>
				<Document path="readings/bible/Proverbs/Proverbs 20" name="Chapter 20"/>
				<Document path="readings/bible/Proverbs/Proverbs 21" name="Chapter 21"/>
				<Document path="readings/bible/Proverbs/Proverbs 22" name="Chapter 22"/>
				<Document path="readings/bible/Proverbs/Proverbs 23" name="Chapter 23"/>
				<Document path="readings/bible/Proverbs/Proverbs 24" name="Chapter 24"/>
				<Document path="readings/bible/Proverbs/Proverbs 25" name="Chapter 25"/>
				<Document path="readings/bible/Proverbs/Proverbs 26" name="Chapter 26"/>
				<Document path="readings/bible/Proverbs/Proverbs 27" name="Chapter 27"/>
				<Document path="readings/bible/Proverbs/Proverbs 28" name="Chapter 28"/>
				<Document path="readings/bible/Proverbs/Proverbs 29" name="Chapter 29"/>
				<Document path="readings/bible/Proverbs/Proverbs 30" name="Chapter 30"/>
				<Document path="readings/bible/Proverbs/Proverbs 31" name="Chapter 31"/>
			</Menu>
			<Menu id="Ecclesiastes" name="Ecclesiastes" menuStyle="list">
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 1" name="Chapter 1"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 2" name="Chapter 2"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 3" name="Chapter 3"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 4" name="Chapter 4"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 5" name="Chapter 5"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 6" name="Chapter 6"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 7" name="Chapter 7"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 8" name="Chapter 8"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 9" name="Chapter 9"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 10" name="Chapter 10"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 11" name="Chapter 11"/>
				<Document path="readings/bible/Ecclesiastes/Ecclesiastes 12" name="Chapter 12"/>
			</Menu>
			<Menu id="SongofSolomon" name="Song of Solomon" menuStyle="list">
				<Document path="readings/bible/Song of Solomon/Song of Solomon 1" name="Chapter 1"/>
				<Document path="readings/bible/Song of Solomon/Song of Solomon 2" name="Chapter 2"/>
				<Document path="readings/bible/Song of Solomon/Song of Solomon 3" name="Chapter 3"/>
				<Document path="readings/bible/Song of Solomon/Song of Solomon 4" name="Chapter 4"/>
				<Document path="readings/bible/Song of Solomon/Song of Solomon 5" name="Chapter 5"/>
				<Document path="readings/bible/Song of Solomon/Song of Solomon 6" name="Chapter 6"/>
				<Document path="readings/bible/Song of Solomon/Song of Solomon 7" name="Chapter 7"/>
				<Document path="readings/bible/Song of Solomon/Song of Solomon 8" name="Chapter 8"/>
			</Menu>
			<Menu id="Wisdom" name="Wisdom" menuStyle="list">
				<Document path="readings/bible/Wisdom/Wisdom 1" name="Chapter 1"/>
				<Document path="readings/bible/Wisdom/Wisdom 2" name="Chapter 2"/>
				<Document path="readings/bible/Wisdom/Wisdom 3" name="Chapter 3"/>
				<Document path="readings/bible/Wisdom/Wisdom 4" name="Chapter 4"/>
				<Document path="readings/bible/Wisdom/Wisdom 5" name="Chapter 5"/>
				<Document path="readings/bible/Wisdom/Wisdom 6" name="Chapter 6"/>
				<Document path="readings/bible/Wisdom/Wisdom 7" name="Chapter 7"/>
				<Document path="readings/bible/Wisdom/Wisdom 8" name="Chapter 8"/>
				<Document path="readings/bible/Wisdom/Wisdom 9" name="Chapter 9"/>
				<Document path="readings/bible/Wisdom/Wisdom 10" name="Chapter 10"/>
				<Document path="readings/bible/Wisdom/Wisdom 11" name="Chapter 11"/>
				<Document path="readings/bible/Wisdom/Wisdom 12" name="Chapter 12"/>
				<Document path="readings/bible/Wisdom/Wisdom 13" name="Chapter 13"/>
				<Document path="readings/bible/Wisdom/Wisdom 14" name="Chapter 14"/>
				<Document path="readings/bible/Wisdom/Wisdom 15" name="Chapter 15"/>
				<Document path="readings/bible/Wisdom/Wisdom 16" name="Chapter 16"/>
				<Document path="readings/bible/Wisdom/Wisdom 17" name="Chapter 17"/>
				<Document path="readings/bible/Wisdom/Wisdom 18" name="Chapter 18"/>
				<Document path="readings/bible/Wisdom/Wisdom 19" name="Chapter 19"/>
			</Menu>
			<Menu id="Sirach" name="Sirach" menuStyle="list">
				<Document path="readings/bible/Sirach/Sirach 1" name="Chapter 1"/>
				<Document path="readings/bible/Sirach/Sirach 2" name="Chapter 2"/>
				<Document path="readings/bible/Sirach/Sirach 3" name="Chapter 3"/>
				<Document path="readings/bible/Sirach/Sirach 4" name="Chapter 4"/>
				<Document path="readings/bible/Sirach/Sirach 5" name="Chapter 5"/>
				<Document path="readings/bible/Sirach/Sirach 6" name="Chapter 6"/>
				<Document path="readings/bible/Sirach/Sirach 7" name="Chapter 7"/>
				<Document path="readings/bible/Sirach/Sirach 8" name="Chapter 8"/>
				<Document path="readings/bible/Sirach/Sirach 9" name="Chapter 9"/>
				<Document path="readings/bible/Sirach/Sirach 10" name="Chapter 10"/>
				<Document path="readings/bible/Sirach/Sirach 11" name="Chapter 11"/>
				<Document path="readings/bible/Sirach/Sirach 12" name="Chapter 12"/>
				<Document path="readings/bible/Sirach/Sirach 13" name="Chapter 13"/>
				<Document path="readings/bible/Sirach/Sirach 14" name="Chapter 14"/>
				<Document path="readings/bible/Sirach/Sirach 15" name="Chapter 15"/>
				<Document path="readings/bible/Sirach/Sirach 16" name="Chapter 16"/>
				<Document path="readings/bible/Sirach/Sirach 17" name="Chapter 17"/>
				<Document path="readings/bible/Sirach/Sirach 18" name="Chapter 18"/>
				<Document path="readings/bible/Sirach/Sirach 19" name="Chapter 19"/>
				<Document path="readings/bible/Sirach/Sirach 20" name="Chapter 20"/>
				<Document path="readings/bible/Sirach/Sirach 21" name="Chapter 21"/>
				<Document path="readings/bible/Sirach/Sirach 22" name="Chapter 22"/>
				<Document path="readings/bible/Sirach/Sirach 23" name="Chapter 23"/>
				<Document path="readings/bible/Sirach/Sirach 24" name="Chapter 24"/>
				<Document path="readings/bible/Sirach/Sirach 25" name="Chapter 25"/>
				<Document path="readings/bible/Sirach/Sirach 26" name="Chapter 26"/>
				<Document path="readings/bible/Sirach/Sirach 27" name="Chapter 27"/>
				<Document path="readings/bible/Sirach/Sirach 28" name="Chapter 28"/>
				<Document path="readings/bible/Sirach/Sirach 29" name="Chapter 29"/>
				<Document path="readings/bible/Sirach/Sirach 30" name="Chapter 30"/>
				<Document path="readings/bible/Sirach/Sirach 31" name="Chapter 31"/>
				<Document path="readings/bible/Sirach/Sirach 32" name="Chapter 32"/>
				<Document path="readings/bible/Sirach/Sirach 33" name="Chapter 33"/>
				<Document path="readings/bible/Sirach/Sirach 34" name="Chapter 34"/>
				<Document path="readings/bible/Sirach/Sirach 35" name="Chapter 35"/>
				<Document path="readings/bible/Sirach/Sirach 36" name="Chapter 36"/>
				<Document path="readings/bible/Sirach/Sirach 37" name="Chapter 37"/>
				<Document path="readings/bible/Sirach/Sirach 38" name="Chapter 38"/>
				<Document path="readings/bible/Sirach/Sirach 39" name="Chapter 39"/>
				<Document path="readings/bible/Sirach/Sirach 40" name="Chapter 40"/>
				<Document path="readings/bible/Sirach/Sirach 41" name="Chapter 41"/>
				<Document path="readings/bible/Sirach/Sirach 42" name="Chapter 42"/>
				<Document path="readings/bible/Sirach/Sirach 43" name="Chapter 43"/>
				<Document path="readings/bible/Sirach/Sirach 44" name="Chapter 44"/>
				<Document path="readings/bible/Sirach/Sirach 45" name="Chapter 45"/>
				<Document path="readings/bible/Sirach/Sirach 46" name="Chapter 46"/>
				<Document path="readings/bible/Sirach/Sirach 47" name="Chapter 47"/>
				<Document path="readings/bible/Sirach/Sirach 48" name="Chapter 48"/>
				<Document path="readings/bible/Sirach/Sirach 49" name="Chapter 49"/>
				<Document path="readings/bible/Sirach/Sirach 50" name="Chapter 50"/>
				<Document path="readings/bible/Sirach/Sirach 51" name="Chapter 51"/>
			</Menu>
			<Menu id="Isaiah" name="Isaiah" menuStyle="list">
				<Document path="readings/bible/Isaiah/Isaiah 1" name="Chapter 1"/>
				<Document path="readings/bible/Isaiah/Isaiah 2" name="Chapter 2"/>
				<Document path="readings/bible/Isaiah/Isaiah 3" name="Chapter 3"/>
				<Document path="readings/bible/Isaiah/Isaiah 4" name="Chapter 4"/>
				<Document path="readings/bible/Isaiah/Isaiah 5" name="Chapter 5"/>
				<Document path="readings/bible/Isaiah/Isaiah 6" name="Chapter 6"/>
				<Document path="readings/bible/Isaiah/Isaiah 7" name="Chapter 7"/>
				<Document path="readings/bible/Isaiah/Isaiah 8" name="Chapter 8"/>
				<Document path="readings/bible/Isaiah/Isaiah 9" name="Chapter 9"/>
				<Document path="readings/bible/Isaiah/Isaiah 10" name="Chapter 10"/>
				<Document path="readings/bible/Isaiah/Isaiah 11" name="Chapter 11"/>
				<Document path="readings/bible/Isaiah/Isaiah 12" name="Chapter 12"/>
				<Document path="readings/bible/Isaiah/Isaiah 13" name="Chapter 13"/>
				<Document path="readings/bible/Isaiah/Isaiah 14" name="Chapter 14"/>
				<Document path="readings/bible/Isaiah/Isaiah 15" name="Chapter 15"/>
				<Document path="readings/bible/Isaiah/Isaiah 16" name="Chapter 16"/>
				<Document path="readings/bible/Isaiah/Isaiah 17" name="Chapter 17"/>
				<Document path="readings/bible/Isaiah/Isaiah 18" name="Chapter 18"/>
				<Document path="readings/bible/Isaiah/Isaiah 19" name="Chapter 19"/>
				<Document path="readings/bible/Isaiah/Isaiah 20" name="Chapter 20"/>
				<Document path="readings/bible/Isaiah/Isaiah 21" name="Chapter 21"/>
				<Document path="readings/bible/Isaiah/Isaiah 22" name="Chapter 22"/>
				<Document path="readings/bible/Isaiah/Isaiah 23" name="Chapter 23"/>
				<Document path="readings/bible/Isaiah/Isaiah 24" name="Chapter 24"/>
				<Document path="readings/bible/Isaiah/Isaiah 25" name="Chapter 25"/>
				<Document path="readings/bible/Isaiah/Isaiah 26" name="Chapter 26"/>
				<Document path="readings/bible/Isaiah/Isaiah 27" name="Chapter 27"/>
				<Document path="readings/bible/Isaiah/Isaiah 28" name="Chapter 28"/>
				<Document path="readings/bible/Isaiah/Isaiah 29" name="Chapter 29"/>
				<Document path="readings/bible/Isaiah/Isaiah 30" name="Chapter 30"/>
				<Document path="readings/bible/Isaiah/Isaiah 31" name="Chapter 31"/>
				<Document path="readings/bible/Isaiah/Isaiah 32" name="Chapter 32"/>
				<Document path="readings/bible/Isaiah/Isaiah 33" name="Chapter 33"/>
				<Document path="readings/bible/Isaiah/Isaiah 34" name="Chapter 34"/>
				<Document path="readings/bible/Isaiah/Isaiah 35" name="Chapter 35"/>
				<Document path="readings/bible/Isaiah/Isaiah 36" name="Chapter 36"/>
				<Document path="readings/bible/Isaiah/Isaiah 37" name="Chapter 37"/>
				<Document path="readings/bible/Isaiah/Isaiah 38" name="Chapter 38"/>
				<Document path="readings/bible/Isaiah/Isaiah 39" name="Chapter 39"/>
				<Document path="readings/bible/Isaiah/Isaiah 40" name="Chapter 40"/>
				<Document path="readings/bible/Isaiah/Isaiah 41" name="Chapter 41"/>
				<Document path="readings/bible/Isaiah/Isaiah 42" name="Chapter 42"/>
				<Document path="readings/bible/Isaiah/Isaiah 43" name="Chapter 43"/>
				<Document path="readings/bible/Isaiah/Isaiah 44" name="Chapter 44"/>
				<Document path="readings/bible/Isaiah/Isaiah 45" name="Chapter 45"/>
				<Document path="readings/bible/Isaiah/Isaiah 46" name="Chapter 46"/>
				<Document path="readings/bible/Isaiah/Isaiah 47" name="Chapter 47"/>
				<Document path="readings/bible/Isaiah/Isaiah 48" name="Chapter 48"/>
				<Document path="readings/bible/Isaiah/Isaiah 49" name="Chapter 49"/>
				<Document path="readings/bible/Isaiah/Isaiah 50" name="Chapter 50"/>
				<Document path="readings/bible/Isaiah/Isaiah 51" name="Chapter 51"/>
				<Document path="readings/bible/Isaiah/Isaiah 52" name="Chapter 52"/>
				<Document path="readings/bible/Isaiah/Isaiah 53" name="Chapter 53"/>
				<Document path="readings/bible/Isaiah/Isaiah 54" name="Chapter 54"/>
				<Document path="readings/bible/Isaiah/Isaiah 55" name="Chapter 55"/>
				<Document path="readings/bible/Isaiah/Isaiah 56" name="Chapter 56"/>
				<Document path="readings/bible/Isaiah/Isaiah 57" name="Chapter 57"/>
				<Document path="readings/bible/Isaiah/Isaiah 58" name="Chapter 58"/>
				<Document path="readings/bible/Isaiah/Isaiah 59" name="Chapter 59"/>
				<Document path="readings/bible/Isaiah/Isaiah 60" name="Chapter 60"/>
				<Document path="readings/bible/Isaiah/Isaiah 61" name="Chapter 61"/>
				<Document path="readings/bible/Isaiah/Isaiah 62" name="Chapter 62"/>
				<Document path="readings/bible/Isaiah/Isaiah 63" name="Chapter 63"/>
				<Document path="readings/bible/Isaiah/Isaiah 64" name="Chapter 64"/>
				<Document path="readings/bible/Isaiah/Isaiah 65" name="Chapter 65"/>
				<Document path="readings/bible/Isaiah/Isaiah 66" name="Chapter 66"/>
			</Menu>
			<Menu id="Jeremiah" name="Jeremiah" menuStyle="list">
				<Document path="readings/bible/Jeremiah/Jeremiah 1" name="Chapter 1"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 2" name="Chapter 2"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 3" name="Chapter 3"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 4" name="Chapter 4"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 5" name="Chapter 5"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 6" name="Chapter 6"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 7" name="Chapter 7"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 8" name="Chapter 8"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 9" name="Chapter 9"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 10" name="Chapter 10"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 11" name="Chapter 11"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 12" name="Chapter 12"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 13" name="Chapter 13"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 14" name="Chapter 14"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 15" name="Chapter 15"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 16" name="Chapter 16"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 17" name="Chapter 17"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 18" name="Chapter 18"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 19" name="Chapter 19"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 20" name="Chapter 20"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 21" name="Chapter 21"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 22" name="Chapter 22"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 23" name="Chapter 23"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 24" name="Chapter 24"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 25" name="Chapter 25"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 26" name="Chapter 26"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 27" name="Chapter 27"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 28" name="Chapter 28"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 29" name="Chapter 29"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 30" name="Chapter 30"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 31" name="Chapter 31"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 32" name="Chapter 32"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 33" name="Chapter 33"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 34" name="Chapter 34"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 35" name="Chapter 35"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 36" name="Chapter 36"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 37" name="Chapter 37"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 38" name="Chapter 38"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 39" name="Chapter 39"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 40" name="Chapter 40"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 41" name="Chapter 41"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 42" name="Chapter 42"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 43" name="Chapter 43"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 44" name="Chapter 44"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 45" name="Chapter 45"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 46" name="Chapter 46"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 47" name="Chapter 47"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 48" name="Chapter 48"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 49" name="Chapter 49"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 50" name="Chapter 50"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 51" name="Chapter 51"/>
				<Document path="readings/bible/Jeremiah/Jeremiah 52" name="Chapter 52"/>
			</Menu>
			<Menu id="Lamentations" name="Lamentations" menuStyle="list">
				<Document path="readings/bible/Lamentations/Lamentations 1" name="Chapter 1"/>
				<Document path="readings/bible/Lamentations/Lamentations 2" name="Chapter 2"/>
				<Document path="readings/bible/Lamentations/Lamentations 3" name="Chapter 3"/>
				<Document path="readings/bible/Lamentations/Lamentations 4" name="Chapter 4"/>
				<Document path="readings/bible/Lamentations/Lamentations 5" name="Chapter 5"/>
			</Menu>
			<Menu id="Baruch" name="Baruch" menuStyle="list">
				<Document path="readings/bible/Baruch/Baruch 1" name="Chapter 1"/>
				<Document path="readings/bible/Baruch/Baruch 2" name="Chapter 2"/>
				<Document path="readings/bible/Baruch/Baruch 3" name="Chapter 3"/>
				<Document path="readings/bible/Baruch/Baruch 4" name="Chapter 4"/>
				<Document path="readings/bible/Baruch/Baruch 5" name="Chapter 5"/>
				<Document path="readings/bible/Baruch/Baruch 6" name="Chapter 6"/>
			</Menu>
			<Menu id="Ezekiel" name="Ezekiel" menuStyle="list">
				<Document path="readings/bible/Ezekiel/Ezekiel 1" name="Chapter 1"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 2" name="Chapter 2"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 3" name="Chapter 3"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 4" name="Chapter 4"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 5" name="Chapter 5"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 6" name="Chapter 6"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 7" name="Chapter 7"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 8" name="Chapter 8"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 9" name="Chapter 9"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 10" name="Chapter 10"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 11" name="Chapter 11"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 12" name="Chapter 12"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 13" name="Chapter 13"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 14" name="Chapter 14"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 15" name="Chapter 15"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 16" name="Chapter 16"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 17" name="Chapter 17"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 18" name="Chapter 18"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 19" name="Chapter 19"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 20" name="Chapter 20"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 21" name="Chapter 21"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 22" name="Chapter 22"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 23" name="Chapter 23"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 24" name="Chapter 24"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 25" name="Chapter 25"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 26" name="Chapter 26"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 27" name="Chapter 27"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 28" name="Chapter 28"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 29" name="Chapter 29"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 30" name="Chapter 30"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 31" name="Chapter 31"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 32" name="Chapter 32"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 33" name="Chapter 33"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 34" name="Chapter 34"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 35" name="Chapter 35"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 36" name="Chapter 36"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 37" name="Chapter 37"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 38" name="Chapter 38"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 39" name="Chapter 39"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 40" name="Chapter 40"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 41" name="Chapter 41"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 42" name="Chapter 42"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 43" name="Chapter 43"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 44" name="Chapter 44"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 45" name="Chapter 45"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 46" name="Chapter 46"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 47" name="Chapter 47"/>
				<Document path="readings/bible/Ezekiel/Ezekiel 48" name="Chapter 48"/>
			</Menu>
			<Menu id="Daniel" name="Daniel" menuStyle="list">
				<Document path="readings/bible/Daniel/Daniel 1" name="Chapter 1"/>
				<Document path="readings/bible/Daniel/Daniel 2" name="Chapter 2"/>
				<Document path="readings/bible/Daniel/Daniel 3" name="Chapter 3"/>
				<Document path="readings/bible/Daniel/Daniel 4" name="Chapter 4"/>
				<Document path="readings/bible/Daniel/Daniel 5" name="Chapter 5"/>
				<Document path="readings/bible/Daniel/Daniel 6" name="Chapter 6"/>
				<Document path="readings/bible/Daniel/Daniel 7" name="Chapter 7"/>
				<Document path="readings/bible/Daniel/Daniel 8" name="Chapter 8"/>
				<Document path="readings/bible/Daniel/Daniel 9" name="Chapter 9"/>
				<Document path="readings/bible/Daniel/Daniel 10" name="Chapter 10"/>
				<Document path="readings/bible/Daniel/Daniel 11" name="Chapter 11"/>
				<Document path="readings/bible/Daniel/Daniel 12" name="Chapter 12"/>
				<Document path="readings/bible/Daniel/Daniel 13" name="Chapter 13"/>
				<Document path="readings/bible/Daniel/Daniel 14" name="Chapter 14"/>
			</Menu>
			<Menu id="Hosea" name="Hosea" menuStyle="list">
				<Document path="readings/bible/Hosea/Hosea 1" name="Chapter 1"/>
				<Document path="readings/bible/Hosea/Hosea 2" name="Chapter 2"/>
				<Document path="readings/bible/Hosea/Hosea 3" name="Chapter 3"/>
				<Document path="readings/bible/Hosea/Hosea 4" name="Chapter 4"/>
				<Document path="readings/bible/Hosea/Hosea 5" name="Chapter 5"/>
				<Document path="readings/bible/Hosea/Hosea 6" name="Chapter 6"/>
				<Document path="readings/bible/Hosea/Hosea 7" name="Chapter 7"/>
				<Document path="readings/bible/Hosea/Hosea 8" name="Chapter 8"/>
				<Document path="readings/bible/Hosea/Hosea 9" name="Chapter 9"/>
				<Document path="readings/bible/Hosea/Hosea 10" name="Chapter 10"/>
				<Document path="readings/bible/Hosea/Hosea 11" name="Chapter 11"/>
				<Document path="readings/bible/Hosea/Hosea 12" name="Chapter 12"/>
				<Document path="readings/bible/Hosea/Hosea 13" name="Chapter 13"/>
				<Document path="readings/bible/Hosea/Hosea 14" name="Chapter 14"/>
			</Menu>
			<Menu id="Joel" name="Joel" menuStyle="list">
				<Document path="readings/bible/Joel/Joel 1" name="Chapter 1"/>
				<Document path="readings/bible/Joel/Joel 2" name="Chapter 2"/>
				<Document path="readings/bible/Joel/Joel 3" name="Chapter 3"/>
			</Menu>
			<Menu id="Amos" name="Amos" menuStyle="list">
				<Document path="readings/bible/Amos/Amos 1" name="Chapter 1"/>
				<Document path="readings/bible/Amos/Amos 2" name="Chapter 2"/>
				<Document path="readings/bible/Amos/Amos 3" name="Chapter 3"/>
				<Document path="readings/bible/Amos/Amos 4" name="Chapter 4"/>
				<Document path="readings/bible/Amos/Amos 5" name="Chapter 5"/>
				<Document path="readings/bible/Amos/Amos 6" name="Chapter 6"/>
				<Document path="readings/bible/Amos/Amos 7" name="Chapter 7"/>
				<Document path="readings/bible/Amos/Amos 8" name="Chapter 8"/>
				<Document path="readings/bible/Amos/Amos 9" name="Chapter 9"/>
			</Menu>
			<Menu id="Obadiah" name="Obadiah" menuStyle="list">
				<Document path="readings/bible/Obadiah/Obadiah 1" name="Chapter 1"/>
			</Menu>
			<Menu id="Jonah" name="Jonah" menuStyle="list">
				<Document path="readings/bible/Jonah/Jonah 1" name="Chapter 1"/>
				<Document path="readings/bible/Jonah/Jonah 2" name="Chapter 2"/>
				<Document path="readings/bible/Jonah/Jonah 3" name="Chapter 3"/>
				<Document path="readings/bible/Jonah/Jonah 4" name="Chapter 4"/>
			</Menu>
			<Menu id="Micah" name="Micah" menuStyle="list">
				<Document path="readings/bible/Micah/Micah 1" name="Chapter 1"/>
				<Document path="readings/bible/Micah/Micah 2" name="Chapter 2"/>
				<Document path="readings/bible/Micah/Micah 3" name="Chapter 3"/>
				<Document path="readings/bible/Micah/Micah 4" name="Chapter 4"/>
				<Document path="readings/bible/Micah/Micah 5" name="Chapter 5"/>
				<Document path="readings/bible/Micah/Micah 6" name="Chapter 6"/>
				<Document path="readings/bible/Micah/Micah 7" name="Chapter 7"/>
			</Menu>
			<Menu id="Nahum" name="Nahum" menuStyle="list">
				<Document path="readings/bible/Nahum/Nahum 1" name="Chapter 1"/>
				<Document path="readings/bible/Nahum/Nahum 2" name="Chapter 2"/>
				<Document path="readings/bible/Nahum/Nahum 3" name="Chapter 3"/>
			</Menu>
			<Menu id="Habakkuk" name="Habakkuk" menuStyle="list">
				<Document path="readings/bible/Habakkuk/Habakkuk 1" name="Chapter 1"/>
				<Document path="readings/bible/Habakkuk/Habakkuk 2" name="Chapter 2"/>
				<Document path="readings/bible/Habakkuk/Habakkuk 3" name="Chapter 3"/>
			</Menu>
			<Menu id="Zephaniah" name="Zephaniah" menuStyle="list">
				<Document path="readings/bible/Zephaniah/Zephaniah 1" name="Chapter 1"/>
				<Document path="readings/bible/Zephaniah/Zephaniah 2" name="Chapter 2"/>
				<Document path="readings/bible/Zephaniah/Zephaniah 3" name="Chapter 3"/>
			</Menu>
			<Menu id="Haggai" name="Haggai" menuStyle="list">
				<Document path="readings/bible/Haggai/Haggai 1" name="Chapter 1"/>
				<Document path="readings/bible/Haggai/Haggai 2" name="Chapter 2"/>
			</Menu>
			<Menu id="Zechariah" name="Zechariah" menuStyle="list">
				<Document path="readings/bible/Zechariah/Zechariah 1" name="Chapter 1"/>
				<Document path="readings/bible/Zechariah/Zechariah 2" name="Chapter 2"/>
				<Document path="readings/bible/Zechariah/Zechariah 3" name="Chapter 3"/>
				<Document path="readings/bible/Zechariah/Zechariah 4" name="Chapter 4"/>
				<Document path="readings/bible/Zechariah/Zechariah 5" name="Chapter 5"/>
				<Document path="readings/bible/Zechariah/Zechariah 6" name="Chapter 6"/>
				<Document path="readings/bible/Zechariah/Zechariah 7" name="Chapter 7"/>
				<Document path="readings/bible/Zechariah/Zechariah 8" name="Chapter 8"/>
				<Document path="readings/bible/Zechariah/Zechariah 9" name="Chapter 9"/>
				<Document path="readings/bible/Zechariah/Zechariah 10" name="Chapter 10"/>
				<Document path="readings/bible/Zechariah/Zechariah 11" name="Chapter 11"/>
				<Document path="readings/bible/Zechariah/Zechariah 12" name="Chapter 12"/>
				<Document path="readings/bible/Zechariah/Zechariah 13" name="Chapter 13"/>
				<Document path="readings/bible/Zechariah/Zechariah 14" name="Chapter 14"/>
			</Menu>
			<Menu id="Malachi" name="Malachi" menuStyle="list">
				<Document path="readings/bible/Malachi/Malachi 1" name="Chapter 1"/>
				<Document path="readings/bible/Malachi/Malachi 2" name="Chapter 2"/>
				<Document path="readings/bible/Malachi/Malachi 3" name="Chapter 3"/>
				<Document path="readings/bible/Malachi/Malachi 4" name="Chapter 4"/>
			</Menu>
			<Menu id="1Maccabees" name="1 Maccabees" menuStyle="list">
				<Document path="readings/bible/1 Maccabees/1 Maccabees 1" name="Chapter 1"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 2" name="Chapter 2"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 3" name="Chapter 3"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 4" name="Chapter 4"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 5" name="Chapter 5"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 6" name="Chapter 6"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 7" name="Chapter 7"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 8" name="Chapter 8"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 9" name="Chapter 9"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 10" name="Chapter 10"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 11" name="Chapter 11"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 12" name="Chapter 12"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 13" name="Chapter 13"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 14" name="Chapter 14"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 15" name="Chapter 15"/>
				<Document path="readings/bible/1 Maccabees/1 Maccabees 16" name="Chapter 16"/>
			</Menu>
			<Menu id="2Maccabees" name="2 Maccabees" menuStyle="list">
				<Document path="readings/bible/2 Maccabees/2 Maccabees 1" name="Chapter 1"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 2" name="Chapter 2"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 3" name="Chapter 3"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 4" name="Chapter 4"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 5" name="Chapter 5"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 6" name="Chapter 6"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 7" name="Chapter 7"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 8" name="Chapter 8"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 9" name="Chapter 9"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 10" name="Chapter 10"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 11" name="Chapter 11"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 12" name="Chapter 12"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 13" name="Chapter 13"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 14" name="Chapter 14"/>
				<Document path="readings/bible/2 Maccabees/2 Maccabees 15" name="Chapter 15"/>
			</Menu>
			<Menu id="PrayerOfManasseh" name="Prayer of Manasseh" menuStyle="list">
				<Document path="readings/bible/Prayer of Manasseh/Prayer of Manasseh 1" name="Chapter 1"/>
			</Menu>
			<Menu id="Matthew" name="Matthew" menuStyle="list">
				<Document path="readings/bible/Matthew/Matthew 1" name="Chapter 1"/>
				<Document path="readings/bible/Matthew/Matthew 2" name="Chapter 2"/>
				<Document path="readings/bible/Matthew/Matthew 3" name="Chapter 3"/>
				<Document path="readings/bible/Matthew/Matthew 4" name="Chapter 4"/>
				<Document path="readings/bible/Matthew/Matthew 5" name="Chapter 5"/>
				<Document path="readings/bible/Matthew/Matthew 6" name="Chapter 6"/>
				<Document path="readings/bible/Matthew/Matthew 7" name="Chapter 7"/>
				<Document path="readings/bible/Matthew/Matthew 8" name="Chapter 8"/>
				<Document path="readings/bible/Matthew/Matthew 9" name="Chapter 9"/>
				<Document path="readings/bible/Matthew/Matthew 10" name="Chapter 10"/>
				<Document path="readings/bible/Matthew/Matthew 11" name="Chapter 11"/>
				<Document path="readings/bible/Matthew/Matthew 12" name="Chapter 12"/>
				<Document path="readings/bible/Matthew/Matthew 13" name="Chapter 13"/>
				<Document path="readings/bible/Matthew/Matthew 14" name="Chapter 14"/>
				<Document path="readings/bible/Matthew/Matthew 15" name="Chapter 15"/>
				<Document path="readings/bible/Matthew/Matthew 16" name="Chapter 16"/>
				<Document path="readings/bible/Matthew/Matthew 17" name="Chapter 17"/>
				<Document path="readings/bible/Matthew/Matthew 18" name="Chapter 18"/>
				<Document path="readings/bible/Matthew/Matthew 19" name="Chapter 19"/>
				<Document path="readings/bible/Matthew/Matthew 20" name="Chapter 20"/>
				<Document path="readings/bible/Matthew/Matthew 21" name="Chapter 21"/>
				<Document path="readings/bible/Matthew/Matthew 22" name="Chapter 22"/>
				<Document path="readings/bible/Matthew/Matthew 23" name="Chapter 23"/>
				<Document path="readings/bible/Matthew/Matthew 24" name="Chapter 24"/>
				<Document path="readings/bible/Matthew/Matthew 25" name="Chapter 25"/>
				<Document path="readings/bible/Matthew/Matthew 26" name="Chapter 26"/>
				<Document path="readings/bible/Matthew/Matthew 27" name="Chapter 27"/>
				<Document path="readings/bible/Matthew/Matthew 28" name="Chapter 28"/>
			</Menu>
			<Menu id="Mark" name="Mark" menuStyle="list">
				<Document path="readings/bible/Mark/Mark 1" name="Chapter 1"/>
				<Document path="readings/bible/Mark/Mark 2" name="Chapter 2"/>
				<Document path="readings/bible/Mark/Mark 3" name="Chapter 3"/>
				<Document path="readings/bible/Mark/Mark 4" name="Chapter 4"/>
				<Document path="readings/bible/Mark/Mark 5" name="Chapter 5"/>
				<Document path="readings/bible/Mark/Mark 6" name="Chapter 6"/>
				<Document path="readings/bible/Mark/Mark 7" name="Chapter 7"/>
				<Document path="readings/bible/Mark/Mark 8" name="Chapter 8"/>
				<Document path="readings/bible/Mark/Mark 9" name="Chapter 9"/>
				<Document path="readings/bible/Mark/Mark 10" name="Chapter 10"/>
				<Document path="readings/bible/Mark/Mark 11" name="Chapter 11"/>
				<Document path="readings/bible/Mark/Mark 12" name="Chapter 12"/>
				<Document path="readings/bible/Mark/Mark 13" name="Chapter 13"/>
				<Document path="readings/bible/Mark/Mark 14" name="Chapter 14"/>
				<Document path="readings/bible/Mark/Mark 15" name="Chapter 15"/>
				<Document path="readings/bible/Mark/Mark 16" name="Chapter 16"/>
			</Menu>
			<Menu id="Luke" name="Luke" menuStyle="list">
				<Document path="readings/bible/Luke/Luke 1" name="Chapter 1"/>
				<Document path="readings/bible/Luke/Luke 2" name="Chapter 2"/>
				<Document path="readings/bible/Luke/Luke 3" name="Chapter 3"/>
				<Document path="readings/bible/Luke/Luke 4" name="Chapter 4"/>
				<Document path="readings/bible/Luke/Luke 5" name="Chapter 5"/>
				<Document path="readings/bible/Luke/Luke 6" name="Chapter 6"/>
				<Document path="readings/bible/Luke/Luke 7" name="Chapter 7"/>
				<Document path="readings/bible/Luke/Luke 8" name="Chapter 8"/>
				<Document path="readings/bible/Luke/Luke 9" name="Chapter 9"/>
				<Document path="readings/bible/Luke/Luke 10" name="Chapter 10"/>
				<Document path="readings/bible/Luke/Luke 11" name="Chapter 11"/>
				<Document path="readings/bible/Luke/Luke 12" name="Chapter 12"/>
				<Document path="readings/bible/Luke/Luke 13" name="Chapter 13"/>
				<Document path="readings/bible/Luke/Luke 14" name="Chapter 14"/>
				<Document path="readings/bible/Luke/Luke 15" name="Chapter 15"/>
				<Document path="readings/bible/Luke/Luke 16" name="Chapter 16"/>
				<Document path="readings/bible/Luke/Luke 17" name="Chapter 17"/>
				<Document path="readings/bible/Luke/Luke 18" name="Chapter 18"/>
				<Document path="readings/bible/Luke/Luke 19" name="Chapter 19"/>
				<Document path="readings/bible/Luke/Luke 20" name="Chapter 20"/>
				<Document path="readings/bible/Luke/Luke 21" name="Chapter 21"/>
				<Document path="readings/bible/Luke/Luke 22" name="Chapter 22"/>
				<Document path="readings/bible/Luke/Luke 23" name="Chapter 23"/>
				<Document path="readings/bible/Luke/Luke 24" name="Chapter 24"/>
			</Menu>
			<Menu id="John" name="John" menuStyle="list">
				<Document path="readings/bible/John/John 1" name="Chapter 1"/>
				<Document path="readings/bible/John/John 2" name="Chapter 2"/>
				<Document path="readings/bible/John/John 3" name="Chapter 3"/>
				<Document path="readings/bible/John/John 4" name="Chapter 4"/>
				<Document path="readings/bible/John/John 5" name="Chapter 5"/>
				<Document path="readings/bible/John/John 6" name="Chapter 6"/>
				<Document path="readings/bible/John/John 7" name="Chapter 7"/>
				<Document path="readings/bible/John/John 8" name="Chapter 8"/>
				<Document path="readings/bible/John/John 9" name="Chapter 9"/>
				<Document path="readings/bible/John/John 10" name="Chapter 10"/>
				<Document path="readings/bible/John/John 11" name="Chapter 11"/>
				<Document path="readings/bible/John/John 12" name="Chapter 12"/>
				<Document path="readings/bible/John/John 13" name="Chapter 13"/>
				<Document path="readings/bible/John/John 14" name="Chapter 14"/>
				<Document path="readings/bible/John/John 15" name="Chapter 15"/>
				<Document path="readings/bible/John/John 16" name="Chapter 16"/>
				<Document path="readings/bible/John/John 17" name="Chapter 17"/>
				<Document path="readings/bible/John/John 18" name="Chapter 18"/>
				<Document path="readings/bible/John/John 19" name="Chapter 19"/>
				<Document path="readings/bible/John/John 20" name="Chapter 20"/>
				<Document path="readings/bible/John/John 21" name="Chapter 21"/>
			</Menu>
			<Menu id="Acts" name="Acts" menuStyle="list">
				<Document path="readings/bible/Acts/Acts 1" name="Chapter 1"/>
				<Document path="readings/bible/Acts/Acts 2" name="Chapter 2"/>
				<Document path="readings/bible/Acts/Acts 3" name="Chapter 3"/>
				<Document path="readings/bible/Acts/Acts 4" name="Chapter 4"/>
				<Document path="readings/bible/Acts/Acts 5" name="Chapter 5"/>
				<Document path="readings/bible/Acts/Acts 6" name="Chapter 6"/>
				<Document path="readings/bible/Acts/Acts 7" name="Chapter 7"/>
				<Document path="readings/bible/Acts/Acts 8" name="Chapter 8"/>
				<Document path="readings/bible/Acts/Acts 9" name="Chapter 9"/>
				<Document path="readings/bible/Acts/Acts 10" name="Chapter 10"/>
				<Document path="readings/bible/Acts/Acts 11" name="Chapter 11"/>
				<Document path="readings/bible/Acts/Acts 12" name="Chapter 12"/>
				<Document path="readings/bible/Acts/Acts 13" name="Chapter 13"/>
				<Document path="readings/bible/Acts/Acts 14" name="Chapter 14"/>
				<Document path="readings/bible/Acts/Acts 15" name="Chapter 15"/>
				<Document path="readings/bible/Acts/Acts 16" name="Chapter 16"/>
				<Document path="readings/bible/Acts/Acts 17" name="Chapter 17"/>
				<Document path="readings/bible/Acts/Acts 18" name="Chapter 18"/>
				<Document path="readings/bible/Acts/Acts 19" name="Chapter 19"/>
				<Document path="readings/bible/Acts/Acts 20" name="Chapter 20"/>
				<Document path="readings/bible/Acts/Acts 21" name="Chapter 21"/>
				<Document path="readings/bible/Acts/Acts 22" name="Chapter 22"/>
				<Document path="readings/bible/Acts/Acts 23" name="Chapter 23"/>
				<Document path="readings/bible/Acts/Acts 24" name="Chapter 24"/>
				<Document path="readings/bible/Acts/Acts 25" name="Chapter 25"/>
				<Document path="readings/bible/Acts/Acts 26" name="Chapter 26"/>
				<Document path="readings/bible/Acts/Acts 27" name="Chapter 27"/>
				<Document path="readings/bible/Acts/Acts 28" name="Chapter 28"/>
			</Menu>
			<Menu id="Romans" name="Romans" menuStyle="list">
				<Document path="readings/bible/Romans/Romans 1" name="Chapter 1"/>
				<Document path="readings/bible/Romans/Romans 2" name="Chapter 2"/>
				<Document path="readings/bible/Romans/Romans 3" name="Chapter 3"/>
				<Document path="readings/bible/Romans/Romans 4" name="Chapter 4"/>
				<Document path="readings/bible/Romans/Romans 5" name="Chapter 5"/>
				<Document path="readings/bible/Romans/Romans 6" name="Chapter 6"/>
				<Document path="readings/bible/Romans/Romans 7" name="Chapter 7"/>
				<Document path="readings/bible/Romans/Romans 8" name="Chapter 8"/>
				<Document path="readings/bible/Romans/Romans 9" name="Chapter 9"/>
				<Document path="readings/bible/Romans/Romans 10" name="Chapter 10"/>
				<Document path="readings/bible/Romans/Romans 11" name="Chapter 11"/>
				<Document path="readings/bible/Romans/Romans 12" name="Chapter 12"/>
				<Document path="readings/bible/Romans/Romans 13" name="Chapter 13"/>
				<Document path="readings/bible/Romans/Romans 14" name="Chapter 14"/>
				<Document path="readings/bible/Romans/Romans 15" name="Chapter 15"/>
				<Document path="readings/bible/Romans/Romans 16" name="Chapter 16"/>
			</Menu>
			<Menu id="1Corinthians" name="1 Corinthians" menuStyle="list">
				<Document path="readings/bible/1 Corinthians/1 Corinthians 1" name="Chapter 1"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 2" name="Chapter 2"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 3" name="Chapter 3"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 4" name="Chapter 4"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 5" name="Chapter 5"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 6" name="Chapter 6"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 7" name="Chapter 7"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 8" name="Chapter 8"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 9" name="Chapter 9"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 10" name="Chapter 10"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 11" name="Chapter 11"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 12" name="Chapter 12"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 13" name="Chapter 13"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 14" name="Chapter 14"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 15" name="Chapter 15"/>
				<Document path="readings/bible/1 Corinthians/1 Corinthians 16" name="Chapter 16"/>
			</Menu>
			<Menu id="2Corinthians" name="2 Corinthians" menuStyle="list">
				<Document path="readings/bible/2 Corinthians/2 Corinthians 1" name="Chapter 1"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 2" name="Chapter 2"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 3" name="Chapter 3"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 4" name="Chapter 4"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 5" name="Chapter 5"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 6" name="Chapter 6"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 7" name="Chapter 7"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 8" name="Chapter 8"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 9" name="Chapter 9"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 10" name="Chapter 10"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 11" name="Chapter 11"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 12" name="Chapter 12"/>
				<Document path="readings/bible/2 Corinthians/2 Corinthians 13" name="Chapter 13"/>
			</Menu>
			<Menu id="Galatians" name="Galatians" menuStyle="list">
				<Document path="readings/bible/Galatians/Galatians 1" name="Chapter 1"/>
				<Document path="readings/bible/Galatians/Galatians 2" name="Chapter 2"/>
				<Document path="readings/bible/Galatians/Galatians 3" name="Chapter 3"/>
				<Document path="readings/bible/Galatians/Galatians 4" name="Chapter 4"/>
				<Document path="readings/bible/Galatians/Galatians 5" name="Chapter 5"/>
				<Document path="readings/bible/Galatians/Galatians 6" name="Chapter 6"/>
			</Menu>
			<Menu id="Ephesians" name="Ephesians" menuStyle="list">
				<Document path="readings/bible/Ephesians/Ephesians 1" name="Chapter 1"/>
				<Document path="readings/bible/Ephesians/Ephesians 2" name="Chapter 2"/>
				<Document path="readings/bible/Ephesians/Ephesians 3" name="Chapter 3"/>
				<Document path="readings/bible/Ephesians/Ephesians 4" name="Chapter 4"/>
				<Document path="readings/bible/Ephesians/Ephesians 5" name="Chapter 5"/>
				<Document path="readings/bible/Ephesians/Ephesians 6" name="Chapter 6"/>
			</Menu>
			<Menu id="Philippians" name="Philippians" menuStyle="list">
				<Document path="readings/bible/Philippians/Philippians 1" name="Chapter 1"/>
				<Document path="readings/bible/Philippians/Philippians 2" name="Chapter 2"/>
				<Document path="readings/bible/Philippians/Philippians 3" name="Chapter 3"/>
				<Document path="readings/bible/Philippians/Philippians 4" name="Chapter 4"/>
			</Menu>
			<Menu id="Colossians" name="Colossians" menuStyle="list">
				<Document path="readings/bible/Colossians/Colossians 1" name="Chapter 1"/>
				<Document path="readings/bible/Colossians/Colossians 2" name="Chapter 2"/>
				<Document path="readings/bible/Colossians/Colossians 3" name="Chapter 3"/>
				<Document path="readings/bible/Colossians/Colossians 4" name="Chapter 4"/>
			</Menu>
			<Menu id="1Thessalonians" name="1 Thessalonians" menuStyle="list">
				<Document path="readings/bible/1 Thessalonians/1 Thessalonians 1" name="Chapter 1"/>
				<Document path="readings/bible/1 Thessalonians/1 Thessalonians 2" name="Chapter 2"/>
				<Document path="readings/bible/1 Thessalonians/1 Thessalonians 3" name="Chapter 3"/>
				<Document path="readings/bible/1 Thessalonians/1 Thessalonians 4" name="Chapter 4"/>
				<Document path="readings/bible/1 Thessalonians/1 Thessalonians 5" name="Chapter 5"/>
			</Menu>
			<Menu id="2Thessalonians" name="2 Thessalonians" menuStyle="list">
				<Document path="readings/bible/2 Thessalonians/2 Thessalonians 1" name="Chapter 1"/>
				<Document path="readings/bible/2 Thessalonians/2 Thessalonians 2" name="Chapter 2"/>
				<Document path="readings/bible/2 Thessalonians/2 Thessalonians 3" name="Chapter 3"/>
			</Menu>
			<Menu id="1Timothy" name="1 Timothy" menuStyle="list">
				<Document path="readings/bible/1 Timothy/1 Timothy 1" name="Chapter 1"/>
				<Document path="readings/bible/1 Timothy/1 Timothy 2" name="Chapter 2"/>
				<Document path="readings/bible/1 Timothy/1 Timothy 3" name="Chapter 3"/>
				<Document path="readings/bible/1 Timothy/1 Timothy 4" name="Chapter 4"/>
				<Document path="readings/bible/1 Timothy/1 Timothy 5" name="Chapter 5"/>
				<Document path="readings/bible/1 Timothy/1 Timothy 6" name="Chapter 6"/>
			</Menu>
			<Menu id="2Timothy" name="2 Timothy" menuStyle="list">
				<Document path="readings/bible/2 Timothy/2 Timothy 1" name="Chapter 1"/>
				<Document path="readings/bible/2 Timothy/2 Timothy 2" name="Chapter 2"/>
				<Document path="readings/bible/2 Timothy/2 Timothy 3" name="Chapter 3"/>
				<Document path="readings/bible/2 Timothy/2 Timothy 4" name="Chapter 4"/>
			</Menu>
			<Menu id="Titus" name="Titus" menuStyle="list">
				<Document path="readings/bible/Titus/Titus 1" name="Chapter 1"/>
				<Document path="readings/bible/Titus/Titus 2" name="Chapter 2"/>
				<Document path="readings/bible/Titus/Titus 3" name="Chapter 3"/>
			</Menu>
			<Menu id="Philemon" name="Philemon" menuStyle="list">
				<Document path="readings/bible/Philemon/Philemon 1" name="Chapter 1"/>
			</Menu>
			<Menu id="Hebrews" name="Hebrews" menuStyle="list">
				<Document path="readings/bible/Hebrews/Hebrews 1" name="Chapter 1"/>
				<Document path="readings/bible/Hebrews/Hebrews 2" name="Chapter 2"/>
				<Document path="readings/bible/Hebrews/Hebrews 3" name="Chapter 3"/>
				<Document path="readings/bible/Hebrews/Hebrews 4" name="Chapter 4"/>
				<Document path="readings/bible/Hebrews/Hebrews 5" name="Chapter 5"/>
				<Document path="readings/bible/Hebrews/Hebrews 6" name="Chapter 6"/>
				<Document path="readings/bible/Hebrews/Hebrews 7" name="Chapter 7"/>
				<Document path="readings/bible/Hebrews/Hebrews 8" name="Chapter 8"/>
				<Document path="readings/bible/Hebrews/Hebrews 9" name="Chapter 9"/>
				<Document path="readings/bible/Hebrews/Hebrews 10" name="Chapter 10"/>
				<Document path="readings/bible/Hebrews/Hebrews 11" name="Chapter 11"/>
				<Document path="readings/bible/Hebrews/Hebrews 12" name="Chapter 12"/>
				<Document path="readings/bible/Hebrews/Hebrews 13" name="Chapter 13"/>
			</Menu>
			<Menu id="James" name="James" menuStyle="list">
				<Document path="readings/bible/James/James 1" name="Chapter 1"/>
				<Document path="readings/bible/James/James 2" name="Chapter 2"/>
				<Document path="readings/bible/James/James 3" name="Chapter 3"/>
				<Document path="readings/bible/James/James 4" name="Chapter 4"/>
				<Document path="readings/bible/James/James 5" name="Chapter 5"/>
			</Menu>
			<Menu id="1Peter" name="1 Peter" menuStyle="list">
				<Document path="readings/bible/1 Peter/1 Peter 1" name="Chapter 1"/>
				<Document path="readings/bible/1 Peter/1 Peter 2" name="Chapter 2"/>
				<Document path="readings/bible/1 Peter/1 Peter 3" name="Chapter 3"/>
				<Document path="readings/bible/1 Peter/1 Peter 4" name="Chapter 4"/>
				<Document path="readings/bible/1 Peter/1 Peter 5" name="Chapter 5"/>
			</Menu>
			<Menu id="2Peter" name="2 Peter" menuStyle="list">
				<Document path="readings/bible/2 Peter/2 Peter 1" name="Chapter 1"/>
				<Document path="readings/bible/2 Peter/2 Peter 2" name="Chapter 2"/>
				<Document path="readings/bible/2 Peter/2 Peter 3" name="Chapter 3"/>
			</Menu>
			<Menu id="1John" name="1 John" menuStyle="list">
				<Document path="readings/bible/1 John/1 John 1" name="Chapter 1"/>
				<Document path="readings/bible/1 John/1 John 2" name="Chapter 2"/>
				<Document path="readings/bible/1 John/1 John 3" name="Chapter 3"/>
				<Document path="readings/bible/1 John/1 John 4" name="Chapter 4"/>
				<Document path="readings/bible/1 John/1 John 5" name="Chapter 5"/>
			</Menu>
			<Menu id="2John" name="2 John" menuStyle="list">
				<Document path="readings/bible/2 John/2 John 1" name="Chapter 1"/>
			</Menu>
			<Menu id="3John" name="3 John" menuStyle="list">
				<Document path="readings/bible/3 John/3 John 1" name="Chapter 1"/>
			</Menu>
			<Menu id="Jude" name="Jude" menuStyle="list">
				<Document path="readings/bible/Jude/Jude 1" name="Chapter 1"/>
			</Menu>
			<Menu id="Revelation" name="Revelation" menuStyle="list">
				<Document path="readings/bible/Revelation/Revelation 1" name="Chapter 1"/>
				<Document path="readings/bible/Revelation/Revelation 2" name="Chapter 2"/>
				<Document path="readings/bible/Revelation/Revelation 3" name="Chapter 3"/>
				<Document path="readings/bible/Revelation/Revelation 4" name="Chapter 4"/>
				<Document path="readings/bible/Revelation/Revelation 5" name="Chapter 5"/>
				<Document path="readings/bible/Revelation/Revelation 6" name="Chapter 6"/>
				<Document path="readings/bible/Revelation/Revelation 7" name="Chapter 7"/>
				<Document path="readings/bible/Revelation/Revelation 8" name="Chapter 8"/>
				<Document path="readings/bible/Revelation/Revelation 9" name="Chapter 9"/>
				<Document path="readings/bible/Revelation/Revelation 10" name="Chapter 10"/>
				<Document path="readings/bible/Revelation/Revelation 11" name="Chapter 11"/>
				<Document path="readings/bible/Revelation/Revelation 12" name="Chapter 12"/>
				<Document path="readings/bible/Revelation/Revelation 13" name="Chapter 13"/>
				<Document path="readings/bible/Revelation/Revelation 14" name="Chapter 14"/>
				<Document path="readings/bible/Revelation/Revelation 15" name="Chapter 15"/>
				<Document path="readings/bible/Revelation/Revelation 16" name="Chapter 16"/>
				<Document path="readings/bible/Revelation/Revelation 17" name="Chapter 17"/>
				<Document path="readings/bible/Revelation/Revelation 18" name="Chapter 18"/>
				<Document path="readings/bible/Revelation/Revelation 19" name="Chapter 19"/>
				<Document path="readings/bible/Revelation/Revelation 20" name="Chapter 20"/>
				<Document path="readings/bible/Revelation/Revelation 21" name="Chapter 21"/>
				<Document path="readings/bible/Revelation/Revelation 22" name="Chapter 22"/>
			</Menu>
		</Menu>
		<Menu id="Liturgies" name="Liturgies" menuStyle="icons">
			<Menu id="StBasilLiturgy" name="St. Basil" menuStyle="list">
				<Document path="liturgies/basil/Offering of the Lamb"/>
				<Document path="liturgies/basil/Liturgy of the Word"/>
				<Document path="liturgies/basil/Liturgy of the Faithful"/>
				<Document path="liturgies/basil/Distribution of the Holy Mysteries" name="Distribution"/>
			</Menu>
			<Menu id="StGregoryLiturgy" name="St. Gregory" menuStyle="list">
				<Document path="liturgies/gregory/Offering of the Lamb"/>
				<Document path="liturgies/gregory/Liturgy of the Word"/>
				<Document path="liturgies/gregory/Liturgy of the Faithful"/>
				<Document path="liturgies/gregory/Distribution of the Holy Mysteries" name="Distribution"/>
			</Menu>
			<Menu id="StCyrilLiturgy" name="St. Cyril" menuStyle="list">
				<Document path="liturgies/cyril/Offering of the Lamb"/>
				<Document path="liturgies/cyril/Liturgy of the Word"/>
				<Document path="liturgies/cyril/Liturgy of the Faithful"/>
				<Document path="liturgies/cyril/Distribution of the Holy Mysteries" name="Distribution"/>
			</Menu>
			<Document path="raisingOfIncense/Matins"/>
			<Document path="raisingOfIncense/Vespers"/>
		</Menu>
		<Menu id="Readings" name="Readings" menuStyle="icons">
			<Document path="readings/Vespers Psalm and Gospel" name="Vespers" icon="vespers"/>
			<Menu id="MatinsReadings" name="Matins" menuStyle="list" icon="matins">
				<Document path="readings/Prophecies"/>
				<Document path="readings/Matins Psalm and Gospel" name="Psalm and Gospel"/>
			</Menu>
			<Menu id="LiturgyReadings" name="Liturgy" menuStyle="list" icon="liturgies">
				<Document path="readings/Pauline Epistle"/>
				<Document path="readings/Catholic Epistle"/>
				<Document path="readings/Praxis"/>
				<Document path="readings/Synaxarion"/>
				<Document path="readings/Liturgy Psalm and Gospel" name="Psalm and Gospel"/>
			</Menu>
			<Document path="antiphonary/Antiphonary"/>
		</Menu>
		<Document path="melodies/Melodies"/>
		<Menu id="Index" name="Index" menuStyle="list">
			<Menu id="Feasts" name="Feasts" menuStyle="list">
				<Document path="liturgies/index/Coptic New Year"/>
				<Document path="liturgies/index/Feast of the Cross"/>
				<Document path="liturgies/index/Apostles' Feast"/>
				<Document path="liturgies/index/Joyful 29th of the Month"/>
				<Menu id="MajorFeasts" name="Major Feasts of the Lord" menuStyle="list">
					<Document path="liturgies/index/Nativity"/>
					<Document path="liturgies/index/Theophany"/>
					<Document path="liturgies/index/Annunciation"/>
					<Document path="liturgies/index/Hosanna Sunday"/>
					<Menu id="Holy50Days" name="Holy 50 Days" menuStyle="list">
						<Document path="liturgies/index/pentecost/Resurrection Days 1-39" name="Days 1-39"/>
						<Document path="liturgies/index/pentecost/Resurrection Days 40-49" name="Days 40-49"/>
						<Document path="liturgies/index/pentecost/Thomas Sunday"/>
						<Document path="liturgies/index/pentecost/Pentecost"/>
					</Menu>
				</Menu>
				<Menu id="MinorFeasts" name="Minor Feasts of the Lord" menuStyle="list">
					<Document path="liturgies/index/Circumcision"/>
					<Document path="liturgies/index/Wedding at Cana of Galilee"/>
					<Document path="liturgies/index/Presentation of the Lord Christ in the Temple"/>
					<Document path="liturgies/index/Covenant Thursday"/>
					<Document path="liturgies/index/Entrance of the Lord Christ into the Land of Egypt"/>
					<Document path="liturgies/index/Transfiguration"/>
				</Menu>
			</Menu>
			<Menu id="Fasts" name="Fasts" menuStyle="list">
				<Document path="liturgies/index/Nativity Fast"/>
				<Menu id="Koiahk" name="Month of Koiahk" menuStyle="list">
					<Document path="liturgies/index/koiahk/Koiahk Weekdays" name="Weekdays"/>
					<Document path="liturgies/index/koiahk/Koiahk Weekends" name="Weekends"/>
				</Menu>
				<Document path="liturgies/index/Nativity Paramoun"/>
				<Document path="liturgies/index/Theophany Paramoun"/>
				<Document path="liturgies/index/Jonah's Fast"/>
				<Document path="liturgies/index/Jonah's Passover"/>
				<Menu id="GreatFast" name="Great Fast" menuStyle="list">
					<Document path="liturgies/index/greatfast/Preparation Sunday of the Great Fast" name="Preparation Sunday"/>
					<Document path="liturgies/index/greatfast/Last Friday of the Great Fast" name="Last Friday"/>
					<Document path="liturgies/index/greatfast/Great Fast Weekdays" name="Weekdays"/>
					<Document path="liturgies/index/greatfast/Great Fast Weekends" name="Weekends"/>
				</Menu>
				<Document path="liturgies/index/Lazarus Saturday"/>
				<Document path="liturgies/index/Apostles' Fast"/>
			</Menu>
			<Menu id="Saints" name="Saints" icon="index_saints" menuStyle="list">
				<Document path="liturgies/index/saints/St. Mary the Mother of God"/>
				<Menu id="Angels" name="Angels" menuStyle="list">
					<Document path="liturgies/index/saints/Archangel Michael"/>
					<Document path="liturgies/index/saints/Archangel Gabriel"/>
					<Document path="liturgies/index/saints/Archangel Raphael"/>
					<Document path="liturgies/index/saints/Archangel Suriel"/>
					<Document path="liturgies/index/saints/Four Incorporeal Creatures"/>
					<Document path="liturgies/index/saints/Twenty-Four Priests"/>
				</Menu>
				<Menu id="Apostles" name="Apostles" menuStyle="list">
					<Document path="liturgies/index/saints/St. Andrew the Apostle"/>
					<Document path="liturgies/index/saints/St. John the Evangelist"/>
					<Document path="liturgies/index/saints/St. Peter and St. Paul"/>
					<Document path="liturgies/index/saints/St. Paul the Apostle"/>
					<Document path="liturgies/index/saints/St. Mark the Apostle"/>
					<Document path="liturgies/index/saints/St. Luke the Evangelist"/>
				</Menu>
				<Menu id="MaleMartyrs" name="Male Martyrs" menuStyle="list">
					<Document path="liturgies/index/saints/St. John the Baptist"/>
					<Document path="liturgies/index/saints/Children of Bethlehem"/>
					<Document path="liturgies/index/saints/St. Stephen the Archdeacon and Protomartyr"/>
					<Document path="liturgies/index/saints/St. George Prince of Martyrs"/>
					<Document path="liturgies/index/saints/Prince Theodore the Son of John of Shotep"/>
					<Document path="liturgies/index/saints/Prince Theodore Anatolius"/>
					<Document path="liturgies/index/saints/St. Philopater Mercurius"/>
					<Document path="liturgies/index/saints/St. Mena the Wonderworker"/>
					<Document path="liturgies/index/saints/St. Apanoub of Nehis"/>
					<Document path="liturgies/index/saints/St. Victor Son of Romanus"/>
					<Document path="liturgies/index/saints/St. Apatir and His Sister St. Irini"/>
					<Document path="liturgies/index/saints/St. Claudius Son of Ptolemy"/>
					<Document path="liturgies/index/saints/St. Apoli, Son of Justus"/>
					<Document path="liturgies/index/saints/St. Eskhyron of Callin"/>
					<Document path="liturgies/index/saints/St. John of Heraclia"/>
					<Document path="liturgies/index/saints/St. Abe-Fam the Soldier"/>
					<Document path="liturgies/index/saints/St. Sergius and St. Bacchus"/>
					<Document path="liturgies/index/saints/St. Cosmas and St. Damian, their Brothers and Mother"/>
					<Document path="liturgies/index/saints/St. Apakir and St. John"/>
					<Document path="liturgies/index/saints/Sts. Apakir, John, Ptolemy, and Philip"/>
					<Document path="liturgies/index/saints/St. Sarapamon Bishop of Nikios"/>
					<Document path="liturgies/index/saints/St. Pisura the Bishop"/>
					<Document path="liturgies/index/saints/St. Castor of Bardanuha"/>
					<Document path="liturgies/index/saints/St. Bisada the Bishop"/>
					<Document path="liturgies/index/saints/St. Dioscorus and St. Esklabius"/>
					<Document path="liturgies/index/saints/St. Maurice"/>
					<Document path="liturgies/index/saints/St. Philotheus"/>
					<Document path="liturgies/index/saints/St. Isi and St. Thecla His Sister"/>
					<Document path="liturgies/index/saints/St. George Muzahim"/>
					<Document path="liturgies/index/saints/St. Julius of Ekbehs"/>
					<Document path="liturgies/index/saints/St. Peter the Seal of the Martyrs"/>
					<Document path="liturgies/index/saints/St. Cyprian and St. Justina"/>
					<Document path="liturgies/index/saints/Forty-Nine Martyrs and Elders of Scetis"/>
					<Document path="liturgies/index/saints/Martyrs of Akmim"/>
					<Document path="liturgies/index/saints/Martyrs of Fayoum"/>
				</Menu>
				<Menu id="FemaleMartyrs" name="Female Martyrs" menuStyle="list">
					<Document path="liturgies/index/saints/St. Demiana"/>
					<Document path="liturgies/index/saints/St. Dolagy"/>
					<Document path="liturgies/index/saints/St. Barbara"/>
					<Document path="liturgies/index/saints/St. Juliana"/>
					<Document path="liturgies/index/saints/St. Marina the Martyr"/>
					<Document path="liturgies/index/saints/St. Rebecca and Her Five Children"/>
					<Document path="liturgies/index/saints/St. Catherine of Alexandria"/>
				</Menu>
				<Menu id="MaleSaints" name="Male Saints" menuStyle="list">
					<Document path="liturgies/index/saints/St. Joseph the Carpenter"/>
					<Document path="liturgies/index/saints/St. Anthony the Great"/>
					<Document path="liturgies/index/saints/St. Paul the Hermit"/>
					<Document path="liturgies/index/saints/St. Thomas the Hermit"/>
					<Document path="liturgies/index/saints/St. Macarius the Great"/>
					<Document path="liturgies/index/saints/St. Macarius of Alexandria"/>
					<Document path="liturgies/index/saints/St. Macarius Bishop of Edkow"/>
					<Document path="liturgies/index/saints/St. John the Short"/>
					<Document path="liturgies/index/saints/St. Pishoy and St. Paul of Tammah"/>
					<Document path="liturgies/index/saints/St. Arsenius the Teacher of the Kings"/>
					<Document path="liturgies/index/saints/St. Maximus and St. Dometius"/>
					<Document path="liturgies/index/saints/St. Moses the Strong"/>
					<Document path="liturgies/index/saints/St. John Kame"/>
					<Document path="liturgies/index/saints/St. Pachom and St. Theodore"/>
					<Document path="liturgies/index/saints/St. Misael the Anchorite"/>
					<Document path="liturgies/index/saints/St. Shenute the Archimandrite"/>
					<Document path="liturgies/index/saints/St. Besa"/>
					<Document path="liturgies/index/saints/St. Samuel the Confessor"/>
					<Document path="liturgies/index/saints/St. Nopher the Anchorite"/>
					<Document path="liturgies/index/saints/King David the Prophet"/>
					<Document path="liturgies/index/saints/St. Karas the Anchorite"/>
					<Document path="liturgies/index/saints/St. Apollo and St. Apip"/>
					<Document path="liturgies/index/saints/St. Parsouma the Naked"/>
					<Document path="liturgies/index/saints/St. Roweis (Teji)"/>
					<Document path="liturgies/index/saints/St. Mark Abba Antony"/>
					<Document path="liturgies/index/saints/St. Bashouna the Monk and Martyr"/>
					<Document path="liturgies/index/saints/St. Athanasius the Apostolic"/>
					<Document path="liturgies/index/saints/St. Gregory the Theologian"/>
					<Document path="liturgies/index/saints/St. Severus Patriarch of Antioch"/>
					<Document path="liturgies/index/saints/St. Cyril of Alexandria"/>
					<Document path="liturgies/index/saints/St. Takla Haymanout"/>
					<Document path="liturgies/index/saints/St. Pistavros"/>
					<Document path="liturgies/index/saints/St. Simon the Tanner"/>
					<Document path="liturgies/index/saints/King Constantine and Queen Helen"/>
					<Document path="liturgies/index/saints/Patriarchs Abraham, Isaac, and Jacob"/>
					<Document path="liturgies/index/saints/The Three Holy Youth"/>
				</Menu>
				<Menu id="FemaleSaints" name="Female Saints" menuStyle="list">
					<Document path="liturgies/index/saints/St. Mary Magdalene"/>
					<Document path="liturgies/index/saints/St. Verena"/>
					<Document path="liturgies/index/saints/St. Monica and St. Augustine"/>
					<Document path="liturgies/index/saints/St. Mary of Egypt"/>
					<Document path="liturgies/index/saints/St. Veronica"/>
				</Menu>
				<Menu id="ClergySaints" name="Clergy" menuStyle="list">
					<Document path="liturgies/index/saints/Anba Abraam Bishop of Fayoum"/>
					<Document path="liturgies/index/saints/Fr. Abdelmessih El-Manahri"/>
					<Document path="liturgies/index/saints/His Holiness Pope Kyrillos VI"/>
					<Document path="liturgies/index/saints/St. Habib Girgis"/>
					<Document path="liturgies/index/saints/Patriarch"/>
				</Menu>
			</Menu>
			<Document path="liturgies/index/Fractions Full Index" name="Fractions"/>
			<Document path="include/doxologies/Doxologies Full Index" name="Doxologies"/>
			<Menu id="Papal" name="Papal" menuStyle="list">
				<Document path="papal/Papal Hymns"/>
				<Document path="papal/Departed Patriarchs"/>
			</Menu>
		</Menu>
		<Menu id="Clergy" name="Clergy" menuStyle="list">
			<Document path="clergy/Psalms and Absolution"/>
			<Document path="clergy/Litanies"/>
			<Document path="clergy/Healing to the Sick"/>
			<Document path="clergy/Three Absolutions and Short Blessing" name="Three Absolutions"/>
			<Document path="clergy/Procession of the Lamb"/>
			<Document path="clergy/Absolution of the Servants"/>
			<Document path="clergy/Epistle Prayers"/>
			<Document path="clergy/Mystery of the Gospel"/>
			<Document path="clergy/Prayer of the Veil"/>
			<Document path="clergy/Confession"/>
			<Document path="clergy/Great Fast Litanies"/>
			<Document path="clergy/Prayer at the Tomb"/>
			<Document path="clergy/Benediction"/>
		</Menu>
		<Menu id="Special" name="Special" menuStyle="icons">
			<Menu id="Baptism" name="Baptism" menuStyle="list">
				<Document path="baptism/Baptism - Absolution of the Woman (Boy)" name="Absolution of the Woman (Boy)"/>
				<Document path="baptism/Baptism - Absolution of the Woman (Girl)" name="Absolution of the Woman (Girl)"/>
				<Document path="baptism/Baptism - Holy Baptism" name="Holy Baptism"/>
				<Document path="baptism/Baptism - Consecrating the Water" name="Consecrating the Water"/>
				<Document path="baptism/Baptism - Holy Myron" name="Holy Myron"/>
				<Document path="baptism/Baptism - Loosing the Girdle" name="Loosing the Girdle"/>
				<Document path="baptism/Baptism - Bathing Prayer" name="Bathing Prayer"/>
			</Menu>
			<Menu id="Crowning" name="Crowning" menuStyle="list">
				<Document path="crowning/Engagement Prayer"/>
				<Document path="crowning/Crowning Prayer"/>
				<Document path="crowning/Second Marriage Prayer"/>
			</Menu>
			<Menu id="Unction" name="Unction" menuStyle="list">
				<Document path="unction/Unction - First Prayer" name="First Prayer"/>
				<Document path="unction/Unction - Second Prayer" name="Second Prayer"/>
				<Document path="unction/Unction - Third Prayer" name="Third Prayer"/>
				<Document path="unction/Unction - Fourth Prayer" name="Fourth Prayer"/>
				<Document path="unction/Unction - Fifth Prayer" name="Fifth Prayer"/>
				<Document path="unction/Unction - Sixth Prayer" name="Sixth Prayer"/>
				<Document path="unction/Unction - Seventh Prayer" name="Seventh Prayer"/>
			</Menu>
			<Document path="veneration/Veneration"/>
			<Menu id="Funeral" name="Funeral" menuStyle="list">
				<Document path="funeral/Funeral for Men" name="Men"/>
				<Document path="funeral/Funeral for Women" name="Women"/>
				<Document path="funeral/Funeral for Women During Delivery" name="Women During Delivery"/>
				<Document path="funeral/Funeral for Boys" name="Boys"/>
				<Document path="funeral/Funeral for Girls" name="Girls"/>
				<Document path="funeral/Funeral for Deacons" name="Deacons"/>
				<Document path="funeral/Funeral for Priests" name="Priests"/>
				<Document path="funeral/Funeral for Bishops" name="Bishops"/>
				<Document path="funeral/Funeral for Monk Priests" name="Monk Priests"/>
				<Document path="funeral/Funeral for Monks" name="Monks"/>
				<Document path="funeral/Funeral for Nuns" name="Nuns"/>
				<Document path="funeral/Funeral for 3rd and 40th Days" name="3rd and 40th Days"/>
				<!--          Remove this until HGBY can confirm the correct rite         <Document path="funeral/Funeral During Holy Week" name="Holy Week"/>                   -->
				<Document path="funeral/Prayer at the Tomb" name="Prayer at the Tomb"/>
			</Menu>
			<Menu id="Consecrations" name="Consecrations" menuStyle="list">
				<Menu id="ChurchConsecration" name="Church" menuStyle="list">
					<Document path="consecrations/church/Church Consecration Part 1" name="Part 1"/>
					<Document path="consecrations/church/Church Consecration Part 2" name="Part 2"/>
					<Document path="consecrations/church/Church Consecration Part 3" name="Part 3"/>
					<Document path="consecrations/church/Church Consecration Part 4" name="Part 4"/>
					<Document path="consecrations/church/Vespers" name="Vespers"/>
					<Document path="consecrations/church/Liturgy of the Word" name="Liturgy of the Word"/>
				</Menu>
				<Document path="consecrations/Consecration of the Altar" name="Altar"/>
				<Document path="consecrations/Consecration of Vessels, Censers, and Icons" name="Vessels, Censers, and Icons"/>
				<Document path="consecrations/Consecration of the Baptistery" name="Baptistery"/>
				<Document path="consecrations/Laying of the Church Cornerstone" name="Cornerstone"/>
				<Menu id="Oil" name="Oil" menuStyle="list">
					<Menu id="Myron" name="Myron" menuStyle="list">
						<Document path="consecrations/oil/Preparation of the Holy Myron" name="Preparation"/>
						<Document path="consecrations/oil/Consecration of the Holy Myron" name="Consecration"/>
					</Menu>
					<Document path="consecrations/oil/Sanctification of Oil of Gladness" name="Oil of Gladness"/>
					<Document path="consecrations/oil/Reservation of the Pre-sanctified Chrism" name="Pre-sanctified Chrism"/>
				</Menu>
				<Menu id="Ordinations" name="Ordinations" menuStyle="list">
					<Document path="consecrations/ordinations/Chanter Ordination" name="Chanter"/>
					<Document path="consecrations/ordinations/Reader Ordination" name="Reader"/>
					<Document path="consecrations/ordinations/Subdeacon Ordination" name="Subdeacon"/>
					<Document path="consecrations/ordinations/Deacon Ordination" name="Deacon"/>
					<Document path="consecrations/ordinations/Archdeacon Ordination" name="Archdeacon"/>
					<Document path="consecrations/ordinations/Priest Ordination" name="Priest"/>
					<Document path="consecrations/ordinations/Hegumen Ordination" name="Hegumen"/>
					<Document path="consecrations/ordinations/Bishop Ordination" name="Bishop"/>
					<Document path="consecrations/ordinations/Metropolitan Ordination" name="Metropolitan"/>
					<Document path="papal/Papal Enthronement"/>
				</Menu>
				<Document path="consecrations/Consecration of Monks" name="Monk"/>
				<Document path="consecrations/Consecration of Nuns" name="Nuns"/>
				<Document path="consecrations/Consecration of Sisters" name="Sisters"/>
				<Document path="consecrations/reception/Reception of New Priest"/>
				<Document path="consecrations/Blessing of the Home" name="Home Blessing"/>
			</Menu>
			<Menu id="Prostration" name="Prostration" menuStyle="list">
				<Document path="prostration/Praises"/>
				<Document path="prostration/First Prostration"/>
				<Document path="prostration/Second Prostration"/>
				<Document path="prostration/Third Prostration"/>
			</Menu>
			<Menu id="Pascha" name="Pascha" menuStyle="list">
				<Menu id="Sunday" name="Sunday" menuStyle="list">
					<Document path="pascha/sunday/General Funeral Prayer"/>
					<Document path="pascha/include/insights/Sunday" name="Insights"/>
					<Menu id="SundayDay" name="Sunday Day" menuStyle="list">
						<Document path="pascha/sunday/Sunday - 9th Hour" name="9th Hour"/>
						<Document path="pascha/sunday/Sunday - 11th Hour" name="11th Hour"/>
					</Menu>
					<Menu id="MondayEve" name="Monday Eve" menuStyle="list">
						<Document path="pascha/monday/Monday Eve - 1st Hour" name="1st Hour"/>
						<Document path="pascha/monday/Monday Eve - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/monday/Monday Eve - 6th Hour" name="6th Hour"/>
						<Document path="pascha/monday/Monday Eve - 9th Hour" name="9th Hour"/>
						<Document path="pascha/monday/Monday Eve - 11th Hour" name="11th Hour"/>
					</Menu>
				</Menu>
				<Menu id="Monday" name="Monday" menuStyle="list">
					<Document path="pascha/include/insights/Monday" name="Insights"/>
					<Menu id="MondayDay" name="Monday Day" menuStyle="list">
						<Document path="pascha/monday/Monday - 1st Hour" name="1st Hour"/>
						<Document path="pascha/monday/Monday - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/monday/Monday - 6th Hour" name="6th Hour"/>
						<Document path="pascha/monday/Monday - 9th Hour" name="9th Hour"/>
						<Document path="pascha/monday/Monday - 11th Hour" name="11th Hour"/>
					</Menu>
					<Menu id="TuesdayEve" name="Tuesday Eve" menuStyle="list">
						<Document path="pascha/tuesday/Tuesday Eve - 1st Hour" name="1st Hour"/>
						<Document path="pascha/tuesday/Tuesday Eve - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/tuesday/Tuesday Eve - 6th Hour" name="6th Hour"/>
						<Document path="pascha/tuesday/Tuesday Eve - 9th Hour" name="9th Hour"/>
						<Document path="pascha/tuesday/Tuesday Eve - 11th Hour" name="11th Hour"/>
					</Menu>
				</Menu>
				<Menu id="Tuesday" name="Tuesday" menuStyle="list">
					<Document path="pascha/include/insights/Tuesday" name="Insights"/>
					<Menu id="TuesdayDay" name="Tuesday Day" menuStyle="list">
						<Document path="pascha/tuesday/Tuesday - 1st Hour" name="1st Hour"/>
						<Document path="pascha/tuesday/Tuesday - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/tuesday/Tuesday - 6th Hour" name="6th Hour"/>
						<Document path="pascha/tuesday/Tuesday - 9th Hour" name="9th Hour"/>
						<Document path="pascha/tuesday/Tuesday - 11th Hour" name="11th Hour"/>
					</Menu>
					<Menu id="WednesdayEve" name="Wednesday Eve" menuStyle="list">
						<Document path="pascha/wednesday/Wednesday Eve - 1st Hour" name="1st Hour"/>
						<Document path="pascha/wednesday/Wednesday Eve - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/wednesday/Wednesday Eve - 6th Hour" name="6th Hour"/>
						<Document path="pascha/wednesday/Wednesday Eve - 9th Hour" name="9th Hour"/>
						<Document path="pascha/wednesday/Wednesday Eve - 11th Hour" name="11th Hour"/>
					</Menu>
				</Menu>
				<Menu id="Wednesday" name="Wednesday" menuStyle="list">
					<Document path="pascha/include/insights/Wednesday" name="Insights"/>
					<Menu id="WednesdayDay" name="Wednesday Day" menuStyle="list">
						<Document path="pascha/wednesday/Wednesday - 1st Hour" name="1st Hour"/>
						<Document path="pascha/wednesday/Wednesday - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/wednesday/Wednesday - 6th Hour" name="6th Hour"/>
						<Document path="pascha/wednesday/Wednesday - 9th Hour" name="9th Hour"/>
						<Document path="pascha/wednesday/Wednesday - 11th Hour" name="11th Hour"/>
					</Menu>
					<Menu id="ThursdayEve" name="Thursday Eve" menuStyle="list">
						<Document path="pascha/thursday/Thursday Eve - 1st Hour" name="1st Hour"/>
						<Document path="pascha/thursday/Thursday Eve - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/thursday/Thursday Eve - 6th Hour" name="6th Hour"/>
						<Document path="pascha/thursday/Thursday Eve - 9th Hour" name="9th Hour"/>
						<Document path="pascha/thursday/Thursday Eve - 11th Hour" name="11th Hour"/>
					</Menu>
				</Menu>
				<Menu id="Thursday" name="Thursday" menuStyle="list">
					<Document path="pascha/include/insights/Thursday" name="Insights"/>
					<Menu id="ThursdayDay" name="Thursday Day" menuStyle="list">
						<Document path="pascha/thursday/Thursday - 1st Hour" name="1st Hour"/>
						<Document path="pascha/thursday/Thursday - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/thursday/Thursday - 6th Hour" name="6th Hour"/>
						<Document path="pascha/thursday/Thursday - 9th Hour" name="9th Hour"/>
						<Document path="pascha/thursday/Liturgy of the Waters"/>
						<Document path="liturgies/pascha/covenantThursday/Offering of the Lamb"/>
						<Document path="liturgies/pascha/covenantThursday/Liturgy of the Word"/>
						<Document path="liturgies/pascha/covenantThursday/Liturgy of the Faithful"/>
						<Document path="liturgies/pascha/covenantThursday/Distribution of the Holy Mysteries" name="Distribution"/>
						<Document path="pascha/thursday/Thursday - 11th Hour" name="11th Hour"/>
					</Menu>
					<Menu id="FridayEve" name="Friday Eve" menuStyle="list">
						<Document path="pascha/friday/Friday Eve - 1st Hour" name="1st Hour"/>
						<Document path="pascha/friday/Friday Eve - 3rd Hour" name="3rd Hour"/>
						<Document path="pascha/friday/Friday Eve - 6th Hour" name="6th Hour"/>
						<Document path="pascha/friday/Friday Eve - 9th Hour" name="9th Hour"/>
						<Document path="pascha/friday/Friday Eve - 11th Hour" name="11th Hour"/>
					</Menu>
				</Menu>
				<Menu id="Friday" name="Friday" menuStyle="list">
					<Document path="pascha/include/insights/Friday" name="Insights"/>
					<Document path="pascha/friday/Friday - 1st Hour" name="1st Hour"/>
					<Document path="pascha/friday/Friday - 3rd Hour" name="3rd Hour"/>
					<Document path="pascha/friday/Friday - 6th Hour" name="6th Hour"/>
					<Document path="pascha/friday/Friday - 9th Hour" name="9th Hour"/>
					<Document path="pascha/friday/Friday - 11th Hour" name="11th Hour"/>
					<Document path="pascha/friday/Friday - 12th Hour" name="12th Hour"/>
				</Menu>
				<Menu id="Saturday" name="Saturday" menuStyle="list" icon="joysaturday">
					<Document path="pascha/include/insights/Saturday" name="Insights"/>
					<Document path="pascha/saturday/Vigil of the Apocalypse - Midnight Praises" name="Praises"/>
					<Document path="pascha/saturday/Vigil of the Apocalypse - Matins" name="Matins"/>
					<Document path="pascha/saturday/Vigil of the Apocalypse - Third and Sixth Hours" name="Third and Sixth Hours"/>
					<Document path="pascha/saturday/Vigil of the Apocalypse - Revelation" name="Revelation"/>
					<Document path="pascha/saturday/Vigil of the Apocalypse - Ninth Hour" name="Ninth Hour"/>
					<Document path="liturgies/pascha/joyousSaturday/Offering of the Lamb"/>
					<Document path="liturgies/pascha/joyousSaturday/Liturgy of the Word"/>
					<Document path="liturgies/pascha/joyousSaturday/Liturgy of the Faithful"/>
					<Document path="liturgies/pascha/joyousSaturday/Distribution of the Holy Mysteries" name="Distribution"/>
				</Menu>
				<Menu id="Resurrection" name="Resurrection" menuStyle="list">
					<Document path="pascha/include/insights/Resurrection" name="Insights"/>
					<Document path="pascha/resurrection/Prophecies"/>
				</Menu>
			</Menu>
			<Menu id="Lakkan" name="Lakkan" menuStyle="list">
				<Document path="lakkan/Theophany - Liturgy of the Waters" name="Theophany"/>
				<Document path="lakkan/Covenant Thursday - Liturgy of the Waters" name="Covenant Thursday"/>
				<Document path="lakkan/Apostles Feast - Liturgy of the Waters" name="Apostles Feast"/>
			</Menu>
		</Menu>
	</Menu>`;

	function toXML() {
		const parser = new DOMParser();
		return parser.parseFromString(menu,"text/xml").documentElement;
	}

	function toJSON(xml) {
		const menu = [];

		for (const c of [...xml.children]) {
			const cj = {
				name: c.hasAttribute('name')
					? c.getAttribute('name')
					: c.getAttribute('path').split('/').pop()
				}


			if (c.tagName == 'Document') cj.path = c.getAttribute('path'); // it's a document
			else cj.menu = toJSON(c); // it's a path

			menu.push(cj);
		}

		return menu;
	}

	return {
		toXML,
		toJSON,
	}

})();

const SeasonsParser = (() => {

	const seasons = ``;

	function toXML() {
		const parser = new DOMParser();
		return parser.parseFromString(menu,"text/xml").documentElement;
	}

	function toJSON(xml) {
		const menu = [];

		for (const c of [...xml.children]) {
			const cj = {
				name: c.hasAttribute('name')
					? c.getAttribute('name')
					: c.getAttribute('path').split('/').pop()
				}


			if (c.tagName == 'Document') cj.path = c.getAttribute('path'); // it's a document
			else cj.menu = toJSON(c); // it's a path

			menu.push(cj);
		}

		return menu;
	}

	return {
		toXML,
		toJSON,
	}

})();