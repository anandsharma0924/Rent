import { IconShield, IconClock, IconCheck, IconUsers, IconCompare } from '../utils/icons';

const TOURIST_GALLERY = [
  {
    title: '🛕 Ujjain Mahakal Bhasma Aarti Trip',
    location: 'Mahakaleshwar Temple, Ujjain',
    car: 'Maruti Suzuki Ertiga 7-Seater',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '🌊 Omkareshwar Narmada Sangam Darshan',
    location: 'Omkareshwar Jyotirlinga, MP',
    car: 'Toyota Innova Crysta Z',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '🏛️ Mandu & Maheshwar Ahilya Fort',
    location: 'Maheshwar Ghats, MP',
    car: 'Maruti XL6 Captain Suite',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '✈️ Indore Airport VIP Transfer',
    location: 'Indore Airport (IDR)',
    car: 'Honda City ZX Executive',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  }
];

export const renderFeaturesSection = (): string => {
  return `
    <section id="why-us" class="container" style="padding: 40px 0 30px;">
      <div class="section-header" style="text-align: center;">
        <span class="hero-tag" style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8;">
          🌟 Why Choose Ertiga Ride
        </span>
        <h2 style="font-size: 2.1rem; font-weight: 900; color: var(--navy-primary); margin-top: 8px;">
          The Premium Travel Benchmark
        </h2>
        <p style="color: var(--text-secondary); max-width: 620px; margin: 10px auto 0; font-size: 0.95rem; line-height: 1.6;">
          We don't just rent cars; we guarantee peace of mind, uncompromised safety, and royal comfort on every highway trip.
        </p>
      </div>

      <!-- 4 Core Guarantee Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 40px;">
        <div class="glass-card" style="padding: 28px; border-top: 4px solid #2563eb; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
            ${IconShield(26, '#2563eb')}
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Sanitized & Deep Cleaned Fleet</h3>
          <p style="color: #475569; font-size: 0.88rem; line-height: 1.65;">
            Every vehicle undergoes a multi-point safety check and interior sanitization before every single pickup.
          </p>
        </div>

        <div class="glass-card" style="padding: 28px; border-top: 4px solid #2563eb; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
            ${IconClock(26, '#2563eb')}
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; color: #0f172a;">On-Time Pick-up Guarantee</h3>
          <p style="color: #475569; font-size: 0.88rem; line-height: 1.65;">
            Your driver arrives 15 minutes before scheduled departure time so your airport flight or trip is never delayed.
          </p>
        </div>

        <div class="glass-card" style="padding: 28px; border-top: 4px solid #059669; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(5,150,105,0.08); border: 1px solid rgba(5,150,105,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
            ${IconCheck(26, '#059669')}
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Zero Hidden Surcharges</h3>
          <p style="color: #475569; font-size: 0.88rem; line-height: 1.65;">
            Transparent line-item billing for base fare, driver allowance, and tolls with zero surprise charges.
          </p>
        </div>

        <div class="glass-card" style="padding: 28px; border-top: 4px solid #2563eb; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
            ${IconUsers(26, '#2563eb')}
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Police Verified Chauffeurs</h3>
          <p style="color: #475569; font-size: 0.88rem; line-height: 1.65;">
            Experienced, polite, and background-checked drivers with over 5+ years of highway driving expertise.
          </p>
        </div>
      </div>

      <!-- NEW SECTION: Verified Tourist Trip Photo Gallery Showcase -->
      <div style="margin-bottom: 40px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <span style="background: #eff6ff; color: #2563eb; font-size: 0.78rem; font-weight: 800; padding: 4px 12px; border-radius: 9999px; border: 1px solid #bfdbfe;">
            📸 REAL TRAVEL PHOTOS
          </span>
          <h3 style="font-size: 1.5rem; font-weight: 900; margin-top: 8px; color: #0f172a;">
            Verified Tourist & Pilgrimage Trips
          </h3>
          <p style="color: #64748b; font-size: 0.88rem; margin-top: 4px;">
            Actual photos of our Ertiga, Innova & XL6 fleet on highway trips to Mahakal Mandir, Omkareshwar & Maheshwar.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
          ${TOURIST_GALLERY.map(item => `
            <div class="glass-card" style="overflow: hidden; background: #ffffff;">
              <div style="height: 160px; overflow: hidden; position: relative;">
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" />
                <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(15,23,42,0.85); color: #ffffff; font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; backdrop-filter: blur(4px);">
                  📍 ${item.location}
                </span>
              </div>
              <div style="padding: 16px;">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: #0f172a; margin-bottom: 4px;">${item.title}</h4>
                <span style="font-size: 0.78rem; color: #2563eb; font-weight: 700;">🚘 ${item.car}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Performance Comparison Matrix Box -->
      <div class="glass-card" style="padding: 36px; background: #ffffff; margin-bottom: 20px; border-radius: 24px; border: 1px solid #e2e8f0; box-shadow: 0 10px 35px rgba(15, 23, 42, 0.06);">
        <div style="text-align: center; margin-bottom: 28px;">
          <span style="background: #fef3c7; color: #b45309; font-size: 0.78rem; font-weight: 800; padding: 5px 14px; border-radius: 9999px; border: 1px solid #fde68a; display: inline-flex; align-items: center; gap: 6px;">
            ${IconCompare(14, '#b45309')} PERFORMANCE COMPARISON
          </span>
          <h3 style="font-size: 1.5rem; font-weight: 900; margin-top: 10px; color: #0f172a;">
            Ertiga Ride vs Ordinary Local Taxis
          </h3>
          <p style="color: #64748b; font-size: 0.88rem; margin-top: 4px;">
            See why families, corporate travel managers & outstation tourists choose us over unverified local cabs.
          </p>
        </div>

        <div style="overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
            <thead>
              <tr style="border-bottom: 2px solid #e2e8f0;">
                <th style="padding: 16px 20px; color: #475569; font-weight: 800; background: #f8fafc; width: 34%;">Travel Requirement</th>
                <th style="padding: 16px 20px; color: #1d4ed8; font-weight: 900; font-size: 0.98rem; background: #eff6ff; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe; width: 33%;">
                  🚘 Ertiga Ride (Premium)
                </th>
                <th style="padding: 16px 20px; color: #991b1b; font-weight: 800; font-size: 0.95rem; background: #fef2f2; width: 33%;">
                  Ordinary Local Taxis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">Interior Sanitization</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${IconCheck(16, '#059669')} Deep Sanitized Before Ride</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ Unverified & Dusty Interiors
                </td>
              </tr>

              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">Chauffeur Credentials</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${IconCheck(16, '#059669')} 100% Police Verified Drivers</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ Random Unchecked Drivers
                </td>
              </tr>

              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">Fare Integrity</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${IconCheck(16, '#059669')} Guaranteed Fixed Rates</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ Surprise Surcharges Added
                </td>
              </tr>

              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">Vehicle Condition</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${IconCheck(16, '#059669')} Showroom Fresh (&lt;3 Yrs)</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ High-Mileage Worn Cars
                </td>
              </tr>

              <tr>
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">24x7 Travel Support</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${IconCheck(16, '#059669')} Dedicated Desk Manager</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ No On-Call Helpline
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
};
