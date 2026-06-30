export interface Service {
  id: string;
  title: string;
  description: string;
  value: string;
  deliverables: string[];
  technologies: string[];
  timeline: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications from concept to deployment with modern, scalable architecture.',
    value: 'Ship production-ready products faster with a single engineer owning the entire stack.',
    deliverables: ['Responsive frontend', 'REST/GraphQL APIs', 'Database design', 'CI/CD deployment'],
    technologies: ['React', 'Next.js', 'Django', 'Node.js', 'PostgreSQL'],
    timeline: '4–12 weeks',
    icon: 'layers',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications that feel native on iOS and Android.',
    value: 'Reach both platforms with one codebase while maintaining premium native UX.',
    deliverables: ['Cross-platform app', 'App Store submission', 'Push notifications', 'Offline support'],
    technologies: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    timeline: '6–16 weeks',
    icon: 'smartphone',
  },
  {
    id: 'dashboard',
    title: 'Dashboard & Admin Panels',
    description: 'Data-rich admin interfaces with real-time visualization and role-based access.',
    value: 'Empower teams with intuitive tools to manage, analyze, and act on business data.',
    deliverables: ['Admin dashboard', 'Data visualization', 'User management', 'RBAC system'],
    technologies: ['React', 'MUI', 'Chart.js', 'Node.js'],
    timeline: '3–8 weeks',
    icon: 'layout-dashboard',
  },
  {
    id: 'api',
    title: 'API Development & Integration',
    description: 'Robust RESTful APIs and seamless third-party service integrations.',
    value: 'Connect your product ecosystem with secure, documented, scalable APIs.',
    deliverables: ['Custom API', 'Documentation', 'Authentication', 'Third-party integrations'],
    technologies: ['Django REST', 'Node.js', 'Express', 'PostgreSQL'],
    timeline: '2–6 weeks',
    icon: 'plug',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Optimization',
    description: 'Keep your applications running at peak performance with ongoing support.',
    value: 'Protect your investment with proactive monitoring, updates, and performance tuning.',
    deliverables: ['Performance audit', 'Security updates', 'Bug fixes', 'Feature enhancements'],
    technologies: ['CI/CD', 'AWS', 'Vercel', 'Docker'],
    timeline: 'Ongoing',
    icon: 'wrench',
  },
];
