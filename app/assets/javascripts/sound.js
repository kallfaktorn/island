function Sound() {

	this.initialize = function() {
		
		soundManager.setup({
			url: '../../',
			useFlashBlock: false,
			consoleOnly: true,
			bgColor: '#f6f6f6',
			debugMode: true,
			// enable flash debug output for this page
			debugFlash: true,
			preferFlash: true
		}); 
	}
	
	this.test = function() {
		soundManager.onready(function() {
			playTestSound();
		});
	}
	
	function playTestSound() {
		var mouseoversound = soundManager.createSound({
		  id: 'mouseover',
		  url: 'a.mp3',
		  autoLoad: true,
		  autoPlay: false,
		  onload: function() {
			mouseoversound.play();
		  },
		  volume: 50
		});
	}
}