import { renderHero, bindHeroEvents } from '../components/Hero';
import { renderCarCard } from '../components/CarCard';
import { carsData } from '../data/cars';
import { store } from '../state/store';
import { generateWhatsAppInquiryLink } from '../utils/whatsapp';
import { IconMap, IconClock, IconCar, IconWhatsApp, IconStar, IconCheck } from '../utils/icons';

const POPULAR_ROUTES = [
  {
    from: 'Indore',
    to: 'Ujjain Mahakal Mandir',
    distance: '55 KM',
    duration: '1 Hr 15 Min',
    recommended: 'Maruti Ertiga 7-Seater',
    tollEstimate: '₹95 (Expressway Toll)',
    priceEstimate: '₹3,500 Flat Round Trip'
  },
  {
    from: 'Indore',
    to: 'Omkareshwar Jyotirlinga',
    distance: '78 KM',
    duration: '2 Hours',
    recommended: 'Toyota Innova Crysta / XL6',
    tollEstimate: '₹60 (State Highway)',
    priceEstimate: '₹3,800 Round Trip'
  },
  {
    from: 'Indore',
    to: 'Bhopal Capital City',
    distance: '195 KM',
    duration: '3.5 Hours',
    recommended: 'Honda City / Creta / Ertiga',
    tollEstimate: '₹240 (4-Lane Super Corridor)',
    priceEstimate: '₹4,400 One Way / Day'
  },
  {
    from: 'Indore',
    to: 'Indore Airport (IDR)',
    distance: '12 KM',
    duration: '25 Minutes',
    recommended: 'Maruti Ertiga / Sedan',
    tollEstimate: 'Zero Toll',
    priceEstimate: '₹1,399 Express Drop'
  }
];

const TRIP_ITINERARIES = [
  {
    title: 'Ujjain Mahakal Bhasma Aarti Special',
    subtitle: 'VIP Pilgrimage Day Trip',
    places: ['Mahakaleshwar Temple', 'Harsiddhi Mata Mandir', 'Kal Bhairav Temple', 'Ram Ghat Aarti'],
    duration: '1 Full Day (12 Hours)',
    car: 'Maruti Ertiga 7-Seater',
    price: '₹3,500 All Inclusive'
  },
  {
    title: 'Omkareshwar & Mamleshwar Darshan',
    subtitle: 'Narmada Ghat Pilgrimage',
    places: ['Omkareshwar Jyotirlinga', 'Mamleshwar Temple', 'Narmada Sangam Boat Ride'],
    duration: '1 Day Trip',
    car: 'Maruti XL6 / Innova',
    price: '₹3,800 All Inclusive'
  },
  {
    title: 'Mandu Heritage & Maheshwar Fort',
    subtitle: 'Royal Architecture Tour',
    places: ['Jahaz Mahal', 'Hindola Mahal', 'Rupmati Pavilion', 'Maheshwar Ahilya Fort & Ghats'],
    duration: '1 Day / 2 Days Option',
    car: 'Toyota Innova Crysta',
    price: '₹4,800 Full Package'
  }
];

let selectedRouteIndex = 0;
let selectedItineraryIndex = 0;

export const renderHomePage = (): string => {
  const topFeaturedCars = carsData.slice(0, 3);
  const activeRoute = POPULAR_ROUTES[selectedRouteIndex];
  const activeItinerary = TRIP_ITINERARIES[selectedItineraryIndex];

  return `
    <div class="page-home animate-fade-in">
      ${renderHero()}

      <!-- Featured Vehicles Section -->
      <section class="container" style="padding: 40px 0 20px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px;">
          <div>
            <span class="hero-tag">🚘 Featured Selection</span>
            <h2 style="font-size: 2rem; font-weight: 900; color: var(--navy-primary);">Top Rated Vehicles</h2>
          </div>
          <button id="viewAllFleetBtn" class="btn-primary">
            Explore All Cars →
          </button>
        </div>

        <div class="car-grid">
          ${topFeaturedCars.map(car => renderCarCard(car)).join('')}
        </div>
      </section>

      <!-- Route Estimator Widget -->
      <section class="container" style="padding: 30px 0 40px;">
        <div class="glass-card" style="padding: 32px; background: #ffffff; border-radius: 24px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <span class="hero-tag">🗺️ Instant Route Guide</span>
            <h2 style="font-size: 1.8rem; font-weight: 900; color: #0f172a; margin-top: 6px;">
              Popular Destinations & Highway Route Estimator
            </h2>
            <p style="color: #64748b; font-size: 0.9rem; margin-top: 4px;">
              Select a popular destination from Indore to view estimated distance, drive duration, and flat trip fare.
            </p>
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 24px;">
            ${POPULAR_ROUTES.map((rt, idx) => `
              <button class="route-tab-btn ${idx === selectedRouteIndex ? 'active' : ''}" data-index="${idx}" style="padding: 8px 18px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; border: 1px solid ${idx === selectedRouteIndex ? '#0f172a' : '#e2e8f0'}; background: ${idx === selectedRouteIndex ? '#0f172a' : '#f1f5f9'}; color: ${idx === selectedRouteIndex ? '#ffffff' : '#475569'}; cursor: pointer;">
                📍 ${rt.to}
              </button>
            `).join('')}
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 18px; padding: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; align-items: center;">
            <div>
              <span style="font-size: 0.78rem; color: #64748b; font-weight: 600;">Trip Route</span>
              <strong style="display: block; font-size: 1.15rem; color: #0f172a; font-weight: 800;">${activeRoute.from} ➔ ${activeRoute.to}</strong>
            </div>

            <div>
              <span style="font-size: 0.78rem; color: #64748b; font-weight: 600;">Distance & Duration</span>
              <strong style="display: block; font-size: 1.05rem; color: #2563eb; font-weight: 800; display:flex; align-items:center; gap:6px;">
                ${IconMap(16, '#2563eb')} ${activeRoute.distance} • ${IconClock(16, '#2563eb')} ${activeRoute.duration}
              </strong>
            </div>

            <div>
              <span style="font-size: 0.78rem; color: #64748b; font-weight: 600;">Recommended Vehicle</span>
              <strong style="display: block; font-size: 0.95rem; color: #0f172a; font-weight: 700; display:flex; align-items:center; gap:6px;">
                ${IconCar(16, '#0f172a')} ${activeRoute.recommended}
              </strong>
            </div>

            <div>
              <span style="font-size: 0.78rem; color: #64748b; font-weight: 600;">Estimated Package Fare</span>
              <strong style="display: block; font-size: 1.25rem; color: #059669; font-weight: 900;">${activeRoute.priceEstimate}</strong>
            </div>

            <div style="text-align: right;">
              <a href="${generateWhatsAppInquiryLink(`Hello! I want to reserve a vehicle for the ${activeRoute.from} to ${activeRoute.to} trip (${activeRoute.distance}).`)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 10px 18px; font-size: 0.85rem; display: inline-flex;">
                ${IconWhatsApp(16, '#ffffff')} Book This Route
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Pilgrimage & Tour Itinerary Planner -->
      <section class="container" style="padding: 0 0 40px;">
        <div class="glass-card" style="padding: 32px; background: #ffffff; border-radius: 24px; border: 1.5px solid #2563eb;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
            <div>
              <span class="hero-tag" style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8;">🚩 Custom Itinerary Planner</span>
              <h3 style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-top: 4px;">Top Recommended Pilgrimage & Tour Packages</h3>
            </div>

            <div style="display: flex; gap: 6px;">
              ${TRIP_ITINERARIES.map((it, idx) => `
                <button class="itinerary-tab-btn ${idx === selectedItineraryIndex ? 'active' : ''}" data-index="${idx}" style="padding: 6px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; border: 1px solid ${idx === selectedItineraryIndex ? '#2563eb' : '#cbd5e1'}; background: ${idx === selectedItineraryIndex ? '#2563eb' : '#ffffff'}; color: ${idx === selectedItineraryIndex ? '#ffffff' : '#334155'}; cursor: pointer;">
                  ${it.title.split(' ')[0]} Tour
                </button>
              `).join('')}
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; align-items: center;">
            <div>
              <span style="color: #2563eb; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">${activeItinerary.subtitle}</span>
              <h4 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin-top: 4px;">${activeItinerary.title}</h4>

              <div style="margin: 14px 0;">
                <span style="font-size: 0.82rem; font-weight: 700; color: #475569; display: block; margin-bottom: 8px;">Key Sights Included in Sightseeing:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${activeItinerary.places.map(p => `
                    <span style="background: #ffffff; border: 1px solid #cbd5e1; padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: #0f172a; display: inline-flex; align-items: center; gap: 4px;">
                      ${IconCheck(12, '#059669')} ${p}
                    </span>
                  `).join('')}
                </div>
              </div>

              <div style="display: flex; gap: 20px; font-size: 0.85rem; color: #64748b; margin-top: 12px;">
                <span>⏱️ <strong>Duration:</strong> ${activeItinerary.duration}</span>
                <span>🚘 <strong>Vehicle:</strong> ${activeItinerary.car}</span>
              </div>
            </div>

            <div style="background: #ffffff; border: 1.5px solid #2563eb; padding: 20px; border-radius: 14px; text-align: center;">
              <span style="font-size: 0.78rem; color: #64748b;">Package Total Rate</span>
              <div style="font-size: 1.6rem; font-weight: 900; color: #2563eb; margin: 4px 0 12px;">${activeItinerary.price}</div>
              <a href="${generateWhatsAppInquiryLink(`Hello! I want to book the ${activeItinerary.title} package (${activeItinerary.price}).`)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="width: 100%; justify-content: center;">
                📲 Book Custom Package
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Customer Satisfaction Stats Strip -->
      <section class="container" style="padding: 0 0 40px;">
        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #ffffff; border-radius: 20px; padding: 28px 36px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px; text-align: center;">
          <div>
            <strong style="font-size: 2rem; font-weight: 900; color: #60a5fa; display: block;">1,200+</strong>
            <span style="font-size: 0.85rem; color: #cbd5e1;">Outstation Trips Served</span>
          </div>

          <div>
            <strong style="font-size: 2rem; font-weight: 900; color: #f59e0b; display: block; align-items: center; justify-content: center; gap: 4px;">
              4.95 ${IconStar(18, '#f59e0b')}
            </strong>
            <span style="font-size: 0.85rem; color: #cbd5e1;">Customer Love Rating</span>
          </div>

          <div>
            <strong style="font-size: 2rem; font-weight: 900; color: #4ade80; display: block;">100%</strong>
            <span style="font-size: 0.85rem; color: #cbd5e1;">Police Verified Drivers</span>
          </div>

          <div>
            <strong style="font-size: 2rem; font-weight: 900; color: #38bdf8; display: block;">24x7</strong>
            <span style="font-size: 0.85rem; color: #cbd5e1;">On-Call Desk Assistance</span>
          </div>
        </div>
      </section>
    </div>
  `;
};

export const bindHomePageEvents = (): void => {
  bindHeroEvents();

  document.querySelector('#viewAllFleetBtn')?.addEventListener('click', () => {
    store.setRoute('fleet');
  });

  document.querySelectorAll('.route-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number((e.currentTarget as HTMLElement).dataset.index);
      selectedRouteIndex = idx;
      
      const homePage = document.querySelector('.page-home');
      if (homePage) {
        homePage.outerHTML = renderHomePage();
        bindHomePageEvents();
      }
    });
  });

  document.querySelectorAll('.itinerary-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number((e.currentTarget as HTMLElement).dataset.index);
      selectedItineraryIndex = idx;
      
      const homePage = document.querySelector('.page-home');
      if (homePage) {
        homePage.outerHTML = renderHomePage();
        bindHomePageEvents();
      }
    });
  });

  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const carId = Number((e.currentTarget as HTMLElement).dataset.carId);
      store.toggleFavorite(carId);
    });
  });

  document.querySelectorAll('.compare-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const carId = Number((e.currentTarget as HTMLElement).dataset.carId);
      store.toggleCompare(carId);
    });
  });

  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const carId = Number((e.currentTarget as HTMLElement).dataset.carId);
      const car = carsData.find(c => c.id === carId);
      if (car) {
        store.openDetailModal(car);
      }
    });
  });
};
