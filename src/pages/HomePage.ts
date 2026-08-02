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
      <section class="container section-padding">
        <div class="section-header-flex">
          <div>
            <span class="hero-tag">🚘 Featured Selection</span>
            <h2 class="section-title">Top Rated Vehicles</h2>
          </div>
          <button id="viewAllFleetBtn" class="btn-primary">
            Explore All Cars →
          </button>
        </div>

        <div class="car-grid">
          ${topFeaturedCars.map(car => renderCarCard(car)).join('')}
        </div>
      </section>

      <!-- Popular Route Estimator Box -->
      <section class="container section-padding">
        <div class="glass-card home-card-box">
          <div class="box-center-header">
            <span class="hero-tag">🗺️ Instant Route Guide</span>
            <h2 class="box-title">
              Popular Destinations & Highway Route Estimator
            </h2>
            <p class="box-desc">
              Select a popular destination from Indore to view estimated distance, drive duration, and flat trip fare.
            </p>
          </div>

          <div class="route-tabs-container">
            ${POPULAR_ROUTES.map((rt, idx) => `
              <button class="route-tab-btn ${idx === selectedRouteIndex ? 'active' : ''}" data-index="${idx}">
                📍 ${rt.to}
              </button>
            `).join('')}
          </div>

          <div class="route-estimator-grid">
            <div class="estimator-item">
              <span class="item-label">Trip Route</span>
              <strong class="item-val-title">${activeRoute.from} ➔ ${activeRoute.to}</strong>
            </div>

            <div class="estimator-item">
              <span class="item-label">Distance & Duration</span>
              <strong class="item-val-blue">
                ${IconMap(16, '#2563eb')} ${activeRoute.distance} • ${IconClock(16, '#2563eb')} ${activeRoute.duration}
              </strong>
            </div>

            <div class="estimator-item">
              <span class="item-label">Recommended Vehicle</span>
              <strong class="item-val-dark">
                ${IconCar(16, '#0f172a')} ${activeRoute.recommended}
              </strong>
            </div>

            <div class="estimator-item">
              <span class="item-label">Estimated Package Fare</span>
              <strong class="item-val-green">${activeRoute.priceEstimate}</strong>
            </div>

            <div class="estimator-action">
              <a href="${generateWhatsAppInquiryLink(`Hello! I want to reserve a vehicle for the ${activeRoute.from} to ${activeRoute.to} trip (${activeRoute.distance}).`)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                ${IconWhatsApp(16, '#ffffff')} Book This Route
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Pilgrimage & Tour Itinerary Planner -->
      <section class="container section-padding">
        <div class="glass-card home-card-box border-blue">
          <div class="itinerary-header-flex">
            <div>
              <span class="hero-tag tag-blue">🚩 Custom Itinerary Planner</span>
              <h3 class="box-title margin-top-sm">Top Recommended Pilgrimage & Tour Packages</h3>
            </div>

            <div class="itinerary-tabs">
              ${TRIP_ITINERARIES.map((it, idx) => `
                <button class="itinerary-tab-btn ${idx === selectedItineraryIndex ? 'active' : ''}" data-index="${idx}">
                  ${it.title.split(' ')[0]} Tour
                </button>
              `).join('')}
            </div>
          </div>

          <div class="itinerary-planner-grid">
            <div class="itinerary-left-info">
              <span class="subtitle-blue">${activeItinerary.subtitle}</span>
              <h4 class="itinerary-title">${activeItinerary.title}</h4>

              <div class="sights-box">
                <span class="sights-label">Key Sights Included in Sightseeing:</span>
                <div class="sights-pills-wrap">
                  ${activeItinerary.places.map(p => `
                    <span class="sight-pill">
                      ${IconCheck(12, '#059669')} ${p}
                    </span>
                  `).join('')}
                </div>
              </div>

              <div class="itinerary-meta-row">
                <span>⏱️ <strong>Duration:</strong> ${activeItinerary.duration}</span>
                <span>🚘 <strong>Vehicle:</strong> ${activeItinerary.car}</span>
              </div>
            </div>

            <div class="itinerary-right-card">
              <span class="rate-label">Package Total Rate</span>
              <div class="package-rate-val">${activeItinerary.price}</div>
              <a href="${generateWhatsAppInquiryLink(`Hello! I want to book the ${activeItinerary.title} package (${activeItinerary.price}).`)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp width-full">
                📲 Book Custom Package
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Customer Satisfaction Stats Strip -->
      <section class="container section-padding">
        <div class="home-stats-strip">
          <div class="stat-box">
            <strong class="stat-number blue-num">1,200+</strong>
            <span class="stat-desc">Outstation Trips Served</span>
          </div>

          <div class="stat-box">
            <strong class="stat-number amber-num">
              4.95 ${IconStar(18, '#f59e0b')}
            </strong>
            <span class="stat-desc">Customer Love Rating</span>
          </div>

          <div class="stat-box">
            <strong class="stat-number green-num">100%</strong>
            <span class="stat-desc">Police Verified Drivers</span>
          </div>

          <div class="stat-box">
            <strong class="stat-number sky-num">24x7</strong>
            <span class="stat-desc">On-Call Desk Assistance</span>
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
