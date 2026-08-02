import { store } from '../state/store';
import { carsData } from '../data/cars';
import { formatCurrency, calculateDaysBetween, getTodayDateString } from '../utils/formatters';
import { generateWhatsAppBookingLink } from '../utils/whatsapp';
import { openQuoteModal } from './QuoteModal';
import { IconMap } from '../utils/icons';

const POPULAR_LOCATIONS = [
  'Indore, Madhya Pradesh',
  'Indore Airport (IDR)',
  'Indore Junction Railway Station',
  'Vijay Nagar, Indore',
  'Ujjain Mahakal Mandir',
  'Ujjain Junction Railway Station',
  'Bhopal Central',
  'Bhopal Airport (BHO)',
  'Omkareshwar Jyotirlinga',
  'Maheshwar Fort & Ghats',
  'Mandu Heritage City',
  'Dewas Bypass',
  'Ratlam Junction',
  'Mumbai Chhatrapati Shivaji Airport (BOM)',
  'Delhi IGI Airport (DEL)'
];

export const renderBookingForm = (): string => {
  const { booking } = store;
  const selectedCar = carsData.find(c => c.id === booking.selectedCarId) || carsData[0];
  const days = calculateDaysBetween(booking.pickupDate, booking.returnDate);
  
  const isPerKm = booking.pricingMode === 'perKm';
  const estimatedKm = booking.estimatedKm || 300;

  // Calculate fare based on mode (Daily Fixed vs Per KM Rate)
  let totalCost = 0;
  if (isPerKm) {
    totalCost = (selectedCar.pricePerKm * estimatedKm) + (booking.needDriver ? 500 * days : 0);
  } else {
    totalCost = (selectedCar.pricePerDay * days) + (booking.needDriver ? 500 * days : 0);
  }

  const todayStr = getTodayDateString();

  return `
    <div class="glass-card booking-panel" id="booking">
      <div class="panel-title">
        <span>⚡ Quick Ride Estimator</span>
        <span class="status-pill">Available 24x7</span>
      </div>

      <!-- NEW: Pricing Mode Selector Tabs (Daily Fare vs Highway Per KM Rate) -->
      <div style="display: flex; gap: 8px; margin-bottom: 14px; background: #f1f5f9; padding: 4px; border-radius: 10px;">
        <button type="button" class="pricing-mode-tab ${!isPerKm ? 'active' : ''}" data-mode="daily" style="flex: 1; padding: 6px 12px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; border: none; background: ${!isPerKm ? '#ffffff' : 'transparent'}; color: ${!isPerKm ? '#2563eb' : '#64748b'}; cursor: pointer; box-shadow: ${!isPerKm ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'};">
          📅 Daily Rental Fare
        </button>
        <button type="button" class="pricing-mode-tab ${isPerKm ? 'active' : ''}" data-mode="perKm" style="flex: 1; padding: 6px 12px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; border: none; background: ${isPerKm ? '#ffffff' : 'transparent'}; color: ${isPerKm ? '#2563eb' : '#64748b'}; cursor: pointer; box-shadow: ${isPerKm ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'};">
          🛣️ Per KM Highway Rate
        </button>
      </div>

      <form id="bookingSearchForm" class="form-grid" novalidate>
        <div class="form-group">
          <label for="tripType">Service Category</label>
          <select id="tripType">
            <option value="Outstation trip" ${booking.tripType === 'Outstation trip' ? 'selected' : ''}>Outstation Highway Trip</option>
            <option value="Local city ride" ${booking.tripType === 'Local city ride' ? 'selected' : ''}>Local City Rental (4h/8h)</option>
            <option value="Airport transfer" ${booking.tripType === 'Airport transfer' ? 'selected' : ''}>Airport Pickup / Drop</option>
            <option value="Wedding travel" ${booking.tripType === 'Wedding travel' ? 'selected' : ''}>Wedding & Event Travel</option>
          </select>
        </div>

        <!-- Interactive Location Search Input with Autocomplete Dropdown -->
        <div class="form-group" style="position: relative;">
          <label for="pickupCityInput">Pickup Location</label>
          <div style="position: relative;">
            <input 
              type="text" 
              id="pickupCityInput" 
              placeholder="Type city, airport or landmark (e.g. Indore, Ujjain)..." 
              value="${booking.pickupCity}" 
              autocomplete="off" 
              style="width: 100%; padding-left: 36px;"
              required 
            />
            <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #64748b;">
              ${IconMap(16, '#2563eb')}
            </div>
          </div>
          
          <div id="locationSuggestions" class="location-autocomplete-dropdown" style="display: none;"></div>
          <div id="pickupCityError" class="error-text" style="display:none;"></div>
        </div>

        <!-- Per KM Dynamic Distance Input Field (Only visible when Per KM mode selected) -->
        ${isPerKm ? `
          <div class="form-group" style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px; border-radius: 8px;">
            <label for="estimatedKmInput" style="color: #1d4ed8; font-weight: 800;">Estimated Highway Distance (KM) *</label>
            <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
              <input type="number" id="estimatedKmInput" value="${estimatedKm}" min="50" max="5000" step="10" placeholder="e.g. 300 KM" style="flex: 1; font-weight: 800; color: #2563eb;" required />
              <span style="font-size: 0.8rem; font-weight: 700; color: #1d4ed8; white-space: nowrap;">@ ₹${selectedCar.pricePerKm}/KM</span>
            </div>
          </div>
        ` : ''}

        <div class="form-row">
          <div class="form-group">
            <label for="pickupDate">Pickup Date</label>
            <input type="date" id="pickupDate" min="${todayStr}" value="${booking.pickupDate}" required />
            <div id="pickupDateError" class="error-text" style="display:none;"></div>
          </div>
          <div class="form-group">
            <label for="returnDate">Return Date</label>
            <input type="date" id="returnDate" min="${booking.pickupDate}" value="${booking.returnDate}" required />
            <div id="returnDateError" class="error-text" style="display:none;"></div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="seatsNeeded">Passengers</label>
            <select id="seatsNeeded">
              <option value="5" ${booking.seatsNeeded === 5 ? 'selected' : ''}>5 Seats (Sedan / SUV)</option>
              <option value="6" ${booking.seatsNeeded === 6 ? 'selected' : ''}>6 Seats (XL6 Captain)</option>
              <option value="7" ${booking.seatsNeeded === 7 ? 'selected' : ''}>7 Seats (Ertiga / Innova)</option>
            </select>
          </div>

          <div class="form-group">
            <label for="selectedCarSelect">Vehicle Choice</label>
            <select id="selectedCarSelect">
              ${carsData.map(c => `
                <option value="${c.id}" ${c.id === booking.selectedCarId ? 'selected' : ''}>
                  ${c.name} (${isPerKm ? `₹${c.pricePerKm}/km` : `${formatCurrency(c.pricePerDay)}/day`})
                </option>
              `).join('')}
            </select>
          </div>
        </div>

        <div class="checkbox-group">
          <input type="checkbox" id="needDriver" ${booking.needDriver ? 'checked' : ''} />
          <label for="needDriver">Include Driver Allowance (+₹500/day)</label>
        </div>

        <div class="price-estimate-box" style="flex-wrap: wrap; gap: 10px;">
          <div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">
              ${isPerKm ? `Estimated Fare (${estimatedKm} KM @ ₹${selectedCar.pricePerKm}/km)` : `Estimated Fare (${days} ${days === 1 ? 'day' : 'days'})`}
            </div>
            <div class="estimate-val" id="estimatedFareVal">${formatCurrency(totalCost)}</div>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="generateQuotePdfBtn" type="button" class="btn-secondary" style="padding: 8px 12px; font-size: 0.8rem;">
              📄 Official Quote
            </button>

            <button id="whatsAppBookingBtn" type="button" class="btn-whatsapp" style="padding: 8px 14px; font-size: 0.85rem;">
              📲 Book on WhatsApp
            </button>
          </div>
        </div>
      </form>
    </div>
  `;
};

export const bindBookingFormEvents = (): void => {
  const form = document.querySelector('#bookingSearchForm') as HTMLFormElement;
  if (!form) return;

  const locationInput = document.querySelector('#pickupCityInput') as HTMLInputElement;
  const suggestionsBox = document.querySelector('#locationSuggestions') as HTMLDivElement;
  const pickupInput = document.querySelector('#pickupDate') as HTMLInputElement;
  const returnInput = document.querySelector('#returnDate') as HTMLInputElement;
  const kmInput = document.querySelector('#estimatedKmInput') as HTMLInputElement;
  const pickupErr = document.querySelector('#pickupDateError') as HTMLDivElement;
  const returnErr = document.querySelector('#returnDateError') as HTMLDivElement;

  document.querySelectorAll('.pricing-mode-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const mode = (e.currentTarget as HTMLElement).dataset.mode as 'daily' | 'perKm';
      store.setBooking({ pricingMode: mode });
    });
  });

  kmInput?.addEventListener('input', (e) => {
    const kmVal = Number((e.target as HTMLInputElement).value) || 300;
    store.setBooking({ estimatedKm: kmVal });
  });

  const renderSuggestions = (query: string) => {
    if (!suggestionsBox) return;

    const trimmed = query.trim().toLowerCase();
    const matches = POPULAR_LOCATIONS.filter(loc => loc.toLowerCase().includes(trimmed));

    if (matches.length === 0) {
      suggestionsBox.style.display = 'none';
      return;
    }

    suggestionsBox.innerHTML = matches.map(loc => `
      <div class="suggestion-item" data-location="${loc}">
        <span style="color: #2563eb;">📍</span> <span>${loc}</span>
      </div>
    `).join('');
    suggestionsBox.style.display = 'block';

    suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const loc = (e.currentTarget as HTMLElement).dataset.location || '';
        if (locationInput) {
          locationInput.value = loc;
          store.setBooking({ pickupCity: loc });
        }
        suggestionsBox.style.display = 'none';
      });
    });
  };

  locationInput?.addEventListener('input', (e) => {
    const val = (e.target as HTMLInputElement).value;
    store.setBooking({ pickupCity: val });
    renderSuggestions(val);
  });

  locationInput?.addEventListener('focus', (e) => {
    renderSuggestions((e.target as HTMLInputElement).value);
  });

  document.addEventListener('click', (e) => {
    if (!locationInput?.contains(e.target as Node) && !suggestionsBox?.contains(e.target as Node)) {
      if (suggestionsBox) suggestionsBox.style.display = 'none';
    }
  });

  const validateDates = (): boolean => {
    let isValid = true;
    const today = getTodayDateString();

    if (pickupInput && pickupInput.value < today) {
      pickupInput.classList.add('input-error');
      if (pickupErr) {
        pickupErr.textContent = 'Pickup date cannot be in the past!';
        pickupErr.style.display = 'block';
      }
      isValid = false;
    } else {
      pickupInput?.classList.remove('input-error');
      if (pickupErr) pickupErr.style.display = 'none';
    }

    if (returnInput && pickupInput && returnInput.value < pickupInput.value) {
      returnInput.classList.add('input-error');
      if (returnErr) {
        returnErr.textContent = 'Return date must be on or after pickup date!';
        returnErr.style.display = 'block';
      }
      isValid = false;
    } else {
      returnInput?.classList.remove('input-error');
      if (returnErr) returnErr.style.display = 'none';
    }

    return isValid;
  };

  const updateStateAndFare = () => {
    if (!validateDates()) return;

    const tripType = (document.querySelector('#tripType') as HTMLSelectElement)?.value;
    const pickupCity = locationInput?.value || 'Indore';
    const pickupDate = pickupInput?.value;
    const returnDate = returnInput?.value;
    const seatsNeeded = Number((document.querySelector('#seatsNeeded') as HTMLSelectElement)?.value);
    const selectedCarId = Number((document.querySelector('#selectedCarSelect') as HTMLSelectElement)?.value);
    const needDriver = (document.querySelector('#needDriver') as HTMLInputElement)?.checked;

    if (returnInput && pickupDate) {
      returnInput.min = pickupDate;
    }

    store.setBooking({
      tripType,
      pickupCity,
      pickupDate,
      returnDate,
      seatsNeeded,
      selectedCarId,
      needDriver
    });
  };

  form.querySelectorAll('input, select').forEach(element => {
    if (element !== locationInput && element !== kmInput) {
      element.addEventListener('change', updateStateAndFare);
    }
  });

  document.querySelector('#generateQuotePdfBtn')?.addEventListener('click', () => {
    if (!validateDates()) {
      store.showToast('Please fix invalid travel dates before generating quotation', 'warning');
      return;
    }
    openQuoteModal();
    store.notify();
  });

  const whatsAppBtn = document.querySelector('#whatsAppBookingBtn');
  whatsAppBtn?.addEventListener('click', () => {
    if (!validateDates()) {
      store.showToast('Please fix invalid travel dates before booking', 'warning');
      return;
    }

    const { booking } = store;
    const selectedCar = carsData.find(c => c.id === booking.selectedCarId) || carsData[0];
    const link = generateWhatsAppBookingLink(selectedCar, booking);
    window.open(link, '_blank');
  });
};
