const music = document.getElementById("backgroundMusic");
const muteBtn = document.getElementById("mute-btn");

// Play music on page load (if allowed by browser)
window.onload = function () {
    music.volume = 0.7; // Set volume to 50%
    music.play().catch(error => console.log("Autoplay blocked:", error));
};

// Toggle mute function
function toggleMute() {
    if (music.muted) {
        music.muted = false;
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Sound On
    } else {
        music.muted = true;
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // Sound Off
    }
}