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

//說明文字(支援多行, 換行就加上「\n」)
helpDialogDescription = '1.觀察畫面中央的提示。\n\n2.按麥克風的按鈕，看到 GO 後，以 [中文] 說出提示的字句。\n\n3.錯了就再重覆步驟2 (可按上方標題板聽示範語音)。';


//按鈕上的文字
helpDialogButtonCaption = '開始';

//說明文字對齊的方式: left , right, center
helpDialogTextAlign = 'left';

//------------------------------
//遊戲模式按鈕上的文字
//------------------------------
gameMode_1_Caption = '看中文\n說中文';	//模式1:題庫第1欄為問題，也是提示
gameMode_1_Caption = '看中+英\n說中文';	//模式2:題庫第1欄為問題，第1欄和第2欄為提示
gameMode_2_Caption = '看英文\n說中文';	//模式3:題庫第1欄為問題，第2欄和第3欄為提示

//------------------------------
//語音辨識的參數
//------------------------------
speechRecognitionContinuous = false;	//是否一直保持監聽辨識的狀態
speechRecognitionLang = 'zh-TW'; 		//語音辨識的語言 英文: 'en-US' , 中文: 'zh-TW'
speechRecognitionInterimResults = true; //是否有辨識結果就立即語音回報

//------------------------------
//語音播放速度的參數
//------------------------------
//使用大於 0 的數字。例如:1.0 正常, 0.75 較慢速, 0.5 慢速, 1.5 快速, 2.0 兩倍速
//設多個時，會依序並循環使用，每播放一次，就跳下一個數字，最後再從頭開始。
ttsPlaybackRate = [1.0, 0.75, 0.5]; 

//------------------------------
//是否可用鍵盤輸入 (false:禁用, true:可用)
//------------------------------
enableKeyboardInput = false;

//
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
//    第一欄為問題(中文不要加標點符號, 注意同音字 ex.他/她/它/牠...)
//    第二欄為提示的文字(英文)
//    第三欄為提示圖片檔的路徑
//
questionLines = function(){/*--這一行請勿更改--

怎麼了##What's wrong?
他的腳受傷了##His foot hurts.
我頭痛##I have a headache.

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
