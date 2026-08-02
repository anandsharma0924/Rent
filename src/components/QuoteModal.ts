import { store } from '../state/store';
import { carsData } from '../data/cars';
import { formatCurrency, calculateDaysBetween } from '../utils/formatters';
import { IconCar } from '../utils/icons';

let isQuoteModalOpen = false;

export const openQuoteModal = (): void => {
  isQuoteModalOpen = true;
  store.showToast('Generating official travel quotation receipt...', 'info');
};

export const closeQuoteModal = (): void => {
  isQuoteModalOpen = false;
};

export const renderQuoteModal = (): string => {
  if (!isQuoteModalOpen) return '';

  const { booking } = store;
  const car = carsData.find(c => c.id === booking.selectedCarId) || carsData[0];
  const days = calculateDaysBetween(booking.pickupDate, booking.returnDate);
  const baseFare = car.pricePerDay * days;
  const driverAllowance = booking.needDriver ? 500 * days : 0;
  const totalCost = baseFare + driverAllowance;
  const quoteId = `ERT-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  return `
    <div class="modal-overlay" id="quoteModalOverlay">
      <div class="modal-content animate-fade-in" style="max-width: 680px; padding: 32px; background: #ffffff;">
        <button class="modal-close" id="closeQuoteModalBtn">&times;</button>

        <!-- Quotation Invoice Header -->
        <div style="border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <div class="brand-icon" style="width:30px; height:30px; font-size:0.9rem;">${IconCar(16, '#ffffff')}</div>
              <strong style="font-size: 1.25rem; color: #0f172a;">ERTIGA RIDE MOBILITY</strong>
            </div>
            <span style="font-size: 0.78rem; color: #64748b;">Vijay Nagar & Airport Road, Indore (M.P.), India • Support: +91 9981264216</span>
          </div>

          <div style="text-align: right;">
            <span style="background: #eff6ff; color: #2563eb; font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; border: 1px solid #bfdbfe;">
              OFFICIAL QUOTATION
            </span>
            <strong style="display: block; font-size: 0.9rem; color: #0f172a; margin-top: 4px;">Quote #: ${quoteId}</strong>
            <span style="font-size: 0.75rem; color: #64748b;">Date: ${new Date().toLocaleDateString('en-IN')}</span>
          </div>
        </div>

        <!-- Trip Reservation Summary Table -->
        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: #0f172a; margin-bottom: 10px;">Trip & Reservation Summary</h4>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
            <tbody>
              <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700; width: 40%;">Service Category</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: 800;">${booking.tripType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700;">Pickup Location</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: 800;">📍 ${booking.pickupCity}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700;">Travel Dates & Duration</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: 800;">📅 ${booking.pickupDate} ➔ ${booking.returnDate} (${days} ${days === 1 ? 'day' : 'days'})</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700;">Vehicle Selected</td>
                <td style="padding: 10px 14px; color: #2563eb; font-weight: 800;">🚘 ${car.name} (${car.seats} Seats)</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700;">Assigned Chauffeur</td>
                <td style="padding: 10px 14px; color: #059669; font-weight: 800;">✓ ${car.chauffeur.name} (Police Verified)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Line Item Cost Breakdown -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: #0f172a; margin-bottom: 10px;">Fare Itemization</h4>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.88rem; color: #475569; margin-bottom: 6px;">
              <span>Base Vehicle Rental (${formatCurrency(car.pricePerDay)} × ${days} days)</span>
              <strong>${formatCurrency(baseFare)}</strong>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 0.88rem; color: #475569; margin-bottom: 8px;">
              <span>Chauffeur Allowance (+₹500 × ${days} days)</span>
              <strong>${formatCurrency(driverAllowance)}</strong>
            </div>

            <div style="border-top: 1.5px dashed #cbd5e1; padding-top: 10px; display: flex; justify-content: space-between; align-items: center;">
              <strong style="font-size: 1.05rem; color: #0f172a;">Estimated Total Fare</strong>
              <strong style="font-size: 1.4rem; color: #2563eb; font-weight: 900;">${formatCurrency(totalCost)}</strong>
            </div>
          </div>
        </div>

        <!-- Action Buttons: Print PDF & Close -->
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button id="printQuotePdfBtn" class="btn-primary" style="padding: 10px 20px; font-size: 0.88rem;">
            🖨️ Print / Download Official Quote
          </button>
          <button id="closeQuoteModalActionBtn" class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;">
            Close Window
          </button>
        </div>
      </div>
    </div>
  `;
};

export const bindQuoteModalEvents = (): void => {
  const overlay = document.querySelector('#quoteModalOverlay');
  const closeBtn = document.querySelector('#closeQuoteModalBtn');
  const closeActionBtn = document.querySelector('#closeQuoteModalActionBtn');
  const printBtn = document.querySelector('#printQuotePdfBtn');

  const handleClose = () => {
    closeQuoteModal();
    store.notify();
  };

  closeBtn?.addEventListener('click', handleClose);
  closeActionBtn?.addEventListener('click', handleClose);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) handleClose();
  });

  printBtn?.addEventListener('click', () => {
    window.print();
  });
};
