//=======================================================
// HTML5 FUN 題庫設定檔 UNSCRAMBLE
//=======================================================

//-------------------------------
//是否隨機出題
// true: 隨選題目  false: 按題庫順序出題
//-------------------------------
select_questions_in_random = true;

//-------------------------------
//隨機出題時, 由題庫選出幾題來作答
//  最多出幾題, 小於 0 就使用所有題目
//-------------------------------
number_of_questions = 10;

//-------------------------------
//字卡交換方式
//  0 : drag & drop    
//  1 : click
//-------------------------------
card_swap_mode = 0;

//-------------------------------
//是否使用「送出答案」的按鈕
//  true : 玩家按「送出答案」才核對答案
//  false : 卡片換位置後就自動對答案
//-------------------------------
enableSubmitButton = true;

//---------------------------------------------------
// [遊戲開始前的說明對話框設定]
//---------------------------------------------------

//-------------------------------
//說明對話框標題
//-------------------------------
help_title = '說明';	

//-------------------------------
//說明對話框說明內容
//-------------------------------
help_description = '請排出正確的答案。加油！';

//-------------------------------
//說明對話框按鈕上的文字
//-------------------------------
help_button_caption = '開始';


//---------------------------------------------------
// [音效控制]
//---------------------------------------------------

//-------------------------------
//是否播放語音
//-------------------------------
sound_enabled = true;

//-------------------------------
//是否自動播放語音 
//  true : 自動播放 / false : 按播放鈕才播放
//-------------------------------
sound_autoPlay = true;

//-------------------------------
//語音自動重播的次數
//-------------------------------
sound_autoPlayLoop = 3;

//-------------------------------
//語音自動重播,隔多久重播(單位秒)
//-------------------------------
sound_autoPlayDelay = 1;

//-------------------------------
//是否使用 TTS 的語音
//-------------------------------
tts_enabled = true;

//-------------------------------
//將題庫中的哪一個欄位的文字轉語音(由 0 起算)
//(如果有在第二欄以後指定聲音檔, 此參數就無效)
//-------------------------------
tts_is_at_index = 0;

//-------------------------------
//Google TTS 文字轉語音的設定
//-------------------------------

//----------
//TTS 語言代碼(英文: 'en-US' , 中文: 'zh-TW')
//----------
tts_language = 'en-US';

//----------
//TTS 語音的速度 0 ~ 1 (可用小數)
//----------
tts_speed = 0.3; 

//-------------------------------
//組合成 TTS 網址，非必要不動
//-------------------------------
tts_base_url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl='+tts_language+'&client=tw-ob&ttsspeed='+tts_speed+'&q=';


//---------------------------------------------------
// [題庫設定]
//---------------------------------------------------

//-------------------------------
//是否以字串長度來切割子字串,
//	如果設為 true, 題庫第一欄位會以長度來切割
//	如果設為 false (預設值), 題庫第一欄位會以 split_seperator 來切割
//-------------------------------
split_by_length = true;

//-------------------------------
//子字串多長(一張卡片幾個字)
//  當 split_by_length 為 true 時才有效 
//-------------------------------
split_by_length_substring_length = 1;	


//-------------------------------
//題庫分割符號設定
//-------------------------------
//先以 data_seperator 分為多欄
//再以 split_seperator 分割第一欄的長句

//----------
//欄位分隔符號
//----------
data_seperator = "##";	

//----------
//句子分割符號
//
//  以此符號將題目的句子切割為子字串當重組的字卡
//  (split_by_length 為 false 時才有效)
//----------
split_seperator = "~~";	

///-------------------------------
// 本範例中，單字間用空白來切割；
// 前七題用 Google TTS 發音
// 後三題指定了第二個欄位，使用 mp3 目錄中的語音檔
//-------------------------------

//
// [題庫]
//
// 一行一題, 
//
// 每一行由欄位分隔符號分為兩個欄位
//
// 第一欄為題目句子(可再利用符號或長度來分割)
//
// 第 2, 3, 4欄以後可指定使用以三種素材(也可不使用)
//   * 文字(例如英文題目的中譯)
//   * 音檔路徑
//   * 圖檔路徑
//
// 本範例以 [長度] 一個字母 來切割單字為字母卡
//
questionLines = function(){/*--這一行請勿更改--

beef noodles##牛肉麵
dumpling##水餃
papaya##木瓜
black tea##紅茶
iron egg##鐵蛋
flavor##口味
dollar##元
stomach##胃
guava##芭樂
rice##米飯
diet##飲食，節食
meat##肉類
fruit##水果
vegetable##蔬菜
junk food##垃圾食物
dinner##晚餐
stand##攤位
room##空間

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);

