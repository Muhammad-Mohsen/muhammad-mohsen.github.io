export const BibleAddendums = (() => {

	const XML = `<?xml version="1.0" encoding="UTF-8"?>
	<BibleBooks>
		<Style id="prophecy_book_author">
			<Introduction>
				<Language id="Coptic">            Ebolqen [BOOK] n~te [AUTHOR] pip~rov/t/c: e~repefc~mou eyouab swpi neman a~m/n efjw m~moc:         </Language>
				<Language id="English">            A reading from the Book of [BOOK] of [AUTHOR] the prophet. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            من سفر [BOOK] ل[AUTHOR] النبي بركته  المقدسة تکون معنا. آمين.         </Language>
				<Language id="Indonesian">			Pembacaan dari Kitab [BOOK] oleh [AUTHOR] sang nabi. Kiranya berkat-berkatnya beserta kita. Amin.</Language>
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Ouw~ou n~]t~riac eyouab Pennou] sa e~neh nem sa e~neh n~te nie~neh t/rou: a~m/n.         </Language>
				<Language id="English">            Glory be to the Holy Trinity, our God, forever and unto the ages of all ages. Amen.         </Language>
				<Language id="Arabic">            مـجداً للثالوث القدوس إلـهنا الـى أبد الآبدين کاﻬا آمين.         </Language>
				<Language id="Indonesian">		Kemuliaan bagi Tritunggal Kudus, Allah kita, untuk selamanya dan hingga segala abad. Amin.</Language>
			</Conclusion>
		</Style>
		<Style id="proverbs">
			<Introduction>
				<Language id="Coptic">            Ebolqen niparoimia~ n~te Colomwn pip~rov/t/c: e~repefc~mou eyouab swpi neman a~m/n efjw m~moc:         </Language>
				<Language id="English">            A reading from the Proverbs of Solomon the prophet. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            من أمثال سليمان النبي بركته المقدسة تکون معنا. آمين.         </Language>
				<Language id="Indonesian">			Pembacaan dari Amsal oleh Nabi Salomo. Kiranya berkat-berkatnya beserta kita. Amin.</Language>
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Ouw~ou n~]t~riac eyouab Pennou] sa e~neh nem sa e~neh n~te nie~neh t/rou: a~m/n.         </Language>
				<Language id="English">            Glory be to the Holy Trinity, our God, forever and unto the ages of all ages. Amen.         </Language>
				<Language id="Arabic">            مـجداً للثالوث القدوس إلـهنا الـى أبد الآبدين کاﻬا آمين.         </Language>
				<Language id="Indonesian">			Kemuliaan bagi Tritunggal Kudus untuk selamanya dan hingga segala abad. Amin. </Language>
			</Conclusion>
		</Style>
		<Style id="lamentations">
			<Introduction>
				<Language id="Coptic">            Ebolqen Yrinio Ieremiou pip~rov/t/c: e~repefc~mou eyouab swpi neman a~m/n efjw m~moc:         </Language>
				<Language id="English">            A reading from the Lamentations of Jeremiah the prophet. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            من مراثى أرميا النبي بركته المقدسة تکون معنا. آمين.         </Language>
				<Language id="Indonesian">         Pembacaan dari Ratapan oleh Nabi Yeremiah. Kiranya berkat-berkatnya beserta kita. Amin.            </Language>
				
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Ouw~ou n~]t~riac eyouab Pennou] sa e~neh nem sa e~neh n~te nie~neh t/rou: a~m/n.         </Language>
				<Language id="English">            Glory be to the Holy Trinity, our God, forever and unto the ages of all ages. Amen.         </Language>
				<Language id="Arabic">            مـجداً للثالوث القدوس إلـهنا الـى أبد الآبدين کاﻬا آمين.         </Language>
				<Language id="Indonesian">			Kemuliaan bagi Tritunggal kudus, Allah Kita, untuk selamanya dan hingga segala abad. Amin</Language>
			
			</Conclusion>
		</Style>
		<Style id="prophecy_author">
			<Introduction>
				<Language id="Coptic">            Ebolqen [AUTHOR] pip~rov/t/c: e~repefc~mou eyouab swpi neman a~m/n efjw m~moc:         </Language>
				<Language id="English">            A reading from [AUTHOR], the prophet. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            من [AUTHOR] النبي بركته المقدسة تکون معنا. آمين.         </Language>
				<Language id="Indonesian">        Pembacaan dari [AUTHOR], sang nabi. Kiranya berkat-berkatnya beserta kita. Amin.               </Language>
				
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Ouw~ou n~]t~riac eyouab Pennou] sa e~neh nem sa e~neh n~te nie~neh t/rou: a~m/n.         </Language>
				<Language id="English">            Glory be to the Holy Trinity, our God, forever and unto the ages of all ages. Amen.         </Language>
				<Language id="Arabic">            مـجداً للثالوث القدوس إلـهنا الـى أبد الآبدين کاﻬا آمين.         </Language>
				<Language id="Indonesian">        Kemuliaan bagi Tritunggal Kudus, Allah kita, untuk selamanya dan hingga segala abad. Amin.             </Language>
			</Conclusion>
		</Style>
		<Style id="prophecy_author_no_title">
			<Introduction>
				<Language id="Coptic">            Ebolqen [AUTHOR]: e~repefc~mou eyouab swpi neman a~m/n efjw m~moc:         </Language>
				<Language id="English">            A reading from [AUTHOR]. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            من [AUTHOR] بركته المقدسة تکون معنا. آمين.         </Language>
				<Language id="Indonesian">        Pembacaan dari [AUTHOR], sang nabi. Kiranya berkat-berkatnya beserta kita. Amin.               </Language>
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Ouw~ou n~]t~riac eyouab Pennou] sa e~neh nem sa e~neh n~te nie~neh t/rou: a~m/n.         </Language>
				<Language id="English">            Glory be to the Holy Trinity, our God, forever and unto the ages of all ages. Amen.         </Language>
				<Language id="Arabic">            مـجداً للثالوث القدوس إلـهنا الـى أبد الآبدين کاﻬا آمين.         </Language>
				<Language id="Indonesian">        Kemuliaan bagi Tritunggal Kudus, Allah kita, untuk selamanya dan hingga segala abad. Amin.             </Language>
			</Conclusion>
		</Style>
		<Style id="prophecy_book">
			<Introduction>
				<Language id="English">            A reading from [BOOK], may its holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            من [BOOK] بركته المقدسة تکون معنا. آمين.         </Language>
				<Language id="Indonesian">       Pembacaan dari Kitab [BOOK], kiranya berkat-berkatnya beserta kita. Amin.              </Language>
				
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Ouw~ou n~]t~riac eyouab Pennou] sa e~neh nem sa e~neh n~te nie~neh t/rou: a~m/n.         </Language>
				<Language id="English">            Glory be to the Holy Trinity, our God, forever and unto the ages of all ages. Amen.         </Language>
				<Language id="Arabic">            مـجداً للثالوث القدوس إلـهنا الـى أبد الآبدين کاﻬا آمين.         </Language>
				<Language id="Indonesian">        Kemuliaan bagi Tritunggal Kudus, Allah kita, untuk selamanya dan hingga segala abad. Amin.             </Language>
			
			</Conclusion>
		</Style>
		<Style id="psalms">
			<Introduction>
				<Language id="English">            From the Psalms of our teacher David the prophet. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            من مزامير معلمنا داود النبي بركته المقدسة تکون معنا. آمين.         </Language>
				<Language id="Indonesian">        Dari mazmur-mazmur guru kita Daoud sang nabi, kiranya berkat-berkatnya beserta kita. Amin.           </Language>
			
			</Introduction>
		</Style>
		<Style id="gospel">
			<Introduction>
				<Language id="English">            A reading from the Gospel according to our teacher Saint [AUTHOR] the Evangelist. May his blessing be with us. Amen.         </Language>
				<Language id="Arabic">            فصل من بشارة الأنجيل لمعلمنا [AUTHOR] البشير بركته علينا آمين.         </Language>
				<Language id="Indonesian">       Pasal dari Injil guru kita Santo [AUTHOR] sang Penginjil. Kiranya berkatnya beserta kita. Amin.             </Language>
			
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Doxa ci Kurie: a~m/n.         </Language>
				<Language id="English">            Glory be to God forever. Amen.         </Language>
				<Language id="Arabic">            والمجْدَ للَهِ دَائماً         </Language>
				<Language id="Indonesian">        Kemuliaan bagi Tritunggal Kudus, Allah kita, untuk selamanya dan hingga segala abad. Amin.             </Language>
			
			</Conclusion>
		</Style>
		<Style id="acts">
			<Introduction>
				<Language id="English">            A reading from the Acts of our fathers the pure apostles, who were invested with the grace of the Holy Spirit. May their blessing be with us all. Amen.         </Language>
				<Language id="Arabic">            فصل من أعمال آبائنا الرسل الأطهار المشمولين بنعمة الروح القدس بركتهم تكون معنا آمين.         </Language>
				<Language id="Indonesian">       Praksis, pasal dari Kisah para Rasul yang tahir dan dipenuhi dengan kasih karunianya Roh Kudus, kiranya berkat-berkat mereka beserta kita, Amin.           </Language>
			
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Picaji de n~te P[oic efe~aiai ouoh efe~a~sai (ouoh) efe~a~mahi ouoh efe~tajro qen ]a~gia n~ekk~l/cia n~te V]: a~m/n.         </Language>
				<Language id="English">            The word of the Lord shall grow, multiply, be mighty, and be confirmed in the holy Church of God. Amen.         </Language>
				<Language id="Arabic">            وكلمة الرب تنمو وتزداد وتعتز وتثبت في كنيسة الله المقدسة، آمين.         </Language>
				<Language id="Indonesian">        Firman Allah semakin bertumbuh, berlipat ganda, dikuatkan dan diteguhkan dalam Gereja Allah yang kudus, Amin.ya berkat berkatnya beserta kita. Amin.           </Language>
			
			</Conclusion>
		</Style>
		<Style id="pauline">
			<Introduction>
				<Language id="English">            Paul, the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the[ORDINAL] Epistle of our teacher Paul to the [BOOK_NAME]. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            بولس عبد يسوع المسيح الرسول المدعو المفرز لبشرى الله. فصل من رسالة معلمنا بولس الرسول[ORDINAL] الى اهل [BOOK_NAME] بركته تكون معنا. آمين.         </Language>
				<Language id="Indonesian"> Paulus, hamba Tuhan kita Yesus Kristus, dipanggil sebagai rasul, dipilih untuk memberitakan Injil Allah. Pembacaan dari surat [ORDINAL] guru kita Rasul Paulus kepada [BOOK_NAME]. Kiranya berkat-berkatnya beserta kita. Amin. </Language>
				</Introduction>
			<Conclusion>
				<Language id="English">            The grace of God the Father be with you all. Amen.         </Language>
				<Language id="Arabic">            نعمة الله الآب تكون مع جميعِكم. آمين.         </Language>
				<Language id="Indonesian"> Kasih karunia Allah Bapa beserta kalian semua, Amin.</Language>
			</Conclusion>
		</Style>
		<Style id="hebrews">
			<Introduction>
				<Language id="English">            Paul, the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the[ORDINAL] Epistle of our teacher Paul to the [BOOK_NAME]. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            بولس عبد يسوع المسيح الرسول المدعو المفرز لبشرى الله. فصل من رسالة معلمنا بولس الرسول[ORDINAL] الى  [BOOK_NAME] بركته تكون معنا. آمين.         </Language>
				<Language id="Indonesian"> Paulus, hamba Tuhan kita Yesus Kristus, dipanggil sebagai rasul, dipilih untuk memberitakan Injil Allah. Pembacaan dari surat [BOOK_NAME] oleh guru kita Rasul Paulus kepada [ORDINAL]. Kiranya berkat-berkatnya beserta kita. Amin. </Language>
			</Introduction>
			<Conclusion>
				<Language id="English">            The grace of God the Father be with you all. Amen.         </Language>
				<Language id="Arabic">            نعمة الله الآب تكون مع جميعِكم. آمين.         </Language>
				<Language id="Indonesian"> Kasih karunia Allah Bapa beserta kalian semua, Amin.</Language>
			</Conclusion>
		</Style>
		<Style id="pauline_personal">
			<Introduction>
				<Language id="English">            Paul, the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the[ORDINAL] Epistle of our teacher Paul to [BOOK_NAME]. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            بولس عبد يسوع المسيح الرسول المدعو المفرز لبشرى الله. فصل من رسالة معلمنا بولس الرسول[ORDINAL] الى [BOOK_NAME] بركته تكون معنا. آمين.         </Language>
				<Language id="Indonesian"> Paulus, hamba Tuhan kita Yesus Kristus, dipanggil sebagai rasul, dipilih untuk memberitakan Injil Allah. Pembacaan dari surat [ORDINAL] oleh guru kita Rasul Paulus kepada [BOOK_NAME]. Kiranya berkat-berkatnya beserta kita. Amin.</Language>
			</Introduction>
			<Conclusion>
				<Language id="English">            The grace of God the Father be with you all. Amen.         </Language>
				<Language id="Arabic">            نعمة الله الآب تكون مع جميعِكم. آمين.         </Language>
				<Language id="Indonesian"> Kasih karunia Allah Bapa beserta kalian semua, Amin.</Language>
			</Conclusion>
		</Style>
		<Style id="catholic">
			<Introduction>
				<Language id="English">            The Catholic Epistle from the[ORDINAL] Epistle of our teacher St. [AUTHOR]. May his holy blessings be with us. Amen.         </Language>
				<Language id="Arabic">            الكاثوليكون من رسالة [AUTHOR] الرسول[ORDINAL].  بركته تكون معنا. آمين.         </Language>
				<Language id="Indonesian">Katolikon dari surat guru kita Rasul [AUTHOR] yang [ORDINAL]. Kiranya berkat-berkatnya beserta kita, Amin.</Language>
			</Introduction>
			<Conclusion>
				<Language id="Coptic">            Nac~n/ou m~permenre pikocmoc oude n/e~tsop qen pikocmoc: pikocmoc nacini nem tefe~piyumia: v/ de eti~ri m~v~ouws m~Vnou] f~naswpi sa e~neh: a~m/n.                  </Language>
				<Language id="English">            Do not love the world or the things in the world. The world is passing away, and its lust; but he who does the will of God abides for ever. Amen.         </Language>
				<Language id="Arabic">            لا تحبوا العالم ولا الأشياء التي في العالم. العالم يمضي وشهواته. والذي يصنع إرادة الله يدوم إلى الأبد. آمين.         </Language>
				<Language id="Indonesian"> Janganlah kita mengasihi dunia dan apa yang ada di dalamnya, sebab dunia ini akan lenyap dengan keinginannya, tetapi orang yang melakukan kehendak Allah tetap hidup selamanya, Amin.</Language>
			</Conclusion>
		</Style>
		<Book id="Genesis" style="prophecy_book_author">
			<Title>
				<Language id="English">Genesis</Language>
				<Language id="Arabic">ﺗﻜﻮﻳﻦ</Language>
				<Language id="Coptic">Pjom n~}genecic</Language>
				<Language id="Indonesian">Kejadian </Language>
			</Title>
			<Author>
				<Language id="English">Moses</Language>
				<Language id="Arabic">موسى</Language>
				<Language id="Coptic">Mwu~c/c</Language>
				<Language id="Indonesian">Musa</Language>
			</Author>
		</Book>
		<Book id="Exodus" style="prophecy_book_author">
    <Title>
        <Language id="English">Exodus</Language>
        <Language id="Arabic">ﺍﻟﺨﺮﻭﺝ</Language>
        <Language id="Coptic">Pidoxodoc</Language>
        <Language id="Indonesian">Keluaran</Language>
    </Title>
    <Author>
        <Language id="English">Moses</Language>
        <Language id="Arabic">موسى</Language>
        <Language id="Coptic">Mwu~c/c</Language>
        <Language id="Indonesian">Musa</Language>
    </Author>
</Book>

<Book id="Leviticus" style="prophecy_book_author">
    <Title>
        <Language id="English">Leviticus</Language>
        <Language id="Arabic">لاويين</Language>
        <Language id="Coptic">Pjwm n~te pileuitikoc</Language>
        <Language id="Indonesian">Imamat</Language>
    </Title>
    <Author>
        <Language id="English">Moses</Language>
        <Language id="Arabic">موسى</Language>
        <Language id="Coptic">Mwu~c/c</Language>
        <Language id="Indonesian">Musa</Language>
    </Author>
</Book>

<Book id="Numbers" style="prophecy_book_author">
    <Title>
        <Language id="English">Numbers</Language>
        <Language id="Arabic">ﺍﻟﻌﺪﺩ</Language>
        <Language id="Coptic">Pjwm n~te pia~riymoc</Language>
        <Language id="Indonesian">Bilangan</Language>
    </Title>
    <Author>
        <Language id="English">Moses</Language>
        <Language id="Arabic">موسى</Language>
        <Language id="Coptic">Mwu~c/c</Language>
        <Language id="Indonesian">Musa</Language>
    </Author>
</Book>

<Book id="Deuteronomy" style="prophecy_book_author">
    <Title>
        <Language id="English">Deuteronomy</Language>
        <Language id="Arabic">ﺍﻟﺘﺜﻨﻴﺔ</Language>
        <Language id="Coptic">Pideuteronomion</Language>
        <Language id="Indonesian">Ulangan</Language>
    </Title>
    <Author>
        <Language id="English">Moses</Language>
        <Language id="Arabic">موسى</Language>
        <Language id="Coptic">Mwu~c/c</Language>
        <Language id="Indonesian">Musa</Language>
    </Author>
</Book>

<Book id="Joshua" style="prophecy_author">
    <Title>
        <Language id="English">Joshua</Language>
        <Language id="Arabic">يشوع</Language>
        <Language id="Indonesian">Yosua</Language>
    </Title>
    <Author>
        <Language id="English">Joshua son of Nun</Language>
        <Language id="Arabic">يشوع بن نون</Language>
        <Language id="Indonesian">Yosua bin Nun</Language>
    </Author>
</Book>

<Book id="Judges" style="prophecy_book">
    <Title>
        <Language id="English">Judges</Language>
        <Language id="Arabic">ﺍﻟﻘﻀﺎﺓ</Language>
        <Language id="Indonesian">Hakim-hakim</Language>
    </Title>
</Book>

<Book id="Ruth" style="prophecy_book">
    <Title>
        <Language id="English">Ruth</Language>
        <Language id="Arabic">راعوث</Language>
        <Language id="Indonesian">Rut</Language>
    </Title>
</Book>

<Book id="1 Samuel" style="prophecy_author">
    <Title>
        <Language id="English">1 Samuel</Language>
        <Language id="Arabic">1 صموئيل</Language>
        <Language id="Indonesian">1 Samuel</Language>
    </Title>
    <Author>
        <Language id="English">Samuel</Language>
        <Language id="Arabic">صموئيل</Language>
        <Language id="Indonesian">Samuel</Language>
    </Author>
</Book>

<Book id="2 Samuel" style="prophecy_author">
    <Title>
        <Language id="English">2 Samuel</Language>
        <Language id="Arabic">2 صموئيل</Language>
        <Language id="Indonesian">2 Samuel</Language>
    </Title>
    <Author>
        <Language id="English">Samuel</Language>
        <Language id="Arabic">صموئيل</Language>
        <Language id="Indonesian">Samuel</Language>
    </Author>
</Book>

<Book id="1 Kings" style="prophecy_book">
    <Title>
        <Language id="English">1 Kings</Language>
        <Language id="Arabic">1 ملوك</Language>
        <Language id="Indonesian">1 Raja-raja</Language>
    </Title>
</Book>

<Book id="2 Kings" style="prophecy_book">
    <Title>
        <Language id="English">2 Kings</Language>
        <Language id="Arabic">2 ملوك</Language>
        <Language id="Indonesian">2 Raja-raja</Language>
    </Title>
</Book>
		<Book id="1 Chronicles" style="prophecy_book">
    <Title>
        <Language id="English">1 Chronicles</Language>
        <Language id="Arabic">1 اخبار</Language>
        <Language id="Indonesian">1 Tawarikh</Language>
    </Title>
</Book>

<Book id="2 Chronicles" style="prophecy_book">
    <Title>
        <Language id="English">2 Chronicles</Language>
        <Language id="Arabic">2 اخبار</Language>
        <Language id="Indonesian">2 Tawarikh</Language>
    </Title>
</Book>

<Book id="Ezra" style="prophecy_author">
    <Title>
        <Language id="English">Ezra</Language>
        <Language id="Arabic">عزرا</Language>
        <Language id="Indonesian">Ezra</Language>
    </Title>
    <Author>
        <Language id="English">Ezra</Language>
        <Language id="Arabic">عزرا</Language>
        <Language id="Indonesian">Ezra</Language>
    </Author>
</Book>

<Book id="Nehemiah" style="prophecy_author">
    <Title>
        <Language id="English">Nehemiah</Language>
        <Language id="Arabic">نحميا</Language>
        <Language id="Indonesian">Nehemia</Language>
    </Title>
    <Author>
        <Language id="English">Nehemiah</Language>
        <Language id="Arabic">نحميا</Language>
        <Language id="Indonesian">Nehemia</Language>
    </Author>
</Book>

<Book id="Tobit" style="prophecy_book">
    <Title>
        <Language id="English">Tobit</Language>
        <Language id="Arabic">طوبيا</Language>
        <Language id="Indonesian">Tobit</Language>
    </Title>
</Book>

<Book id="Judith" style="prophecy_book">
    <Title>
        <Language id="English">Judith</Language>
        <Language id="Arabic">يهوديت</Language>
        <Language id="Indonesian">Yudit</Language>
    </Title>
</Book>

<Book id="Esther" style="prophecy_book">
    <Title>
        <Language id="English">Esther</Language>
        <Language id="Arabic">استير</Language>
        <Language id="Indonesian">Ester</Language>
    </Title>
</Book>

<Book id="Job" style="prophecy_author_no_title">
    <Title>
        <Language id="English">Job</Language>
        <Language id="Arabic">ايوب</Language>
        <Language id="Coptic">Iwb</Language>
        <Language id="Indonesian">Ayub</Language>
    </Title>
    <Author>
        <Language id="English">Job the righteous</Language>
        <Language id="Arabic">ايوب الصديق</Language>
        <Language id="Coptic">Iwb Piy~m/i</Language>
        <Language id="Indonesian">Ayub yang benar</Language>
    </Author>
</Book>

<Book id="Psalms" style="psalms">
    <Title>
        <Language id="English">Psalms</Language>
        <Language id="Arabic">مزامير</Language>
        <Language id="Indonesian">Mazmur</Language>
    </Title>
</Book>

<Book id="Proverbs" style="proverbs">
    <Title>
        <Language id="English">Proverbs</Language>
        <Language id="Arabic">أمثال</Language>
        <Language id="Indonesian">Amsal</Language>
    </Title>
    <Author>
        <Language id="English">Solomon</Language>
        <Language id="Arabic">سليمان</Language>
        <Language id="Indonesian">Salomo</Language>
    </Author>
</Book>

<Book id="Ecclesiastes" style="prophecy_book_author">
    <Title>
        <Language id="English">Ecclesiastes</Language>
        <Language id="Arabic">جامعة</Language>
        <Language id="Indonesian">Pengkhotbah</Language>
    </Title>
    <Author>
        <Language id="English">Solomon</Language>
        <Language id="Arabic">سليمان</Language>
        <Language id="Indonesian">Salomo</Language>
    </Author>
</Book>

<Book id="Song of Solomon" style="prophecy_book_author">
    <Title>
        <Language id="English">Song of Solomon</Language>
        <Language id="Arabic">نشيد الانشاد</Language>
        <Language id="Indonesian">Kidung Agung</Language>
    </Title>
    <Author>
        <Language id="English">Solomon</Language>
        <Language id="Arabic">سليمان</Language>
        <Language id="Indonesian">Salomo</Language>
    </Author>
</Book>

<Book id="Wisdom" style="prophecy_book_author">
    <Title>
        <Language id="English">Wisdom</Language>
        <Language id="Arabic">الحكمة</Language>
        <Language id="Indonesian">Kebijaksanaan</Language>
    </Title>
    <Author>
        <Language id="English">Solomon</Language>
        <Language id="Arabic">سليمان</Language>
        <Language id="Indonesian">Salomo</Language>
    </Author>
</Book>

<Book id="Sirach" style="prophecy_book">
    <Title>
        <Language id="English">Sirach</Language>
        <Language id="Arabic">يشوع بن سيراخ</Language>
        <Language id="Indonesian">Yesus bin Sirakh</Language>
    </Title>
</Book>

<Book id="Isaiah" style="prophecy_author">
    <Title>
        <Language id="English">Isaiah</Language>
        <Language id="Arabic">اشعياء</Language>
        <Language id="Coptic">?ca/~ac</Language>
        <Language id="Indonesian">Yesaya</Language>
    </Title>
    <Author>
        <Language id="English">Isaiah</Language>
        <Language id="Arabic">اشعياء</Language>
        <Language id="Coptic">?ca/~ac</Language>
        <Language id="Indonesian">Yesaya</Language>
    </Author>
</Book>

<Book id="Jeremiah" style="prophecy_author">
    <Title>
        <Language id="English">Jeremiah</Language>
        <Language id="Arabic">ارميا</Language>
        <Language id="Coptic">Iermiac</Language>
        <Language id="Indonesian">Yeremia</Language>
    </Title>
    <Author>
        <Language id="English">Jeremiah</Language>
        <Language id="Arabic">ارميا</Language>
        <Language id="Coptic">Iermiac</Language>
        <Language id="Indonesian">Yeremia</Language>
    </Author>
</Book>

		<Book id="Lamentations" style="lamentations">
    <Title>
        <Language id="English">Lamentations</Language>
        <Language id="Arabic">مراثي</Language>
        <Language id="Coptic">Yrinio</Language>
        <Language id="Indonesian">Ratapan</Language>
    </Title>
    <Author>
        <Language id="English">Jeremiah</Language>
        <Language id="Arabic">ارميا</Language>
        <Language id="Coptic">Iermiac</Language>
        <Language id="Indonesian">Yeremia</Language>
    </Author>
</Book>

<Book id="Baruch" style="prophecy_book">
    <Title>
        <Language id="English">Baruch</Language>
        <Language id="Arabic">باروخ</Language>
        <Language id="Indonesian">Barukh</Language>
    </Title>
</Book>

<Book id="Ezekiel" style="prophecy_author">
    <Title>
        <Language id="English">Ezekiel</Language>
        <Language id="Arabic">حزقيال</Language>
        <Language id="Coptic">Iezeki/l</Language>
        <Language id="Indonesian">Yehezkiel</Language>
    </Title>
    <Author>
        <Language id="English">Ezekiel</Language>
        <Language id="Arabic">حزقيال</Language>
        <Language id="Coptic">Iezeki/l</Language>
        <Language id="Indonesian">Yehezkiel</Language>
    </Author>
</Book>

<Book id="Daniel" style="prophecy_author">
    <Title>
        <Language id="English">Daniel</Language>
        <Language id="Arabic">دانيال</Language>
        <Language id="Coptic">Dani/l</Language>
        <Language id="Indonesian">Daniel</Language>
    </Title>
    <Author>
        <Language id="English">Daniel</Language>
        <Language id="Arabic">دانيال</Language>
        <Language id="Coptic">Dani/l</Language>
        <Language id="Indonesian">Daniel</Language>
    </Author>
</Book>

<Book id="Hosea" style="prophecy_author">
    <Title>
        <Language id="English">Hosea</Language>
        <Language id="Arabic">هوشع</Language>
        <Language id="Coptic">Wcie~</Language>
        <Language id="Indonesian">Hosea</Language>
    </Title>
    <Author>
        <Language id="English">Hosea</Language>
        <Language id="Arabic">هوشع</Language>
        <Language id="Coptic">Wcie~</Language>
        <Language id="Indonesian">Hosea</Language>
    </Author>
</Book>

<Book id="Joel" style="prophecy_author">
    <Title>
        <Language id="English">Joel</Language>
        <Language id="Arabic">يوئيل</Language>
        <Language id="Coptic">Iou/l</Language>
        <Language id="Indonesian">Yoel</Language>
    </Title>
    <Author>
        <Language id="English">Joel</Language>
        <Language id="Arabic">يوئيل</Language>
        <Language id="Coptic">Iou/l</Language>
        <Language id="Indonesian">Yoel</Language>
    </Author>
</Book>

<Book id="Amos" style="prophecy_author">
    <Title>
        <Language id="English">Amos</Language>
        <Language id="Arabic">عاموس</Language>
        <Language id="Coptic">Amwc</Language>
        <Language id="Indonesian">Amos</Language>
    </Title>
    <Author>
        <Language id="English">Amos</Language>
        <Language id="Arabic">عاموس</Language>
        <Language id="Coptic">Amwc</Language>
        <Language id="Indonesian">Amos</Language>
    </Author>
</Book>

<Book id="Obadiah" style="prophecy_author">
    <Title>
        <Language id="English">Obadiah</Language>
        <Language id="Arabic">عوبديا</Language>
        <Language id="Indonesian">Obaja</Language>
    </Title>
    <Author>
        <Language id="English">Obadiah</Language>
        <Language id="Arabic">عوبديا</Language>
        <Language id="Indonesian">Obaja</Language>
    </Author>
</Book>

		<Book id="Jonah" style="prophecy_author">
    <Title>
        <Language id="English">Jonah</Language>
        <Language id="Arabic">يونان</Language>
        <Language id="Indonesian">Yunus</Language>
    </Title>
    <Author>
        <Language id="English">Jonah</Language>
        <Language id="Arabic">يونان</Language>
        <Language id="Indonesian">Yunus</Language>
    </Author>
</Book>

<Book id="Micah" style="prophecy_author">
    <Title>
        <Language id="English">Micah</Language>
        <Language id="Arabic">ميخا</Language>
        <Language id="Coptic">Mi,eoc</Language>
        <Language id="Indonesian">Mikha</Language>
    </Title>
    <Author>
        <Language id="English">Micah</Language>
        <Language id="Arabic">ميخا</Language>
        <Language id="Coptic">Mi,eoc</Language>
        <Language id="Indonesian">Mikha</Language>
    </Author>
</Book>

<Book id="Nahum" style="prophecy_author">
    <Title>
        <Language id="English">Nahum</Language>
        <Language id="Arabic">ناحوم</Language>
        <Language id="Coptic">Naoum</Language>
        <Language id="Indonesian">Nahum</Language>
    </Title>
    <Author>
        <Language id="English">Nahum</Language>
        <Language id="Arabic">ناحوم</Language>
        <Language id="Coptic">Naoum</Language>
        <Language id="Indonesian">Nahum</Language>
    </Author>
</Book>

<Book id="Habakkuk" style="prophecy_author">
    <Title>
        <Language id="English">Habakkuk</Language>
        <Language id="Arabic">حبقوق</Language>
        <Language id="Indonesian">Habakuk</Language>
    </Title>
    <Author>
        <Language id="English">Habakkuk</Language>
        <Language id="Arabic">حبقوق</Language>
        <Language id="Indonesian">Habakuk</Language>
    </Author>
</Book>

<Book id="Zephaniah" style="prophecy_author">
    <Title>
        <Language id="English">Zephaniah</Language>
        <Language id="Arabic">صفنيا</Language>
        <Language id="Coptic">Covoniac</Language>
        <Language id="Indonesian">Zefanya</Language>
    </Title>
    <Author>
        <Language id="English">Zephaniah</Language>
        <Language id="Arabic">صفنيا</Language>
        <Language id="Coptic">Covoniac</Language>
        <Language id="Indonesian">Zefanya</Language>
    </Author>
</Book>

<Book id="Haggai" style="prophecy_author">
    <Title>
        <Language id="English">Haggai</Language>
        <Language id="Arabic">حجى</Language>
        <Language id="Indonesian">Hagai</Language>
    </Title>
    <Author>
        <Language id="English">Haggai</Language>
        <Language id="Arabic">حجى</Language>
        <Language id="Indonesian">Hagai</Language>
    </Author>
</Book>

<Book id="Zechariah" style="prophecy_author">
    <Title>
        <Language id="English">Zechariah</Language>
        <Language id="Arabic">زكريا</Language>
        <Language id="Coptic">Za,ariac</Language>
        <Language id="Indonesian">Zakharia</Language>
    </Title>
    <Author>
        <Language id="English">Zechariah</Language>
        <Language id="Arabic">زكريا</Language>
        <Language id="Coptic">Za,ariac</Language>
        <Language id="Indonesian">Zakharia</Language>
    </Author>
</Book>

<Book id="Malachi" style="prophecy_author">
    <Title>
        <Language id="English">Malachi</Language>
        <Language id="Arabic">ملاخي</Language>
        <Language id="Coptic">Mala,iac</Language>
        <Language id="Indonesian">Maleakhi</Language>
    </Title>
    <Author>
        <Language id="English">Malachi</Language>
        <Language id="Arabic">ملاخي</Language>
        <Language id="Coptic">Mala,iac</Language>
        <Language id="Indonesian">Maleakhi</Language>
    </Author>
</Book>

<Book id="1 Maccabees" style="prophecy_book">
    <Title>
        <Language id="English">1 Maccabees</Language>
        <Language id="Arabic">1 المكابيين</Language>
        <Language id="Indonesian">1 Makabe</Language>
    </Title>
</Book>

<Book id="2 Maccabees" style="prophecy_book">
    <Title>
        <Language id="English">2 Maccabees</Language>
        <Language id="Arabic">2 المكابيين</Language>
        <Language id="Indonesian">2 Makabe</Language>
    </Title>
</Book>

<Book id="Prayer of Manasseh" style="prophecy_book">
    <Title>
        <Language id="English">Prayer of Manasseh</Language>
        <Language id="Arabic">صلاة منسى</Language>
        <Language id="Indonesian">Doa Manasye</Language>
    </Title>
</Book>

<Book id="Matthew" style="gospel">
    <Title>
        <Language id="English">Matthew</Language>
        <Language id="Arabic">متى</Language>
        <Language id="Coptic">Matyeon</Language>
        <Language id="Indonesian">Matius</Language>
    </Title>
    <Author>
        <Language id="English">Matthew</Language>
        <Language id="Arabic">متى</Language>
        <Language id="Coptic">Matyeon</Language>
        <Language id="Indonesian">Matius</Language>
    </Author>
</Book>

<Book id="Mark" style="gospel">
    <Title>
        <Language id="English">Mark</Language>
        <Language id="Arabic">مرقس</Language>
        <Language id="Coptic">Markon</Language>
        <Language id="Indonesian">Markus</Language>
    </Title>
    <Author>
        <Language id="English">Mark</Language>
        <Language id="Arabic">مرقس</Language>
        <Language id="Coptic">Markon</Language>
        <Language id="Indonesian">Markus</Language>
    </Author>
</Book>

<Book id="Luke" style="gospel">
    <Title>
        <Language id="English">Luke</Language>
        <Language id="Arabic">لوقا</Language>
        <Language id="Coptic">Loukan</Language>
        <Language id="Indonesian">Lukas</Language>
    </Title>
    <Author>
        <Language id="English">Luke</Language>
        <Language id="Arabic">لوقا</Language>
        <Language id="Coptic">Loukan</Language>
        <Language id="Indonesian">Lukas</Language>
    </Author>
</Book>

<Book id="John" style="gospel">
    <Title>
        <Language id="English">John</Language>
        <Language id="Arabic">يوحنا</Language>
        <Language id="Coptic">Iwann/n</Language>
        <Language id="Indonesian">Yohanes</Language>
    </Title>
    <Author>
        <Language id="English">John</Language>
        <Language id="Arabic">يوحنا</Language>
        <Language id="Coptic">Iwann/n</Language>
        <Language id="Indonesian">Yohanes</Language>
    </Author>
</Book>

<Book id="Acts" style="acts">
    <Title>
        <Language id="English">Acts</Language>
        <Language id="Arabic">اعمال</Language>
        <Language id="Indonesian">Kisah Para Rasul</Language>
    </Title>
</Book>

<Book id="Romans" style="pauline">
    <Title>
        <Language id="English">Romans</Language>
        <Language id="Arabic">ﺭﻭﻣﻴﺔ</Language>
        <Language id="Indonesian">Roma</Language>
    </Title>
</Book>

<Book id="1 Corinthians" style="pauline">
    <Title>
        <Language id="English">1 Corinthians</Language>
        <Language id="Arabic">1 ﻛﻮﺭﻧﺜﻮﺱ</Language>
        <Language id="Indonesian">1 Korintus</Language>
    </Title>
</Book>

		<Book id="2 Corinthians" style="pauline">
    <Title>
        <Language id="English">2 Corinthians</Language>
        <Language id="Arabic">2 ﻛﻮﺭﻧﺜﻮﺱ</Language>
        <Language id="Indonesian">2 Korintus</Language>
    </Title>
</Book>

<Book id="Galatians" style="pauline">
    <Title>
        <Language id="English">Galatians</Language>
        <Language id="Arabic">غلاطية</Language>
        <Language id="Indonesian">Galatia</Language>
    </Title>
</Book>

<Book id="Ephesians" style="pauline">
    <Title>
        <Language id="English">Ephesians</Language>
        <Language id="Arabic">ﺃﻓﺴﺲ</Language>
        <Language id="Indonesian">Efesus</Language>
    </Title>
</Book>

<Book id="Philippians" style="pauline">
    <Title>
        <Language id="English">Philippians</Language>
        <Language id="Arabic">ﻓﻴﻠﻴﺒﻲ</Language>
        <Language id="Indonesian">Filipi</Language>
    </Title>
</Book>

<Book id="Colossians" style="pauline">
    <Title>
        <Language id="English">Colossians</Language>
        <Language id="Arabic">ﻛﻮﻟﻮﺳﻲ</Language>
        <Language id="Indonesian">Kolose</Language>
    </Title>
</Book>

<Book id="1 Thessalonians" style="pauline">
    <Title>
        <Language id="English">1 Thessalonians</Language>
        <Language id="Arabic">1 ﺗﺴﺎﻟﻮﻧﻴﻜﻲ</Language>
        <Language id="Indonesian">1 Tesalonika</Language>
    </Title>
</Book>

<Book id="2 Thessalonians" style="pauline">
    <Title>
        <Language id="English">2 Thessalonians</Language>
        <Language id="Arabic">2 ﺗﺴﺎﻟﻮﻧﻴﻜﻲ</Language>
        <Language id="Indonesian">2 Tesalonika</Language>
    </Title>
</Book>

<Book id="1 Timothy" style="pauline_personal">
    <Title>
        <Language id="English">1 Timothy</Language>
        <Language id="Arabic">1 ﺗﻴﻤﻮﺛﺎﻭﺱ</Language>
        <Language id="Indonesian">1 Timotius</Language>
    </Title>
</Book>

<Book id="2 Timothy" style="pauline_personal">
    <Title>
        <Language id="English">2 Timothy</Language>
        <Language id="Arabic">2 ﺗﻴﻤﻮﺛﺎﻭﺱ</Language>
        <Language id="Indonesian">2 Timotius</Language>
    </Title>
</Book>

<Book id="Titus" style="pauline_personal">
    <Title>
        <Language id="English">Titus</Language>
        <Language id="Arabic">ﺗﻴﻄﺲ</Language>
        <Language id="Indonesian">Titus</Language>
    </Title>
</Book>

		<Book id="Philemon" style="pauline_personal">
    <Title>
        <Language id="English">Philemon</Language>
        <Language id="Arabic">ﻓﻠﻴﻤﻮﻥ</Language>
        <Language id="Indonesian">Filemon</Language>
    </Title>
</Book>

<Book id="Hebrews" style="hebrews">
    <Title>
        <Language id="English">Hebrews</Language>
        <Language id="Arabic">ﺍﻟﻌﺒﺮﺍﻧﻴﻴﻦ</Language>
        <Language id="Indonesian">Ibrani</Language>
    </Title>
</Book>

<Book id="James" style="catholic">
    <Title>
        <Language id="English">James</Language>
        <Language id="Arabic">يعقوب</Language>
        <Language id="Indonesian">Yakobus</Language>
    </Title>
    <Author>
        <Language id="English">James</Language>
        <Language id="Arabic">يعقوب</Language>
        <Language id="Indonesian">Yakobus</Language>
    </Author>
</Book>

<Book id="1 Peter" style="catholic">
    <Title>
        <Language id="English">1 Peter</Language>
        <Language id="Arabic">1 بطرس</Language>
        <Language id="Indonesian">1 Petrus</Language>
    </Title>
    <Author>
        <Language id="English">Peter</Language>
        <Language id="Arabic">بطرس</Language>
        <Language id="Indonesian">Petrus</Language>
    </Author>
</Book>

<Book id="2 Peter" style="catholic">
    <Title>
        <Language id="English">2 Peter</Language>
        <Language id="Arabic">2 بطرس</Language>
        <Language id="Indonesian">2 Petrus</Language>
    </Title>
    <Author>
        <Language id="English">Peter</Language>
        <Language id="Arabic">بطرس</Language>
        <Language id="Indonesian">Petrus</Language>
    </Author>
</Book>

<Book id="1 John" style="catholic">
    <Title>
        <Language id="English">1 John</Language>
        <Language id="Arabic">1 يوحنا</Language>
        <Language id="Indonesian">1 Yohanes</Language>
    </Title>
    <Author>
        <Language id="English">John</Language>
        <Language id="Arabic">يوحنا</Language>
        <Language id="Indonesian">Yohanes</Language>
    </Author>
</Book>

<Book id="2 John" style="catholic">
    <Title>
        <Language id="English">2 John</Language>
        <Language id="Arabic">2 يوحنا</Language>
        <Language id="Indonesian">2 Yohanes</Language>
    </Title>
    <Author>
        <Language id="English">John</Language>
        <Language id="Arabic">يوحنا</Language>
        <Language id="Indonesian">Yohanes</Language>
    </Author>
</Book>

<Book id="3 John" style="catholic">
    <Title>
        <Language id="English">3 John</Language>
        <Language id="Arabic">3 يوحنا</Language>
        <Language id="Indonesian">3 Yohanes</Language>
    </Title>
    <Author>
        <Language id="English">John</Language>
        <Language id="Arabic">يوحنا</Language>
        <Language id="Indonesian">Yohanes</Language>
    </Author>
</Book>

<Book id="Jude" style="catholic">
    <Title>
        <Language id="English">Jude</Language>
        <Language id="Arabic">يهوذا</Language>
        <Language id="Indonesian">Yudas</Language>
    </Title>
    <Author>
        <Language id="English">Jude</Language>
        <Language id="Arabic">يهوذا</Language>
        <Language id="Indonesian">Yudas</Language>
    </Author>
</Book>

<Book id="Revelation">
    <Title>
        <Language id="English">Revelation</Language>
        <Language id="Arabic">رؤيا</Language>
        <Language id="Indonesian">Wahyu</Language>
    </Title>
</Book>

	</BibleBooks>`;

	const data = new DOMParser().parseFromString(XML, "text/xml").documentElement;

	function getStyle(id) {
		return {
			introduction: data.querySelector(`Style[id="${id}"] Introduction`),
			conclusion: data.querySelector(`[id="${id}"] Conclusion`)
		}
	}

	function get(id) {
		const book = data.querySelector(`Book[id="${id}"]`);
		const style = getStyle(book.getAttribute('style'));

		const title = book.querySelector('Title');
		const author = book.querySelector('Author');

		[...(style.introduction?.children || []), ...(style.conclusion?.children || [])].forEach(l => {
			l.innerHTML = l.innerHTML.replace(/\[BOOK\]|\[BOOK_NAME\]/, lang(title, l.id));
			l.innerHTML = l.innerHTML.replace('[ORDINAL]', '');
			l.innerHTML = l.innerHTML.replace('[AUTHOR]', lang(author, l.id));
		});

		return {
			introduction: style.introduction?.outerHTML || '',
			conclusion: style.conclusion?.outerHTML || '',
		};
	}

	function getTitle(id) {
		const book = data.querySelector(`Book[id="${id}"]`);
		const titleXML = book.querySelector('Title');

		return {
			'Arabic': lang(titleXML, 'Arabic') || '',
			'English': lang(titleXML, 'English') || '',
			'Coptic': lang(titleXML, 'Coptic') || '',
		}
	}

	function lang(elem, l) {
		return elem?.querySelector(`#${l}`)?.innerHTML || '';
	}

	return {
		get,
		getTitle
	}
})();
