title = '多音字';
question_lines = new Array(
  'ㄇㄧㄠˋ ㄇㄡˊ ㄇㄧㄡˋ ㄇㄨˋ,ㄇㄧㄠˋ繆 ㄕˋ氏 ㄗˇ子,ㄨㄟˋ未 ㄩˇ雨 ㄔㄡˊ綢 ㄇㄡˊ繆,ㄇㄧㄡˋ繆 ㄌㄨㄣˋ論,ㄇㄧㄡˋ繆 ㄕㄨㄛ說,ㄓㄠ昭 ㄇㄨˋ繆'
, 'ㄐㄧㄝˋ ㄐㄧˊ,ㄆㄧㄥˊ憑 ㄐㄧㄝˋ藉,ㄨㄟˋ慰 ㄐㄧㄝˋ藉,ㄐㄧㄝˋ藉 ㄎㄡˇ口,ㄅㄟ杯 ㄆㄢˊ盤 ㄌㄤˊ狼 ㄐㄧˊ藉'
, 'ㄓㄠ ㄔㄠˊ,ㄓㄠ朝 ㄧㄤˊ陽,ㄧㄡˇ有 ㄓㄠ朝 ㄧ一 ㄖˋ日,ㄓㄠ朝 ㄑㄧˋ氣 ㄆㄥˊ蓬,ㄔㄠˊ朝 ㄊㄧㄥˊ廷,ㄨㄤˊ王 ㄔㄠˊ朝,ㄔㄠˊ朝 ㄕㄥˋ聖,ㄔㄠˊ朝 ㄑㄧㄢˊ前'
);

/******************************************************************
 以下為程式碼, 不要更動
 ******************************************************************/
getOneQuestion = function(tools) {
	return tools.getOneQuestion(question_lines,'語文高手');
};