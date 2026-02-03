const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let formationSpeed = 0.03;

function heartShape(t) {
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y =
       13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);
    return { x, y };
}

function createParticles() {
    for (let i = 0; i < 500; i++) {
        let angle = Math.random() * Math.PI * 2;
        let pos = heartShape(angle);

        particles.push({
            x: Math.random() * canvas.width,     // meel fog ayuu ka bilaabanayaa
            y: Math.random() * canvas.height,
            targetX: centerX + pos.x * 15,       // mesha u isaga xiriyo
            targetY: centerY - pos.y * 15,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.02 + 0.01,
            alpha: Math.random()
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        // Tartanka dhanka wadnaha
        p.x += (p.targetX - p.x) * p.speed;
        p.y += (p.targetY - p.y) * p.speed;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

createParticles();

animate();r
