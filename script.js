
navigator.getBattery().then(function(battery) {
  function updateBattery() {
    const level = Math.floor(battery.level * 100);
    document.getElementById('battery').textContent = `🔋 Battery: ${level}%`;
  }
  updateBattery();
  battery.addEventListener('levelchange', updateBattery);
});

