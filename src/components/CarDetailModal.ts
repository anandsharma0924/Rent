import { store } from '../state/store';
import { formatCurrency } from '../utils/formatters';
import { generateWhatsAppBookingLink } from '../utils/whatsapp';
import { IconShield, IconStar, IconCheck } from '../utils/icons';

let activeImageIndex = 0;

export const renderCarDetailModal = (): string => {
  const { activeDetailCar, booking } = store;
  if (!activeDetailCar) return '';

  const currentImage = activeDetailCar.gallery[activeImageIndex]?.url || activeDetailCar.image;

  return `
    <div class="modal-overlay" id="carDetailModalOverlay">
      <div class="modal-content animate-fade-in" style="max-width: 760px;">
        <button class="modal-close" id="closeDetailModalBtn">&times;</button>

        <!-- Main Image Preview Frame -->
        <div style="position: relative; height: 260px; border-radius: 16px; overflow: hidden; margin-bottom: 12px; border: 1px solid #e2e8f0;">
          <img id="detailMainPreview" src="${currentImage}" alt="${activeDetailCar.name}" style="width:100%; height:100%; object-fit:cover; transition: opacity 0.3s ease;" />
          <span class="card-badge" style="position:absolute; top:14px; left:14px;">${activeDetailCar.badge}</span>
        </div>

        <!-- Multi-Angle Thumbnail Tabs -->
        <div style="display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px;">
          ${activeDetailCar.gallery.map((item, idx) => `
            <button class="gallery-thumb-btn ${idx === activeImageIndex ? 'active' : ''}" data-index="${idx}" style="padding: 6px 12px; border-radius: 8px; font-size: 0.78rem; font-weight: 700; border: 1.5px solid ${idx === activeImageIndex ? '#2563eb' : '#e2e8f0'}; background: ${idx === activeImageIndex ? '#eff6ff' : '#ffffff'}; color: ${idx === activeImageIndex ? '#1d4ed8' : '#475569'}; cursor: pointer; white-space: nowrap;">
              📸 ${item.label}
            </button>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h2 style="font-size: 1.4rem; font-weight: 900; color: #0f172a;">${activeDetailCar.name}</h2>
          <div style="font-size:1.3rem; font-weight:900; color:#2563eb;">
            ${formatCurrency(activeDetailCar.pricePerDay)} <span style="font-size:0.75rem; color:#64748b;">/ day</span>
          </div>
        </div>

        <p style="color: #64748b; font-size: 0.88rem; margin-bottom: 18px;">${activeDetailCar.tagline}</p>

        <!-- Technical Specs -->
        <h3 style="font-size:0.98rem; font-weight:800; margin-bottom:10px; color:#0f172a;">Technical Specifications</h3>
        <div class="specs-grid">
          <div class="spec-box">
            <span>Engine & Power</span>
            <strong>${activeDetailCar.specs.engine}</strong>
          </div>
          <div class="spec-box">
            <span>Fuel Efficiency</span>
            <strong>${activeDetailCar.specs.mileage}</strong>
          </div>
          <div class="spec-box">
            <span>Luggage Capacity</span>
            <strong>${activeDetailCar.specs.luggage}</strong>
          </div>
          <div class="spec-box">
            <span>Airbags & Safety</span>
            <strong>${activeDetailCar.specs.airbags} Airbags • Dual ABS</strong>
          </div>
        </div>

        <!-- Verified Chauffeur Profile Card -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; margin: 18px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              ${IconShield(18, '#2563eb')}
              <strong style="font-size: 0.92rem; color: #0f172a;">Assigned Chauffeur: ${activeDetailCar.chauffeur.name}</strong>
              <span style="background: #d1fae5; color: #065f46; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: 9999px;">
                ✓ Police Verified
              </span>
            </div>
            <div style="font-size: 0.8rem; color: #64748b;">
              ${activeDetailCar.chauffeur.experience} • Languages: ${activeDetailCar.chauffeur.languages.join(', ')}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 4px; background: #fef3c7; color: #b45309; padding: 4px 10px; border-radius: 8px; font-weight: 800; font-size: 0.85rem;">
            ${IconStar(14)} ${activeDetailCar.chauffeur.rating} / 5 Rating
          </div>
        </div>

        <!-- Key Features -->
        <h3 style="font-size:0.98rem; font-weight:800; margin-top:16px; margin-bottom:10px; color:#0f172a;">Key Features & Amenities</h3>
        <ul style="display:grid; grid-template-columns: repeat(2, 1fr); gap:8px; margin-bottom:24px; list-style:none;">
          ${activeDetailCar.features.map(f => `
            <li style="display:flex; align-items:center; gap:6px; color:#334155; font-size:0.85rem; font-weight:600;">
              ${IconCheck(14, '#059669')} ${f}
            </li>
          `).join('')}
        </ul>

        <div style="display:flex; justify-content:space-between; gap:16px; align-items:center; border-top:1px solid #e2e8f0; padding-top:16px;">
          <div>
            <div style="font-size:0.75rem; color:#64748b;">Location</div>
            <strong style="color:#0f172a; font-size:0.9rem;">${activeDetailCar.location}, India</strong>
          </div>

          <a href="${generateWhatsAppBookingLink(activeDetailCar, booking)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
            📲 Reserve ${activeDetailCar.name} on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
};

export const bindCarDetailModalEvents = (): void => {
  const overlay = document.querySelector('#carDetailModalOverlay');
  const closeBtn = document.querySelector('#closeDetailModalBtn');

  closeBtn?.addEventListener('click', () => {
    activeImageIndex = 0;
    store.closeDetailModal();
  });

  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) {
      activeImageIndex = 0;
      store.closeDetailModal();
    }
  });

  // Gallery Thumbnail Click Event
  document.querySelectorAll('.gallery-thumb-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number((e.currentTarget as HTMLElement).dataset.index);
      activeImageIndex = idx;
      
      const modal = document.querySelector('#carDetailModalOverlay');
      if (modal) {
        modal.outerHTML = renderCarDetailModal();
        bindCarDetailModalEvents();
      }
    });
  });
};
