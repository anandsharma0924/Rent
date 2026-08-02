import type { Car, FilterState, BookingState } from '../types/car';
import { carsData } from '../data/cars';
import { getFutureDateString } from '../utils/formatters';
import { getFavoritesFromStorage, toggleFavoriteInStorage } from '../utils/storage';

type Listener = () => void;
export type AppRoute = 'home' | 'fleet' | 'why-us' | 'faqs' | 'contact';

const ROUTE_TITLES: Record<AppRoute, string> = {
  'home': 'Ertiga Ride | Luxury 7-Seater Ertiga & Innova Mobility',
  'fleet': 'Ertiga Ride | Verified Luxury Fleet & Instant Filters',
  'why-us': 'Ertiga Ride | Why Choose Us & Safety Standards',
  'faqs': 'Ertiga Ride | Instant Help Center & FAQs',
  'contact': 'Ertiga Ride | Contact & 24x7 Travel Desk'
};

class AppStore {
  private listeners: Listener[] = [];
  
  public currentRoute: AppRoute = 'home';

  public filters: FilterState = {
    searchQuery: '',
    selectedType: 'All',
    selectedSeats: 'All',
    selectedTransmission: 'All',
    selectedFuel: 'All',
    maxPrice: 10000,
    sortBy: 'recommended'
  };

  public booking: BookingState = {
    tripType: 'Outstation trip',
    pickupCity: 'Indore, Madhya Pradesh',
    pickupDate: getFutureDateString(1),
    returnDate: getFutureDateString(3),
    seatsNeeded: 7,
    needDriver: true,
    selectedCarId: 1
  };

  public favorites: number[] = getFavoritesFromStorage();
  public compareList: number[] = [];
  public activeDetailCar: Car | null = null;
  public isCompareModalOpen: boolean = false;
  public activeToast: { id: number; message: string; type: 'success' | 'info' | 'warning' } | null = null;

  public subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  public notify(): void {
    this.listeners.forEach(listener => listener());
  }

  public setRoute(route: AppRoute): void {
    this.currentRoute = route;
    
    // HTML5 History API pushState - No Hash (#) in URL
    const targetPath = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ route }, '', targetPath);
    }
    
    document.title = ROUTE_TITLES[route] || ROUTE_TITLES['home'];
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.notify();
  }

  public setFilters(newFilters: Partial<FilterState>): void {
    this.filters = { ...this.filters, ...newFilters };
    this.notify();
  }

  public setBooking(newBooking: Partial<BookingState>): void {
    this.booking = { ...this.booking, ...newBooking };
    this.notify();
  }

  public toggleFavorite(carId: number): void {
    this.favorites = toggleFavoriteInStorage(carId);
    const isFav = this.favorites.includes(carId);
    this.showToast(isFav ? 'Added to your wishlist ❤️' : 'Removed from wishlist', isFav ? 'success' : 'info');
    this.notify();
  }

  public toggleCompare(carId: number): void {
    const idx = this.compareList.indexOf(carId);
    if (idx > -1) {
      this.compareList.splice(idx, 1);
      this.showToast('Removed from comparison list', 'info');
    } else {
      if (this.compareList.length >= 3) {
        this.showToast('You can compare maximum 3 cars at once', 'warning');
        return;
      }
      this.compareList.push(carId);
      this.showToast('Added to comparison tool ⚖️', 'success');
    }
    this.notify();
  }

  public clearCompare(): void {
    this.compareList = [];
    this.isCompareModalOpen = false;
    this.notify();
  }

  public openDetailModal(car: Car): void {
    this.activeDetailCar = car;
    this.notify();
  }

  public closeDetailModal(): void {
    this.activeDetailCar = null;
    this.notify();
  }

  public openCompareModal(): void {
    if (this.compareList.length === 0) {
      this.showToast('Select at least 1 car to compare', 'warning');
      return;
    }
    this.isCompareModalOpen = true;
    this.notify();
  }

  public closeCompareModal(): void {
    this.isCompareModalOpen = false;
    this.notify();
  }

  public showToast(message: string, type: 'success' | 'info' | 'warning' = 'info'): void {
    this.activeToast = { id: Date.now(), message, type };
    this.notify();
    setTimeout(() => {
      if (this.activeToast && this.activeToast.id === this.activeToast.id) {
        this.activeToast = null;
        this.notify();
      }
    }, 3200);
  }

  public getFilteredCars(): Car[] {
    return carsData.filter(car => {
      if (this.filters.searchQuery) {
        const query = this.filters.searchQuery.toLowerCase();
        const matchName = car.name.toLowerCase().includes(query);
        const matchTag = car.tagline.toLowerCase().includes(query);
        const matchType = car.type.toLowerCase().includes(query);
        if (!matchName && !matchTag && !matchType) return false;
      }

      if (this.filters.selectedType !== 'All' && car.type !== this.filters.selectedType) {
        return false;
      }

      if (this.filters.selectedSeats !== 'All') {
        if (Number(this.filters.selectedSeats) === 7 && car.seats < 7) return false;
        if (Number(this.filters.selectedSeats) === 5 && car.seats !== 5) return false;
        if (Number(this.filters.selectedSeats) === 6 && car.seats !== 6) return false;
      }

      if (this.filters.selectedTransmission !== 'All' && car.transmission !== this.filters.selectedTransmission) {
        return false;
      }

      if (this.filters.selectedFuel !== 'All' && car.fuel !== this.filters.selectedFuel) {
        return false;
      }

      if (car.pricePerDay > this.filters.maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (this.filters.sortBy === 'price-low') return a.pricePerDay - b.pricePerDay;
      if (this.filters.sortBy === 'price-high') return b.pricePerDay - a.pricePerDay;
      if (this.filters.sortBy === 'rating') return b.rating - a.rating;
      return b.rating - a.rating;
    });
  }
}

export const store = new AppStore();
