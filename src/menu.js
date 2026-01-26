import './css/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/css';


// Dynamic Menu Rendering
import { menuData } from './js/menuData.js';

const menuContainer = document.querySelector('.menu-items');
const filterBtns = document.querySelectorAll('.menu-filter-btn');

if (menuContainer) {
    // Function to render menu items
    const renderMenu = (category) => {
        menuContainer.innerHTML = ''; // Clear existing items

        const filteredItems = category === 'All'
            ? menuData
            : menuData.filter(item => item.category === category);

        filteredItems.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-item-card group cursor-pointer';
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (index % 3) * 100);

            card.addEventListener('click', () => {
                window.location.href = `food-details.html`;
            });

            // --- PRICE LOGIC ---
            const originalPrice = item.price;
            const offerPercent = item.offer ? parseInt(item.offer) : 0;

            let priceHTML = `<h3 class="menu-item-price">${item.price}TK</h3>`;

            if (offerPercent > 0) {
                const discountedPrice = Math.round(
                    originalPrice - (originalPrice * offerPercent) / 100
                );

                priceHTML = `
          <div class="flex items-center gap-2">
            <h4 class="menu-item-price-original">
              ${originalPrice}TK
            </h4>
            <h3 class="menu-item-price">
              ${discountedPrice}TK
            </h3>
          </div>
        `;
            }

            card.innerHTML = `
      <div class="menu-item-image-wrapper relative">
        <img src="${item.image}" alt="${item.name}" class="menu-item-image">

        ${offerPercent > 0
                    ? `<span class="absolute top-2 right-2 bg-skin-secondary-2 text-white text-xs font-semibold px-2 py-1 rounded">
                     ${offerPercent}% OFF
                   </span>`
                    : ''
                }
      </div>

      <div class="menu-item-content">
        <h3 class="menu-item-title">${item.name}</h3>
        ${priceHTML}
        <p class="menu-item-desc">${item.desc}</p>
        <button class="menu-item-btn">Add to Cart</button>
      </div>
    `;

            menuContainer.appendChild(card);
        });



        // Refresh AOS to detect new elements
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    };

    // Initial Render
    renderMenu('All');

    // Filter Button Event Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => {
                b.classList.remove('menu-filter-btn-active');
            });

            // Add active class to clicked button
            btn.classList.add('menu-filter-btn-active');
            const category = btn.dataset.category;
            renderMenu(category);
        });
    });
}