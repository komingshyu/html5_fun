﻿//=======================================================
// HTML5 FUN 題庫設定檔 Bubble 量詞大挑戰
//=======================================================

//-------------------------------
//上方的標題字
//-------------------------------
title = "字詞填空";


//-------------------------------
//由題庫中抽幾道題目來作答
//(0:表示使用全部的題庫)
//-------------------------------
numberOfQuestionsPerGame = 0;

//-------------------------------
//題目類型
// 0: 無論題幹或對,錯選項都不加數字
// 1: 隨選一個數字加到題庫的題幹欄位中
// 2: 隨選一個數字加到題庫對的選項和錯的選項欄位中
//-------------------------------
question_type = 0;	

//-------------------------------
//可使用的數字列表, 多個間用逗號分隔
//-------------------------------
question_number_string = "一,兩,三,四"; 

//---------------------------------------------------
//【題庫設定】
//---------------------------------------------------

//-------------------------------
//[欄位分隔符號]
//題幹, 正確選項, 錯的選項, 解說對話框文字之間的欄位分隔符號
//將一行題庫分割為四個欄位
//-------------------------------
question_O_X_seperator = "##";

//-------------------------------
//[項目分隔符號]
//多個選項之間的分隔符號
//對, 錯都可多個, 都用同樣的符號
//-------------------------------
options_seperator = "~~";

//
//[題目設定]
//
// 一行一題
//   每一行以 [欄位分隔符號] ## 分為四欄
//   四欄由左而右, 分別是: 題幹, 正確選項, 錯的選項, 說明
//   正確選項和錯的選項都可以有多個, 用 [項目分隔符號] ~~ 分隔
//
questionLines = function(){/*--這一行請勿更改--

他的惡作劇，讓大家(　)。##很難過~~很不高興~~很生氣~~很討厭~~受不了~~發火~~發狂##開心~~佩服~~喜歡~~喜愛~~感動
大自然的優美景色，叫人(　)。##開心~~驚訝~~喜歡~~喜愛~~感動~~感覺舒暢##臉色變青~~發抖~~手腳發軟~~昏倒~~尖叫
他福大命大，一定平安無事，你不必(　)。##坐立不安~~著急~~擔心~~牽掛~~焦急~~擔憂##擔當~~擔負~~放心~~安心~~急忙

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
