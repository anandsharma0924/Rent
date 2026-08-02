import type { RentalPackage } from '../types/car';

export const packagesData: RentalPackage[] = [
  {
    id: 'local-4h',
    name: 'Local Quick Ride',
    tagline: 'Ideal for doctor visits, quick shopping & railway pickup',
    duration: '4 Hours',
    kilometers: '40 KM',
    price: 899,
    features: ['Professional Driver included', 'Clean sanitised AC vehicle', 'Free 15 min waiting time', 'Extra km @ ₹12/km']
  },
  {
    id: 'local-8h',
    name: 'Full Day City Tour',
    tagline: 'Explore Indore street food, Sarafa, Chappan & temples',
    duration: '8 Hours',
    kilometers: '80 KM',
    price: 1499,
    popular: true,
    features: ['Dedicated Chauffeur', 'Covers entire city limits', 'Unlimited stops within city', 'Extra km @ ₹12/km']
  },
  {
    id: 'ujjain-pilgrimage',
    name: 'Ujjain Mahakal Darshan',
    tagline: 'Special round trip package for Mahakaleshwar Jyotirlinga',
    duration: '10-12 Hours',
    kilometers: '140 KM',
    price: 2499,
    popular: true,
    features: ['Express Highway toll covered', 'Mandir Gate drop & pickup', 'Flexible return time', 'Driver allowance included']
  },
  {
    id: 'outstation-day',
    name: 'Outstation Highway Travel',
    tagline: 'Mandu, Omkareshwar, Bhopal or Maheshwar day trips',
    duration: 'Full Day',
    kilometers: '250+ KM',
    price: 3499,
    features: ['Verified highway driver', 'All state toll guidance', 'Night driving capability', 'Flat per km rate options']
  }
];
