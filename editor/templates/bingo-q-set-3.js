﻿//=======================================================
// HTML5 FUN 題庫設定檔 BINGO (成語範例, 使用四欄)
//=======================================================

//------------------------------
//指定題幹在第幾欄位(由 0 起算)
//------------------------------
question_field_number = 3;

//------------------------------
//指定答案在第幾欄位(由 0 起算)
//------------------------------
answer_field_number = 0;

//------------------------------
//針對成語的額外欄位
//注音符號在第幾欄位(由 0 起算)
//------------------------------
phonics_field_number = 1;
	
//------------------------------
//針對成語的額外欄位
//解釋在第幾欄位(由 0 起算)
//------------------------------
description_field_number = 2;

//------------------------------
//是否自動將題幹中帶有的答案字串用括號取代
//------------------------------
auto_replace_answer = true;

//------------------------------
//一列有幾個選項
//------------------------------
optionColTotal = 3;

//------------------------------
//奇數個選項時，是否在正中央加一個星號
//------------------------------
enableBingoStar  = true;

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
answer_text_speaking_enabled = false;


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
// 本內容是以工具轉換的特殊格式，
// 要搭配其它選項設定使用
//
// 每一行即是一個成語
// 欄位由左而右, 依序為: 
// 成語(0), 注音(1), 解釋(2), 例句(3)
//
questionLines = function(){/*--這一行請勿更改--

忍氣吞聲##ㄖㄣˇ ㄑㄧˋ ㄊㄨㄣ ㄕㄥ##將怒氣克制下來，不敢發作。##對於上司的百般刁難，他只能忍氣吞聲，不敢爭辯。
平分秋色##ㄆㄧㄥˊ ㄈㄣ ㄑㄧㄡ ㄙㄜˋ##形容兩者一樣出色，不分高下。##這兩篇文章平分秋色，因此並列第一。
腳踏實地##ㄐㄧㄠˇ ㄊㄚˋ ㄕˊ ㄉㄧˋ##比喻做事務實穩健。##做事必須腳踏實地，千萬不可耍小聰明。
手忙腳亂##ㄕㄡˇ ㄇㄤˊ ㄐㄧㄠˇ ㄌㄨㄢˋ##形容做事慌亂，沒有條理。##生手開車，難免手忙腳亂。
兩敗俱傷##ㄌㄧㄤˇ ㄅㄞˋ ㄐㄩˋ ㄕㄤ##雙方相爭，同受損害。##這麼做只會弄得兩敗俱傷，對雙方都沒有好處。

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);

