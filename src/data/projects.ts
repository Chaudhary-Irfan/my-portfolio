import chatifyImg from '@/Assets/Projects/chatify.png';
import blogImg from '@/Assets/Projects/blog.png';
import emotionImg from '@/Assets/Projects/emotion.png';
import leafImg from '@/Assets/Projects/leaf.png';
import codeEditorImg from '@/Assets/Projects/codeEditor.png';
import suicideImg from '@/Assets/Projects/suicide.png';

export type ProjectCategory = 'web' | 'mobile' | 'fullstack' | 'ai' | 'dashboard';

export interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  impact: string;
  features: string[];
  stack: string[];
  category: ProjectCategory;
  timeline: string;
  ghLink?: string;
  demoLink?: string;
  image?: string;
  private?: boolean;
}

export const projectFilters: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'dashboard', label: 'Dashboard' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Real-Time ChatApp',
    description: 'Cross-platform chat application with real-time messaging and secure authentication.',
    problem: 'Teams needed a reliable, cross-platform messaging solution with scalable backend infrastructure.',
    impact: 'Delivered seamless real-time communication across iOS and Android with Django-powered backend.',
    features: ['Real-time messaging', 'Secure auth', 'Cross-platform', 'Scalable API'],
    stack: ['React Native', 'Expo', 'Django', 'SQL Server'],
    category: 'fullstack',
    timeline: '3 months',
    ghLink: 'https://github.com/Chaudhary-Irfan/ChatApp/tree/main/myproject',
    image: chatifyImg,
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Full-featured online store with admin panel, cart management, and product catalog.',
    problem: 'Business needed a modern e-commerce solution with admin controls and responsive design.',
    impact: 'Built a complete shopping experience with React and MUI, enabling product management and sales tracking.',
    features: ['Product catalog', 'Cart system', 'Admin panel', 'Responsive UI'],
    stack: ['React', 'MUI', 'JavaScript'],
    category: 'web',
    timeline: '2 months',
    ghLink: 'https://github.com/Chaudhary-Irfan/my-app-React-Js-/tree/Ecommerce',
    image: blogImg,
  },
  {
    id: 3,
    title: 'Quiz Application',
    description: 'Interactive quiz platform with responsive design, deployed on Vercel.',
    problem: 'Educational platform required an engaging, accessible quiz interface for learners.',
    impact: 'Live production app with smooth UX and instant feedback for users.',
    features: ['Dynamic questions', 'Score tracking', 'Responsive design', 'Vercel deployment'],
    stack: ['React', 'MUI', 'Vercel'],
    category: 'web',
    timeline: '1 month',
    ghLink: 'https://github.com/Chaudhary-Irfan/quiz-app',
    demoLink: 'https://quiz-app-git-main-chaudhary-irfans-projects.vercel.app/',
    image: emotionImg,
  },
  {
    id: 4,
    title: 'Attendance & Duty Module',
    description: 'Mobile-first attendance tracking and duty assignment system for enterprise clients.',
    problem: 'Organization needed streamlined attendance and duty management on mobile devices.',
    impact: 'Reduced manual tracking overhead with clean, intuitive mobile interface.',
    features: ['Attendance tracking', 'Duty assignment', 'Mobile-first UI', 'Offline support'],
    stack: ['React Native', 'Expo'],
    category: 'mobile',
    timeline: '2 months',
    private: true,
    image: leafImg,
  },
  {
    id: 5,
    title: 'Shop Management App',
    description: 'Inventory and sales management application for retail businesses.',
    problem: 'Small businesses lacked affordable, mobile-friendly inventory management tools.',
    impact: 'Enabled real-time inventory tracking and sales recording from any device.',
    features: ['Inventory management', 'Sales records', 'Reports', 'Multi-device sync'],
    stack: ['React Native', 'Expo'],
    category: 'mobile',
    timeline: '2 months',
    private: true,
    image: codeEditorImg,
  },
  {
    id: 6,
    title: 'Email & WhatsApp Integration',
    description: 'Unified communication hub for managing WhatsApp and email from a single interface.',
    problem: 'Client needed centralized communication management across multiple channels.',
    impact: 'Streamlined customer communication workflow with unified dashboard.',
    features: ['WhatsApp integration', 'Email management', 'Unified inbox', 'Real-time sync'],
    stack: ['React Native', 'Node.js'],
    category: 'dashboard',
    timeline: '3 months',
    private: true,
    image: suicideImg,
  },
  {
    id: 7,
    title: 'Ride Booking App',
    description: 'Premium frontend UI for a ride booking mobile application.',
    problem: 'Startup required polished, user-friendly ride booking interface.',
    impact: 'Delivered production-ready UI with smooth animations and intuitive flow.',
    features: ['Route selection', 'Live tracking UI', 'Payment flow', 'Driver matching'],
    stack: ['React Native', 'Expo'],
    category: 'mobile',
    timeline: '2 months',
    private: true,
    image: leafImg,
  },
  {
    id: 8,
    title: 'TB Diagnosis Support App',
    description: 'Android application supporting tuberculosis detection workflows for healthcare.',
    problem: 'Healthcare providers needed mobile tools to support diagnostic workflows.',
    impact: 'Improved accessibility of diagnostic support tools in field conditions.',
    features: ['Patient records', 'Diagnostic support', 'Offline capability', 'Secure data'],
    stack: ['Java', 'Android Studio', 'XML'],
    category: 'mobile',
    timeline: '2 months',
    private: true,
  },
];
