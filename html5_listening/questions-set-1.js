﻿//=======================================================
// HTML5 Listening 聽音辨字六選一題庫設定檔
//=======================================================

//---------------------------------
//上方看板的標題字
//---------------------------------
title = '2022版測試';

//---------------------------------
//是否以亂數抽題 true:亂數抽題 false:題庫依序使用
//---------------------------------
random_order_enabled = true;

//---------------------------------
//出幾題作答
//---------------------------------
questionsToAnswer = 6;

//---------------------------------
//每題出現幾個選項(最多六個)
//---------------------------------
options_total = 6;

//---------------------------------
//選項一橫排幾個選項(橫拿時; 直拿時會行列交換)
//---------------------------------
col = 3;

//---------------------------------
//幾秒後自動進入下一題 
//---------------------------------
autoGotoNext = 1;

//---------------------------------
//是否顯示圖片下方的文字 true:顯示 false:空白
//---------------------------------
show_text = true;

//---------------------------------
//圖片區文字的第一個字是否要變色 true:變色 false:不變色
//---------------------------------
first_letter_change_color = true;

//---------------------------------
//圖片區文字的字形名稱
//---------------------------------
fontname = 'Comic Sans MS';

//---------------------------------
//圖片下方標籤文字的字形名稱
//---------------------------------
label_fontname = 'Comic Sans MS';

//---------------------------------
//隱藏工具列 true:隱藏 false:顯示
//---------------------------------
hideTools = false;

//---------------------------------
//語音播畢隱藏播放扭 true:隱藏 false:顯示
//---------------------------------
autoHideSpeaker = true;

//---------------------------------
//答對時如何加分，每答錯一次，就往右遞減
//---------------------------------
scoreToAdd = '10,8,6,4,2,0';

//---------------------------------
//圖片檔的預設目錄(可不使用,如果檔名是網址的，會自動失效)
//---------------------------------
images_folder = 'images';

//---------------------------------
//語音檔的預設目錄(可不使用,如果檔名是網址的，會自動失效)
//---------------------------------
mp3_folder = 'mp3';

//圖片檔的預設附檔名(未指定圖片檔時附加在文字後組成檔名)
image_file_extension = '.png';

//---------------------------------
//圖片載入幾秒逾時不候(超過時間變文字)
//---------------------------------
imageLoadingTimeout = 1.5;

//---------------------------------
//聲音載入幾秒逾時不候(超過時間用合成語音)
//---------------------------------
audioLoadingTimeout = 2;

//---------------------------------
//記錄作答情形程式的 URL (可不使用)
//---------------------------------
logger_url = '';

//---------------------------------
//媒體(圖片、聲音)檔名清單
//這是 Flash 版題庫的用法，
//建議使用底下【題庫設定】區塊中的方法
//不然，用了此參數，後面新版用的 questionLines 就會失效
//---------------------------------
//file_list = 'sample_images_list.js';


//----------------
//TTS 文字轉語音的設定
//----------------

//TTS 語言代碼(英文: 'en-US' , 中文: 'zh-TW')
tts_language = 'en-US';

//TTS 語音的速度 0 ~ 1 (可用小數)
tts_speed = 0.3;  


//---------------------------------------------------
//【題庫設定】
//---------------------------------------------------
//
//欄位分隔符號為兩個井字號(##)
seperator = '##';


//
//【題目設定】
//  一行一題, 
//  欄位左起
//    第一欄為問題(純文字，例如: cat)
//    第二欄為圖片檔名
//          (未指定時,會試著將問題加上圖片副檔名後載入)
//    第三欄為語音檔名(未指定時,用合成語音)
//
questionLines = function(){/*--這一行請勿更改--

小ㄒㄧㄠˇ 小ㄒㄧㄠˇ 鴨ㄧㄚ 子˙ㄗ
貓ㄇㄠ 咪ㄇㄧ
貓咪有圖的##https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg

egg.mp3
monkey.png
dog##https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760__340.jpg

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
