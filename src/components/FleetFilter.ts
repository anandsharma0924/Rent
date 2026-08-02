import { store } from '../state/store';
import type { CarType } from '../types/car';

export const renderFleetFilter = (): string => {
  const { filters } = store;
  const categories: (CarType | 'All')[] = ['All', 'Family', 'SUV', 'Sedan', 'Premium'];

  return `
    <div class="glass-card filter-bar">
      <div class="filter-pills">
        ${categories.map(cat => `
          <button class="filter-pill ${filters.selectedType === cat ? 'active' : ''}" data-category="${cat}">
            ${cat === 'All' ? '🚘 All Fleet' : cat}
          </button>
        `).join('')}
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <input type="text" id="carSearchInput" placeholder="🔍 Search car by name..." value="${filters.searchQuery}" style="width: 200px;" />

        <select id="sortBySelect" style="width: 160px;">
          <option value="recommended" ${filters.sortBy === 'recommended' ? 'selected' : ''}>⭐ Recommended</option>
          <option value="price-low" ${filters.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
          <option value="price-high" ${filters.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
          <option value="rating" ${filters.sortBy === 'rating' ? 'selected' : ''}>Top Rated</option>
        </select>

        <select id="seatFilterSelect" style="width: 140px;">
          <option value="All" ${filters.selectedSeats === 'All' ? 'selected' : ''}>Seats: All</option>
          <option value="5" ${filters.selectedSeats === 5 ? 'selected' : ''}>5 Seater</option>
          <option value="6" ${filters.selectedSeats === 6 ? 'selected' : ''}>6 Seater</option>
          <option value="7" ${filters.selectedSeats === 7 ? 'selected' : ''}>7 Seater</option>
        </select>
      </div>
    </div>
  `;
};

export const bindFleetFilterEvents = (): void => {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const category = (e.currentTarget as HTMLElement).dataset.category as CarType | 'All';
      store.setFilters({ selectedType: category });
    });
  });

  const searchInput = document.querySelector('#carSearchInput') as HTMLInputElement;
  searchInput?.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value;
    store.setFilters({ searchQuery: query });
  });

  const sortSelect = document.querySelector('#sortBySelect') as HTMLSelectElement;
  sortSelect?.addEventListener('change', (e) => {
    const sortBy = (e.target as HTMLSelectElement).value as any;
    store.setFilters({ sortBy });
  });

  const seatSelect = document.querySelector('#seatFilterSelect') as HTMLSelectElement;
  seatSelect?.addEventListener('change', (e) => {
    const val = (e.target as HTMLSelectElement).value;
    const selectedSeats = val === 'All' ? 'All' : Number(val);
    store.setFilters({ selectedSeats });
  });
};
