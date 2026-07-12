// =====================================================
// HERO PARTICLE BACKGROUND
// Lightweight canvas particle field with connecting lines.
// No libraries — plain canvas 2D.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const hero = document.getElementById("hero");

  let particles = [];
  let width, height;
  let mouse = { x: null, y: null };

  const COLORS = ["#e8a849", "#d9622b", "#f1e4c3"];
  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 45 : 90;
  const LINK_DISTANCE = isMobile ? 100 : 140;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = hero.offsetHeight || window.innerHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.8 + 0.6;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
  }

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < LINK_DISTANCE) {
          const opacity = 1 - dist / LINK_DISTANCE;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(241, 228, 195, ${opacity * 0.15})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.move();
      p.draw();
    });
    connect();
    requestAnimationFrame(animate);
  }

  init();
  animate();

  window.addEventListener("resize", () => {
    resize();
  });
});