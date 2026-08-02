import { renderCarGridSection, bindCarGridEvents } from '../components/CarGrid';
import { store } from '../state/store';
import { IconCar, IconCompare, IconHeart, IconShield, IconClock, IconCheck, IconUsers } from '../utils/icons';

export const renderFleetPage = (): string => {
  const filteredCars = store.getFilteredCars();
  const favCount = store.favorites.length;
  const compareCount = store.compareList.length;

  return `
    <div class="page-fleet animate-fade-in" style="padding-bottom: 50px;">
      <section class="container" style="padding-top: 30px;">
        
        <!-- Breathtaking 2-Column Luxury Fleet Hero Banner -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%); color: #ffffff; padding: 44px 36px; border-radius: 28px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.12); border-top: 4px solid #2563eb; box-shadow: 0 20px 50px rgba(15,23,42,0.18);">
          <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center;">
            
            <!-- Left Column: Title & Wishlist/Compare Counters -->
            <div>
              <span style="background: rgba(37, 99, 235, 0.2); border: 1px solid rgba(96, 165, 250, 0.4); color: #60a5fa; font-weight: 800; font-size: 0.78rem; padding: 5px 14px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px;">
                ${IconCar(16, '#60a5fa')} VERIFIED LUXURY FLEET DIRECTORY
              </span>

              <h1 style="font-size: 2.4rem; font-weight: 900; color: #ffffff; margin-top: 10px; letter-spacing: -0.6px;">
                Explore Verified Fleet
              </h1>

              <p style="color: #cbd5e1; font-size: 0.95rem; margin-top: 8px; line-height: 1.6; max-width: 520px;">
                Sanitized 5-seater sedans, 6-seater XL6 captain suites, 7-seater Ertiga/Innova & 4x4 Fortuner available for instant reservation.
              </p>

              <div style="display: flex; gap: 12px; margin-top: 22px; flex-wrap: wrap;">
                <button id="showFavOnlyBtn" class="btn-secondary" style="background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); color: #ffffff; padding: 8px 14px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">
                  ${IconHeart(16, true)} Saved Wishlist: <strong style="color: #38bdf8;">${favCount} Cars</strong>
                </button>

                <button id="openCompareTriggerBtn" class="btn-secondary" style="background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); color: #ffffff; padding: 8px 14px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">
                  ${IconCompare(16, '#4ade80')} Compare Tool: <strong style="color: #4ade80;">${compareCount} Selected</strong>
                </button>
              </div>
            </div>

            <!-- Right Column: NEW Luxury Fleet Guarantees Grid -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
              
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 16px; backdrop-filter: blur(8px);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  ${IconShield(18, '#60a5fa')}
                  <strong style="font-size: 0.88rem; color: #ffffff;">Deep Sanitized</strong>
                </div>
                <span style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.4; display: block;">Cleaned & disinfected before every single pickup.</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 16px; backdrop-filter: blur(8px);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  ${IconUsers(18, '#4ade80')}
                  <strong style="font-size: 0.88rem; color: #ffffff;">Police Verified</strong>
                </div>
                <span style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.4; display: block;">Uniformed chauffeurs with 5+ yrs highway experience.</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 16px; backdrop-filter: blur(8px);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  ${IconClock(18, '#38bdf8')}
                  <strong style="font-size: 0.88rem; color: #ffffff;">On-Time Arrival</strong>
                </div>
                <span style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.4; display: block;">15-min early arrival for zero travel delays.</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 16px; backdrop-filter: blur(8px);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  ${IconCheck(18, '#f59e0b')}
                  <strong style="font-size: 0.88rem; color: #ffffff;">Fixed Billing</strong>
                </div>
                <span style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.4; display: block;">Transparent daily rates with zero hidden charges.</span>
              </div>

            </div>

          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; color: #64748b; font-size: 0.88rem; font-weight: 700;">
          <span>Showing ${filteredCars.length} Verified Vehicles</span>
          ${store.compareList.length > 0 ? `
            <button id="openCompareModalTrigger" class="btn-secondary" style="padding: 4px 12px; font-size: 0.8rem;">
              ⚖️ Open Compare Window (${store.compareList.length})
            </button>
          ` : ''}
        </div>

        ${renderCarGridSection()}
      </section>
    </div>
  `;
};

export const bindFleetPageEvents = (): void => {
  bindCarGridEvents();

  document.querySelector('#showFavOnlyBtn')?.addEventListener('click', () => {
    if (store.favorites.length === 0) {
      store.showToast('You have no saved favorite cars yet. Click the heart on any vehicle card!', 'info');
    } else {
      store.showToast(`Showing ${store.favorites.length} saved vehicles in your wishlist`, 'success');
    }
  });

  document.querySelector('#openCompareTriggerBtn')?.addEventListener('click', () => {
    store.openCompareModal();
  });

  document.querySelector('#openCompareModalTrigger')?.addEventListener('click', () => {
    store.openCompareModal();
  });
};
