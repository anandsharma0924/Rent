export type CarType = 'SUV' | 'Sedan' | 'Premium' | 'Family';
export type TransmissionType = 'Automatic' | 'Manual';
export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'CNG';

export interface CarGalleryItem {
  label: string;
  url: string;
}

export interface CarChauffeurInfo {
  name: string;
  experience: string;
  rating: number;
  verified: boolean;
  languages: string[];
}

export interface Car {
  id: number;
  name: string;
  tagline: string;
  type: CarType;
  seats: number;
  transmission: TransmissionType;
  fuel: FuelType;
  rating: number;
  reviewCount: number;
  pricePerDay: number;
  hourlyRate: number;
  location: string;
  image: string;
  gallery: CarGalleryItem[];
  chauffeur: CarChauffeurInfo;
  badge: string;
  features: string[];
  specs: {
    luggage: string;
    mileage: string;
    engine: string;
    airbags: number;
    ac: boolean;
  };
}

export interface RentalPackage {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  kilometers: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  carRented: string;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'Booking' | 'Pricing' | 'Vehicles' | 'Support';
}

export interface FilterState {
  searchQuery: string;
  selectedType: CarType | 'All';
  selectedSeats: number | 'All';
  selectedTransmission: TransmissionType | 'All';
  selectedFuel: FuelType | 'All';
  maxPrice: number;
  sortBy: 'recommended' | 'price-low' | 'price-high' | 'rating';
}

export interface BookingState {
  tripType: string;
  pickupCity: string;
  dropCity?: string;
  pickupDate: string;
  returnDate: string;
  seatsNeeded: number;
  needDriver: boolean;
  selectedCarId: number | null;
}
