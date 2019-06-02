//-----------------------------------------------------------
// SCRAMBLE 選單設定檔
//-----------------------------------------------------------

menu_title='English1200';		//選單標題

//
// 選單設定
//
// 每一對引號中的為一個選單
// 以半形的逗號當分隔符號，每一選單可切為兩個欄位
//   第一個欄位：選單選項名稱
//   第二個欄位：按下該選項以後會載入的題庫設定檔的路徑
//
//   第三個欄位：類型，
//   			 如果未指定，為題庫檔案;
//   			 如果設為 menu ，表示為選單設定檔案
//   			 最後一行的設定即為設了 menu 的範例
//
menu_items = new Array(
//------------------------------------下一行開始為選單增加項目
 'English1200單字,english1200-all-set.js'
,'English1200:句子,english1200-all-set-sentence.js'
,'設定範例(TTS發音),questions_set_tts.js'
,'設定範例:句子二選一,questions_set_sentence.js'
//------------------------------------選單選項結束,以下請勿修改
);
