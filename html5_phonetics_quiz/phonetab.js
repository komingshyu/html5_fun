//=======================================================
//HTML5 FUN [注音高手] 注音國字對照表檔
//=======================================================

//第一行為標點符號
//第二行起為 [注音,國字清單]
//
phonTabLines = function(){/*--這一行請勿更改--
標點符號,，、。；．？！︰「」『』…～＄％＠＆＃＊‧【】《》（）＜＞◎○●⊕⊙△▲☆★◇◆□
ㄝ,ㄝ
ㄝˋ,誒
ㄦ,ㄦ兒
ㄦˇ,爾耳洱餌邇珥駬薾鉺峏尒栮
ㄦˋ,二貳佴刵咡樲聏毦眲衈
ㄦˊ,兒而洏耏胹輀侕栭陑鮞檽聏荋唲鴯
ㄡ,歐甌毆嘔謳鷗ㄡ慪區熰蓲櫙
ㄡˇ,偶藕嘔耦吘湡腢蕅
ㄡˋ,嘔漚噢
ㄡˊ,吽
ㄥ,鞥ㄥ
ㄢ,安鞍庵諳氨銨胺ㄢ鵪媕侒盦峖痷腤萻韽垵
ㄢˇ,俺唵晻堷
ㄢˋ,暗案岸按黯菴闇犴豻匼桉洝荌錌匎婩儑
ㄢˊ,雸玵啽
ㄅ,ㄅ
ㄅㄥ,崩繃伻弸祊閍塴絣
ㄅㄥˇ,菶玤琫埲誁
ㄅㄥˋ,蹦搒洴迸跰泵
ㄅㄥˊ,甭
ㄅㄢ,班般搬斑頒扳瘢虨斒攽褩
ㄅㄢˇ,板版闆阪舨昄鈑粄蝂
ㄅㄢˋ,半辦伴扮拌絆姅瓣爿怑湴鉡靽
ㄅㄚ,八捌巴疤芭笆粑叭扒豝吧仈朳
ㄅㄚˇ,把靶鈀
ㄅㄚˋ,罷爸霸壩耙弝灞伯猈
ㄅㄚˊ,拔跋鈸魃茇鼥軷犮菝胈詙
ㄅㄚ˙,吧罷琶杷爸
ㄅㄞ,掰
ㄅㄞˇ,百擺佰襬粨捭矲絔
ㄅㄞˋ,敗拜唄粺椑稗矲庍
ㄅㄞˊ,白
ㄅㄤ,幫邦傍梆鞤縍垹
ㄅㄤˇ,榜綁牓膀氆
ㄅㄤˋ,棒磅謗蚌傍鎊旁甏塝艕
ㄅㄛ,波玻撥剝菠缽嶓砵播般碆袚襏鱍啵柭蹳岥
ㄅㄛˇ,跛簸蚾
ㄅㄛˋ,播擘簸亳薜譒薄檗蘗繴挀
ㄅㄛˊ,伯博柏泊勃搏渤駁白薄脖帛舶箔荸蔔膊鈸餑鉑欂鵓踣浡襮踄鎛駮僰餺髆桲謈檗馞胉挬猼葧鋍懪簙礡鑮郣鸔糪
ㄅㄨ,逋晡餔峬鵏
ㄅㄨˇ,補捕埔哺卜鳪獛
ㄅㄨˋ,不部布步怖佈簿埠鈽蔀篰捗咘
ㄅㄨˊ,不
ㄅㄠ,包胞苞褒枹笣蕔孢
ㄅㄠˇ,保寶飽堡褓葆鴇怉駂鳵媬
ㄅㄠˋ,報抱暴爆豹鮑刨趵鉋虣鑤儤菢煲袌嚗犦忁
ㄅㄠˊ,雹薄窇瓝
ㄅㄟ,背杯悲卑碑俾揹偝盃裨萆桮椑伓綼鵯藣
ㄅㄟˇ,北
ㄅㄟˋ,被備背貝輩倍臂狽憊悖孛焙蓓褙邶琲誖鋇哱糒梖珼鄁牬郥犕奰
ㄅㄣ,奔賁錛泍渀
ㄅㄣˇ,本畚苯
ㄅㄣˋ,笨体坌
ㄅㄧ,逼屄偪稫豍
ㄅㄧㄝ,憋鱉虌
ㄅㄧㄝˇ,癟蛂
ㄅㄧㄝˋ,彆縪
ㄅㄧㄝˊ,別蹩咇徶襒蟞
ㄅㄧㄥ,兵冰掤栟
ㄅㄧㄥˇ,餅丙稟柄秉炳昺邴怲鞞鉼蛃陃苪窉屏庰
ㄅㄧㄥˋ,並病併并摒寎鵧偋
ㄅㄧㄢ,邊編鞭蝙砭籩箯稨猵甂柉楄煸
ㄅㄧㄢˇ,扁貶匾褊窆萹惼碥
ㄅㄧㄢˋ,便變遍辨辯汴辮忭弁釆抃緶艑卞揙汳鴘閞
ㄅㄧˇ,比筆彼鄙匕沘秕屄蚍妣疕潷柀朼貏
ㄅㄧˋ,必敝畢壁避璧閉鄙臂幣弊婢斃碧泌祕俾蔽庇嗶愎辟弼裨陛埤箄篦畀比嬖睥賁贔襞毖蓽蹕髀怭庳愊楅湢狴獘篳苾薜觱詖躄邲閟柲梐珌痺飶馝駜鎞鷩皕堛鉍痹腷骳坒滭熚疪妼鏎鷝柫佖蜌彃箅蓖鄪罼鮅襒鵖襣驆鼊芘粊稗嫳獙廦鄨縪
ㄅㄧˊ,鼻
ㄅㄧㄠ,標彪鑣鏢飆膘熛麃羆嘌杓滮瀌猋瘭穮颮驫摽儦臕颩髟謤墂贆蔈爂藨
ㄅㄧㄠˇ,表錶婊裱俵褾檦諘
ㄅㄧㄠˋ,鰾
ㄅㄧㄣ,賓濱彬檳儐斌繽豳瀕邠璸蠙鑌豩汃椕霦矉驞
ㄅㄧㄣˋ,殯鬢儐擯臏髕鶣
ㄉ,ㄉ
ㄉㄡ,都兜郖
ㄉㄡˇ,斗抖陡蚪枓唗敨
ㄉㄡˋ,鬥豆逗痘竇荳脰餖鋀梪浢讀
ㄉㄥ,登燈鐙簦豋璒嬁
ㄉㄥˇ,等戥
ㄉㄥˋ,鄧瞪蹬凳嶝磴墱邆霯
ㄉㄢ,單擔丹耽簞鄲眈聃酖砃甔襌匰聸勯嚪
ㄉㄢˇ,膽疸撢亶紞刐撣玬衴黵丼澸
ㄉㄢˋ,但旦淡蛋誕擔彈憚氮啖澹憺儋啗噉石癉窞僤幨霮髧萏鉭暺柦帎潬沊狚觛啿舕蜑嘾鴠癚殫灗泹
ㄉㄚ,搭褡答撘瘩躂咑耷
ㄉㄚˇ,打
ㄉㄚˋ,大
ㄉㄚˊ,答達韃靼瘩怛繨噠妲笪荅薘褟鐽匒呾畣炟鎝
ㄉㄞ,呆待獃
ㄉㄞˇ,歹逮
ㄉㄞˋ,代帶待袋戴怠殆黛貸迨大玳岱逮襶埭靆紿廗汏忕瀻軩跢艜蹛柋酨
ㄉㄤ,當噹鐺襠璫簹儅蟷澢艡嵣
ㄉㄤˇ,檔黨擋讜攩欓党
ㄉㄤˋ,當蕩擋盪碭宕菪逿璗愓瓽礑簜闣
ㄉㄨ,都督嘟闍醏
ㄉㄨㄥ,東冬咚鼕苳蝀埬崠氡炵涷菄鶇
ㄉㄨㄥˇ,懂董嬞墥
ㄉㄨㄥˋ,動洞凍棟恫胴挏戙駧霘
ㄉㄨㄢ,端耑偳剬媏
ㄉㄨㄢˇ,短
ㄉㄨㄢˋ,段斷緞鍛毈腶籪椴葮碫躖
ㄉㄨˇ,賭堵睹篤肚錖裻帾
ㄉㄨˋ,度渡肚妒鍍杜蠹秺喥
ㄉㄨˊ,讀獨毒牘纛瀆犢髑讟黷櫝儥碡殰蝳贕韇韥皾
ㄉㄨㄛ,多朵哆柁茤
ㄉㄨㄛˇ,躲朵埵垛嚲鬌痑趓
ㄉㄨㄛˋ,惰墮舵跺剁咄踱馱垛墯嶞柮陏陊度袉貀鵽
ㄉㄨㄛˊ,奪鐸多掇裰剟敪椯剫敓莌毲腏鮵襗
ㄉㄨㄟ,堆頧痽
ㄉㄨㄟˋ,對隊兌碓懟譈濧薱轛濻瀩憝
ㄉㄨㄣ,敦蹲墩惇礅驐蜳撉鐓
ㄉㄨㄣˇ,盹躉
ㄉㄨㄣˋ,頓噸盾鈍遁盹燉沌囤遯炖坉扽伅庉潡崸鶨腞
ㄉㄜˊ,得德淂
ㄉㄜ˙,的得
ㄉㄠ,刀叨忉舠氘幍魛
ㄉㄠˇ,倒島導禱搗擣捯壔禂
ㄉㄠˋ,到道倒稻盜蹈悼導纛翿檤菿瓙
ㄉㄟˇ,得
ㄉㄧ,低滴氐羝鞮彽磾鍉袛菂墑熵
ㄉㄧㄝ,爹
ㄉㄧㄝˊ,跌蝶諜碟疊迭牒喋瓞耋絰咥垤堞蜨蹀鰈跕昳峌挕胅苵眣聑臷詄镻艓褋惵楪嶀
ㄉㄧㄡ,丟銩
ㄉㄧㄥ,丁釘叮疔酊盯仃玎帄靪虰
ㄉㄧㄥˇ,頂鼎酊嵿濎薡
ㄉㄧㄥˋ,定訂釘錠碇飣娗椗掟碠顁萣啶
ㄉㄧㄢ,顛巔癲滇掂傎瘨敁蹎槙齻厧
ㄉㄧㄢˇ,點典碘錪婰琠蕇
ㄉㄧㄢˋ,電店殿甸奠墊澱惦靛佃淀玷鈿簟坫痁癜磹阽扂婝踮壂
ㄉㄧˇ,底抵邸詆牴砥氐坻柢弤觝呧阺聜菧軧扺
ㄉㄧˋ,地第弟帝遞蒂的締諦娣睇棣杕玓禘蔕螮踶楴渧碲虳釱樀旳軑梊焍馰墆嵽珶甋
ㄉㄧˊ,的敵迪狄笛滌翟荻嫡嘀鏑蹢芽犒糴覿篴蔋靮梑潪苖嚁鸐藋藡
ㄉㄧ˙,弟
ㄉㄧㄚ,嗲
ㄉㄧㄠ,雕凋刁貂鵰碉叼彫瞗琱鯛扚蛁鳭虭殦
ㄉㄧㄠˇ,屌
ㄉㄧㄠˋ,調掉釣吊弔窵蓧誂伄魡
ㄓ,之知隻織支枝汁只吱芝脂肢蜘祇梔祗氏枳ㄓ胝鴟卮搘秖跖泜鳷汥秪榰胑衼椥
ㄓㄡ,周週州洲舟粥賙啁盩譸輈喌騆鵃洀淍銂珘徟輖侜婤
ㄓㄡˇ,帚肘睭鯞
ㄓㄡˋ,晝皺宙紂縐冑咒繇甃籀咮酎僽怞胄噣駎
ㄓㄡˊ,軸妯
ㄓㄥ,爭征蒸睜徵掙箏正怔猙錚崢諍癥鉦烝篜姃炡埩聇丁眐
ㄓㄥˇ,整拯氶撜糽
ㄓㄥˋ,鄭正證政証症掙幀
ㄓㄢ,詹沾瞻氈霑旃譫鱣覘邅栴鸇驙占呫饘鉆詀薝譠
ㄓㄢˇ,展斬盞輾搌嶄琖魙醆颭樿皽蹍嫸榐橏
ㄓㄢˋ,佔戰站暫占棧顫湛綻蹔蘸虥轏輚偡
ㄓˇ,只指紙止旨址徵祇趾祉咫枳酯恉沚阯芷黹軹疻晊厎坁藢栺淽滍
ㄓˋ,至制治志製致置智秩誌稚質峙緻幟滯摯窒炙痔雉識懥痣輊騭帙陟知寘忮桎躓蛭贄鷙厔鑕豸庤彘猘畤疐紩觶郅銍偫跱遰鋕櫍袟騺淛狾礩胵膣螲挃洷覟庢鴙迣翐臸駤祑觢鴩
ㄓˊ,直職質值植執殖擲姪侄蹠蟄躑桎埴稙摭縶柣犆秷擿馽慹樴膱懫蟙褁瓡嬂蘵
ㄓㄚ,渣扎喳楂查齇柤皻抯挓樝謯
ㄓㄚˇ,眨渣鮓厏苲
ㄓㄚˋ,榨柵炸詐乍搾蚱咋蜡吒溠砟醡鮓痄簎
ㄓㄚˊ,扎札紮閘炸霅鍘哳劄蚻譗蠿
ㄓㄞ,摘齋齊捚
ㄓㄞˇ,窄岝
ㄓㄞˋ,債寨祭責瘵砦
ㄓㄞˊ,宅翟
ㄓㄤ,張章彰漳樟璋獐嫜暲鄣蟑鱆慞傽墇騿遧
ㄓㄤˇ,長掌漲仉鞝
ㄓㄤˋ,丈仗帳障賬脹杖漲長幛瘴嶂扙瞕粀
ㄓㄨ,珠朱諸株豬蛛茱硃誅銖侏洙瀦邾櫫櫧祩藷絑袾觰鴸蠩蝫鮢藸
ㄓㄨㄥ,中鐘終忠鍾衷忪盅螽伀妐蔠柊煄彸舯炂籦
ㄓㄨㄥˇ,種腫塚踵冢
ㄓㄨㄥˋ,中種重仲眾尰湩狆衶偅堹緟
ㄓㄨㄢ,專磚耑顓塼鄟鱄剸嫥瑼篿鷒膞蟤
ㄓㄨㄢˇ,轉囀
ㄓㄨㄢˋ,傳賺篆撰譔饌轉僎瑑縳腞
ㄓㄨˇ,主屬煮囑貯渚矚著麈拄瘃斸砫陼孎壴罜欘泞眝
ㄓㄨˋ,住著助注祝駐註柱蛀鑄炷苧佇箸杼紵翥宁柷羜馵疰莇鉒紸嵀跓軴樦麆櫡殶諔
ㄓㄨˊ,竹築逐燭蠋筑竺朮躅舳軸窋蓫笁趉鱁灟蠾茿篫
ㄓㄨㄚ,抓撾髽檛
ㄓㄨㄚˇ,爪
ㄓㄨㄞ,拽
ㄓㄨㄞˇ,跩
ㄓㄨㄞˋ,拽
ㄓㄨㄤ,裝莊樁妝粧庄梉
ㄓㄨㄤˇ,奘
ㄓㄨㄤˋ,狀壯撞戇焋
ㄓㄨㄛ,捉桌涿棹穛
ㄓㄨㄛˊ,卓茁濁拙濯酌灼著啄鐲擢琢諑倬斲斮梲椓焯蝃踔鷟彴汋斫禚篧浞棳謶錣啅罬斀蠗圴剢灂
ㄓㄨㄟ,追錐椎隹騅鵻腄鴭
ㄓㄨㄟˇ,沝
ㄓㄨㄟˋ,綴墜贅縋惴餟硾膇鑆
ㄓㄨㄣ,諄屯肫窀迍宒訰
ㄓㄨㄣˇ,準准隼埻綧
ㄓㄨㄣˋ,稕
ㄓㄜ,遮螫晢嫬
ㄓㄜˇ,者赭鍺
ㄓㄜˋ,這浙蔗鷓柘宅檡烢蟅
ㄓㄜˊ,折哲摺懾褶謫輒摘轍慴蜇磔乇讋晢鮿耴悊砓謺虴鸅讘瓋
ㄓㄜ˙,著遮晢嫬
ㄓㄠ,朝招昭召著嘲釗駋鉊晁盄鍣妱
ㄓㄠˇ,找沼爪菬瑵
ㄓㄠˋ,照趙召罩兆肇詔晁笊櫂炤雿狣棹箌鵫垗旐曌
ㄓㄠˊ,著
ㄓㄣ,真針珍貞偵禎斟箴砧甄臻楨榛診蓁獉溱碪胗鍼鱵媜駗薽禛樼潧瑊遉寊蒧轃籈鷏堻
ㄓㄣˇ,診枕疹軫畛袗縝稹紾鬒眕黰辴抮抌笉絼祳晸縥黕
ㄓㄣˋ,鎮陣振震賑朕枕鴆揕酖眹娠侲挋栚蜄桭誫敶
ㄚ,阿啊ㄚ
ㄚˋ,阿
ㄚ˙,啊阿
ㄞ,挨哀埃唉哎ㄞ誒
ㄞˇ,矮藹靄欸毐昹佁
ㄞˋ,愛礙艾曖璦隘噯乂靉僾堨嬡鑀賹濭鴱譪誒薆
ㄞˊ,捱皚騃敳
ㄤ,骯腌ㄤ
ㄤˇ,軮
ㄤˋ,盎醠
ㄤˊ,昂卬
ㄇ,ㄇ
ㄇㄡˇ,某冇踇
ㄇㄡˊ,謀眸繆牟侔蝥鍪蛑麰洠鉾鴾呣哞
ㄇㄥˇ,猛蜢艋錳懵蠓懞瓾
ㄇㄥˋ,夢孟霿霥
ㄇㄥˊ,蒙盟萌矇朦濛檬懵幪甍瞢艨虻曚甿礞氋雺莔儚蕄鄳鄸饛鸏
ㄇㄢˇ,滿屘矕
ㄇㄢˋ,慢漫曼蔓幔嫚鏝縵墁熳澫僈獌
ㄇㄢˊ,蠻饅瞞蹣漫顢謾鰻璊悗慲槾鬘鬗
ㄇㄚ,媽嗎嬤
ㄇㄚˇ,馬螞碼瑪溤嗎鎷鷌嘜
ㄇㄚˋ,罵禡傌榪
ㄇㄚˊ,麻痲嘛麼蟆犘
ㄇㄚ˙,嘛嗎蟆媽
ㄇㄞˇ,買嘪鷶
ㄇㄞˋ,賣麥邁脈勱蝐
ㄇㄞˊ,埋霾薶
ㄇㄤˇ,莽蟒漭汒庬硥茻壾
ㄇㄤˊ,忙芒茫盲氓尨硭邙哤奀杗盳鋩娏牻痝蛖駹蘉鼆笀
ㄇㄛ,摸
ㄇㄛˇ,抹
ㄇㄛˋ,末莫默漠沒膜寞陌歿脈沫秣茉驀墨貊磨瘼靺歾饃鄚纆霢嚜眽瞙藦暯枺爅妺万銆鏌貘粖蛨袹嗼塻慔蟔鬕莈覛縸嘜
ㄇㄛˊ,模磨摩膜糢魔摹謨蘑劘嫫藦髍
ㄇㄛ˙,麼
ㄇㄨˇ,母畝牡姆拇牳鉧姥峔砪
ㄇㄨˋ,木目幕牧慕墓募穆睦暮沐苜鶩楘霂鉬炑坶毣蚞幙鞪莯
ㄇㄨˊ,模氁
ㄇㄜ˙,麼
ㄇㄠ,貓
ㄇㄠˇ,卯昴泖茆
ㄇㄠˋ,帽冒貌貿茂瑁懋旄耄媢楙眊瞀芼袤毷艒萺鄮
ㄇㄠˊ,毛茅矛髦錨旄蟊芼蝥髳媌堥罞酕嫹鶜枆軞渵
ㄇㄟˇ,美每鎂浼媺渼媄挴燘
ㄇㄟˋ,妹媚寐昧眛魅瑁沬袂痗韎煝蝞
ㄇㄟˊ,沒煤眉枚梅媒莓霉玫黴楣湄嵋苺禖郿堳瑂脢鋂呅腜塺徾攗
ㄇㄟ˙,妹
ㄇㄣ,悶
ㄇㄣˇ,暪
ㄇㄣˋ,悶燜懣
ㄇㄣˊ,門們捫樠鍆穈菛虋
ㄇㄣ˙,們
ㄇㄧ,咪瞇
ㄇㄧㄝ,咩乜羋
ㄇㄧㄝˋ,滅蔑衊篾蠛幭覕搣薎懱瀎礣鱴
ㄇㄧㄡ,唒
ㄇㄧㄡˋ,謬
ㄇㄧㄥˇ,眳姳慏
ㄇㄧㄥˋ,命暝
ㄇㄧㄥˊ,明名鳴銘螟冥瞑暝茗酩溟蓂鄍洺榠嫇覭詺熐
ㄇㄧㄢˇ,免勉緬冕娩靦湎沔偭眄絻丏俛愐喕鮸
ㄇㄧㄢˋ,面麵
ㄇㄧㄢˊ,棉綿眠媔婂蝒櫋矊矏
ㄇㄧˇ,米靡弭敉眯銤渳葞蔝濔灖
ㄇㄧˋ,密蜜秘祕覓泌汨謐宓冪塓幦鼏羃幎漞糸峚榓滵蔤蠠嘧
ㄇㄧˊ,迷彌謎瀰靡糜麋縻獼蘼冞麛醚醾檷蘪攠瓕爢麊鸍
ㄇㄧㄠ,喵
ㄇㄧㄠˇ,秒渺藐邈緲杳眇淼杪篎
ㄇㄧㄠˋ,妙廟繆玅
ㄇㄧㄠˊ,苗描瞄鱙
ㄇㄧㄣˇ,敏憫閔閩抿泯皿湣愍黽澠笢敃刡僶簢敯潣
ㄇㄧㄣˊ,民岷玟緡痻苠忞旻鈱旼錉罠閺怋崏暋
ㄖ,ㄖ
ㄖㄡˇ,糅鍕粈煣
ㄖㄡˋ,肉
ㄖㄡˊ,柔揉韖蹂輮楺禸葇鍒鞣騥鶔媃蝚鰇
ㄖㄥ,扔
ㄖㄥˇ,扔
ㄖㄥˊ,仍礽陾
ㄖㄢˇ,染冉髯苒珃橪呥姌嫨
ㄖㄢˊ,然燃髯蛅蚺袡
ㄖˋ,日衵馹鈤
ㄖㄤˇ,嚷壤攘爙
ㄖㄤˋ,讓懹
ㄖㄤˊ,攘禳穰勷瀼瓤儴獽蘘躟鬤蠰
ㄖㄨㄥˇ,冗茸氄傇軵
ㄖㄨㄥˊ,容榮融溶絨熔戎蓉鎔茸榕羢嶸瑢肜毧狨瀜茙烿蠑爃媶榵褣駥髶鰫鷛
ㄖㄨㄢˇ,軟阮蠕耎蝡瓀緛礝朊
ㄖㄨㄢˊ,堧壖撋
ㄖㄨˇ,乳汝辱擩女侞
ㄖㄨˋ,入辱褥孺茹洳縟蓐溽鄏媷嗕
ㄖㄨˊ,如儒孺茹蠕嚅濡袽襦鴽筎臑醹挐薷銣曘燸帤蕠
ㄖㄨㄛˋ,若弱箬偌爇鄀篛蒻楉鶸
ㄖㄨㄟˇ,蕊橤繠惢桵
ㄖㄨㄟˋ,瑞銳芮睿蚋叡枘汭
ㄖㄨㄟˊ,蕤緌婑
ㄖㄨㄣ,犉
ㄖㄨㄣˋ,潤閏橍
ㄖㄜˇ,惹喏若
ㄖㄜˋ,熱渃
ㄖㄠˇ,擾
ㄖㄠˋ,繞遶隢
ㄖㄠˊ,饒蕘嬈橈蟯襓
ㄖㄣˇ,忍稔荏腍棯栠荵
ㄖㄣˋ,任認刃飪賃軔衽紉妊恁仞訒韌牣鵀屻肕軠
ㄖㄣˊ,人任仁壬紝儿芢銋
ㄏ,ㄏ
ㄏㄡ,齁
ㄏㄡˇ,吼
ㄏㄡˋ,後候厚后逅鱟垕堠郈鄇缿洉
ㄏㄡˊ,猴侯喉篌鍭餱瘊銗翭鯸葔
ㄏㄥ,亨哼脝諻
ㄏㄥˋ,橫啈澋絎
ㄏㄥˊ,橫恆衡恒珩蘅桁姮鑅楻誙諻揘佷
ㄏㄢ,酣鼾蚶憨頇魽唅甝谽嫨
ㄏㄢˇ,喊罕厂蔊豃嚂
ㄏㄢˋ,和漢汗旱焊憾翰撼悍頷扞瀚閈捍暵熯晥犴睅菡豻銲釬駻哻涆淊馯蜭頜螒顄雗攌譀鋎鶾
ㄏㄢˊ,寒含函涵韓邯汗邗榦琀梒鋡焓
ㄏㄚ,哈
ㄏㄚˇ,哈
ㄏㄚˊ,蛤
ㄏㄞ,咳嗨咍
ㄏㄞˇ,海醢烸
ㄏㄞˋ,害亥駭嗨氦嗐絯餀
ㄏㄞˊ,還孩骸頦
ㄏㄤ,夯
ㄏㄤˇ,酐
ㄏㄤˋ,行沆
ㄏㄤˊ,行航杭吭頏桁迒苀肮蚢斻貥雽魧
ㄏㄨ,忽呼乎惚滹戲猢欻膴虖吰虍幠寣昒歑烼垀曶啒峘淴謼匢淲
ㄏㄨㄥ,轟哄烘薨訇吽揈渹哅輷谾鍧焢魟
ㄏㄨㄥˇ,哄嗊
ㄏㄨㄥˋ,鬨汞澒蕻鍙
ㄏㄨㄥˊ,紅洪宏鴻虹弘泓訌鋐閎黌竑紘翃浤鞃灴葒耾仜汯竤鈜霟妅玒谹渱舼触谼篊彋瓨苰
ㄏㄨㄢ,歡驩讙獾犿懽酄鴅
ㄏㄨㄢˇ,緩皖澣睆輐
ㄏㄨㄢˋ,換喚宦患幻煥奐渙瘓豢梡逭擐漶垸轘瑍觨嚾瞣
ㄏㄨㄢˊ,還環桓圜繯鬟鍰鐶寰闤梡洹瓛貆澴荁萑肒捖羦懁豲嬛狟雈
ㄏㄨˇ,虎琥滸唬許汻
ㄏㄨˋ,護戶互滬扈瓠怙祜笏冱戽楛沍岵鄠臛頀枑槴昈嫭婟嫮熩豰綔謢蔰
ㄏㄨˊ,胡湖壺蝴糊狐弧葫鬍瑚餬斛鵠囫縠衚觳醐猢搰鶘槲媩抇鰗焀魱螜瀫楜嘝鶦
ㄏㄨㄚ,花華嘩鷨錵
ㄏㄨㄚˋ,話化畫劃樺華嫿摦崋嬅杹觟槬繣澅
ㄏㄨㄚˊ,華滑划猾譁嘩樺驊鏵豁劃崋釫螖
ㄏㄨㄞˋ,壞坏諙孬咶蘹蘾
ㄏㄨㄞˊ,懷淮徊槐踝佪怀褢褱櫰瀤
ㄏㄨㄤ,荒慌肓衁巟嚝
ㄏㄨㄤˇ,謊恍晃幌洸怳榥熀鎤滉皝
ㄏㄨㄤˋ,晃軦
ㄏㄨㄤˊ,黃徨惶簧璜磺蝗煌皇凰湟遑隍潢篁喤艎鍠熿韹鰉堭蟥偟穔鷬媓騜崲葟餭撗獚趪
ㄏㄨㄛ,豁
ㄏㄨㄛˇ,火伙夥鈥
ㄏㄨㄛˋ,或穫獲和惑禍霍貨豁壑蠖嚄藿鑊矱檴濩砉雘硅擭湱騞謋捇沎眓掝嗀嗀瓁臒攉瀖曤矐韄靃
ㄏㄨㄛˊ,活佸鈥萿
ㄏㄨㄛ˙,和
ㄏㄨㄟ,灰揮輝恢詼暉麾徽墮褌撝隳煇翬豗褘洃隓顪鰴拻噅禈
ㄏㄨㄟˇ,會悔誨毀燬賄虺虫烠毇檓譭
ㄏㄨㄟˋ,會惠匯繪慧彙穢誨賄晦彗諱潰卉蕙濊燴喙恚薈翽闠嘒槥篲繢繐蟪璯嬇憓潓瞺譓譿鏸橞廆詴圚蔧獩餯鐬饖芔禬襘
ㄏㄨㄟˊ,回迴蛔茴蚘洄痐恛藱
ㄏㄨㄣ,婚昏葷閽惛睯殙棔涽敯睧
ㄏㄨㄣˇ,混睔
ㄏㄨㄣˋ,混渾溷諢圂慁輥倱梡
ㄏㄨㄣˊ,魂渾餛混琿楎餫棞顐鼲繉轋
ㄏㄜ,喝呵訶峆
ㄏㄜˋ,賀和鶴喝荷嚇赫郝暍嗃熇猲翯佫煂
ㄏㄜˊ,何合和河荷核盒禾褐劾闔閤曷龢涸盍覈蓋貉閡紇滆翮蝎嗑齕郃餲鶡鉌魺鞨菏姀毼熆蒚篕螛礉盉廅楁澕趷
ㄏㄠ,蒿嚆薅
ㄏㄠˇ,好郝
ㄏㄠˋ,號耗浩皓鎬涸昊好灝澔皜顥鄗秏淏滈皞哠悎鰝昦薃
ㄏㄠˊ,號毫豪壕濠蠔貉嚎鶴蚵嗥籇諕勂譹
ㄏㄟ,黑嘿潶
ㄏㄟˇ,黑
ㄏㄣˇ,很狠
ㄏㄣˋ,恨
ㄏㄣˊ,痕拫鞎
ㄎ,ㄎ
ㄎㄡ,摳彄芤袧鏂
ㄎㄡˇ,口
ㄎㄡˋ,扣寇叩蔻釦鷇筘佝怐滱瞉簆
ㄎㄥ,坑硜鏗牼吭阬硻銵娙挳鍞
ㄎㄥˇ,挳
ㄎㄢ,刊堪勘戡看龕嵁
ㄎㄢˇ,砍侃坎崁莰檻欿轗歁歞埳凵顑
ㄎㄢˋ,看瞰勘闞矙磡衎墈鬫竷
ㄎㄚ,咖喀哈鉲
ㄎㄚˇ,卡咳佧
ㄎㄚˋ,喀髂
ㄎㄞ,開揩痎侅
ㄎㄞˇ,凱慨楷愷剴豈鎧塏闓鍇颽暟輆
ㄎㄞˋ,慨愾愒咳欬烗勓壒
ㄎㄤ,康慷糠鏮漮嫝
ㄎㄤˇ,慷
ㄎㄤˋ,亢抗炕伉匟囥犺閌邟鈧
ㄎㄤˊ,扛
ㄎㄨ,哭枯窟骷跍挎桍刳顝胐橭
ㄎㄨㄥ,空崆倥箜悾硿涳錓
ㄎㄨㄥˇ,恐孔倥
ㄎㄨㄥˋ,空控鞚
ㄎㄨㄢ,寬髖臗
ㄎㄨㄢˇ,款窾梡
ㄎㄨˇ,苦楛
ㄎㄨˋ,庫褲酷嚳矻瘔趶
ㄎㄨㄚ,誇夸姱荂晇侉舿
ㄎㄨㄚˇ,垮侉銙
ㄎㄨㄚˋ,跨胯骻
ㄎㄨㄞ,咼喎
ㄎㄨㄞˇ,蒯
ㄎㄨㄞˋ,快塊會筷檜劊鄶澮膾噲獪儈鱠駃鬠欳
ㄎㄨㄤ,匡框筐誆劻恇洭
ㄎㄨㄤˇ,俇
ㄎㄨㄤˋ,況礦曠框眶鄺貺壙纊絖懭爌彉
ㄎㄨㄤˊ,狂誑鵟
ㄎㄨㄛˇ,擃
ㄎㄨㄛˋ,括擴闊廓鞹漷蛞姡霩籗
ㄎㄨㄟ,虧窺盔闚刲悝鞹鍷茥藈噅巋蘬
ㄎㄨㄟˇ,傀跬頍煃蹞峞
ㄎㄨㄟˋ,愧潰匱饋餽喟簣媿聵憒簀蕢瞶槶樻鐀嘳撌騩硊蔮
ㄎㄨㄟˊ,魁睽奎揆葵逵戣夔騤暌鄈頯聧楏櫆湀馗楑犪躨
ㄎㄨㄣ,昆崑坤琨錕焜褌晜鯤菎騉髡惃猑
ㄎㄨㄣˇ,捆綑悃梱閫壼稛硱裍齫
ㄎㄨㄣˋ,困睏涃
ㄎㄜ,科柯刻棵顆苛瞌磕蚵蝌軻稞窠珂砢簻薖峇鈳樖犐嵙
ㄎㄜˇ,可渴哿坷岢堁敤嶱閜
ㄎㄜˋ,客課刻克剋喀溘恪嗑可榼緙髁氪騍搕厒勀
ㄎㄜˊ,咳殼
ㄎㄠ,尻
ㄎㄠˇ,考烤拷栲攷薧洘
ㄎㄠˋ,靠銬犒
ㄎㄣˇ,肯啃墾懇齦齗豤錹
ㄎㄣˋ,掯硍裉
ㄍ,ㄍ
ㄍㄡ,句溝勾鉤枸泃篝緱构芶耩
ㄍㄡˇ,狗茍岣枸苟笱耇茩蚼
ㄍㄡˋ,夠購垢構媾彀搆詬遘覯冓姤雊傋瞉簼韝唦
ㄍㄥ,更耕庚粳羹賡浭緪鶊菮揯
ㄍㄥˇ,梗耿哽綆鯁埂骾郠挭
ㄍㄥˋ,更亙堩
ㄍㄢ,乾甘干竿肝尷柑坩泔咁疳玕杆矸虷筸蜬鳱嵅
ㄍㄢˇ,敢感趕桿橄稈澉皯盰赶
ㄍㄢˋ,幹贛凎淦紺旰骭詌榦灨涻簳嵅
ㄍㄚ,嘎旮
ㄍㄚˋ,尬
ㄍㄚˊ,軋噶釓
ㄍㄚ˙,價
ㄍㄞ,該垓陔賅荄侅峐胲祴絯豥賌隑
ㄍㄞˇ,改
ㄍㄞˋ,概蓋丐鈣溉戤摡瓂
ㄍㄤ,剛鋼缸崗綱岡肛扛杠罡疘舡釭堽碙棡笐堈犅
ㄍㄤˇ,港崗
ㄍㄤˋ,槓
ㄍㄨ,姑孤辜咕沽估菇菰呱蛄痼箍鴣觚酤泒罛箛鈷鮕夃柧鈲軱家嫴橭
ㄍㄨㄥ,工公功供攻宮恭躬弓蚣紅龔肱觥疘釭篢塨愩匑共幊
ㄍㄨㄥˇ,鞏拱汞共珙礦栱廾拲蛬穬
ㄍㄨㄥˋ,共供貢羾摃
ㄍㄨㄢ,官關觀冠棺矜鰥綸倌莞瘝毌鱞
ㄍㄨㄢˇ,管館莞琯筦脘痯錧
ㄍㄨㄢˋ,慣貫灌罐摜盥鸛冠觀丱爟瓘祼矔鑵涫悺悹雚鱹
ㄍㄨˇ,股古鼓骨谷穀賈凸蠱汩牯滑罟嘏詁轂鵠瞽臌盬羖蛌扢鈷杚淈狜唃尳榖蓇濲瀔愲縎薣
ㄍㄨˋ,故固顧雇僱錮告估痼梏榾牿堌崮凅棝稒
ㄍㄨˊ,骨鶻
ㄍㄨㄚ,瓜括刮蝸颳呱聒鴰栝适騧胍腡筈葀劀瘑緺懖趏膼
ㄍㄨㄚˇ,寡剮
ㄍㄨㄚˋ,掛卦褂罫罣絓詿挂髺
ㄍㄨㄞ,乖
ㄍㄨㄞˇ,拐柺枴
ㄍㄨㄞˋ,怪旝夬廥癐
ㄍㄨㄤ,光胱洸桄珖炚茪銧垙烡
ㄍㄨㄤˇ,廣獷
ㄍㄨㄤˋ,逛桄臩臦矌
ㄍㄨㄛ,郭鍋蟈堝嘓崞埻墎濄
ㄍㄨㄛˇ,果裹槨蜾輠粿猓淉惈鐹錁
ㄍㄨㄛˋ,過
ㄍㄨㄛˊ,國幗虢馘摑聝膕漍慖簂
ㄍㄨㄟ,歸規龜瑰閨圭珪皈傀媯槻鮭槼邽窐溈嫢摫
ㄍㄨㄟˇ,鬼軌詭癸匭晷宄簋佹垝氿姽蟡庪祪蛫觤厬
ㄍㄨㄟˋ,貴桂櫃跪劌溎鱖昋炔筀柜嶡襘暩
ㄍㄨㄣˇ,滾袞鯀緄輥掍蔉
ㄍㄨㄣˋ,棍璭
ㄍㄜ,哥歌割鴿擱胳戈肐疙渮牁菏滒麧
ㄍㄜˇ,葛哿舸擖魺騔笴
ㄍㄜˋ,個各鉻虼箇
ㄍㄜˊ,格革隔閣葛骼蛤咯膈轕嗝搿郃韐塥觡鬲閤挌佮輵鮯敆茖愅獦鎘鞷齃
ㄍㄜ˙,個
ㄍㄠ,高糕膏篙羔皋櫜睪鼛槔睾滜韟
ㄍㄠˇ,稿攪搞槁縞杲暠檺筶
ㄍㄠˋ,告誥郜鋯祰煰
ㄍㄟˇ,給
ㄍㄣ,跟根
ㄍㄣˇ,艮
ㄍㄣˋ,亙艮茛
ㄍㄣˊ,哏
ㄑ,ㄑ
ㄑㄩ,區屈驅趨軀嶇曲蛆瞿袪敺蛐佉砠胠岨祛呿凵抾阹镼魼鶌鱋紶髷
ㄑㄩㄝ,缺闕蒛
ㄑㄩㄝˋ,卻確鵲雀怯闕榷搉恪殼闋愨埆确碏碻礐硞皵毃礭
ㄑㄩㄝˊ,瘸
ㄑㄩㄥ,芎穹銎
ㄑㄩㄥˊ,窮瓊芎穹跫蛩惸邛璚藭瞏煢筇輁藑桏赹笻橩蒆
ㄑㄩㄢ,圈悛棬弮絟惓
ㄑㄩㄢˇ,犬綣甽畎琄虇汱圈
ㄑㄩㄢˋ,勸券牶烇絭
ㄑㄩㄢˊ,全權泉詮拳銓痊顴蜷筌卷荃鬈牷輇佺犬踡醛恮婘犈觠駩巏齤蠸姾瑔跧縓灥
ㄑㄩˇ,取曲娶齲浀紶
ㄑㄩˋ,去趣娶漆覷闃湨麮刞鼁
ㄑㄩˊ,渠劬麴衢蟝瞿籧璩氍蘧磲蕖朐軥鴝翑葋豦懅螶鼩匷灈欋臞蠷躣胊斪淭菃翵
ㄑㄩㄣ,逡踆峮
ㄑㄩㄣˊ,群裙宭
ㄑㄧ,七妻欺戚漆棲悽淒柒萋慼溪沏諆郪娸鸂嘁顣悊榿磎倛咠栖谿凄唭徛桼僛緀磩霋魌鶈攲
ㄑㄧㄝ,切沏
ㄑㄧㄝˇ,且
ㄑㄧㄝˋ,切竊妾怯愜挈篋鍥契朅踥鯜蛪緀藒洯
ㄑㄧㄝˊ,茄伽癿
ㄑㄧㄡ,秋邱丘蚯鞦鰍鶖楸坵萩偢緧媝蓲趥龜恘蝵蟗蠤
ㄑㄧㄡˇ,糗
ㄑㄧㄡˊ,求球囚仇酋裘遒毬泅鰽逑俅厹璆絿艽虯蝤觩賕盚銶頄鼽訄犰朹梂釚煪苬紌脙莍崷僋蛷鮂鯄殏
ㄑㄧㄥ,清青輕傾卿氫蜻頃鯖圊氰狅郬
ㄑㄧㄥˇ,請頃廎
ㄑㄧㄥˋ,慶罄親凊綮謦磬漀汫鑋靘掅碃罊
ㄑㄧㄥˊ,情晴擎傾檠勍殑樈殌
ㄑㄧㄢ,千鉛遷簽牽謙籤嵌仟阡韆騫愆僉慳搴褰粁岍汧縴芊掔扦檶鐱婜羥攐攓譣顩奷忏顅麉櫏
ㄑㄧㄢˇ,遣淺譴繾槏撖忏蜸
ㄑㄧㄢˋ,欠歉倩慊茜塹芡傔嗛槧縴篟綪棈蒨輤
ㄑㄧㄢˊ,前錢乾潛黔鉗虔箝鈐掮媊揵燂拑鬵灊黚忴扲岒漧葥鳹騚鰬仱姏蚙軡榩
ㄑㄧˇ,起啟豈乞綺杞稽綮屺棨敧芑婍邔芞呇
ㄑㄧˋ,企氣器汽棄契砌泣迄訖汔憩緝亟葺磧栔愒妻蟿鏚盵蚑忔湆气諿湇甈鼜
ㄑㄧˊ,其期齊奇旗騎祈棋祺碁祁崎琦岐歧琪麒鰭畦臍祇耆淇跂枝綦騏衹蘄圻錡旂萁蜞埼墘蠐頎懠艩蚔軝藄鄿鯕鬐蚑錤掑岓碕翗釮亓蚚稘鬿踑鮨鶀鵸玂麡濝
ㄑㄧㄚ,掐
ㄑㄧㄚˇ,卡酠
ㄑㄧㄚˋ,恰洽帢愘殎
ㄑㄧㄤ,槍腔鎗羌嗆搶鏘鏹蜣蹌斨瑲椌蹡錆矼嶈將牄謒
ㄑㄧㄤˇ,強搶襁磢傸墏繈
ㄑㄧㄤˋ,嗆羻唴熗蹌
ㄑㄧㄤˊ,強牆薔戕墻嬙檣爿漒蘠廧彊
ㄑㄧㄠ,敲鍬橇撬蹺磽蹻墝幧繑髜鐰鏒塙鄡墽骹庨郻頝
ㄑㄧㄠˇ,巧悄愀鵲雀燋頝
ㄑㄧㄠˋ,翹竅俏峭鞘誚撬蹺殼帩撽躈
ㄑㄧㄠˊ,橋瞧僑喬樵翹憔蕎礄譙簥趫燆劁嘺嫶趬敿
ㄑㄧㄣ,親侵欽衾駸嶔綅瀙鋟
ㄑㄧㄣˇ,寢昑寑曋螼坅顉
ㄑㄧㄣˋ,沁撳唚菣
ㄑㄧㄣˊ,勤琴秦禽擒芹檎懃噙芩螓鈙嫀斳耹靲澿庈肣蚙軡雂
ㄕ,失施師詩濕溼獅屍ㄕ蝨噓虱尸迉蓍葹鳲邿湤絁鰤溮鶳箷褷襹螄
ㄕㄡ,收荍
ㄕㄡˇ,手首守掱艏
ㄕㄡˋ,受售壽獸授瘦狩綬
ㄕㄡˊ,熟
ㄕㄥ,生聲勝升牲昇甥笙陞泩鉎鼪呏狌湦焺鵿
ㄕㄥˇ,省眚冼箵偗
ㄕㄥˋ,勝盛聖剩嵊乘賸圣貹
ㄕㄥˊ,繩澠憴譝鱦溗
ㄕㄢ,山扇衫杉刪珊羶舢煽潸跚姍芟苫搧縿穇挻烻狦笘剼
ㄕㄢˇ,閃陝睒晱覢
ㄕㄢˋ,善扇汕擅膳繕鄯煽訕單贍疝鱔騸禪墠嬗掞摲謆墡釤蟺赸儃
ㄕˇ,使始史駛矢屎豕
ㄕˋ,市是事世士勢識室示試視式氏適釋飾侍誓逝嗜恃仕柿使螫弒噬拭豉媞筮舐軾諡貰奭戺澨諟襫鈰揓鉽唑翨銴謚遾簭鯷齛跩烒崼徥詍戠褆衋
ㄕˊ,十什石時實食拾蝕碩射提蒔湜鰣塒祏鼫鉐榯湁溡鼭寔
ㄕ˙,匙
ㄕㄚ,殺沙紗砂莎煞鯊裟杉痧鎩魦樧猀帴摋蔱硰
ㄕㄚˇ,傻繌
ㄕㄚˋ,煞霎廈嗄歃箑翣萐喢
ㄕㄚˊ,啥
ㄕㄞ,篩
ㄕㄞˇ,骰繺
ㄕㄞˋ,曬晒閷殺
ㄕㄤ,商傷殤觴湯漡蔏螪謪鬺
ㄕㄤˇ,賞晌上
ㄕㄤˋ,上尚爙姠仩
ㄕㄤ˙,裳
ㄕㄨ,書輸殊舒梳疏蔬樞紓抒攄姝樗摴殳杸陎綀橾祋軗鵨藲
ㄕㄨㄢ,栓閂拴
ㄕㄨㄢˋ,涮
ㄕㄨˇ,數鼠屬暑署薯蜀黍癙潻藷钃婌襩糬韣
ㄕㄨˋ,術數樹束述署豎疏恕庶曙墅漱倏戍澍翛沭裋鉥尌儵鏣鶐
ㄕㄨˊ,叔熟淑塾贖孰菽秫襡埱焂跾鸀虪
ㄕㄨㄚ,刷唰鮛
ㄕㄨㄚˇ,耍
ㄕㄨㄞ,摔衰縗孈
ㄕㄨㄞˇ,甩
ㄕㄨㄞˋ,率帥蟀咰繂
ㄕㄨㄤ,雙霜孀艭驦鷞孇礵
ㄕㄨㄤˇ,爽塽樉漺慡縔
ㄕㄨㄤˋ,灀
ㄕㄨㄛ,說
ㄕㄨㄛˋ,朔碩爍數鑠嗍率蟀帥搠妁槊箾蒴勺欶揱獡鎙
ㄕㄨㄟˇ,水
ㄕㄨㄟˋ,說睡稅蛻帨涗裞
ㄕㄨㄟˊ,誰脽
ㄕㄨㄣˇ,盾楯吮揗賰
ㄕㄨㄣˋ,順舜瞬蕣鬊瞚
ㄕㄜ,奢賒奓檨譇
ㄕㄜˇ,捨舍
ㄕㄜˋ,社設射涉舍攝赦歙麝厙猞灄蔎韘騇拾葉捑蠂
ㄕㄜˊ,蛇舌甚佘什揲鉈
ㄕㄠ,燒稍梢艄捎弰蛸莦筲旓髾輎鮹蕱
ㄕㄠˇ,少
ㄕㄠˋ,少紹哨邵召卲劭袑睄潲
ㄕㄠˊ,杓韶芍勺玿圴牊
ㄕㄟˊ,誰
ㄕㄣ,身深伸申紳呻信參蔘娠莘甡侁籸葠詵駪燊砷柛氠屾珅胂阠妽峷眒
ㄕㄣˇ,沈審嬸瀋諗讅矧哂寀瞫邥覾
ㄕㄣˋ,慎腎滲甚蜃沁葚椹脤抻侺鋠
ㄕㄣˊ,神甚
ㄘ,疵庛雌ㄘ差趀骴
ㄘㄡˋ,湊輳腠楱
ㄘㄥ,噌
ㄘㄥˋ,蹭
ㄘㄥˊ,曾層嶒鄫碀
ㄘㄢ,參餐驂
ㄘㄢˇ,慘憯朁噆黲
ㄘㄢˋ,燦孱璨粲澯
ㄘㄢˊ,殘蠶慚嬠
ㄘˇ,此佌泚玼跐皉
ㄘˋ,次刺賜廁伺佽蛓莿朿栨蚝絘
ㄘˊ,詞辭慈磁瓷雌祠疵茨粢餈柌嬨濨呲飺薋
ㄘㄚ,擦搽嚓
ㄘㄚˇ,礤
ㄘㄚˋ,囃
ㄘㄞ,猜
ㄘㄞˇ,採彩采睬踩綵跴寀棌婇
ㄘㄞˋ,蔡菜埰采縩
ㄘㄞˊ,才財材裁纔
ㄘㄤ,蒼倉滄艙傖鶬凔嵢
ㄘㄤˊ,藏鑶
ㄘㄨ,粗麤觕
ㄘㄨㄥ,匆聰從囪璁瑽樅驄蓯鏦熜棇暰蔥瞛蟌鍐
ㄘㄨㄥˋ,欉藂謥
ㄘㄨㄥˊ,從叢淙琮悰潀漎賨錝婃孮徖慒
ㄘㄨㄢ,攛躥鋑
ㄘㄨㄢˋ,竄篡爨篹
ㄘㄨㄢˊ,攢巑劗
ㄘㄨˋ,促醋簇蹴蔟蹙猝卒錯趣趨鏃瘯踧槭梀噈殧鼀
ㄘㄨˊ,殂徂
ㄘㄨㄛ,搓撮磋蹉蒫遳髊
ㄘㄨㄛˇ,瑳脞縒硰
ㄘㄨㄛˋ,錯措挫銼撮剉厝莝侳剒齰蓌
ㄘㄨㄛˊ,瘥矬鹺痤醝嵯蔖
ㄘㄨㄟ,摧催崔嗺墔磪鏙榱衰
ㄘㄨㄟˇ,璀趡漼
ㄘㄨㄟˋ,翠脆粹悴瘁萃啐淬倅毳橇焠竁膬綷膵脺濢
ㄘㄨㄟˊ,凗慛
ㄘㄨㄣ,村皴
ㄘㄨㄣˇ,忖刌
ㄘㄨㄣˋ,寸吋籿
ㄘㄨㄣˊ,存袸
ㄘㄜˋ,冊策測側廁惻筴畟茦粣拺矠憡蓛
ㄘㄠ,操糙鄵喿
ㄘㄠˇ,草懆騲艸
ㄘㄠˋ,糙操肏襙
ㄘㄠˊ,曹槽嘈漕螬艚嶆
ㄘㄣ,參嵾梫
ㄘㄣˊ,岑涔梣笒埁
ㄛ,喔ㄛ
ㄛˊ,哦
ㄨ,屋烏污汙圬誣嗚巫鎢鄔洿歍ㄨ惡於杇陓剭窏腛鴮螐
ㄨㄥ,翁嗡螉鶲霐
ㄨㄥˇ,蓊滃暡浻瞈聬塕
ㄨㄥˋ,甕瓮齆罋
ㄨㄢ,灣彎豌剜莞蜿刓潫
ㄨㄢˇ,晚碗挽宛婉娩皖輓莞浣蜿畹菀琬鞔綰晼綩鯇倇脕睕鋄睌葂
ㄨㄢˋ,萬玩腕惋卍翫忨仴綄万蟃捥踠
ㄨㄢˊ,完玩頑丸汍紈芄烷婠岏抏
ㄨˇ,五午武舞侮伍鵡憮嫵潕廡仵忤碔甒摀啎捂嵨玝倵橆躌
ㄨˋ,勿物務惡誤悟晤霧戊鎢塢兀兀騖寤軏杌婺鶩堊沕迕遻鋈屼扤煟卼焐靰阢粅矹芴埡逜痦齀蘁岉噁蓩
ㄨˊ,無吳吾梧巫蕪唔蜈誣毋亡牾膴麌鼯郚鋘鋙峿浯珸俉鯃莁鷡洖瞴譕
ㄨㄚ,哇蛙挖窪呱媧洼穵溛窊窐漥
ㄨㄚˇ,瓦佤
ㄨㄚˋ,襪嗢膃
ㄨㄚˊ,娃
ㄨㄞ,歪
ㄨㄞˇ,舀
ㄨㄞˋ,外
ㄨㄤ,汪尪尢
ㄨㄤˇ,往網枉罔惘魍輞瀇网暀菵臦
ㄨㄤˋ,忘妄望旺王朢迋莣
ㄨㄤˊ,王亡
ㄨㄛ,窩倭渦萵猧踒
ㄨㄛˇ,我婐捰
ㄨㄛˋ,握臥沃渥斡齷幄涴偓濣焥
ㄨㄟ,威崴偎煨葳隈萎委逶烓椳渨碨愄揋葨隇溾詴蝛覣燰
ㄨㄟˇ,委尾偉緯萎諉葦痿猥煒亹隗娓韙寪洧瑋薳蘤韡鮪磈蒍頠暐痏骫椲浘艉芛鍡峗壝喡徫腲蜲儰蓶崣硊踓斖
ㄨㄟˋ,為位未魏衛味偽謂胃喂慰餵尉渭畏蔚蘶蝟犩遺亹霨磑罻褽薉媦蜼藯鏏菋犚餧贀讆躗穌鮇徻
ㄨㄟˊ,為圍微危唯維惟違韋薇巍桅闈濰帷嵬幃囗湋溦鄬鍏鮠潿洈覹醀霺瀢濻癓欈
ㄨㄣ,溫瘟轀塭馧瞃豱殟
ㄨㄣˇ,穩吻刎呡桽
ㄨㄣˋ,問聞紊文汶抆免搵璺妏
ㄨㄣˊ,文聞紋蚊玟雯閿炆芠琝閺闅鼤駇魰鳼
ㄜ,阿婀痾ㄜ屙峉錒
ㄜˇ,噁
ㄜˋ,惡餓俄鄂厄遏鍔扼鱷顎呃愕噩軛阨鶚堊諤萼咢啞崿搤詻閼頞堨齶枙堮岋鑩櫮砐砨蚅豟軶圔搹蝁嶭餩蘁
ㄜˊ,額訛鵝娥哦蛾峨莪俄囮吪硪蚵鋨迗珴涐皒睋魤
ㄠ,凹ㄠ坳柪
ㄠˇ,襖媼芺镺
ㄠˋ,傲澳奧懊墺奡扷擙拗詏嶴
ㄠˊ,熬敖遨翱嗷螯鰲鼇鏖驁廒獒璈聱鏊滶磝隞摮蔜簢謷爊
ㄩ,淤迂瘀紆ㄩ毹箊扜穻盓
ㄩㄝ,約曰噦箹焥
ㄩㄝˋ,月越樂悅閱粵躍岳嶽耀鑰曜藥鉞說刖瀹籥樾爚礿禴趯軏鸑龠狘玥戉泧鈅抈蚎蘥鸙
ㄩㄥ,傭庸雍擁壅癰臃墉鏞慵饔邕廱雝嗈灉鄘噰澭蕹滽郺
ㄩㄥˇ,永泳詠勇擁踴湧蛹甬壅恿臃俑踊埇塎禜涌悀銢
ㄩㄥˋ,用佣醟
ㄩㄥˊ,傭喁顒傛槦嫆嵱嫞
ㄩㄢ,冤淵鴛鳶宛眢蜎鵷肙鋺惌棩蒬裷鼘葾蜵裫駌嬽灁
ㄩㄢˇ,遠妴
ㄩㄢˋ,院願怨苑遠媛瑗愿掾褑夗謜禐噮
ㄩㄢˊ,原元員園圓緣源援媛袁猿垣沅轅爰圜黿嫄櫞芫湲騵笎羱蝯邧蝝妧萲螈蚖杬榞溒媴猭獂榬蒝鎱邍鶢
ㄩˇ,與語雨予羽嶼宇禹庾齬噢圄圉窳傴俁敔噳楀瑀与萭貐偊祤斞鄅寙篽蘌斔螤
ㄩˋ,育遇預玉欲域喻愈譽獄慾浴裕煜寓禦與鈺豫御鬱籲諭癒郁馭昱毓芋尉熨俞峪聿嫗彧飫鬻谷鷸燠蜮堉語瘉棫澦矞禺罭蕷遹閾隩鵒棜淢燏獝繘魊薁驈悆鴥鋊淯黦栯砡礜欥軉輍悇稢蒮噊鳿醧饇爩灪戫袬緎蓹錥
ㄩˊ,於愉魚娛餘于漁予愚余竽榆逾虞俞輿瑜渝隅臾腴盂諛踰舁圩歟覦畬萸嵎窬妤揄歈禺轝隃雩杅楰玗緰羭蝓褕瘐艅狳邘璵硢籅釪崳湡鄃腧睮雓澞蕍螸謣鮽鵌蘛鸆鸒衧唹堣堬雽歶旟鰅齵
ㄩㄣ,暈氳縕贇奫蝹
ㄩㄣˇ,允隕殞狁霣褞抎賱輑鈗阭
ㄩㄣˋ,運韻孕熨蘊慍醞惲暈韞鄆薀枟緷鶤員
ㄩㄣˊ,雲云勻昀耘芸紜熅筠溳澐畇篔沄熉鋆蕓妘伝縜荺鄖枃眃
ㄙ,司思斯絲私撕廝鷥嘶ㄙ澌緦偲罳颸禠虒楒鍶凘泀蕬鉰俬覗榹禗蜤磃謕蟴鷈鼶
ㄙㄡ,搜颼鄋蒐廋溲餿獀醙嗖鎪騪
ㄙㄡˇ,叟嗾藪擻瞍謏籔
ㄙㄡˋ,嗽
ㄙㄥ,僧鬙
ㄙㄢ,三參毿攕鬖
ㄙㄢˇ,散傘繖糝鏾
ㄙㄢˋ,散閐
ㄙˇ,死
ㄙˋ,四似賜嗣飼寺肆祀食俟伺泗巳耜儩姒笥駟兕涘柶汜肂貄蕼洍
ㄙ˙,思
ㄙㄚ,撒仨
ㄙㄚˇ,灑撒靸洒
ㄙㄚˋ,薩卅趿颯攃馺隡
ㄙㄞ,塞鰓腮毢揌
ㄙㄞˋ,賽塞僿
ㄙㄤ,喪桑
ㄙㄤˇ,嗓顙搡磉鎟褬
ㄙㄤˋ,喪
ㄙㄨ,蘇甦酥穌囌櫯
ㄙㄨㄥ,松鬆淞嵩忪菘娀崧濍倯硹蜙
ㄙㄨㄥˇ,聳慫悚竦傱愯嵷駷
ㄙㄨㄥˋ,送宋頌訟誦
ㄙㄨㄢ,酸痠狻
ㄙㄨㄢˇ,匴
ㄙㄨㄢˋ,算蒜筭
ㄙㄨˋ,訴速素肅宿塑夙粟溯餗愬蓿縮觫愫膆謖嗉橚泝涑潚簌蔌樕遫驌鱐鷫嫊玊榡洬栜傃溹憟鋉縤藗僳窣
ㄙㄨˊ,俗
ㄙㄨㄛ,縮梭莎唆娑簑嗦傞挲蓑桫蹜莏趖摍
ㄙㄨㄛˇ,所索鎖瑣璅嗩摵鎍鏼
ㄙㄨㄛˋ,逤
ㄙㄨㄟ,雖綏濉睢荽毸眭浽哸娞荾滖
ㄙㄨㄟˇ,髓嶲瀡巂靃
ㄙㄨㄟˋ,歲遂碎穗隧祟燧誶睟穟璲檖襚鐩邃埣賥檅繀禭旞繸鐆
ㄙㄨㄟˊ,隨隋雟
ㄙㄨㄣ,孫飧蓀猻搎槂薞蕵
ㄙㄨㄣˇ,損筍榫簨鎨
ㄙㄨㄣˋ,潠愻
ㄙㄜˋ,色塞瑟圾嗇澀穡濇轖譅銫璱翜犞飋濏
ㄙㄠ,艘騷繅搔臊慅溞颾鱢
ㄙㄠˇ,掃嫂埽
ㄙㄠˋ,掃臊氉瘙
ㄙㄣ,森槮罧襂幓篸
ㄟ,ㄟ
ㄣ,恩嗯ㄣ
ㄣˋ,摁
ㄆ,ㄆ
ㄆㄡ,剖吥
ㄆㄡˇ,剖瓿棓婄
ㄆㄡˊ,掊裒抔捊
ㄆㄥ,砰烹抨怦漰澎匉閛恲軯駍磞
ㄆㄥˇ,捧皏
ㄆㄥˋ,碰堋掽椪
ㄆㄥˊ,朋彭澎蓬膨硼棚鵬篷蟛芃淜鬅痭錋倗輣傰韸髼憉樥鑝
ㄆㄢ,潘攀眅
ㄆㄢˇ,坢
ㄆㄢˋ,判叛盼畔拚袢泮襻詊頄溿沜牉頖
ㄆㄢˊ,盤磐蟠般胖槃蹣磻踫鞶幋縏柈瀊蒰媻搫跘
ㄆㄚ,趴葩啪蚆舥
ㄆㄚˋ,怕帕帊袙
ㄆㄚˊ,爬扒琶耙杷跁
ㄆㄞ,拍啪
ㄆㄞˇ,矲俖
ㄆㄞˋ,派湃鎃蒎
ㄆㄞˊ,排牌徘俳簰棑
ㄆㄤ,乓磅滂
ㄆㄤˇ,嗙耪
ㄆㄤˋ,胖
ㄆㄤˊ,旁龐膀螃徬蒡厖尨雱逄庬篣舽
ㄆㄛ,波潑坡陂鏺癹翍
ㄆㄛˇ,頗剖叵笸
ㄆㄛˋ,破迫魄珀泊朴粕醱岶烞蒪
ㄆㄛˊ,婆鄱皤櫇
ㄆㄨ,撲仆鋪噗扑痡醭抪瞨
ㄆㄨˇ,普浦埔譜圃溥烳氆鐠潽誧
ㄆㄨˋ,暴鋪瀑曝舖
ㄆㄨˊ,僕樸葡蒲菩朴蹼脯濮璞匍莆蒱襆酺釙鏷轐纀墣
ㄆㄠ,拋脬
ㄆㄠˇ,跑
ㄆㄠˋ,泡砲炮皰奅麭髱
ㄆㄠˊ,袍咆刨匏庖麃炰齙鞄炮瓟
ㄆㄟ,胚呸坏醅柸岯垺衃
ㄆㄟˇ,琣昢
ㄆㄟˋ,配佩沛珮霈帔旆浿轡姵翇伂
ㄆㄟˊ,培賠陪裴邳碚毰陫荖
ㄆㄣ,噴歕
ㄆㄣˇ,呠翸翉
ㄆㄣˊ,盆湓葐
ㄆㄧ,批披匹劈霹砒被丕坯坏伾狉紕秠鈹鴄怌翍釽憵銔駓髬
ㄆㄧㄝ,瞥撇氕
ㄆㄧㄝˇ,撇
ㄆㄧㄥ,乒娉砯頩覮
ㄆㄧㄥˇ,絣
ㄆㄧㄥˊ,平瓶憑評屏蘋萍坪枰泙帡洴缾軿俜玶甹苹郱呯竮艵蛢馮荓蓱炾
ㄆㄧㄢ,篇偏扁翩萹媥貵頨鶣
ㄆㄧㄢˋ,片騙遍
ㄆㄧㄢˊ,便胼駢諞蹁楩骿
ㄆㄧˇ,否匹疋痞嚭苤仳庀圮崥諀
ㄆㄧˋ,譬闢僻媲屁辟癖甓擗澼濞淠揊潎鷿髲礔
ㄆㄧˊ,皮疲脾琵枇裨啤毗埤沘貔陂羆罷紕郫陴鼙鈹膍毘阰蚽蜱玭笓鈚錍魾螷犤毞猈藣蠯
ㄆㄧㄠ,飄漂慓螵薸僄旚翲魒
ㄆㄧㄠˇ,漂莩縹瞟殍皫摽醥犥鷅
ㄆㄧㄠˋ,票漂剽驃彯篻顠蔈
ㄆㄧㄠˊ,瓢嫖淲
ㄆㄧㄣ,拼姘礗涄
ㄆㄧㄣˇ,品
ㄆㄧㄣˋ,聘牝
ㄆㄧㄣˊ,貧瀕頻顰嬪嚬矉
ㄐ,ㄐ
ㄐㄩ,居拘駒沮疽蛆狙俱車据鋸裾苴趄罝菹娵椐腒崌痀琚雎涺葅鮈鶋斪揟蜛踙輋
ㄐㄩㄝ,噘嗟撅
ㄐㄩㄝˇ,蹶
ㄐㄩㄝˋ,倔
ㄐㄩㄝˊ,決覺絕爵掘嚼訣厥獗蹶蕨崛攫倔炔抉噱矍觖角孓玨劂橛爝譎屩觼玦腳臄蕝躩戄桷潏鴃貜趹鱖傕嵑瘚蠼鐍钁玃捔芵焆鈌蚗谻赽僪憰蟨彏鱊鷢堀殌穱
ㄐㄩㄥ,扃坰駉
ㄐㄩㄥˇ,窘迥煚泂炅絅褧冏熲囧皛炯幜顈
ㄐㄩㄢ,捐娟鵑涓鐫圈蠲朘身脧裐
ㄐㄩㄢˇ,捲卷埢菤臇
ㄐㄩㄢˋ,倦卷眷絹雋悁狷圈獧睊睠罥鄄帣錈腃韏鬳
ㄐㄩˇ,舉矩咀莒沮齟櫸筥踽蒟椇柜竘袓跙蝺
ㄐㄩˋ,據句具巨劇聚俱拒距鋸懼鉅炬詎遽倨瞿踞颶泃苣窶醵屨秬虡寠鐻佢据粔姖怚絇足耟岠埧蚷駏澽貗躆洰焣壉犋
ㄐㄩˊ,局鞠菊橘掬跼桔挶鞫侷匊踘鋦鵙鶪椈焗淗驧狊梮郹犑輂箤趜鵴蘜鼳陱駶
ㄐㄩㄣ,軍君均鈞皸囷麇莙鮶桾蚐袀頵龜碅
ㄐㄩㄣˇ,窘蜠
ㄐㄩㄣˋ,俊菌郡峻竣雋濬駿蕈浚珺畯焌捃餕箘寯晙呁鵘葰蔨
ㄐㄧ,機基積績蹟激跡姬雞饑肌稽飢奇畸碁箕磯譏羈几机乩屐躋璣幾嘰畿嵇犄齎其期居唧勣禨欚癘羇虀觭霙蛣銈枅丌尐簊虮鐖櫅稘毄樍諅齍鞿鑇鰿齏笄剞隮鸄癪
ㄐㄧㄝ,街接皆階揭偕嗟喈幯結湝薢袺啑椄菨蝔鶛
ㄐㄧㄝˇ,姐解姊檞媎
ㄐㄧㄝˋ,界借介戒藉屆疥芥誡解唶喈玠蚧犗褯吤岕价砎悈紒祴躤繲
ㄐㄧㄝˊ,節潔傑捷竭劫截結杰頡詰桀睫訐咭拮羯櫛桔孑癤絜偈擷倢劼婕楬碣鮚岊榤犵袺嵑栨騔滐鉣鐑衱迼崨嵥楶趌踕擳瀄鍻蠽昅揤緁巀緳
ㄐㄧㄝ˙,姊
ㄐㄧㄡ,糾揪啾鳩轇湫樛揫勼朻牞觓揂萛鬮
ㄐㄧㄡˇ,九久酒玖赳灸韭糾
ㄐㄧㄡˋ,就究救舊舅臼柩疚咎僦鷲廄捄慦鯦麔
ㄐㄧㄥ,經精京驚睛莖晶菁更兢涇鯨荊旌粳黥箐鶄巠婛旍鵛鶁鼱麠仱惊
ㄐㄧㄥˇ,景警井頸阱儆璟憬剄璥丼烴憼暻蟼燛
ㄐㄧㄥˋ,敬竟鏡靜境淨競逕徑靖勁凊脛痙獍倞靚竫婧桱俓凈葝擏弳
ㄐㄧㄢ,間監堅尖兼肩艱奸姦煎緘濺漸箋殲菅戔鞬牋椷縑湔熸蒹鶼廌犍籛豜韉鬋鈃鑯鰹鰜櫼熞蕑揃搛幵菺靬葌鳽餰礛騝鵳瀸虃惤猏麉
ㄐㄧㄢˇ,簡撿剪減檢揀繭儉鹼柬筧翦謇戩蹇譾趼堿囝鰔挸湕瞼寋藆襺暕瑐
ㄐㄧㄢˋ,見建健漸件間監鍵鑑箭劍艦鑒賤踐諫毽薦餞腱濺僭檻閒洊俴牮栫楗珔瀳澗瞷荐諓榗糋鰎蔪鋻螹襉糮鑳
ㄐㄧˇ,幾給己擠脊戟濟几麂庋蟣剞掎泲踦魕丮穖妀撠
ㄐㄧˋ,計記既紀際繼季寄技妓濟劑繫悸祭忌暨冀騎鯽稷躋薺驥霽薊髻罽覬伎洎瘈跽嚌塈惎漈穧芰蔇痵癠穄鮆鱭鯚鰶旡刉臮裚穊誋鬾瞡檕璾鵋齌懻瀱鱀蘮蘻
ㄐㄧˊ,及級極即集急擊疾籍吉寂輯脊圾唧嫉汲亟吃棘藉瘠楫岌笈鶺戢殛蹐伋蒺耤芨蕺踖鈒佶堲姞濈襋墼潗鴶嶯洁忣湒极銡狤鏶蝍衱偮庴莋塉槉漃膌蓻橶蕀轚霵彶揤楖秸鞊螏觙
ㄐㄧㄚ,家加嘉佳傢迦枷袈痂笳珈跏茄葭豭耞麚泇毠鎵鴐猳幏犌貑夾
ㄐㄧㄚˇ,假甲賈鉀岬胛斝榎瘕檟婽玾徦椵夏
ㄐㄧㄚˋ,價假架駕嫁賈稼价
ㄐㄧㄚˊ,夾挾頰蛺莢浹戛郟恝袷筴裌鋏梜跲舺唊鉿硈扴鞂鞈鵊
ㄐㄧㄤ,將江疆僵漿姜薑豇殭韁螿橿茳礓瓨翞
ㄐㄧㄤˇ,講獎蔣槳顜膙
ㄐㄧㄤˋ,降匠醬強將絳糨洚謽嵹彊弶袶
ㄐㄧㄠ,教交膠驕焦嬌郊跤澆蛟蕉礁椒茭姣鮫僬憍艽鷦燋詨鱎鐎鵁鷮嘄憿膲穚蟂鷍嶕蟭
ㄐㄧㄠˇ,腳角繳攪勦矯絞姣佼餃皎僥剿較鉸狡皦儌筊蟜摷撟捁灚曒漅劋譑煍
ㄐㄧㄠˋ,教叫校較覺轎窖皭醮徼噭嶠挍斠珓釂滘窌嘂潐譥
ㄐㄧㄠˊ,嚼
ㄐㄧㄣ,今金禁津斤巾筋襟矜浸觔衿祲瑧菳珒埐紟嶜惍
ㄐㄧㄣˇ,緊僅錦謹儘覲瑾饉槿墐殣堇慬菫巹
ㄐㄧㄣˋ,進近盡禁晉儘浸勁覲燼廑噤靳縉僅藎妗贐寖搢肵璡賮嬧榗僸蓳瘽嚍濜璶伒溍
ㄋ,ㄋ
ㄋㄡˋ,耨鎒嗕譨
ㄋㄡˊ,羺獳
ㄋㄥˋ,濘
ㄋㄥˊ,能薴儜
ㄋㄢ,囝囡
ㄋㄢˇ,赧戁蝻湳腩揇
ㄋㄢˋ,難婻
ㄋㄢˊ,南男難喃楠柟暔諵奻萳莮
ㄋㄚˇ,那哪
ㄋㄚˋ,那納吶訥鈉捺娜肭衲軜妠豽魶笝
ㄋㄚˊ,拿挐拏誽
ㄋㄞˇ,乃奶迺氖嬭奈氝釢艿尕
ㄋㄞˋ,耐奈褦鼐柰倷螚渿錼
ㄋㄞˊ,孻摨
ㄋㄞ˙,奶
ㄋㄤ,囔
ㄋㄤˇ,曩攮灢
ㄋㄤˋ,齉
ㄋㄤˊ,囊
ㄋㄤ˙,囔
ㄋㄨㄥˋ,弄
ㄋㄨㄥˊ,農濃膿儂噥穠襛醲齈鬞
ㄋㄨㄢˇ,暖餪煖渜
ㄋㄨˇ,努弩砮
ㄋㄨˋ,怒
ㄋㄨˊ,奴駑孥笯蒘
ㄋㄨㄛˇ,橠
ㄋㄨㄛˋ,諾懦糯搦挼逽懧糑
ㄋㄨㄛˊ,挪娜儺捼梛
ㄋㄜ,呢
ㄋㄠ,峱
ㄋㄠˇ,腦惱瑙
ㄋㄠˋ,鬧淖
ㄋㄠˊ,撓鐃橈呶猱怓譊髐嶩獶繷獿夒
ㄋㄩㄝˋ,虐瘧謔
ㄋㄩˇ,女籹釹
ㄋㄩˋ,忸恧衄朒
ㄋㄟˇ,餒哪腇
ㄋㄟˋ,內
ㄋㄣˋ,嫩
ㄋㄧㄝ,捏踗鑈
ㄋㄧㄝˋ,孽鎳躡聶鑷涅囁囓臬乜嚙臲闑隉齧敜顳糱蘗疌嵲踂篞櫱蠥钀巕
ㄋㄧㄝˊ,苶
ㄋㄧㄡ,妞
ㄋㄧㄡˇ,紐扭鈕忸狃炄莥
ㄋㄧㄡˋ,拗
ㄋㄧㄡˊ,牛
ㄋㄧㄥˇ,擰
ㄋㄧㄥˋ,濘佞
ㄋㄧㄥˊ,寧凝獰嚀檸甯擰鸋鑏寍聹嬣
ㄋㄧㄢˇ,捻撚攆拈輦碾輾涊簐跈躎鯰
ㄋㄧㄢˋ,念唸淰齞廿鼰
ㄋㄧㄢˊ,年黏粘姩哖
ㄋㄧˇ,你妳擬禰儗旎昵坭柅薿檷抳苨馜隬譺
ㄋㄧˋ,逆溺匿膩泥睨暱惄鷁鷊嫟縌迡堄
ㄋㄧˊ,泥尼妮倪霓怩猊蜺輗郳麑鯓鯢齯臡秜狋觬婗淣呢狔屔跜鈮鶂
ㄋㄧㄤˋ,釀
ㄋㄧㄤˊ,娘孃
ㄋㄧㄠˇ,鳥裊嬲嬝嫋蔦褭
ㄋㄧㄠˋ,尿
ㄋㄧㄣˇ,拰
ㄋㄧㄣˊ,您
ㄔ,吃蚩癡痴嗤喫ㄔ郗魑笞絺鴟媸摛瓻螭眵齝离貾誺瞝齹黐麶
ㄔㄡ,抽瘳搊篘犨婤
ㄔㄡˇ,丑醜瞅杻杽吜莥
ㄔㄡˋ,臭簉溴殠憱
ㄔㄡˊ,愁仇籌綢酬稠紬躊疇惆裯儔讎幬鯈薵嬦椆絒菗懤詶雔燽栦
ㄔㄥ,稱撐瞠蟶偁檉赬琤橕鏿浾埥棦牚竀崝饓
ㄔㄥˇ,逞騁悜庱塣
ㄔㄥˋ,稱秤偁牚
ㄔㄥˊ,成程承盛乘誠呈城懲澄橙丞澂棖酲宬晟裎郕埕掁湞珵荿騬脀脭揨峸鋮塍
ㄔㄢ,摻攙梴襜辿鋓惉嬓欃
ㄔㄢˇ,產鏟闡剷蕆嘽囅丳嵼燀諂驏幝繟滻簅灛旵譂
ㄔㄢˋ,懺羼儳
ㄔㄢˊ,纏蟬禪饞讒潺蟾巉嬋單澶廛孱劖毚瀍瀺躔鑱磛艬僝棎湹鋋煘獑繵嚵酁
ㄔˇ,尺齒恥呎侈褫欼搋蚇恀拸姼傂誃鉹伬鶒
ㄔˋ,赤翅斥飭叱熾啻傺敕眙抶饎栻遫彳跮踅鷘乿瘛鉓哧淔痸懘戠摰
ㄔˊ,持池遲馳匙弛墀坻踟箎茬蚳篪蚔茌痄忯汦荎栘歭耛貾趍箈徲謘徥
ㄔㄚ,差插叉喳艖嗏扠杈偛疀鎈
ㄔㄚˇ,蹅
ㄔㄚˋ,詫岔剎差汊衩蜡侘奼紁
ㄔㄚˊ,查察茶搽槎鍤碴臿垞秅
ㄔㄞ,拆釵差偨
ㄔㄞˋ,蠆袃囆
ㄔㄞˊ,柴豺儕祡喍
ㄔㄤ,昌倡猖娼閶菖鯧倀鼚錩淐琩裮
ㄔㄤˇ,場廠敞氅昶鋹
ㄔㄤˋ,唱倡暢悵鬯韔
ㄔㄤˊ,長常場嘗裳償腸嫦鱨徜嚐萇鋿粻
ㄔㄨ,出初齣貙
ㄔㄨㄥ,充衝沖舂忡憧珫茺浺蹖祌
ㄔㄨㄥˇ,寵
ㄔㄨㄥˋ,衝銃揰
ㄔㄨㄥˊ,重崇虫蟲种翀蝩隀茧痋
ㄔㄨㄢ,穿川鐉氚瑏
ㄔㄨㄢˇ,喘舛荈
ㄔㄨㄢˋ,串釧玔汌夼賗
ㄔㄨㄢˊ,傳船遄椽歂諯暷輲
ㄔㄨˇ,處楚儲礎杵褚楮濋檚
ㄔㄨˋ,處觸畜絀矗黜俶怵搐歜詘鄐斶亍豖泏琡踀滀儊臅敊
ㄔㄨˊ,除儲廚鋤櫥雛芻躇滁躕篨耡蜍鉏蒢跦鶵幮貙趎犓
ㄔㄨㄚ,欻
ㄔㄨㄞˇ,揣
ㄔㄨㄞˋ,踹嘬
ㄔㄨㄞˊ,膗
ㄔㄨㄤ,窗創瘡囪憃戧摐
ㄔㄨㄤˇ,闖搶漺
ㄔㄨㄤˋ,創闖愴刱獊
ㄔㄨㄤˊ,床幢撞橦
ㄔㄨㄛ,戳
ㄔㄨㄛˋ,綽輟齪婼啜惙歠醊婥畷逴娖吷珿磭腏趠擉嚽
ㄔㄨㄟ,吹炊
ㄔㄨㄟˋ,吹炊諈
ㄔㄨㄟˊ,垂鎚槌搥椎陲錘捶棰箠圌湷倕菙綞娷腄甀
ㄔㄨㄣ,春椿杶輴焞鰆媋暙鶞
ㄔㄨㄣˇ,蠢惷踳偆萶
ㄔㄨㄣˊ,純唇醇淳蓴鶉漘錞韕脣憌鯙
ㄔㄜ,車硨莗
ㄔㄜˇ,扯撦奲
ㄔㄜˋ,徹澈轍撤掣坼屮迠硩
ㄔㄠ,抄鈔超勦弨怊訬剿罺
ㄔㄠˇ,吵炒眧
ㄔㄠˋ,耖
ㄔㄠˊ,朝潮巢嘲晁樔轈鄛
ㄔㄣ,嗔琛瞋郴賝棽謓諃搷堔
ㄔㄣˇ,捵磣鍖裖墋踸贂
ㄔㄣˋ,趁稱襯櫬讖疢齔嚫藽儭
ㄔㄣˊ,陳沉晨臣塵辰娠忱沈宸諶煁茞蔯樄莐愖鈂螴麎鷐伔敶
ㄧ,一壹衣依醫伊揖噫漪猗咿ㄧ禕繄黟曀銥泆鷖欹郼圪溰稦燚洢陭蛜嫛瑿檹毉黳嶬
ㄧㄝ,耶噎蠮
ㄧㄝˇ,也野冶埜漜
ㄧㄝˋ,業葉頁夜咽謁拽靨鄴燁瞱擫射曄饁煠鍱鐷澲鎑偞殗嶪擛
ㄧㄝˊ,爺耶椰琊揶擨
ㄧㄝ˙,爺
ㄧㄡ,優憂幽悠呦攸耰麀櫌鄾懮怮嚘瀀纋蚴
ㄧㄡˇ,有友酉莠牖黝羑泑銪岰庮蒏苃聈槱
ㄧㄡˋ,又右幼誘佑柚釉祐有莠宥侑囿鼬卣姷狖峟貁鴢扰牰迶
ㄧㄡˊ,由游遊尤油郵猶猷鈾輶疣蚰蕕斿蝣訧逌楢魷优沋浟偤秞莤
ㄧㄥ,應英鷹嬰鶯櫻膺瑛鸚嚶罌纓攖瓔嫈甖罃煐韺甇霙碤礯朠蝧渶褮偀霒蘡譻蠳鶧
ㄧㄥˇ,影景穎潁癭郢瀴矨梬浧
ㄧㄥˋ,應硬映媵瀅鎣摬賏
ㄧㄥˊ,營迎蠅螢贏盈瑩縈瀛滎嬴塋熒楹瀅瀠籯瀯謍攍巆廮藀
ㄧㄢ,煙焉淹殷醃咽胭奄湮菸嫣燕蔫閹厭崦臙鄢漹猒珚偣嬮酀腌
ㄧㄢˇ,眼演掩衍郾偃兗甗儼魘剡弇罨沇巘扊揜渰蝘黶姶戭棪嬿鰋鼴琰匽厴椼抁龑酓嵃愝萒隒裺褗鶠黤曮惔躽馣黭
ㄧㄢˋ,驗燕厭晏雁宴淹豔燄彥堰硯咽嚥唁饜研讌諺沿讞焱釅贗喭灩爓閆鷃嬿鴳醼焰牪姲鷰椻曣懨婩傿鴈噞騴觾艷驠莚敥
ㄧㄢˊ,研言顏嚴延沿炎癌鹽岩筵簷閻妍蜒檐埏喦揅碞綖郔巖孍楌礹閰娮鈆狿虤顃壛麙壧莚嵒
ㄧˇ,以已乙倚椅矣蟻尾艤迤苡偯扆旖螘扡酏鳦釔齮顗檥鉯迆胣礒掜陭崺晲轙
ㄧˋ,意義易議亦益異藝億憶譯液役翼疫毅逸邑抑肄一誼繹溢縊軼詣屹佚翌羿驛掖懿裔臆曳奕蜴腋衣刈翳挹鎰囈弈佾乂弋艾懌劓圛斁薏悒瘞仡勩埸嶧帟曀杙枻殪浥熠艗襼饐黓亄唈燡藙豷寱阣熤劮檍嗌廙鐿鞥醳醷翊肊异枍伿浂澺芅熼玴抴蘙俋焲燱晹垼釴捙欭埶羛隿殔跇裛嫕緆膉靾槷潩蓺墿瘱謚繶瀷帠槸霬鷾齸
ㄧˊ,遺疑移宜怡姨儀夷一誼胰貽飴咦詒沂頤彝迤椸痍蛇圯嶷笫桋匜宧洟簃訑貤迻杝柂袲酏峓眱羠鈶寲侇珆衪銕呲恞萓沶栘瓵袘羡蛦暆跠歋熪箷螔顊謻觺鸃
ㄧㄚ,呀壓鴉鴨押丫椏煆孲
ㄧㄚˇ,亞啞雅掗厊庌蕥雃疋
ㄧㄚˋ,亞訝迓砑氬婭揠錏聐軋圠襾玡猰窫齾
ㄧㄚˊ,牙芽涯衙蚜押枒犽齖伢堐
ㄧㄞˊ,崖睚啀娾
ㄧㄤ,央秧殃鴦鞅泱坱胦柍佒姎紻鉠雵
ㄧㄤˇ,養仰氧癢鞅卬攁岟炴抰痒懩蝆
ㄧㄤˋ,樣養恙漾怏煬瀁羕
ㄧㄤˊ,楊陽揚洋羊佯烊瘍鍚徉颺暘煬垟昜禓蛘瑒珜鐊崵鸉眻婸
ㄧㄛ,唷
ㄧㄠ,要腰夭妖邀么吆喲喓祅葽訞
ㄧㄠˇ,咬窈舀夭殀杳窅窔鷕宎抭苭眑偠溔榚騕岆嫍蓔
ㄧㄠˋ,要藥耀曜鑰樂鷂拗燿袎靿艞覞穾筄葯獟趭
ㄧㄠˊ,搖謠堯遙姚洮瑤僥淆餚颻傜繇嶢徭殽猺軺爻垚崤銚珧柼猇鰩肴媱烑窯嗂愮榣顤
ㄧㄣ,因音陰姻殷茵慇氤瘖喑堙湮愔禋絪裀闉駰銦蒑諲垔韾洇凐歅噾霠韽黫摿
ㄧㄣˇ,引飲隱尹癮蚓听靷紖縯讔趛螾馻鈏檃濦蘟粌
ㄧㄣˋ,印飲隱蔭胤廕窨憖湚垽猌朄酳
ㄧㄣˊ,銀吟寅淫鄞齦檐霪垠夤狺嚚崟誾蟫婬冘苂釿圁烎凐荶殥蔩檭鷣鏔
ㄒ,ㄒ
ㄒㄩ,須需虛鬚噓墟戌胥訏吁歔盱嬃繻殈旴呴楈嬬鑐欨倠稰縃蝑蕦驉魖晇幁揟糈
ㄒㄩㄝ,薛靴噱嶨吙
ㄒㄩㄝˇ,雪鱈
ㄒㄩㄝˋ,血雪穴削趐泬謞岤袕
ㄒㄩㄝˊ,學穴鷽觷踅燢澩壆
ㄒㄩㄥ,兄兇胸凶匈洶忷哅恟
ㄒㄩㄥˋ,敻詗
ㄒㄩㄥˊ,雄熊赨
ㄒㄩㄢ,宣軒喧瑄萱暄壎儇諼塤嬛揎翾諠愃晅鍹鶱梋煖萲愋佡昍鋗媗禤蝖蠉矎
ㄒㄩㄢˇ,選咺烜
ㄒㄩㄢˋ,炫絢漩眩泫渲旋眴楦敻鉉衒蔙駽鞙鏇昡楥袨縼讂贙
ㄒㄩㄢˊ,玄旋懸漩璇璿伭妶琁玹嫙誸還縣蜁
ㄒㄩˇ,許栩煦咻詡冔姁湑諝醑鄦珝喣
ㄒㄩˋ,序續蓄緒敘絮旭恤卹酗婿畜洫旮侐慉漵藚頊芧藇魆勖勗訹鱮烅怴垿窢瞲銊沀昫瞁
ㄒㄩˊ,徐
ㄒㄩㄣ,勳薰燻熏醺峋曛焄獯纁臐蔒勛矄
ㄒㄩㄣˋ,訊訓迅遜殉馴徇巽汛蕈噀侚潠韗迿鵔
ㄒㄩㄣˊ,尋巡詢循旬馴潯珣蟳洵荀徇恂峋栒燖璿紃郇鱘槆撏枔咰璕橁蕁噚
ㄒㄧ,西希吸攜嘻犧稀悉溪析蟋熙禧膝棲釐嬉兮犀晰羲畦曦僖蜥扱熹奚盻觿譆晞欷蹊樨巇淅皙唏烯傒徯恓窸粞豨醯鼷氥浠潝燨瓗疧酅媐巂悕睎硒蠵鑴榽歖爔琋螇俙徆怷娭屖谿莃菥僁橀螝豯貕鵗騱驨郋桸惁凞闟誒礂
ㄒㄧㄝ,些歇蠍蝎猲褉嗋
ㄒㄧㄝˇ,寫血
ㄒㄧㄝˋ,謝械洩屑瀉懈卸泄蟹解屜褻榭契駭廨渫邂燮楔絏薤紲媟嶰澥瀣獬躞灺疶鞢骱駴偰檞齘伳妎祄榍韰屧焎揳齥躠
ㄒㄧㄝˊ,協鞋斜脅諧邪偕頡挾絜攜擷勰纈襭脥慀劦蝢垥拹籺奊龤愶搚瑎熁燲
ㄒㄧㄡ,修休羞脩咻庥貅髹饈鵂滫樇臹茠銝蓨鎀潃
ㄒㄧㄡˇ,朽宿糔
ㄒㄧㄡˋ,秀繡鏽袖嗅宿臭銹琇溴岫珛玊殠褎螑
ㄒㄧㄥ,興星猩腥馨惺騂煋瑆胜垶蛵觲馫
ㄒㄧㄥˇ,省醒擤渻
ㄒㄧㄥˋ,行興性幸姓杏倖悻荇婞莕涬
ㄒㄧㄥˊ,行形型刑邢陘硎鉶餳侀烆洐胻鋞濴
ㄒㄧㄢ,先仙掀鮮纖暹姍孅憸躚銛秈韱枮氙馦嬐仚屳奾杴忺澖灦祆僊嘕蓒褼廯襳珗
ㄒㄧㄢˇ,險顯鮮癬蘚銑燹跣嶮蜆姺尟幰獫獮玁筅韅毨烍鍌搟鼸齴赻攇禒
ㄒㄧㄢˋ,縣現線限憲獻羨陷腺餡蜆莧霰俔僩峴晛睍豏轞鋧涀瀗粯娊撊錎姭
ㄒㄧㄢˊ,賢閒嫌咸鹹弦銜絃嫻嫺涎啣舷閑癇諴蚿憪鷴娹葴胘蛝羬燅礥鷳唌
ㄒㄧˇ,喜洗徙璽鰓屣蓰囍枲蟢縰纚蹝釃匚狶諰簁葸漇敼
ㄒㄧˋ,細戲係系繫夕汐隙歙鬩翕穸咥屭綌肸鄎醯餼滊褉酅潟舄矽鑴卌怬釸鎎釳赩郤熂覤蕮黖謑虩忥恄摡禊齂
ㄒㄧˊ,習昔息席惜媳錫襲熄蓆褶檄覡隰裼嶍螅鰼腊槢焟謵鎴欯棤蒠瘜獥薂霫飁騽蝷
ㄒㄧㄚ,瞎蝦岈颬鍜
ㄒㄧㄚˋ,下夏嚇廈暇罅芐欱鏬鶷
ㄒㄧㄚˊ,暇峽轄霞俠狹挾匣呷遐硤狎瑕斜黠柙祫洽舝碬騢搳烚冾笚縖珨陜磍赮魻蕸
ㄒㄧㄤ,鄉相香箱湘襄鑲廂驤緗薌瓖纕欀葙忀
ㄒㄧㄤˇ,想響享餉饗鯗饟晑
ㄒㄧㄤˋ,巷向相像項象橡嚮曏蠁萫闀蟓襐鐌鄉恦潒鱌
ㄒㄧㄤˊ,詳祥降翔庠
ㄒㄧㄠ,消銷蕭瀟宵逍囂簫削硝霄哮驍梟蠨枵魈鴞嘵綃嘐歊潚烋獢虓蛸痚憢灱呺穘洨涍痟萷踃膮藃櫹髇毊虈庨啋窙顤謼
ㄒㄧㄠˇ,小曉筱篠謏
ㄒㄧㄠˋ,校笑孝效酵嘯肖傚恔熽踍
ㄒㄧㄠˊ,學洨笅郩
ㄒㄧㄣ,心新辛薪欣鋅馨鑫莘炘歆芯昕訢鈊盺兟廞忻妡噷
ㄒㄧㄣˇ,伈
ㄒㄧㄣˋ,信釁芯焮舋膷囟妡煡阠
ㄒㄧㄣˊ,尋鄩杺攳襑
ㄊ,ㄊ
ㄊㄡ,偷媮
ㄊㄡˇ,黈妵紏鈄蘣
ㄊㄡˋ,透斢
ㄊㄡˊ,頭投牏酘
ㄊㄡ˙,頭
ㄊㄥˊ,疼騰藤籐謄滕螣縢
ㄊㄢ,貪灘攤癱坍怹抩舑緂探
ㄊㄢˇ,坦毯袒襢忐禫菼贉嗿膻憳醓裧
ㄊㄢˋ,探嘆歎碳炭賧埮湠羰
ㄊㄢˊ,談彈痰潭譚檀壇曇罈覃郯錟餤驔鐔倓醰貚婒憛藫橝黮鷤
ㄊㄚ,它他她牠塌褟祂禢
ㄊㄚˇ,塔榙鎝
ㄊㄚˋ,踏榻蹋塌獺搨遢嚃躂沓嗒撻遝闥鎉闒錔鞜鞳鰨羍涾傝毾誻鑉漯迖濌龘
ㄊㄞ,胎苔
ㄊㄞˋ,太態泰汰鈦燤溙呔傣
ㄊㄞˊ,台臺抬颱苔邰跆檯薹炱駘鮐儓嬯籉旲秮
ㄊㄤ,湯鏜鼞蹚蝪
ㄊㄤˇ,倘躺儻淌帑惝钂鎲戃曭爣矘
ㄊㄤˋ,趟燙鐋摥
ㄊㄤˊ,堂糖唐塘膛螳棠醣搪鏜溏螗瑭赯榶樘漟煻鎕闛橖蓎磄踼薚鶶
ㄊㄨ,禿鵚涋捸嶀
ㄊㄨㄥ,通恫蓪痌炵熥狪
ㄊㄨㄥˇ,統筒桶捅垌筩姛
ㄊㄨㄥˋ,痛衕慟蘳
ㄊㄨㄥˊ,同童銅桐潼瞳彤佟僮峒侗艟曈膧穜罿硐橦氃獞茼烔浵鉖餇仝酮迵粡絧朣犝蕫鮦鼨爞哃詷
ㄊㄨㄢ,湍煓貒
ㄊㄨㄢˋ,彖褖
ㄊㄨㄢˊ,團摶糰漙剸慱鏄鷻槫
ㄊㄨˇ,土吐釷芏唋
ㄊㄨˋ,兔吐菟鵵堍
ㄊㄨˊ,圖途突徒塗屠凸荼涂余酴瘏稌腯峹葖鵚捈怢鍎跿梌湥筡蒤瑹駼鶟鷋鼵嵞廜潳鷵
ㄊㄨㄛ,脫拖托託堶侂挩扥矺沰馲侻詑魠
ㄊㄨㄛˇ,妥橢撱庹嫷
ㄊㄨㄛˋ,拓唾柝籜蘀跅毻毤
ㄊㄨㄛˊ,駝陀馱沱佗鴕跎橐坨紽酡砣阤鮀岮碢鞁驒鼉鉈袉飥
ㄊㄨㄟ,推蓷藬
ㄊㄨㄟˇ,腿俀
ㄊㄨㄟˋ,退蛻駾螁
ㄊㄨㄟˊ,頹穨隤魋橔僓蹪弚
ㄊㄨㄣ,吞暾啍涒旽
ㄊㄨㄣˇ,汆吨畽
ㄊㄨㄣˋ,褪螁
ㄊㄨㄣˊ,屯囤豚飩臀軘魨忳芚吨拵
ㄊㄜˋ,特慝忒忑鋱貣蟘
ㄊㄠ,掏濤滔饕韜弢絛縚搯慆槄幍翢嫍蜪
ㄊㄠˇ,討
ㄊㄠˋ,套
ㄊㄠˊ,逃桃陶萄淘濤啕洮燾檮匋咷綯鞀醄騊錭駣祹鋾
ㄊㄧ,梯踢剔焍
ㄊㄧㄝ,貼帖怗
ㄊㄧㄝˇ,鐵帖驖僣
ㄊㄧㄝˋ,帖餮蛈
ㄊㄧㄥ,聽廳汀桯艼耵
ㄊㄧㄥˇ,挺艇町梃頲珽脡鋌烶圢侹
ㄊㄧㄥˋ,聽
ㄊㄧㄥˊ,停庭廷亭蜓霆婷渟莛朾筳蝏聤葶鼮楟榳閮嵉綎
ㄊㄧㄢ,天添倎屇酟婖
ㄊㄧㄢˇ,舔忝殄腆靦淟餂賟悿蚕晪痶
ㄊㄧㄢˋ,掭煔瑱
ㄊㄧㄢˊ,田甜填恬闐畋窴沺盷湉菾磌
ㄊㄧˇ,體体綈
ㄊㄧˋ,替惕涕屜悌剃銻嚏倜薙殢裼揥籊鬄悐褅逖鵜
ㄊㄧˊ,題提啼堤蹄醍禔稊緹荑騠隄鶗惿厗鍗偍趧謕鶙崹睼蝭蕛鷤鯷鵜
ㄊㄧㄠ,挑祧恌庣鮡
ㄊㄧㄠˇ,挑窕誂宨嬥
ㄊㄧㄠˋ,跳眺糶朓覜頫絩窱脁
ㄊㄧㄠˊ,條調笤佻迢蜩髫岧苕齠鰷鞗芀鎥趒祒
ㄌ,ㄌ
ㄌㄡ,摟
ㄌㄡˇ,簍摟塿嶁
ㄌㄡˋ,漏陋露鏤瘺
ㄌㄡˊ,樓嘍婁螻髏僂蔞廔漊耬熡謱艛鞻鷜瞜
ㄌㄥˇ,冷
ㄌㄥˋ,愣踜楞
ㄌㄥˊ,稜崚棱薐蔆倰楞
ㄌㄢˇ,覽懶攬欖纜壈爦灠醂嬾顲浨
ㄌㄢˋ,爛濫纜鑭爁壏
ㄌㄢˊ,蘭籃藍欄攔瀾襤婪嵐闌襴讕斕籣欗糷灆灡譋躝
ㄌㄚ,拉啦喇柆鞡翋菈
ㄌㄚˇ,喇藞
ㄌㄚˋ,臘蠟鑞辣剌腊落鬎瘌揧楋
ㄌㄚˊ,剌邋旯
ㄌㄚ˙,啦
ㄌㄞˋ,賴癩瀨籟睞賚藾娕
ㄌㄞˊ,來萊徠淶騋箂崍郲錸鯠棶庲鶆唻
ㄌㄤ,啷
ㄌㄤˇ,朗閬硠峎悢誏烺塱
ㄌㄤˋ,浪埌蒗
ㄌㄤˊ,郎狼廊螂瑯琅榔稂莨蜋桹筤鋃俍崀欴
ㄌㄨ,嚕
ㄌㄨㄥˇ,隴攏壟
ㄌㄨㄥˋ,衖哢徿梇
ㄌㄨㄥˊ,龍隆籠嚨聾瓏朧窿瀧癃櫳礱曨巃矓蘢躘豅鏧鑨靇蠪襱鸗儱龒蠬
ㄌㄨㄢˇ,卵
ㄌㄨㄢˋ,亂薍
ㄌㄨㄢˊ,巒鑾鸞灤臠圞欒曫羉癵
ㄌㄨˇ,魯虜擄滷鹵櫓艣磠鐪鏀蓾擼氌
ㄌㄨˋ,路陸錄鹿露賂祿碌氯麓鷺戮轆蓼逯漉輅僇潞籙璐甪稑穋簏醁騄淥琭盝磟彔菉蔍錴垏鏕鯥摝硉睩廘熝踛蕗螰簬鵱淕塶蹗
ㄌㄨˊ,盧蘆廬臚爐顱瀘鱸轤壚鸕玈罏艫鑪籚櫨嚧攎蠦纑
ㄌㄨㄛ,囉
ㄌㄨㄛˇ,裸瘰臝蠃蓏鎯
ㄌㄨㄛˋ,落駱洛絡雒烙酪濼犖咯珞纙袼硌鮥鵅峈
ㄌㄨㄛˊ,羅螺蘿鑼邏籮騾囉玀儸覶摞欏蔂鏍鸁剆
ㄌㄨㄣ,掄
ㄌㄨㄣˇ,稐
ㄌㄨㄣˋ,論溣
ㄌㄨㄣˊ,倫論輪淪崙侖綸掄圇碖錀惀陯菕踚棆蜦
ㄌㄜˋ,樂垃勒肋泐埒叻仂捋扐阞砳鰳氻哷竻
ㄌㄜ˙,了
ㄌㄠ,撈
ㄌㄠˇ,老姥佬栳狫轑咾橑銠恅荖
ㄌㄠˋ,勞絡烙酪嫪軂橯僗
ㄌㄠˊ,勞牢癆澇嘮醪浶鐒簩蟧嶗
ㄌㄩㄝˋ,略掠鋝撂擽
ㄌㄩㄢˇ,孌
ㄌㄩㄢˊ,攣孿
ㄌㄩˇ,呂旅履侶鋁屢縷褸婁膂漊穭梠郘挔絽儢祣
ㄌㄩˋ,律綠率慮濾氯嵂膟鑢菉葎勴
ㄌㄩˊ,驢閭櫚藘慺氀膢
ㄌㄟ,勒
ㄌㄟˇ,累壘儡漯耒磊蕾誄藟樏癗礌絫磥鑸瘣櫑櫐礨灅讄鸓頛礧蘲虆
ㄌㄟˋ,類淚累擂纇酹銇儽蘱禷
ㄌㄟˊ,雷累纍擂嫘鐳羸縲罍檑畾櫑瓃蠝轠壨欙
ㄌㄧ,哩
ㄌㄧㄝ,咧
ㄌㄧㄝˇ,咧
ㄌㄧㄝˋ,列烈劣裂獵捩冽鬣躐洌茢睙擸趔姴迾脟蛚蛶颲儠鮤鴷犣
ㄌㄧㄡ,溜蹓
ㄌㄧㄡˇ,柳綹罶鉚飹珋
ㄌㄧㄡˋ,六陸溜餾霤坴翏雡廇塯蹓
ㄌㄧㄡˊ,劉流留硫琉榴瀏瘤遛旒騮鏐飀鶹懰鎏鎦媹嬼嵧藰裗麍鷎蓅鰡巰
ㄌㄧㄥ,拎
ㄌㄧㄥˇ,領嶺彾
ㄌㄧㄥˋ,令另炩
ㄌㄧㄥˊ,零玲靈鈴齡陵凌菱聆羚苓伶綾淩翎鴒囹蛉瓴泠舲酃軨錂櫺柃欞睖砱詅輘霝鯪醽岭昤澪呬坽夌姈狑皊呤琌笭裬蘦怜婈駖蕶爧堎
ㄌㄧㄢˇ,臉鄻膦摙僆羷
ㄌㄧㄢˋ,練鍊戀煉鏈殮斂瀲楝襝湅澰蘞歛薟萰堜
ㄌㄧㄢˊ,連聯憐廉蓮漣簾鐮鰱奩璉帘褳嗹鎌鬑溓蠊槤縺謰覝磏濂翴薕蹥譧奱嬚
ㄌㄧˇ,李里裡理禮裏哩浬鯉娌俚澧邐醴蠡鱧鋰粴豊峛欚
ㄌㄧˋ,力立利麗歷壢例曆莉厲勵礪粒蒞靂瀝儷隸礫吏荔栗慄俐痢癘笠戾唳酈琍詈嚦溧蠣櫪沴糲櫟轢瓅鬁猁盭篥苙唎屴躒釙鬲皪秝瑮轣岦朸欐禲赲鴗砅濿砬悷蚸厤筣綟蜧磿斄犡藶蠫鷅麜攦觻鷑攭鱳靋栵浰塛搮蝷儮曞讈瓥鱱娳
ㄌㄧˊ,離璃黎梨籬釐犛罹貍驪犁漓灕狸藜蜊蠡鸝嫠褵黧梩漦縭蔾氂厘蘺剺喱篱醨鱺劙孋廲騹孷樆謧鯬鵹攡麗菞鑗黐粍麶
ㄌㄧㄚˇ,倆
ㄌㄧㄤˇ,兩倆魎緉裲
ㄌㄧㄤˋ,量亮諒輛喨晾涼啢踉湸悢
ㄌㄧㄤˊ,良梁量糧涼粱樑椋綡輬踉駺
ㄌㄧㄠ,撩
ㄌㄧㄠˇ,了瞭蓼憭釕暸鄝蟟
ㄌㄧㄠˋ,廖料瞭燎尥撂炓蟉窲
ㄌㄧㄠˊ,聊寮遼療寥撩僚燎潦嘹繚鐐嫽獠鷯屪鷚膋漻摎豂嵺憀嶚敹窷膫簝镽飂飉顟
ㄌㄧㄣˇ,凜懍廩檁菻亃綝榃
ㄌㄧㄣˋ,吝躪藺賃橉閵焛
ㄌㄧㄣˊ,林臨鄰淋鱗麟霖磷琳遴嶙燐璘粼轔潾痳疄瞵惏暽罧驎碄箖甐繗僯翷蹸壣鏻
ㄗ,資茲滋吱姿咨孜諮貲玆ㄗ輜淄齜緇孳粢髭嵫菑鎡鶿鼒孖澬甾鄑鯔錙趑椔鈭鶅齍栥紎崰秶蠀
ㄗㄡ,鄒謅鄹諏啁掫菆陬騶鯫棸緅棷郰媰黀齱齺
ㄗㄡˇ,走
ㄗㄡˋ,奏驟揍
ㄗㄥ,曾增憎罾繒矰橧磳驓璔
ㄗㄥˋ,贈甑
ㄗㄢ,簪鐕
ㄗㄢˇ,拶攢寁昝禶喒儹揝礸
ㄗㄢˋ,贊暫讚鏨瓚欑酇饡灒囋趲
ㄗㄢˊ,咱偺糌
ㄗˇ,子仔紫梓籽滓耔訾笫秭胏茈吇杍芓呰矷釨訿
ㄗˋ,自字恣漬眥孳剚胔胾扻倳牸
ㄗ˙,子
ㄗㄚ,紮匝咂唼嘁抸鉔
ㄗㄚˊ,雜咱砸偺雥磼
ㄗㄞ,災栽哉渽賳
ㄗㄞˇ,仔宰崽載縡
ㄗㄞˋ,在再載
ㄗㄤ,髒贓臢牂臧
ㄗㄤˇ,駔
ㄗㄤˋ,藏臟葬奘
ㄗㄨ,租蒩
ㄗㄨㄥ,宗蹤縱綜棕鬃豵騣鬷翪熧倧惾猣稯艐嵕蝬
ㄗㄨㄥˇ,總摠傯熜朡蓗
ㄗㄨㄥˋ,縱粽綜從瘲昮
ㄗㄨㄢ,鑽躦
ㄗㄨㄢˇ,纂鑽纘籫儹
ㄗㄨㄢˋ,賺鑽攥饡
ㄗㄨˇ,組祖阻俎詛珇靻
ㄗㄨˊ,足族卒嗾捽崒踿哫傶踤
ㄗㄨㄛˇ,左佐繓
ㄗㄨㄛˋ,做作坐座酢祚鑿柞怍胙阼葄夎
ㄗㄨㄛˊ,昨作砟椊筰稓葃
ㄗㄨㄟ,堆厜羧嶉纗
ㄗㄨㄟˇ,嘴璻觜嶊噿濢
ㄗㄨㄟˋ,最罪醉檇蕞晬檌絊祽鋷墬嶵
ㄗㄨㄣ,尊遵樽墫鐏嶟繜鷷壿
ㄗㄨㄣˇ,撙噂墫僔譐
ㄗㄨㄣˋ,俊圳捘鱒銌燇
ㄗㄜˇ,怎
ㄗㄜˋ,仄側昃庂稄
ㄗㄜˊ,則責擇澤嘖窄舴咋幘笮賾迮崱萴謮蠌賊蠈
ㄗㄠ,遭糟蹧傮
ㄗㄠˇ,早棗澡藻蚤璪繰
ㄗㄠˋ,造皂燥噪慥譟灶躁皁趮矂
ㄗㄠˊ,鑿
ㄗㄟˊ,賊
ㄗㄣˇ,怎
ㄗㄣˋ,譖
ㄈ,ㄈ
ㄈㄡˇ,否缶殕缹鴀
ㄈㄡˊ,罘芣紑剻
ㄈㄥ,風蜂封豐瘋峰鋒丰烽楓諷酆葑灃犎捀桻妦檒偑崶蘴飌麷猦
ㄈㄥˇ,唪覂
ㄈㄥˋ,奉鳳俸諷縫賵焨
ㄈㄥˊ,逢縫馮夆渢堸艂摓
ㄈㄢ,番翻蕃繙幡帆旛籓僠嬏轓鱕
ㄈㄢˇ,反返魬
ㄈㄢˋ,範范犯氾汎飯販泛梵畈笵鄤奿軓軬滼嬔
ㄈㄢˊ,凡煩繁帆蕃礬藩樊蘩璠籵墦燔膰蠜蹯颿笲釩瀿鐇勫橎薠羳鷭杋柉瀪
ㄈㄚ,發伐瞂
ㄈㄚˇ,法髮
ㄈㄚˋ,法琺
ㄈㄚˊ,乏伐罰閥筏砝茷法疺藅
ㄈㄤ,方芳坊枋邡淓鈁匚汸
ㄈㄤˇ,訪彷仿紡倣舫昉瓬髣鶭
ㄈㄤˋ,放
ㄈㄤˊ,房防妨肪坊魴
ㄈㄛˊ,佛坲
ㄈㄨ,夫膚敷孵伕麩跗趺柎砆鄜鈇箙罦衭稃邞泭怤尃荴綒鳺姇糐璷紨
ㄈㄨㄥˋ,甮
ㄈㄨˇ,府腐撫輔甫斧俯釜脯腑莆滏嘸拊黼簠頫郙弣鯆暊冹蜅蚥軵父
ㄈㄨˋ,父負婦付附富復副傅覆複腹咐赴賦駙阜訃馥賻蝮鮒祔偩輹鰒鍑榑复胕蚹萯蝜褔姇峊蛗緮蕧
ㄈㄨˊ,服福扶浮符伏彿縛幅俘拂苻弗孚袱芙輻蝠匐蜉罘涪夫郛莩怫蚨桴紼茯菔紱咈洑綍艴芾茀艀刜帗笰葍袚氟棴澓烰枹玸岪枎垘昲柫琈虙踾鳧巿沷祓翇韍諨鴔黻鵩鶝
ㄈㄟ,非飛菲扉啡妃緋霏馡騑鯡騛婓裶
ㄈㄟˇ,匪翡斐蜚誹悱菲朏棐榧篚奜餥
ㄈㄟˋ,廢費肺沸吠痱怫疿芾屝剕狒砩濷癈昲胇俷厞曊鼣櫠蟦鐨
ㄈㄟˊ,肥淝腓萉蜰
ㄈㄣ,分紛芬氛吩棻玢酚雰昐鈖砏翂衯饙梤鳻
ㄈㄣˇ,粉黺
ㄈㄣˋ,份忿奮憤分糞僨瀵坋秎魵橨膹羵
ㄈㄣˊ,墳焚汾枌棼蚡豶鼖幩濆轒鼢妢炃羒蒶黂弅蕡鐼
ㄈㄧㄠˋ,覅
-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);

