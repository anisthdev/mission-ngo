// Impact Data and Statistics

export const impactHighlights = [
  {
    title: "Women Self-Help Groups",
    value: "800+",
    description: "Promoted about 800 Women Self-Help Groups (WSHGs) with 8,970 women members",
    icon: "👥"
  },
  {
    title: "Income Generation",
    value: "930",
    description: "Individuals engaged in income-generating activities like poultry, goat rearing, mushroom farming, tailoring, bamboo craft, and beekeeping",
    icon: "💰"
  },
  {
    title: "FPO Success",
    value: "₹80L",
    description: "2 FPOs with 1,500+ farmers achieved turnover of 80 lakhs within 2 years",
    icon: "🌾"
  },
  {
    title: "Youth Employment",
    value: "500+",
    description: "Rural youths secured wage employment in companies like Domino's, Colour Plus, Raymond, TVS Motors",
    icon: "💼"
  },
  {
    title: "Entrepreneurs Created",
    value: "3,600",
    description: "From 4,800 trained youths, 3,600 established businesses creating 16,700 jobs",
    icon: "🚀"
  },
  {
    title: "SHGs Digitized",
    value: "13,000+",
    description: "Digitized SHGs facilitating ₹82 crores paperless credit linkage within 3 years",
    icon: "💻"
  },
  {
    title: "Digital Classrooms",
    value: "140",
    description: "Enabled 140 Govt. High schools with digital classroom and multimedia contents",
    icon: "🎓"
  },
  {
    title: "Land Rights",
    value: "2,000+",
    description: "Empowered over 2,000 slum dwellers to obtain land rights from the government",
    icon: "🏠"
  },
  {
    title: "SHG Federations",
    value: "82",
    description: "Formed and strengthened 82 federations of SHGs covering 1,000+ SHGs",
    icon: "🤝"
  }
];

// Impact Stories (Sample - to be expanded with real stories)
export const impactStories = [
  {
    id: 1,
    category: "Women Empowerment",
    title: "From SHG Member to Entrepreneur",
    name: "Radha Devi",
    location: "Dhenkanal District",
    story: "After joining LEDP training program, Radha started her own tailoring business. Today she employs 3 other women and earns ₹15,000 per month.",
    image: "/images/assets/livelihood-1.jpg",
    impact: "Income increased by 300%",
    year: 2023
  },
  {
    id: 2,
    category: "Agriculture",
    title: "FPO Transforms Farming Community",
    name: "Santosh Kumar",
    location: "Angul District",
    story: "As a member of the Farmer Producer Organization, Santosh now gets fair prices for his produce and access to quality inputs at lower costs.",
    image: "/images/assets/fpo-4.jpeg",
    impact: "30% increase in income",
    year: 2024
  },
  {
    id: 3,
    category: "Skill Development",
    title: "Youth Employment Success",
    name: "Priya Sahoo",
    location: "Bhubaneswar",
    story: "After completing skill training in hospitality, Priya secured employment at a reputed hotel chain, becoming the first in her family to have a formal job.",
    image: "/images/assets/capacity-building-4.jpg",
    impact: "Secured formal employment",
    year: 2023
  },
  {
    id: 4,
    category: "Traditional Artisan",
    title: "Reviving Traditional Crafts",
    name: "Biren Biswal",
    location: "Dhenkanal",
    story: "Through PM Vishwakarma Yojana, Biren received modern tools for his pottery work. He now sells his products online reaching customers across India.",
    image: "/images/assets/artisan-2.jpg",
    impact: "Market reach expanded nationally",
    year: 2024
  },
  {
    id: 5,
    category: "Tribal Development",
    title: "Tribal Women's Collective",
    name: "Janjati Atmanirbhar Kendra",
    location: "Keonjhar District",
    story: "700+ tribal individuals trained through the Kendra, preserving traditional skills while creating sustainable livelihoods.",
    image: "/images/assets/misc-1.jpg",
    impact: "700+ tribal individuals empowered",
    year: 2023
  },
  {
    id: 6,
    category: "Digital Integration",
    title: "From Offline to Online",
    name: "Laxmi SHG",
    location: "Bhubaneswar",
    story: "After digital training, Laxmi SHG now sells products on ONDC platform, reaching customers across Odisha without intermediaries.",
    image: "/images/assets/awareness-1.jpg",
    impact: "Direct market access",
    year: 2024
  }
];

// Financial Highlights
export const financialData = {
  year: "2024-25",
  income: {
    donation: { amount: 292745, percentage: 5.33 },
    subscription: { amount: 360000, percentage: 6.56 },
    govtGrants: { amount: 4015187, percentage: 73.17 },
    otherGrants: { amount: 814082, percentage: 14.83 },
    misc: { amount: 5708, percentage: 0.10 },
    total: 5487722
  },
  expenditure: {
    programExpenses: { amount: 4285098, percentage: 78.09 },
    adminExpenses: { amount: 870501, percentage: 15.86 },
    misc: { amount: 2579, percentage: 0.05 },
    depreciation: { amount: 139775, percentage: 2.55 },
    total: 5297953
  },
  utilizationRate: 96.54,
  surplus: 189769
};

// Where We Work
export const workingAreas = {
  districts: [
    "Dhenkanal",
    "Angul",
    "Khordha",
    "Puri",
    "Deogarh",
    "Kendrapada",
    "Cuttack",
    "Jajpur",
    "Bhadrak",
    "Balasore",
    "Mayurbhanj",
    "Keonjhar",
    "Sundargarh",
    "Sambalpur",
    "Bargarh",
    "Jharsuguda",
    "Deogarh",
    "Nuapada"
  ],
  blocks: {
    dhenkanal: ["Bhuban", "Dhenkanal Sadar", "Gondia", "Hindol", "Kamakhyanagar", "Kankadahad", "Odapada", "Parjang"],
    angul: ["Chendipada", "Banarpal"],
    khordha: ["Bhubaneswar", "Balugaon"],
    puri: ["Tourism livelihoods focus"],
    deogarh: ["Youth engagement and artisan linkages"]
  },
  gramPanchayats: 285,
  villages: 1560
};

// Monitoring & Evaluation Metrics
export const metricsData = [
  {
    program: "FPO-CSS",
    beneficiaries: 1800,
    activities: "2 FPO formed/strengthen",
    indicators: "Membership growth, procurement volume, net profit",
    targetAchieved: 100
  },
  {
    program: "LEDP",
    beneficiaries: 270,
    activities: "9 training batches",
    indicators: "Post-training income rise, self-employment rate",
    targetAchieved: 79
  },
  {
    program: "PM Vishwakarma",
    beneficiaries: 130,
    activities: "ID registration, toolkit distribution",
    indicators: "100% artisans ID issued",
    targetAchieved: 100
  },
  {
    program: "Gramodyog Vikas",
    beneficiaries: 70,
    activities: "5 skill camp, 2 cluster meet",
    indicators: "Machine usage rate, cluster income growth",
    targetAchieved: 30
  },
  {
    program: "MDA Awareness",
    beneficiaries: 12000,
    activities: "560 awareness drive in 01 block",
    indicators: "Advance 30%, medicine uptake, feedback score",
    targetAchieved: 100
  },
  {
    program: "EDP Program",
    beneficiaries: 360,
    activities: "12 days module, 43 mentoring session",
    indicators: "Business setup rate, income change",
    targetAchieved: 52
  },
  {
    program: "OFPO Bamboo",
    beneficiaries: 318,
    activities: "Capacity building + product profiling",
    indicators: "Product diversity, sale growth, registration status",
    targetAchieved: 100
  }
];
