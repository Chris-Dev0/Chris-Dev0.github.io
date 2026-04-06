const icons = document.querySelectorAll('.skill-icon');
const container = document.querySelector('.hero-section');

icons.forEach(icon => {
    const maxX = () => container.clientWidth - icon.offsetWidth;
    const maxY = () => container.clientHeight - icon.offsetHeight;
    let x = Math.random() * maxX();
    let y = Math.random() * maxY();
    let angle = Math.random() * Math.PI * 2;
    let speed = 0.5 + Math.random() * 1.5;
    let dx = Math.cos(angle) * speed;
    let dy = Math.sin(angle) * speed;
    function move() {
        x += dx;
        y += dy;
        if (x <= 0 || x >= maxX()) {
            dx *= -1;
            x = Math.max(0, Math.min(x, maxX()));
        }
        if (y <= 0 || y >= maxY()) {
            dy *= -1;
            y = Math.max(0, Math.min(y, maxY()));
        }
        icon.style.left = x + "px";
        icon.style.top = y + "px";
        requestAnimationFrame(move);
    }
    move();
});