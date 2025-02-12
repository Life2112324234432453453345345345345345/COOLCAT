const video = document.getElementById('video');
const btnO = document.getElementById('btnO');
const btnI = document.getElementById('btnI');
const btnA = document.getElementById('btnA');

// Funzione per riprodurre il suono e il video
function playSoundAndVideo(soundFile) {
    // Riprende il video per 0.3 secondi
    video.currentTime = 0;
    video.play();

    // Riproduce il suono
    const audio = new Audio(soundFile);
    audio.play();
}

// Eventi per i pulsanti
btnO.addEventListener('click', () => playSoundAndVideo('suono1.mp3'));
btnI.addEventListener('click', () => playSoundAndVideo('suono2.mp3'));
btnA.addEventListener('click', () => playSoundAndVideo('suono3.mp3'));
