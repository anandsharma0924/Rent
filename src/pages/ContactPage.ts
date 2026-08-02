import { renderContactSection, bindContactEvents } from '../components/ContactSection';
import { generateWhatsAppInquiryLink } from '../utils/whatsapp';
import { IconPhone, IconWhatsApp } from '../utils/icons';

export const renderContactPage = (): string => {
  return `
    <div class="page-contact animate-fade-in" style="padding-bottom: 60px;">
      <section class="container" style="padding-top: 30px;">
        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #ffffff; padding: 44px 30px; border-radius: 24px; margin-bottom: 20px; text-align: center; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 12px 35px rgba(15,23,42,0.12);">
          <span class="hero-tag" style="background: rgba(37, 99, 235, 0.2); border: 1px solid rgba(96, 165, 250, 0.4); color: #60a5fa; margin-bottom: 12px;">
            📞 24x7 Direct Travel Desk
          </span>
          <h1 style="font-size: 2.3rem; font-weight: 900; color: #ffffff; margin-top: 6px;">
            Get in Touch With Our Travel Team
          </h1>
          <p style="color: #cbd5e1; font-size: 0.98rem; max-width: 620px; margin: 10px auto 0; line-height: 1.6;">
            Need a customized wedding fleet quote, Mahakal temple pilgrimage schedule, or corporate outstation rental? We are available 24x7 to assist you.
          </p>

          <div style="display: flex; gap: 12px; justify-content: center; margin-top: 22px; flex-wrap: wrap;">
            <a href="tel:9981264216" class="btn-primary" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #2563eb, #1d4ed8);">
              ${IconPhone(16, '#ffffff')} Call +91 9981264216
            </a>
            <a href="${generateWhatsAppInquiryLink()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="display: inline-flex; align-items: center; gap: 8px;">
              ${IconWhatsApp(18, '#ffffff')} WhatsApp Instant Chat
            </a>
          </div>
        </div>

        ${renderContactSection()}
      </section>
    </div>
  `;
};

export const bindContactPageEvents = (): void => {
  bindContactEvents();
};
