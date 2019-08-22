var audio, playbtn, mutebtn, volumeslider;
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "http://91.121.82.33:7932/;nocache=1565453986?0.6954737128940278";
	audio.loop = true;
	audio.play();
	// Set object references
	playbtn = document.getElementById("playpausebtn");
	mutebtn = document.getElementById("mutebtn");
	volumeslider = document.getElementById("volumeslider");
	// Add Event Handling
	playbtn.addEventListener("click",playPause);
	mutebtn.addEventListener("click", mute);
	volumeslider.addEventListener("mousemove", setvolume);
	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(images/pause.png) no-repeat";
		    playbtn.style.backgroundSize = "30px 30px";
	    } else {
		    audio.pause();
		    playbtn.style.background = "url(images/play.png) no-repeat";
		    playbtn.style.backgroundSize = "30px 30px";
	    }
	}
	
	
	
	var slider = document.getElementById("volumeslider");
	var output = document.getElementById("volume");
	output.innerHTML = slider.value;
	slider.oninput = function() {
		output.innerHTML = this.value;
	}
	
	function mute(){
		if(audio.muted){
		    audio.muted = false;
		    mutebtn.style.background = "url(images/speaker.png) no-repeat";
		    mutebtn.style.backgroundSize = "30px 30px";
			output.innerHTML = slider.value;
	    } else {
		    audio.muted = true;
		    mutebtn.style.background = "url(images/speaker_muted.png) no-repeat";
		    mutebtn.style.backgroundSize = "30px 30px";
			output.innerHTML = 0;
	    }
	}
	function setvolume(){
	    audio.volume = volumeslider.value / 100;
    }
	
}
window.addEventListener("load", initAudioPlayer);