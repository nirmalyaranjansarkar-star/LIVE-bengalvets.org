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

  email: 'contact@bengalvets.org',
  grievanceEmail: 'grievances@bengalvets.org',
  registrationEmail: 'registration@bengalvets.org',
  sponsorshipEmail: 'sponsorship@bengalvets.org',
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
  { label: 'Undergraduate Student', bn: 'স্নাতক ছাত্রছাত্রী', amount: 200 },
  { label: 'Postgraduate Student', bn: 'স্নাতকোত্তর ছাত্রছাত্রী', amount: 500 },
  { label: 'Retired', bn: 'অবসরপ্রাপ্ত', amount: 1000 },
  { label: 'In-service', bn: 'কর্মরত', amount: 1500 },
];

export const officeBearers = [
  { role: 'President', bn: 'সভাপতি', names: ['Dr. Manoranjan Roy'] },
  { role: 'Organizing Secretary', bn: 'সাংগঠনিক সম্পাদক', names: ['Dr. Pradip Pati'] },
  { role: 'Office Secretary', bn: 'দপ্তর সম্পাদক', names: ['Dr. Sourav Chandra'], note: '9433330888' },
  { role: 'Treasurer', bn: 'কোষাধ্যক্ষ', names: ['Dr. Tapas Gupta'] },
  { role: 'Executive Members', bn: 'কার্যনির্বাহী সদস্য', names: ['Dr. Ashutosh Kr. Biswas', 'Dr. Gurucharan Datta', 'Dr. Prasanta Kumar Bera'] },
];

export const subCommittees = [
  { name: 'Reception', bn: 'অভ্যর্থনা', chairman: 'Dr. Goutam Prasad Sarkhel', convenor: 'Dr. Sukanta Roy' },
  { name: 'Management', bn: 'ব্যবস্থাপনা', chairman: 'Dr. Prasant Bhagat', convenor: 'Dr. Raj Kumar Banerjee' },
  { name: 'Refreshment', bn: 'জলযোগ', chairman: 'Dr. Kartick Chandra Roy', convenor: 'Dr. Sribas Biswas' },
  { name: 'Scientific', bn: 'বিজ্ঞান', chairman: 'Dr. Tapan Kr. Mandal', convenor: 'Dr. Srinibas Das' },
  { name: 'Souvenir', bn: 'স্মরণিকা', chairman: 'Dr. Guruprasad Mondal', convenor: 'Dr. Sumit Kr. Jana' },
  { name: 'Finance', bn: 'অর্থ', chairman: 'Dr. Prabir Pradhan', convenor: 'Dr. Chandi Charan Samanta' },
  { name: 'Cultural', bn: 'সাংস্কৃতিক', chairman: 'Dr. (Mrs.) Swapna Rooj', convenor: 'Dr. Sanjoy Dutta' },
  { name: 'Publicity', bn: 'প্রচার', chairman: 'Dr. Sritanu Maity', convenor: 'Dr. Nilratan Mondal' },
  { name: 'Sports', bn: 'ক্রীড়া', chairman: 'Dr. Amal Chattoraj', convenor: 'Dr. Soumitra Pandit' },
  { name: 'Present & Past Meet', bn: 'বর্তমান ও প্রাক্তন মিলন', chairman: 'Dr. Gouri Shankar Hatui', convenor: 'Dr. Indranil Bera' },
  { name: 'Pandal & Decoration', bn: 'প্যান্ডেল ও সজ্জা', chairman: 'Dr. Sandip Chowdhury', convenor: 'Dr. Sankar Dutta' },
  { name: 'Lady Vet Welfare', bn: 'মহিলা পশুচিকিৎসক কল্যাণ', chairman: 'Dr. Chandana Bhattacharya', convenor: 'Dr. Soma Das Saha' },
];

// Leave empty until the schedule is fixed. Each item: { time: '08:00 AM', title: 'Registration of delegates' }
export const programme: { time: string; title: string }[] = [];

export const lastReunion = {
  title: 'The 53rd Reunion',
  date: '10th & 11th January, 2026',
  symposium: 'National Symposium on “Reinforcing Biosecurity: Paving the way for a safer One Health Environment”',
  highlightsBn: ['প্রতিনিধি নথিভুক্তি', 'পুনর্মিলন পতাকা উত্তোলন', 'স্মরণিকা প্রকাশ', 'জাতীয় আলোচনাসভা', 'খেলাধুলা ও প্রতিযোগিতা', 'বর্তমান ও প্রাক্তন ছাত্রছাত্রীদের মিলন', 'সাংস্কৃতিক অনুষ্ঠান'],
  highlights: [
    'Registration of delegates', 'Hoisting of the Reunion Flag', 'Release of the Souvenir', 'National Symposium',
    'Sports & competitions', 'Meeting of Past & Present Students', 'Cultural programmes',
  ],
};

// Photo gallery (files in public/img). First 12 show at once; the rest after "Show all". Add more: { src, sm, alt, caption }
export const gallery = [
  { src: '/img/reunion53-gate.webp', sm: '/img/reunion53-gate-sm.webp', alt: 'Welcome gate of the 53rd Reunion', caption: 'Welcome gate · 53rd Reunion, January 2026' },
  { src: '/img/r53-bvc-lit.webp', sm: '/img/r53-bvc-lit-sm.webp', alt: 'Bengal Veterinary College heritage building lit up at night', caption: 'The heritage building lit up · 53rd Reunion' },
  { src: '/img/r53-lamp.webp', sm: '/img/r53-lamp-sm.webp', alt: 'Lighting of the inaugural lamp at the 53rd Reunion', caption: 'Lighting of the inaugural lamp' },
  { src: '/img/r53-flag-hoisting.webp', sm: '/img/r53-flag-hoisting-sm.webp', alt: 'Hoisting of the Reunion Flag', caption: 'Hoisting of the Reunion Flag' },
  { src: '/img/r53-students.webp', sm: '/img/r53-students-sm.webp', alt: 'Present students at the 53rd Reunion', caption: 'Present students at the Reunion' },
  { src: '/img/r53-procession.webp', sm: '/img/r53-procession-sm.webp', alt: 'Delegates walking through the campus', caption: 'Delegates walk through the campus' },
  { src: '/img/r53-stage-speech.webp', sm: '/img/r53-stage-speech-sm.webp', alt: 'Address on the main stage', caption: 'On the main stage' },
  { src: '/img/r53-cultural.webp', sm: '/img/r53-cultural-sm.webp', alt: 'Cultural programme on stage', caption: 'Cultural programme' },
  { src: '/img/r53-felicitation.webp', sm: '/img/r53-felicitation-sm.webp', alt: 'Felicitation on stage', caption: 'Felicitation' },
  { src: '/img/r53-group-bvc.webp', sm: '/img/r53-group-bvc-sm.webp', alt: 'Delegates in front of the heritage building', caption: 'Old friends, old building' },
  { src: '/img/r53-flag-group.webp', sm: '/img/r53-flag-group-sm.webp', alt: 'Delegates at the flag hoisting', caption: 'At the flag hoisting' },
  { src: '/img/r53-sports.webp', sm: '/img/r53-sports-sm.webp', alt: 'Sports events on the campus ground', caption: 'Sports on the campus ground' },
  { src: '/img/r53-games.webp', sm: '/img/r53-games-sm.webp', alt: 'Fun games for delegates and families', caption: 'Games for delegates and families' },
  { src: '/img/r53-stalls-5.webp', sm: '/img/r53-stalls-5-sm.webp', alt: 'Stalls of partners and sponsors', caption: 'Partner and sponsor stalls' },
  { src: '/img/reunion53-stalls.webp', sm: '/img/reunion53-stalls-sm.webp', alt: 'Delegates visiting stalls', caption: 'Delegates at the stalls' },
  { src: '/img/r53-stalls-2.webp', sm: '/img/r53-stalls-2-sm.webp', alt: 'Partner stalls on the ground', caption: 'Partner stalls' },
  { src: '/img/r53-stalls-3.webp', sm: '/img/r53-stalls-3-sm.webp', alt: 'Row of partner stalls', caption: 'Partner stalls' },
  { src: '/img/r53-stalls-4.webp', sm: '/img/r53-stalls-4-sm.webp', alt: 'Stall area with food counter', caption: 'Stalls and food counter' },
  { src: '/img/r53-welcome.webp', sm: '/img/r53-welcome-sm.webp', alt: 'Welcome path for delegates', caption: 'Welcome to all delegates' },
  { src: '/img/r53-pathway.webp', sm: '/img/r53-pathway-sm.webp', alt: 'Lit pathway inside the campus in the evening', caption: 'Campus pathway in the evening' },
  { src: '/img/r53-banner-night.webp', sm: '/img/r53-banner-night-sm.webp', alt: 'Reunion banner at the gate at night', caption: 'The gate at night' },
  { src: '/img/r53-gate-night.webp', sm: '/img/r53-gate-night-sm.webp', alt: 'Campus gate at night during the Reunion', caption: 'Evening at the gate' },
  { src: '/img/r53-souvenir.webp', sm: '/img/r53-souvenir-sm.webp', alt: 'Cover of the 53rd Reunion souvenir', caption: 'Souvenir of the 53rd Reunion' },
  { src: '/img/bvc-heritage-1893.webp', sm: '/img/bvc-heritage-1893-sm.webp', alt: 'Heritage building of Bengal Veterinary College, A.D. 1893', caption: 'Bengal Veterinary College · A.D. 1893' },
  { src: '/img/campus-1.webp', sm: '/img/campus-1-sm.webp', alt: 'WBUAFS campus building', caption: 'WBUAFS campus' },
  { src: '/img/campus-3.webp', sm: '/img/campus-3-sm.webp', alt: 'WBUAFS campus building front', caption: 'WBUAFS campus' },
];

// Hero background slideshow (photos from wbuafs.ac.in)
// sm = small copy for phones. Max 6 slides (the CSS timing is set for 6).
export const heroSlides = [
  { src: '/img/hero-1.webp', sm: '/img/hero-1-sm.webp', pos: 'object-center' },
  { src: '/img/r53-bvc-lit.webp', sm: '/img/r53-bvc-lit-sm.webp', pos: 'object-center' },
  { src: '/img/reunion53-gate.webp', sm: '/img/reunion53-gate-sm.webp', pos: 'object-top' },
  { src: '/img/r53-students.webp', sm: '/img/r53-students-sm.webp', pos: 'object-center' },
  { src: '/img/r53-gate-night.webp', sm: '/img/r53-gate-night-sm.webp', pos: 'object-center' },
  { src: '/img/hero-4.webp', sm: '/img/hero-4-sm.webp', pos: 'object-center' },
];

// YouTube videos. Add more: { id: 'VIDEO_ID', title: '...', thumb: '' }  (id = the part after /live/ or watch?v=)
// If thumb is empty, a plain play card is shown (thumbnail images must be saved in public/img for privacy).
export const videos: { id: string; title: string; thumb: string; embed: boolean; href?: string }[] = [
  // FEATURED (shown first, large)
  { id: 'dIcpn0VdZSQ', title: 'Golden Jubilee Veterinary Reunion 2023', thumb: '/img/video-dIcpn0VdZSQ.webp', embed: true },
  { id: '5gCPnP0XGUs', title: '53rd Reunion of Bengal Veterinary College | CU | BCKV & WBUAFS | LIVE', thumb: '/img/video-5gCPnP0XGUs.webp', embed: true },
  { id: 'HGW7mbUplaw', title: 'A Frame-Worthy Reunion', thumb: '/img/video-HGW7mbUplaw.webp', embed: true },
  { id: 'PhukV8OgW-0', title: 'Golden Jubilee Celebration at Bengal Veterinary College, Belgachia · 130th Foundation Day 2023', thumb: '/img/video-PhukV8OgW-0.webp', embed: true },
  // embed: false = the owner has switched off embedding, so the card opens YouTube in a new tab
  { id: 'tPwMuZ3BPlk', title: 'Reunion of Past & Present Students — Live', thumb: '/img/video-tPwMuZ3BPlk.webp', embed: false },
  { id: 'J4WINlAUFNk', title: 'Golden Jubilee Reunion | Glorious Journey — Live', thumb: '/img/video-J4WINlAUFNk.webp', embed: false },
  // href = any other link (e.g. Facebook). The card opens it in a new tab.
  { id: 'fb-reel-1', title: 'Reunion reel on Facebook', thumb: '/img/r53-bvc-lit-sm.webp', embed: false, href: 'https://www.facebook.com/share/r/1ACpzomjnx/' },
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

// Map + "How to reach". Coordinates = Belgachia Metro station (Wikipedia). Gate 3 of the station is marked
// "Main Gate – West Bengal University of Animal & Fishery Sciences".
export const mapEmbed = 'https://www.openstreetmap.org/export/embed.html?bbox=88.3780%2C22.6000%2C88.3950%2C22.6120&layer=mapnik&marker=22.60599%2C88.38637';
