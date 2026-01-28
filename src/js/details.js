import { menuData } from './menuData.js';

// --- Dynamic Rendering Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Get ID from URL
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');

    if (idParam) {
        const item = menuData.find(i => i.id == idParam);

        if (item) {
            // 1. Image
            const imgEl = document.querySelector('.product-image img');
            if (imgEl) {
                imgEl.src = item.image;
                imgEl.alt = item.name;
            }

            // 2. Title
            const titleEl = document.querySelector('.product-title');
            if (titleEl) titleEl.textContent = item.name;

            // 3. Description (Short)
            const shortDescEl = document.querySelector('.product-short-desc');
            if (shortDescEl) shortDescEl.textContent = item.desc;

            // 4. Description (Tab)
            const tabDescEl = document.querySelector('#description .description-content p');
            if (tabDescEl) {
                tabDescEl.textContent = `Experience the authentic taste of our ${item.name}.
                 ${item.desc} Prepared with fresh ingredients and traditional spices.`;
            }

            // 5. Category
            const categoryEl = document.querySelector('.product-meta-info .meta-item:nth-child(2) .meta-value');
            if (categoryEl) categoryEl.textContent = item.category;

            // 6. Price
            const priceWrapper = document.querySelector('.product-price-wrapper');
            if (priceWrapper) {
                const originalPrice = item.price;
                const offerPercent = item.offer ? parseInt(item.offer) : 0;

                if (offerPercent > 0) {
                    const discountedPrice = Math.round(originalPrice - (originalPrice * offerPercent) / 100);
                    priceWrapper.innerHTML = `
               <h4 class="old-price">${originalPrice}TK</h4>
               <h3 class="product-price">${discountedPrice}TK</h3>
            `;
                } else {
                    priceWrapper.innerHTML = `
               <h3 class="product-price">${originalPrice}TK</h3>
            `;
                }
            }
        }
    }
});

// Tab Switching Logic
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked button
                btn.classList.add('active');

                // Show corresponding content
                const tabId = btn.dataset.tab;
                const content = document.getElementById(tabId);
                if (content) {
                    content.classList.add('active');
                }
            });
        });
    }

    // Wishlist Toggle
    const wishlistBtn = document.querySelector('.wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = wishlistBtn.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#e4c590'; // Skin primary color
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });
    }

    // Rating Selection in Form
    const starRating = document.querySelector('.form-rating-stars');
    if (starRating) {
        const stars = starRating.querySelectorAll('i');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                // Reset all
                stars.forEach(s => s.classList.remove('fas'));
                stars.forEach(s => s.classList.add('far'));

                // Fill up to clicked
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.remove('far');
                    stars[i].classList.add('fas');
                }
            });
        });
    }
});
document.querySelectorAll('.quantity-selector').forEach(selector => {
    const minusBtn = selector.querySelector('.minus');
    const plusBtn = selector.querySelector('.plus');
    const input = selector.querySelector('.qty-input');

    plusBtn.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1;
    });

    minusBtn.addEventListener('click', () => {
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
});