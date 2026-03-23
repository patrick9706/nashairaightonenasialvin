// 1. Reveal Content and Play Music
const openBtn = document.getElementById('openBtn');
const cover = document.getElementById('cover');
const mainContent = document.getElementById('mainContent');
const music = document.getElementById('bgMusic');

openBtn.addEventListener('click', () => {
    cover.style.transform = 'translateY(-100%)';
    mainContent.classList.add('show-content');
    music.play();
});

// 2. Countdown Timer
const weddingDate = new Date("June 14, 2025 15:00:00").getTime();

const timerFunc = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("mins").innerHTML = m;
    document.getElementById("secs").innerHTML = s;

    if (distance < 0) {
        clearInterval(timerFunc);
        document.getElementById("timer").innerHTML = "IT'S OUR BIG DAY!";
    }
}, 1000);