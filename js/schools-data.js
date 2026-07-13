// Single source of truth for school data, used by both the homepage teaser
// (index.html) and the full listing/filter page (schools.html). Adding,
// removing or updating a school is a change here only — nothing else should
// need hand-editing to stay in sync (hero stats, licence-grid counts and
// both pages' listings all derive from this array).
window.SCHOOLS = [
  {
    id: 'edinburgh-motorcycle-training',
    name: 'Edinburgh Motorcycle Training',
    shortName: 'EMT',
    city: 'edinburgh',
    area: 'Straiton',
    postcode: '',
    licences: ['cbt', 'full-a'],
    prices: { cbt: 99, 'full-a': 699 },
    description: 'Independent motorcycle school in Straiton offering CBT and full licence (DAS) training, on and off-road.',
    tags: ['Weekday & weekend courses'],
    href: 'pages/schools/edinburgh-motorcycle-training.html'
  },
  {
    id: 'two-wheels',
    name: 'Two Wheels Motorcycle Training',
    shortName: 'TW',
    city: 'edinburgh',
    area: 'Peffermill',
    postcode: 'EH16 5LL',
    licences: ['cbt', 'a1', 'a2', 'full-a'],
    prices: { cbt: 89, a1: 599, a2: 649, 'full-a': 749 },
    description: 'Honda Approved School of Motorcycling, training riders across Edinburgh and the Lothians since 1991.',
    tags: ['Honda Approved School'],
    href: 'pages/schools/two-wheels.html'
  },
  {
    id: 'harleys-rider-training',
    name: 'Harley’s Rider Training',
    shortName: 'HRT',
    city: 'edinburgh',
    area: 'Gorgie',
    postcode: 'EH11 2RP',
    licences: ['cbt', 'a1', 'a2', 'full-a'],
    prices: { cbt: 95, a1: 565, a2: 625, 'full-a': 719 },
    description: 'Family-run school in Gorgie providing CBT, A1, A2, full licence training and Mod 1 & 2 test preparation since 1997.',
    tags: ['Mod 1 & 2 test prep'],
    href: 'pages/schools/harleys-rider-training.html'
  }
];
