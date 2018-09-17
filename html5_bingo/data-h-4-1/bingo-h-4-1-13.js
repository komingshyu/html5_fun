//-----------------------------------------------------------
// BINGO 題庫設定檔
//-----------------------------------------------------------
seperator = ",";	//題目字串中，各欄位的分隔符號

//指定答案、題幹
answer_field_number = 0;		//答案在第幾欄位(由 0 起算)
question_field_number = 3;		//題幹在第幾欄位(由 0 起算)

//針對成語的額外欄位
phonics_field_number = 1;		//注音符號在第幾欄位(由 0 起算)
description_field_number = 2;	//解釋在第幾欄位(由 0 起算)

auto_replace_answer = "yes";	//是否自動將題幹中帶有的答案字串用括號取代

//
// 題庫
//
// 每對引號中的即是一個問題的設定
//
question_lines=new Array(
//------------------------------------下一行開始增加題目
  "矯揉造作,ㄐㄧㄠˇ　ㄖㄡˊ　ㄗㄠˋ　ㄗㄨㄛˋ,虛假做作不自然。,他的行為過於矯揉造作，警方推測他可能在說謊。"
, "花團錦簇,ㄏㄨㄚ　ㄊㄨㄢˊ　ㄐㄧㄣˇ　ㄘㄨˋ,形容五彩繽紛、繁華美麗的樣子。,這次的花卉展不僅種類繁多，而且花團錦簇，美不勝收。"
, "金玉其外，敗絮其中,ㄐㄧㄣ　ㄩˋ　ㄑㄧˊ　ㄨㄞˋ　，　ㄅㄞˋ　ㄒㄩˋ　ㄑㄧˊ　ㄓㄨㄥ,外表像金玉般華美，內裡卻全是破棉絮。形容外表美好，而內容破敗。,這些房子的外型美觀，但是進去裡面一看，卻是破爛不堪，「金玉其外，敗絮其中」，難怪沒有人願意購買。"
, "無懈可擊,ㄨˊ　ㄒㄧㄝˋ　ㄎㄜˇ　ㄐㄧˊ,沒有任何缺點可讓人指摘或挑剔。,這份報告的內容十分詳盡，簡直無懈可擊。"
, "氣急敗壞,ㄑㄧˋ　ㄐㄧˊ　ㄅㄞˋ　ㄏㄨㄞˋ,形容惱怒的樣子。,看他那氣急敗壞的樣子，想必事情相當嚴重。"
, "堆積如山,ㄉㄨㄟ　ㄐㄧ　ㄖㄨˊ　ㄕㄢ,形容很多。,這些堆積如山的工作，我們一定要在星期五前完成。"
, "垂簾聽政,ㄔㄨㄟˊ　ㄌㄧㄢˊ　ㄊㄧㄥˋ　ㄓㄥˋ,君主專制時代，皇帝年幼，由母后代位坐於簾後，以決斷國事。,慈禧太后的垂簾聽政，影響了晚清的歷史。"
, "玩物喪志,ㄨㄢˋ　ㄨˋ　ㄙㄤˋ　ㄓˋ,形容沉溺於某樣事物，因而荒廢了應做的事。,他要不是沉迷於網咖，玩物喪志，豈會荒廢了學業？"
, "爐火純青,ㄌㄨˊ　ㄏㄨㄛˇ　ㄔㄨㄣˊ　ㄑㄧㄥ,本指道家煉丹成功時，爐火火焰由紅色轉成純青色。後比喻學問、技能等達到精純完美的境地。,因為二十多年的經驗累積，他的技術已到了爐火純青的境界。"
, "聲淚俱下,ㄕㄥ　ㄌㄟˋ　ㄐㄩˋ　ㄒㄧㄚˋ,形容極度悲慟、激動。,他一說到傷心的地方，就忍不住聲淚俱下。"
, "沾沾自喜,ㄓㄢ　ㄓㄢ　ㄗˋ　ㄒㄧˇ,形容自得自滿的樣子。,得到高分不必沾沾自喜，謙虛才能更進步。"
//------------------------------------題庫結束,以下請勿修改
);