document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const froggie = document.getElementById('froggie');
    const fireball = document.getElementById('fireball');
    const bails = document.getElementById('bails');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let isGameOver = false;
    let fireballSpeed = 2000;

    startBtn.addEventListener('click', startGame);

    document.addEventListener('click', () => {
        if (fireball.style.display === 'block' && !isGameOver) {
            const fireballRect = fireball.getBoundingClientRect();
            const froggieRect = froggie.getBoundingClientRect();
            
            if (
                fireballRect.bottom >= froggieRect.top &&
                fireballRect.right >= froggieRect.left &&
                fireballRect.left <= froggieRect.right
            ) {
                score++;
                scoreDisplay.textContent = score;
                fireball.style.display = 'none';
                increaseSpeed();
            } else {
                gameOver();
            }
        }
    });

    function startGame() {
        score = 0;
        isGameOver = false;
        fireballSpeed = 2000;
        scoreDisplay.textContent = score;
        startBtn.style.display = 'none';
        throwFireball();
    }

    function throwFireball() {
        if (isGameOver) return;
        
        fireball.style.display = 'block';
        fireball.style.transition = `top ${fireballSpeed}ms linear`;
        fireball.style.top = '280px';

        setTimeout(() => {
            if (fireball.style.display === 'block') {
                gameOver();
            }
        }, fireballSpeed);
    }

    function increaseSpeed() {
        if (fireballSpeed > 500) {
            fireballSpeed -= 100;
        }
        fireball
