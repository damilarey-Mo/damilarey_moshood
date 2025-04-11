import { Icons } from '@/components/icons';
import { CgLogo } from '@/components/logoicon';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    icon: <CgLogo width={32} height={32} />,
    title: 'Crownedgear Luxury',
    description:
      'e-commerce Website for a global luxury street fashion Brand. Built with React while using Wordpress as CMS',
    technologies: [
      'Wordpress',
      'React.js',
      'JavaScript',
      'JQuery',
      'SQL',
      'PHP',
      'Tailwind CSS',
    ],
    links: {
      preview: 'https://crownedgear.com',
      github: 'https://github.com/your/repo', // 👈 Add this line
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
  {
    icon: <Icons.nextstarter width={32} height={32} />,
    title: 'Next-starter',
    description: 'Next.js starter template, packed with useful features.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn/ui',
      'Next-auth',
      'Prisma',
    ],
    links: {
      preview: 'https://next-starter-skolaczk.vercel.app',
      github: 'https://github.com/damilarey-Mo/Take-Note',
      githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
    },
  },
  {
    icon: <Icons.audiophile width={32} height={32} />,
    title: 'Audiophile',
    description: 'Online store specializing in headphones and speakers.',
    technologies: [
      'React',
      'Styled-components',
      'TypeScript',
      'Stripe',
      'Firebase',
    ],
    links: {
      preview: 'https://audiophile-ms.netlify.app/',
      github: 'https://github.com/damilarey-Mo/Take-Note',
      githubApi: 'https://api.github.com/repos/Skolaczk/Audiophile',
    },
  },
] as const;
export type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  date: string;
  keyContributions: string[];
};
export const experiencesData = [
  {
    title: 'Crownedgear Luxury',
    location: 'IT Manager & Web Management Team Lead',
    description:
      'Pioneered the digital transformation of a luxury fashion brand by integrating scalable IT infrastructure, modern e-commerce solutions, and high-performing web technologies.',
    date: '2023 - 2025',
    keyContributions: [
      'Migrated core systems to the cloud, improving uptime, speed, and data security across multiple touchpoints.',
      'Engineered and deployed a modern, automated backup and disaster recovery system to ensure business continuity, data integrity, and rapid recovery in the event of system failures or cyber incidents.',
      'Led the complete redesign and relaunch of the company’s e-commerce platform, improving customer engagement and online sales.',
      'Implemented advanced data analytics to drive smarter business decisions, inventory forecasting, and customer behavior tracking.',
      'Established a robust cybersecurity framework, conducting regular vulnerability assessments and enforcing best practices.',
      'Negotiated contracts with IT vendors and managed cybersecurity initiatives to protect sensitive customer and business data',
      'Played a key role in improving operational efficiency, reducing downtime, and optimizing internal workflows.',
    ],
  },
  {
    title: 'Fredacom',
    location: 'Full Stack Developer & Technical Support Specialist',
    description:
      'Built and supported mission-critical web solutions while providing high-level tech support to internal and external users.',
    date: '2022-2023',
    keyContributions: [
      'Developed dynamic web platforms using React, Node.js, MongoDB, and Express, tailored to client business needs.',
      'Delivered end-to-end technical support services, from remote diagnostics to onsite issue resolution.',
      'Conducted user research and provided feedback that improved product usability.',
      'Integrated website monitoring tools to track performance, security threats, and user experience issues.',
      'Mentored junior developers and helped standardize development workflows and documentation',
      'Played a key role in improving operational efficiency, reducing downtime, and optimizing internal workflows',
    ],
  },
  {
    title: 'Value Konnect Africa',
    location: 'Intern & Graduate Trainee (Tech & Strategy)',
    description:
      'Contributed to digital innovation projects for SMEs and NGOs, supporting their transition into the digital economy.',
    date: '2021-2022',
    keyContributions: [
      'Supported web-based platform development using WordPress and low-code tools.',
      'Assisted in designing digital transformation strategies for local businesses.',
      'Conducted user research and provided feedback that improved product usability.',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.php className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.python className="size-12" /> },
  { icon: <Icons.figma className="size-12" /> },
  { icon: <Icons.framer className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.bootstrap className="size-12" /> },
  { icon: <Icons.wordpress className="size-12" /> },
  { icon: <Icons.shopify className="size-12" /> },
] as const;
