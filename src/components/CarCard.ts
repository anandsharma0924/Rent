import type { Car } from '../types/car';
import { store } from '../state/store';
import { formatCurrency } from '../utils/formatters';
import { IconHeart, IconStar, IconUsers, IconGear, IconFuel, IconLuggage, IconCompare, IconArrowRight } from '../utils/icons';

export const renderCarCard = (car: Car): string => {
  const isFav = store.favorites.includes(car.id);
  const isCompared = store.compareList.includes(car.id);

  return `
    <article class="glass-card car-card animate-fade-in">
      <div class="car-image-container">
        <img src="${car.image}" alt="${car.name}" loading="lazy" />
        <span class="card-badge">${car.badge}</span>
        <button class="fav-btn" data-car-id="${car.id}" title="${isFav ? 'Remove Favorite' : 'Save Favorite'}">
          ${IconHeart(18, isFav)}
        </button>
      </div>

      <div class="car-card-body">
        <div class="car-card-header">
          <div>
            <h3 class="car-title">${car.name}</h3>
            <p class="car-tagline">${car.tagline}</p>
          </div>
          <div class="car-rating">
            ${IconStar(14)} <span>${car.rating}</span> <span style="font-size: 0.72rem; color: #78716c;">(${car.reviewCount})</span>
          </div>
        </div>

        <div class="car-spec-tags">
          <span class="spec-tag" style="display:flex; align-items:center; gap:4px;">
            ${IconUsers(14)} ${car.seats} Seats
          </span>
          <span class="spec-tag" style="display:flex; align-items:center; gap:4px;">
            ${IconGear(14)} ${car.transmission}
          </span>
          <span class="spec-tag" style="display:flex; align-items:center; gap:4px;">
            ${IconFuel(14)} ${car.fuel}
          </span>
          <span class="spec-tag" style="display:flex; align-items:center; gap:4px;">
            ${IconLuggage(14)} ${car.specs.luggage}
          </span>
        </div>

        <div class="car-card-footer">
          <div class="price-display">
            <strong>${formatCurrency(car.pricePerDay)}</strong>
            <span>/ day</span>
          </div>

          <div class="card-actions">
            <button class="btn-secondary compare-btn" data-car-id="${car.id}" style="padding: 8px 14px; font-size: 0.82rem;">
              ${IconCompare(14)} ${isCompared ? 'Compared' : 'Compare'}
            </button>
            <button class="btn-primary quick-view-btn" data-car-id="${car.id}" style="padding: 8px 14px; font-size: 0.82rem;">
              Details ${IconArrowRight(14, '#ffffff')}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
};
