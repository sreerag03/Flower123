const cover     = document.getElementById('cover');
const wrapper   = document.getElementById('videoWrapper');
const video     = document.getElementById('bouquetVideo');
const giftBtn   = document.getElementById('giftBtn');

giftBtn.addEventListener('click', () => {
  // hide cover, reveal video
  cover.classList.add('hidden');
  wrapper.classList.remove('hidden');
  // trigger fade-in 
  requestAnimationFrame(() => wrapper.classList.add('show'));
  // autoplay
  video.play().catch(() => {
    /* if browser blocks autoplay, user can click play */
  });
});
