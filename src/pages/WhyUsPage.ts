import { renderFeaturesSection } from '../components/FeaturesSection';
import { generateWhatsAppInquiryLink } from '../utils/whatsapp';
import { IconWhatsApp, IconShield, IconPhone, IconStar } from '../utils/icons';

export const renderWhyUsPage = (): string => {
  return `
    <div class="page-why-us animate-fade-in" style="padding-bottom: 50px;">
      <section class="container" style="padding-top: 30px;">
        
        <!-- Breathtaking 2-Column Luxury Hero Banner Container -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%); color: #ffffff; padding: 48px 40px; border-radius: 28px; margin-bottom: 32px; border: 1px solid rgba(255,255,255,0.12); border-top: 4px solid #2563eb; box-shadow: 0 25px 60px rgba(15,23,42,0.22); position: relative;">
          
          <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 36px; align-items: center;">
            
            <!-- Left Column: Content & Buttons -->
            <div style="text-align: left;">
              <span style="background: rgba(37, 99, 235, 0.2); border: 1px solid rgba(96, 165, 250, 0.4); color: #60a5fa; font-weight: 800; font-size: 0.78rem; padding: 6px 16px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.8px;">
                ${IconShield(16, '#60a5fa')} SAFETY & INTEGRITY STANDARD
              </span>

              <h1 style="font-size: 2.6rem; font-weight: 900; color: #ffffff; margin-top: 14px; letter-spacing: -0.8px; line-height: 1.2;">
                Why Smart Travelers Pick <span style="color: #60a5fa;">Ertiga Ride</span>
              </h1>

              <p style="color: #cbd5e1; font-size: 1.02rem; margin-top: 14px; line-height: 1.65; max-width: 560px;">
                From Narmada & Mahakal pilgrimages to corporate road trips, discover our 100% police-verified chauffeur guarantee and transparent pricing framework.
              </p>

              <div style="display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap;">
                <a href="${generateWhatsAppInquiryLink()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 12px 24px; font-size: 0.92rem; display: inline-flex; align-items: center; gap: 8px;">
                  ${IconWhatsApp(18, '#ffffff')} Speak to Travel Desk Manager
                </a>
                
                <a href="tel:9981264216" class="btn-secondary" style="padding: 12px 22px; font-size: 0.92rem; background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); color: #ffffff; display: inline-flex; align-items: center; gap: 8px;">
                  ${IconPhone(16, '#ffffff')} Call Desk
                </a>
              </div>
            </div>

            <!-- Right Column: Interactive Stat Pillars Grid -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
              
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px; border-radius: 18px; text-align: center; backdrop-filter: blur(8px);">
                <strong style="font-size: 1.9rem; font-weight: 900; color: #60a5fa; display: block;">1,200+</strong>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600; margin-top: 2px; display: block;">Trips Completed</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px; border-radius: 18px; text-align: center; backdrop-filter: blur(8px);">
                <strong style="font-size: 1.9rem; font-weight: 900; color: #f59e0b; display: flex; align-items: center; justify-content: center; gap: 4px;">
                  4.95 ${IconStar(18, '#f59e0b')}
                </strong>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600; margin-top: 2px; display: block;">Customer Rating</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px; border-radius: 18px; text-align: center; backdrop-filter: blur(8px);">
                <strong style="font-size: 1.9rem; font-weight: 900; color: #4ade80; display: block;">100%</strong>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600; margin-top: 2px; display: block;">Verified Drivers</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px; border-radius: 18px; text-align: center; backdrop-filter: blur(8px);">
                <strong style="font-size: 1.9rem; font-weight: 900; color: #38bdf8; display: block;">24x7</strong>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600; margin-top: 2px; display: block;">Desk Support</span>
              </div>

            </div>

          </div>

        </div>

        ${renderFeaturesSection()}
      </section>
    </div>
  `;
};
