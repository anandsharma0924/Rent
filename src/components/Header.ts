import { store } from '../state/store';
import type { AppRoute } from '../state/store';
import { generateWhatsAppInquiryLink } from '../utils/whatsapp';
import { IconCar, IconHome, IconStar, IconHelp, IconPhone, IconWhatsApp, IconHeart } from '../utils/icons';

let isMobileMenuOpen = false;

export const renderHeader = (): string => {
  const favCount = store.favorites.length;
  const currentRoute = store.currentRoute;

  const links: { route: AppRoute; label: string; icon: string }[] = [
    { route: 'home', label: 'Home', icon: IconHome(16) },
    { route: 'fleet', label: 'Fleet & Cars', icon: IconCar(16) },
    { route: 'why-us', label: 'Why Choose Us', icon: IconStar(16) },
    { route: 'faqs', label: 'FAQs', icon: IconHelp(16) },
    { route: 'contact', label: 'Contact', icon: IconPhone(16) },
  ];

  return `
    <header class="site-header">
      <div class="container nav-wrap">
        <button id="brandLogoBtn" class="brand-logo" style="cursor: pointer; background: none; border: none; padding: 0; text-align: left;">
          <div class="brand-icon">${IconCar(22, '#ffffff')}</div>
          <div>
            <div class="brand-title">ERTIGA RIDE</div>
            <div class="brand-subtitle">Luxury Mobility Platform</div>
          </div>
        </button>

        <!-- Desktop Navigation Links -->
        <nav class="nav-links desktop-only">
          ${links.map(link => `
            <button class="nav-link ${currentRoute === link.route ? 'active' : ''}" data-route="${link.route}" style="display: inline-flex; align-items: center; gap: 6px;">
              ${link.icon} <span>${link.label}</span>
            </button>
          `).join('')}
        </nav>

        <div class="nav-actions">
          <button id="favHeaderBtn" class="fav-badge-btn" title="Saved Favorites" style="display: inline-flex; align-items: center; gap: 6px;">
            ${IconHeart(16, true)} <span>Saved</span> <span class="fav-count">${favCount}</span>
          </button>
          
          <a href="${generateWhatsAppInquiryLink()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp desktop-only" style="display: inline-flex; align-items: center; gap: 6px;">
            ${IconWhatsApp(16, '#ffffff')} <span>WhatsApp</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobileMenuToggleBtn" class="mobile-toggle-btn" aria-label="Toggle Navigation Menu">
            ${isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation Drawer -->
      ${isMobileMenuOpen ? `
        <div class="mobile-drawer animate-fade-in">
          <nav class="mobile-nav-links">
            ${links.map(link => `
              <button class="mobile-nav-link ${currentRoute === link.route ? 'active' : ''}" data-route="${link.route}" style="display: flex; align-items: center; gap: 10px;">
                ${link.icon} <span>${link.label}</span>
              </button>
            `).join('')}
          </nav>
          
          <div style="padding-top: 14px; border-top: 1px solid #e2e8f0; margin-top: 10px;">
            <a href="${generateWhatsAppInquiryLink()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="width: 100%; justify-content: center; display: inline-flex; align-items: center; gap: 8px;">
              ${IconWhatsApp(18, '#ffffff')} <span>Quick WhatsApp Support</span>
            </a>
          </div>
        </div>
      ` : ''}
    </header>
  `;
};

export const bindHeaderEvents = (): void => {
  document.querySelector('#brandLogoBtn')?.addEventListener('click', () => {
    isMobileMenuOpen = false;
    store.setRoute('home');
  });

  document.querySelector('#mobileMenuToggleBtn')?.addEventListener('click', () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    const header = document.querySelector('.site-header');
    if (header) {
      header.outerHTML = renderHeader();
      bindHeaderEvents();
    }
  });

  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const route = (e.currentTarget as HTMLElement).dataset.route as AppRoute;
      if (route) {
        isMobileMenuOpen = false;
        store.setRoute(route);
      }
    });
  });

  const favBtn = document.querySelector('#favHeaderBtn');
  favBtn?.addEventListener('click', () => {
    isMobileMenuOpen = false;
    store.setRoute('fleet');
    if (store.favorites.length === 0) {
      store.showToast('You have no saved favorite cars yet. Click the heart on any vehicle card!', 'info');
    } else {
      store.showToast(`Showing ${store.favorites.length} saved vehicles in fleet`, 'success');
    }
  });
};
