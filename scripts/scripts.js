// Runs Strict Mode
"run strict";

// Global Variables
const pageAudio = document.querySelector("#track");
const controlButton = document.querySelector("#playPause");
const controlButtonSmall = document.querySelector("#playPauseSmall");


// Functions
window.onload = function() {
    pageAudio.volume = 0.05;
    pageAudio.play();
}

function playPause() {
    if (!pageAudio.paused) {
        pageAudio.pause();
        controlButton.className = "play";
        controlButtonSmall.className = "play";
    } else {
        pageAudio.play();
        controlButton.className = "pause";
        controlButtonSmall.className = "pause";
    }
}