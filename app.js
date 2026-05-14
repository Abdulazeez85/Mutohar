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
    unit: '1 Rubber Paint',
    price: 4900,
    category: 'rice',
    stock: 'instock',
    emoji: '🌾',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778743867/ricepainter_utw8fg.jpg',
  },
  {
    id: 2,
    name: 'Parboiled Nigerian Rice',
    unit: '1 Rubber Paint',
    price: 4700,
    category: 'rice',
    stock: 'instock',
    emoji: '🌾',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778743867/ricepainter_utw8fg.jpg',
  },
  {
    id: 3,
    name: 'Brown Beans',
    unit: '1 Rubber Paint',
    price: 4000,
    category: 'beans',
    stock: 'instock',
    emoji: '🫘',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778744050/oloyin-beans_nuiqeg.webp',
  },
  {
    id: 4,
    name: 'Milk Beans',
    unit: '1 Rubber Paint',
    price:0,
    category: 'beans',
    stock: 'outstock',
    emoji: '🫘',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778744981/milk_beans_tok2gy.jpg',
  },
  {
    id: 5,
    name: 'White Garri',
    unit: '1 Rubber Paint',
    price: 1200,
    category: 'garri',
    stock: 'instock',
    emoji: '🌽',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778744982/garri-white_otwd8z.webp',
  },
  {
    id: 6,
    name: 'Yellow Garri',
    unit: '1 Rubber Paint',
    price: 0,
    category: 'garri',
    stock: 'outstock',
    emoji: '🌽',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778744981/yellow_garri_xo1vdp.jpg',
  },
  {
    id: 7,
    name: 'Palm Oil',
    unit: '1 bottle (75cl)',
    price: 1800,
    category: 'oil',
    stock: 'instock',
    emoji: '🫙',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778744981/palmoil_ceqiew.jpg',
  },
  {
    id: 8,
    name: 'Palm Oil',
    unit: '5 litres',
    price: 10800,
    category: 'oil',
    stock: 'instock',
    emoji: '🫙',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778746979/palm_oil_5_litre_jgg0ot.jpg',
  },
  {
    id: 9,
    name: 'Groundnut Oil',
    unit: '1 bottle 75cl',
    price: 2400,
    category: 'oil',
    stock: 'instock',
    emoji: '🫙',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778744981/ororo_w2zwll.jpg',
  },
  {
    id: 10,
    name: 'Groundnut Oil',
    unit: '5 Litre',
    price: 14400,
    category: 'oil',
    stock: 'instock',
    emoji: '🫙',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778747060/ororo_5_litre_lxig97.jpg',
  },
  {
    id: 11,
    name: ' Golden Penny Spaghetti',
    unit: '500g pack',
    price: 1100,
    category: 'pasta',
    stock: 'instock',
    emoji: '🍝',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745006/spag_big_hw1pgy.jpg',
  },
  {
    id: 12,
    name: ' Golden Penny Spaghettini',
    unit: '500g pack',
    price: 1100,
    category: 'pasta',
    stock: 'instock',
    emoji: '🍝',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745005/spag_tiny_yvbauj.jpg',
  },
  {
    id: 13,
    name: ' Mamas Pride',
    unit: '500g pack',
    price: 900,
    category: 'pasta',
    stock: 'instock',
    emoji: '🍝',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745006/mamas_pride_wi5k5d.jpg',
  },
  {
    id: 14,
    name: ' Crown Big',
    unit: '500g pack',
    price: 1000,
    category: 'pasta',
    stock: 'instock',
    emoji: '🍝',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745005/crown_big_btik2i.jpg',
  },
  {
    id: 15,
    name: ' Crown Tiny',
    unit: '500g pack',
    price: 1050,
    category: 'pasta',
    stock: 'instock',
    emoji: '🍝',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745005/crown_big_btik2i.jpg',
  },
  {
    id: 16,
    name: ' Aunty B Spaghetti',
    unit: '500g pack',
    price: 880,
    category: 'pasta',
    stock: 'instock',
    emoji: '🍝',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745005/aunty_b_spag_rllfui.jpg',
  },
  {
    id: 17,
    name: 'Golden Pennny Semo',
    unit: '2.5kg pack',
    price: 4000,
    category: 'semo',
    stock: 'instock',
    emoji: '🌾',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745436/2.5kg_semo_golden_penny_ivvpde.jpg',
  },
  {
    id: 18,
    name: 'Noodles',
    unit: 'Indomietable Noodles (70g)',
    price: 300,
    category: 'noodles',
    stock: 'instock',
    emoji: '🍜',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745435/indomie_anuqbt.jpg',
  },
  {
    id: 19,
    name: 'Twist',
    unit: '500g pack',
    price: 1100,
    category: 'pasta',
    stock: 'instock',
    emoji: '🐟',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745005/twist_golden_penny_oi3otx.jpg',
  },
  {
    id: 20,
    name: 'Spaghetti',
    unit: '1kg pack',
    price: 1300,
    category: 'pasta',
    stock: 'instock',
    emoji: '🍝',
    img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 21,
    name: 'Grounded Pepper',
    unit: '250g pack',
    price: 1200,
    category: 'pasta',
    stock: 'ourstock',
    emoji: '🍅',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778747967/ata_gigun_bh4fov.jpg',
  },
  {
    id: 22,
    name: 'Gino Tomato Paste',
    unit: ' (70g each) * 5 (1 roll)',
    price: 900,
    category: 'paste',
    stock: 'instock',
    emoji: '🍅',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745435/gino_tomato_y1hnsq.webp',
  },
  {
    id: 23,
    name: 'Gino Pepe & Onion Paste',
    unit: ' (70g each) * 5 (1 roll)',
    price: 900,
    category: 'paste',
    stock: 'instock',
    emoji: '🍅',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745435/pepe_onion_eflqqg.jpg',
  },
  {
    id: 24,
    name: 'Gino Party Jollof Paste',
    unit: ' (70g each) * 5 (1 roll)',
    price: 900,
    category: 'paste',
    stock: 'instock',
    emoji: '🍅',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745435/party_jollof_f793nq.webp',
  },
  {
    id: 25,
    name: 'Gino Asun',
    unit: ' (70g each) * 5 (1 roll)',
    price: 900,
    category: 'paste',
    stock: 'outstock',
    emoji: '🍅',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745435/asun_la046l.webp',
  },
  {
    id: 26,
    name: 'Onions',
    unit: '1kg',
    price: 900,
    category: 'spices',
    stock: 'instock',
    emoji: '🧅',
    img: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 27,
    name: 'Curry',
    unit: 'Curry Powder (1 roll)',
    price: 750,
    category: 'spices',
    stock: 'outstock',
    emoji: '🌶️',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745434/curry_and_thym_e_wtaldh.jpg',
  }, 
  {
    id: 28,
    name: 'Thyme',
    unit: 'Thyme (1 roll)',
    price: 750,
    category: 'spices',
    stock: 'instock',
    emoji: '🌶️',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778745434/curry_and_thym_e_wtaldh.jpg',
  },
  
  {
    id: 29,
    name: 'Suagr ',
    unit: '1 tin cup',
    price: 400,
    category: 'sugar',
    stock: 'outstock',
    emoji: '💧',
    img: 'https://res.cloudinary.com/da7jzmy2g/image/upload/v1778748170/sugar_yralim.jpg',
  },
];

/* ── STUDENT PACKAGES ───────────────────────────────────────── */
const PACKAGES = [
  {
    id: 'p1',
    icon: '🎒',
    name: 'Starter Pack',
    desc: 'Perfect for individuals and light households. Covers your basics without breaking the bank.',
    items: ['2kg Rice', '1kg Beans', '2kg White Garri', '1L Palm Oil', 'Tomato paste (3)', 'Mixed Spice Bundle'],
    price: 5000,
    originalPrice: 6200,
    featured: false,
    waMsg: 'Hello Mutohar Store! I want to order the Starter Pack (₦5,000). Please confirm availability and delivery details.',
  },
  {
    id: 'p2',
    icon: '🏠',
    name: 'Family Bundle',
    desc: 'Stock up your kitchen for the month. Best value for families and working-class households.',
    items: ['5kg Rice', '2kg Beans', '3L Palm Oil', 'Mixed Spice Bundle', '1kg Spaghetti', 'Tomato paste (6)'],
    price: 9500,
    originalPrice: 12000,
    featured: true,
    waMsg: 'Hello Mutohar Store! I want to order the Family Bundle (₦9,500). Please confirm availability and delivery details.',
  },
  {
    id: 'p3',
    icon: '🍳',
    name: 'Weekly Essentials',
    desc: 'Everything a household needs for the week. From staples to cooking essentials.',
    items: ['3kg Rice', '2kg Garri', '3L Groundnut Oil', '1kg Spaghetti', 'Tomato paste (3)', '1kg Onions'],
    price: 7000,
    originalPrice: 8800,
    featured: false,
    waMsg: 'Hello Mutohar Store! I want to order the Weekly Essentials Pack (₦7,000). Please confirm availability and delivery details.',
  },
  {
    id: 'p4',
    icon: '📚',
    name: 'Student Survival Pack',
    desc: 'Quick-cook essentials for students and busy individuals on a tight budget.',
    items: ['2x Spaghetti (1kg)', '1kg Beans', 'Tomato paste (6)', 'Mixed Spice Bundle', '1kg Onions', '1L Palm Oil'],
    price: 3800,
    originalPrice: 4800,
    featured: false,
    waMsg: 'Hello Mutohar Store! I want to order the Student Survival Pack (₦3,800). Please confirm availability and delivery details.',
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
  const msg = `Hello Mutohar Store! 👋\n\nI want to order:\n\n📦 *${name}* (${unit})\n💰 ₦${Number(price).toLocaleString()}\n\nPlease confirm availability and send me your delivery details.\n\nDelivery address: `;
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
