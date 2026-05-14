/* ============================================================
   FRESHMART — app.js
   Products data, rendering, theme, search, scroll animations,
   WhatsApp ordering, mobile menu.
   ============================================================ */

'use strict';

/* ── CONSTANTS ──────────────────────────────────────────────── */
const WA_NUMBER  = '2348113545998';
const WA_BASE    = `https://wa.me/${WA_NUMBER}?text=`;

/* ── PRODUCT DATA ───────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: 'Parboiled Foreign Rice',
    unit: '1 rubber paint',
    price: 4900,
    category: 'rice',
    stock: 'instock',
    emoji: '🌾',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Parboiled Nigerian Rice',
    unit: '1 rubber paint',
    price: 12500,
    category: 'rice',
    stock: 'instock',
    emoji: '🌾',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Brown Beans',
    unit: '1 rubber paint',
    price: 4100,
    category: 'beans',
    stock: 'instock',
    emoji: '🫘',
    img: 'https://images.unsplash.com/photo-1515543904379-3d757398ece0?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Milk Beans',
    unit: '5kg bag',
    price: 0,
    category: 'beans',
    stock: 'instock',
    emoji: '🫘',
    img: 'https://images.unsplash.com/photo-1515543904379-3d757398ece0?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'White Garri',
    unit: '1 rubber paint',
    price: 1200,
    category: 'garri',
    stock: 'instock',
    emoji: '',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Yellow Garri',
    unit: '1 rubber paint',
    price: 1200,
    category: 'garri',
    stock: 'outstock',
    emoji: '🌽',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Palm Oil',
    unit: '1 bottle(75cl)',
    price: 1800,
    category: 'oil',
    stock: 'instock',
    emoji: '🫙',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    name: 'Palm Oil',
    unit: '5 litres',
    price: 10800,
    category: 'oil',
    stock: 'instock',
    emoji: '🫙',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 9,
    name: 'Groundnut Oil',
    unit: ' 1 bottle(75cl)',
    price: 2400,
    category: 'oil',
    stock: 'instock',
    emoji: '🫙',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 10,
    name: 'Frozen Chicken',
    unit: '1kg pack',
    price: 0,
    category: 'frozen',
    stock: 'outstock',
    emoji: '🍗',
    img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 11,
    name: 'Frozen Turkey Wings',
    unit: '1kg pack',
    price: 0,
    category: 'frozen',
    stock: 'outstock',
    emoji: '🍗',
    img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 12,
    name: 'Frozen Panla Fish',
    unit: '1kg pack',
    price: 0,
    category: 'frozen',
    stock: 'outstock',
    emoji: '🐟',
    img: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 13,
    name: 'Frozen Kote',
    unit: '1kg pack',
    price: 0,
    category: 'frozen',
    stock: 'outstock',
    emoji: '🐟',
    img: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 14,
    name: 'Golden Penny Spaghetti',
    unit: '500g pack',
    price: 1100,
    category: 'pasta',
    stock: 'instock',
    emoji: '🍝',
    img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 15,
    name: 'Semovita',
    unit: '2.5kg pack',
    price: 4000,
    category: 'Semovita',
    stock: 'instock',
    emoji: '🌾',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 16,
    name: 'Tomato Paste',
    unit: '3-pack (70g each)',
    price: 1500,
    category: 'spices',
    stock: 'instock',
    emoji: '🍅',
    img: 'https://images.unsplash.com/photo-1546094096-0df4bcabd337?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 17,
    name: 'Onions',
    unit: '1kg',
    price: 900,
    category: 'spices',
    stock: 'instock',
    emoji: '🧅',
    img: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 18,
    name: 'Mixed Spice Bundle',
    unit: 'Curry, thyme, pepper & more',
    price: 2200,
    category: 'spices',
    stock: 'instock',
    emoji: '🌶️',
    img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 19,
    name: 'Malt Drink',
    unit: '6-pack (33cl cans)',
    price: 0,
    category: 'drinks',
    stock: 'outstock',
    emoji: '🥤',
    img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 20,
    name: 'Bottled Water',
    unit: '12-pack (75cl)',
    price: 0,
    category: 'drinks',
    stock: 'outstock',
    emoji: '💧',
    img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&auto=format&fit=crop&q=80',
  },
];

/* ── STUDENT PACKAGES ───────────────────────────────────────── */
const PACKAGES = [
  {
    id: 'p1',
    icon: '🎒',
    name: 'Survival Pack',
    desc: 'Perfect for tight weeks. Covers your basics without breaking the bank.',
    items: ['2kg Rice', '1kg Beans', '2kg White Garri', '1L Palm Oil', 'Tomato paste (3)', 'Mixed Spice Bundle'],
    price: 5000,
    originalPrice: 6200,
    featured: false,
    waMsg: 'Hello FreshMart! I want to order the Survival Pack (₦5,000). Please confirm availability and delivery details.',
  },
  {
    id: 'p2',
    icon: '📅',
    name: 'Month Starter',
    desc: 'Stock up your kitchen for the month. Best value for money.',
    items: ['5kg Rice', '2kg Beans', '3L Palm Oil', 'Mixed Spice Bundle', '1kg Frozen Chicken', 'Tomato paste (6)'],
    price: 9500,
    originalPrice: 12000,
    featured: true,
    waMsg: 'Hello FreshMart! I want to order the Month Starter Pack (₦9,500). Please confirm availability and delivery details.',
  },
  {
    id: 'p3',
    icon: '🍳',
    name: 'Hostel Bundle',
    desc: 'Everything a hostel room needs. From staples to cooking essentials.',
    items: ['3kg Rice', '2kg Garri', '3L Groundnut Oil', '1kg Spaghetti', 'Tomato paste (3)', '1kg Onions'],
    price: 7000,
    originalPrice: 8800,
    featured: false,
    waMsg: 'Hello FreshMart! I want to order the Hostel Bundle (₦7,000). Please confirm availability and delivery details.',
  },
  {
    id: 'p4',
    icon: '📚',
    name: 'Exam Week Pack',
    desc: 'Quick-cook items for when you need to eat but cannot leave your books.',
    items: ['2x Spaghetti (1kg)', '1kg Beans', 'Tomato paste (6)', 'Mixed Spice Bundle', '6-pack Malt Drinks', '12-pack Water'],
    price: 3800,
    originalPrice: 4800,
    featured: false,
    waMsg: 'Hello FreshMart! I want to order the Exam Week Pack (₦3,800). Please confirm availability and delivery details.',
  },
];

/* ── STATE ──────────────────────────────────────────────────── */
let activeFilter = 'all';
let searchQuery  = '';

/* ── DOM REFS (set after DOMContentLoaded) ──────────────────── */
let productGrid, packagesGrid, filterTabs, searchInput, searchClear, noResults;
let navbar, themeToggle, hamburger, mobileMenu, backTop;

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Grab DOM refs
  productGrid  = document.getElementById('productGrid');
  packagesGrid = document.getElementById('packagesGrid');
  filterTabs   = document.getElementById('filterTabs');
  searchInput  = document.getElementById('searchInput');
  searchClear  = document.getElementById('searchClear');
  noResults    = document.getElementById('noResults');
  navbar       = document.getElementById('navbar');
  themeToggle  = document.getElementById('themeToggle');
  hamburger    = document.getElementById('hamburger');
  mobileMenu   = document.getElementById('mobileMenu');
  backTop      = document.getElementById('backTop');

  // Init subsystems
  initTheme();
  renderProducts();
  renderPackages();
  initSearch();
  initFilters();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initBackTop();
});

/* ============================================================
   THEME
============================================================ */
function initTheme() {
  const saved = localStorage.getItem('fm-theme') || 'light';
  applyTheme(saved);
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('fm-theme', theme);
}

/* ============================================================
   PRODUCTS — RENDER
============================================================ */
function renderProducts() {
  const q   = searchQuery.trim().toLowerCase();
  const cat = activeFilter;

  const filtered = PRODUCTS.filter(p => {
    const matchCat  = cat === 'all' || p.category === cat;
    const matchSearch = !q
      || p.name.toLowerCase().includes(q)
      || p.category.toLowerCase().includes(q)
      || p.unit.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = '';
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
    productGrid.innerHTML = filtered.map((p, i) => productCardHTML(p, i)).join('');
  }
}

function productCardHTML(p, idx) {
  const stockLabel = { instock: 'In Stock', lowstock: 'Low Stock', outstock: 'Out of Stock' }[p.stock];
  const stockClass = { instock: 'badge-instock', lowstock: 'badge-lowstock', outstock: 'badge-outstock' }[p.stock];
  const categoryLabel = p.category.charAt(0).toUpperCase() + p.category.slice(1);
  const disabled = p.stock === 'outstock' ? 'disabled style="opacity:.5;cursor:not-allowed;"' : '';
  const delay = `animation-delay:${idx * 0.05}s`;

  return `
    <article class="pcard" style="${delay}">
      <div class="pcard-img-wrap">
        <img
          class="pcard-img"
          src="${p.img}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        >
        <div class="pcard-img-placeholder" style="display:none;">${p.emoji}</div>
        <span class="pcard-badge-stock ${stockClass}">${stockLabel}</span>
        <span class="pcard-category">${categoryLabel}</span>
      </div>
      <div class="pcard-body">
        <h3 class="pcard-name">${p.name}</h3>
        <p class="pcard-unit">${p.unit}</p>
        <p class="pcard-price">₦${p.price.toLocaleString()}</p>
        <button
          class="pcard-btn"
          onclick="orderProduct('${escapeStr(p.name)}', '${p.unit}', ${p.price})"
          ${disabled}
          aria-label="Order ${p.name} on WhatsApp"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order on WhatsApp
        </button>
      </div>
    </article>
  `;
}

/* ============================================================
   PACKAGES — RENDER
============================================================ */
function renderPackages() {
  packagesGrid.innerHTML = PACKAGES.map((pkg, i) => packageCardHTML(pkg, i)).join('');
}

function packageCardHTML(pkg, idx) {
  const itemsHTML  = pkg.items.map(item => `<li class="pkg-item">${item}</li>`).join('');
  const featuredClass = pkg.featured ? 'pkg-featured' : '';
  const savings    = pkg.originalPrice - pkg.price;
  const delay      = `animation-delay:${idx * 0.08}s`;

  return `
    <article class="pkg-card ${featuredClass}" style="${delay}">
      ${pkg.featured ? '<div class="pkg-featured-badge">Most Popular 🔥</div>' : ''}
      <div class="pkg-icon">${pkg.icon}</div>
      <h3 class="pkg-name">${pkg.name}</h3>
      <p class="pkg-desc">${pkg.desc}</p>
      <ul class="pkg-items">${itemsHTML}</ul>
      <div class="pkg-price-row">
        <span class="pkg-price">₦${pkg.price.toLocaleString()}</span>
        <span class="pkg-price-orig">₦${pkg.originalPrice.toLocaleString()}</span>
        <span class="pkg-savings">Save ₦${savings.toLocaleString()}</span>
      </div>
      <a
        href="${WA_BASE}${encodeURIComponent(pkg.waMsg)}"
        target="_blank"
        rel="noopener"
        class="pkg-btn"
        aria-label="Order ${pkg.name} on WhatsApp"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Order This Package
      </a>
    </article>
  `;
}

/* ============================================================
   WHATSAPP ORDER
============================================================ */
function orderProduct(name, unit, price) {
  const msg = `Hello FreshMart! 👋\n\nI want to order:\n\n📦 *${name}* (${unit})\n💰 ₦${Number(price).toLocaleString()}\n\nPlease confirm availability and send me your delivery details.\n\nDelivery address: `;
  window.open(`${WA_BASE}${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

// Exposed globally for onclick in HTML strings
window.orderProduct = orderProduct;

/* ============================================================
   SEARCH
============================================================ */
function initSearch() {
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    searchClear.classList.toggle('hidden', !searchQuery);
    renderProducts();
  });
}

function clearSearch() {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.add('hidden');
  renderProducts();
  searchInput.focus();
}
window.clearSearch = clearSearch;

/* ============================================================
   FILTER TABS
============================================================ */
function initFilters() {
  filterTabs.addEventListener('click', e => {
    const btn = e.target.closest('.ftab');
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    filterTabs.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
  });
}

/* ============================================================
   MOBILE MENU
============================================================ */
function initMobileMenu() {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   SCROLL SPY — Navbar shadow
============================================================ */
function initScrollSpy() {
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============================================================
   SCROLL REVEAL — Intersection Observer
============================================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================================
   BACK TO TOP
============================================================ */
function initBackTop() {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('hidden', window.scrollY < 500);
  }, { passive: true });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   UTILS
============================================================ */
function escapeStr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/* ── Active nav link highlight on scroll ───────────────────── */
(function () {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const links    = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    links.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}`
        ? 'var(--green-700)' : '';
    });
  }, { passive: true });
})();
