import{n as e,t}from"./main-BW5gnchp.js";import{t as n}from"./menuData-Dt87xkXX.js";var r=e(t(),1),i=document.querySelector(`.menu-items`),a=document.querySelectorAll(`.menu-filter-btn`);if(i){let e=e=>{i.innerHTML=``,(e===`All`?n:n.filter(t=>t.category===e)).forEach((e,t)=>{let n=document.createElement(`div`);n.className=`menu-item-card group cursor-pointer`,n.setAttribute(`data-aos`,`fade-up`),n.setAttribute(`data-aos-delay`,t%3*100),n.addEventListener(`click`,()=>{window.location.href=`food-details.html?id=${e.id}`});let r=e.price,a=e.offer?parseInt(e.offer):0,o=`<h3 class="menu-item-price">${e.price}TK</h3>`;a>0&&(o=`
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
    `,i.appendChild(n)}),setTimeout(()=>{r.default.refresh()},100)};e(`All`),a.forEach(t=>{t.addEventListener(`click`,()=>{a.forEach(e=>{e.classList.remove(`menu-filter-btn-active`)}),t.classList.add(`menu-filter-btn-active`);let n=t.dataset.category;e(n)})})}