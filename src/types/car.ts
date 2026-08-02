export type CarType = 'Sedan' | 'SUV' | 'Family' | 'Premium';
export type FuelType = 'Petrol' | 'Diesel' | 'CNG' | 'Hybrid';
export type TransmissionType = 'Manual' | 'Automatic';

export interface CarSpecs {
  engine: string;
  mileage: string;
  luggage: string;
  airbags?: string;
}

export interface CarChauffeurInfo {
  name: string;
  experience: string;
  languages: string[];
  rating?: number;
}

export interface CarGalleryItem {
  title: string;
  url: string;
  label?: string;
}

export interface Car {
  id: number;
  name: string;
  type: CarType;
  tagline: string;
  pricePerDay: number;
  pricePerKm: number; // Per KM Rate for outstation trips
  pricePerHour?: number;
  seats: number;
  transmission: TransmissionType;
  fuel: FuelType;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  location?: string;
  gallery: CarGalleryItem[];
  chauffeur: CarChauffeurInfo;
  features: string[];
  specs: CarSpecs;
}

export interface FilterState {
  searchQuery: string;
  selectedType: CarType | 'All';
  selectedSeats: number | 'All';
  selectedTransmission: TransmissionType | 'All';
  selectedFuel: FuelType | 'All';
  maxPrice: number;
  sortBy: 'price-low' | 'price-high' | 'rating' | 'recommended';
}

export interface BookingState {
  tripType: string;
  pickupCity: string;
  pickupDate: string;
  returnDate: string;
  seatsNeeded: number;
  needDriver: boolean;
  selectedCarId: number;
  pricingMode?: 'daily' | 'perKm';
  estimatedKm?: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface RentalPackage {
  id: number | string;
  name?: string;
  title?: string;
  subtitle?: string;
  tagline?: string;
  tag?: string;
  popular?: boolean;
  price: number;
  duration: string;
  kilometers?: string;
  recommendedCar?: string;
  features: string[];
  popularRoutes?: string[];
}

export interface Review {
  id: number;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
  vehicleBooked?: string;
  carRented?: string;
  verifiedTrip?: string;
}
