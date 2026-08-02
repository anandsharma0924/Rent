import type { Car } from '../types/car';

export const carsData: Car[] = [
  {
    id: 1,
    name: 'Maruti Suzuki Ertiga VXI',
    tagline: 'The ultimate 7-seater family favorite',
    type: 'Family',
    seats: 7,
    transmission: 'Manual',
    fuel: 'CNG',
    rating: 4.9,
    reviewCount: 142,
    pricePerDay: 3200,
    hourlyRate: 450,
    location: 'Indore',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Exterior Front', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
      { label: 'VIP Interior Cabin', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Rear Boot Space', url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80' }
    ],
    chauffeur: {
      name: 'Ramesh Sharma',
      experience: '7+ Years Highway Chauffeur',
      rating: 4.9,
      verified: true,
      languages: ['Hindi', 'English']
    },
    badge: 'Most Popular',
    features: ['7 Executive Seats', 'Rear AC Vents', 'Touchscreen Infotainment', 'High Fuel Efficiency', 'Ample Boot Space'],
    specs: {
      luggage: '3 Large Bags',
      mileage: '26 km/kg (CNG)',
      engine: '1.5L K15C Smart Hybrid',
      airbags: 4,
      ac: true
    }
  },
  {
    id: 2,
    name: 'Maruti Suzuki XL6 Premium',
    tagline: 'VIP Captain seats with luxury comfort',
    type: 'Family',
    seats: 6,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.95,
    reviewCount: 98,
    pricePerDay: 3900,
    hourlyRate: 520,
    location: 'Indore',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Exterior Profile', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Captain Leather Seats', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Cockpit View', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' }
    ],
    chauffeur: {
      name: 'Vikram Singh',
      experience: '9+ Years Outstation Driver',
      rating: 4.95,
      verified: true,
      languages: ['Hindi', 'English']
    },
    badge: 'VIP Comfort',
    features: ['Second Row Captain Seats', 'Ventilated Front Seats', '360 Camera', 'Cruise Control', 'Leatherette Seats'],
    specs: {
      luggage: '3 Large Bags',
      mileage: '20.9 kmpl',
      engine: '1.5L K-Series Petrol',
      airbags: 6,
      ac: true
    }
  },
  {
    id: 3,
    name: 'Toyota Innova Crysta 2.4 Z',
    tagline: 'Unmatched highway luxury and reliability',
    type: 'SUV',
    seats: 7,
    transmission: 'Manual',
    fuel: 'Diesel',
    rating: 4.98,
    reviewCount: 215,
    pricePerDay: 4800,
    hourlyRate: 680,
    location: 'Indore',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Front Highway View', url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Luxury Lounge Seating', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Spacious Trunk', url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80' }
    ],
    chauffeur: {
      name: 'Gurpreet Singh',
      experience: '12+ Years Highway Specialist',
      rating: 4.98,
      verified: true,
      languages: ['Hindi', 'English', 'Punjabi']
    },
    badge: 'Outstation King',
    features: ['Powerful Diesel Engine', 'Dual Zone Climate Control', 'Ambient Lighting', 'Premium Suspension', 'Reclining Rear Seats'],
    specs: {
      luggage: '4 Large Bags',
      mileage: '15.6 kmpl',
      engine: '2.4L GD Turbo Diesel',
      airbags: 7,
      ac: true
    }
  },
  {
    id: 4,
    name: 'Hyundai Creta SX (O)',
    tagline: 'Panoramic sunroof with smart driving tech',
    type: 'SUV',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.85,
    reviewCount: 84,
    pricePerDay: 3600,
    hourlyRate: 480,
    location: 'Indore',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Sunroof Exterior', url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Digital Cockpit', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' }
    ],
    chauffeur: {
      name: 'Anil Verma',
      experience: '6+ Years City & Highway Driver',
      rating: 4.85,
      verified: true,
      languages: ['Hindi']
    },
    badge: 'Trending',
    features: ['Panoramic Sunroof', 'Bose 8-Speaker Audio', 'ADAS Level 2 Safety', 'Wireless Charger', 'Cooling Glovebox'],
    specs: {
      luggage: '2 Large Bags',
      mileage: '17.4 kmpl',
      engine: '1.5L MPi Petrol',
      airbags: 6,
      ac: true
    }
  },
  {
    id: 5,
    name: 'Honda City 5th Gen ZX',
    tagline: 'Sophisticated sedan elegance for business travel',
    type: 'Sedan',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.8,
    reviewCount: 67,
    pricePerDay: 3400,
    hourlyRate: 450,
    location: 'Indore',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Executive Exterior', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Plush Rear Cabin', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80' }
    ],
    chauffeur: {
      name: 'Deepak Joshi',
      experience: '8+ Years Corporate Chauffeur',
      rating: 4.8,
      verified: true,
      languages: ['Hindi', 'English']
    },
    badge: 'Executive',
    features: ['Plush Leather Seats', 'LaneWatch Camera', 'Sunroof', 'Silent Cabin', 'Class-Leading Legroom'],
    specs: {
      luggage: '3 Large Bags (506L)',
      mileage: '18.4 kmpl',
      engine: '1.5L i-VTEC Petrol',
      airbags: 6,
      ac: true
    }
  },
  {
    id: 6,
    name: 'Toyota Fortuner Legender 4x4',
    tagline: 'Dominating presence for royal weddings & VIP arrival',
    type: 'Premium',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    rating: 5.0,
    reviewCount: 52,
    pricePerDay: 8500,
    hourlyRate: 1200,
    location: 'Indore',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Royal Exterior', url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80' },
      { label: 'VIP Lounge Interior', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80' }
    ],
    chauffeur: {
      name: 'Suraj Pratap',
      experience: '15+ Years VIP & Ceremonial Chauffeur',
      rating: 5.0,
      verified: true,
      languages: ['Hindi', 'English']
    },
    badge: 'Super Luxury',
    features: ['4x4 Terrain Management', 'JBL 11-Speaker Audio', 'Power Back Door', 'Dual-Tone Styling', 'Royal Presence'],
    specs: {
      luggage: '4 Large Bags',
      mileage: '14.2 kmpl',
      engine: '2.8L Turbo Diesel (500Nm)',
      airbags: 7,
      ac: true
    }
  }
];
