import { faqsData } from '../data/faqs';

let openFaqId: number | null = 1;

export const renderFaqSection = (): string => {
  return `
    <section id="faqs" class="container" style="padding: 60px 0;">
      <div class="section-header" style="text-align: center;">
        <span class="hero-tag">❓ Frequently Asked Questions</span>
        <h2>Got Questions? We Have Answers.</h2>
      </div>

      <div style="max-width: 800px; margin: 0 auto;">
        ${faqsData.map(faq => {
          const isOpen = openFaqId === faq.id;
          return `
            <div class="faq-item">
              <button class="faq-question" data-faq-id="${faq.id}">
                <span>${faq.question}</span>
                <span style="font-size: 1.2rem; transform: rotate(${isOpen ? '180deg' : '0deg'}); transition: transform 0.3s ease;">
                  ▼
                </span>
              </button>
              ${isOpen ? `
                <div class="faq-answer animate-fade-in">
                  ${faq.answer}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
};

export const bindFaqEvents = (): void => {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number((e.currentTarget as HTMLElement).dataset.faqId);
      openFaqId = openFaqId === id ? null : id;
      // Re-render FAQ section
      const faqContainer = document.querySelector('#faqsContainer');
      if (faqContainer) {
        faqContainer.innerHTML = renderFaqSection();
        bindFaqEvents();
      }
    });
  });
};
