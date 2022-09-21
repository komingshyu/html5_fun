﻿//-------------------------------
//Monster語詞大挑戰::題庫設定檔
//
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// 兩個斜線開頭的為註解、說明用的
// 自訂參數可以依說明，改成自己想要的內容
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//


//
//遊戲畫面上方的標題
//
title = "基礎篇";

//
//題庫設定
//

//欄位分隔符號
//
//題幹、正確答案和錯的選項之間的欄位分隔符號(共分為三個欄位)
question_O_X_seperator = "##";

//多個答案之間的分隔符號(對、錯都用同樣的符號)
options_seperator = ",";

//題幹文字中，找這個符號的，就置換掉(也就是填空的位置)
blank_pattern = "◎";

//題幹填空的地方，置換成底下的字串
blank_replacement = "(　)";

//題庫內容
//
// 一行一題
//
// 每一行依分隔符號 ## (question_O_X_seperator) 分為三欄
//
//  三欄由左而右，分別是：題幹、正確答案和錯的選項
//
//  正確答案和錯的選項可以有多個，用 options_seperator 分隔
//
question_lines = function(){/*--這一行請勿更改--

他的惡作劇，讓大家◎。##很難過,很不高興,很生氣,很討厭,受不了,發火,發狂##開心,佩服,喜歡,喜愛,感動
被冤枉成小偷，小明氣得◎。##發火,發狂,不上學,不說話,跳起來,臉都紅了,離家出走,吃不下飯,睡不著覺,發瘋,很難過,大哭,要命,不得了##開心,佩服,喜歡,喜愛,感動,笑呵呵,笑個不停,笑哈哈
你不該為了別人的一點小過失就氣得◎。##翹起嘴巴,發火,發脾氣,哇哇叫,罵人,不原諒他,呱呱大叫,要命,不理人,打人,說不出話,亂摔東西##快樂,高興,笑嘻嘻,快快樂樂,微笑,笑呵呵,開心,喜氣洋洋
看她當時◎的樣子，一定非常生氣。##嘟著嘴巴,瞪人,大聲說話,亂摔東西,哇哇大叫,臉都紅了,要打人##快樂,高興,笑嘻嘻,快快樂樂,微笑,笑呵呵,開心,喜氣洋洋
爸爸生氣時，◎的樣子真可怕。##眼睛瞪大,打人,罵人,兇猛,臉紅,大聲叫罵,亂摔東西##開心,發呆,佩服,驚訝,喜歡,喜愛,感動
大家都是好朋友，不要為了小事而◎。##生氣,打架,吵架,大叫,不理他,大吵大鬧,傷和氣,傷感情##開心,佩服,喜歡,喜愛,感動
他中了第一特獎，高興得◎。##不得了,跳來跳去,笑呵呵,笑個不停,睡不著,跳起來,哭出來,快昏倒,笑哈哈,掉下眼淚##很難過,很生氣,太生氣了,很討厭,發火,佩服,喜歡,喜愛,感動
他得到奧運金牌，高興得◎。##不得了,跳來跳去,呱呱大叫,笑呵呵,笑個不停,睡不著,跳起來,哭出來,快昏倒,笑哈哈,掉下眼淚##發火,發脾氣,罵人,想撞牆,很難過,很生氣,很討厭,佩服,喜歡,喜愛,感動
上台領了冠軍獎杯後，他◎的走回來。##快樂,高興,笑嘻嘻,微笑,笑呵呵,開心,蹦蹦跳跳,喜氣洋洋,神氣,愉快,興奮##發火,發脾氣,想撞牆,很難過,很生氣,很討厭,佩服,喜歡,喜愛,感動
考試得了第一名，他◎的走回家。##高興,笑嘻嘻,快快樂樂,微笑,笑呵呵,開心,蹦蹦跳跳,喜氣洋洋,神氣,愉快,興奮##發火,發脾氣,想撞牆,很難過,很生氣,很討厭,佩服,喜歡,喜愛,感動
我知道數學考試得了一百分後，不由得◎。##大叫起來,笑了起來,跳起來,笑嘻嘻,笑哈哈,高興起來,微笑起來,開心起來##臉色變青,發抖,手腳發軟
大自然的優美景色，叫人◎。##開心,驚訝,喜歡,喜愛,感動,感覺舒暢##臉色變青,發抖,手腳發軟,昏倒,尖叫
小美在鬼屋中被嚇得◎。##不得了,昏倒,哇哇大叫,哭了,哭得要死,尖叫,跑回家去,大哭大叫,臉色變青,發抖,手腳發軟##笑呵呵,笑個不停,翹起嘴巴,發火,發脾氣,罵人
好恐怖的電影啊!看得我◎。##大叫起來,躲起來,好緊張,發抖,好害怕,想回家,全身發軟,身體發抖,睡不著覺,哇哇大叫,哭了,尖叫,臉色變青##笑呵呵,笑個不停,翹起嘴巴,發火,發脾氣,罵人
說了謊卻被揭穿，小美羞得◎。##不得了,臉都紅了,不敢說話,哭出來了,臉紅,不敢見人,跑走了,躲起來,快哭了##很開心,很高興,很感謝,很感動,十分感動,萬分感謝
當我有困難時，他救助我，使我◎。##很感謝,很感動,十分感動,萬分感謝,十分感激##傷心,忍不住,難過,悲傷,生氣,大聲,悶悶不樂,後悔
考試常拿第一名的小明聯考落榜，傷心得◎。##哭了,哭起來,想撞牆,要命,流眼淚,要死,不得了,躲起來,吃不下飯,睡不著覺##笑個不停,很高興,好開心,笑破肚皮,哈哈大笑,笑呵呵
為了這點小事傷心得◎，太不像話了。##哭起來,想撞牆,要命,流眼淚,要死,不得了,躲起來,吃不下飯,睡不著覺##發火,佩服,喜歡,喜愛,感動,發抖,手腳發軟
家裡被偷損失慘重，她◎的哭了起來!##傷心,忍不住,難過,悲傷,生氣,大聲,悶悶不樂##笑個不停,很高興,好開心,笑破肚皮,哈哈大笑,笑呵呵
小美的爸爸病重去世，她◎的哭了起來!##傷心,忍不住,難過,悲傷,大聲,悶悶不樂##發火,佩服,喜歡,喜愛,感動,生氣
看他近來◎的樣子，不知為了何事煩心？##很煩惱,臉色不好,都不吃飯,蹙著眉頭,苦瓜臉,發呆,為難,不高興,愁眉苦臉##笑呵呵,笑個不停,不敢說話,笑出來了,臉紅
小明的媽媽病重垂危，所以他近來◎。##很煩惱,不想吃飯,不想上學,很傷心,很難過,悶悶不樂,吃不下飯,睡不著覺##笑呵呵,笑個不停,笑出來了,很感謝,很感動,十分感動,萬分感謝
學校失火，學生個個◎，不知如何是好!##跑來跑去,跑出來,很緊張,手忙腳亂,很害怕,嚇哭了##笑呵呵,笑個不停,笑出來了,很感謝,很感動,十分感動,萬分感謝
遇到了危險就◎，怎能做大事？##慌作一團,團團轉,手忙腳亂,心慌意亂,失了主意,慌慌張張,六神無主,目瞪口呆##無地自容,自命不凡,自高自大,看不起人,目空一切,目中無人
遇到危險要◎，不可慌張。##鎮定,鎮靜,小心謹慎,慎重思考,穩定心情,隨機應變,小心處理,從容不迫##鎮痛,鎮壓,著急,害怕,哇哇大叫
弟弟的笑話使得全家◎。##笑個不停,很高興,好開心,笑破肚皮,哈哈大笑,笑呵呵##大聲說話,亂摔東西,哇哇大叫,像要打人,好緊張,發抖,昏倒,好害怕,全身發軟,身體發抖
已經有這麼好的條件了，你還要◎什麼呢？##考慮,猶豫,思量,斟酌,研究,要求,等待##開心,佩服,喜歡,喜愛,感動,討厭,過得去
因設備不好，所以招待不周，請大家◎。##包涵,原諒,將就,海涵,忍耐,遷就##開心,佩服,喜歡,喜愛,感動,討厭,抱歉,對不起,不安,慚愧,過得去,過意不去
因設備不好，所以招待不周，十分◎。##抱歉,對不起,不安,慚愧,不好意思,過意不去##包涵,原諒,將就,海涵,忍耐,遷就,隨遇而安
不能為您把這件事辦好，實在◎。##抱歉,對不起,不安,慚愧,不好意思,過意不去##包涵,原諒,將就,海涵,忍耐,遷就,隨遇而安
這件過失並不是你的錯，所以你不必◎。##自責,抱歉,不安,慚愧,不好意思,過意不去##包涵,原諒,將就,海涵,忍耐,遷就,隨遇而安,自愛,自欺
強中自有強中手，我們不可◎。##自命不凡,自負,自豪,高傲自大,看不起人,目空一切,目中無人##自謙,自愛,自責,自制,自覺,自發
這件事情我要請示校長，我不敢◎。##自作主張,自作決定,獨斷獨行,擅自決定##自謙,自愛,自責,自制,自覺,海涵,忍耐
這個問題我◎，就是想不到好法子!##再三思考,想了好久,想了又想,左思右想,前思後想,絞盡腦汁##恍然大悟,想不開,十分想念,隨遇而安
天這麼黑了，爸爸還不回家，真叫人◎。##坐立不安,著急,擔心,牽掛,焦急,不放心,擔憂##擔當,擔負,放心,安心,急忙,不安全
他福大命大，一定平安無事，你不必◎。##坐立不安,著急,擔心,牽掛,焦急,擔憂##擔當,擔負,放心,安心,急忙,不安全
看書時應該◎，才不會浪費時間!##專心,用心,全心全意,專心一致,不分心##分心,一心一德,一心二用,心不在焉,心神不定,走馬看花,粗心大意

-----*/}.toString().replace(/\r/g,"").slice("function(){/*--這一行請勿更改--".length+1,-9);
