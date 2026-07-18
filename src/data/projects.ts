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
    id: 'timelyhub',
    title: 'TmelyHub',
    subtitle: 'TimelyHub Official Website',
    description:
  "TimelyHub is a modern digital platform designed to simplify everyday processes by providing fast, reliable, and user-friendly solutions that help individuals and businesses stay organized, connected, and productive.",
    technologies: ['React Js', 'Tailwind CSS'],
    date: '2025',
    type: 'Learning Platform',
    client: 'Timelyhub President',
    mainImage: '/timelyhub.png',
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
    link: 'https://bimarketplace.org'
  },
  {
    id: 'antartes',
    title: "Antartes Official Website",
    subtitle: "Building Digital Solutions That Drive Growth",    
    description: "Antartes is a technology company that helps businesses, startups, and organizations bring their ideas to life through custom websites, mobile applications, and innovative digital solutions. We combine creativity, strategy, and modern technology to build scalable products that drive growth and deliver exceptional user experiences.",
    technologies: ['Next Js', 'Django', 'PXXL Posgresql Database', 'Flutterwave'],
    date: '2025',
    type: 'Food',
    client: 'The Prefran Global President',
    mainImage: '/antartes.png',
    gallery: [],
    link: 'https://antartes.vercel.app'
  },
   {
    id: 'impactpreneur',
    title: "Impactpreneur Global",
    subtitle: 'Impactpreneur Global Official Website',
    description: "Impactpreneur Global empowers entrepreneurs and businesses with mentorship, education, consulting, and digital solutions to build sustainable, purpose-driven ventures and create lasting impact.",
    technologies: ['Next Js', 'Django', 'PXXL Posgresql Database', 'Flutterwave'],
    date: '2025',
    type: 'Food',
    client: 'The Impactpreneur Global President',
    mainImage: '/impactPreneur.png',
    gallery: [],
    link: 'https://impactpreneurglobal.com'
  }

];
