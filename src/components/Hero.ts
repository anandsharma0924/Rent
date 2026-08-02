import { renderBookingForm } from './BookingForm';
import { store } from '../state/store';

export const renderHero = (): string => {
  return `
    <section class="container" style="padding-top: 16px;">
      <div class="hero-section">
        <div class="hero-grid">
          <div>
            <div class="hero-tag">
              <span>✨ Verified Clean & Sanitized Fleet</span>
            </div>

            <h1 class="hero-title">
              Travel Luxury. <span>Drive Comfort.</span>
            </h1>

            <p class="hero-desc">
              Reserve premium 7-seater Maruti Ertiga, Innova Crysta, XL6 & Fortuner for family vacations, Mahakal pilgrimage trips, airport drops & outstation journeys across India.
            </p>

            <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px;">
              <button id="exploreFleetHeroBtn" class="btn-primary">
                🚘 Explore Fleet
              </button>
              <button id="whyChooseUsHeroBtn" class="btn-secondary">
                🛡️ Why Choose Us
              </button>
            </div>

            <div class="hero-stats">
              <div class="stat-item">
                <strong>1,200+</strong>
                <span>Trips Completed</span>
              </div>
              <div class="stat-item">
                <strong>4.9 ★</strong>
                <span>Customer Rating</span>
              </div>
              <div class="stat-item">
                <strong>100%</strong>
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>

          <div style="min-width: 0; width: 100%;">
            ${renderBookingForm()}
          </div>
        </div>
      </div>
    </section>
  `;
};

export const bindHeroEvents = (): void => {
  document.querySelector('#exploreFleetHeroBtn')?.addEventListener('click', () => {
    store.setRoute('fleet');
  });

  document.querySelector('#whyChooseUsHeroBtn')?.addEventListener('click', () => {
    store.setRoute('why-us');
  });
};
