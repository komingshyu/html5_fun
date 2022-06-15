//----------------------------------------------------------------------
// Speech2Text test for HTML5 Bingo/Monster(Bubble)
//
// use the Web Speech API to get the answers
//
// Author : gsyan (https://gsyan888.blogspot.com/)
//
// Change Logs: 
//		2021.06.18 created
//		2021.06.19 add the Mic enabled/unable button 
//				   add a label to show the result
//		2022.06.11 modifed for HTML5 monster
//		2022.06.12 trans Chinese to Pinyin , and using RegExp to check answers
//		2022.06.15 support HTML5 poke
//----------------------------------------------------------------------
//是否將中文轉拼音
var enableTransToPinyin = false;
//
var speechRecognitionLang = 'zh-TW'; //語音辨識的語言
var speechRecognitionInterimResults = true; //是否有辨識結果就立即語音回報

//給哪支程用的
var HTML5FunAppName = 'monster';  //會自動抓, 不用設定value: bingo , monster, bubble

var eventType = 'mousedown';  //mousedown or touchstart, auto detect

var pinyinJSFilename = 'pinyin.js';

var getAllButtons = function(objLayer) {
	var buttons=null;
	//Layer 中只有存放按扭的 object 才有 length
	//利用這個特性, 找到 layer 中的元件
	if(objLayer) {
		var names = Object.keys(objLayer);
		for(var i=0; i<names.length; i++) {
			if(objLayer[names[i]] && typeof(objLayer[names[i]])=='object' && typeof(objLayer[names[i]]['length'])=='number') {
				var buttons = objLayer[names[i]];
				break;
			}
		}
	}
	return buttons;
}
//找出按鈕裡的字串
var getAnswer= function(btn) {
	var txt='';	
	if(btn) {
		var names = Object.keys(btn);
		for(var i=0; i<names.length; i++) {
			if(HTML5FunAppName=='bingo' && btn[names[i]] && typeof(btn[names[i]])=='string' && names[i]!='description') {
				//Bingo Button 中只 answer 和 description 的 object 才是 string 
				var txt = btn[names[i]];
				break;
			} else if(HTML5FunAppName=='monster' && btn[names[i]] && typeof(btn[names[i]])=='object' && typeof(btn[names[i]].getElementsByTagName)=='function') {
				if(typeof(btn[names[i]].innerText)!='undefined' && btn[names[i]].innerText!=null) {
					txt = btn[names[i]].innerText;
					break;
				}
			}
		}
	}
	return txt;
}

var getLabelText= function(btn) {
	var txt='';
	if(btn) {
		var names = Object.keys(btn);
		for(var i=0; i<names.length; i++) {
			if(btn[names[i]] && typeof(btn[names[i]])=='object' && typeof(btn[names[i]].getElementsByTagName)=='function') {
				if(typeof(btn[names[i]].innerText)!='undefined' && btn[names[i]].innerText!=null) {
					txt = btn[names[i]].innerText;
					break;
				}
			}
		}
	}
	return txt;
}
//find all buttons have mousedown event
findMousedownButtons = function(allBtn) {
	var options = [];
	for(var i=0; i<allBtn.length; i++) {
		var b = allBtn[i];
		var names = Object.keys(b);
		for(var j=0; j<names.length; j++) {
			if(b[names[j]] && typeof(b[names[j]])=='object' && (typeof(b[names[j]].mousedown)!='undefined' || typeof(b[names[j]].touchstart)!='undefined') ) {
				options.push(b);
				break;
			}
		}
	}
	return options;
}
//Bingo 載入題目後, 只有回選單、九宮格跟顯示提示等按鈕是帶有 mousedown(可按)
//因為 Bingo 的題幹每次換題目時會刪除
//以致原來是放在選項前面的
//第二題起, 會變成放在後面
//只好以找擁有 mousedown 的物件, 來找選項物件
getOptionButtons = function() {	
	if(HTML5FunAppName == 'bingo') {
		//bingo gameLayer child 7~16 是選項按鈕
		var btns = findMousedownButtons(getAllButtons(gameLayer));
		buttons = btns.slice(1, btns.length-1)
		buttonsTotal = buttons.length;
		hintButton = btns[btns.length-1];
	} else if(HTML5FunAppName == 'monster') {
		buttons =  findMousedownButtons(getAllButtons(qLayer));
		buttonsTotal = buttons.length;
	} else 	if(HTML5FunAppName == 'poke') {
		//poke boxLayer child 第 0 個是外框
		buttons = findMousedownButtons(getAllButtons(boxLayer));
		buttonsTotal = buttons.length;
		//將 poke 的顯示號碼改為要
		showNumber = 1;
	} 
	//console.log(buttonsTotal);
	//console.log(buttons);
}

//find a button by text of the label
findButton = function(txt) {	
	var found = null;
	for(var i=0; i<buttonsTotal; i++) {
		var b = buttons[i];
		//如果已答對的格子(.enable==false)跳過
		//console.log(HTML5FunAppName+ ' , '+ b.enabled + ' , '+ getAnswer(b) + ' = ? '+ txt);
		/*
		if( (HTML5FunAppName=='bingo' && b.enabled && getAnswer(b) == txt)
			|| (HTML5FunAppName=='monster' && typeof(b)=='object' && b!=null && getLabelText(b) == txt)
		  ) 
		{	
			found = b;
			break;
		}
		*/
		var labelText = '';
		if(HTML5FunAppName=='bingo' && b.enabled ) {
			labelText = getAnswer(b);
		} else if(HTML5FunAppName=='monster' && typeof(b)=='object' && b!=null ) {
			labelText = getLabelText(b);
		} else if(HTML5FunAppName=='poke') {
			//戳戳樂直接取數字來比較
			//labelText = i; //+'號';
			labelText = getLabelText(b)
			//var digits = txt.match(/number\s(\d+)$|(\d+)\sgo$|(\d+)號$/i);
			//if(digits && digits.length>=3 && ((digits[1]!='undefined' && digits[1]==labelText) || (digits[2]!='undefined' && digits[2]==labelText)) ) {
			var digits = txt.match(/(\d+)號$/i);
			if(digits && digits.length>=2 && digits[1]!='undefined' && digits[1]==labelText) {
				found = b;
				break;
			} else if(txt.match(/\s+go$|\dgo$|購$/i)) {
				if(txt.match(/購$/i)) {
					txt = txt.replace(/購$/g, ' go');
					//console.log('found '+txt);
				}
				if(txt.match(/\dgo$/i)) {
					txt = txt.replace(/(\d)go$/ig, '$1 go');
					//console.log(txt);
				}
				digits = txt.match(/(\d+)\sgo$/i);
				if(digits && digits.length>=2 && digits[1]!='undefined') {
					var num = digits[1];
				} else {
					var num = text2num(txt.toLowerCase());
				}
				//console.log(num+ ' : '+txt);
				if(num && num==Number(labelText)) {
					found = b;
					break;
				}					
			} else if(txt.match(/繼續$|下一個$|關閉$|芝麻關門$|抽下一個$|OK$|okay$|next one$/i)) {
				//符合的就按 Enter 鍵
				var topLayerChildren = getAllButtons(topLayer);
				if(topLayerChildren.length>0 && getAllButtons(topLayerChildren[0]).length>0) {
					var eventEnterKeyup = new KeyboardEvent('keyup', {
						code: 'Enter',
						key: 'Enter',
						charKode: 13,
						keyCode: 13,
						view: window
					});
					document.dispatchEvent(eventEnterKeyup);
					break;
				}
			}
			continue;
		}
		if(labelText!='' && txt.length>=labelText.length) {
			if(enableTransToPinyin && typeof(transToPinyin)=='function') {
				//將中文轉為無調號的拼音
				labelText = transToPinyin(labelText);
				txt = transToPinyin(txt);
			}
			//比對按鈕上的文字，如果是語音的一部份，就算答對
			var re = new RegExp(labelText,'gi');
			if(txt.match(re)) {
				//console.log(speech.match(re));
				found = b;
				break;
			}
		}
	}
	return found;
}
//click show hit button
showDescription = function() {	
	if(typeof(hintButton)!='undefined') {
		//hintButton.dispatchEvent('mousedown');
		hintButton.dispatchEvent(eventType);
	}
}

//
speech2TextEventsInit = function() {
	recognition.onstart = function() {
		var micButton = document.getElementById('micButton');
		micButton.style['background-color']='Violet';
		console.log('--------語音辨識開始--------');
	};
	
	recognition.onend = function() { 
		var micButton = document.getElementById('micButton');
		micButton.style['background-color']='DodgerBlue';
		micButton.textLabel.innerText = '';
		console.log('========語音辨識結束========');
	};
		
	recognition.onresult = function(event) { 
		console.log(event);
		/*
		for(var i=0; i<event.results.length; i++){
			var txt = event.results[i][0].transcript;
			console.log(txt);
			if(txt) {
				var btn = findButton(txt);
				if(btn!=null && typeof(btn)=='object') {
					btn.dispatchEvent('mousedown');
					break;
				}
			}
		}
		*/
		var atIndex = event.resultIndex;
		var theLast = event.results[atIndex].length-1;
		var txt = event.results[atIndex][theLast].transcript;
		//document.getElementById('micButton').textLabel.innerText = txt;
		console.log(txt);
		if(txt) {
			//
			getOptionButtons();
			//
			if(HTML5FunAppName=='bingo' && (txt=='芝麻開門' || txt=='芝麻關門')) {  //提示的 show & hide
				showDescription();
			} else {
				var btn = findButton(txt);
				//console.log(btn);
				var msg = txt;
				var dalayTime = 300;
				if(btn!=null && typeof(btn)=='object') {
					//找到按鈕就按
					//btn.dispatchEvent('mousedown');
					btn.dispatchEvent(eventType);
					msg = '請繼續';
				} else {
					//沒找到就顯示辨識出來的文字
					dalayTime = 1000;
				}
				document.getElementById('micButton').textLabel.innerText = msg;
				setTimeout(function() {
					document.getElementById('micButton').textLabel.innerText = '';
				}, dalayTime);
				
				//if(eventType.match(/touch/i)) {
				//	document.getElementById('micButton').dispatchEvent(eventType);
				//}
			}
		}
	}
}
addMicButton = function() {
	var micTxt = document.createTextNode('MIC');
	var micButton = document.createElement("div");
	micButton.id = 'micButton';
	micButton.title = '按這裡啟用/關閉語音辨識';
	micButton.appendChild(micTxt);
	document.body.appendChild(micButton);
	
	var labelText = document.createTextNode('');
	micButton.textLabel = document.createElement("div");
	micButton.textLabel.id = 'speechText';
	micButton.textLabel.appendChild(labelText);
	//document.body.appendChild(micButton.textLabel);
	micButton.appendChild(micButton.textLabel);
	
	micButton.style['text-align']='center';
	micButton.style.position='relative';
	micButton.style.width='80px'; //'50px';
	micButton.style.height='80px'; //'18px';
	micButton.style.left='25px'; //'54px';
	//micButton.style['top']='85%'; //'90%'; //Math.floor(window.innerHeight-50)+'px';
	micButton.style['top']= Math.floor(window.innerHeight-100)+'px';
	micButton.style['font-size']='12px'; //'xx-small';
	micButton.style.color='#ffffff';
	micButton.style.opacity='0.6';
	micButton.style['border-style']='ridge';
	micButton.style['border-radius']='120px'; //'8px';
	micButton.style['padding-top']='4px';
	micButton.style['background-color']='DodgerBlue';
	//micButton.innerText='@'+username;
	micButton.style['font-size'] = '1.2em';
	micButton.style['text-align']='center';
	
	micButton.textLabel.style.position = 'relative';
	micButton.textLabel.style.height = '18px';
	micButton.textLabel.style['text-align']='left';
	micButton.textLabel.style['font-size'] = '1.2em'; //'14px';
	micButton.textLabel.style['color']= 'black'; //'#339999';
	micButton.textLabel.style['text-shadow']='white 0.1em 0.1em 0.2em';
	micButton.textLabel.style['white-space']='nowrap';
	micButton.textLabel.style.left = '0.25em';//'30px'; //'60px';
	micButton.textLabel.style.top = '0.25em'; //'-250%'; //'-45px'; //'80%';//Math.floor(window.innerHeight-50+5)+'px';
	
	return micButton;
};
	
enableSpeech2Text = function(e) {
	e.preventDefault();
	//
	//detect mousedown or touchstart
	if(typeof(e.type)!='undefined') {
		eventType = e.type;
	}
	//
	var micButton = document.getElementById('micButton');	

	//bingo gameLayer child 7~16 是選項按鈕
	//buttons = getAllButtons(gameLayer).slice(7, 16);
	//buttonsTotal = buttons.length;
	//hintButton = getAllButtons(gameLayer)[16];

	//如果有支援語音辨識, 進行語音辨識初始化
	speechRecognitionReady = (typeof(window.SpeechRecognition)=='function' || typeof(window.webkitSpeechRecognition)=='function' || typeof(window.mozSpeechRecognition)=='function' || typeof(window.msSpeechRecognition)=='function');
	if(speechRecognitionReady) {
	//if(typeof(webkitSpeechRecognition)=='function') {
		//進行語音辨識初始化
		if(typeof(recognition)=='undefined') {
			recognition =  new (window.webkitSpeechRecognition || window.SpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
			//recognition = new webkitSpeechRecognition();
			recognition.continuous = true;		//持續辨識,不自動停
			recognition.interimResults=true;	//立即辨識,不等待
			//recognition.lang='cmn-Hant-TW'; 	//'en-US'
			recognition.lang='zh-TW';
			//recognition.lang='en-US';
			if(typeof(speechRecognitionLang)=='string' && speechRecognitionLang!='') {
				recognition.lang = speechRecognitionLang 
			}
			if(typeof(speechRecognitionInterimResults)!='undefined') {
				recognition.interimResults = speechRecognitionInterimResults;
			}
			speech2TextEventsInit();
		}
		var btnColor = micButton.style['background-color'].toLowerCase();		//'Violet'  DodgerBlue
		if(btnColor=='dodgerblue') {
			if(HTML5FunAppName=='poke') {
				displayPokeNumbers();
			}
			try {
				//recognition.stop();				
				recognition.start();
			} catch(e) { 
				//console.log(e)
				setTimeout( function() {
					recognition.start();
				}, 100);
			};
		} else {
			recognition.stop();
		}
	} else {
		alert('抱歉~ 您的瀏覽器不支援語音辨識(webkitSpeechRecognition)的功能');
		micButton.removeEventListener('mousedown', enableSpeech2Text);
		micButton.removeEventListener('touchstart', enableSpeech2Text);
		micButton.remove();
	}
}
// text2num : convert English words to number
// rf. https://stackoverflow.com/questions/11980087/javascript-words-to-numbers
//
function text2num(strSource) {
	var Small = {
		'zero': 0,
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'ten': 10,
		'eleven': 11,
		'twelve': 12,
		'thirteen': 13,
		'fourteen': 14,
		'fifteen': 15,
		'sixteen': 16,
		'seventeen': 17,
		'eighteen': 18,
		'nineteen': 19,
		'twenty': 20,
		'thirty': 30,
		'forty': 40,
		'fifty': 50,
		'sixty': 60,
		'seventy': 70,
		'eighty': 80,
		'ninety': 90,
		'for' : 4,
		'to' : 2
	};
	var Magnitude = {
		'thousand':     1000,
		'million':      1000000,
		'billion':      1000000000,
		'trillion':     1000000000000,
		'quadrillion':  1000000000000000,
		'quintillion':  1000000000000000000,
		'sextillion':   1000000000000000000000,
		'septillion':   1000000000000000000000000,
		'octillion':    1000000000000000000000000000,
		'nonillion':    1000000000000000000000000000000,
		'decillion':    1000000000000000000000000000000000,
	};;
	var all_keys = Object.keys(Small).join('|')+'|'+Object.keys(Magnitude).join('|')+'|go'
	var match, word, n, g;
	var words = strSource.split('\s+');
	var re = RegExp(all_keys, 'i');
	for(var i=0; i<words.length; i++) {
		//if(!words[i].match(/zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion|octillion|nonilliondecillion|go/i)) {
		if(!words[i].match(re)) {
			//console.log('debug : '+words[i]);
			return null;
		}
	}
	//搜尋的字串包括 go
	re = RegExp('('+all_keys+')\\s+', 'ig');
    //match = (strSource+' ').match(/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion|octillion|nonilliondecillion|go)\s+/ig)
	match = (strSource+' ').match(re);
    //console.log(match);
	//如果沒有找到任何數字的單字或是沒有 go 的關鍵字就不轉換
	if(typeof(match)=='undefined' || match==null) {
		return null;
	} else if(!match[match.length-1].match(/go/i)) {
		return null;
	}
	
	var found = false;
    n = 0;
    g = 0;
	//match 要去掉最後一個 go 的，所以 match.length-1
	for(var i=0; i<match.length-1; i++) {
		word = match[i].replace(/\s/g, '');
		var x = Small[word];
		if (x != null) {
			g = g + x;
			found = true;
		}
		else if (word == "hundred") {
			g = g * 100;
			found = true;
		}
		else {
			x = Magnitude[word];
			if (x != null) {
				n = n + g * x
				g = 0;
				found = true;
			}
			else { 
				//console.log("Unknown number: "+word); 
				found = false;
			}
		}
	}
	if(found) {
		return n + g;
	} else {
		return null;
	}
}
translate = function(queryString) {
	//[[["MkEWBc","[[\"測試\",\"zh-CN\",\"zh-TW\",true],[null]]",null,"generic"]]]
	var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-TW&hl=zh-TW&dt=t&dt=bd&dj=1&source=icon&tk=411946.411946&q=';  
	url += queryString;

	if (window.XMLHttpRequest) {     
      req = new XMLHttpRequest(); 
	}     
	else if (window.ActiveXObject) {     
      req = new ActiveXObject("Microsoft.XMLHTTP");     
	}     	
	//開啟網址的檔案
	req.open('GET', url);
	//等候回應並進行接下來的程序
	req.onreadystatechange = function() {     
   		if (req.readyState == 4) {
			if(req.status == 200) {	//200 為成功讀入資料; 404 : Not Found
				if(typeof(callback)=='function') {
					//callback(req.responseText);
					console.log(req.responseText);
				}
				console.log(req.responseText);
			} else {
				if(typeof(callback)=='function') {
					callback("");
				}
			}
		}
	}
	//送出取得檔案的請求
	try {
		req.send(null);
	} catch(e) { }
}
//顯示戳戳樂的格子號碼, 並將號碼改為由 1 開始
displayPokeNumbers = function() {
	var btns = findMousedownButtons(getAllButtons(boxLayer));
	//console.log(btns);
	for(var j=0; j<btns.length; j++) {
		var btn = btns[j];
		var names = Object.keys(btn);
		for(var i=0; i<names.length; i++) {
			if(btn[names[i]] && typeof(btn[names[i]])=='object' && typeof(btn[names[i]].getElementsByTagName)=='function') {
				if(typeof(btn[names[i]].innerText)!='undefined' && btn[names[i]].innerText!=null) {
					//txt = btn[names[i]].innerText;
					//console.log(j+ ' : '+txt);
					//console.log(btn[names[i]].children[1].style['display']);
					//console.log(btn[names[i]].children[1].innerHTML);
					if(btn[names[i]].children.length>=2 && !isNaN(btn[names[i]].children[1].innerHTML)) {
						btn[names[i]].children[1].innerHTML = j+1;
						btn[names[i]].children[1].style['display'] = 'block';
					}
					break;
				}
			}
		}
	}
}
function loadPinyin(callback) {
	var script = document.createElement('script');
	script.setAttribute('type','text/javascript');
	script.onload = function(){
		if(typeof(callback)=='function') {
			callback();
		}
	};
	script.setAttribute('src', pinyinJSFilename);
	document.getElementsByTagName('head')[0].appendChild(script);
}
//取得網址中的某一個參數(已編碼過的)
var gup = function( name ){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
	var regexS = "[\\?&]"+name+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec( window.location.href ); 
	if( results == null )    return "";  
	else    return results[1];
}
var injection = function(callback) {
	//偵測是否指定辨識的語言
	var lang = gup('lang');
	if(lang != '') {
		speechRecognitionLang = lang;
	}
	//偵測在使用哪一支 HTML5 FUN 的程式
	var script = document.getElementsByTagName('script');
	for(var i=0; i<script.length; i++) {
		var match = script[i].outerText.match(/,\s*\'([^\.]+)\.start\'/);
		if(match) {
			HTML5FunAppName = match[1];
			if(HTML5FunAppName=='bubble') {
				HTML5FunAppName = 'monster';
			}
			break;
		}
	}
	//
	//先載入原有的 LimeJS 程式
	if(typeof(callback)=='function') {
		callback();	
	}
	
	//如果有支援語音辨識, 進行語音辨識初始化
	speechRecognitionReady = (typeof(window.SpeechRecognition)=='function' || typeof(window.webkitSpeechRecognition)=='function' || typeof(window.mozSpeechRecognition)=='function' || typeof(window.msSpeechRecognition)=='function');
	if(speechRecognitionReady) {
		//add Mic button on left bottom after 1 sec.
		setTimeout( function() {
			var btn = addMicButton();
			btn.addEventListener('mousedown', enableSpeech2Text);
			btn.addEventListener('touchstart', enableSpeech2Text);
			//btn.addEventListener('touchend', enableSpeech2Text);
			if(enableTransToPinyin) {
				loadPinyin();
			}
		}, 1000);
	}
}

