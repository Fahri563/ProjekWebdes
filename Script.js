// Navbar: highlight active, responsive toggle (mobile)
document.addEventListener('DOMContentLoaded', function () {
  // 1. Navbar highlight (klik/tap)
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.navbar-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // 2. Fade-in animasi saat scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  function fadeInOnScroll() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('visible');
    });
  }
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();

  // 3. Slider animasi (HomeScreen)
  const sliders = document.querySelectorAll('.slider-img');
  const dots = document.querySelectorAll('.slider-dot');
  let sliderIndex = 0;
  if (sliders.length && dots.length) {
    function showSlide(idx) {
      sliders.forEach((img, i) => img.classList.toggle('active', i === idx));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    }
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        sliderIndex = i;
        showSlide(sliderIndex);
      });
    });
    setInterval(() => {
      sliderIndex = (sliderIndex + 1) % sliders.length;
      showSlide(sliderIndex);
    }, 4000);
  }

  // 4. Ripple effect pada tombol/link interaktif
  document.querySelectorAll('button, .sosmed-btn, .layanan-card-link').forEach(btn => {
    btn.addEventListener('click', function (e) {
      let ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = (e.offsetX) + 'px';
      ripple.style.top = (e.offsetY) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
});