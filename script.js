// Matrix-style background with "WATSON-XD"
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "WATSON-XD ";
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
  ctx.fillStyle = "rgba(7,16,41,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px Orbitron";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Runtime timer
let start = Date.now();
function updateRuntime() {
  const diff = Date.now() - start;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById('runtime').textContent = `⏳ Runtime: ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateRuntime, 1000);

// Battery status (if supported)
navigator.getBattery?.().then(battery => {
  function updateBattery() {
    const pct = Math.floor(battery.level * 100);
    document.getElementById('battery').textContent = `🔋 Battery: ${pct}%`;
  }
  updateBattery();
  battery.addEventListener('levelchange', updateBattery);
});
