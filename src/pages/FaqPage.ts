import { faqsData } from '../data/faqs';
import { generateWhatsAppInquiryLink } from '../utils/whatsapp';
import { IconSearch, IconWhatsApp, IconPhone } from '../utils/icons';

let searchQuery = '';
let activeCategory = 'All';

export const renderFaqPage = (): string => {
  const categories = ['All', 'Booking', 'Pricing', 'Vehicles', 'Support'];

  const filteredFaqs = faqsData.filter(faq => {
    if (activeCategory !== 'All' && faq.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return `
    <div class="page-faqs animate-fade-in" style="padding-bottom: 60px;">
      <section class="container" style="padding-top: 30px;">
        
        <!-- FAQ Sleek Hero Header Banner -->
        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #ffffff; padding: 44px 30px; border-radius: 24px; margin-bottom: 28px; text-align: center; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 12px 35px rgba(15,23,42,0.12);">
          <span class="hero-tag" style="background: rgba(37, 99, 235, 0.2); border: 1px solid rgba(96, 165, 250, 0.4); color: #60a5fa; margin-bottom: 12px;">
            ❓ 24x7 Help Center
          </span>
          <h1 style="font-size: 2.3rem; font-weight: 900; color: #ffffff; margin-top: 6px;">
            Frequently Asked Questions
          </h1>
          <p style="color: #cbd5e1; font-size: 0.98rem; max-width: 620px; margin: 10px auto 0; line-height: 1.6;">
            Find instant answers to trip bookings, driver allowances, Bhasma Aarti timing, toll taxes, and cancellation policies.
          </p>

          <!-- Interactive Live Search Input -->
          <div style="max-width: 500px; margin: 24px auto 0; position: relative;">
            <input 
              type="text" 
              id="faqSearchInput" 
              placeholder="Search questions (e.g. Mahakal, toll, cancellation, driver)..." 
              value="${searchQuery}" 
              style="width: 100%; padding: 13px 18px 13px 44px; border-radius: 12px; border: 1px solid #cbd5e1; font-size: 0.92rem; outline: none; background: #ffffff; color: #0f172a; box-shadow: 0 4px 14px rgba(0,0,0,0.1);"
            />
            <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #64748b;">
              ${IconSearch(18, '#2563eb')}
            </div>
          </div>
        </div>

        <!-- FAQ Category Filter Tabs -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 28px;">
          ${categories.map(cat => `
            <button class="faq-cat-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}" style="padding: 8px 20px; border-radius: 9999px; font-size: 0.88rem; font-weight: 800; border: 1px solid ${cat === activeCategory ? '#0f172a' : '#cbd5e1'}; background: ${cat === activeCategory ? '#0f172a' : '#ffffff'}; color: ${cat === activeCategory ? '#ffffff' : '#475569'}; cursor: pointer; transition: all 0.2s ease;">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- FAQ Accordion Container -->
        <div style="max-width: 820px; margin: 0 auto 40px;">
          ${filteredFaqs.length > 0 ? filteredFaqs.map(faq => `
            <div class="faq-item glass-card" style="border-radius: 16px; margin-bottom: 14px; border: 1px solid #e2e8f0; overflow: hidden; background: #ffffff;">
              <button class="faq-question-btn" data-faq-id="${faq.id}" style="width: 100%; text-align: left; padding: 18px 22px; font-size: 1rem; font-weight: 800; display: flex; justify-content: space-between; align-items: center; background: #ffffff; border: none; cursor: pointer; color: #0f172a; transition: background 0.2s ease;">
                <span style="display: flex; align-items: center; gap: 12px;">
                  <span style="background: #eff6ff; color: #2563eb; font-size: 0.72rem; padding: 4px 10px; border-radius: 6px; font-weight: 800; border: 1px solid #bfdbfe;">
                    ${faq.category}
                  </span>
                  <span>${faq.question}</span>
                </span>
                <div class="faq-toggle-badge" style="width: 28px; height: 28px; border-radius: 50%; background: #f1f5f9; display: grid; place-items: center; font-size: 1.1rem; color: #2563eb; font-weight: 800; transition: transform 0.25s ease;">
                  +
                </div>
              </button>
              
              <div class="faq-answer-body" id="faqAnswer-${faq.id}" style="display: none; padding: 16px 22px 20px; color: #475569; font-size: 0.92rem; line-height: 1.65; border-top: 1px dashed #e2e8f0; background: #fafafa;">
                ${faq.answer}
              </div>
            </div>
          `).join('') : `
            <div class="glass-card" style="text-align: center; padding: 50px 20px; background: #ffffff; border-radius: 20px;">
              <h3 style="font-size: 1.2rem; font-weight: 800; color: #0f172a;">No matching questions found</h3>
              <p style="color: #64748b; font-size: 0.9rem; margin-top: 6px;">Try searching for another keyword or ask our travel desk directly on WhatsApp.</p>
            </div>
          `}
        </div>

        <!-- Direct Support CTA Box -->
        <div class="glass-card" style="padding: 32px; text-align: center; max-width: 660px; margin: 0 auto; background: #ffffff; border-radius: 24px; border: 1.5px solid #2563eb; box-shadow: 0 10px 30px rgba(15,23,42,0.06);">
          <span style="background: #d1fae5; color: #065f46; font-size: 0.78rem; font-weight: 800; padding: 4px 12px; border-radius: 9999px;">
            ⚡ INSTANT HUMAN ASSISTANCE
          </span>
          <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-top: 10px;">Have a Custom Travel Question?</h3>
          <p style="color: #64748b; font-size: 0.9rem; margin: 6px 0 20px; line-height: 1.6;">
            Our 24x7 travel desk managers in Indore are available on WhatsApp or phone call for immediate help.
          </p>

          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <a href="${generateWhatsAppInquiryLink()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="display: inline-flex; align-items: center; gap: 8px;">
              ${IconWhatsApp(18, '#ffffff')} Chat Live on WhatsApp
            </a>
            <a href="tel:9981264216" class="btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
              ${IconPhone(16, '#0f172a')} Call +91 9981264216
            </a>
          </div>
        </div>

      </section>
    </div>
  `;
};

export const bindFaqPageEvents = (): void => {
  const searchInput = document.querySelector('#faqSearchInput') as HTMLInputElement;
  if (searchInput) {
    searchInput.focus();
    const len = searchInput.value.length;
    searchInput.setSelectionRange(len, len);
  }

  searchInput?.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value;
    const page = document.querySelector('.page-faqs');
    if (page) {
      page.outerHTML = renderFaqPage();
      bindFaqPageEvents();
    }
  });

  document.querySelectorAll('.faq-cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeCategory = (e.currentTarget as HTMLElement).dataset.cat || 'All';
      const page = document.querySelector('.page-faqs');
      if (page) {
        page.outerHTML = renderFaqPage();
        bindFaqPageEvents();
      }
    });
  });

  document.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const faqId = (e.currentTarget as HTMLElement).dataset.faqId;
      const answerBody = document.querySelector(`#faqAnswer-${faqId}`) as HTMLElement;
      const toggleBadge = (e.currentTarget as HTMLElement).querySelector('.faq-toggle-badge') as HTMLElement;
      
      if (answerBody) {
        const isOpen = answerBody.style.display === 'block';
        answerBody.style.display = isOpen ? 'none' : 'block';
        if (toggleBadge) {
          toggleBadge.textContent = isOpen ? '+' : '−';
          toggleBadge.style.background = isOpen ? '#f1f5f9' : '#eff6ff';
        }
      }
    });
  });
};
