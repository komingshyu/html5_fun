﻿//=======================================================
// HTML5 注音高手 主設定檔
//=======================================================

//------------------------------
//主選單設定檔的檔名
//------------------------------
menu_setting_filename = 'phonetics_quiz_menu_set.js';

//------------------------------
//上方的標題
//------------------------------
title = '注音高手';


//------------------------------
//出題時是否要以亂數來選題
//  true :亂數出題  fasle :按題庫順序
//------------------------------
order_by_random = true;

//------------------------------
//虛擬鍵盤是否要選國字
//  true :需自己選國字  fasle :自動選字
//------------------------------
character_select_enabled = true;

//------------------------------
//題目中是否顯示國字
//  true :顯示國字  fasle :國字變成框框
//------------------------------
show_character = true;

//------------------------------
//每一回出多少題給使用者做答
//  如果題庫題數不夠，則以題庫數為主
//------------------------------
questions_to_answer = 10;


//------------------------------
//接收作答記錄的程式網址
//------------------------------
//logger_url = 'https://script.google.com/macros/s/AKfycbyNdwRPFmCvA63NynyS_mFD60wNa10KPXSPVl3iYC5zBIbZGotM/exec';

//------------------------------
//要載入的注音國字對照表檔案名稱
//------------------------------
phonetics_table_filename = 'phonetab.js';


//------------------------------
//聲音設定
//------------------------------
//答對(設多個，可以隨機選)
sound_ok_mp3 = ['assets/good0.mp3', 'assets/good1.mp3', 'assets/good2.mp3', 'assets/good3.mp3'];

//答錯(設多個，可以隨機選)
sound_ng_mp3 = ['assets/bad0.mp3', 'assets/bad1.mp3', 'assets/bad2.mp3', 'assets/bad3.mp3'];

sound_click_mp3 = 'assets/sound_click.mp3';

