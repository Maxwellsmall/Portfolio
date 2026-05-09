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
    mainImage: '/uncutxtra-main.png',
    gallery: ['/uncutxtra-1.png', '/uncutxtra-2.png'],
    link: '#'
  },
  {
    id: 'pxxl',
    title: 'Pxxl App',
    subtitle: 'Cloud Deployment Platform',
    description: 'Enterprise-grade cloud deployment platform enabling instant deployment of websites, API...',
    technologies: ['React', 'Node.js', 'AWS', 'Docker'],
    date: '2024',
    type: 'Cloud Platform',
    client: 'Self-initiated',
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
