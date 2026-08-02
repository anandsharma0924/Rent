import type { Car } from '../types/car';
import { formatCurrency } from '../utils/formatters';
import { generateWhatsAppBookingLink } from '../utils/whatsapp';
import { store } from '../state/store';
import { IconHeart, IconCompare, IconUsers, IconFuel, IconGear, IconWhatsApp } from '../utils/icons';

export const renderCarCard = (car: Car): string => {
  const isFav = store.favorites.includes(car.id);
  const isCompared = store.compareList.includes(car.id);
  const { booking } = store;
  const whatsappUrl = generateWhatsAppBookingLink(car, booking);

  return `
    <div class="glass-card car-card animate-fade-in">
      
      <!-- Vehicle Media Header -->
      <div class="car-media">
        <img src="${car.image}" alt="${car.name}" class="car-img" />
        
        <span class="badge-overlay">
          🏷️ ${car.type}
        </span>

        <div style="position: absolute; top: 10px; right: 10px; display: flex; gap: 6px;">
          <button class="compare-btn fav-btn-overlay" data-car-id="${car.id}" title="${isCompared ? 'Remove from Compare' : 'Add to Compare'}">
            ${IconCompare(14, isCompared ? '#2563eb' : '#64748b')}
          </button>

          <button class="fav-btn fav-btn-overlay" data-car-id="${car.id}" title="${isFav ? 'Remove from Wishlist' : 'Save to Wishlist'}">
            ${IconHeart(14, isFav)}
          </button>
        </div>
      </div>

      <!-- Vehicle Content & Specs -->
      <div class="car-details">
        
        <div class="car-header">
          <h3 class="car-name">${car.name}</h3>
          <span style="background: #fef3c7; color: #b45309; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 6px;">
            ★ ${car.rating}
          </span>
        </div>

        <p class="car-tagline">${car.tagline}</p>

        <!-- Specs Badges -->
        <div class="specs-pills">
          <span class="spec-pill">
            ${IconUsers(13, '#2563eb')} ${car.seats} Seats
          </span>
          <span class="spec-pill">
            ${IconFuel(13, '#059669')} ${car.fuel}
          </span>
          <span class="spec-pill">
            ${IconGear(13, '#64748b')} ${car.transmission}
          </span>
        </div>

        <!-- Chauffeur Status -->
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; color: #166534; font-weight: 700; margin-bottom: 14px;">
          ✓ Police Verified Chauffeur Included
        </div>

        <!-- Footer with Fare & Booking Actions -->
        <div class="card-footer">
          <div>
            <span class="price-text">${formatCurrency(car.pricePerDay)}</span>
            <span class="unit-text">/day</span>
          </div>

          <div style="display: flex; gap: 6px;">
            <button class="quick-view-btn btn-secondary" data-car-id="${car.id}" style="padding: 7px 12px; font-size: 0.8rem;">
              Details
            </button>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 7px 12px; font-size: 0.8rem;">
              ${IconWhatsApp(14, '#ffffff')} Book
            </a>
          </div>
        </div>

      </div>

    </div>
  `;
};
