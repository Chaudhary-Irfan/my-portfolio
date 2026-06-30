export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'fullstack';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  experience: string;
  description: string;
  projectsCount: number;
  icon: string;
}

export const skillCategories: { id: SkillCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'devops', label: 'DevOps' },
  { id: 'fullstack', label: 'Full Stack' },
];

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    experience: '3+ years',
    description: 'Component-driven UIs with hooks, state management, and performance optimization.',
    projectsCount: 8,
    icon: 'react',
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'mobile',
    experience: '3+ years',
    description: 'Cross-platform mobile apps with Expo, native modules, and App Store deployment.',
    projectsCount: 6,
    icon: 'mobile',
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    experience: '2+ years',
    description: 'REST APIs, authentication, ORM, and scalable Python backend systems.',
    projectsCount: 4,
    icon: 'server',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    experience: '2+ years',
    description: 'Real-time APIs, WebSockets, microservices, and third-party integrations.',
    projectsCount: 5,
    icon: 'server',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    experience: '2+ years',
    description: 'Type-safe applications with robust interfaces and maintainable codebases.',
    projectsCount: 6,
    icon: 'code',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    experience: '3+ years',
    description: 'Backend logic, automation, data processing, and API development.',
    projectsCount: 5,
    icon: 'code',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    experience: '2+ years',
    description: 'Document modeling, aggregation pipelines, and schema design.',
    projectsCount: 3,
    icon: 'database',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    experience: '2+ years',
    description: 'Relational modeling, complex queries, and production-grade data integrity.',
    projectsCount: 4,
    icon: 'database',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'backend',
    experience: '2+ years',
    description: 'Auth, Firestore, Cloud Functions, and rapid prototyping.',
    projectsCount: 3,
    icon: 'cloud',
  },
  {
    id: 'expo',
    name: 'Expo',
    category: 'mobile',
    experience: '2+ years',
    description: 'Streamlined React Native development with OTA updates and native APIs.',
    projectsCount: 5,
    icon: 'mobile',
  },
  {
    id: 'mui',
    name: 'Material UI',
    category: 'frontend',
    experience: '2+ years',
    description: 'Professional UI systems with custom theming and responsive layouts.',
    projectsCount: 4,
    icon: 'layout',
  },
  {
    id: 'dotnet',
    name: '.NET',
    category: 'backend',
    experience: '1+ years',
    description: 'Enterprise-grade APIs and frontend integration with ASP.NET Core.',
    projectsCount: 2,
    icon: 'server',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    experience: '1+ years',
    description: 'Containerized deployments, multi-stage builds, and local dev environments.',
    projectsCount: 3,
    icon: 'cloud',
  },
  {
    id: 'git',
    name: 'Git & CI/CD',
    category: 'devops',
    experience: '3+ years',
    description: 'Version control workflows, GitHub Actions, and automated deployment pipelines.',
    projectsCount: 8,
    icon: 'layers',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'fullstack',
    experience: '1+ years',
    description: 'Schema design, resolvers, and efficient data fetching across client and server.',
    projectsCount: 2,
    icon: 'layers',
  },
  {
    id: 'rest',
    name: 'REST APIs',
    category: 'fullstack',
    experience: '3+ years',
    description: 'End-to-end API design from Django/Node backends to React and mobile clients.',
    projectsCount: 10,
    icon: 'server',
  },
];
