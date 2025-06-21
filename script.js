document.getElementById('bloomBtn').addEventListener('click', function () {
  const bouquet = document.getElementById('bouquet');
  const audio = document.getElementById('bgMusic');

  bouquet.classList.remove('hidden');
  bouquet.classList.add('show');

  // Play music (gentle, autoplay-friendly)
  if (audio.paused) {
    audio.volume = 0.4;
    audio.play().catch(() => {
      console.log("Autoplay blocked — user interaction needed.");
    });
  }
});
