import './css/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/css';
import navbarUrl from './components/navbar.html?raw';
import footerUrl from './components/footer.html?raw';

// Initialize AOS
AOS.init();

// Inject Components
document.getElementById('header-placeholder').innerHTML = navbarUrl;
document.getElementById('footer-placeholder').innerHTML = footerUrl;

// For example, mobile menu toggle:
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.toggle("mobile-menu-show");
    console.log("Mobile menu toggled");
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('mobile-menu-show') &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove('mobile-menu-show');
      console.log("Mobile menu closed by outside click");
    }
  });

}
//Apply Active 
const currentPath = window.location.pathname;
const currentHash = window.location.hash;

// Desktop nav links only
const navLinks = document.querySelectorAll('.nav-links .nav-link');

// Clear any existing active state
navLinks.forEach(link => link.classList.remove('active'));

navLinks.forEach(link => {
  const href = link.getAttribute('href');

  // Page links (/ , /menu.html)
  if (href === currentPath) {
    link.classList.add('active');
  }

  // Home page edge case
  if (href === '/' && currentPath === '/') {
    link.classList.add('active');
  }
});


// Navbar Scroll Effect
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.nav-fixed');

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Toggle background on scroll
    if (currentScrollY > 10) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }

    // If scrolled down and past 50px, hide navbar
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      navbar.classList.add('nav-hidden');
    } else {
      // If scrolled up, show navbar (retains background loop logic via scroll event firing)
      navbar.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  });
}

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

const progressEl = document.getElementById("progress");
if (progressEl) {
  progressEl.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
}

const cards = document.querySelectorAll('.swiper-slide');

cards.forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = `menu.html`;
  });
});


// Swiper
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroSwiperEl = document.querySelector('.hero-swiper');
if (heroSwiperEl) {
  const swiper = new Swiper('.hero-swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    loop: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// Menu Swiper
const menuSwiperEl = document.querySelector('.menu-swiper');
if (menuSwiperEl) {
  const menuSwiper = new Swiper('.menu-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
}

const stats = document.querySelectorAll(".stat-number");
let hasRun = false;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasRun) {
      hasRun = true;
      startAllCounts();
    }
  });
}, { threshold: 0.5 });

stats.forEach(stat => observer.observe(stat));

function startAllCounts() {
  stats.forEach(stat => {
    const finalValue = parseFloat(stat.dataset.final);
    const hasPlus = stat.dataset.plus === "true"; // Fix: Check for string "true"
    const isDecimal = stat.dataset.decimal === "true"; // Fix: Check for string "true"
    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // EaseOutExpo function for smooth deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentVal = finalValue * ease;

      if (isDecimal) {
        stat.textContent = currentVal.toFixed(1);
      } else {
        stat.textContent = Math.floor(currentVal);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // Ensure final value is exact and append plus if needed
        stat.textContent = (isDecimal ? finalValue : finalValue) + (hasPlus ? "+" : "");
      }
    }

    requestAnimationFrame(update);
  });
}

