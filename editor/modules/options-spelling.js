var editorOptions = {
  spelling: {
    caption: "單字高手",
	
    filenames: [
      "https://gsyan888.github.io/html5_fun/html5_spelling/data/04-tts-google.js"
    ],
	
    enableOpenInNewWindow: false,
	
    options: {
		
      "title": [
        "text",
        "上方看板的標題字"],
		
 
      "order_by_random": [
        "checkbox",
        "是否使用亂數抽題目",
        "勾選:以亂數抽題 &nbsp;&nbsp; 未勾選:依題庫順序",
        "啟用亂數抽題"],


      "tts_enabled": [
        "checkbox",
        "是否使用 TTS 合成語音",
        "勾選:使用 &nbsp;&nbsp; 未勾選:不使用",
        "使用TTS合成語音"],

      "timer": [
        "text",
        "計時幾秒"],
		
      "number_of_points_for_one_question": [
        "text",
        "答對一題加幾分"],
		
      "audioPlaybackRate": [
        "text",
        "語音播放的速度",
		"(1.0 正常, 0.5 慢速, 2.0 兩倍速)"],
		
      "blanks_total_number": [
        "text",
        "每題要拿掉幾個字母當填空"],
				
      "questionLines": [
        "textarea",
        "題庫"]
    }
  }
};
