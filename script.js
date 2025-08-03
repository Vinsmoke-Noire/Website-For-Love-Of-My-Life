const targetDate = new Date('2025-12-25T00:00:00'); // ganti tanggal spesial di sini
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerText = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik 💕`;
}

setInterval(updateCountdown, 1000);