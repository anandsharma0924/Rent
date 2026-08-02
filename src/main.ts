import './styles/variables.css';
import './styles/base.css';
import './styles/animations.css';
import './styles/components.css';

import { store } from './state/store';
import type { AppRoute } from './state/store';
import { renderHeader, bindHeaderEvents } from './components/Header';
import { renderHomePage, bindHomePageEvents } from './pages/HomePage';
import { renderFleetPage, bindFleetPageEvents } from './pages/FleetPage';
import { renderWhyUsPage } from './pages/WhyUsPage';
import { renderFaqPage, bindFaqPageEvents } from './pages/FaqPage';
import { renderContactPage, bindContactPageEvents } from './pages/ContactPage';

import { bindBookingFormEvents } from './components/BookingForm';
import { renderCarDetailModal, bindCarDetailModalEvents } from './components/CarDetailModal';
import { renderCompareDrawer, renderCarCompareModal, bindCompareEvents } from './components/CarCompareModal';
import { renderQuoteModal, bindQuoteModalEvents } from './components/QuoteModal';
import { renderFooter, bindFooterEvents } from './components/Footer';
import { renderToastNotification } from './components/ToastNotification';
import { generateWhatsAppInquiryLink } from './utils/whatsapp';
import { initCustomCursor } from './utils/cursor';
import { IconWhatsApp } from './utils/icons';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root container #app not found!');
}

const getPageComponent = (): { html: string; bindEvents?: () => void } => {
  switch (store.currentRoute) {
    case 'fleet':
      return { html: renderFleetPage(), bindEvents: bindFleetPageEvents };
    case 'why-us':
      return { html: renderWhyUsPage() };
    case 'faqs':
      return { html: renderFaqPage(), bindEvents: bindFaqPageEvents };
    case 'contact':
      return { html: renderContactPage(), bindEvents: bindContactPageEvents };
    case 'home':
    default:
      return { html: renderHomePage(), bindEvents: bindHomePageEvents };
  }
};

const renderApp = (): void => {
  const page = getPageComponent();

  app.innerHTML = `
    <div id="pageShell">
      ${renderHeader()}
      <main>
        ${page.html}
      </main>
      ${renderFooter()}
      ${renderCarDetailModal()}
      ${renderCompareDrawer()}
      ${renderCarCompareModal()}
      ${renderQuoteModal()}
      ${renderToastNotification()}

      <!-- Floating WhatsApp Quick Button -->
      <a href="${generateWhatsAppInquiryLink()}" target="_blank" rel="noopener noreferrer" class="floating-whatsapp-btn" title="Chat on WhatsApp">
        ${IconWhatsApp(26, '#ffffff')}
      </a>
    </div>
  `;

  // Bind interactive DOM events
  bindHeaderEvents();
  bindBookingFormEvents();
  if (page.bindEvents) page.bindEvents();
  bindCarDetailModalEvents();
  bindCompareEvents();
  bindQuoteModalEvents();
  bindFooterEvents();
};

const syncRouteAndStripHash = () => {
  if (window.location.hash) {
    const hashRoute = window.location.hash.replace('#', '') as AppRoute;
    if (['home', 'fleet', 'why-us', 'faqs', 'contact'].includes(hashRoute)) {
      const cleanPath = hashRoute === 'home' ? '/' : `/${hashRoute}`;
      window.history.replaceState({ route: hashRoute }, '', cleanPath);
      store.currentRoute = hashRoute;
      return;
    }
  }

  const rawPath = window.location.pathname.replace(/^\/|\/$/g, '');
  if (['home', 'fleet', 'why-us', 'faqs', 'contact'].includes(rawPath)) {
    store.currentRoute = rawPath as AppRoute;
  } else {
    store.currentRoute = 'home';
  }
};

// Initialize App, Clean History Path Routing & Animated Luxury Cursor
syncRouteAndStripHash();
renderApp();
initCustomCursor();

window.addEventListener('popstate', () => {
  syncRouteAndStripHash();
  renderApp();
});

window.addEventListener('hashchange', () => {
  syncRouteAndStripHash();
  renderApp();
});

store.subscribe(() => {
  renderApp();
});
