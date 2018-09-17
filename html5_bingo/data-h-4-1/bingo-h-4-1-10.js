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
  "陽奉陰違,ㄧㄤˊ　ㄈㄥˋ　ㄧㄣ　ㄨㄟˊ,表面上裝做遵守奉行，私底下卻違反而不照辦。,被交代任務時，必須確實執行，不可陽奉陰違。"
, "持之以恆,ㄔˊ　ㄓ　ㄧˇ　ㄏㄥˊ,有恆心的堅持到底。,做任何事都要持之以恆，不可半途而廢。"
, "普天同慶,ㄆㄨˇ　ㄊㄧㄢ　ㄊㄨㄥˊ　ㄑㄧㄥˋ,全天下的人共同慶祝。,在這普天同慶的節日裡，人們都喜氣洋洋。"
, "不足掛齒,ㄅㄨˋ　ㄗㄨˊ　ㄍㄨㄚˋ　ㄔˇ,指人或事輕微，不值得一提。,我所做的只是一點小事，不足掛齒，你不必放在心上。"
, "寒氣襲人,ㄏㄢˊ　ㄑㄧˋ　ㄒㄧˊ　ㄖㄣˊ,寒冷之氣侵襲人身。形容極為寒冷。,這幾天突然寒氣襲人，外出記得多穿件外套，以免感冒了。"
, "崇山峻嶺,ㄔㄨㄥˊ　ㄕㄢ　ㄐㄩㄣˋ　ㄌㄧㄥˇ,高大陡峭的山嶺。,媽媽喜歡崇山峻嶺的景色，所以常到這裡旅遊。"
, "一日不見，如隔三秋,ㄧ　ㄖˋ　ㄅㄨˋ　ㄐㄧㄢˋ　，　ㄖㄨˊ　ㄍㄜˊ　ㄙㄢ　ㄑㄧㄡ,一天不見面，就好像隔了三年一樣。形容思念殷切。,她們的感情深厚，畢業後，一日不見，如隔三秋，所以放假就常膩在一起。"
, "共襄盛舉,ㄍㄨㄥˋ　ㄒㄧㄤ　ㄕㄥˋ　ㄐㄩˇ,大家共同贊助，合力完成某事。,捐血一袋，救人一命，希望大家共襄盛舉。"
, "自強不息,ㄗˋ　ㄑㄧㄤˊ　ㄅㄨˋ　ㄒㄧˊ,自己不斷努力向上，永不懈怠。,他雖然生活貧困，卻能自強不息，努力不懈。"
, "冰前颳雪,ㄅㄧㄥ　ㄑㄧㄢˊ　ㄍㄨㄚ　ㄒㄩㄝˇ,冷上加冷。比喻使已經不大好的情形變得更糟。,他已經很難過了，你不要再冰前颳雪，火上加油了。"
, "巧婦難為無米之炊,ㄑㄧㄠˇ　ㄈㄨˋ　ㄋㄢˊ　ㄨㄟˊ　ㄨˊ　ㄇㄧˇ　ㄓ　ㄔㄨㄟ,靈巧能幹的婦女如果沒米也做不出飯來。比喻做事缺乏必要條件難以完成。,在缺人的情況下，一天之內要完成這件事，實在是巧婦難為無米之炊。"
, "吳下阿蒙,ㄨˊ　ㄒㄧㄚˋ　ㄚˋ　ㄇㄥˊ,比喻學識淺陋的人。,才一年不見，他的眼界變得如此寬闊，已非當年的吳下阿蒙可比。"
, "穩如泰山,ㄨㄣˇ　ㄖㄨˊ　ㄊㄞˋ　ㄕㄢ,比喻像泰山一樣穩定牢固，不可動搖。,王羲之在書法界的地位穩如泰山，至今還是大家學習的典範。"
, "福生有基，禍生有胎,ㄈㄨˊ　ㄕㄥ　ㄧㄡˇ　ㄐㄧ　，　ㄏㄨㄛˋ　ㄕㄥ　ㄧㄡˇ　ㄊㄞ,福禍的產生都有它的原因。,「福生有基，禍生有胎」，每件事都有其因果關係。"
//------------------------------------題庫結束,以下請勿修改
);