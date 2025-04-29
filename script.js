const cards = document.querySelectorAll('.Card');

cards.forEach(card => {

    const  video = card.querySelector('video');

    card.addEventListener('mouseenter', () => {
        if (video) {
            video.muted = false;
            video.currentTime =0;
            video.play();
        }
    });

    card.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
            video.muted = true;
        }
    });
});