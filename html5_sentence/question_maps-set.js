﻿//=======================================================
// HTML5 造句靈感產生器 題庫設定檔
//=======================================================

//------------------------------
//出題時是否要以亂數來選題
//  true :亂數出題   false :按題庫順序
//------------------------------
order_by_random = true;


//------------------------------
//抽選時是否要用翻牌的動畫
//  true :使用翻牌方式   false :使用抽換方式
//------------------------------
is_flip_mode = false;

//------------------------------
//呈現抽換動畫時每張的間隔時間
//時間單位為毫秒 ms (1/1000秒)
//------------------------------
shuffle_delay = 250;


//------------------------------
//計分器加總的目標分數
//目標分數達到時會出現任務完成的對話框
//------------------------------
score_goal = 0;


//---------------------------------------------------
//字卡的相關設定
//---------------------------------------------------

//邊框粗細
card_border = 0;

//邊框顏色
card_border_color = "#a52a2a";

//標題字的顏色
card_caption_color = "#886600";		

//第一面字的顏色
card_text_color = "#000000";		

//第二面字的顏色
card_back_text_color = "#6F4E37";	


//---------------------------------------------------
// 字體設定
//---------------------------------------------------

//卡片組上方標題的字體
card_caption_font = "標楷體 , BiauKai"; 

//卡片內文字的字體
card_label_font = "標楷體 , BiauKai";


//
// 是否使用翻卡音效 (true: 使用, false: 不使用)
//
sound_enable = true;


//題目中的聲音是否自動播放 (true: 自動播放, false: 按按鈕播放)
sound_player_autoplay = false;


//---------------------------------------------------
//【題庫設定】
//---------------------------------------------------

//欄位分隔符號為兩個井字號(##)
seperator = '##';


//素材媒體分隔符號為兩個毛毛蟲(~~)
seperator2 = '~~';

//
//【題目設定】
//
// 一行為一組卡片
// 最多可以放六組卡片
//
// 卡片組內以分隔符號分為多欄, 
// 第一欄為卡片組的標題文字, 
// 第二欄起為卡片組各卡的內容, 可以是文字或是圖片的路徑
//
// 卡片的內容可以混用多種素材，不同素材間用 seperator2(~~) 分隔
// ex. 圖片上再顯示文字( 小狗~~dog.png )
//
questionLines = function(){/*--這一行請勿更改--

臺灣行政區地圖(圖片來源:搜秀資源網)##maps/01.png~~南投縣.tts##maps/02.png~~基隆市.tts##maps/03.png~~台北市.tts##maps/04.png~~新北市.tts##maps/05.png~~桃園市.tts##maps/06.png~~新竹縣.tts##maps/07.png~~新竹市.tts##maps/08.png~~苗栗縣.tts##maps/09.png~~台中市.tts##maps/10.png~~彰化縣.tts##maps/11.png~~雲林縣.tts##maps/12.png~~嘉義縣.tts##maps/13.png~~嘉義市.tts##maps/14.png~~台南市.tts##maps/15.png~~高雄市.tts##maps/16.png~~屏東縣.tts##maps/17.png~~台東縣.tts##maps/18.png~~花蓮縣.tts##maps/19.png~~宜蘭縣.tts##maps/20.png~~澎湖縣.tts##maps/21.png~~金門縣.tts##maps/22.png~~連江縣馬祖列島.tts

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);


