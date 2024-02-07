document.addEventListener('DOMContentLoaded', function() {
    const koiButton = document.querySelector('.koi_btn');
    const naButton = document.querySelector('.na_btn');
    const shoiAudio = document.querySelector('audio[src="assets/aud/shoi.mp3"]');
    const huttAudio = document.querySelector('audio[src="assets/aud/hutt.mp3"]');
    let clickCount = 0;

    koiButton.addEventListener('click', function() {
        shoiAudio.play();
        clickCount++;
        if (clickCount === 4) {
            window.location.href = 'assets/redirect/mina.html';
        }
    });

    naButton.addEventListener('click', function() {
        huttAudio.play();
        huttAudio.addEventListener('ended', function() {
            naButton.style.display = 'none';
        });
    });
});
