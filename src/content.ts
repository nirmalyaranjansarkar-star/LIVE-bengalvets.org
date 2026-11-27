// ─────────────────────────────────────────────────────────────
// ALL website text lives here. Change a value, commit on GitHub,
// Cloudflare re-publishes the site in about one minute.
// ─────────────────────────────────────────────────────────────

export const site = {
  url: 'https://bengalvets.org',
  edition: '54th',
  title: 'The 54th Reunion of Past & Present Students',
  institutions:
    'Bengal Veterinary College (C.U.) & Faculty of Veterinary & Animal Sciences (BCKV & WBUAFS)',
  tagline: 'দশই জানুয়ারি — ফিরে আয়, বেলগাছিয়া তোকে চায়।',
  dateLabel: 'Sunday · 10th January, 2027',
  dateLong: 'Sunday, 10th January 2027',
  dateShort: '10.01.2027',
  eventStartISO: '2027-01-10T09:00:00+05:30',
  eventEndISO: '2027-01-10T23:59:59+05:30',

  // Venue
  venueName: 'WBUAFS Main Campus, Belgachia',
  venueLine: 'The historic Bengal Veterinary College campus (est. 1893)',
  address: '37 & 68, Kshudiram Bose Sarani, Belgachia, Kolkata – 700 037, West Bengal, India',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=West+Bengal+University+of+Animal+and+Fishery+Sciences+Belgachia+Kolkata',

  // Legal owner — exactly as on the reunion bank account
  legalName: 'M/S Veterinary Re Union',
  legalAddress: '37, Kshudiram Bose Sarani, Belgachia Road, Kolkata – 700 037, West Bengal, India',

  email: 'veterinaryreunion@gmail.com',
  contactName: 'Dr. Sourav Chandra',
  contactRole: 'Office Secretary',
  contactPhone: '9433330888',
  grievanceName: 'Dr. Pradip Pati',
  grievanceRole: 'Organizing Secretary',

  policiesUpdated: '27 November 2026',

  // Paste the Google Form / Easebuzz link here when ready. Empty = "opens shortly" pop-up.
  registrationUrl: '',
  // Paste audio links (mp3) here when the songs are ready. Empty = "Releasing soon".
  themeSongUrl: '',
  jingleUrl: '',
};

export const logos = [
  { src: '/logos/wbuafs.webp', sm: '/logos/wbuafs-sm.webp', alt: 'West Bengal University of Animal & Fishery Sciences logo', name: 'Faculty of Veterinary & Animal Sciences, W.B.U.A.F.S.', year: '1995' },
  { src: '/logos/bvc.webp', sm: '/logos/bvc-sm.webp', alt: 'Bengal Veterinary College logo', name: 'Bengal Veterinary College, C.U.', year: '1893' },
  { src: '/logos/bckv.webp', sm: '/logos/bckv-sm.webp', alt: 'Bidhan Chandra Krishi Viswavidyalaya logo', name: 'Faculty of Veterinary & Animal Sciences, B.C.K.V.', year: '1974' },
];

export const fees = [
  { label: 'Undergraduate Student', amount: '₹200' },
  { label: 'Postgraduate Student', amount: '₹500' },
  { label: 'Retired', amount: '₹1,000' },
  { label: 'In-service', amount: '₹1,500' },
];

export const officeBearers = [
  { role: 'President', names: ['Dr. Manoranjan Roy'] },
  { role: 'Organizing Secretary', names: ['Dr. Pradip Pati'] },
  { role: 'Office Secretary', names: ['Dr. Sourav Chandra'], note: 'Call & WhatsApp: 9433330888' },
  { role: 'Treasurer', names: ['Dr. Tapas Gupta'] },
  { role: 'Executive Members', names: ['Dr. Ashutosh Kr. Biswas', 'Dr. Gurucharan Datta', 'Dr. Prasanta Kumar Bera'] },
];

export const subCommittees = [
  { name: 'Reception', chairman: 'Dr. Goutam Prasad Sarkhel', convenor: 'Dr. Sukanta Roy' },
  { name: 'Management', chairman: 'Dr. Prasant Bhagat', convenor: 'Dr. Raj Kumar Banerjee' },
  { name: 'Refreshment', chairman: 'Dr. Kartick Chandra Roy', convenor: 'Dr. Sribas Biswas' },
  { name: 'Scientific', chairman: 'Dr. Tapan Kr. Mandal', convenor: 'Dr. Srinibas Das' },
  { name: 'Souvenir', chairman: 'Dr. Guruprasad Mondal', convenor: 'Dr. Sumit Kr. Jana' },
  { name: 'Finance', chairman: 'Dr. Prabir Pradhan', convenor: 'Dr. Chandi Charan Samanta' },
  { name: 'Cultural', chairman: 'Dr. (Mrs.) Swapna Rooj', convenor: 'Dr. Sanjoy Dutta' },
  { name: 'Publicity', chairman: 'Dr. Sritanu Maity', convenor: 'Dr. Nilratan Mondal' },
  { name: 'Sports', chairman: 'Dr. Amal Chattoraj', convenor: 'Dr. Soumitra Pandit' },
  { name: 'Present & Past Meet', chairman: 'Dr. Gouri Shankar Hatui', convenor: 'Dr. Indranil Bera' },
  { name: 'Pandal & Decoration', chairman: 'Dr. Sandip Chowdhury', convenor: 'Dr. Sankar Dutta' },
  { name: 'Lady Vet Welfare', chairman: 'Dr. Chandana Bhattacharya', convenor: 'Dr. Soma Das Saha' },
];

// Leave empty until the schedule is fixed. Each item: { time: '08:00 AM', title: 'Registration of delegates' }
export const programme: { time: string; title: string }[] = [];

export const lastReunion = {
  title: 'The 53rd Reunion',
  date: '10th & 11th January, 2026',
  symposium: 'National Symposium on “Reinforcing Biosecurity: Paving the way for a safer One Health Environment”',
  highlights: [
    'Registration of delegates', 'Hoisting of the Reunion Flag', 'Release of the Souvenir', 'National Symposium',
    'Sports & competitions', 'Meeting of Past & Present Students', 'Cultural programmes',
  ],
};

// Photo gallery (files in public/img). Add more: { src, sm, alt, caption }
export const gallery = [
  { src: '/img/reunion53-gate.webp', sm: '/img/reunion53-gate-sm.webp', alt: 'Welcome gate of the 53rd Reunion at Belgachia', caption: 'Welcome gate · 53rd Reunion, January 2026' },
  { src: '/img/bvc-heritage-1893.webp', sm: '/img/bvc-heritage-1893-sm.webp', alt: 'Heritage building of Bengal Veterinary College, A.D. 1893', caption: 'Bengal Veterinary College · A.D. 1893' },
  { src: '/img/reunion53-stalls.webp', sm: '/img/reunion53-stalls-sm.webp', alt: 'Delegates visiting stalls at the 53rd Reunion', caption: 'Delegates at the stalls · 53rd Reunion' },
  { src: '/img/campus-1.webp', sm: '/img/campus-1-sm.webp', alt: 'WBUAFS campus building', caption: 'WBUAFS campus' },
  { src: '/img/campus-3.webp', sm: '/img/campus-3-sm.webp', alt: 'WBUAFS campus building front', caption: 'WBUAFS campus' },
  { src: '/img/campus-stage.webp', sm: '/img/campus-stage-sm.webp', alt: 'University function stage at WBUAFS', caption: 'A university function at WBUAFS' },
  { src: '/img/campus-band.webp', sm: '/img/campus-band-sm.webp', alt: 'Band performing on the WBUAFS campus', caption: 'Band on the campus lawn' },
  { src: '/img/campus-2.webp', sm: '/img/campus-2-sm.webp', alt: 'WBUAFS academic building', caption: 'WBUAFS campus' },
];

// YouTube videos. Add more: { id: 'VIDEO_ID', title: '...', thumb: '' }  (id = the part after /live/ or watch?v=)
// If thumb is empty, a plain play card is shown (thumbnail images must be saved in public/img for privacy).
export const videos: { id: string; title: string; thumb: string; embed: boolean }[] = [
  // FEATURED (shown first, large)
  { id: 'dIcpn0VdZSQ', title: 'Golden Jubilee Veterinary Reunion 2023', thumb: '/img/video-dIcpn0VdZSQ.webp', embed: true },
  { id: '5gCPnP0XGUs', title: '53rd Reunion of Bengal Veterinary College | CU | BCKV & WBUAFS | LIVE', thumb: '/img/video-5gCPnP0XGUs.webp', embed: true },
  { id: 'HGW7mbUplaw', title: 'A Frame-Worthy Reunion', thumb: '/img/video-HGW7mbUplaw.webp', embed: true },
  { id: 'PhukV8OgW-0', title: 'Golden Jubilee Celebration at Bengal Veterinary College, Belgachia · 130th Foundation Day 2023', thumb: '/img/video-PhukV8OgW-0.webp', embed: true },
  // embed: false = the owner has switched off embedding, so the card opens YouTube in a new tab
  { id: 'tPwMuZ3BPlk', title: 'Reunion of Past & Present Students — Live', thumb: '/img/video-tPwMuZ3BPlk.webp', embed: false },
  { id: 'J4WINlAUFNk', title: 'Golden Jubilee Reunion | Glorious Journey — Live', thumb: '/img/video-J4WINlAUFNk.webp', embed: false },
];

export const sponsorTiers = [
  { name: 'Title Partner', text: 'Lead partner of the 54th Reunion. Details on request.' },
  { name: 'Gold Partner', text: 'Partner logo on this website and in the souvenir. Details on request.' },
  { name: 'Souvenir & Website Ad', text: 'Advertisement slots in the digital souvenir and on this website.' },
];

// Add partner logos here later: { name: 'Company', logo: '/sponsors/company.webp' }
export const sponsors: { name: string; logo: string }[] = [];

export const legalPages = [
  { slug: 'about-us', title: 'About Us' },
  { slug: 'contact-us', title: 'Contact Us' },
  { slug: 'terms-and-conditions', title: 'Terms & Conditions' },
  { slug: 'privacy-policy', title: 'Privacy Policy' },
  { slug: 'refund-and-cancellation-policy', title: 'Refund & Cancellation Policy' },
  { slug: 'shipping-and-delivery-policy', title: 'Shipping & Delivery Policy' },
  { slug: 'disclaimer', title: 'Disclaimer' },
] as const;
