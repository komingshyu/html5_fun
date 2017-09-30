﻿title = "量詞找名詞入門級";
question_type = 1;	//量詞在第一個欄位, 沒有數, 由程式加上數
question_lines = new Array(
  "行;眼淚,字,詩;襪子,新聞,眼睛,鳥;用於排列成行的東西。"
, "盤;棋,青菜,麵,豆腐;汽水,牛奶,牛;用於可裝在盤子裡的東西。"
, "位;女士,紳士,淑女,代表,僑胞,大師;學校,醫院,大學,童詩,兒歌,老牛,猴子,老鼠,青蛙;用於人（含尊敬的意思）。"
, "首;童詩,兒歌,歌曲,童謠;鏡子,國旗,新聞,故事,雜誌,報紙;詩詞、歌曲的數量計算單位。"
, "把;刀,茶壺,米,糖,年紀,傘;路,文章,客人,老師,魚,鳥;用於有把手的器具，或一隻手抓起的數量，或用於某些抽象的事物如:再加一把勁。"
, "枚;郵票,硬幣,獎章;鏡子,帽子,蚊帳,人,狗;相當於「個」，多用於形體較小的物體。"
, "床;被褥,鋪蓋;大師,兒歌,人,帳篷,帽子;用於被褥等。"
, "頂;帽子,蚊帳,帳篷,轎子;衣服,鞋子,襪子,傘;用於某些有頂的東西。"
, "副;眼鏡,手套,對聯,笑臉;手錶,紙,學生,書包;用於成套的東西或用於臉部的表情。"
, "尾;魚;鳥,狗,貓,豬;計算魚的數量。"
, "隊;人馬,學生,軍車,軍人;小草,鋼琴,時間,高樓,水庫,土司;用於排列成群的人。"
, "群;馬,牛,羊,狗,鴨子,人,猴子,螞蟻;草,花,門,石頭,燈;用於成群的人、動物或事物。"
, "支;歌曲,樂曲,筆,箭,軍隊,槍;豬,人,石頭,鳥;用於隊伍、歌曲或樂曲、成杆狀的東西。"
, "冊;書;花,人,毛巾,石頭;用於書藉。"
, "面;國旗,牆壁,鏡子,玻璃;大樹,小草,白菜,學生,老師,客人;用於扁平的東西。"
, "顆;牙齒,星星,子彈,眼珠,珍珠,魚丸;白雲,禮物,鮮花,學生,老師,客人,香蕉,鳥龜;多用於成顆粒狀的東西。"
, "部;汽車,機車,電腦,字典,電影,機器;飛機,火車,房子,人馬;通常是用於字典、電影或一些機器類的東西。"
, "塊;餅乾,玻璃,抹布,豆腐,豬肉,香皂,蛋糕;沙發,毛筆,書包,長尺,黃牛;用於計算成塊狀或片狀的東西。"
, "份;禮物,雜誌,報紙,點心,收入;醫院,工廠,銀行,高山,城市,水庫,大橋,高樓;用於搭配成組的東西或報刊、文件等。"
, "束;鮮花,玫瑰,菊花,光線;學生,老師,客人,蚊子,蝴蝶,蜘蛛,螞蟻,山羊;用於捆在一起或聚成一條的東西。"
, "串;珍珠,香蕉,葡萄,項鍊;醫院,工廠,銀行,高山,城市,水庫,大橋,高樓;用於連貫起的東西。"
, "則;新聞,故事,笑話,寓言;飛機,梯子,鋼琴,大門,窗戶,大廈,兒歌,童詩;用於分項或自成段落的文字的條數。"
, "架;飛機,梯子,鋼琴;大門,窗戶,醫院,工廠,銀行,眼鏡,汽車,機車,公車;用於有支架的機械。樂器或支架狀的東西。"
, "扇;大門,窗戶,屏風;醫院,工廠,銀行,高山,城市,水庫,大橋,高樓;用於門窗等。"
, "家;醫院,工廠,銀行,老店,商店;高山,城市,水庫,大橋,高樓,國旗,客人;用來計算家庭或企業、事業、商業等經營單位。"
, "座;高山,城市,水庫,大橋,高樓,廟,天橋,燈塔;大樹,小草,白菜,國旗,牆璧,鏡子,學生,老師,客人;多用於較大的固定物體。"
, "班;火車,飛機,人馬,公車,學生;耳朵,郵票,蒼蠅,種子,子彈,工廠,銀行;用於人群或用於定時開動的交通工具。"
, "陣;強風,大雨,掌聲,車潮;桌子,廚房,孩子,命令,車子,新聞;表示事情或動作經過的段落。"
, "棟;房子,大樓,別墅;火車,山路,大橋,銀行;計算房屋的單位。"
, "滴;水滴,汗水,眼淚,油,汽水;貓,小花,黃牛,牙齒;液體一點叫一滴。如一滴眼淚。"
, "線;希望,光明,生機,天;文章,蚊香,心事,情況,顏色,長尺;用於抽象事物，數量限用「一」，表示很少的意思。"
, "篇;文章,散文,社論,小說,日記;意見,小事,東西,鮮花,頭髮,強盜;用於文章、紙張、書頁(一篇是兩頁)等。"
, "碗;飯,麵,蒸蛋,湯,點心,豆漿;土司,牛,鳥;用於可裝在碗裡的東西。"
, "袋;米,石子,砂子,水泥,零錢;書包,白雲,毛筆,鉛筆;用於裝入袋中的東西。"
, "對;鴛鴦,兄弟,姊妹,耳環,眼睛;石子,書包,學生,糖果,白菜;用於成雙的東西。"
, "具;電話,棺材,屍體;人,馬,鳥,鏡子,杯子;用於棺材、屍體和某些器物。"
, "場;電影,夢,雨,球賽;布,飯,麵,新月,流水;用於一件事情的經過，或用於文娛體育活動、戲劇、考試等。"
, "批;新書,學生,布料,貨物,軍火;馬,夢,雨,球賽,湯;用於大宗的貨物或多數的人。"
, "堆;垃圾,書,紙,砂,土,石子,磚塊,積木;狗,豬,羊,貓,小船;用於成堆的東西或成群的人。如：圍了一堆人、生了幾堆火、積了一堆垃圾。"
, "組;工具,電池,傢具;狗,豬,羊,貓,石頭;表示成套的事物。"
, "發;子彈,炮彈;狗,書,筆,電影;用於槍彈、炮彈。"
, "夥;人,匪徒;狗,豬,貓,螞蟻,米;用於人群。"
, "樣;點心,禮物,工作,小菜;狗,皮球,書,筆,豬;表示事物的種類。"
, "擔;水,米,菜,榖;牛,羊,頭髮,車,傢具,雲;用於成擔的東西。"
);