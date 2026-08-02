(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,name:`Maruti Suzuki Ertiga ZXI+`,type:`Family`,tagline:`Ideal for 7-person family outstation & pilgrimage trips`,pricePerDay:3200,pricePerKm:14,pricePerHour:350,seats:7,transmission:`Manual`,fuel:`CNG`,rating:4.9,reviewCount:420,image:`https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80`,gallery:[{title:`Exterior Front View`,url:`https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80`},{title:`VIP Interior Cabin`,url:`https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80`},{title:`Rear Boot Space`,url:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`}],chauffeur:{name:`Rajesh Sharma`,experience:`8+ Years Highway Driving`,languages:[`Hindi`,`English`]},features:[`Dual AC Vent Columns`,`Plush Reclining Seats`,`Touchscreen Infotainment`,`Sanitized Interior`],specs:{engine:`1.5L K15C Smart Hybrid`,mileage:`20.5 km/l`,luggage:`3 Large Bags`}},{id:2,name:`Toyota Innova Crysta Z`,type:`SUV`,tagline:`Royal outstation comfort for highway & long journeys`,pricePerDay:4800,pricePerKm:18,pricePerHour:550,seats:7,transmission:`Automatic`,fuel:`Diesel`,rating:4.95,reviewCount:380,image:`https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80`,gallery:[{title:`Exterior Front View`,url:`https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80`},{title:`Captain Seat Interior`,url:`https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80`},{title:`Rear Luggage Space`,url:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`}],chauffeur:{name:`Vikram Singh`,experience:`12+ Years VIP Outstation`,languages:[`Hindi`,`English`]},features:[`Ambient Cabin Lighting`,`Leather Captain Seats`,`Rear Climate Control`,`Superior Suspension`],specs:{engine:`2.4L GD Turbo Diesel`,mileage:`14.8 km/l`,luggage:`4 Large Bags`}},{id:3,name:`Maruti Suzuki XL6 Alpha`,type:`Family`,tagline:`Executive 6-seater captain seat luxury travel`,pricePerDay:3900,pricePerKm:16,pricePerHour:420,seats:6,transmission:`Automatic`,fuel:`Petrol`,rating:4.88,reviewCount:290,image:`https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80`,gallery:[{title:`Exterior Front View`,url:`https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80`},{title:`Captain Suite Cabin`,url:`https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80`},{title:`Rear Boot View`,url:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`}],chauffeur:{name:`Anil Verma`,experience:`9+ Years Outstation Expert`,languages:[`Hindi`]},features:[`Individual Armrests`,`UV Cut Glass`,`Ventilated Seats`,`Smart Hybrid Tech`],specs:{engine:`1.5L DualJet VVT`,mileage:`19.0 km/l`,luggage:`3 Large Bags`}},{id:4,name:`Hyundai Creta SX Premium`,type:`SUV`,tagline:`Modern 5-seater SUV for urban & outstation rides`,pricePerDay:3600,pricePerKm:15,pricePerHour:400,seats:5,transmission:`Manual`,fuel:`Diesel`,rating:4.85,reviewCount:210,image:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`,gallery:[{title:`Exterior Front View`,url:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`},{title:`Modern Cabin`,url:`https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80`},{title:`Trunk Space`,url:`https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80`}],chauffeur:{name:`Suresh Kumar`,experience:`7+ Years Highway Driving`,languages:[`Hindi`,`English`]},features:[`Panoramic Sunroof`,`Bose Sound System`,`Rear AC Vents`,`Wireless Charger`],specs:{engine:`1.5L U2 CRDi Diesel`,mileage:`18.0 km/l`,luggage:`2 Large Bags`}},{id:5,name:`Honda City ZX Executive`,type:`Sedan`,tagline:`Sleek executive sedan for corporate & airport travel`,pricePerDay:3400,pricePerKm:13,pricePerHour:380,seats:5,transmission:`Automatic`,fuel:`Petrol`,rating:4.9,reviewCount:310,image:`https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80`,gallery:[{title:`Exterior Front View`,url:`https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80`},{title:`Luxury Leather Interior`,url:`https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80`},{title:`Boot Space`,url:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`}],chauffeur:{name:`Deepak Patel`,experience:`10+ Years Corporate Chauffeur`,languages:[`Hindi`,`English`]},features:[`Soft-Touch Leather Seats`,`LaneWatch Camera`,`Rear Sunshade`,`Smooth Automatic CVT`],specs:{engine:`1.5L i-VTEC DOHC`,mileage:`17.8 km/l`,luggage:`3 Medium Bags`}},{id:6,name:`Toyota Fortuner 4x4 Legender`,type:`Premium`,tagline:`Ultimate 7-seater VIP SUV for weddings & VIP escort`,pricePerDay:8500,pricePerKm:28,pricePerHour:1100,seats:7,transmission:`Automatic`,fuel:`Diesel`,rating:4.98,reviewCount:180,image:`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80`,gallery:[{title:`Exterior Front View`,url:`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80`},{title:`Dual Tone VIP Cabin`,url:`https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80`},{title:`Heavy Duty Boot`,url:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`}],chauffeur:{name:`Mahendra Singh`,experience:`15+ Years VIP Security Chauffeur`,languages:[`Hindi`,`English`]},features:[`JBL 11-Speaker Audio System`,`Dual-Zone Auto Climate`,`4x4 All-Terrain System`,`Power Back Door`],specs:{engine:`2.8L GD Turbo Diesel (500 Nm)`,mileage:`12.4 km/l`,luggage:`5 Large Bags`}}],t=e=>new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e),n=(e,t)=>{if(!e||!t)return 1;let n=new Date(e),r=new Date(t),i=Math.abs(r.getTime()-n.getTime()),a=Math.ceil(i/864e5);return a>0?a:1},r=()=>new Date().toISOString().split(`T`)[0],i=e=>{let t=new Date;return t.setDate(t.getDate()+e),t.toISOString().split(`T`)[0]},a=`ertiga_favorite_cars`,o=()=>{try{let e=localStorage.getItem(a);return e?JSON.parse(e):[]}catch(e){return console.error(`Failed to parse favorites`,e),[]}},s=e=>{let t=o(),n=t.indexOf(e);n>-1?t.splice(n,1):t.push(e);try{localStorage.setItem(a,JSON.stringify(t))}catch(e){console.error(`Failed to save favorites`,e)}return t},c={home:{title:`Ertiga Ride | Best 7-Seater Car Rental in Indore, Ujjain & MP`,description:`Book 7-seater Maruti Ertiga, Innova Crysta, XL6 & Fortuner for Ujjain Mahakal Bhasma Aarti, Omkareshwar, Indore Airport drops & highway outstation. 100% police verified drivers.`},fleet:{title:`Luxury Car Fleet | Maruti Ertiga, Innova Crysta & Fortuner Rental Indore`,description:`Browse verified 5, 6, 7-seater cars for outstation highway trips in MP. Sanitized Maruti Ertiga, XL6 Captain, Innova Crysta & 4x4 Fortuner Legender.`},"why-us":{title:`Why Choose Us | 100% Police Verified Drivers & Fixed Price Guarantee`,description:`Discover our 100% police-verified chauffeur guarantee, 3:00 AM Ujjain Mahakal early pickups, zero hidden toll surcharges & 24x7 travel desk support.`},faqs:{title:`Help & FAQs | Car Booking, Per KM Rates, Toll & Cancellation Policies`,description:`Instant answers to Ertiga & Innova daily rental rates, driver allowance, Bhasma Aarti timing, airport flight tracking & booking cancellation policies.`},contact:{title:`Contact Us | 24x7 Direct Travel Desk & WhatsApp Reservation Indore`,description:`Speak directly to our Indore Travel Desk Manager at +91 9981264216 or chat on WhatsApp for custom outstation, wedding motorcade & pilgrimage quotes.`}},l=e=>{let t=c[e]||c.home;document.title=t.title;let n=document.querySelector(`meta[name="description"]`);n||(n=document.createElement(`meta`),n.setAttribute(`name`,`description`),document.head.appendChild(n)),n.setAttribute(`content`,t.description);let r=document.querySelector(`meta[property="og:title"]`);r&&r.setAttribute(`content`,t.title);let i=document.querySelector(`meta[property="og:description"]`);i&&i.setAttribute(`content`,t.description)},u=new class{listeners=[];currentRoute=`home`;filters={searchQuery:``,selectedType:`All`,selectedSeats:`All`,selectedTransmission:`All`,selectedFuel:`All`,maxPrice:1e4,sortBy:`recommended`};booking={tripType:`Outstation trip`,pickupCity:`Indore, Madhya Pradesh`,pickupDate:i(1),returnDate:i(3),seatsNeeded:7,needDriver:!0,selectedCarId:1};favorites=o();compareList=[];activeDetailCar=null;isCompareModalOpen=!1;activeToast=null;subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){this.listeners.forEach(e=>e())}setRoute(e){this.currentRoute=e;let t=e===`home`?`/`:`/${e}`;window.location.pathname!==t&&window.history.pushState({route:e},``,t),l(e),window.scrollTo({top:0,behavior:`smooth`}),this.notify()}setFilters(e){this.filters={...this.filters,...e},this.notify()}setBooking(e){this.booking={...this.booking,...e},this.notify()}toggleFavorite(e){this.favorites=s(e);let t=this.favorites.includes(e);this.showToast(t?`Added to your wishlist ❤️`:`Removed from wishlist`,t?`success`:`info`),this.notify()}toggleCompare(e){let t=this.compareList.indexOf(e);if(t>-1)this.compareList.splice(t,1),this.showToast(`Removed from comparison list`,`info`);else{if(this.compareList.length>=3){this.showToast(`You can compare maximum 3 cars at once`,`warning`);return}this.compareList.push(e),this.showToast(`Added to comparison tool ⚖️`,`success`)}this.notify()}clearCompare(){this.compareList=[],this.isCompareModalOpen=!1,this.notify()}openDetailModal(e){this.activeDetailCar=e,this.notify()}closeDetailModal(){this.activeDetailCar=null,this.notify()}openCompareModal(){if(this.compareList.length===0){this.showToast(`Select at least 1 car to compare`,`warning`);return}this.isCompareModalOpen=!0,this.notify()}closeCompareModal(){this.isCompareModalOpen=!1,this.notify()}showToast(e,t=`info`){this.activeToast={id:Date.now(),message:e,type:t},this.notify(),setTimeout(()=>{this.activeToast&&this.activeToast.id===this.activeToast.id&&(this.activeToast=null,this.notify())},3200)}getFilteredCars(){return e.filter(e=>{if(this.filters.searchQuery){let t=this.filters.searchQuery.toLowerCase(),n=e.name.toLowerCase().includes(t),r=e.tagline.toLowerCase().includes(t),i=e.type.toLowerCase().includes(t);if(!n&&!r&&!i)return!1}return!(this.filters.selectedType!==`All`&&e.type!==this.filters.selectedType||this.filters.selectedSeats!==`All`&&(Number(this.filters.selectedSeats)===7&&e.seats<7||Number(this.filters.selectedSeats)===5&&e.seats!==5||Number(this.filters.selectedSeats)===6&&e.seats!==6)||this.filters.selectedTransmission!==`All`&&e.transmission!==this.filters.selectedTransmission||this.filters.selectedFuel!==`All`&&e.fuel!==this.filters.selectedFuel||e.pricePerDay>this.filters.maxPrice)}).sort((e,t)=>this.filters.sortBy===`price-low`?e.pricePerDay-t.pricePerDay:this.filters.sortBy===`price-high`?t.pricePerDay-e.pricePerDay:(this.filters.sortBy,t.rating-e.rating))}},d=`919981264216`,f=400,p=(e,r)=>{let i=n(r.pickupDate,r.returnDate),a=r.pricingMode===`perKm`,o=r.estimatedKm||f,s=Math.max(f,o),c=0,l=``;a?(c=e.pricePerKm*s+(r.needDriver?500*i:0),l=`🛣️ *Pricing Mode:* Per KM Highway Rate (₹${e.pricePerKm}/KM × ${s} KM • Min 400 KM Policy)`):(c=e.pricePerDay*i+(r.needDriver?500*i:0),l=`📅 *Pricing Mode:* Daily Fixed Rate (${t(e.pricePerDay)} × ${i} days)`);let u=`🌟 *ERTIGA RIDE | LUXURY MOBILITY RESERVATION* 🚘
-------------------------------------------------
Greetings Travel Desk! I would like to reserve the following verified vehicle for my journey:

📍 *Pickup Location:* ${r.pickupCity}
🗓️ *Pickup Date:* ${r.pickupDate}
📅 *Return Date:* ${r.returnDate} (${i} ${i===1?`day`:`days`})
🚘 *Vehicle Selected:* ${e.name} (${e.type})
👥 *Passenger Capacity:* ${e.seats} Seats
${l}
👨‍✈️ *Chauffeur Allowance:* ${r.needDriver?`Included (+₹500/day)`:`Standard`}

💰 *Estimated Fare Total:* ${t(c)}

Please confirm vehicle availability and send booking confirmation details. Thank you!`;return`https://wa.me/${d}?text=${encodeURIComponent(u)}`},m=e=>`https://wa.me/${d}?text=${encodeURIComponent(e||`🌟 *ERTIGA RIDE | LUXURY TRAVEL INQUIRY* 🚘
-------------------------------------------------
Hello Ertiga Ride Travel Desk! I need assistance with reserving a clean, verified luxury vehicle for my upcoming travel. 

Please share current availability, per KM highway rates (Min 400 KM) & best per-day quotes. Thank you!`)}`,h=(e=18,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 11.9 1 12.6V16c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>
`,g=(e=18,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
`,_=(e=18,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
    <line x1="9" y1="3" x2="9" y2="18"></line>
    <line x1="15" y1="6" x2="15" y2="21"></line>
  </svg>
`,v=(e=16,t=`#d97706`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="${t}" stroke="${t}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
`,y=(e=18,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
`,b=(e=18,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
`,x=(e=18,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
`,S=(e=18,t=!1)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="${t?`#ef4444`:`none`}" stroke="${t?`#ef4444`:`currentColor`}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
`,C=(e=16,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
`,w=(e=24,t=`#2563eb`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
`,T=(e=24,t=`#2563eb`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
`,E=(e=16,t=`#059669`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
`,ee=(e=16,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
`,D=(e=16,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
`,te=(e=16,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="22" x2="15" y2="22"></line>
    <rect x="4" y="9" width="10" height="13" rx="2" ry="2"></rect>
    <path d="M14 9h2a2 2 0 0 1 2 2v3.5a1.5 1.5 0 0 0 3 0V11"></path>
    <circle cx="9" cy="6" r="2"></circle>
  </svg>
`,ne=(e=16,t=`currentColor`)=>`
  <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
`,O=!1,k=()=>{let e=u.favorites.length,t=u.currentRoute,n=[{route:`home`,label:`Home`,icon:g(16)},{route:`fleet`,label:`Fleet & Cars`,icon:h(16)},{route:`why-us`,label:`Why Choose Us`,icon:v(16)},{route:`faqs`,label:`FAQs`,icon:y(16)},{route:`contact`,label:`Contact`,icon:b(16)}];return`
    <header class="site-header">
      <div class="container nav-wrap">
        <button id="brandLogoBtn" class="brand-logo" style="cursor: pointer; background: none; border: none; padding: 0; text-align: left;">
          <div class="brand-icon">${h(22,`#ffffff`)}</div>
          <div>
            <div class="brand-title">ERTIGA RIDE</div>
            <div class="brand-subtitle">Luxury Mobility Platform</div>
          </div>
        </button>

        <!-- Desktop Navigation Links -->
        <nav class="nav-links desktop-only">
          ${n.map(e=>`
            <button class="nav-link ${t===e.route?`active`:``}" data-route="${e.route}" style="display: inline-flex; align-items: center; gap: 6px;">
              ${e.icon} <span>${e.label}</span>
            </button>
          `).join(``)}
        </nav>

        <div class="nav-actions">
          <button id="favHeaderBtn" class="fav-badge-btn" title="Saved Favorites" style="display: inline-flex; align-items: center; gap: 6px;">
            ${S(16,!0)} <span>Saved</span> <span class="fav-count">${e}</span>
          </button>
          
          <a href="${m()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp desktop-only" style="display: inline-flex; align-items: center; gap: 6px;">
            ${x(16,`#ffffff`)} <span>WhatsApp</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobileMenuToggleBtn" class="mobile-toggle-btn" aria-label="Toggle Navigation Menu">
            ${O?`✕`:`☰`}
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation Drawer -->
      ${O?`
        <div class="mobile-drawer animate-fade-in">
          <nav class="mobile-nav-links">
            ${n.map(e=>`
              <button class="mobile-nav-link ${t===e.route?`active`:``}" data-route="${e.route}" style="display: flex; align-items: center; gap: 10px;">
                ${e.icon} <span>${e.label}</span>
              </button>
            `).join(``)}
          </nav>
          
          <div style="padding-top: 14px; border-top: 1px solid #e2e8f0; margin-top: 10px;">
            <a href="${m()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="width: 100%; justify-content: center; display: inline-flex; align-items: center; gap: 8px;">
              ${x(18,`#ffffff`)} <span>Quick WhatsApp Support</span>
            </a>
          </div>
        </div>
      `:``}
    </header>
  `},A=()=>{document.querySelector(`#brandLogoBtn`)?.addEventListener(`click`,()=>{O=!1,u.setRoute(`home`)}),document.querySelector(`#mobileMenuToggleBtn`)?.addEventListener(`click`,()=>{O=!O;let e=document.querySelector(`.site-header`);e&&(e.outerHTML=k(),A())}),document.querySelectorAll(`.nav-link, .mobile-nav-link`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.route;t&&(O=!1,u.setRoute(t))})}),document.querySelector(`#favHeaderBtn`)?.addEventListener(`click`,()=>{O=!1,u.setRoute(`fleet`),u.favorites.length===0?u.showToast(`You have no saved favorite cars yet. Click the heart on any vehicle card!`,`info`):u.showToast(`Showing ${u.favorites.length} saved vehicles in fleet`,`success`)})},j=!1,re=()=>{j=!0,u.showToast(`Generating official travel quotation receipt...`,`info`)},ie=()=>{j=!1},ae=()=>{if(!j)return``;let{booking:r}=u,i=e.find(e=>e.id===r.selectedCarId)||e[0],a=n(r.pickupDate,r.returnDate),o=i.pricePerDay*a,s=r.needDriver?500*a:0,c=o+s,l=`ERT-2026-${Math.floor(1e3+Math.random()*9e3)}`;return`
    <div class="modal-overlay" id="quoteModalOverlay">
      <div class="modal-content animate-fade-in" style="max-width: 680px; padding: 32px; background: #ffffff;">
        <button class="modal-close" id="closeQuoteModalBtn">&times;</button>

        <!-- Quotation Invoice Header -->
        <div style="border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <div class="brand-icon" style="width:30px; height:30px; font-size:0.9rem;">${h(16,`#ffffff`)}</div>
              <strong style="font-size: 1.25rem; color: #0f172a;">ERTIGA RIDE MOBILITY</strong>
            </div>
            <span style="font-size: 0.78rem; color: #64748b;">Vijay Nagar & Airport Road, Indore (M.P.), India • Support: +91 9981264216</span>
          </div>

          <div style="text-align: right;">
            <span style="background: #eff6ff; color: #2563eb; font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; border: 1px solid #bfdbfe;">
              OFFICIAL QUOTATION
            </span>
            <strong style="display: block; font-size: 0.9rem; color: #0f172a; margin-top: 4px;">Quote #: ${l}</strong>
            <span style="font-size: 0.75rem; color: #64748b;">Date: ${new Date().toLocaleDateString(`en-IN`)}</span>
          </div>
        </div>

        <!-- Trip Reservation Summary Table -->
        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: #0f172a; margin-bottom: 10px;">Trip & Reservation Summary</h4>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
            <tbody>
              <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700; width: 40%;">Service Category</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: 800;">${r.tripType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700;">Pickup Location</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: 800;">📍 ${r.pickupCity}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700;">Travel Dates & Duration</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: 800;">📅 ${r.pickupDate} ➔ ${r.returnDate} (${a} ${a===1?`day`:`days`})</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700;">Vehicle Selected</td>
                <td style="padding: 10px 14px; color: #2563eb; font-weight: 800;">🚘 ${i.name} (${i.seats} Seats)</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px 14px; color: #64748b; font-weight: 700;">Assigned Chauffeur</td>
                <td style="padding: 10px 14px; color: #059669; font-weight: 800;">✓ ${i.chauffeur.name} (Police Verified)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Line Item Cost Breakdown -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: #0f172a; margin-bottom: 10px;">Fare Itemization</h4>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.88rem; color: #475569; margin-bottom: 6px;">
              <span>Base Vehicle Rental (${t(i.pricePerDay)} × ${a} days)</span>
              <strong>${t(o)}</strong>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 0.88rem; color: #475569; margin-bottom: 8px;">
              <span>Chauffeur Allowance (+₹500 × ${a} days)</span>
              <strong>${t(s)}</strong>
            </div>

            <div style="border-top: 1.5px dashed #cbd5e1; padding-top: 10px; display: flex; justify-content: space-between; align-items: center;">
              <strong style="font-size: 1.05rem; color: #0f172a;">Estimated Total Fare</strong>
              <strong style="font-size: 1.4rem; color: #2563eb; font-weight: 900;">${t(c)}</strong>
            </div>
          </div>
        </div>

        <!-- Action Buttons: Print PDF & Close -->
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button id="printQuotePdfBtn" class="btn-primary" style="padding: 10px 20px; font-size: 0.88rem;">
            🖨️ Print / Download Official Quote
          </button>
          <button id="closeQuoteModalActionBtn" class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;">
            Close Window
          </button>
        </div>
      </div>
    </div>
  `},oe=()=>{let e=document.querySelector(`#quoteModalOverlay`),t=document.querySelector(`#closeQuoteModalBtn`),n=document.querySelector(`#closeQuoteModalActionBtn`),r=document.querySelector(`#printQuotePdfBtn`),i=()=>{ie(),u.notify()};t?.addEventListener(`click`,i),n?.addEventListener(`click`,i),e?.addEventListener(`click`,t=>{t.target===e&&i()}),r?.addEventListener(`click`,()=>{window.print()})},se=[`Indore, Madhya Pradesh`,`Indore Airport (IDR)`,`Indore Junction Railway Station`,`Vijay Nagar, Indore`,`Ujjain Mahakal Mandir`,`Ujjain Junction Railway Station`,`Bhopal Central`,`Bhopal Airport (BHO)`,`Omkareshwar Jyotirlinga`,`Maheshwar Fort & Ghats`,`Mandu Heritage City`,`Dewas Bypass`,`Ratlam Junction`,`Mumbai Chhatrapati Shivaji Airport (BOM)`,`Delhi IGI Airport (DEL)`],M=400,ce=()=>{let{booking:i}=u,a=e.find(e=>e.id===i.selectedCarId)||e[0],o=n(i.pickupDate,i.returnDate),s=i.pricingMode===`perKm`,c=i.estimatedKm||M,l=Math.max(M,c),d=0;d=s?a.pricePerKm*l+(i.needDriver?500*o:0):a.pricePerDay*o+(i.needDriver?500*o:0);let f=r();return`
    <div class="glass-card booking-panel" id="booking">
      <div class="panel-title">
        <span>⚡ Quick Ride Estimator</span>
        <span class="status-pill">Available 24x7</span>
      </div>

      <!-- Pricing Mode Selector Tabs (Daily Fare vs Highway Per KM Rate) -->
      <div style="display: flex; gap: 8px; margin-bottom: 14px; background: #f1f5f9; padding: 4px; border-radius: 10px;">
        <button type="button" class="pricing-mode-tab ${s?``:`active`}" data-mode="daily" style="flex: 1; padding: 6px 12px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; border: none; background: ${s?`transparent`:`#ffffff`}; color: ${s?`#64748b`:`#2563eb`}; cursor: pointer; box-shadow: ${s?`none`:`0 2px 6px rgba(0,0,0,0.06)`};">
          📅 Daily Rental Fare
        </button>
        <button type="button" class="pricing-mode-tab ${s?`active`:``}" data-mode="perKm" style="flex: 1; padding: 6px 12px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; border: none; background: ${s?`#ffffff`:`transparent`}; color: ${s?`#2563eb`:`#64748b`}; cursor: pointer; box-shadow: ${s?`0 2px 6px rgba(0,0,0,0.06)`:`none`};">
          🛣️ Per KM (Min 400 KM)
        </button>
      </div>

      <form id="bookingSearchForm" class="form-grid" novalidate>
        <div class="form-group">
          <label for="tripType">Service Category</label>
          <select id="tripType">
            <option value="Outstation trip" ${i.tripType===`Outstation trip`?`selected`:``}>Outstation Highway Trip</option>
            <option value="Local city ride" ${i.tripType===`Local city ride`?`selected`:``}>Local City Rental (4h/8h)</option>
            <option value="Airport transfer" ${i.tripType===`Airport transfer`?`selected`:``}>Airport Pickup / Drop</option>
            <option value="Wedding travel" ${i.tripType===`Wedding travel`?`selected`:``}>Wedding & Event Travel</option>
          </select>
        </div>

        <!-- Interactive Location Search Input with Autocomplete Dropdown -->
        <div class="form-group" style="position: relative;">
          <label for="pickupCityInput">Pickup Location</label>
          <div style="position: relative;">
            <input 
              type="text" 
              id="pickupCityInput" 
              placeholder="Type city, airport or landmark (e.g. Indore, Ujjain)..." 
              value="${i.pickupCity}" 
              autocomplete="off" 
              style="width: 100%; padding-left: 36px;"
              required 
            />
            <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #64748b;">
              ${_(16,`#2563eb`)}
            </div>
          </div>
          
          <div id="locationSuggestions" class="location-autocomplete-dropdown" style="display: none;"></div>
          <div id="pickupCityError" class="error-text" style="display:none;"></div>
        </div>

        <!-- Per KM Dynamic Distance Input Field (Min 400 KM Enforced) -->
        ${s?`
          <div class="form-group" style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label for="estimatedKmInput" style="color: #1d4ed8; font-weight: 800;">Highway Distance (KM) *</label>
              <span style="font-size: 0.7rem; background: #dbeafe; color: #1e40af; font-weight: 800; padding: 2px 6px; border-radius: 4px;">
                Min 400 KM Policy
              </span>
            </div>
            
            <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
              <input type="number" id="estimatedKmInput" value="${c}" min="400" max="5000" step="10" placeholder="Min 400 KM" style="flex: 1; font-weight: 800; color: #2563eb;" required />
              <span style="font-size: 0.8rem; font-weight: 700; color: #1d4ed8; white-space: nowrap;">@ ₹${a.pricePerKm}/KM</span>
            </div>

            ${c<M?`
              <div style="font-size: 0.72rem; color: #b45309; font-weight: 700; margin-top: 4px;">
                ⚠️ Minimum 400 KM billing applies for per-KM highway rate (${M} KM × ₹${a.pricePerKm} = ${t(M*a.pricePerKm)}).
              </div>
            `:``}
          </div>
        `:``}

        <div class="form-row">
          <div class="form-group">
            <label for="pickupDate">Pickup Date</label>
            <input type="date" id="pickupDate" min="${f}" value="${i.pickupDate}" required />
            <div id="pickupDateError" class="error-text" style="display:none;"></div>
          </div>
          <div class="form-group">
            <label for="returnDate">Return Date</label>
            <input type="date" id="returnDate" min="${i.pickupDate}" value="${i.returnDate}" required />
            <div id="returnDateError" class="error-text" style="display:none;"></div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="seatsNeeded">Passengers</label>
            <select id="seatsNeeded">
              <option value="5" ${i.seatsNeeded===5?`selected`:``}>5 Seats (Sedan / SUV)</option>
              <option value="6" ${i.seatsNeeded===6?`selected`:``}>6 Seats (XL6 Captain)</option>
              <option value="7" ${i.seatsNeeded===7?`selected`:``}>7 Seats (Ertiga / Innova)</option>
            </select>
          </div>

          <div class="form-group">
            <label for="selectedCarSelect">Vehicle Choice</label>
            <select id="selectedCarSelect">
              ${e.map(e=>`
                <option value="${e.id}" ${e.id===i.selectedCarId?`selected`:``}>
                  ${e.name} (${s?`₹${e.pricePerKm}/km`:`${t(e.pricePerDay)}/day`})
                </option>
              `).join(``)}
            </select>
          </div>
        </div>

        <div class="checkbox-group">
          <input type="checkbox" id="needDriver" ${i.needDriver?`checked`:``} />
          <label for="needDriver">Include Driver Allowance (+₹500/day)</label>
        </div>

        <div class="price-estimate-box" style="flex-wrap: wrap; gap: 10px;">
          <div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">
              ${s?`Estimated Fare (${l} KM @ ₹${a.pricePerKm}/km)`:`Estimated Fare (${o} ${o===1?`day`:`days`})`}
            </div>
            <div class="estimate-val" id="estimatedFareVal">${t(d)}</div>
          </div>

          <div style="display: flex; gap: 8px;">
            <button id="generateQuotePdfBtn" type="button" class="btn-secondary" style="padding: 8px 12px; font-size: 0.8rem;">
              📄 Official Quote
            </button>

            <button id="whatsAppBookingBtn" type="button" class="btn-whatsapp" style="padding: 8px 14px; font-size: 0.85rem;">
              📲 Book on WhatsApp
            </button>
          </div>
        </div>
      </form>
    </div>
  `},le=()=>{let t=document.querySelector(`#bookingSearchForm`);if(!t)return;let n=document.querySelector(`#pickupCityInput`),i=document.querySelector(`#locationSuggestions`),a=document.querySelector(`#pickupDate`),o=document.querySelector(`#returnDate`),s=document.querySelector(`#estimatedKmInput`),c=document.querySelector(`#pickupDateError`),l=document.querySelector(`#returnDateError`);document.querySelectorAll(`.pricing-mode-tab`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.mode;u.setBooking({pricingMode:t,estimatedKm:t===`perKm`?Math.max(M,u.booking.estimatedKm||M):u.booking.estimatedKm})})}),s?.addEventListener(`input`,e=>{let t=Number(e.target.value)||M;u.setBooking({estimatedKm:t})});let d=e=>{if(!i)return;let t=e.trim().toLowerCase(),r=se.filter(e=>e.toLowerCase().includes(t));if(r.length===0){i.style.display=`none`;return}i.innerHTML=r.map(e=>`
      <div class="suggestion-item" data-location="${e}">
        <span style="color: #2563eb;">📍</span> <span>${e}</span>
      </div>
    `).join(``),i.style.display=`block`,i.querySelectorAll(`.suggestion-item`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.location||``;n&&(n.value=t,u.setBooking({pickupCity:t})),i.style.display=`none`})})};n?.addEventListener(`input`,e=>{let t=e.target.value;u.setBooking({pickupCity:t}),d(t)}),n?.addEventListener(`focus`,e=>{d(e.target.value)}),document.addEventListener(`click`,e=>{!n?.contains(e.target)&&!i?.contains(e.target)&&i&&(i.style.display=`none`)});let f=()=>{let e=!0,t=r();return a&&a.value<t?(a.classList.add(`input-error`),c&&(c.textContent=`Pickup date cannot be in the past!`,c.style.display=`block`),e=!1):(a?.classList.remove(`input-error`),c&&(c.style.display=`none`)),o&&a&&o.value<a.value?(o.classList.add(`input-error`),l&&(l.textContent=`Return date must be on or after pickup date!`,l.style.display=`block`),e=!1):(o?.classList.remove(`input-error`),l&&(l.style.display=`none`)),e},m=()=>{if(!f())return;let e=document.querySelector(`#tripType`)?.value,t=n?.value||`Indore`,r=a?.value,i=o?.value,s=Number(document.querySelector(`#seatsNeeded`)?.value),c=Number(document.querySelector(`#selectedCarSelect`)?.value),l=document.querySelector(`#needDriver`)?.checked;o&&r&&(o.min=r),u.setBooking({tripType:e,pickupCity:t,pickupDate:r,returnDate:i,seatsNeeded:s,selectedCarId:c,needDriver:l})};t.querySelectorAll(`input, select`).forEach(e=>{e!==n&&e!==s&&e.addEventListener(`change`,m)}),document.querySelector(`#generateQuotePdfBtn`)?.addEventListener(`click`,()=>{if(!f()){u.showToast(`Please fix invalid travel dates before generating quotation`,`warning`);return}re(),u.notify()}),document.querySelector(`#whatsAppBookingBtn`)?.addEventListener(`click`,()=>{if(!f()){u.showToast(`Please fix invalid travel dates before booking`,`warning`);return}let{booking:t}=u,n=p(e.find(e=>e.id===t.selectedCarId)||e[0],t);window.open(n,`_blank`)})},ue=()=>`
    <section class="hero-section">
      <div class="container hero-grid">
        <div>
          <div class="hero-tag">
            <span>✨ Verified Clean & Sanitized Fleet</span>
          </div>

          <h1 class="hero-title">
            Travel Luxury. <span>Drive Comfort.</span>
          </h1>

          <p class="hero-desc">
            Reserve premium 7-seater Maruti Ertiga, Innova Crysta, XL6 & Fortuner for family vacations, Mahakal pilgrimage trips, airport drops & outstation journeys across India.
          </p>

          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <button id="exploreFleetHeroBtn" class="btn-primary">
              🚘 Explore Luxury Fleet
            </button>
            <button id="whyChooseUsHeroBtn" class="btn-secondary">
              🛡️ Why Choose Us
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <strong>1,200+</strong>
              <span>Trips Completed</span>
            </div>
            <div class="stat-item">
              <strong>4.9 ★</strong>
              <span>Customer Rating</span>
            </div>
            <div class="stat-item">
              <strong>100%</strong>
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>

        <div>
          ${ce()}
        </div>
      </div>
    </section>
  `,de=()=>{document.querySelector(`#exploreFleetHeroBtn`)?.addEventListener(`click`,()=>{u.setRoute(`fleet`)}),document.querySelector(`#whyChooseUsHeroBtn`)?.addEventListener(`click`,()=>{u.setRoute(`why-us`)})},N=e=>{let n=u.favorites.includes(e.id),r=u.compareList.includes(e.id),{booking:i}=u,a=p(e,i);return`
    <div class="glass-card car-card animate-fade-in">
      
      <!-- Vehicle Media Header -->
      <div class="car-media">
        <img src="${e.image}" alt="${e.name}" class="car-img" />
        
        <span class="badge-overlay">
          🏷️ ${e.type}
        </span>

        <div style="position: absolute; top: 10px; right: 10px; display: flex; gap: 6px;">
          <button class="compare-btn fav-btn-overlay" data-car-id="${e.id}" title="${r?`Remove from Compare`:`Add to Compare`}">
            ${D(14,r?`#2563eb`:`#64748b`)}
          </button>

          <button class="fav-btn fav-btn-overlay" data-car-id="${e.id}" title="${n?`Remove from Wishlist`:`Save to Wishlist`}">
            ${S(14,n)}
          </button>
        </div>
      </div>

      <!-- Vehicle Content & Specs -->
      <div class="car-details">
        
        <div class="car-header">
          <h3 class="car-name">${e.name}</h3>
          <span style="background: #fef3c7; color: #b45309; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 6px;">
            ★ ${e.rating}
          </span>
        </div>

        <p class="car-tagline">${e.tagline}</p>

        <!-- Specs Badges -->
        <div class="specs-pills">
          <span class="spec-pill">
            ${C(13,`#2563eb`)} ${e.seats} Seats
          </span>
          <span class="spec-pill">
            ${te(13,`#059669`)} ${e.fuel}
          </span>
          <span class="spec-pill">
            ${ne(13,`#64748b`)} ${e.transmission}
          </span>
        </div>

        <!-- Per KM Rate Badge (Min 400 KM Policy) -->
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 6px 12px; border-radius: 8px; font-size: 0.78rem; color: #1d4ed8; font-weight: 700; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center;">
          <span>🛣️ Rate: <strong>₹${e.pricePerKm}/km</strong> (Min 400 KM)</span>
          <span style="font-weight: 800; color: #059669;">Daily: ${t(e.pricePerDay)}</span>
        </div>

        <!-- Footer with Fare & Booking Actions -->
        <div class="card-footer">
          <div>
            <span class="price-text">${t(e.pricePerDay)}</span>
            <span class="unit-text">/day (or ₹${e.pricePerKm}/km)</span>
          </div>

          <div style="display: flex; gap: 6px;">
            <button class="quick-view-btn btn-secondary" data-car-id="${e.id}" style="padding: 7px 12px; font-size: 0.8rem;">
              Details
            </button>
            <a href="${a}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 7px 12px; font-size: 0.8rem;">
              ${x(14,`#ffffff`)} Book
            </a>
          </div>
        </div>

      </div>

    </div>
  `},P=[{from:`Indore`,to:`Ujjain Mahakal Mandir`,distance:`55 KM`,duration:`1 Hr 15 Min`,recommended:`Maruti Ertiga 7-Seater`,tollEstimate:`₹95 (Expressway Toll)`,priceEstimate:`₹3,500 Flat Round Trip`},{from:`Indore`,to:`Omkareshwar Jyotirlinga`,distance:`78 KM`,duration:`2 Hours`,recommended:`Toyota Innova Crysta / XL6`,tollEstimate:`₹60 (State Highway)`,priceEstimate:`₹3,800 Round Trip`},{from:`Indore`,to:`Bhopal Capital City`,distance:`195 KM`,duration:`3.5 Hours`,recommended:`Honda City / Creta / Ertiga`,tollEstimate:`₹240 (4-Lane Super Corridor)`,priceEstimate:`₹4,400 One Way / Day`},{from:`Indore`,to:`Indore Airport (IDR)`,distance:`12 KM`,duration:`25 Minutes`,recommended:`Maruti Ertiga / Sedan`,tollEstimate:`Zero Toll`,priceEstimate:`₹1,399 Express Drop`}],F=[{title:`Ujjain Mahakal Bhasma Aarti Special`,subtitle:`VIP Pilgrimage Day Trip`,places:[`Mahakaleshwar Temple`,`Harsiddhi Mata Mandir`,`Kal Bhairav Temple`,`Ram Ghat Aarti`],duration:`1 Full Day (12 Hours)`,car:`Maruti Ertiga 7-Seater`,price:`₹3,500 All Inclusive`},{title:`Omkareshwar & Mamleshwar Darshan`,subtitle:`Narmada Ghat Pilgrimage`,places:[`Omkareshwar Jyotirlinga`,`Mamleshwar Temple`,`Narmada Sangam Boat Ride`],duration:`1 Day Trip`,car:`Maruti XL6 / Innova`,price:`₹3,800 All Inclusive`},{title:`Mandu Heritage & Maheshwar Fort`,subtitle:`Royal Architecture Tour`,places:[`Jahaz Mahal`,`Hindola Mahal`,`Rupmati Pavilion`,`Maheshwar Ahilya Fort & Ghats`],duration:`1 Day / 2 Days Option`,car:`Toyota Innova Crysta`,price:`₹4,800 Full Package`}],I=0,L=0,R=()=>{let t=e.slice(0,3),n=P[I],r=F[L];return`
    <div class="page-home animate-fade-in">
      ${ue()}

      <!-- Featured Vehicles Section -->
      <section class="container section-padding">
        <div class="section-header-flex">
          <div>
            <span class="hero-tag">🚘 Featured Selection</span>
            <h2 class="section-title">Top Rated Vehicles</h2>
          </div>
          <button id="viewAllFleetBtn" class="btn-primary">
            Explore All Cars →
          </button>
        </div>

        <div class="car-grid">
          ${t.map(e=>N(e)).join(``)}
        </div>
      </section>

      <!-- Popular Route Estimator Box -->
      <section class="container section-padding">
        <div class="glass-card home-card-box">
          <div class="box-center-header">
            <span class="hero-tag">🗺️ Instant Route Guide</span>
            <h2 class="box-title">
              Popular Destinations & Highway Route Estimator
            </h2>
            <p class="box-desc">
              Select a popular destination from Indore to view estimated distance, drive duration, and flat trip fare.
            </p>
          </div>

          <div class="route-tabs-container">
            ${P.map((e,t)=>`
              <button class="route-tab-btn ${t===I?`active`:``}" data-index="${t}">
                📍 ${e.to}
              </button>
            `).join(``)}
          </div>

          <div class="route-estimator-grid">
            <div class="estimator-item">
              <span class="item-label">Trip Route</span>
              <strong class="item-val-title">${n.from} ➔ ${n.to}</strong>
            </div>

            <div class="estimator-item">
              <span class="item-label">Distance & Duration</span>
              <strong class="item-val-blue">
                ${_(16,`#2563eb`)} ${n.distance} • ${T(16,`#2563eb`)} ${n.duration}
              </strong>
            </div>

            <div class="estimator-item">
              <span class="item-label">Recommended Vehicle</span>
              <strong class="item-val-dark">
                ${h(16,`#0f172a`)} ${n.recommended}
              </strong>
            </div>

            <div class="estimator-item">
              <span class="item-label">Estimated Package Fare</span>
              <strong class="item-val-green">${n.priceEstimate}</strong>
            </div>

            <div class="estimator-action">
              <a href="${m(`Hello! I want to reserve a vehicle for the ${n.from} to ${n.to} trip (${n.distance}).`)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                ${x(16,`#ffffff`)} Book This Route
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Pilgrimage & Tour Itinerary Planner -->
      <section class="container section-padding">
        <div class="glass-card home-card-box border-blue">
          <div class="itinerary-header-flex">
            <div>
              <span class="hero-tag tag-blue">🚩 Custom Itinerary Planner</span>
              <h3 class="box-title margin-top-sm">Top Recommended Pilgrimage & Tour Packages</h3>
            </div>

            <div class="itinerary-tabs">
              ${F.map((e,t)=>`
                <button class="itinerary-tab-btn ${t===L?`active`:``}" data-index="${t}">
                  ${e.title.split(` `)[0]} Tour
                </button>
              `).join(``)}
            </div>
          </div>

          <div class="itinerary-planner-grid">
            <div class="itinerary-left-info">
              <span class="subtitle-blue">${r.subtitle}</span>
              <h4 class="itinerary-title">${r.title}</h4>

              <div class="sights-box">
                <span class="sights-label">Key Sights Included in Sightseeing:</span>
                <div class="sights-pills-wrap">
                  ${r.places.map(e=>`
                    <span class="sight-pill">
                      ${E(12,`#059669`)} ${e}
                    </span>
                  `).join(``)}
                </div>
              </div>

              <div class="itinerary-meta-row">
                <span>⏱️ <strong>Duration:</strong> ${r.duration}</span>
                <span>🚘 <strong>Vehicle:</strong> ${r.car}</span>
              </div>
            </div>

            <div class="itinerary-right-card">
              <span class="rate-label">Package Total Rate</span>
              <div class="package-rate-val">${r.price}</div>
              <a href="${m(`Hello! I want to book the ${r.title} package (${r.price}).`)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp width-full">
                📲 Book Custom Package
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Customer Satisfaction Stats Strip -->
      <section class="container section-padding">
        <div class="home-stats-strip">
          <div class="stat-box">
            <strong class="stat-number blue-num">1,200+</strong>
            <span class="stat-desc">Outstation Trips Served</span>
          </div>

          <div class="stat-box">
            <strong class="stat-number amber-num">
              4.95 ${v(18,`#f59e0b`)}
            </strong>
            <span class="stat-desc">Customer Love Rating</span>
          </div>

          <div class="stat-box">
            <strong class="stat-number green-num">100%</strong>
            <span class="stat-desc">Police Verified Drivers</span>
          </div>

          <div class="stat-box">
            <strong class="stat-number sky-num">24x7</strong>
            <span class="stat-desc">On-Call Desk Assistance</span>
          </div>
        </div>
      </section>
    </div>
  `},z=()=>{de(),document.querySelector(`#viewAllFleetBtn`)?.addEventListener(`click`,()=>{u.setRoute(`fleet`)}),document.querySelectorAll(`.route-tab-btn`).forEach(e=>{e.addEventListener(`click`,e=>{I=Number(e.currentTarget.dataset.index);let t=document.querySelector(`.page-home`);t&&(t.outerHTML=R(),z())})}),document.querySelectorAll(`.itinerary-tab-btn`).forEach(e=>{e.addEventListener(`click`,e=>{L=Number(e.currentTarget.dataset.index);let t=document.querySelector(`.page-home`);t&&(t.outerHTML=R(),z())})}),document.querySelectorAll(`.fav-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=Number(e.currentTarget.dataset.carId);u.toggleFavorite(t)})}),document.querySelectorAll(`.compare-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=Number(e.currentTarget.dataset.carId);u.toggleCompare(t)})}),document.querySelectorAll(`.quick-view-btn`).forEach(t=>{t.addEventListener(`click`,t=>{let n=Number(t.currentTarget.dataset.carId),r=e.find(e=>e.id===n);r&&u.openDetailModal(r)})})},B=()=>{let{filters:e}=u;return`
    <div class="glass-card filter-bar">
      <div class="filter-pills">
        ${[`All`,`Family`,`SUV`,`Sedan`,`Premium`].map(t=>`
          <button class="filter-pill ${e.selectedType===t?`active`:``}" data-category="${t}">
            ${t===`All`?`🚘 All Fleet`:t}
          </button>
        `).join(``)}
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <input type="text" id="carSearchInput" placeholder="🔍 Search car by name..." value="${e.searchQuery}" style="width: 200px;" />

        <select id="sortBySelect" style="width: 160px;">
          <option value="recommended" ${e.sortBy===`recommended`?`selected`:``}>⭐ Recommended</option>
          <option value="price-low" ${e.sortBy===`price-low`?`selected`:``}>Price: Low to High</option>
          <option value="price-high" ${e.sortBy===`price-high`?`selected`:``}>Price: High to Low</option>
          <option value="rating" ${e.sortBy===`rating`?`selected`:``}>Top Rated</option>
        </select>

        <select id="seatFilterSelect" style="width: 140px;">
          <option value="All" ${e.selectedSeats===`All`?`selected`:``}>Seats: All</option>
          <option value="5" ${e.selectedSeats===5?`selected`:``}>5 Seater</option>
          <option value="6" ${e.selectedSeats===6?`selected`:``}>6 Seater</option>
          <option value="7" ${e.selectedSeats===7?`selected`:``}>7 Seater</option>
        </select>
      </div>
    </div>
  `},V=()=>{document.querySelectorAll(`.filter-pill`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.category;u.setFilters({selectedType:t})})}),document.querySelector(`#carSearchInput`)?.addEventListener(`input`,e=>{let t=e.target.value;u.setFilters({searchQuery:t})}),document.querySelector(`#sortBySelect`)?.addEventListener(`change`,e=>{let t=e.target.value;u.setFilters({sortBy:t})}),document.querySelector(`#seatFilterSelect`)?.addEventListener(`change`,e=>{let t=e.target.value,n=t===`All`?`All`:Number(t);u.setFilters({selectedSeats:n})})},H=()=>{let e=u.getFilteredCars();return`
    <section id="fleet" class="container" style="padding: 60px 0;">
      <div class="section-header" style="text-align: center;">
        <span class="hero-tag">🚘 Verified Fleet</span>
        <h2>Choose Your Perfect Travel Companion</h2>
        <p style="color: var(--text-secondary); max-width: 600px; margin: 8px auto 0;">
          All cars are deep-cleaned, equipped with high AC cooling, dual airbags & luxury seating.
        </p>
      </div>

      ${B()}

      ${e.length===0?`
        <div class="glass-card" style="padding: 60px; text-align: center; margin-top: 24px;">
          <h3 style="font-size: 1.5rem; margin-bottom: 12px;">No vehicles match your search filter</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px;">Try clearing filters or searching for another keyword like "Ertiga" or "7 Seater".</p>
          <button id="resetFiltersBtn" class="btn-primary">Reset Filters</button>
        </div>
      `:`
        <div class="car-grid">
          ${e.map(e=>N(e)).join(``)}
        </div>
      `}
    </section>
  `},fe=()=>{V(),document.querySelector(`#resetFiltersBtn`)?.addEventListener(`click`,()=>{u.setFilters({searchQuery:``,selectedType:`All`,selectedSeats:`All`,selectedTransmission:`All`,selectedFuel:`All`,maxPrice:8e3})}),document.querySelectorAll(`.fav-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=Number(e.currentTarget.dataset.carId);u.toggleFavorite(t)})}),document.querySelectorAll(`.compare-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation();let t=Number(e.currentTarget.dataset.carId);u.toggleCompare(t)})}),document.querySelectorAll(`.quick-view-btn`).forEach(t=>{t.addEventListener(`click`,t=>{let n=Number(t.currentTarget.dataset.carId),r=e.find(e=>e.id===n);r&&u.openDetailModal(r)})})},pe=()=>{let e=u.getFilteredCars(),t=u.favorites.length,n=u.compareList.length;return`
    <div class="page-fleet animate-fade-in" style="padding-bottom: 50px;">
      <section class="container" style="padding-top: 30px;">
        
        <!-- Breathtaking 2-Column Luxury Fleet Hero Banner -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%); color: #ffffff; padding: 44px 36px; border-radius: 28px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.12); border-top: 4px solid #2563eb; box-shadow: 0 20px 50px rgba(15,23,42,0.18);">
          <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center;">
            
            <!-- Left Column: Title & Wishlist/Compare Counters -->
            <div>
              <span style="background: rgba(37, 99, 235, 0.2); border: 1px solid rgba(96, 165, 250, 0.4); color: #60a5fa; font-weight: 800; font-size: 0.78rem; padding: 5px 14px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px;">
                ${h(16,`#60a5fa`)} VERIFIED LUXURY FLEET DIRECTORY
              </span>

              <h1 style="font-size: 2.4rem; font-weight: 900; color: #ffffff; margin-top: 10px; letter-spacing: -0.6px;">
                Explore Verified Fleet
              </h1>

              <p style="color: #cbd5e1; font-size: 0.95rem; margin-top: 8px; line-height: 1.6; max-width: 520px;">
                Sanitized 5-seater sedans, 6-seater XL6 captain suites, 7-seater Ertiga/Innova & 4x4 Fortuner available for instant reservation.
              </p>

              <div style="display: flex; gap: 12px; margin-top: 22px; flex-wrap: wrap;">
                <button id="showFavOnlyBtn" class="btn-secondary" style="background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); color: #ffffff; padding: 8px 14px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">
                  ${S(16,!0)} Saved Wishlist: <strong style="color: #38bdf8;">${t} Cars</strong>
                </button>

                <button id="openCompareTriggerBtn" class="btn-secondary" style="background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); color: #ffffff; padding: 8px 14px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px;">
                  ${D(16,`#4ade80`)} Compare Tool: <strong style="color: #4ade80;">${n} Selected</strong>
                </button>
              </div>
            </div>

            <!-- Right Column: NEW Luxury Fleet Guarantees Grid -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
              
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 16px; backdrop-filter: blur(8px);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  ${w(18,`#60a5fa`)}
                  <strong style="font-size: 0.88rem; color: #ffffff;">Deep Sanitized</strong>
                </div>
                <span style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.4; display: block;">Cleaned & disinfected before every single pickup.</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 16px; backdrop-filter: blur(8px);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  ${C(18,`#4ade80`)}
                  <strong style="font-size: 0.88rem; color: #ffffff;">Police Verified</strong>
                </div>
                <span style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.4; display: block;">Uniformed chauffeurs with 5+ yrs highway experience.</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 16px; backdrop-filter: blur(8px);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  ${T(18,`#38bdf8`)}
                  <strong style="font-size: 0.88rem; color: #ffffff;">On-Time Arrival</strong>
                </div>
                <span style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.4; display: block;">15-min early arrival for zero travel delays.</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 16px; backdrop-filter: blur(8px);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  ${E(18,`#f59e0b`)}
                  <strong style="font-size: 0.88rem; color: #ffffff;">Fixed Billing</strong>
                </div>
                <span style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.4; display: block;">Transparent daily rates with zero hidden charges.</span>
              </div>

            </div>

          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; color: #64748b; font-size: 0.88rem; font-weight: 700;">
          <span>Showing ${e.length} Verified Vehicles</span>
          ${u.compareList.length>0?`
            <button id="openCompareModalTrigger" class="btn-secondary" style="padding: 4px 12px; font-size: 0.8rem;">
              ⚖️ Open Compare Window (${u.compareList.length})
            </button>
          `:``}
        </div>

        ${H()}
      </section>
    </div>
  `},me=()=>{fe(),document.querySelector(`#showFavOnlyBtn`)?.addEventListener(`click`,()=>{u.favorites.length===0?u.showToast(`You have no saved favorite cars yet. Click the heart on any vehicle card!`,`info`):u.showToast(`Showing ${u.favorites.length} saved vehicles in your wishlist`,`success`)}),document.querySelector(`#openCompareTriggerBtn`)?.addEventListener(`click`,()=>{u.openCompareModal()}),document.querySelector(`#openCompareModalTrigger`)?.addEventListener(`click`,()=>{u.openCompareModal()})},he=[{title:`🛕 Ujjain Mahakal Bhasma Aarti Trip`,location:`Mahakaleshwar Temple, Ujjain`,car:`Maruti Suzuki Ertiga 7-Seater`,image:`https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80`},{title:`🌊 Omkareshwar Narmada Sangam Darshan`,location:`Omkareshwar Jyotirlinga, MP`,car:`Toyota Innova Crysta Z`,image:`https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80`},{title:`🏛️ Mandu & Maheshwar Ahilya Fort`,location:`Maheshwar Ghats, MP`,car:`Maruti XL6 Captain Suite`,image:`https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80`},{title:`✈️ Indore Airport VIP Transfer`,location:`Indore Airport (IDR)`,car:`Honda City ZX Executive`,image:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80`}],ge=()=>`
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
            ${w(26,`#2563eb`)}
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Sanitized & Deep Cleaned Fleet</h3>
          <p style="color: #475569; font-size: 0.88rem; line-height: 1.65;">
            Every vehicle undergoes a multi-point safety check and interior sanitization before every single pickup.
          </p>
        </div>

        <div class="glass-card" style="padding: 28px; border-top: 4px solid #2563eb; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
            ${T(26,`#2563eb`)}
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; color: #0f172a;">On-Time Pick-up Guarantee</h3>
          <p style="color: #475569; font-size: 0.88rem; line-height: 1.65;">
            Your driver arrives 15 minutes before scheduled departure time so your airport flight or trip is never delayed.
          </p>
        </div>

        <div class="glass-card" style="padding: 28px; border-top: 4px solid #059669; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(5,150,105,0.08); border: 1px solid rgba(5,150,105,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
            ${E(26,`#059669`)}
          </div>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Zero Hidden Surcharges</h3>
          <p style="color: #475569; font-size: 0.88rem; line-height: 1.65;">
            Transparent line-item billing for base fare, driver allowance, and tolls with zero surprise charges.
          </p>
        </div>

        <div class="glass-card" style="padding: 28px; border-top: 4px solid #2563eb; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 18px;">
            ${C(26,`#2563eb`)}
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
          ${he.map(e=>`
            <div class="glass-card" style="overflow: hidden; background: #ffffff;">
              <div style="height: 160px; overflow: hidden; position: relative;">
                <img src="${e.image}" alt="${e.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" />
                <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(15,23,42,0.85); color: #ffffff; font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; backdrop-filter: blur(4px);">
                  📍 ${e.location}
                </span>
              </div>
              <div style="padding: 16px;">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: #0f172a; margin-bottom: 4px;">${e.title}</h4>
                <span style="font-size: 0.78rem; color: #2563eb; font-weight: 700;">🚘 ${e.car}</span>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Performance Comparison Matrix Box -->
      <div class="glass-card" style="padding: 36px; background: #ffffff; margin-bottom: 20px; border-radius: 24px; border: 1px solid #e2e8f0; box-shadow: 0 10px 35px rgba(15, 23, 42, 0.06);">
        <div style="text-align: center; margin-bottom: 28px;">
          <span style="background: #fef3c7; color: #b45309; font-size: 0.78rem; font-weight: 800; padding: 5px 14px; border-radius: 9999px; border: 1px solid #fde68a; display: inline-flex; align-items: center; gap: 6px;">
            ${D(14,`#b45309`)} PERFORMANCE COMPARISON
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
                  <span style="display:inline-flex; align-items:center; gap:6px;">${E(16,`#059669`)} Deep Sanitized Before Ride</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ Unverified & Dusty Interiors
                </td>
              </tr>

              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">Chauffeur Credentials</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${E(16,`#059669`)} 100% Police Verified Drivers</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ Random Unchecked Drivers
                </td>
              </tr>

              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">Fare Integrity</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${E(16,`#059669`)} Guaranteed Fixed Rates</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ Surprise Surcharges Added
                </td>
              </tr>

              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">Vehicle Condition</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${E(16,`#059669`)} Showroom Fresh (&lt;3 Yrs)</span>
                </td>
                <td style="padding: 14px 20px; color: #dc2626; font-weight: 600; background: #ffffff;">
                  ❌ High-Mileage Worn Cars
                </td>
              </tr>

              <tr>
                <td style="padding: 14px 20px; font-weight: 700; color: #0f172a; background: #ffffff;">24x7 Travel Support</td>
                <td style="padding: 14px 20px; font-weight: 800; color: #059669; background: #f0fdf4; border-left: 2px solid #bfdbfe; border-right: 2px solid #bfdbfe;">
                  <span style="display:inline-flex; align-items:center; gap:6px;">${E(16,`#059669`)} Dedicated Desk Manager</span>
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
  `,_e=()=>`
    <div class="page-why-us animate-fade-in" style="padding-bottom: 50px;">
      <section class="container" style="padding-top: 30px;">
        
        <!-- Breathtaking 2-Column Luxury Hero Banner Container -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%); color: #ffffff; padding: 48px 40px; border-radius: 28px; margin-bottom: 32px; border: 1px solid rgba(255,255,255,0.12); border-top: 4px solid #2563eb; box-shadow: 0 25px 60px rgba(15,23,42,0.22); position: relative;">
          
          <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 36px; align-items: center;">
            
            <!-- Left Column: Content & Buttons -->
            <div style="text-align: left;">
              <span style="background: rgba(37, 99, 235, 0.2); border: 1px solid rgba(96, 165, 250, 0.4); color: #60a5fa; font-weight: 800; font-size: 0.78rem; padding: 6px 16px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.8px;">
                ${w(16,`#60a5fa`)} SAFETY & INTEGRITY STANDARD
              </span>

              <h1 style="font-size: 2.6rem; font-weight: 900; color: #ffffff; margin-top: 14px; letter-spacing: -0.8px; line-height: 1.2;">
                Why Smart Travelers Pick <span style="color: #60a5fa;">Ertiga Ride</span>
              </h1>

              <p style="color: #cbd5e1; font-size: 1.02rem; margin-top: 14px; line-height: 1.65; max-width: 560px;">
                From Narmada & Mahakal pilgrimages to corporate road trips, discover our 100% police-verified chauffeur guarantee and transparent pricing framework.
              </p>

              <div style="display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap;">
                <a href="${m()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 12px 24px; font-size: 0.92rem; display: inline-flex; align-items: center; gap: 8px;">
                  ${x(18,`#ffffff`)} Speak to Travel Desk Manager
                </a>
                
                <a href="tel:9981264216" class="btn-secondary" style="padding: 12px 22px; font-size: 0.92rem; background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); color: #ffffff; display: inline-flex; align-items: center; gap: 8px;">
                  ${b(16,`#ffffff`)} Call Desk
                </a>
              </div>
            </div>

            <!-- Right Column: Interactive Stat Pillars Grid -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
              
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px; border-radius: 18px; text-align: center; backdrop-filter: blur(8px);">
                <strong style="font-size: 1.9rem; font-weight: 900; color: #60a5fa; display: block;">1,200+</strong>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600; margin-top: 2px; display: block;">Trips Completed</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px; border-radius: 18px; text-align: center; backdrop-filter: blur(8px);">
                <strong style="font-size: 1.9rem; font-weight: 900; color: #f59e0b; display: flex; align-items: center; justify-content: center; gap: 4px;">
                  4.95 ${v(18,`#f59e0b`)}
                </strong>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600; margin-top: 2px; display: block;">Customer Rating</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px; border-radius: 18px; text-align: center; backdrop-filter: blur(8px);">
                <strong style="font-size: 1.9rem; font-weight: 900; color: #4ade80; display: block;">100%</strong>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600; margin-top: 2px; display: block;">Verified Drivers</span>
              </div>

              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 20px; border-radius: 18px; text-align: center; backdrop-filter: blur(8px);">
                <strong style="font-size: 1.9rem; font-weight: 900; color: #38bdf8; display: block;">24x7</strong>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600; margin-top: 2px; display: block;">Desk Support</span>
              </div>

            </div>

          </div>

        </div>

        ${ge()}
      </section>
    </div>
  `,U=[{id:1,question:`Are driver allowance and night charges included in the fare?`,answer:`Yes! All driver allowances are transparently specified. Optional driver allowance (+₹500/day) covers driver food and night halts for outstation highway trips.`,category:`Pricing`},{id:2,question:`How do I book a vehicle for Ujjain Mahakal Bhasma Aarti?`,answer:`Simply select your trip date in the Quick Estimator or contact our 24x7 travel desk on WhatsApp. We provide early 3:00 AM pickup from Indore to Ujjain Mahakaleshwar Temple.`,category:`Booking`},{id:3,question:`Are your vehicles sanitized and police verified?`,answer:`100% Guaranteed! Every vehicle is deep-cleaned and interior-sanitized before every pickup. All chauffeurs hold valid commercial licenses and undergo police verification.`,category:`Vehicles`},{id:4,question:`What is the luggage capacity for Maruti Ertiga vs Innova Crysta?`,answer:`Maruti Ertiga comfortably fits 3 large bags with 7 passengers. Toyota Innova Crysta fits up to 4 large suitcases + hand luggage with roof carrier options.`,category:`Vehicles`},{id:5,question:`What happens if my flight to Indore Airport is delayed?`,answer:`No worries! Our chauffeur monitors flight arrival status at Indore (IDR) Airport and waits up to 60 minutes free of charge for flight delays.`,category:`Support`},{id:6,question:`What is your cancellation and refund policy?`,answer:`Cancellations made 24 hours prior to scheduled departure receive a 100% full refund with zero cancellation penalty.`,category:`Booking`},{id:7,question:`Are toll tax and state border taxes included?`,answer:`State highway toll tax and FASTag charges are billed transparently at actual toll plaza costs with zero hidden markup.`,category:`Pricing`}],W=``,G=`All`,K=()=>{let e=[`All`,`Booking`,`Pricing`,`Vehicles`,`Support`],t=U.filter(e=>{if(G!==`All`&&e.category!==G)return!1;if(W.trim()){let t=W.toLowerCase();return e.question.toLowerCase().includes(t)||e.answer.toLowerCase().includes(t)}return!0});return`
    <div class="page-faqs animate-fade-in" style="padding-bottom: 60px;">
      <section class="container" style="padding-top: 30px;">
        
        <!-- FAQ Sleek Hero Header Banner -->
        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #ffffff; padding: 44px 30px; border-radius: 24px; margin-bottom: 28px; text-align: center; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 12px 35px rgba(15,23,42,0.12);">
          <span class="hero-tag" style="background: rgba(37, 99, 235, 0.2); border: 1px solid rgba(96, 165, 250, 0.4); color: #60a5fa; margin-bottom: 12px;">
            ❓ 24x7 Help Center
          </span>
          <h1 style="font-size: 2.3rem; font-weight: 900; color: #ffffff; margin-top: 6px;">
            Frequently Asked Questions
          </h1>
          <p style="color: #cbd5e1; font-size: 0.98rem; max-width: 620px; margin: 10px auto 0; line-height: 1.6;">
            Find instant answers to trip bookings, driver allowances, Bhasma Aarti timing, toll taxes, and cancellation policies.
          </p>

          <!-- Interactive Live Search Input -->
          <div style="max-width: 500px; margin: 24px auto 0; position: relative;">
            <input 
              type="text" 
              id="faqSearchInput" 
              placeholder="Search questions (e.g. Mahakal, toll, cancellation, driver)..." 
              value="${W}" 
              style="width: 100%; padding: 13px 18px 13px 44px; border-radius: 12px; border: 1px solid #cbd5e1; font-size: 0.92rem; outline: none; background: #ffffff; color: #0f172a; box-shadow: 0 4px 14px rgba(0,0,0,0.1);"
            />
            <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #64748b;">
              ${ee(18,`#2563eb`)}
            </div>
          </div>
        </div>

        <!-- FAQ Category Filter Tabs -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 28px;">
          ${e.map(e=>`
            <button class="faq-cat-btn ${e===G?`active`:``}" data-cat="${e}" style="padding: 8px 20px; border-radius: 9999px; font-size: 0.88rem; font-weight: 800; border: 1px solid ${e===G?`#0f172a`:`#cbd5e1`}; background: ${e===G?`#0f172a`:`#ffffff`}; color: ${e===G?`#ffffff`:`#475569`}; cursor: pointer; transition: all 0.2s ease;">
              ${e}
            </button>
          `).join(``)}
        </div>

        <!-- FAQ Accordion Container -->
        <div style="max-width: 820px; margin: 0 auto 40px;">
          ${t.length>0?t.map(e=>`
            <div class="faq-item glass-card" style="border-radius: 16px; margin-bottom: 14px; border: 1px solid #e2e8f0; overflow: hidden; background: #ffffff;">
              <button class="faq-question-btn" data-faq-id="${e.id}" style="width: 100%; text-align: left; padding: 18px 22px; font-size: 1rem; font-weight: 800; display: flex; justify-content: space-between; align-items: center; background: #ffffff; border: none; cursor: pointer; color: #0f172a; transition: background 0.2s ease;">
                <span style="display: flex; align-items: center; gap: 12px;">
                  <span style="background: #eff6ff; color: #2563eb; font-size: 0.72rem; padding: 4px 10px; border-radius: 6px; font-weight: 800; border: 1px solid #bfdbfe;">
                    ${e.category}
                  </span>
                  <span>${e.question}</span>
                </span>
                <div class="faq-toggle-badge" style="width: 28px; height: 28px; border-radius: 50%; background: #f1f5f9; display: grid; place-items: center; font-size: 1.1rem; color: #2563eb; font-weight: 800; transition: transform 0.25s ease;">
                  +
                </div>
              </button>
              
              <div class="faq-answer-body" id="faqAnswer-${e.id}" style="display: none; padding: 16px 22px 20px; color: #475569; font-size: 0.92rem; line-height: 1.65; border-top: 1px dashed #e2e8f0; background: #fafafa;">
                ${e.answer}
              </div>
            </div>
          `).join(``):`
            <div class="glass-card" style="text-align: center; padding: 50px 20px; background: #ffffff; border-radius: 20px;">
              <h3 style="font-size: 1.2rem; font-weight: 800; color: #0f172a;">No matching questions found</h3>
              <p style="color: #64748b; font-size: 0.9rem; margin-top: 6px;">Try searching for another keyword or ask our travel desk directly on WhatsApp.</p>
            </div>
          `}
        </div>

        <!-- Direct Support CTA Box -->
        <div class="glass-card" style="padding: 32px; text-align: center; max-width: 660px; margin: 0 auto; background: #ffffff; border-radius: 24px; border: 1.5px solid #2563eb; box-shadow: 0 10px 30px rgba(15,23,42,0.06);">
          <span style="background: #d1fae5; color: #065f46; font-size: 0.78rem; font-weight: 800; padding: 4px 12px; border-radius: 9999px;">
            ⚡ INSTANT HUMAN ASSISTANCE
          </span>
          <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-top: 10px;">Have a Custom Travel Question?</h3>
          <p style="color: #64748b; font-size: 0.9rem; margin: 6px 0 20px; line-height: 1.6;">
            Our 24x7 travel desk managers in Indore are available on WhatsApp or phone call for immediate help.
          </p>

          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <a href="${m()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="display: inline-flex; align-items: center; gap: 8px;">
              ${x(18,`#ffffff`)} Chat Live on WhatsApp
            </a>
            <a href="tel:9981264216" class="btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
              ${b(16,`#0f172a`)} Call +91 9981264216
            </a>
          </div>
        </div>

      </section>
    </div>
  `},q=()=>{let e=document.querySelector(`#faqSearchInput`);if(e){e.focus();let t=e.value.length;e.setSelectionRange(t,t)}e?.addEventListener(`input`,e=>{W=e.target.value;let t=document.querySelector(`.page-faqs`);t&&(t.outerHTML=K(),q())}),document.querySelectorAll(`.faq-cat-btn`).forEach(e=>{e.addEventListener(`click`,e=>{G=e.currentTarget.dataset.cat||`All`;let t=document.querySelector(`.page-faqs`);t&&(t.outerHTML=K(),q())})}),document.querySelectorAll(`.faq-question-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.faqId,n=document.querySelector(`#faqAnswer-${t}`),r=e.currentTarget.querySelector(`.faq-toggle-badge`);if(n){let e=n.style.display===`block`;n.style.display=e?`none`:`block`,r&&(r.textContent=e?`+`:`−`,r.style.background=e?`#f1f5f9`:`#eff6ff`)}})})},ve=()=>`
    <section id="contact" class="container" style="padding: 20px 0 40px;">
      
      <!-- 3 Luxury Direct Contact Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 36px;">
        
        <div class="glass-card" style="padding: 26px; border-top: 4px solid #2563eb; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            ${b(24,`#2563eb`)}
          </div>
          <span style="font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Direct Line</span>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 2px 0 6px;">Call Desk Manager</h3>
          <a href="tel:9981264216" style="font-size: 1.1rem; font-weight: 900; color: #2563eb; display: block; margin-bottom: 8px;">
            +91 9981264216
          </a>
          <p style="font-size: 0.82rem; color: #64748b; line-height: 1.5;">Available 24 Hours / 7 Days for instant bookings & flight pickups.</p>
        </div>

        <div class="glass-card" style="padding: 26px; border-top: 4px solid #25d366; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.25); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            ${x(26,`#25d366`)}
          </div>
          <span style="font-size: 0.75rem; color: #059669; font-weight: 800; text-transform: uppercase;">🟢 Online Now</span>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 2px 0 6px;">WhatsApp Support</h3>
          <a href="${m()}" target="_blank" rel="noopener noreferrer" style="font-size: 0.95rem; font-weight: 800; color: #128c7e; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 8px;">
            Open Instant WhatsApp Chat →
          </a>
          <p style="font-size: 0.82rem; color: #64748b; line-height: 1.5;">Get customized itinerary quotes within 60 seconds.</p>
        </div>

        <div class="glass-card" style="padding: 26px; border-top: 4px solid #0f172a; background: #ffffff;">
          <div style="width: 52px; height: 52px; border-radius: 14px; background: rgba(15,23,42,0.06); border: 1px solid rgba(15,23,42,0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            ${_(24,`#0f172a`)}
          </div>
          <span style="font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Central Hub</span>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 2px 0 6px;">Indore Main Office</h3>
          <p style="font-size: 0.88rem; font-weight: 700; color: #334155; margin-bottom: 6px;">Vijay Nagar & Airport Road, Indore (M.P.)</p>
          <p style="font-size: 0.82rem; color: #64748b; line-height: 1.5;">Serving Indore, Ujjain, Omkareshwar, Bhopal & Pan-India.</p>
        </div>

      </div>

      <!-- Main Contact Form & Trust Features Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; align-items: start;">
        
        <!-- Left: Verified Guarantees Card -->
        <div class="glass-card" style="padding: 32px; background: #ffffff; border-radius: 20px;">
          <span class="hero-tag" style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8; margin-bottom: 12px;">
            🛡️ Verified Booking Desk
          </span>
          <h3 style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin-top: 6px;">
            Why Book Directly With Us?
          </h3>
          <p style="color: #64748b; font-size: 0.9rem; line-height: 1.6; margin-top: 8px; margin-bottom: 20px;">
            Avoid third-party agent commissions. Get direct vehicle driver numbers, clean sanitized cars, and zero hidden fees guarantee.
          </p>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(37,99,235,0.08); display: grid; place-items: center; flex-shrink: 0;">
                ${w(20,`#2563eb`)}
              </div>
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0f172a;">100% Police Verified Chauffeurs</strong>
                <span style="font-size: 0.82rem; color: #64748b;">All drivers hold commercial licenses & police verification badges.</span>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(5,150,105,0.08); display: grid; place-items: center; flex-shrink: 0;">
                ${T(20,`#059669`)}
              </div>
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0f172a;">Guaranteed Early Pickups</strong>
                <span style="font-size: 0.82rem; color: #64748b;">Punctual 3:00 AM pickups for Ujjain Mahakal Bhasma Aarti.</span>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 12px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(37,99,235,0.08); display: grid; place-items: center; flex-shrink: 0;">
                ${b(20,`#2563eb`)}
              </div>
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0f172a;">24x7 Flight Tracking</strong>
                <span style="font-size: 0.82rem; color: #64748b;">Free 60-minute driver waiting time for delayed flights at Indore Airport.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Validated Callback Form -->
        <form id="leadContactForm" class="glass-card" style="padding: 32px; background: #ffffff; border-radius: 20px; border: 1.5px solid #2563eb; box-shadow: 0 12px 35px rgba(15,23,42,0.08);" novalidate>
          <div style="margin-bottom: 18px;">
            <span style="background: #eff6ff; color: #2563eb; font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 9999px; border: 1px solid #bfdbfe;">
              ⚡ INSTANT QUOTE REQUEST
            </span>
            <h3 style="font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-top: 6px;">Request Customized Fare Quote</h3>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div class="form-group">
              <label for="leadName">Full Name *</label>
              <input type="text" id="leadName" placeholder="Enter your full name" required />
              <div id="leadNameError" class="error-text" style="display:none;"></div>
            </div>

            <div class="form-group">
              <label for="leadPhone">10-Digit Indian Mobile Number *</label>
              <input type="tel" id="leadPhone" placeholder="Enter 10-digit mobile number" required maxLength="10" />
              <div id="leadPhoneError" class="error-text" style="display:none;"></div>
            </div>

            <div class="form-group">
              <label for="leadService">Travel Category</label>
              <select id="leadService">
                <option value="Outstation Highway Trip">Outstation Highway Rental</option>
                <option value="Ujjain Mahakal Pilgrimage">Ujjain Mahakal Pilgrimage</option>
                <option value="Omkareshwar Narmada Trip">Omkareshwar Narmada Trip</option>
                <option value="Indore Airport Transfer">Airport Pickup / Drop</option>
                <option value="Wedding Motorcade Travel">Wedding & Event Escort</option>
              </select>
            </div>

            <div class="form-group">
              <label for="leadMsg">Trip Details & Travel Dates *</label>
              <textarea id="leadMsg" rows="3" placeholder="Destination, travel date, number of passengers..." required></textarea>
              <div id="leadMsgError" class="error-text" style="display:none;"></div>
            </div>

            <button type="submit" class="btn-whatsapp" style="justify-content: center; padding: 12px; font-size: 0.92rem; margin-top: 4px;">
              🚀 Submit Booking Request via WhatsApp
            </button>
          </div>
        </form>

      </div>
    </section>
  `,ye=()=>{let e=document.querySelector(`#leadContactForm`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=document.querySelector(`#leadName`),r=document.querySelector(`#leadPhone`),i=document.querySelector(`#leadService`),a=document.querySelector(`#leadMsg`),o=document.querySelector(`#leadNameError`),s=document.querySelector(`#leadPhoneError`),c=document.querySelector(`#leadMsgError`),l=!0;if(!n.value.trim()||n.value.trim().length<2?(n.classList.add(`input-error`),o&&(o.textContent=`Please enter your full name (at least 2 characters)`,o.style.display=`block`),l=!1):(n.classList.remove(`input-error`),o&&(o.style.display=`none`)),/^[6-9]\d{9}$/.test(r.value.trim())?(r.classList.remove(`input-error`),s&&(s.style.display=`none`)):(r.classList.add(`input-error`),s&&(s.textContent=`Please enter a valid 10-digit Indian mobile number`,s.style.display=`block`),l=!1),a.value.trim()?(a.classList.remove(`input-error`),c&&(c.style.display=`none`)):(a.classList.add(`input-error`),c&&(c.textContent=`Please enter trip details and dates`,c.style.display=`block`),l=!1),!l){u.showToast(`Please fix invalid fields in the contact form`,`warning`);return}let d=`🌟 *ERTIGA RIDE | DIRECT CALLBACK REQUEST* 🚘
-------------------------------------------------
Name: ${n.value.trim()}
Phone: ${r.value.trim()}
Service Needed: ${i.value}

Trip Details:
"${a.value.trim()}"

Please send vehicle availability and rate quotation. Thank you!`,f=`https://wa.me/919981264216?text=${encodeURIComponent(d)}`;u.showToast(`Validation successful! Opening WhatsApp chat...`,`success`),setTimeout(()=>{window.open(f,`_blank`)},600),e.reset()})},be=()=>`
    <div class="page-contact animate-fade-in" style="padding-bottom: 60px;">
      <section class="container" style="padding-top: 30px;">
        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #ffffff; padding: 44px 30px; border-radius: 24px; margin-bottom: 20px; text-align: center; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 12px 35px rgba(15,23,42,0.12);">
          <span class="hero-tag" style="background: rgba(37, 99, 235, 0.2); border: 1px solid rgba(96, 165, 250, 0.4); color: #60a5fa; margin-bottom: 12px;">
            📞 24x7 Direct Travel Desk
          </span>
          <h1 style="font-size: 2.3rem; font-weight: 900; color: #ffffff; margin-top: 6px;">
            Get in Touch With Our Travel Team
          </h1>
          <p style="color: #cbd5e1; font-size: 0.98rem; max-width: 620px; margin: 10px auto 0; line-height: 1.6;">
            Need a customized wedding fleet quote, Mahakal temple pilgrimage schedule, or corporate outstation rental? We are available 24x7 to assist you.
          </p>

          <div style="display: flex; gap: 12px; justify-content: center; margin-top: 22px; flex-wrap: wrap;">
            <a href="tel:9981264216" class="btn-primary" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #2563eb, #1d4ed8);">
              ${b(16,`#ffffff`)} Call +91 9981264216
            </a>
            <a href="${m()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="display: inline-flex; align-items: center; gap: 8px;">
              ${x(18,`#ffffff`)} WhatsApp Instant Chat
            </a>
          </div>
        </div>

        ${ve()}
      </section>
    </div>
  `,xe=()=>{ye()},J=0,Y=()=>{let{activeDetailCar:e,booking:n}=u;return e?`
    <div class="modal-overlay" id="carDetailModalOverlay">
      <div class="modal-content animate-fade-in" style="max-width: 760px;">
        <button class="modal-close" id="closeDetailModalBtn">&times;</button>

        <!-- Main Image Preview Frame -->
        <div style="position: relative; height: 260px; border-radius: 16px; overflow: hidden; margin-bottom: 12px; border: 1px solid #e2e8f0;">
          <img id="detailMainPreview" src="${e.gallery[J]?.url||e.image}" alt="${e.name}" style="width:100%; height:100%; object-fit:cover; transition: opacity 0.3s ease;" />
          <span class="card-badge" style="position:absolute; top:14px; left:14px;">${e.badge}</span>
        </div>

        <!-- Multi-Angle Thumbnail Tabs -->
        <div style="display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px;">
          ${e.gallery.map((e,t)=>`
            <button class="gallery-thumb-btn ${t===J?`active`:``}" data-index="${t}" style="padding: 6px 12px; border-radius: 8px; font-size: 0.78rem; font-weight: 700; border: 1.5px solid ${t===J?`#2563eb`:`#e2e8f0`}; background: ${t===J?`#eff6ff`:`#ffffff`}; color: ${t===J?`#1d4ed8`:`#475569`}; cursor: pointer; white-space: nowrap;">
              📸 ${e.label}
            </button>
          `).join(``)}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h2 style="font-size: 1.4rem; font-weight: 900; color: #0f172a;">${e.name}</h2>
          <div style="font-size:1.3rem; font-weight:900; color:#2563eb;">
            ${t(e.pricePerDay)} <span style="font-size:0.75rem; color:#64748b;">/ day</span>
          </div>
        </div>

        <p style="color: #64748b; font-size: 0.88rem; margin-bottom: 18px;">${e.tagline}</p>

        <!-- Technical Specs -->
        <h3 style="font-size:0.98rem; font-weight:800; margin-bottom:10px; color:#0f172a;">Technical Specifications</h3>
        <div class="specs-grid">
          <div class="spec-box">
            <span>Engine & Power</span>
            <strong>${e.specs.engine}</strong>
          </div>
          <div class="spec-box">
            <span>Fuel Efficiency</span>
            <strong>${e.specs.mileage}</strong>
          </div>
          <div class="spec-box">
            <span>Luggage Capacity</span>
            <strong>${e.specs.luggage}</strong>
          </div>
          <div class="spec-box">
            <span>Airbags & Safety</span>
            <strong>${e.specs.airbags} Airbags • Dual ABS</strong>
          </div>
        </div>

        <!-- Verified Chauffeur Profile Card -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; margin: 18px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              ${w(18,`#2563eb`)}
              <strong style="font-size: 0.92rem; color: #0f172a;">Assigned Chauffeur: ${e.chauffeur.name}</strong>
              <span style="background: #d1fae5; color: #065f46; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: 9999px;">
                ✓ Police Verified
              </span>
            </div>
            <div style="font-size: 0.8rem; color: #64748b;">
              ${e.chauffeur.experience} • Languages: ${e.chauffeur.languages.join(`, `)}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 4px; background: #fef3c7; color: #b45309; padding: 4px 10px; border-radius: 8px; font-weight: 800; font-size: 0.85rem;">
            ${v(14)} ${e.chauffeur.rating} / 5 Rating
          </div>
        </div>

        <!-- Key Features -->
        <h3 style="font-size:0.98rem; font-weight:800; margin-top:16px; margin-bottom:10px; color:#0f172a;">Key Features & Amenities</h3>
        <ul style="display:grid; grid-template-columns: repeat(2, 1fr); gap:8px; margin-bottom:24px; list-style:none;">
          ${e.features.map(e=>`
            <li style="display:flex; align-items:center; gap:6px; color:#334155; font-size:0.85rem; font-weight:600;">
              ${E(14,`#059669`)} ${e}
            </li>
          `).join(``)}
        </ul>

        <div style="display:flex; justify-content:space-between; gap:16px; align-items:center; border-top:1px solid #e2e8f0; padding-top:16px;">
          <div>
            <div style="font-size:0.75rem; color:#64748b;">Location</div>
            <strong style="color:#0f172a; font-size:0.9rem;">${e.location}, India</strong>
          </div>

          <a href="${p(e,n)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
            📲 Reserve ${e.name} on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `:``},X=()=>{let e=document.querySelector(`#carDetailModalOverlay`);document.querySelector(`#closeDetailModalBtn`)?.addEventListener(`click`,()=>{J=0,u.closeDetailModal()}),e?.addEventListener(`click`,t=>{t.target===e&&(J=0,u.closeDetailModal())}),document.querySelectorAll(`.gallery-thumb-btn`).forEach(e=>{e.addEventListener(`click`,e=>{J=Number(e.currentTarget.dataset.index);let t=document.querySelector(`#carDetailModalOverlay`);t&&(t.outerHTML=Y(),X())})})},Se=()=>{let{compareList:t}=u;if(t.length===0)return``;let n=e.filter(e=>t.includes(e.id));return`
    <div class="compare-drawer animate-fade-in">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="background: #2563eb; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-size: 0.78rem; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;">
          ${D(14,`#ffffff`)} ${t.length} / 3 Selected
        </span>
        <span style="font-size: 0.88rem; font-weight: 700; color: #0f172a;" class="desktop-only">
          ${n.map(e=>e.name).join(`, `)}
        </span>
      </div>

      <div style="display: flex; align-items: center; gap: 8px;">
        <button id="openCompareModalBtn" class="btn-primary" style="padding: 6px 14px; font-size: 0.82rem;">
          ⚖️ Compare Now
        </button>
        <button id="clearCompareBtn" class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem; color: #ef4444; border-color: #fca5a5;">
          Clear
        </button>
      </div>
    </div>
  `},Ce=()=>{let{isCompareModalOpen:n,compareList:r,booking:i}=u;if(!n||r.length===0)return``;let a=e.filter(e=>r.includes(e.id));return`
    <div class="modal-overlay" id="carCompareModalOverlay">
      <div class="modal-content animate-fade-in" style="max-width: 860px;">
        <button class="modal-close" id="closeCompareModalBtn">&times;</button>

        <div style="text-align: center; margin-bottom: 20px;">
          <span style="background: #eff6ff; color: #2563eb; font-size: 0.78rem; font-weight: 800; padding: 4px 12px; border-radius: 9999px; border: 1px solid #bfdbfe;">
            ⚖️ SIDE-BY-SIDE SPECIFICATION COMPARISON
          </span>
          <h2 style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-top: 6px;">Vehicle Comparison</h2>
        </div>

        <div style="overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 16px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem;">
            <thead>
              <tr style="border-bottom: 2px solid #e2e8f0; background: #f8fafc;">
                <th style="padding: 14px; color: #64748b; font-weight: 800;">Specification</th>
                ${a.map(e=>`
                  <th style="padding: 14px; text-align: center; width: ${66/a.length}%;">
                    <img src="${e.image}" alt="${e.name}" style="width: 90px; height: 56px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />
                    <strong style="display: block; color: #0f172a; font-size: 0.95rem;">${e.name}</strong>
                    <span style="color: #2563eb; font-weight: 900; font-size: 1.05rem;">${t(e.pricePerDay)}/day</span>
                  </th>
                `).join(``)}
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Seats & Capacity</td>
                ${a.map(e=>`<td style="padding: 12px 14px; text-align: center; font-weight: 800; color: #334155;">${e.seats} Persons</td>`).join(``)}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Transmission</td>
                ${a.map(e=>`<td style="padding: 12px 14px; text-align: center; font-weight: 700;">${e.transmission}</td>`).join(``)}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Fuel Type</td>
                ${a.map(e=>`<td style="padding: 12px 14px; text-align: center; font-weight: 700;">${e.fuel}</td>`).join(``)}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Engine & Power</td>
                ${a.map(e=>`<td style="padding: 12px 14px; text-align: center; color: #475569; font-size: 0.82rem;">${e.specs.engine}</td>`).join(``)}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Mileage Economy</td>
                ${a.map(e=>`<td style="padding: 12px 14px; text-align: center; font-weight: 800; color: #059669;">${e.specs.mileage}</td>`).join(``)}
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Luggage Space</td>
                ${a.map(e=>`<td style="padding: 12px 14px; text-align: center; color: #475569;">${e.specs.luggage}</td>`).join(``)}
              </tr>
              <tr>
                <td style="padding: 12px 14px; font-weight: 700; color: #0f172a; background: #fafafa;">Chauffeur Status</td>
                ${a.map(()=>`<td style="padding: 12px 14px; text-align: center; color: #059669; font-weight: 800;">✓ Police Verified</td>`).join(``)}
              </tr>
              <tr style="background: #f8fafc; border-top: 2px solid #e2e8f0;">
                <td style="padding: 14px; font-weight: 800; color: #0f172a;">Action</td>
                ${a.map(e=>`
                  <td style="padding: 14px; text-align: center;">
                    <a href="${p(e,i)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding: 6px 12px; font-size: 0.78rem; display: inline-flex;">
                      📲 Book ${e.name.split(` `)[0]}
                    </a>
                  </td>
                `).join(``)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `},we=()=>{document.querySelector(`#openCompareModalBtn`)?.addEventListener(`click`,()=>{u.openCompareModal()}),document.querySelector(`#clearCompareBtn`)?.addEventListener(`click`,()=>{u.clearCompare()});let e=document.querySelector(`#closeCompareModalBtn`),t=document.querySelector(`#carCompareModalOverlay`);e?.addEventListener(`click`,()=>{u.closeCompareModal()}),t?.addEventListener(`click`,e=>{e.target===t&&u.closeCompareModal()})},Te=()=>{let e=u.currentRoute;return`
    <nav class="mobile-bottom-nav">
      ${[{route:`home`,label:`Home`,icon:g(18,e===`home`?`#2563eb`:`#64748b`)},{route:`fleet`,label:`Fleet`,icon:h(18,e===`fleet`?`#2563eb`:`#64748b`)},{route:`why-us`,label:`Why Us`,icon:v(18,e===`why-us`?`#2563eb`:`#64748b`)},{route:`faqs`,label:`FAQs`,icon:y(18,e===`faqs`?`#2563eb`:`#64748b`)},{route:`call`,label:`Call`,icon:b(18,`#059669`)}].map(t=>t.route===`call`?`
            <a href="tel:9981264216" class="mobile-nav-tab" style="color: #059669;">
              ${t.icon}
              <span>${t.label}</span>
            </a>
          `:`
          <button class="mobile-nav-tab ${e===t.route?`active`:``}" data-route="${t.route}">
            ${t.icon}
            <span>${t.label}</span>
          </button>
        `).join(``)}
    </nav>
  `},Ee=()=>{document.querySelectorAll(`.mobile-bottom-nav .mobile-nav-tab[data-route]`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.route;t&&u.setRoute(t)})})},De=()=>`
    <footer style="border-top: 1px solid #e2e8f0; padding: 40px 0 20px; background: #0f172a; color: #f8fafc; margin-top: 40px;">
      <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; margin-bottom: 30px;">
        <div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <div class="brand-icon" style="width:34px; height:34px; font-size:1.1rem; background: linear-gradient(135deg, #2563eb, #1d4ed8); display: grid; place-items: center;">${h(18,`#ffffff`)}</div>
            <span style="font-weight:800; font-size:1.15rem; color: #ffffff;">ERTIGA RIDE</span>
          </div>
          <p style="color: #94a3b8; font-size: 0.85rem; line-height: 1.6; margin-bottom: 16px;">
            India’s trusted 7-seater Ertiga, Innova & Luxury SUV mobility platform. Clean, sanitized & transparent pricing guaranteed.
          </p>
          <div style="display: flex; gap: 10px;">
            <a href="${m()}" target="_blank" rel="noopener noreferrer" style="background: rgba(255,255,255,0.08); padding: 8px 14px; border-radius: 8px; font-size: 0.8rem; color: #38bdf8; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
              ${x(14,`#38bdf8`)} WhatsApp
            </a>
            <a href="tel:9981264216" style="background: rgba(255,255,255,0.08); padding: 8px 14px; border-radius: 8px; font-size: 0.8rem; color: #4ade80; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
              ${b(14,`#4ade80`)} Call Now
            </a>
          </div>
        </div>

        <div>
          <h4 style="margin-bottom: 12px; font-size: 0.95rem; color: #60a5fa; font-weight: 800;">Quick Navigation</h4>
          <ul style="list-style: none; font-size: 0.85rem; display: flex; flex-direction: column; gap: 8px;">
            <li><button class="footer-nav-btn" data-route="home">Home</button></li>
            <li><button class="footer-nav-btn" data-route="fleet">Fleet & Cars</button></li>
            <li><button class="footer-nav-btn" data-route="why-us">Why Choose Us</button></li>
            <li><button class="footer-nav-btn" data-route="faqs">FAQs</button></li>
            <li><button class="footer-nav-btn" data-route="contact">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 style="margin-bottom: 12px; font-size: 0.95rem; color: #60a5fa; font-weight: 800;">Popular Destinations</h4>
          <ul style="list-style: none; color: #cbd5e1; font-size: 0.85rem; display: flex; flex-direction: column; gap: 8px;">
            <li>Indore to Ujjain Mahakal</li>
            <li>Indore to Omkareshwar</li>
            <li>Indore to Mandu & Maheshwar</li>
            <li>Indore Airport Pickup & Drop</li>
          </ul>
        </div>

        <div>
          <h4 style="margin-bottom: 12px; font-size: 0.95rem; color: #60a5fa; font-weight: 800;">Hub Office</h4>
          <div style="font-size: 0.85rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 8px;">
            <span>Vijay Nagar & Airport Road, Indore (M.P.)</span>
            <span>Support: +91 9981264216</span>
            <span>Hours: 24 Hours / 7 Days Available</span>
          </div>
        </div>
      </div>

      <div class="container" style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 0.8rem; color: #64748b;">
        <span>© ${new Date().getFullYear()} Ertiga Ride Mobility. All rights reserved.</span>
        <span>Designed with Clean Classic Luxury UI</span>
      </div>
    </footer>

    <style>
      .footer-nav-btn {
        background: none;
        border: none;
        color: #cbd5e1;
        font-size: 0.85rem;
        cursor: pointer;
        padding: 0;
        transition: color 0.2s ease;
      }
      .footer-nav-btn:hover {
        color: #60a5fa;
      }
    </style>
  `,Oe=()=>{document.querySelectorAll(`.footer-nav-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.route;t&&u.setRoute(t)})})},ke=()=>{let{activeToast:e}=u;return e?`
    <div class="toast-container">
      <div class="toast animate-fade-in">
        <span>${e.message}</span>
      </div>
    </div>
  `:``},Ae=()=>{if(window.innerWidth<=820)return;let e=document.getElementById(`cursorDot`),t=document.getElementById(`cursorRing`);e||(e=document.createElement(`div`),e.id=`cursorDot`,document.body.appendChild(e)),t||(t=document.createElement(`div`),t.id=`cursorRing`,document.body.appendChild(t));let n=-100,r=-100,i=-100,a=-100;window.addEventListener(`mousemove`,t=>{n=t.clientX,r=t.clientY,e&&(e.style.transform=`translate3d(${n}px, ${r}px, 0)`)});let o=()=>{i+=(n-i)*.15,a+=(r-a)*.15,t&&(t.style.transform=`translate3d(${i-18}px, ${a-18}px, 0)`),requestAnimationFrame(o)};o(),document.addEventListener(`mouseover`,n=>{n.target.closest(`button, a, input, select, textarea, .glass-card, .fav-btn, .filter-pill, .faq-question`)?(t?.classList.add(`cursor-hover`),e?.classList.add(`cursor-hover-dot`)):(t?.classList.remove(`cursor-hover`),e?.classList.remove(`cursor-hover-dot`))})},Z=document.querySelector(`#app`);if(!Z)throw Error(`App root container #app not found!`);var je=()=>{switch(u.currentRoute){case`fleet`:return{html:pe(),bindEvents:me};case`why-us`:return{html:_e()};case`faqs`:return{html:K(),bindEvents:q};case`contact`:return{html:be(),bindEvents:xe};default:return{html:R(),bindEvents:z}}},Q=()=>{let e=je();Z.innerHTML=`
    <div id="pageShell">
      ${k()}
      <main>
        ${e.html}
      </main>
      ${De()}
      ${Te()}
      ${Y()}
      ${Se()}
      ${Ce()}
      ${ae()}
      ${ke()}

      <!-- Floating WhatsApp Quick Button -->
      <a href="${m()}" target="_blank" rel="noopener noreferrer" class="floating-whatsapp-btn" title="Chat on WhatsApp">
        ${x(26,`#ffffff`)}
      </a>
    </div>
  `,A(),Ee(),le(),e.bindEvents&&e.bindEvents(),X(),we(),oe(),Oe()},$=()=>{if(window.location.hash){let e=window.location.hash.replace(`#`,``);if([`home`,`fleet`,`why-us`,`faqs`,`contact`].includes(e)){let t=e===`home`?`/`:`/${e}`;window.history.replaceState({route:e},``,t),u.currentRoute=e;return}}let e=window.location.pathname.replace(/^\/|\/$/g,``);u.currentRoute=[`home`,`fleet`,`why-us`,`faqs`,`contact`].includes(e)?e:`home`};$(),Q(),Ae(),window.addEventListener(`popstate`,()=>{$(),Q()}),window.addEventListener(`hashchange`,()=>{$(),Q()}),u.subscribe(()=>{Q()});