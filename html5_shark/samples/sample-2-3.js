﻿//=======================================================
// HTML5 FUN 題庫設定檔 PK (兩欄式題庫)
//=======================================================

//基本設定
//------------------------------
//共有幾個選項
//------------------------------
optionsTotal = 4;

//------------------------------
//一列有幾個選項(pk, 王牌投手用)
//------------------------------
optionColTotal = 3;

//------------------------------
//開始比賽前, 說明對話框的說明文字
//------------------------------
helpText = "請找出除法的算式等於哪一個分數。大家都按GO以後開始PK";


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
//  兩欄式題庫
//  由眾多題目中，自動產生選項
//
//  一行一題, 
//  每一題以欄位分隔符號(##)分隔為兩欄
//  欄位左起
//    第一欄為題幹
//    第二欄為答案
//
//  底下的範例
//	  1.採用兩欄式的題庫
//    2.有使用「分數」的表示式，可以由程式製作帶有「分數」的數學式
//
//	  [例]
//	     [1:3]   會顯示「三分之一」的數學符號
//	     [1:2:3] 會顯示「一又三分之二」的數學符號
//
question_lines = function(){/*--這一行請勿更改--

1÷3##[1:3]
2÷3##[2:3]
3÷3##[3:3]
1÷4##[1:4]
2÷4##[2:4]
3÷4##[3:4]
4÷4##[4:4]

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);



/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	return tools.getOneQuestion(question_lines, [seperator, seperator2]);
};

