import { reviewsData } from '../data/reviews';

export const renderTestimonialsSection = (): string => {
  return `
    <section class="container" style="padding: 60px 0;">
      <div class="section-header" style="text-align: center;">
        <span class="hero-tag">❤️ Verified Reviews</span>
        <h2>What Our Travelers Say</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
        ${reviewsData.map(rev => `
          <div class="glass-card" style="padding: 28px; display: flex; flex-direction: column;">
            <div style="display: flex; items-center; gap: 14px; margin-bottom: 16px;">
              <img src="${rev.avatar}" alt="${rev.name}" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--emerald-primary);" />
              <div>
                <strong style="display: block; font-size: 1rem;">${rev.name}</strong>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${rev.location} • ${rev.date}</span>
              </div>
            </div>

            <div style="color: var(--gold-accent); font-size: 0.9rem; margin-bottom: 12px;">
              ${'★'.repeat(rev.rating)}
            </div>

            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px; flex-grow: 1;">
              "${rev.comment}"
            </p>

            <div style="font-size: 0.8rem; color: var(--emerald-light); font-weight: 600; padding-top: 12px; border-top: 1px solid var(--glass-border);">
              Rented: ${rev.carRented}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};
