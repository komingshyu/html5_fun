//=======================================================
// HTML5 Speaking 題庫設定檔
//=======================================================

//------------------------------
//出題時是否要以亂數來選題
//------------------------------
order_by_random = true;


//------------------------------
//預設的遊戲說明對話框的設定
//------------------------------
//標題字
helpDialogCaption = 'HTML5 FUN Speaking';

//說明文字(支援多行, 換行就加上「\n」
helpDialogDescription = '1.觀察畫面中央的提示。\n\n2.按麥克風的按鈕，變紅色麥克風後，以英文說出提示的單字，或是拼出單字。\n\n3.按 Check 鈕，送出答案。';

//按鈕上的文字
helpDialogButtonCaption = '開始';

//說明文字對齊的方式: left , right, center
helpDialogTextAlign = 'left';

//------------------------------
//遊戲模式按鈕上的文字
//------------------------------
gameMode_1_Caption = '看英文\n說英文';	//模式1:題庫第1欄為問題，也是提示
gameMode_2_Caption = '看英+中\n說英文';	//模式2:題庫第1欄為問題，第1欄和第2欄為提示
gameMode_3_Caption = '看中文\n說英文';	//模式3:題庫第1欄為問題，第2欄和第3欄為提示

//------------------------------
//語音辨識的參數
//------------------------------
speechRecognitionContinuous = false;	//是否一直保持監聽辨識的狀態
speechRecognitionLang = 'en-US'; 		//語音辨識的語言 英文: 'en-US' , 中文: 'zh-TW'
speechRecognitionInterimResults = true; //是否有辨識結果就立即語音回報

//------------------------------
//是否可用鍵盤輸入 (false:禁用, true:可用)
//------------------------------
enableKeyboardInput = false;

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
//    第一欄為英文
//    第二欄為中文
//    第三欄為圖片檔的路徑
//
questionLines = function(){/*--這一行請勿更改--
dog##小狗
cat##貓
cow##牛
mouse##老鼠
chicken##雞
monkey##猴子
tiger##老虎
goat##羊
horse##馬
hippo##河馬
-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
