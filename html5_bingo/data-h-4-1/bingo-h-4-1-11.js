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
  "可喜可賀,ㄎㄜˇ　ㄒㄧˇ　ㄎㄜˇ　ㄏㄜˋ,非常值得高興與慶賀。,棒球隊剛獲得七連霸的勝利，真是可喜可賀的大事。"
, "苦口婆心,ㄎㄨˇ　ㄎㄡˇ　ㄆㄛˊ　ㄒㄧㄣ,以懇切真摯的態度，有耐心的勸告他人。,經過大家苦口婆心的勸說後，她終於決定出國留學。"
, "臨渴掘井,ㄌㄧㄣˊ　ㄎㄜˇ　ㄐㄩㄝˊ　ㄐㄧㄥˇ,口渴的時候，才想挖井取水。比喻事到臨頭才想辦法解決，為時已晚。,宜未雨綢繆，毋臨渴掘井。"
, "循序漸進,ㄒㄩㄣˊ　ㄒㄩˋ　ㄐㄧㄢˋ　ㄐㄧㄣˋ,按照一定的次序與步驟逐漸推進。,不論是學習或做任何事情，都要循序漸進，才不會適得其反。"
, "背道而馳,ㄅㄟˋ　ㄉㄠˋ　ㄦˊ　ㄔˊ,實際進行的方向和想要到達的目的完全相反。,你說要愛護地球，卻又如此浪費，這樣的做法簡直就是背道而馳。"
, "跑了和尚跑不了廟,ㄆㄠˇ　˙ㄌㄜ　ㄏㄜˊ　ㄕㄤˋ　ㄆㄠˇ　ㄅㄨˋ　ㄌㄧㄠˇ　ㄇㄧㄠˋ,比喻無論如何逃避某件事物，終究還是逃脫不了。,我知道大家都想回家休息，但是跑了和尚跑不了廟，我們還是要把這裡打掃乾淨。"
, "十八般武藝,ㄕˊ　ㄅㄚ　ㄅㄢ　ㄨˇ　ㄧˋ,比喻多種武藝或技能。,他從小學習各種才藝，如今已十八般武藝樣樣精通。"
, "問天買卦,ㄨㄣˋ　ㄊㄧㄢ　ㄇㄞˇ　ㄍㄨㄚˋ,向上天求問，占卜事情的吉凶。,以前的人會用問天買卦的方式，來判斷事情的好壞。"
, "連階累任,ㄌㄧㄢˊ　ㄐㄧㄝ　ㄌㄟˇ　ㄖㄣˋ,連階，接連升官。累任，連任。連階累任指仕途順暢。,大哥最近連階累任，約我們去唱歌慶祝。"
, "拱手讓人,ㄍㄨㄥˇ　ㄕㄡˇ　ㄖㄤˋ　ㄖㄣˊ,輕易的把東西讓給別人。,這次比賽中華隊表現失常，冠軍寶座只好拱手讓人。"
, "一般見識,ㄧ　ㄅㄢ　ㄐㄧㄢˋ　ㄕˋ,同樣的識見氣度。,她還是個小孩子，不要跟她一般見識了。"
, "橫生枝節,ㄏㄥˊ　ㄕㄥ　ㄓ　ㄐㄧㄝˊ,原指樹木旁生許多枝節。後比喻主要問題尚未解決，卻又意外引來一些其他問題。,關於這件事，我們還是少插嘴，避免橫生枝節，把事情弄複雜了。"
, "一帆風順,ㄧ　ㄈㄢˊ　ㄈㄥ　ㄕㄨㄣˋ,原指船掛滿帆，一路順風而行。後泛指旅途平安無阻或事情進展順利。,畢業典禮上，師長們祝福學長姐們未來都能一帆風順。"
//------------------------------------題庫結束,以下請勿修改
);