import { store } from '../state/store';
import { carsData } from '../data/cars';
import { formatCurrency } from '../utils/formatters';
import { generateWhatsAppBookingLink } from '../utils/whatsapp';
import { IconCompare } from '../utils/icons';

export const renderCompareDrawer = (): string => {
  const { compareList } = store;
  if (compareList.length === 0) return '';

  const comparedCars = carsData.filter(c => compareList.includes(c.id));

  return `
    <div class="compare-drawer animate-fade-in">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="background: #2563eb; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-size: 0.78rem; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;">
          ${IconCompare(14, '#ffffff')} ${compareList.length} / 3 Selected
        </span>
        <span style="font-size: 0.88rem; font-weight: 700; color: #0f172a;" class="desktop-only">
          ${comparedCars.map(c => c.name).join(', ')}
        </span>
      </div>

      <div style="display: flex; align-items: center; gap: 8px;">
        <button id="openCompareModalBtn" class="btn-primary" style="padding: 6px 14px; font-size: 0.82rem;">
          ⚖️ Compare Now
        </button>
        <button id="clearCompareBtn" class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem; color: #ef4444; border-color: #fca5a5;">
          Clear
        </button>
      </div>
    </div>
  `;
};

export const renderCarCompareModal = (): string => {
  const { isCompareModalOpen, compareList, booking } = store;
  if (!isCompareModalOpen || compareList.length === 0) return '';

  const comparedCars = carsData.filter(c => compareList.includes(c.id));

  return `
    <div class="modal-overlay" id="carCompareModalOverlay">
      <div class="modal-content animate-fade-in" style="max-width: 860px;">
        <button class="modal-close" id="closeCompareModalBtn">&times;</button>

        <div style="text-align: center; margin-bottom: 20px;">
          <span style="background: #eff6ff; color: #2563eb; font-size: 0.78rem; font-weight: 800; padding: 4px 12px; border-radius: 9999px; border: 1px solid #bfdbfe;">
            ⚖️ SIDE-BY-SIDE SPECIFICATION COMPARISON
          </span>
          <h2 style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-top: 6px;">Vehicle Comparison</h2>
        </div>

        <div style="overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 16px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem;">
            <thead>
              <tr style="border-bottom: 2px solid #e2e8f0; background: #f8fafc;">
                <th style="padding: 14px; color: #64748b; font-weight: 800;">Specification</th>
                ${comparedCars.map(car => `
                  <th style="padding: 14px; text-align: center; width: ${66 / comparedCars.length}%;">
                    <img src="${car.image}" alt="${car.name}" style="width: 90px; height: 56px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />
                    <strong style="display: block; color: #0f172a; font-size: 0.95rem;">${car.name}</strong>
                    <span style="color: #2563eb; font-weight: 900; font-size: 1.05rem;">${formatCurrency(car.pricePerDay)}/day</span>
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Seats & Capacity</td>
                ${comparedCars.map(c => `<td style="padding: 12px 14px; text-align: center; font-weight: 800; color: #334155;">${c.seats} Persons</td>`).join('')}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Transmission</td>
                ${comparedCars.map(c => `<td style="padding: 12px 14px; text-align: center; font-weight: 700;">${c.transmission}</td>`).join('')}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Fuel Type</td>
                ${comparedCars.map(c => `<td style="padding: 12px 14px; text-align: center; font-weight: 700;">${c.fuel}</td>`).join('')}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Engine & Power</td>
                ${comparedCars.map(c => `<td style="padding: 12px 14px; text-align: center; color: #475569; font-size: 0.82rem;">${c.specs.engine}</td>`).join('')}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Mileage Economy</td>
                ${comparedCars.map(c => `<td style="padding: 12px 14px; text-align: center; font-weight: 800; color: #059669;">${c.specs.mileage}</td>`).join('')}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Luggage Space</td>
                ${comparedCars.map(c => `<td style="padding: 12px 14px; text-align: center; color: #475569;">${c.specs.luggage}</td>`).join('')}
              </tr>
              <tr>
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Chauffeur Status</td>
                ${comparedCars.map(() => `<td style="padding: 12px 14px; text-align: center; color: #059669; font-weight: 800;">✓ Police Verified</td>`).join('')}
              </tr>
              <tr style="background: #f8fafc; border-top: 2px solid #e2e8f0;">
                <td style="padding: 14px; font-weight: 800; color: #0f172a;">Action</td>
                ${comparedCars.map(car => `
                  <td style="padding: 14px; text-align: center;">
                    <a href="${generateWhatsAppBookingLink(car, booking)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 6px 12px; font-size: 0.78rem; display: inline-flex;">
                      📲 Book ${car.name.split(' ')[0]}
                    </a>
                  </td>
                `).join('')}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
};

export const bindCompareEvents = (): void => {
  document.querySelector('#openCompareModalBtn')?.addEventListener('click', () => {
    store.openCompareModal();
  });

  document.querySelector('#clearCompareBtn')?.addEventListener('click', () => {
    store.clearCompare();
  });

  const closeBtn = document.querySelector('#closeCompareModalBtn');
  const overlay = document.querySelector('#carCompareModalOverlay');

  closeBtn?.addEventListener('click', () => {
    store.closeCompareModal();
  });

  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) {
      store.closeCompareModal();
    }
  });
};
