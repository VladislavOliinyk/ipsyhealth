import 'aos/dist/aos.css';
import AOS from 'aos';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import './styles.css';

// FA for icons via CDN injection
const fa = document.createElement('link');
fa.rel = 'stylesheet';
fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
document.head.appendChild(fa);

import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { VisionValues } from './components/VisionValues.js';
import { Projects } from './components/Projects.js';
import { Education } from './components/Education.js';
import { Updates } from './components/Updates.js';
import { Partners } from './components/Partners.js';
import { Footer } from './components/Footer.js';

const app = document.getElementById('app');
app.innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${VisionValues()}
  ${Projects()}
  ${Education()}
  ${Updates()}
  ${Partners()}
  ${Footer()}
`;

// Year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Mobile nav
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobileNav');
if (burger && mobile){ burger.addEventListener('click', ()=> mobile.classList.toggle('hidden')); }

// AOS
AOS.init({ duration: 700, easing: 'ease-out', once: true });

// Swipers
new Swiper('.visionSwiper', {
  loop: true,
  pagination: { el: '.visionSwiper .swiper-pagination', clickable: true },
  navigation: { nextEl: '.visionSwiper .swiper-button-next', prevEl: '.visionSwiper .swiper-button-prev' },
});
new Swiper('.partnersSwiper', {
  loop: true,
  autoplay: { delay: 1800 },
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 6 } },
  pagination: { el: '.partnersSwiper .swiper-pagination', clickable: true },
});
