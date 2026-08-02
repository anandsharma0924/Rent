import type { Car, BookingState } from '../types/car';
import { formatCurrency, calculateDaysBetween } from './formatters';

const DEFAULT_PHONE = '919981264216';

export const generateWhatsAppBookingLink = (car: Car, booking: BookingState): string => {
  const days = calculateDaysBetween(booking.pickupDate, booking.returnDate);
  const totalCost = (car.pricePerDay * days) + (booking.needDriver ? 500 * days : 0);

  const message = `🌟 *ERTIGA RIDE | LUXURY MOBILITY RESERVATION* 🚘
-------------------------------------------------
Greetings Travel Desk! I would like to reserve the following verified vehicle for my journey:

📍 *Pickup Location:* ${booking.pickupCity}
🗓️ *Pickup Date:* ${booking.pickupDate}
📅 *Return Date:* ${booking.returnDate} (${days} ${days === 1 ? 'day' : 'days'})
🚘 *Vehicle Selected:* ${car.name} (${car.type})
👥 *Passenger Capacity:* ${booking.seatsNeeded} Seats
👨‍✈️ *Chauffeur Allowance:* ${booking.needDriver ? 'Included (+₹500/day)' : 'Standard'}

💰 *Estimated Fare:* ${formatCurrency(totalCost)}

Please confirm vehicle availability and send booking confirmation details. Thank you!`;

  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`;
};

export const generateWhatsAppInquiryLink = (customText?: string): string => {
  const defaultText = customText || `🌟 *ERTIGA RIDE | LUXURY TRAVEL INQUIRY* 🚘
-------------------------------------------------
Hello Ertiga Ride Travel Desk! I need assistance with reserving a clean, verified luxury vehicle for my upcoming travel. 

Please share current availability and best per-day rates. Thank you!`;
  return `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(defaultText)}`;
};
