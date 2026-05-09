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
    id: 'uncutxtra',
    title: 'Uncutxtra Awards Voting',
    subtitle: 'Official voting platform for UNCUTXTRA Award Night 4.0',
    description: 'Voting site for UNCUTXTRA Award Night 4.0, enabling users to securely vote for nominees across categories with seamless performance and reliable data storage.',
    technologies: ['Next.js', 'Drizzle ORM', 'Node.js', 'PostgreSQL'],
    date: '2025',
    type: 'Voting Platform',
    client: 'Uncutxtra',
    mainImage: '/rccg.png',
    gallery: ['/uncutxtra-1.png', '/uncutxtra-2.png'],
    link: '#'
  },
  {
    id: 'pxxl',
    title: 'BI Marketplace',
    subtitle: 'E-commerce platform',
    description: 'Discover BI, the ultimate marketplace for all your products. Shop from a wide range of verified sellers, enjoy secure payments, fast delivery, and top-notch services',
    technologies: ['React', 'Node.js', 'AWS', 'Docker'],
    date: '2024',
    type: 'E-commerce',
    client: 'Startup Founders',
    mainImage: '/bimarketplace.png',
    gallery: [],
    link: '#'
  },
  {
    id: 'olamide',
    title: "Olamide's Tour Website",
    subtitle: 'Official Musician Website',
    description: 'Official site for Nigerian Musician: Olamide (Badoo), featuring tour schedules, ticket...',
    technologies: ['Vite', 'React', 'Framer Motion'],
    date: '2024',
    type: 'Entertainment',
    client: 'YBNL',
    mainImage: '/prefran.png',
    gallery: [],
    link: '#'
  }
];
