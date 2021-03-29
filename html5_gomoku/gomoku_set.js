﻿//=============================================
// html5 gomoku 漢字五子棋設定檔
//=============================================
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


//=============================================
// 使用者自訂參數開始
//=============================================

//標題，會出現在一進入程式的畫面
//當題目沒有設定題幹時，最上方就改顯示此內容
title = "漢字五子棋";

//方格中文字的字體
font_family = "標楷體";

//填字的方式 (0: 按順序, 1: 以亂數隨選文字
fill_square_with_random_text = 1;

//計時器的秒數
timer_counter = 30;

//幾個連線算贏 (0: 人工斷輸贏, 2以上由程式斷輸贏)
number_to_be_counted_as_a_win = 5;

//是否在格子內標示數字 (0: 不標示 , 1: 標示數字)
show_number = 0;

//橫向最多幾格
col_total = 8;

//縱向最多幾格
row_total = 8;


//-----------------------------------
//棋盤格子中的文字
//
//如果全部的文字只有一行, 表示一格一個字
//如果想一格一個語詞, 就一個語詞一行
//
//-----------------------------------
text_of_board = function(){/*--這一行請勿更改--
五子棋
則
咸信是流傳於
古
中
國
的
傳統
棋種
之一
至今
仍在
民間
廣泛
流傳
規則
相當
簡單
以上
的
文字
來自於
維基百科
-----*/}.toString().slice("function(){/*--這一行請勿更改--".length+2+(typeof(CR_LF_First_Pos)!='undefined' ? CR_LF_First_Pos:0),-9);



//
//--------------------------------------------------------------
// MP3 base64 encode tools
// 		https://codepen.io/xewl/pen/NjyRJx
//
//音效
sound_file = 'sound_ok.mp3';
sound_mp3 = 'data:audio/mp3;base64,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4cqO0/7/QQqyqw9/fy5/OYd5z/yy1jv+7/u//7mwAQA+AA5MBE02V+H/d1mkI4+96pfjMOyaW1IftUNypHHbZ9AyfRVAUxaAQ2lNAzIB4BAXBSmalkhryqPT7OTAMEzB4DzBcATCOpDoUVDBADW7K5pK8Skb0PNAAhA8AYEAGDEB4GJwswGpqR4GLgTgGEcTAGNkLglEBgHIgZZNlR//6C6kW7V0NloK2U+tnTUYpfBmF/F7HyxqtjohjijNeuLQ9wX8uK2ZLwFY8nc30auc471Xy1cXf8PWPmBEkt8SSV20n271n/+OzUb/42DEzEaEakV+7Z9t9X5cHmvI4blZ4EznAVmlKhbnJBno8cUgNEeanVNfvezJQpXNLkjVI4o5zP9kOc4nZ+HixIWcJb15ZPY41XCO5N/Wsf5r76/1n09PE0notjlgABfEl9EiVTdS1ATXn7rXatNWilqtI3k5S/S9ywl1FBKjxbMxwmRADUzqKRYT+vzqRmC3TL1CNZBkTRy7nOWN9p70fdhg77EwDOhsgDBsweGlEl7TvLHXKx+dGP/8iuSos50Y6M+7f39xKXUtbD0Zv/ZRUi/S+mgerf46ENuBjfJqPwo7mTIGSsrvf9XDMW4+kGCzsJ1ERREunckWJDqBcVFHCI8dX+0TVN70PFooypYdMxkmjLYYYAAHSxYNdJyXWZbEqeYlWEPuQ79STR+DICe1l7oOKydNBN9H/+NAxN4ufBZmPuCRiODAGBAHGBYlmJAuGSYNGDwABgRrBJcIeJ+o5EQChUAUHAIA5YAMwHDQxlU41NF4wmA4QhOAQOBQSmAYAiADi0oQFIkF5gABAwCoQHxh4JRhut5yQwIsAo8WQQHgIB9BpMAEgCkov1HNB9Hir9Askv8lbA0lkmKqjJTBJQHGYUpSjQnooaaL4U2Mik6xBew3xwYDI2QKLqOQzDbwNhVyt5tLsv1UnJXRV607F3cfPVFCZfZh2NxiPzV6UR+JSaLyjpOSDf/jcMTnUuRyQVjuU40IZIBGNEp9g4KQaIBtgSj4oSYIyxC0zxU0yqRRJqVaPlCE0YJyhKbEyK7WKosXXET0ZgQnD9rrIkYLI7WolCooXIhKXIF7uq++fqO3V/7df/N9V7hn93OofU4fLj5bflKthixKWoiZSciQA7pbuOR+erto9lnWjnPqXicdOnScs23lzLLSVh9x5amo8tgu4fGJWLxmoVHMDZ6uTNrFZZEoqj0NJDJhstavwqTKjq2ymSpTvJSRTQwRYsiTc0qk+VpPZW2DSybkVxyTVbtYatDJrDJo6yk1kax1bkaoZNUWGU4ZUteka0mscmtL8/tJqh+pk1XpNLDUMHgo8RHhEWHu7/BoO0xBTUUzLjk5LjNVVVVVVVVVVVVMQU1FMy45OS4zVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MwxPsnu3pi/mJHiFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MQxNgAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==';
sound_ogg = 'data:audio/ogg;base64,T2dnUwACAAAAAAAAAAA3KQAAAAAAAO1lYhABHgF2b3JiaXMAAAAAARErAAAAAAAAuIgAAAAAAACZAU9nZ1MAAAAAAAAAAAAANykAAAEAAAA0FCuBCy3///////////+1A3ZvcmJpcx0AAABYaXBoLk9yZyBsaWJWb3JiaXMgSSAyMDA3MDYyMgAAAAABBXZvcmJpcxJCQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBADIAAAYhiGH3knMkFOQSSYpVcw5CKH1DjnlFGTSUsaYYoxRzpBTDDEFMYbQKYUQ1E45pQwiCENInWTOIEs96OBi5zgQGrIiAIgCAACMQYwhxpBzDEoGIXKOScggRM45KZ2UTEoorbSWSQktldYi55yUTkompbQWUsuklNZCKwUAAAQ4AAAEWAiFhqwIAKIAABCDkFJIKcSUYk4xh5RSjinHkFLMOcWYcowx6CBUzDHIHIRIKcUYc0455iBkDCrmHIQMMgEAAAEOAAABFkKhISsCgDgBAIMkaZqlaaJoaZooeqaoqqIoqqrleabpmaaqeqKpqqaquq6pqq5seZ5peqaoqp4pqqqpqq5rqqrriqpqy6ar2rbpqrbsyrJuu7Ks256qyrapurJuqq5tu7Js664s27rkearqmabreqbpuqrr2rLqurLtmabriqor26bryrLryratyrKua6bpuqKr2q6purLtyq5tu7Ks+6br6rbqyrquyrLu27au+7KtC7vourauyq6uq7Ks67It67Zs20LJ81TVM03X9UzTdVXXtW3VdW1bM03XNV1XlkXVdWXVlXVddWVb90zTdU1XlWXTVWVZlWXddmVXl0XXtW1Vln1ddWVfl23d92VZ133TdXVblWXbV2VZ92Vd94VZt33dU1VbN11X103X1X1b131htm3fF11X11XZ1oVVlnXf1n1lmHWdMLqurqu27OuqLOu+ruvGMOu6MKy6bfyurQvDq+vGseu+rty+j2rbvvDqtjG8um4cu7Abv+37xrGpqm2brqvrpivrumzrvm/runGMrqvrqiz7uurKvm/ruvDrvi8Mo+vquirLurDasq/Lui4Mu64bw2rbwu7aunDMsi4Mt+8rx68LQ9W2heHVdaOr28ZvC8PSN3a+AACAAQcAgAATykChISsCgDgBAAYhCBVjECrGIIQQUgohpFQxBiFjDkrGHJQQSkkhlNIqxiBkjknIHJMQSmiplNBKKKWlUEpLoZTWUmotptRaDKG0FEpprZTSWmopttRSbBVjEDLnpGSOSSiltFZKaSlzTErGoKQOQiqlpNJKSa1lzknJoKPSOUippNJSSam1UEproZTWSkqxpdJKba3FGkppLaTSWkmptdRSba21WiPGIGSMQcmck1JKSamU0lrmnJQOOiqZg5JKKamVklKsmJPSQSglg4xKSaW1kkoroZTWSkqxhVJaa63VmFJLNZSSWkmpxVBKa621GlMrNYVQUgultBZKaa21VmtqLbZQQmuhpBZLKjG1FmNtrcUYSmmtpBJbKanFFluNrbVYU0s1lpJibK3V2EotOdZaa0ot1tJSjK21mFtMucVYaw0ltBZKaa2U0lpKrcXWWq2hlNZKKrGVklpsrdXYWow1lNJiKSm1kEpsrbVYW2w1ppZibLHVWFKLMcZYc0u11ZRai621WEsrNcYYa2415VIAAMCAAwBAgAlloNCQlQBAFAAAYAxjjEFoFHLMOSmNUs45JyVzDkIIKWXOQQghpc45CKW01DkHoZSUQikppRRbKCWl1losAACgwAEAIMAGTYnFAQoNWQkARAEAIMYoxRiExiClGIPQGKMUYxAqpRhzDkKlFGPOQcgYc85BKRljzkEnJYQQQimlhBBCKKWUAgAAChwAAAJs0JRYHKDQkBUBQBQAAGAMYgwxhiB0UjopEYRMSielkRJaCylllkqKJcbMWomtxNhICa2F1jJrJcbSYkatxFhiKgAA7MABAOzAQig0ZCUAkAcAQBijFGPOOWcQYsw5CCE0CDHmHIQQKsaccw5CCBVjzjkHIYTOOecghBBC55xzEEIIoYMQQgillNJBCCGEUkrpIIQQQimldBBCCKGUUgoAACpwAAAIsFFkc4KRoEJDVgIAeQAAgDFKOSclpUYpxiCkFFujFGMQUmqtYgxCSq3FWDEGIaXWYuwgpNRajLV2EFJqLcZaQ0qtxVhrziGl1mKsNdfUWoy15tx7ai3GWnPOuQAA3AUHALADG0U2JxgJKjRkJQCQBwBAIKQUY4w5h5RijDHnnENKMcaYc84pxhhzzjnnFGOMOeecc4wx55xzzjnGmHPOOeecc84556CDkDnnnHPQQeicc845CCF0zjnnHIQQCgAAKnAAAAiwUWRzgpGgQkNWAgDhAACAMZRSSimllFJKqKOUUkoppZRSAiGllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimVUkoppZRSSimllFJKKaUAIN8KBwD/BxtnWEk6KxwNLjRkJQAQDgAAGMMYhIw5JyWlhjEIpXROSkklNYxBKKVzElJKKYPQWmqlpNJSShmElGILIZWUWgqltFZrKam1lFIoKcUaS0qppdYy5ySkklpLrbaYOQelpNZaaq3FEEJKsbXWUmuxdVJSSa211lptLaSUWmstxtZibCWlllprqcXWWkyptRZbSy3G1mJLrcXYYosxxhoLAOBucACASLBxhpWks8LR4EJDVgIAIQEABDJKOeecgxBCCCFSijHnoIMQQgghREox5pyDEEIIIYSMMecghBBCCKGUkDHmHIQQQgghhFI65yCEUEoJpZRSSucchBBCCKWUUkoJIYQQQiillFJKKSGEEEoppZRSSiklhBBCKKWUUkoppYQQQiillFJKKaWUEEIopZRSSimllBJCCKGUUkoppZRSQgillFJKKaWUUkooIYRSSimllFJKCSWUUkoppZRSSikhlFJKKaWUUkoppQAAgAMHAIAAI+gko8oibDThwgMQAAAAAgACTACBAYKCUQgChBEIAAAAAAAIAPgAAEgKgIiIaOYMDhASFBYYGhweICIkAAAAAAAAAAAAAAAABE9nZ1MABM4PAAAAAAAANykAAAIAAABvC5SOEVtfW1NRU0dFNzU5REZJTlpQXlJXtAqj/+iiDQSv9hjXAJDV+roznOc+8+OJh2L1gsSps61Dvnng4dP/e7OjO/I9AgCAPepchP1wiC6uBy81W2desmVDv8bngbEfdHbqdfdYkdF1HfY4DnUd335brVBVNgDkh0fUGjDxto2ButDY8/m/vfzmtPPjs/69Gp5OW5KJs0Mv726x+WruOj5dD/8rAAAMqxN6lgM54f9riRbxpfzF1+afz/UtTo5/mySRlSsA+vZIxdd7d38Bfp3h75+H5oD+v8HXQVBAh1eOMQBAlP1fmfWJO8zBbc8tmWO7c9QyuQTzNJlcG9rp7V6Pena3k14BjziNQyUJAADhkMVd09DcwvwhjPt59uiZAvygoD+MDjWjGIKc1eOz5QAAMALAoADA09umAgAQ5QQ0LrHAeYYfRbipY4Wd70l1IpE1UXB74mXVWlLI/z0sAAAA4Mrs8kJwLZfdvsVwOI8D0XJ/N7neFXCv2WAEfpjVw/oDwPXHoE7QUBB4GwmAeJkn3lsqxtEyswrg1o8eBf/auBib7ihQ/C5wNSHuzbYFAADUkrqaXS1ejv3cR4i0z+I8p2kkJHg5dal8PAMAftobQ8aFFrD+G+AMPkcJNkAC8LYcoBWR/S6NSiFPL66lG8C2LwtA4VwuqUAB+CVtfcyzdwgMP6b6GrcUAKB8uwAAAMCQ6ac/8W9y6WsUoakLAgB+3OCzXxcAG1+V4AF9H0g5gLcHsEZrR9MViMa+Vk2A7FYAcHaqJQRl10w1Z6dlmEwmrUIlHjsAAAAgNKSeu/hQH+/s9H4OAIbe49y/LwDk3QlwA1sdkEDg7QBpXaarEOlsVPvvugoAzR8HsK6ddAB/cidVAAAAgEK+yyZXvbnzK1hKXFQhiR1xTIwEAILd49/3XQCY/weYwVYDBLm3B+IgRNxcCrhE3V6sAmRtBLB/7QYA0wYAAEDpuvFQbBC7HPYaTwB+2xNo370A0P8yQQn6BQjCG0CGYAqRVgrE5Y3mBED8xgJkX2oAKl0DAABQBw6vw676MRzUHXra49//XgDICQUogCoBweJtAjLUIRFTzCqtlo9vAPAbAjDp4wGUxRIAAAAsYeV4N7iNh4r1w8dyAXLZ4/f/PgDs1ybqLAURvXXAxSLdynywcKnNQz89AJNfAnC6s65g6MlmAQAAEHWrVF/FECcv0kYEI18GQBUYIXq8h98Dctjj7/9eAPAfQA1MBITvDaCKyBXc8bfaVIzv5ZUSWDJNgEPFKgmPk0ePBwAAAHH1FpQ9waXXNIdsBHn/JPrG6UPWmHh8AG7OE4o/PgD4RaCxHQgbeN42LYAW/HXRNah0XPFnmlYCe387gCevLkASP1uvHLdkLn3fXV/7u7fNdrsCAADyMRNUPhyxl2vHWQFqS63Zny8A+ECCBlsdEAlK0b1jAuVmVmT7sZkPmL/ZMABsc9QB7MGUHjhrzZxa32y/X7tkdrdaX1rttxyZAAAAcO9mVnP35E+ce8dfdABii+HvfAGgxwnmgNcUWDTA814PA6N1smE8qofdPpXH1Vcjwgm26dtdmmdTW9VbWuFaJaafhUpMPtmfqfFTn2W05SB9FAAAyA/JbLodFzi8aZfZ0fLbb/dWytlmhdm/UoGt+FELQKYuyfjL/78cJhn67f3h+4UMP70DSm/EZQg4rpCcw1b1JsLUSfo3ai5t7gMuSXMLhzu9HPzNvg/U5P85MSysT+vqw9MZAA==';


