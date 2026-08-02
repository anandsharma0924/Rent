import { renderBookingForm } from './BookingForm';
import { store } from '../state/store';

export const renderHero = (): string => {
  return `
    <section class="hero-section">
      <div class="container hero-grid">
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

          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <button id="exploreFleetHeroBtn" class="btn-primary">
              🚘 Explore Luxury Fleet
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

        <div>
          ${renderBookingForm()}
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
