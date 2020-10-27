// Runs Strict Mode
"run strict";

// Global Variables
const pageAudio = document.querySelector("#track");
const controlButton = document.querySelector("#playPause");


// Functions
window.onload = function() {
    pageAudio.volume = 0.15;
    pageAudio.play();
}

function playPause() {
    if (!pageAudio.paused) {
        pageAudio.pause();
        controlButton.className = "play";
    } else {
        pageAudio.play();
        controlButton.className = "pause";
    }
}