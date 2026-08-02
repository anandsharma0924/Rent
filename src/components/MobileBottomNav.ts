import { store } from '../state/store';
import type { AppRoute } from '../state/store';
import { IconHome, IconCar, IconStar, IconHelp, IconPhone } from '../utils/icons';

export const renderMobileBottomNav = (): string => {
  const currentRoute = store.currentRoute;

  const tabs: { route: AppRoute | 'call'; label: string; icon: string }[] = [
    { route: 'home', label: 'Home', icon: IconHome(18, currentRoute === 'home' ? '#2563eb' : '#64748b') },
    { route: 'fleet', label: 'Fleet', icon: IconCar(18, currentRoute === 'fleet' ? '#2563eb' : '#64748b') },
    { route: 'why-us', label: 'Why Us', icon: IconStar(18, currentRoute === 'why-us' ? '#2563eb' : '#64748b') },
    { route: 'faqs', label: 'FAQs', icon: IconHelp(18, currentRoute === 'faqs' ? '#2563eb' : '#64748b') },
    { route: 'call', label: 'Call', icon: IconPhone(18, '#059669') }
  ];

  return `
    <nav class="mobile-bottom-nav">
      ${tabs.map(tab => {
        if (tab.route === 'call') {
          return `
            <a href="tel:9981264216" class="mobile-nav-tab" style="color: #059669;">
              ${tab.icon}
              <span>${tab.label}</span>
            </a>
          `;
        }
        const isActive = currentRoute === tab.route;
        return `
          <button class="mobile-nav-tab ${isActive ? 'active' : ''}" data-route="${tab.route}">
            ${tab.icon}
            <span>${tab.label}</span>
          </button>
        `;
      }).join('')}
    </nav>
  `;
};

export const bindMobileBottomNavEvents = (): void => {
  document.querySelectorAll('.mobile-bottom-nav .mobile-nav-tab[data-route]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const route = (e.currentTarget as HTMLElement).dataset.route as AppRoute;
      if (route) {
        store.setRoute(route);
      }
    });
  });
};
