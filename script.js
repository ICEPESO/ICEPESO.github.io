const unlockTime = new Date('2026-10-03T00:00:00').getTime();
const main = document.querySelector('main');
const timer = { days: document.querySelector('#days'), hours: document.querySelector('#hours'), minutes: document.querySelector('#minutes'), seconds: document.querySelector('#seconds') };

function updateCountdown() {
  const remaining = Math.max(0, unlockTime - Date.now());
  const values = { days: Math.floor(remaining / 86400000), hours: Math.floor(remaining / 3600000) % 24, minutes: Math.floor(remaining / 60000) % 60, seconds: Math.floor(remaining / 1000) % 60 };
  Object.entries(values).forEach(([unit, value]) => { timer[unit].textContent = String(value).padStart(2, '0'); });
  if (!remaining) { main.classList.remove('locked'); main.classList.add('unlocked'); clearInterval(countdownInterval); }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

const soundButton = document.querySelector('.sound');
soundButton.addEventListener('click', () => {
  const isOn = soundButton.classList.toggle('active');
  soundButton.textContent = isOn ? '♫' : '⌇⌇';
  soundButton.setAttribute('aria-label', isOn ? 'Ambient sound on' : 'Ambient sound off');
});
