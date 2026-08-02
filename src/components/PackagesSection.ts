import { packagesData } from '../data/packages';
import { formatCurrency } from '../utils/formatters';
import { generateWhatsAppInquiryLink } from '../utils/whatsapp';

export const renderPackagesSection = (): string => {
  return `
    <section id="packages" class="container" style="padding: 60px 0;">
      <div class="section-header" style="text-align: center;">
        <span class="hero-tag">🗺️ Tour & Rental Packages</span>
        <h2>Fixed Rate Curated Trip Packages</h2>
        <p style="color: var(--text-secondary); max-width: 600px; margin: 8px auto 0;">
          All-inclusive pricing with verified chauffeur, toll guidance, and fuel included options.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 24px;">
        ${packagesData.map(pkg => `
          <div class="glass-card" style="padding: 28px; position: relative; display: flex; flex-direction: column; ${pkg.popular ? 'border-color: var(--emerald-primary); box-shadow: var(--shadow-glow);' : ''}">
            ${pkg.popular ? `
              <span style="position: absolute; top: -12px; right: 20px; background: var(--emerald-primary); color: #000; font-weight: 800; font-size: 0.75rem; padding: 4px 12px; border-radius: var(--radius-full);">
                POPULAR CHOICE
              </span>
            ` : ''}

            <h3 style="font-size: 1.3rem; margin-bottom: 6px;">${pkg.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px; flex-grow: 1;">${pkg.tagline}</p>

            <div style="display: flex; gap: 12px; font-size: 0.85rem; font-weight: 600; color: var(--emerald-light); margin-bottom: 20px;">
              <span>⏱️ ${pkg.duration}</span>
              <span>•</span>
              <span>🗺️ ${pkg.kilometers}</span>
            </div>

            <ul style="list-style: none; margin-bottom: 24px;">
              ${pkg.features.map((feat: string) => `
                <li style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                  <span style="color: var(--emerald-light);">✓</span> ${feat}
                </li>
              `).join('')}
            </ul>

            <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--glass-border); display: flex; align-items: center; justify-content: space-between;">
              <strong style="font-size: 1.6rem; color: var(--text-primary);">${formatCurrency(pkg.price)}</strong>
              <a href="${generateWhatsAppInquiryLink(`Hello! I want to book the ${pkg.name} package (${pkg.duration}).`)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 8px 16px; font-size: 0.85rem;">
                Select Plan
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};
