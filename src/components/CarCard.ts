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
    <div class="glass-card car-card animate-fade-in" style="border-radius: 20px; overflow: hidden; background: #ffffff; border: 1px solid #e2e8f0; display: flex; flex-direction: column; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(15,23,42,0.05);">
      
      <!-- Media Header with HD Image & Floating Badges -->
      <div class="car-media" style="position: relative; height: 210px; overflow: hidden; background: #f8fafc;">
        <img src="${car.image}" alt="${car.name}" class="car-img" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" />
        
        <span class="badge-overlay" style="position: absolute; top: 12px; left: 12px; background: rgba(15,23,42,0.85); backdrop-filter: blur(4px); color: #ffffff; font-size: 0.72rem; font-weight: 800; padding: 4px 12px; border-radius: 9999px;">
          🏷️ ${car.tagline.split('•')[0] || car.type}
        </span>

        <div style="position: absolute; top: 12px; right: 12px; display: flex; gap: 6px;">
          <button class="compare-btn fav-btn-overlay" data-car-id="${car.id}" title="${isCompared ? 'Remove from Compare' : 'Add to Compare'}" style="width: 34px; height: 34px; border-radius: 50%; background: #ffffff; border: 1px solid #e2e8f0; display: grid; place-items: center; cursor: pointer; box-shadow: 0 3px 10px rgba(0,0,0,0.12);">
            ${IconCompare(15, isCompared ? '#2563eb' : '#64748b')}
          </button>

          <button class="fav-btn fav-btn-overlay" data-car-id="${car.id}" title="${isFav ? 'Remove from Wishlist' : 'Save to Wishlist'}" style="width: 34px; height: 34px; border-radius: 50%; background: #ffffff; border: 1px solid #e2e8f0; display: grid; place-items: center; cursor: pointer; box-shadow: 0 3px 10px rgba(0,0,0,0.12);">
            ${IconHeart(15, isFav)}
          </button>
        </div>
      </div>

      <!-- Car Specifications & Details -->
      <div class="car-details" style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
        
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
          <h3 class="car-name" style="font-size: 1.25rem; font-weight: 900; color: #0f172a; line-height: 1.2;">
            ${car.name}
          </h3>
          <span style="background: #fef3c7; color: #b45309; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 6px; white-space: nowrap;">
            ★ ${car.rating} (${car.reviewCount})
          </span>
        </div>

        <p class="car-tagline" style="font-size: 0.82rem; color: #64748b; margin-bottom: 14px;">
          ${car.tagline}
        </p>

        <!-- Key Spec Pills -->
        <div class="specs-pills" style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;">
          <span class="spec-pill" style="background: #f1f5f9; color: #334155; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">
            ${IconUsers(13, '#2563eb')} ${car.seats} Seats
          </span>
          <span class="spec-pill" style="background: #f1f5f9; color: #334155; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">
            ${IconFuel(13, '#059669')} ${car.fuel}
          </span>
          <span class="spec-pill" style="background: #f1f5f9; color: #334155; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px;">
            ${IconGear(13, '#64748b')} ${car.transmission}
          </span>
        </div>

        <!-- Chauffeur Verified Status -->
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 6px 12px; border-radius: 8px; font-size: 0.78rem; color: #166534; font-weight: 700; display: flex; align-items: center; gap: 6px; margin-bottom: 16px;">
          <span>✓ Police Verified Chauffeur:</span> <strong>${car.chauffeur.name} (${car.chauffeur.experience})</strong>
        </div>

        <!-- Card Footer with Pricing & Action Buttons -->
        <div class="card-footer" style="margin-top: auto; padding-top: 14px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
          <div>
            <span style="font-size: 0.72rem; color: #64748b; font-weight: 600; display: block;">Daily Fare</span>
            <span class="price-text" style="font-size: 1.4rem; font-weight: 900; color: #2563eb;">
              ${formatCurrency(car.pricePerDay)}
            </span>
            <span class="unit-text" style="font-size: 0.72rem; color: #64748b;">/day</span>
          </div>

          <div style="display: flex; gap: 6px;">
            <button class="quick-view-btn btn-secondary" data-car-id="${car.id}" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 8px;">
              Details
            </button>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 8px; display: inline-flex; align-items: center; gap: 4px;">
              ${IconWhatsApp(14, '#ffffff')} Book
            </a>
          </div>
        </div>

      </div>

    </div>
  `;
};
