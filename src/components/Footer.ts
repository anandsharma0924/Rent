import { store } from '../state/store';
import type { AppRoute } from '../state/store';
import { generateWhatsAppInquiryLink } from '../utils/whatsapp';
import { IconCar, IconWhatsApp, IconPhone } from '../utils/icons';

export const renderFooter = (): string => {
  return `
    <footer style="border-top: 1px solid #e2e8f0; padding: 40px 0 20px; background: #0f172a; color: #f8fafc; margin-top: 40px;">
      <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; margin-bottom: 30px;">
        <div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <div class="brand-icon" style="width:34px; height:34px; font-size:1.1rem; background: linear-gradient(135deg, #2563eb, #1d4ed8); display: grid; place-items: center;">${IconCar(18, '#ffffff')}</div>
            <span style="font-weight:800; font-size:1.15rem; color: #ffffff;">ERTIGA RIDE</span>
          </div>
          <p style="color: #94a3b8; font-size: 0.85rem; line-height: 1.6; margin-bottom: 16px;">
            India’s trusted 7-seater Ertiga, Innova & Luxury SUV mobility platform. Clean, sanitized & transparent pricing guaranteed.
          </p>
          <div style="display: flex; gap: 10px;">
            <a href="${generateWhatsAppInquiryLink()}" target="_blank" rel="noopener noreferrer" style="background: rgba(255,255,255,0.08); padding: 8px 14px; border-radius: 8px; font-size: 0.8rem; color: #38bdf8; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
              ${IconWhatsApp(14, '#38bdf8')} WhatsApp
            </a>
            <a href="tel:9981264216" style="background: rgba(255,255,255,0.08); padding: 8px 14px; border-radius: 8px; font-size: 0.8rem; color: #4ade80; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
              ${IconPhone(14, '#4ade80')} Call Now
            </a>
          </div>
        </div>

        <div>
          <h4 style="margin-bottom: 12px; font-size: 0.95rem; color: #60a5fa; font-weight: 800;">Quick Navigation</h4>
          <ul style="list-style: none; font-size: 0.85rem; display: flex; flex-direction: column; gap: 8px;">
            <li><button class="footer-nav-btn" data-route="home">Home</button></li>
            <li><button class="footer-nav-btn" data-route="fleet">Fleet & Cars</button></li>
            <li><button class="footer-nav-btn" data-route="why-us">Why Choose Us</button></li>
            <li><button class="footer-nav-btn" data-route="faqs">FAQs</button></li>
            <li><button class="footer-nav-btn" data-route="contact">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 style="margin-bottom: 12px; font-size: 0.95rem; color: #60a5fa; font-weight: 800;">Popular Destinations</h4>
          <ul style="list-style: none; color: #cbd5e1; font-size: 0.85rem; display: flex; flex-direction: column; gap: 8px;">
            <li>Indore to Ujjain Mahakal</li>
            <li>Indore to Omkareshwar</li>
            <li>Indore to Mandu & Maheshwar</li>
            <li>Indore Airport Pickup & Drop</li>
          </ul>
        </div>

        <div>
          <h4 style="margin-bottom: 12px; font-size: 0.95rem; color: #60a5fa; font-weight: 800;">Hub Office</h4>
          <div style="font-size: 0.85rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 8px;">
            <span>Vijay Nagar & Airport Road, Indore (M.P.)</span>
            <span>Support: +91 9981264216</span>
            <span>Hours: 24 Hours / 7 Days Available</span>
          </div>
        </div>
      </div>

      <div class="container" style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 0.8rem; color: #64748b;">
        <span>© ${new Date().getFullYear()} Ertiga Ride Mobility. All rights reserved.</span>
        <span>Designed with Clean Classic Luxury UI</span>
      </div>
    </footer>

    <style>
      .footer-nav-btn {
        background: none;
        border: none;
        color: #cbd5e1;
        font-size: 0.85rem;
        cursor: pointer;
        padding: 0;
        transition: color 0.2s ease;
      }
      .footer-nav-btn:hover {
        color: #60a5fa;
      }
    </style>
  `;
};

export const bindFooterEvents = (): void => {
  document.querySelectorAll('.footer-nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const route = (e.currentTarget as HTMLElement).dataset.route as AppRoute;
      if (route) {
        store.setRoute(route);
      }
    });
  });
};
