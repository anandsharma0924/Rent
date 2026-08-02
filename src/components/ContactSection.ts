import { store } from '../state/store';
import { generateWhatsAppInquiryLink } from '../utils/whatsapp';
import { IconPhone, IconWhatsApp, IconMap, IconShield, IconClock } from '../utils/icons';

export const renderContactSection = (): string => {
  return `
    <section id="contact" class="container" style="padding: 20px 0 40px;">
      
      <!-- 3 Luxury Direct Contact Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 36px;">
        
        <div class="glass-card" style="padding: 26px; border-top: 4px solid #2563eb; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            ${IconPhone(24, '#2563eb')}
          </div>
          <span style="font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Direct Line</span>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 2px 0 6px;">Call Desk Manager</h3>
          <a href="tel:9981264216" style="font-size: 1.1rem; font-weight: 900; color: #2563eb; display: block; margin-bottom: 8px;">
            +91 9981264216
          </a>
          <p style="font-size: 0.82rem; color: #64748b; line-height: 1.5;">Available 24 Hours / 7 Days for instant bookings & flight pickups.</p>
        </div>

        <div class="glass-card" style="padding: 26px; border-top: 4px solid #25d366; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.25); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            ${IconWhatsApp(26, '#25d366')}
          </div>
          <span style="font-size: 0.75rem; color: #059669; font-weight: 800; text-transform: uppercase;">🟢 Online Now</span>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 2px 0 6px;">WhatsApp Support</h3>
          <a href="${generateWhatsAppInquiryLink()}" target="_blank" rel="noopener noreferrer" style="font-size: 0.95rem; font-weight: 800; color: #128c7e; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 8px;">
            Open Instant WhatsApp Chat →
          </a>
          <p style="font-size: 0.82rem; color: #64748b; line-height: 1.5;">Get customized itinerary quotes within 60 seconds.</p>
        </div>

        <div class="glass-card" style="padding: 26px; border-top: 4px solid #0f172a; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(15,23,42,0.06); border: 1px solid rgba(15,23,42,0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            ${IconMap(24, '#0f172a')}
          </div>
          <span style="font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Central Hub</span>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 2px 0 6px;">Indore Main Office</h3>
          <p style="font-size: 0.88rem; font-weight: 700; color: #334155; margin-bottom: 6px;">Vijay Nagar & Airport Road, Indore (M.P.)</p>
          <p style="font-size: 0.82rem; color: #64748b; line-height: 1.5;">Serving Indore, Ujjain, Omkareshwar, Bhopal & Pan-India.</p>
        </div>

      </div>

      <!-- Main Contact Form & Trust Features Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; align-items: start;">
        
        <!-- Left: Verified Guarantees Card -->
        <div class="glass-card" style="padding: 32px; background: #ffffff; border-radius: 20px;">
          <span class="hero-tag" style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8; margin-bottom: 12px;">
            🛡️ Verified Booking Desk
          </span>
          <h3 style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin-top: 6px;">
            Why Book Directly With Us?
          </h3>
          <p style="color: #64748b; font-size: 0.9rem; line-height: 1.6; margin-top: 8px; margin-bottom: 20px;">
            Avoid third-party agent commissions. Get direct vehicle driver numbers, clean sanitized cars, and zero hidden fees guarantee.
          </p>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(37,99,235,0.08); display: grid; place-items: center; flex-shrink: 0;">
                ${IconShield(20, '#2563eb')}
              </div>
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0f172a;">100% Police Verified Chauffeurs</strong>
                <span style="font-size: 0.82rem; color: #64748b;">All drivers hold commercial licenses & police verification badges.</span>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(5,150,105,0.08); display: grid; place-items: center; flex-shrink: 0;">
                ${IconClock(20, '#059669')}
              </div>
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0f172a;">Guaranteed Early Pickups</strong>
                <span style="font-size: 0.82rem; color: #64748b;">Punctual 3:00 AM pickups for Ujjain Mahakal Bhasma Aarti.</span>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(37,99,235,0.08); display: grid; place-items: center; flex-shrink: 0;">
                ${IconPhone(20, '#2563eb')}
              </div>
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0f172a;">24x7 Flight Tracking</strong>
                <span style="font-size: 0.82rem; color: #64748b;">Free 60-minute driver waiting time for delayed flights at Indore Airport.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Validated Callback Form -->
        <form id="leadContactForm" class="glass-card" style="padding: 32px; background: #ffffff; border-radius: 20px; border: 1.5px solid #2563eb; box-shadow: 0 12px 35px rgba(15,23,42,0.08);" novalidate>
          <div style="margin-bottom: 18px;">
            <span style="background: #eff6ff; color: #2563eb; font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 9999px; border: 1px solid #bfdbfe;">
              ⚡ INSTANT QUOTE REQUEST
            </span>
            <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-top: 6px;">Request Customized Fare Quote</h3>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div class="form-group">
              <label for="leadName">Full Name *</label>
              <input type="text" id="leadName" placeholder="Enter your full name" required />
              <div id="leadNameError" class="error-text" style="display:none;"></div>
            </div>

            <div class="form-group">
              <label for="leadPhone">10-Digit Indian Mobile Number *</label>
              <input type="tel" id="leadPhone" placeholder="Enter 10-digit mobile number" required maxLength="10" />
              <div id="leadPhoneError" class="error-text" style="display:none;"></div>
            </div>

            <div class="form-group">
              <label for="leadService">Travel Category</label>
              <select id="leadService">
                <option value="Outstation Highway Trip">Outstation Highway Rental</option>
                <option value="Ujjain Mahakal Pilgrimage">Ujjain Mahakal Pilgrimage</option>
                <option value="Omkareshwar Narmada Trip">Omkareshwar Narmada Trip</option>
                <option value="Indore Airport Transfer">Airport Pickup / Drop</option>
                <option value="Wedding Motorcade Travel">Wedding & Event Escort</option>
              </select>
            </div>

            <div class="form-group">
              <label for="leadMsg">Trip Details & Travel Dates *</label>
              <textarea id="leadMsg" rows="3" placeholder="Destination, travel date, number of passengers..." required></textarea>
              <div id="leadMsgError" class="error-text" style="display:none;"></div>
            </div>

            <button type="submit" class="btn-whatsapp" style="justify-content: center; padding: 12px; font-size: 0.92rem; margin-top: 4px;">
              🚀 Submit Booking Request via WhatsApp
            </button>
          </div>
        </form>

      </div>
    </section>
  `;
};

export const bindContactEvents = (): void => {
  const form = document.querySelector('#leadContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#leadName') as HTMLInputElement;
    const phoneInput = document.querySelector('#leadPhone') as HTMLInputElement;
    const serviceInput = document.querySelector('#leadService') as HTMLSelectElement;
    const msgInput = document.querySelector('#leadMsg') as HTMLTextAreaElement;

    const nameErr = document.querySelector('#leadNameError') as HTMLDivElement;
    const phoneErr = document.querySelector('#leadPhoneError') as HTMLDivElement;
    const msgErr = document.querySelector('#leadMsgError') as HTMLDivElement;

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('input-error');
      if (nameErr) {
        nameErr.textContent = 'Please enter your full name (at least 2 characters)';
        nameErr.style.display = 'block';
      }
      isValid = false;
    } else {
      nameInput.classList.remove('input-error');
      if (nameErr) nameErr.style.display = 'none';
    }

    // Validate Phone
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
      phoneInput.classList.add('input-error');
      if (phoneErr) {
        phoneErr.textContent = 'Please enter a valid 10-digit Indian mobile number';
        phoneErr.style.display = 'block';
      }
      isValid = false;
    } else {
      phoneInput.classList.remove('input-error');
      if (phoneErr) phoneErr.style.display = 'none';
    }

    // Validate Message
    if (!msgInput.value.trim()) {
      msgInput.classList.add('input-error');
      if (msgErr) {
        msgErr.textContent = 'Please enter trip details and dates';
        msgErr.style.display = 'block';
      }
      isValid = false;
    } else {
      msgInput.classList.remove('input-error');
      if (msgErr) msgErr.style.display = 'none';
    }

    if (!isValid) {
      store.showToast('Please fix invalid fields in the contact form', 'warning');
      return;
    }

    const whatsappMessage = `🌟 *ERTIGA RIDE | DIRECT CALLBACK REQUEST* 🚘
-------------------------------------------------
Name: ${nameInput.value.trim()}
Phone: ${phoneInput.value.trim()}
Service Needed: ${serviceInput.value}

Trip Details:
"${msgInput.value.trim()}"

Please send vehicle availability and rate quotation. Thank you!`;

    const whatsappUrl = `https://wa.me/919981264216?text=${encodeURIComponent(whatsappMessage)}`;
    store.showToast('Validation successful! Opening WhatsApp chat...', 'success');
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);

    (form as HTMLFormElement).reset();
  });
};
