﻿//=======================================================
// HTML5 Spelling 選單設定檔
//=======================================================


//
//上方標題
title = '單字高手';

//
//虛擬鍵盤是否使用數字(使用: true, 不使用: false)
number_enabled = false;

//
//上載成績單記錄的網址
logger_url = '';

//
//存放題庫檔的資料夾名稱(相對於目前的資料夾
datafolder = 'data';

//
//【選單中的選項清單】
//  一行一個選單項目
//  以半形逗號為【選項文字】與【題庫檔名】兩欄的分欄符號
//
menuItemLines = function(){/*--這一行請勿更改--
單字高手:動物(限時60秒),01.js
單字高手:樂器,02.js
單字高手:表情,03.js
單字高手:Google TTS,04-tts-google.js
單字高手:iSpeech TTS,05-tts-ispeech.js
-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);

