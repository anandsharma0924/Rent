import { store } from '../state/store';
import { renderFleetFilter, bindFleetFilterEvents } from './FleetFilter';
import { renderCarCard } from './CarCard';
import { carsData } from '../data/cars';

export const renderCarGridSection = (): string => {
  const filteredCars = store.getFilteredCars();

  return `
    <section id="fleet" class="container" style="padding: 60px 0;">
      <div class="section-header" style="text-align: center;">
        <span class="hero-tag">🚘 Verified Fleet</span>
        <h2>Choose Your Perfect Travel Companion</h2>
        <p style="color: var(--text-secondary); max-width: 600px; margin: 8px auto 0;">
          All cars are deep-cleaned, equipped with high AC cooling, dual airbags & luxury seating.
        </p>
      </div>

      ${renderFleetFilter()}

      ${filteredCars.length === 0 ? `
        <div class="glass-card" style="padding: 60px; text-align: center; margin-top: 24px;">
          <h3 style="font-size: 1.5rem; margin-bottom: 12px;">No vehicles match your search filter</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px;">Try clearing filters or searching for another keyword like "Ertiga" or "7 Seater".</p>
          <button id="resetFiltersBtn" class="btn-primary">Reset Filters</button>
        </div>
      ` : `
        <div class="car-grid">
          ${filteredCars.map(car => renderCarCard(car)).join('')}
        </div>
      `}
    </section>
  `;
};

export const bindCarGridEvents = (): void => {
  bindFleetFilterEvents();

  // Reset filters click
  const resetBtn = document.querySelector('#resetFiltersBtn');
  resetBtn?.addEventListener('click', () => {
    store.setFilters({
      searchQuery: '',
      selectedType: 'All',
      selectedSeats: 'All',
      selectedTransmission: 'All',
      selectedFuel: 'All',
      maxPrice: 8000
    });
  });

  // Favorite toggle clicks
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const carId = Number((e.currentTarget as HTMLElement).dataset.carId);
      store.toggleFavorite(carId);
    });
  });

  // Compare toggle clicks
  document.querySelectorAll('.compare-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const carId = Number((e.currentTarget as HTMLElement).dataset.carId);
      store.toggleCompare(carId);
    });
  });

  // Quick view / Details click
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
