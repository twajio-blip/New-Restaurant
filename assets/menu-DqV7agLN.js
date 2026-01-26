import{n as e,t}from"./main-Pc0Enkm0.js";var n=e(t(),1);const r=[{id:111,name:`Chicken Biryani`,price:`350`,category:`Rice & Pulao`,desc:`Spiced rice and chicken cooked to perfection.`,image:`/src/image/Menu-Image/Chicken-Biryani.jpg`,offer:20},{id:112,name:`Beef Biryani`,price:`320`,category:`Rice & Pulao`,desc:`Flavorful biryani with melt-in-the-mouth beef.`,image:`/src/image/Menu-Image/Beef-Biryani.jpg`},{id:113,name:`Mutton Kacchi`,price:`380`,category:`Rice & Pulao`,desc:`Classic mutton biryani with rich spices.`,image:`/src/image/Menu-Image/Mutton-Kacchi.jpg`},{id:201,name:`Fish Curry`,price:`280`,category:`Fish & Seafood`,desc:`Traditional fish curry cooked with local spices.`,image:`/src/image/Menu-Image/Fish-Curry.jpg`},{id:202,name:`Grilled Prawn`,price:`420`,category:`Fish & Seafood`,desc:`Juicy prawns grilled with garlic and butter.`,image:`/src/image/Menu-Image/Grilled-Prawn.jpg`},{id:203,name:`Fried Fish Fillet`,price:`350`,category:`Fish & Seafood`,desc:`Crispy fried fish fillet served golden brown.`,image:`/src/image/Menu-Image/Fried-Fish-Fillet.jpg`},{id:301,name:`Beef Curry`,price:`300`,category:`Meat & Poultry`,desc:`Slow-cooked beef curry with aromatic spices.`,image:`/src/image/Menu-Image/Beef-Curry.jpg`},{id:302,name:`Chicken Roast`,price:`300`,category:`Meat & Poultry`,desc:`Oven-roasted chicken with herbs and spices.`,image:`/src/image/Menu-Image/Chicken-Roast.jpg`},{id:303,name:`Mutton Korma`,price:`350`,category:`Meat & Poultry`,desc:`Creamy mutton korma with rich gravy.`,image:`/src/image/Menu-Image/Mutton-Korma.jpg`},{id:401,name:`Chicken Singara`,price:`120`,category:`Snacks & Fritters`,desc:`Crispy pastry stuffed with spiced chicken.`,image:`/src/image/Menu-Image/Chicken-Singara.jpg`},{id:402,name:`Vegetable Pakora`,price:`100`,category:`Snacks & Fritters`,desc:`Deep-fried vegetable fritters.`,image:`/src/image/Menu-Image/Vegetable-Pakora.jpg`},{id:403,name:`French Fries`,price:`150`,category:`Snacks & Fritters`,desc:`Golden crispy potato fries.`,image:`/src/image/Menu-Image/French-Fries.jpg`},{id:501,name:`Mishti Doi`,price:`140`,category:`Sweets & Desserts`,desc:`Traditional Bangladeshi sweet yogurt with caramelized flavor.`,image:`/src/image/Menu-Image/Mishti-Doi.jpg`},{id:502,name:`Chocolate Brownie`,price:`220`,category:`Sweets & Desserts`,desc:`Rich chocolate brownie with soft center.`,image:`/src/image/Menu-Image/Chocolate-Brownie.jpg`},{id:503,name:`Caramel Pudding`,price:`160`,category:`Sweets & Desserts`,desc:`Smooth caramel custard pudding with rich milk flavor.`,image:`/src/image/Menu-Image/Caramel-Pudding.jpg`},{id:601,name:`Fresh Lemonade`,price:`120`,category:`Drinks`,desc:`Refreshing lemonade with fresh lemon juice.`,image:`/src/image/Menu-Image/Fresh-Lemonade.jpg`},{id:602,name:`Cold Coffee`,price:`180`,category:`Drinks`,desc:`Chilled coffee blended with milk.`,image:`/src/image/Menu-Image/Cold-Coffee.jpg`},{id:603,name:`Mango Juice`,price:`160`,category:`Drinks`,desc:`Fresh mango juice served chilled.`,image:`/src/image/Menu-Image/Mango-Juice.jpg`}];var i=document.querySelector(`.menu-items`),a=document.querySelectorAll(`.menu-filter-btn`);if(i){let e=e=>{i.innerHTML=``,(e===`All`?r:r.filter(t=>t.category===e)).forEach((e,t)=>{let n=document.createElement(`div`);n.className=`menu-item-card group cursor-pointer`,n.setAttribute(`data-aos`,`fade-up`),n.setAttribute(`data-aos-delay`,t%3*100),n.addEventListener(`click`,()=>{window.location.href=`food-details.html`});let r=e.price,a=e.offer?parseInt(e.offer):0,o=`<h3 class="menu-item-price">${e.price}TK</h3>`;a>0&&(o=`
          <div class="flex items-center gap-2">
            <h4 class="menu-item-price-original">
              ${r}TK
            </h4>
            <h3 class="menu-item-price">
              ${Math.round(r-r*a/100)}TK
            </h3>
          </div>
        `),n.innerHTML=`
      <div class="menu-item-image-wrapper relative">
        <img src="${e.image}" alt="${e.name}" class="menu-item-image">

        ${a>0?`<span class="absolute top-2 right-2 bg-skin-secondary-2 text-white text-xs font-semibold px-2 py-1 rounded">
                     ${a}% OFF
                   </span>`:``}
      </div>

      <div class="menu-item-content">
        <h3 class="menu-item-title">${e.name}</h3>
        ${o}
        <p class="menu-item-desc">${e.desc}</p>
        <button class="menu-item-btn">Add to Cart</button>
      </div>
    `,i.appendChild(n)}),setTimeout(()=>{n.default.refresh()},100)};e(`All`),a.forEach(t=>{t.addEventListener(`click`,()=>{a.forEach(e=>{e.classList.remove(`menu-filter-btn-active`)}),t.classList.add(`menu-filter-btn-active`);let n=t.dataset.category;e(n)})})}