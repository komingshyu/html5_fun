//-------------------------------
// html5 crossword 題庫設定檔
//-------------------------------


//-------------------------------
//用來偵測換行字元用的測試區塊
//請勿更動
//並且放在題庫設定區塊之前
//-------------------------------
//測試區塊開始
CR_LF_test = function(){/*--這一行請勿更改--
CR_LF testing block
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2,-9);
CR_LF_First_Pos = CR_LF_test.indexOf('_LF')-'CR_LF'.indexOf('_LF');
//測試區塊結束
//-------------------------------


//題庫欄位分隔符號
fields_seperator = ',';

//不同字間的筆畫分隔符號
words_seperator = ';';

//-------------------------------------------------
//語詞、提示(解釋)、例句及每個字要顯示的筆畫。
//-------------------------------------------------
//	每一題組使用多行，
//
//	每一行代表一個成語，
//		一行接一行，
//		空白行代表該題結束。
//
//	每一行可以有四個欄位，以fields_seperator(半形逗號)當欄位分隔。
//
//		第一個欄位 : 成語，
//		第二個欄位 : 解釋。(可以為空的)
//		第三個欄位 : 例句。(可以為空的)
//		第四個欄位 : 要顯示的筆畫
//					 不同字間的筆畫用words_seperator(分號)分隔，
//					 0 為不顯示任何筆畫。
//					 例如: 1-5 表示只出現1至5畫
//
idiom_clue_sentence_part = function(){/*--這一行請勿更改--
歡喜冤家,似相怨而實相愛的戀人或夫妻。,,1-18;1-6;0;1-10
賓至如歸,客人來到這裡就好像回到自己的家裡。,,1-3;1-6;0;1-10
賓主盡歡,主﹑客間相聚融洽，都能盡興﹑歡愉。,,1-3;1-5;1-9;1-18
守口如瓶,嘴巴像瓶口一樣封得緊密。比喻嚴守祕密。,,1-3;1-3;0;1-6


兵荒馬亂,形容戰爭所造成的混亂景象。,,0;1-4;1-10;1-12
兵家常事,很平常的事情。,,0;1-3;1-5;1-8
貴人多忘事,形容人記性不好，容易忘記事情。,,1-5;1;1-3;1-3;1-8
歡喜冤家,似相怨而實相愛的戀人或夫妻。,,1-18;1-3;1-10;1-3


棄若敝屣,像扔掉破鞋一樣的拋棄。後用以比喻毫不可惜。,,1-3;1-9;1-7;1-3
始亂終棄,男子誘惑女子做出違背禮法的行為，最後卻將她棄而不顧。,,1-3;1-12;1-6;1-3
始作俑者,最初製作人俑來殉葬的人。後世用以比喻首創惡例的人。,,1-3;1-2;1-9;1-4

-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);
