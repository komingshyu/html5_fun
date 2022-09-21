﻿//-------------------------------
//Bubble::量詞大挑戰::題庫設定檔
//
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// 兩個斜線開頭的為註解、說明用的
// 自訂參數可以依說明，改成自己想要的內容
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//

//
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// 以下為自訂參數，請依說明，自行修改
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//



title = "名詞找量詞高手級";


//抽幾題題目來作答(0:表示使用全部的題庫)
numberOfQuestionsPerGame = 0;

//
//題庫設定
//

//欄位分隔符號
//
//題幹、正確答案和錯的選項和解說對話框文字之間的欄位分隔符號(共分為四個欄位)
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

行星;顆;根,棵,枝,張,粒;通常是用「顆」。
蠟燭;根,枝;個,台,棵,顆,粒;通常是用「根」、「枝」，如果很多蠟燭裝在盒子裡，可說一「盒」蠟燭。
繩子;條,綑,根,截,段;個,台,隻,雙,棵,張,對;卷在一起用「綑」，不然用「條」、「根」，比較短時用「截」、「段」。
子彈;顆,粒,發,排;場,張,筆,塊,片,隻,台;單一時用「顆」或「粒」，成排的用「排」，計算打出去多少時用「發」。
大門;扇,道;張,個,條,片,棵,台;通常用「扇」。「道」是用在經過多少扇門。如：我要經過三道門才可進入那個房間。
井;口;個,條,隻,門,車,片;通常是說一「口」井。
經驗;段,次;份,台,隊,團,串,車,門,片;通常用「段」、「次」。
乾糧;包,份,片;台,團,串,門,隻;通常用塑膠袋裝起來是用「包」，或用份，單一一片時用「片」。
衛星;顆,個;粒,團,串,車,台,棵;通常是用「顆」或「個」。
存款;筆;個,粒,團,車,台;通常是用「筆」。如他在銀行裡有一大筆存款。
預算;筆;個,車,片,門,粒,隻;通常是用「筆」。
鞭炮;串;個,車,門,片,台;通常是用「串」。
電影;場,部;個,車,片,門,座,筆;電影的計數單位是「部」。看電影的計數單位可用「場」或「部」。
大炮;座,門;個,車,片,筆,粒,顆;通常是用「座」或「門」。
心事;樁;個,車,片,門,粒,顆,條;通常是用「樁」。
郵票;張,枚,套;個,片,粒,顆,台,車;單一時是用「張」或用「枚」，成組時是用「套」。
軍火;批;個,粒,顆,台,棵;軍火是槍砲彈藥等的總稱，所以通常是說「一批軍火」。
費用;筆;個,台,條,粒,棵;通常是用「筆」。
功課;門;個,台,條,粒,棵;通常是用「門」。
佛像;尊;個,台,條,棵,粒;通常是用「尊」。如這座廟裡有二尊大佛。
火海;片;個,粒,群,堆,車,門;一片火海是用來形容火燒的很大。
汪洋;片;個,粒,群,堆,車,門;一片汪洋是用來形容海的廣闊。
彩虹;道;個,群,堆,棵,粒;通常是說一道彩虹。

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
