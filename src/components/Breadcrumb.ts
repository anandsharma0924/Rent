import { store } from '../state/store';
import type { AppRoute } from '../state/store';

const BREADCRUMB_MAP: Record<AppRoute, { label: string; parent?: string }> = {
  'home': { label: 'Home' },
  'fleet': { label: 'Fleet & Cars' },
  'why-us': { label: 'Why Choose Us' },
  'faqs': { label: 'Help & FAQs' },
  'contact': { label: 'Contact Us' }
};

export const renderBreadcrumb = (): string => {
  const route = store.currentRoute;
  if (route === 'home') return '';

  const current = BREADCRUMB_MAP[route] || BREADCRUMB_MAP['home'];

  return `
    <div style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 10px 0;">
      <div class="container" style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: #64748b; font-weight: 600;">
        <button id="breadcrumbHomeBtn" style="background: none; border: none; padding: 0; color: #2563eb; font-weight: 700; cursor: pointer; font-size: inherit;">
          🏠 Home
        </button>
        <span>➔</span>
        <span style="color: #0f172a; font-weight: 800;">${current.label}</span>
      </div>
    </div>
  `;
};

export const bindBreadcrumbEvents = (): void => {
  document.querySelector('#breadcrumbHomeBtn')?.addEventListener('click', () => {
    store.setRoute('home');
  });
};
