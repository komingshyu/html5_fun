title = '多音字';
question_lines = new Array(
  'ㄏㄜˋ ㄏㄜ,ㄏㄜˋ喝 ㄔˋ斥,ㄧㄠ吆 ㄏㄜˋ喝,ㄏㄜ喝 ㄕㄨㄟˇ水,ㄏㄜ喝 ㄔㄚˊ茶'
);

/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	return tools.getOneQuestion(question_lines,'語文高手');
};