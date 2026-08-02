import type { Car } from '../types/car';

export const carsData: Car[] = [
  {
    id: 1,
    name: 'Maruti Suzuki Ertiga ZXI+',
    type: 'Family',
    tagline: 'Ideal for 7-person family outstation & pilgrimage trips',
    pricePerDay: 3200,
    pricePerKm: 14,
    pricePerHour: 350,
    seats: 7,
    transmission: 'Manual',
    fuel: 'CNG',
    rating: 4.9,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    gallery: [
      { title: 'Exterior Front View', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
      { title: 'VIP Interior Cabin', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' },
      { title: 'Rear Boot Space', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' }
    ],
    chauffeur: {
      name: 'Rajesh Sharma',
      experience: '8+ Years Highway Driving',
      languages: ['Hindi', 'English']
    },
    features: [
      'Dual AC Vent Columns',
      'Plush Reclining Seats',
      'Touchscreen Infotainment',
      'Sanitized Interior'
    ],
    specs: {
      engine: '1.5L K15C Smart Hybrid',
      mileage: '20.5 km/l',
      luggage: '3 Large Bags'
    }
  },
  {
    id: 2,
    name: 'Toyota Innova Crysta Z',
    type: 'SUV',
    tagline: 'Royal outstation comfort for highway & long journeys',
    pricePerDay: 4800,
    pricePerKm: 18,
    pricePerHour: 550,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    rating: 4.95,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      { title: 'Exterior Front View', url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80' },
      { title: 'Captain Seat Interior', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' },
      { title: 'Rear Luggage Space', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' }
    ],
    chauffeur: {
      name: 'Vikram Singh',
      experience: '12+ Years VIP Outstation',
      languages: ['Hindi', 'English']
    },
    features: [
      'Ambient Cabin Lighting',
      'Leather Captain Seats',
      'Rear Climate Control',
      'Superior Suspension'
    ],
    specs: {
      engine: '2.4L GD Turbo Diesel',
      mileage: '14.8 km/l',
      luggage: '4 Large Bags'
    }
  },
  {
    id: 3,
    name: 'Maruti Suzuki XL6 Alpha',
    type: 'Family',
    tagline: 'Executive 6-seater captain seat luxury travel',
    pricePerDay: 3900,
    pricePerKm: 16,
    pricePerHour: 420,
    seats: 6,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.88,
    reviewCount: 290,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      { title: 'Exterior Front View', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
      { title: 'Captain Suite Cabin', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' },
      { title: 'Rear Boot View', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' }
    ],
    chauffeur: {
      name: 'Anil Verma',
      experience: '9+ Years Outstation Expert',
      languages: ['Hindi']
    },
    features: [
      'Individual Armrests',
      'UV Cut Glass',
      'Ventilated Seats',
      'Smart Hybrid Tech'
    ],
    specs: {
      engine: '1.5L DualJet VVT',
      mileage: '19.0 km/l',
      luggage: '3 Large Bags'
    }
  },
  {
    id: 4,
    name: 'Hyundai Creta SX Premium',
    type: 'SUV',
    tagline: 'Modern 5-seater SUV for urban & outstation rides',
    pricePerDay: 3600,
    pricePerKm: 15,
    pricePerHour: 400,
    seats: 5,
    transmission: 'Manual',
    fuel: 'Diesel',
    rating: 4.85,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    gallery: [
      { title: 'Exterior Front View', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
      { title: 'Modern Cabin', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' },
      { title: 'Trunk Space', url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' }
    ],
    chauffeur: {
      name: 'Suresh Kumar',
      experience: '7+ Years Highway Driving',
      languages: ['Hindi', 'English']
    },
    features: [
      'Panoramic Sunroof',
      'Bose Sound System',
      'Rear AC Vents',
      'Wireless Charger'
    ],
    specs: {
      engine: '1.5L U2 CRDi Diesel',
      mileage: '18.0 km/l',
      luggage: '2 Large Bags'
    }
  },
  {
    id: 5,
    name: 'Honda City ZX Executive',
    type: 'Sedan',
    tagline: 'Sleek executive sedan for corporate & airport travel',
    pricePerDay: 3400,
    pricePerKm: 13,
    pricePerHour: 380,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.9,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
    gallery: [
      { title: 'Exterior Front View', url: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80' },
      { title: 'Luxury Leather Interior', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' },
      { title: 'Boot Space', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' }
    ],
    chauffeur: {
      name: 'Deepak Patel',
      experience: '10+ Years Corporate Chauffeur',
      languages: ['Hindi', 'English']
    },
    features: [
      'Soft-Touch Leather Seats',
      'LaneWatch Camera',
      'Rear Sunshade',
      'Smooth Automatic CVT'
    ],
    specs: {
      engine: '1.5L i-VTEC DOHC',
      mileage: '17.8 km/l',
      luggage: '3 Medium Bags'
    }
  },
  {
    id: 6,
    name: 'Toyota Fortuner 4x4 Legender',
    type: 'Premium',
    tagline: 'Ultimate 7-seater VIP SUV for weddings & VIP escort',
    pricePerDay: 8500,
    pricePerKm: 28,
    pricePerHour: 1100,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    rating: 4.98,
    reviewCount: 180,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      { title: 'Exterior Front View', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
      { title: 'Dual Tone VIP Cabin', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' },
      { title: 'Heavy Duty Boot', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' }
    ],
    chauffeur: {
      name: 'Mahendra Singh',
      experience: '15+ Years VIP Security Chauffeur',
      languages: ['Hindi', 'English']
    },
    features: [
      'JBL 11-Speaker Audio System',
      'Dual-Zone Auto Climate',
      '4x4 All-Terrain System',
      'Power Back Door'
    ],
    specs: {
      engine: '2.8L GD Turbo Diesel (500 Nm)',
      mileage: '12.4 km/l',
      luggage: '5 Large Bags'
    }
  }
];
