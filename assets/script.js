window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    setTimeout(function() {
        key.classList.remove('playing');
    },80);
})

