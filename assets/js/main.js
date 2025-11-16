document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
if (burger && mobileNav){
  burger.addEventListener('click', ()=> mobileNav.classList.toggle('hidden'));
}

// AOS
AOS.init({ duration: 700, easing: 'ease-out', once: true });

// Swiper - Vision/Values
new Swiper('.visionSwiper', {
  loop: true,
  pagination: { el: '.visionSwiper .swiper-pagination', clickable: true },
  navigation: { nextEl: '.visionSwiper .swiper-button-next', prevEl: '.visionSwiper .swiper-button-prev' },
});

// Swiper - Partners (autoplay, responsive slides)
new Swiper('.partnersSwiper', {
  loop: true,
  autoplay: { delay: 2000 },
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    640: { slidesPerView: 3 },
    1024:{ slidesPerView: 5 }
  },
  pagination: { el: '.partnersSwiper .swiper-pagination', clickable: true },
});
