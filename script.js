.hero {
  height: 100vh;
  background: url("images/hero.jpg") center/cover no-repeat;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.4));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.section {
  padding: 80px 20px;
  text-align: center;
}

.invitation,
.event,
.countdown {
  background-image: url("images/fondo-rosa.png");
  background-repeat: repeat;
  background-size: 320px auto;
}

.photo-full {
  height: 80vh;
  background: url("images/foto1.jpg") center/cover no-repeat;
}

<div id="timer">
  <span><b id="days"></b> DÍAS</span>
  <span><b id="hours"></b> HORAS</span>
  <span><b id="minutes"></b> MIN</span>
  <span><b id="seconds"></b> SEG</span>
</div>

const eventDate = new Date("March 7, 2026 21:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((diff / (1000*60*60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / 60000) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}, 1000);

