﻿//-------------------------------
//Bubble::量詞大挑戰::題庫設定檔
//
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// 兩個斜線開頭的為註解、說明用的
// 自訂參數可以依說明，改成自己想要的內容
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//

//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// 用來偵測換行字元用的測試區塊
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//請勿更動
//並且放在題庫設定檔的最前面
//-------------------------------
//測試區塊開始
//-------------------------------
CR_LF_test = function(){/*--這一行請勿更改--
CR_LF testing block
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2,-9);
CR_LF_First_Pos = CR_LF_test.indexOf('_LF')-'CR_LF'.indexOf('_LF');
//-------------------------------
//測試區塊結束
//-------------------------------

//
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// 以下為自訂參數，請依說明，自行修改
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//


title = "名詞找量詞生手級";


//抽幾題題目來作答(0:表示使用全部的題庫)
numberOfQuestionsPerGame = 0;

//
//題庫設定
//

//欄位分隔符號
//
//題幹、正確答案和錯的選項之間的欄位分隔符號(共分為三個欄位)
question_O_X_seperator = ";";

//多個答案選項之間的分隔符號(對、錯都用同樣的符號)
options_seperator = ",";

//題目類型
// 1:數字(question_number_string)會由程式加到題庫的題幹欄位(第 1 欄)中
// 2:數字(question_number_string)會由程式加到題庫的選項欄位(第 2,3 欄)中
question_type = 2;	


//可使用的數字列表, 以 options_seperator 當分隔符號
question_number_string = "一,兩,三,四"; 

//
//題庫內容
//
// 一行一題
//
// 每一行依分隔符號 ; (question_O_X_seperator) 分為四欄
//
//  三欄由左而右，分別是：題幹、正確答案、錯的選項、說明
//
//  正確答案和錯的選項可以有多個，用 options_seperator 分隔
//
question_lines = function(){/*--這一行請勿更改--

雲;朵,片;隊,張,粒,間,線;通常用「朵」或「片」。
土司;片,條;團,個,粒,朵,張,篇;通常用「片」或「條」。
蘋果;片,顆,籃,個;滴,線,棵,張,對,間;切成一片片時用「片」，整個時用「顆」或「個」，裝在籃子裡叫一「籃」。
香蕉;根,串;個,頭,隻,朵,粒;單一時用「根」，很多連在一起時用「串」。
葡萄;顆,串,粒,盤;條,朵,隻,枝,門,片;單一時用「顆」、「粒」，很多連在一起時用「串」，裝在盤子裡叫一「盤」。
西瓜;個,片;條,朵,隻,束,門;單一時用「個」，切開來的用「片」。
甘蔗;根;朵,粒,顆,朵,片;通常用「根」。
玫瑰;朵,束;隻,顆,個,面,粒,間;有花朵的叫一「朵」。很多朵在一起叫一「束」。
梅花;朵;個,隻,條,粒,份;朵是用於「花」。
松樹;棵;個,隻,條,粒,顆;通常是用「棵」。
種子;顆,粒,包;棵,個,名,支,間,條,枚;單一時用「顆」或「粒」，很多在一起用東西包起來時用「包」。
絲瓜;條;粒,朵,顆,片,個;通常是用「條」。
山羊;隻,群;個,頭,名,棵,粒,匹;單一時用「隻」，很多在一起用「群」。
黃牛;頭,群;隻,名,棵,個,粒,台,匹;單一時用「頭」，很多在一起用「群」。
白馬;匹,群;隻,名,條,個,位,台;單一時用「匹」，很多在一起用「群」。
黑狗;隻,條,群;匹,個,位,粒,片,張,台;單一時用「條」或「隻」，很多在一起用「群」。
兔子;隻,群;匹,個,位,粒,張,台;單一時用「隻」，很多在一起用「群」。
花貓;隻,群;匹,個,位,粒,張,台,門;單一時用「隻」，很多在一起用「群」。
禮物;份,個,包,樣,件;條,張,顆,隊,間,朵,台,棵;通常用「份」、「個」、「包」、「樣」或「件」。
蝴蝶;群,隻;枝,個,條,朵,本,棵,顆;單一時用「隻」，很多在一起用「群」。
蜜蜂;群,隻;枝,個,條,朵,粒,名;單一時用「隻」，很多在一起用「群」。
蜻蜓;隻,群;枝,個,朵,名,棵;單一時用「隻」，很多在一起用「群」。
螞蟻;隻,群;個,粒,顆,棵,束,匹;單一時用「隻」，很多在一起用「群」。
小雞;隻,窩,群;個,條,棵,粒,頭,隊,匹;單一時用「隻」，很多在一起用「群」，同一母雞生的用「窩」。
衣服;件,套;雙,條,個,段,片;單一時用「件」，幾件配成時用「套」。
椅子;張;條,片,個,份,支,枝,隻;通常用「張」。
板擦;個;袋,份,頭,支,簍,片;通常用「個」。
書包;個;袋,份,頭,支,簍,片;通常用「個」。
簿子;本,疊;個,份,片,枝,隻,雙;單一時用「本」，很多疊在一起用「疊」。
鉛筆;枝,打,盒;台,隻,雙,個,片,棵,顆;單一時用「枝」，十二枝為一「打」，裝在盒子裡可用「盒」。
粉筆;枝,打,盒;台,隻,雙,個,片,棵,顆;單一時用「枝」，十二枝為一「打」，裝在盒子裡可用「盒」。
桌子;張;條,片,個,份,隻;通常用「張」。
花瓶;個;棵,片,份,條,台;通常用「個」。
老師;位;條,門,片,隻,粒;通常是用「位」。
護士;位;條,門,片,隻,粒;通常是用「位」。
學生;位,個,群,組,隊,班;條,門,片,隻,粒;通常是用「位」或「個」，很多學生在一起是用「群」，在一個班級時用「班」。排在一起可用「隊」，在分組時用「組」。
郵差;位;條,門,片,隻,粒;通常是用「位」。
耳朵;隻;條,片,粒,個;通常是用「隻」。如：每個人都有兩隻耳朵。

-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
