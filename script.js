/* ================================
   CONTADOR – ROBUSTO XV
================================ */

function startCountdown() {
  const targetDate = new Date("March 7, 2026 21:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    let diff = targetDate - now;

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000)) % 60;

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if (d) d.textContent = String(days).padStart(2, "0");
    if (h) h.textContent = String(hours).padStart(2, "0");
    if (m) m.textContent = String(minutes).padStart(2, "0");
    if (s) s.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

startCountdown();

/* ================================
   MÚSICA – MEJOR UX MOBILE
================================ */

const playButton = document.getElementById("playButton");
const bgMusic = document.getElementById("bgMusic");

if (playButton && bgMusic) {
  bgMusic.volume = 0.6;

  playButton.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        playButton.textContent = "⏸️";
        playButton.classList.add("playing");
      }).catch(() => {
        alert("Tocá nuevamente para reproducir la música 🎵");
      });
    } else {
      bgMusic.pause();
      playButton.textContent = "▶️";
      playButton.classList.remove("playing");
    }
  });
}

/* ================================
   ANIMACIONES ON SCROLL (PRO)
================================ */

const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

animatedElements.forEach(el => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

/* ================================
   SUAVIZAR SCROLL EN MOBILE
================================ */

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (Math.abs(currentScroll - lastScroll) > 60) {
    lastScroll = currentScroll;
  }
}, { passive: true });

/* ================================
   DETALLE XV: VIBRACIÓN SUTIL
   (solo cuando faltan < 10 seg)
================================ */

function pulseLastSeconds() {
  const s = document.getElementById("seconds");
  if (!s) return;

  const seconds = parseInt(s.textContent, 10);
  if (seconds <= 10) {
    s.style.transform = "scale(1.15)";
    setTimeout(() => {
      s.style.transform = "scale(1)";
    }, 300);
  }
}

setInterval(pulseLastSeconds, 1000);
