﻿//=======================================================
// HTML5 FUN 題庫設定檔 BINGO
//=======================================================

//------------------------------
//指定題幹在第幾欄位(由 0 起算)
//------------------------------
question_field_number = 0;

//------------------------------
//指定答案在第幾欄位(由 0 起算)
//------------------------------
answer_field_number = 1;

//------------------------------
//是否自動將題幹中帶有的答案字串用括號取代
//------------------------------
auto_replace_answer = false;

//------------------------------
//一列有幾個選項
//------------------------------
optionColTotal = 3;

//------------------------------
//奇數個選項時，是否在正中央加一個星號
//------------------------------
enableBingoStar = false;

//------------------------------
//Google TTS 文字轉語音的設定
//------------------------------
//念[題目]時用的語言代碼:  'en-US' 'zh-TW'
//------------------------------
tts_language = 'zh-TW';

//語音的速度 0 ~ 1 (可用小數)
tts_speed = 0.75;  

//------------------------------
//題幹是文字題時，是否用 TTS 念出文字
//  true :念出文字   false :不使用此功能
//------------------------------
question_text_speaking_enabled = false;

//------------------------------
//念[答案]時，使用的 TTS 語言代碼
//語言代碼:  'en-US' 'zh-TW'
//------------------------------
tts_language_of_answer = 'zh-TW';

//------------------------------
//答案是文字題時，是否用 TTS 念出文字
//  true :念出文字   false :不使用此功能
//------------------------------
answer_text_speaking_enabled = true;

//
//---------------------------------------------------
//【題庫設定】
//---------------------------------------------------
//
//欄位分隔符號為兩個井字號(##)
seperator = '##';

//------------------------------
//多個選項的分隔符號
//------------------------------
seperator2 = '~~';

//
//[題目設定]
//
// 每一行即是一個問題的設定
// 以欄位分隔符號分為左(0), 右(1)兩欄
// 欄位內容可以是圖片, 一般文字, 分數格式, 或加注音格式文字
//
questionLines = function(){/*--這一行請勿更改--

1×1##1
1×2##2
1×3##3
1×4##4
1×5##5
1×6##6
1×7##7
1×8##8
1×9##9
1×10##10

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
