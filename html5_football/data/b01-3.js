﻿optionsTotal = 9;		//共有幾個選項
optionWidth = 150;		//每個選項的寬度
optionHeight = 100;		//每個選項的高度
optionColTotal = 3;		//一列有幾個選項

//題庫
question_lines = new Array(
  "點;小事,東西,希望,聲音,意見;狗,新月,烈火;表示很少或用於意見、希望、內容等事項。"
, "口;井,飯,水,缸;布,雨,鏡子,禮物;用於計算人畜、器物等。"
, "宗;心事,買賣,款項,貨物;流水,新月,手續,香味,山泉,熱氣;用於款項、交易和心理活動。"
, "捲;紙,畫;書,筆,花,牛,羊;用於成卷的東西。"
, "泡;屎,尿;水,酒,河,香氣;用於屎和尿。"
, "泓;清泉,秋水;香氣,技術,貨物,心事;清水一道或一片叫一泓。"
, "門;大炮,功課,技術,婚事;大門,窗戶,馬路,刀,信;用於炮、功課、或技術。"
, "彎;流水,新月;大河,大海,水庫,大橋;通常用於流水、新月。"
, "道;河流,紅線,圍牆,防線,命令,考題,手續,光芒;馬路,廚房,考試,樹幹,小島,衣服,魚丸;用於江、河、和某些長條形的東西， 或門、牆，或命令、題目或表示次數。"
, "股;山泉,熱氣,香味,猛勁,線;斧頭,時間,硬幣,技術,客人,茶壺;成條的東西、氣體、氣味、力氣。"
, "刀;紙;新月,流水,井,水;計算紙的單位，通常一百張為一刀。"
, "方;手帕,臘肉,圖章,石碑,木頭,地板;筷子,歌曲,機器,話劇,火車,事情;用於方形的東西，平方公尺或立方公尺的簡稱。"
, "文;錢;線條,紙,書,田地,水;用於舊時的銅錢。"
, "手;好字,好菜;時間,香味,山泉,木頭,歌曲;用於技能、本領，如他有一手好手藝。"
, "孔;土窯,磚窯;井,熱氣,圖章,水缸;用於窯洞。"
, "丘;田;土窯,書,水,井,行李;水田分隔成大小不同的塊，一塊叫一丘。"
, "令;紙;田,書,詩,眼淚;紙五百張為一令。"
, "注;水,清流;水缸,銅錢,熱氣,烈火,山泉;用於液體。"
, "團;碎紙,泥巴,和氣,毛線,烈火;沙發,毛筆,經驗,書包,鉛筆,長尺;用於成團的東西。"
, "窩;豬,小貓,小雞,小狗,小鳥,老鼠;人,泥土,毛線,手錶;用於一胎新生的或一次孵出的動物。"
, "席;話,酒筳,喜酒;泥巴,毛線,行李,書;大多用於言語、酒菜。"
, "貼;膏藥;飯菜,毛線,水,筆;用於膏藥。"
, "堂;課;筆,書,簿子,酒菜;用於分節的課程。"
, "柄;斧頭;飯菜,筷子,木頭,弓;用於帶柄的東西。"
, "記;耳光;話,簿子,書,眼淚;打一下叫打一記。"
, "起;火災,事故;熱氣,飯菜,經驗,喜酒;就是件，次，群，批。如分三起郵寄，出了一起事故，進來一起人。"
, "桌;菜,酒席,客人;糖果,椅子,桌子,話;用於以桌為單位計算飯菜或人。"
, "員;大將,猛將;老師,學生,軍人,土匪;用於武將。"
, "級;台階;耳光,客人,學生,飯菜;用於台階、樓梯等。"
, "挑;米,菜,柴火;門,房子,馬,羊;用於成挑的東西。"
, "領;布衣,官服,草蓆;裙子,鞋子,襪子,白雲;只用於上衣和草蓆。"
, "管;毛筆;書,簿子,書包,球;用於細長圓筒形的東西。"
, "筆;錢,帳,積蓄,現款;書,簿子,毛筆,新詞,悲歌,明月,光明;通常是用於與錢有關的事物。"
, "輪;明月,紅日;花,筆,點心,書包;用於日、月或循環的事物。"
, "闕;悲歌,新詞;明月,紅日,希望,光明;歌曲一首或詞一首。"
, "簇;鮮花;明月,希望,球,草蓆;用於聚集成團成堆的東西。"
, "縷;麻,絲線,炊煙,頭髮;書,光線,花朵,球,白雲;用於細的東西。"
, "綹;髮絲,長髯,蠶絲;白雲,河水,新詞,炊煙,微風;鬚髮一把或絲縷一組叫一綹。"
, "撮;鹽,糖,毛髮,泥砂;空氣,蝶蝴,太陽,微風,筆;用於細微的東西。"
, "瓢;水,酒;空氣,太陽,微風,白雲;用勺舀起東西(液體)的單位。"
, "服;藥;糖果,餅乾,蛋,圖畫;藥一劑叫一服。"
, "挺;機槍;藥,鹽,雲,水,花,狗;用於計算機槍的單位。"
);



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
