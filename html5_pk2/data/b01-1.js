﻿//題庫
question_lines = new Array(
  "個;蛋,糖果,皮球,杯子,書包,玩具,禮物,西瓜,石頭,孩子,學生,人;貓,鳥,蒼蠅,蚊子,蝴蝶,蜘蛛,螞蟻,山羊,烏龜,兔子,鹿,鉛筆,粉筆,鋼筆;用於沒有專用量詞的時候。"
, "隻;貓,鳥,蒼蠅,蚊子,蝴蝶,蜘蛛,螞蟻,山羊,烏龜,兔子,鹿,猴子,黑狗,老鼠,小船,螃蟹,蝦;玉米,香蕉,釣竿,筷子,頭髮,大海,西瓜,白雲,樹葉,土司,草地,糖果,蛋,毛筆;用於某些成雙成對的東西中的一個、某些動物、某些日用器具、船隻等。"
, "片;西瓜,白雲,樹葉,土司,草地;貓,鳥,蒼蠅,蚊子,蝴蝶,蜘蛛,螞蟻,山羊,烏龜,兔子,小鹿,鉛筆,粉筆,鋼筆;用於成片的東西，或地上和水面或景象、聲音、語言、心意等。"
, "位;老師,客人,先生,總統;學校,醫院,大學,童詩,兒歌,老牛,猴子,老鼠,青蛙;用於人（含尊敬的意思）。"
, "朵;小花,雲,菊花;玉米,香蕉,釣竿,筷子,頭髮,大海,西瓜;用於花朵或雲彩。"
, "枝;鉛筆,粉筆,鋼筆,毛筆;國旗,牆壁,鏡子,黑狗,馬路,土司;用於帶枝子和花朵或樹的細枝葉、成杆狀的東西。"
, "打;鉛筆,襪子,毛巾;花生,鳥,人,雲,牛,狗;十二個為一打。"
, "包;糖,茶葉,衣服;花,豬,鳥,蛋,牛;用於裝成包的東西。"
, "盒;布丁,底片,面紙,糖果,蚊香,餅乾;國旗,大海,樹葉,香蕉,西瓜;用於可裝在盒子裡的東西。"
, "杯;酒,汽水,牛奶,水,茶,咖啡,豆漿;糖果,葡萄,白菜,西瓜,蚊香;用於可裝在杯子裡的東西。"
, "瓶;酒,汽水,牛奶,醬油,豆漿;糖果,葡萄,土司,蛋,豆腐;用於可裝在瓶子裡的東西。"
, "件;事情,衣服,行李,禮物;手錶,手帕,鞋子,襪子,傘;計算事物的單位。"
, "棵;大樹,小草,白菜,榕樹;牙齒,星星,子彈,新聞,故事,眼睛,鉛筆,鋼筆,人;大多用於植物。"
, "名;學生,老師,軍人,警察;兄弟,姊妹,鴛鴦,頭髮;用於有某種身份的人。"
, "匹;布,馬;牛,山羊,黑狗,猴子,鳥;計算布、馬的單位。"
, "頭;牛,山羊;馬,黑狗,猴子,鳥;計算牛、羊的單位。"
, "段;繩子,鐵路,木頭,時間,路,話,文章,歌詞;花,人,香蕉,皮球,玩具,學生,鹿;用於長條東西分成的若干部分，或表或表示時間、路程的一定距離，或東西的一部分。"
, "列;火車,士兵,學生;花,土司,馬路,山羊;用於成行的東西。"
, "間;廚房,臥室,教室,廁所,套房;樓房,圍牆,地圖,手錶,桌子;房屋的最小單位。"
, "條;黑狗,馬路,土司,領帶,大蛇,小溪,大河,大街,鐵路,新聞,小魚,香蕉;釣竿,筷子,頭髮,西瓜,白雲,樹葉,草地;用於細長的東西或分項的事務。"
, "根;香蕉,釣竿,頭髮,竹竿;西瓜,白雲,樹葉,土司,草地,國旗,牆璧,鏡子;用於細長的東西。"
, "所;學校,醫院,大學;童詩,兒歌,鏡子,國旗,水庫,大橋,高樓;通常用於房屋、學校、醫院等。"
, "張;白紙,相片,地圖,牛皮,桌子,小床,椅子;領帶,小路,大風,木頭,黃瓜,手錶;用於計算有扁平面的東西。"
, "粒;米飯,種子,藥丸,子彈,魚丸;垃圾,水庫,高樓,鏡子,山泉,國旗;通常是用於計算圓形細小的東西。"
);


//基本設定
optionsTotal = 6;		//共有幾個選項
optionColTotal = 3;		//一列有幾個選項


/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	if(typeof questionCurrendIndex == 'undefined' 
		|| typeof questionIndexRandom == 'undefined'
		|| questionCurrendIndex >= question_lines.length	) {
		
		questionIndexRandom = tools.makeRandomIndex(0, question_lines.length-1);
		questionCurrendIndex = 0;
	}
	//以亂數取得一筆題庫
	var line = question_lines[questionIndexRandom[questionCurrendIndex++]];
	//以分號將各欄分開
	var q = line.split(';');
	//題幹
	var cNumber = new Array('一','二','三','四');
	var question = cNumber[Math.floor(Math.random()*cNumber.length)] + q[0] + '(?)';
	//對的答案
	var okArray = q[1].split(',');
	var okRandom = tools.makeRandomIndex(0, okArray.length-1);
	var answer = okArray[okRandom[0]];	//對得答案只取一個
	//錯的答案
	var ngArray = q[2].split(',');
	
	//重組成物件,準備回傳
	var op = new Object();
	op.question = question;		//題幹
	op.optionsOK = new Array();	
	op.optionsOK[0] = answer;
	op.optionsNG = ngArray;
	
	return op;
};
