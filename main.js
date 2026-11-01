/**
 * ============================================================================
 * SALMAN RASHEED M. — PORTFOLIO CORE APPLICATION ENGINE (main.js)
 * Clean, Modular, High-Performance ES Module
 * ============================================================================
 */

import { initFlexCarousel, DEFAULT_ITEMS } from './flex-carousel.js';
import { initWorksWheel, DEFAULT_WORKS } from './works-wheel.js';
import { initScrollExpandMedia } from './scroll-expand-media.js';
import { initExperienceSection } from './experience-section.js';

// ============================================================================
// 1. PROJECT DATA REPOSITORY (Salman Rasheed M. Projects)
// ============================================================================
export const projectsData = {
  goload: {
    category: 'LOGISTICS & TRANSPORT PLATFORM',
    title: 'GO LOAD',
    subtitle: 'Logistics & Goods Delivery Platform',
    description: 'A multi-tier logistics and transport management platform connecting customers, delivery agents, and enterprise dispatchers with live tracking and automated dispatch workflows.',
    deliverables: ['Dispatcher Control Console', 'Driver & Agent Onboarding Flow', 'Real-time Consignment Tracking', 'Automated Invoicing & Billing'],
    tools: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    stats: 'Multi-tier RBAC • Consignment Tracking • Dispatch Routing',
    link: 'https://github.com/sallu09876',
    src: 'assets/Go-Load.webp'
  },
  drbooking: {
    category: 'HEALTHCARE & QUEUE TELEMETRY',
    title: 'DRBOOKING',
    subtitle: 'Hospital Appointment & Queue Management',
    description: 'An intelligent healthcare appointment booking and queue telemetry portal designed to minimize patient wait times and optimize doctor clinic schedules.',
    deliverables: ['Patient Online Booking Portal', 'Live Token & Queue Display HUD', 'Doctor Calendar & Shift Management', 'SMS & Email Appointment Notification Alerts'],
    tools: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    stats: 'Digital queue tokens • Zero-overlap scheduling • Multi-clinic administration',
    link: 'https://github.com/sallu09876',
    src: 'assets/DR-Booking.webp'
  },
  fastbag: {
    category: 'E-COMMERCE & MULTI-VENDOR DELIVERY',
    title: 'FASTBAG',
    subtitle: 'Multi-Vendor Delivery & Order Management',
    description: 'An end-to-end multi-vendor marketplace ecosystem facilitating rapid local delivery, vendor inventory management, and customer order fulfilment.',
    deliverables: ['Multi-Vendor Merchant Dashboard', 'Customer Storefront & Checkout', 'Delivery Partner Dispatch Feed', 'Order Lifecycle Tracking Telemetry'],
    tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    stats: 'Multi-vendor catalog • Real-time order lifecycle • Live cart reconciliation',
    link: 'https://github.com/sallu09876',
    src: 'assets/Fast-Bag.webp'
  },
  codeedex: {
    category: 'ENTERPRISE OPERATING SUITE',
    title: 'CODEEDEX ENTERPRISE PLATFORM',
    subtitle: 'HRM, PMS & CRM SaaS Suite',
    description: 'A mission-critical enterprise operating suite unifying human resource operations (HRM), agile project management (PMS), and customer sales pipelines (CRM) with dynamic granular RBAC.',
    deliverables: ['HRM Attendance & Payroll Tracking', 'PMS Kanban Task & Milestone Boards', 'CRM Lead Management Funnel', 'Dynamic Role-Based Access Control Engine'],
    tools: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    stats: 'Unified enterprise workspace • Dynamic RBAC matrix • Kanban project telemetry',
    link: 'https://github.com/sallu09876',
    src: 'assets/Enterprise-Platform.webp'
  },
  medflow: {
    category: 'ELECTRONIC MEDICAL RECORDS (EMR)',
    title: 'MEDFLOW',
    subtitle: 'Electronic Medical Records Application',
    description: 'A secure, HIPAA-conscious digital health record system facilitating clinical documentation, patient history retrieval, and prescription management.',
    deliverables: ['Longitudinal Medical History Vault', 'Clinical Notes & Diagnostic Recording', 'Digital Prescription Generator', 'Restricted Clinical Role Permissions'],
    tools: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    stats: 'HIPAA-conscious schema • High-precision record retrieval • Granular medical privacy',
    link: 'https://github.com/sallu09876',
    src: 'assets/Med-Flow.webp'
  },
  saasagency: {
    category: 'ENTERPRISE B2B SAAS LANDING PAGE',
    title: 'SAAS AGENCY',
    subtitle: 'Enterprise B2B SaaS & Growth Landing Page',
    description: 'Sleek, high-converting product marketing landing page designed for an enterprise B2B SaaS platform, featuring interactive metrics, ROI estimation calculators, and client case study showcases.',
    deliverables: ['Interactive Product Hero', 'Dynamic Metric Telemetry Showcase', 'Feature Comparison Grid', 'Lead Consultation Flow'],
    tools: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    stats: 'Interactive ROI Calculator • High-Conversion Callouts • Clean Modern Typography',
    src: 'assets/landingpage-saasagency.webp'
  },
  travelbooking: {
    category: 'TRAVEL & HOSPITALITY PLATFORM',
    title: 'TRAVEL BOOKING',
    subtitle: 'Curated Travel & Adventure Platform',
    description: 'Immersive luxury travel and adventure reservation landing page with destination search, itinerary previews, interactive booking filters, and smooth editorial aesthetics.',
    deliverables: ['Destination Search Hero', 'Interactive Tour Itinerary Cards', 'Customer Reviews & Social Proof', 'Fast Checkout Reservation Flow'],
    tools: ['React.js', 'Tailwind CSS', 'REST APIs', 'Node.js'],
    stats: 'Destination Telemetry • Dynamic Itinerary Filter • Instant Reservation Flow',
    src: 'assets/landingpage-travelbooking.webp'
  }
};

// ============================================================================
// 2. PROJECT FILTER LOGIC
// ============================================================================
export function filterProjects(filter) {
  const tabs = {
    all: document.getElementById('filter-all'),
    web: document.getElementById('filter-web'),
    landing: document.getElementById('filter-landing')
  };

  Object.keys(tabs).forEach(k => {
    if (!tabs[k]) return;
    if (k === filter) {
      tabs[k].className = 'filter-tab px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold tracking-wider uppercase shadow-sm transition';
    } else {
      tabs[k].className = 'filter-tab px-6 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-700 hover:border-black text-xs font-semibold tracking-wider uppercase transition';
    }
  });

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (filter === 'all') {
      card.style.display = 'flex';
    } else if (filter === 'web') {
      card.style.display = card.classList.contains('web-project') ? 'flex' : 'none';
    } else if (filter === 'landing') {
      card.style.display = card.classList.contains('landing-project') ? 'flex' : 'none';
    }
  });
}

// ============================================================================
// 3. SKILLS INTERACTION & FILTER CONTROLLER
// ============================================================================
export function inspectSkill(el) {
  if (!el) return;
  const name = el.getAttribute('data-name');
  const cat = el.getAttribute('data-cat');
  const desc = el.getAttribute('data-desc');
  const icon = el.getAttribute('data-icon');

  const nameEl = document.getElementById('hud-tech-name');
  const catEl = document.getElementById('hud-tech-category');
  const descEl = document.getElementById('hud-tech-desc');
  const iconEl = document.getElementById('hud-tech-icon');
  const badgeEl = document.getElementById('hud-status-badge');

  if (nameEl && name) nameEl.innerText = name;
  if (catEl && cat) catEl.innerText = cat.toUpperCase();
  if (descEl && desc) descEl.innerText = desc;
  if (iconEl && icon) iconEl.innerText = icon;
  if (badgeEl && name) badgeEl.innerText = 'INSPECTING: ' + name.toUpperCase();
}

export function filterSkills(category) {
  const tabs = {
    'all': document.getElementById('skill-filter-all'),
    'frontend': document.getElementById('skill-filter-frontend'),
    'backend': document.getElementById('skill-filter-backend'),
    'database': document.getElementById('skill-filter-database'),
    'cloud': document.getElementById('skill-filter-cloud')
  };

  Object.keys(tabs).forEach(k => {
    if (!tabs[k]) return;
    if (k === category) {
      tabs[k].className = 'skill-tab-btn px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-black text-white shadow-sm transition';
    } else {
      tabs[k].className = 'skill-tab-btn px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white border border-neutral-300 text-neutral-600 hover:border-black hover:text-black transition';
    }
  });

  const cards = document.querySelectorAll('.skill-category-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      card.classList.remove('hidden');
    } else {
      card.style.display = 'none';
      card.classList.add('hidden');
    }
  });
}

// ============================================================================
// 4. SERVICES ACCORDION & DIRECT BOOKING
// ============================================================================
export function toggleService(index) {
  const items = document.querySelectorAll('.accordion-item');
  if (!items || !items[index]) return;

  const targetItem = items[index];
  const isCurrentlyActive = targetItem.classList.contains('active');

  // Collapse all items
  items.forEach(item => item.classList.remove('active'));

  // If clicked item was not active, expand it (smooth toggle)
  if (!isCurrentlyActive) {
    targetItem.classList.add('active');
  }
}

export function selectService(index) {
  const items = document.querySelectorAll('.accordion-item');
  if (items && items[index]) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
  }
}

export function bookSpecificService(serviceName) {
  openContactModal();
  const select = document.getElementById('contact-service');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(serviceName) || select.options[i].value.includes(serviceName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

// ============================================================================
// 5. MODAL SYSTEM (Project Inspector & Contact Sheet)
// ============================================================================
export function openProjectModal(itemOrKey) {
  let data = null;
  if (typeof itemOrKey === 'object' && itemOrKey !== null) {
    data = itemOrKey;
  } else {
    data = projectsData[itemOrKey];
  }
  if (!data) return;

  const category = data.subtitle || data.category || 'FEATURED PROJECT';
  const title = data.title || 'PROJECT DETAILS';
  
  const catEl = document.getElementById('modal-project-category');
  const titleEl = document.getElementById('modal-project-title');
  if (catEl) catEl.innerText = category;
  if (titleEl) titleEl.innerText = title;

  let html = '';
  if (data.src) {
    html += `
      <div class="w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100 shadow-inner">
        <img src="${data.src}" alt="${data.alt || title}" class="w-full h-full object-cover object-top" />
      </div>
    `;
  }
  if (data.description) {
    html += `<p class="text-neutral-600 leading-relaxed font-normal text-sm sm:text-base text-center max-w-xl mx-auto">${data.description}</p>`;
  }
  if (data.stats) {
    html += `
      <div class="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-center">
        <p class="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Key Highlights</p>
        <p class="text-xs text-neutral-800 font-medium">${data.stats}</p>
      </div>
    `;
  }
  if (data.deliverables && data.deliverables.length) {
    html += `
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-2 text-center">Key Deliverables</h4>
        <ul class="list-disc pl-5 space-y-1 text-xs text-neutral-600 max-w-md mx-auto">
          ${data.deliverables.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  if (data.tools && data.tools.length) {
    html += `
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-2 text-center">Technologies & Stack</h4>
        <div class="flex flex-wrap justify-center gap-2">
          ${data.tools.map(t => `<span class="px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 text-[10px] font-semibold rounded-full uppercase">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }
  if (data.link) {
    html += `
      <div class="pt-2 flex justify-center items-center">
        <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95">
          Visit Live Website ↗
        </a>
      </div>
    `;
  }

  const bodyEl = document.getElementById('modal-project-body');
  if (bodyEl) bodyEl.innerHTML = html;

  const modal = document.getElementById('project-modal');
  const card = document.getElementById('project-modal-card');
  if (!modal || !card) return;

  modal.classList.remove('pointer-events-none');
  void modal.offsetWidth; // Force reflow
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    card.classList.remove('opacity-0', 'scale-[0.94]', 'translate-y-4');
    card.classList.add('opacity-100', 'scale-100', 'translate-y-0');
  });
}

export function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  const card = document.getElementById('project-modal-card');
  if (!modal || !card) return;

  modal.classList.add('opacity-0');
  card.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
  card.classList.add('opacity-0', 'scale-[0.94]', 'translate-y-4');
  setTimeout(() => {
    if (modal.classList.contains('opacity-0')) {
      modal.classList.add('pointer-events-none');
    }
  }, 400);
}

export function openContactModal() {
  const modal = document.getElementById('contact-modal');
  const card = document.getElementById('contact-modal-card');
  if (!modal || !card) return;
  modal.classList.remove('pointer-events-none');
  void modal.offsetWidth;
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  });
}

export function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  const card = document.getElementById('contact-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0');
  card.classList.remove('scale-100');
  card.classList.add('scale-95');
  setTimeout(() => {
    if (modal.classList.contains('opacity-0')) {
      modal.classList.add('pointer-events-none');
    }
  }, 350);
}

export function copyContactEmail(btn) {
  const email = 'sallu2004mkt@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const feedback = document.getElementById('copy-feedback');
    if (feedback) {
      feedback.classList.remove('opacity-0');
      setTimeout(() => feedback.classList.add('opacity-0'), 2200);
    }
    showToast('Email address copied to clipboard: ' + email);
  }).catch(() => {
    showToast('Email: ' + email);
  });
}

export function selectTimeline(btn, val) {
  const input = document.getElementById('contact-timeline');
  if (input) input.value = val;
  const chips = document.querySelectorAll('.timeline-chip');
  chips.forEach(c => {
    c.className = 'timeline-chip py-2 px-1 text-[11px] font-semibold rounded-lg border border-neutral-200 text-neutral-600 hover:border-black hover:text-black transition';
  });
  if (btn) {
    btn.className = 'timeline-chip py-2 px-1 text-[11px] font-semibold rounded-lg border border-black bg-black text-white transition';
  }
}

export function resetContactFormUI() {
  const form = document.getElementById('contact-form');
  if (form) form.reset();
  const container = document.getElementById('contact-form-container');
  const success = document.getElementById('contact-success-state');
  if (container) container.classList.remove('hidden');
  if (success) {
    success.classList.add('hidden');
    success.classList.remove('flex');
  }
}

// Global ESC key listener for modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const pModal = document.getElementById('project-modal');
    if (pModal && !pModal.classList.contains('pointer-events-none')) {
      closeProjectModal();
    }
    const cModal = document.getElementById('contact-modal');
    if (cModal && !cModal.classList.contains('pointer-events-none')) {
      closeContactModal();
    }
  }
});

// ============================================================================
// 6. WEB3FORMS / CONTACT FORM HANDLER
// ============================================================================

export const WEB3FORMS_ACCESS_KEY = "5a74187a-b86b-4548-bd68-a21674a31fb4";

export async function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name')?.value || '';
  const email = document.getElementById('contact-email')?.value || '';
  const service = document.getElementById('contact-service')?.value || '';
  const timeline = document.getElementById('contact-timeline') ? document.getElementById('contact-timeline').value : '1-3 Months';
  const message = document.getElementById('contact-message')?.value || '';
  const isBot = document.getElementById('contact-botcheck')?.checked;

  if (isBot) return; // Prevent automated spam

  const btn = document.getElementById('contact-submit-btn');
  const btnText = document.getElementById('contact-btn-text');
  const btnIcon = document.getElementById('contact-btn-icon');
  const btnSpinner = document.getElementById('contact-btn-spinner');

  // Loading state
  if (btn) btn.disabled = true;
  if (btnText) btnText.innerText = 'TRANSMITTING...';
  if (btnIcon) btnIcon.classList.add('hidden');
  if (btnSpinner) btnSpinner.classList.remove('hidden');

  let deliverySuccessful = false;

  // 1. Web3Forms Relay (Production on Vercel / Netlify / Cloud)
  if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE") {
    try {
      const w3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          service: service,
          timeline: timeline,
          message: message,
          subject: `[Portfolio Inquiry] ${service} from ${name}`,
          from_name: `${name} (Portfolio Inquiry)`
        })
      });
      const w3Result = await w3Response.json();
      if (w3Result.success) {
        deliverySuccessful = true;
      }
    } catch (w3Err) {
      console.warn("Web3Forms transmission error:", w3Err);
    }
  }

  // 2. Local Node.js server fallback (/api/contact)
  if (!deliverySuccessful) {
    try {
      const localResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, timeline, message })
      });
      if (localResponse.ok) {
        deliverySuccessful = true;
      }
    } catch (localErr) {
      console.warn("Local API not reachable, checking fallback:", localErr);
    }
  }

  // Restore button state
  if (btn) btn.disabled = false;
  if (btnText) btnText.innerText = 'SEND MESSAGE';
  if (btnIcon) btnIcon.classList.remove('hidden');
  if (btnSpinner) btnSpinner.classList.add('hidden');

  // Display in-modal success state
  const formContainer = document.getElementById('contact-form-container');
  const successState = document.getElementById('contact-success-state');
  const successText = document.getElementById('contact-success-text');

  if (successText) {
    const serviceTopic = service && service !== 'General Consultation' ? ` regarding "${service}"` : '';
    successText.innerText = `Thank you, ${name}! Your message${serviceTopic} has been received. Salman will review your details and get in touch at ${email} within 24 hours.`;
  }

  if (formContainer && successState) {
    formContainer.classList.add('hidden');
    successState.classList.remove('hidden');
    successState.classList.add('flex');
  }

  showToast(`Message sent! Thank you, ${name}.`);

  // 3. Fallback: Direct mailto trigger if Web3Forms key has not been entered yet and no local server
  if (!deliverySuccessful && WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
    const mailtoUrl = `mailto:sallu2004mkt@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${service} from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\nTimeline: ${timeline}\n\nMessage:\n${message}`)}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  }
}

// ============================================================================
// 7. TOAST NOTIFICATIONS & USER MEDIA HELPERS
// ============================================================================
export function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-black text-white px-5 py-3 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto border border-neutral-700';
  toast.innerHTML = `<span>●</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const content = document.getElementById('mobile-drawer-content');
  if (!drawer || !content) return;

  const isOpen = !drawer.classList.contains('pointer-events-none');
  if (isOpen) {
    drawer.classList.add('opacity-0', 'pointer-events-none');
    content.classList.add('translate-x-full');
  } else {
    drawer.classList.remove('opacity-0', 'pointer-events-none');
    content.classList.remove('translate-x-full');
  }
}

export function checkUserMedia() {
  const portraitImg = document.getElementById('hero-portrait-img');
  if (portraitImg) {
    const potentialHeroPhotos = [
      'assets/hero-profile.png',
      'assets/hero-portrait.png',
      'assets/hero_portrait.png',
      'assets/hero.png',
      'assets/portrait.png',
      'assets/photo.png',
      'assets/photo.jpg',
      'assets/portrait.jpg'
    ];
    
    const tryNextPhoto = (idx) => {
      if (idx >= potentialHeroPhotos.length) return;
      const img = new Image();
      img.onload = () => {
        portraitImg.src = potentialHeroPhotos[idx];
      };
      img.onerror = () => tryNextPhoto(idx + 1);
      img.src = potentialHeroPhotos[idx];
    };
    tryNextPhoto(0);
  }
}

// ============================================================================
// 8. COMPONENT INITIALIZERS (FlexCarousel & WorksWheel)
// ============================================================================
export function startCarousel() {
  const container = document.getElementById('flex-carousel-container');
  if (container) {
    window.flexCarouselInstance = initFlexCarousel(container, {
      items: DEFAULT_ITEMS,
      preset: 'liquid',
      intro: 'rise',
      cardHeight: 0.5,
      gap: 12,
      squeeze: 0.2,
      focusOnClick: true,
      captions: true,
      onSelect: (index, item) => {
        openProjectModal(item);
      }
    });
  }
}

export function startWorksWheel() {
  const container = document.getElementById('works-wheel-container');
  if (container) {
    const wheelInstance = initWorksWheel(container, {
      items: DEFAULT_WORKS,
      label: "LANDING PAGES",
      action: null,
      onSelect: (index, item) => {
        openProjectModal(item);
      }
    });
    window.worksWheelInstance = wheelInstance;

    const prevBtn = document.getElementById('works-wheel-prev-btn');
    const nextBtn = document.getElementById('works-wheel-next-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => wheelInstance.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => wheelInstance.next());
  }
}

// ============================================================================
// 9. APPLICATION BOOTSTRAP & ACTIVE SECTION HIGHLIGHTING
// ============================================================================
export function initApp() {
  checkUserMedia();
  startCarousel();
  startWorksWheel();

  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = {
    'about': document.getElementById('nav-about'),
    'experience': document.getElementById('nav-experience'),
    'projects': document.getElementById('nav-projects'),
    'landing-pages': document.getElementById('nav-projects'),
    'skills': document.getElementById('nav-skills'),
    'services': document.getElementById('nav-services')
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const activeTarget = navLinks[id];

        ['about', 'experience', 'projects', 'skills', 'services'].forEach(key => {
          const el = document.getElementById(`nav-${key}`);
          if (el) {
            if (activeTarget && el === activeTarget) {
              el.classList.add('border-neutral-300', 'text-black');
              el.classList.remove('border-transparent', 'text-neutral-600');
            } else {
              el.classList.remove('border-neutral-300', 'text-black');
              el.classList.add('border-transparent', 'text-neutral-600');
            }
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));

  // Floating Scroll-To-Top Button Controller
  const topBtn = document.getElementById('scroll-to-top-btn');
  if (topBtn) {
    let scrollScheduled = false;
    window.addEventListener('scroll', () => {
      if (!scrollScheduled) {
        scrollScheduled = true;
        requestAnimationFrame(() => {
          if (window.scrollY > 350) {
            topBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-6');
            topBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
          } else {
            topBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-6');
            topBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
          }
          scrollScheduled = false;
        });
      }
    }, { passive: true });
  }
}

// ============================================================================
// 10. EXPOSE TO WINDOW FOR INLINE HTML ATTRIBUTES
// ============================================================================
window.projectsData = projectsData;
window.filterProjects = filterProjects;
window.inspectSkill = inspectSkill;
window.filterSkills = filterSkills;
window.toggleService = toggleService;
window.selectService = selectService;
window.bookSpecificService = bookSpecificService;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;
window.copyContactEmail = copyContactEmail;
window.selectTimeline = selectTimeline;
window.resetContactFormUI = resetContactFormUI;
window.submitContactForm = submitContactForm;
window.showToast = showToast;
window.toggleMobileMenu = toggleMobileMenu;
window.scrollToTop = scrollToTop;

// Auto-boot upon DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

