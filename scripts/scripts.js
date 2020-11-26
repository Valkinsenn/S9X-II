// Global Variables
const pageAudio = document.querySelector("#track");
const controlButton = document.querySelector("#playPause");
const controlButtonSmall = document.querySelector("#playPauseSmall");


// Functions
window.addEventListener('load', (event) => {
    pageAudio.volume = 0.2;
});

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