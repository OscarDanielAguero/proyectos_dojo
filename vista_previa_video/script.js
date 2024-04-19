console.log("page loaded...");

const mainVideo = document.getElementById('mainVideo');

// Reproducir el video en silencio al pasar el cursor sobre él
mainVideo.addEventListener('mouseover', function() {
    this.muted = true;
    this.play();
});

// Pausar el video al quitar el cursor del mismo
mainVideo.addEventListener('mouseout', function() {
    this.pause();
});

// Reproducir el video con sonido al hacer clic en él
mainVideo.addEventListener('click', function() {
    this.muted = false;
    this.play();
});
