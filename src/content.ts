// ─────────────────────────────────────────────────────────────
// ALL website text lives here. Change a value, push to GitHub,
// Cloudflare re-publishes the site in about one minute.
// ─────────────────────────────────────────────────────────────

export const site = {
  edition: '54th',
  title: 'The 54th Reunion of Past & Present Students',
  institutions:
    'Bengal Veterinary College (C.U.) & Faculty of Veterinary & Animal Sciences (BCKV & WBUAFS)',
  tagline: 'দশই জানুয়ারি — ফিরে আয়, বেলগাছিয়া তোকে চায়।',
  dateLabel: 'Sunday · 10th January, 2027',
  dateShort: '10.01.2027',
  // Countdown target (IST)
  eventStartISO: '2027-01-10T09:00:00+05:30',
  eventEndISO: '2027-01-10T23:59:59+05:30',
  venueShort: 'WBUAFS Campus, Belgachia, Kolkata',
  address: '37 & 68, Kshudiram Bose Sarani, Belgachia, Kolkata – 700 037',
  email: 'veterinaryreunion@gmail.com',
  contactName: 'Dr. Sourav Chandra',
  contactRole: 'Office Secretary',
  contactPhone: '9433330888',
  // Paste the Google Form / Easebuzz link here when ready. Empty = "opens shortly" pop-up.
  registrationUrl: '',
  // Paste audio links (mp3) here when the songs are ready. Empty = "Releasing soon".
  themeSongUrl: '',
  jingleUrl: '',
};

export const logos = [
  { src: '/logos/wbuafs.png', alt: 'West Bengal University of Animal & Fishery Sciences logo', name: 'Faculty of Veterinary & Animal Sciences, W.B.U.A.F.S.', year: '1995' },
  { src: '/logos/bvc.png', alt: 'Bengal Veterinary College logo', name: 'Bengal Veterinary College, C.U.', year: '1893' },
  { src: '/logos/bckv.png', alt: 'Bidhan Chandra Krishi Viswavidyalaya logo', name: 'Faculty of Veterinary & Animal Sciences, B.C.K.V.', year: '1974' },
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
    'Registration of delegates',
    'Hoisting of the Reunion Flag',
    'Release of the Souvenir',
    'National Symposium',
    'Sports & competitions',
    'Meeting of Past & Present Students',
    'Cultural programmes',
  ],
};

export const sponsorTiers = [
  { name: 'Title Partner', text: 'Lead partner of the 54th Reunion. Details on request.' },
  { name: 'Gold Partner', text: 'Partner logo on this website and in the souvenir. Details on request.' },
  { name: 'Souvenir & Website Ad', text: 'Advertisement slots in the digital souvenir and on this website.' },
];

// Add partner logos here later: { name: 'Company', logo: '/sponsors/company.png' }
export const sponsors: { name: string; logo: string }[] = [];
