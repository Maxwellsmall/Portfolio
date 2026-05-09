export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  date: string;
  type: string;
  client: string;
  mainImage: string;
  gallery: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 'rccg',
    title: 'Redeem Christian Church of God Ota',
    subtitle: 'Redeem Christian Church of God Ota Official Website',
    description: 'Provides Christian Believers (of any denomination) and non-believers searching for the TRUTH in the word of the living God with helpful resources',
    technologies: ['React Js', 'Tailwind CSS'],
    date: '2025',
    type: 'Church Website',
    client: 'RCCG Ota President',
    mainImage: '/rccg.png',
    gallery: [],
    link: '#'
  },
  {
    id: 'bimarketplace',
    title: 'BI Marketplace',
    subtitle: 'E-commerce platform',
    description: 'Discover BI, the ultimate marketplace for all your products. Shop from a wide range of verified sellers, enjoy secure payments, fast delivery, and top-notch services',
    technologies: ['Next Js', 'Django', 'PXXL Posgresql Database', 'Render', 'Vercel'],
    date: '2024',
    type: 'E-commerce',
    client: 'Startup Founders',
    mainImage: '/bimarketplace.png',
    gallery: [],
    link: '#'
  },
  {
    id: 'prefran',
    title: "Prefran Global Foods Limited",
    subtitle: 'Prefran Global Official Website',
    description: 'At Prefran Global Ventures Nig Ltd, we believe food is love expressed through care, culture, and quality ingredients sourced from Nigerian farms to your kitchen',
    technologies: ['Next Js', 'Django', 'PXXL Posgresql Database', 'Flutterwave'],
    date: '2026',
    type: 'Food',
    client: 'The Prefran Global President',
    mainImage: '/prefran.png',
    gallery: [],
    link: 'prefranglobalfoodsltd.com'
  }
];
