document.addEventListener("DOMContentLoaded", function() {
    const puddles = document.querySelectorAll('.puddle');

    setInterval(() => {
        puddles.forEach(puddle => {
            const randomX = Math.floor(Math.random() * (window.innerWidth - puddle.offsetWidth));
            const randomY = Math.floor(Math.random() * (window.innerHeight - puddle.offsetHeight));
            puddle.style.left = `${randomX}px`;
            puddle.style.top = `${randomY}px`;
            puddle.classList.add('appear');

            setTimeout(() => {
                puddle.classList.remove('appear');
            }, 2000);
        });
    }, 3000);
});
