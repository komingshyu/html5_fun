//=======================================================
// HTML5 FUN 題庫設定檔 PK (國語同音字、多音字及形近字)
//=======================================================

//基本設定
//------------------------------
//共有幾個選項
//------------------------------
optionsTotal = 6;

//------------------------------
//一列有幾個選項(pk, 王牌投手用)
//------------------------------
optionColTotal = 3;

//------------------------------
//開始比賽前, 說明對話框的說明文字
//------------------------------
helpText = "請找正確的答案。大家都按GO以後開始PK";

//---------------------------------------------------
// [題庫]
//---------------------------------------------------

//------------------------------
//欄位分隔符號為兩個井字號(##)
//------------------------------
seperator = '##';

//------------------------------
//多個選項的分隔符號
//------------------------------
seperator2 = '~~';

// [題目設定]
//  一行一題, 
//  語文高手題庫支援同音字、多音字及形近字
//  題庫可以利用 [雄:HTML5:語文高手題庫&國字加注音產生器] 製作
//    https://gsyan888.blogspot.com/2022/11/html5-bopomofo-format-generator.html
//
//  底下的範例使用語文高手題庫:
//    1.每一行題庫以逗號當各欄位的分隔, 
//      第一欄位為標準答案,每個之間以一個半形空白隔開
//      第二欄位起為有加上注音的題目, 每組國字注音間以一個半形空白隔開
//
//      [例]
//	        選項 選項 選項,題幹,題幹,題幹,題幹
//
//	  2.形近字的選項都是國字
//	    多音字的選項都是注音
//      同音字的選項都是國字+注音
//
question_lines = function(){/*--這一行請勿更改--

伶 玲,ㄌㄧㄥˊ伶 ㄌㄧˋ俐,ㄍㄨ孤 ㄌㄧㄥˊ伶 ㄌㄧㄥˊ伶,ㄌㄧㄥˊ玲 ㄌㄨㄥˊ瓏
剩 乘,ㄕㄥˋ剩 ㄒㄧㄚˋ下,ㄕㄥˋ剩 ㄩˊ餘,ㄔㄥˊ乘 ㄔㄜ車,ㄔㄥˊ乘 ㄔㄨㄢˊ船
ㄍㄨㄢ ㄍㄨㄢˋ,ㄏㄨㄤˊ皇 ㄍㄨㄢ冠,ㄋㄨˋ怒 ㄈㄚˇ髮 ㄔㄨㄥ衝 ㄍㄨㄢ冠,ㄐㄧ雞 ㄍㄨㄢ冠,ㄧㄢˋ豔 ㄍㄨㄢˋ冠 ㄑㄩㄣˊ群 ㄈㄤ芳,ㄍㄨㄢˋ冠 ㄗㄨㄟˋ罪 ㄇㄧㄥˊ名,ㄖㄨㄛˋ弱 ㄍㄨㄢˋ冠,ㄍㄨㄢˋ冠 ㄐㄩㄣ軍
ㄅㄤ ㄅㄤˋ,ㄅㄤ傍 ㄨˇ午,ㄅㄤ傍 ㄨㄢˇ晚,ㄧ依 ㄕㄢ山 ㄅㄤˋ傍 ㄕㄨㄟˇ水
ㄇㄨˋ募 ㄇㄨˋ幕 ㄇㄨˋ慕 ㄇㄨˋ墓,ㄇㄨˋ募 ㄎㄨㄢˇ款,ㄇㄨˋ募 ㄐㄩㄢ捐,ㄐㄧㄝ揭 ㄇㄨˋ幕,ㄎㄞ開 ㄇㄨˋ幕,ㄒㄧㄢˋ羨 ㄇㄨˋ慕,ㄧㄤˇ仰 ㄇㄨˋ慕,ㄙㄠˇ掃 ㄇㄨˋ墓,ㄇㄨˋ墓 ㄅㄟ碑
ㄌㄧˋ勵 ㄌㄧˋ礪 ㄌㄧˋ厲,ㄍㄨˇ鼓 ㄌㄧˋ勵,ㄐㄧ激 ㄌㄧˋ勵,ㄉㄧˇ砥 ㄌㄧˋ礪,ㄌㄧˋ礪 ㄕˊ石,ㄧㄢˊ嚴 ㄌㄧˋ厲,ㄌㄧˋ厲 ㄏㄞˋ害

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);



/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	//語文高手使用 pk 系列內建的函數來隨選題目(指定類型為"語文高手")
	return tools.getOneQuestion(question_lines, "語文高手");
};

