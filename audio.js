// audio.js

const audio = new Audio('bs.mp3'); // Ganti dengan jalur audio yang benar
audio.loop = true; // Memutar audio secara berulang
audio.volume = 0.5; // Atur volume (0.0 sampai 1.0)

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.createElement('button');
    playButton.textContent = 'Play Music';
    document.body.appendChild(playButton);

    playButton.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log('Audio tidak dapat diputar otomatis, interaksi diperlukan.');
        });
    });
});
