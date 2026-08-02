import type { AppRoute } from '../state/store';

interface PageSeoConfig {
  title: string;
  description: string;
}

const PAGE_SEO: Record<AppRoute, PageSeoConfig> = {
  'home': {
    title: 'Ertiga Ride | Best 7-Seater Car Rental in Indore, Ujjain & MP',
    description: 'Book 7-seater Maruti Ertiga, Innova Crysta, XL6 & Fortuner for Ujjain Mahakal Bhasma Aarti, Omkareshwar, Indore Airport drops & highway outstation. 100% police verified drivers.'
  },
  'fleet': {
    title: 'Luxury Car Fleet | Maruti Ertiga, Innova Crysta & Fortuner Rental Indore',
    description: 'Browse verified 5, 6, 7-seater cars for outstation highway trips in MP. Sanitized Maruti Ertiga, XL6 Captain, Innova Crysta & 4x4 Fortuner Legender.'
  },
  'why-us': {
    title: 'Why Choose Us | 100% Police Verified Drivers & Fixed Price Guarantee',
    description: 'Discover our 100% police-verified chauffeur guarantee, 3:00 AM Ujjain Mahakal early pickups, zero hidden toll surcharges & 24x7 travel desk support.'
  },
  'faqs': {
    title: 'Help & FAQs | Car Booking, Per KM Rates, Toll & Cancellation Policies',
    description: 'Instant answers to Ertiga & Innova daily rental rates, driver allowance, Bhasma Aarti timing, airport flight tracking & booking cancellation policies.'
  },
  'contact': {
    title: 'Contact Us | 24x7 Direct Travel Desk & WhatsApp Reservation Indore',
    description: 'Speak directly to our Indore Travel Desk Manager at +91 9981264216 or chat on WhatsApp for custom outstation, wedding motorcade & pilgrimage quotes.'
  }
};

export const updatePageSeo = (route: AppRoute): void => {
  const config = PAGE_SEO[route] || PAGE_SEO['home'];
  
  // Update Document Title
  document.title = config.title;

  // Update Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', config.description);

  // Update OpenGraph Title & Description
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', config.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', config.description);
};
