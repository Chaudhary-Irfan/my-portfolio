export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

export const timeline: TimelineItem[] = [
  {
    id: '1',
    year: '2024 — Present',
    title: 'Mobile & Web App Developer',
    organization: 'Maxremind Inc.',
    description: 'Building cross-platform mobile applications and responsive web interfaces for enterprise clients.',
    type: 'work',
  },
  {
    id: '2',
    year: '2023 — 2024',
    title: 'Full Stack Developer',
    organization: 'Freelance & Client Projects',
    description: 'Delivered 10+ projects spanning React Native apps, Django backends, and React web applications.',
    type: 'work',
  },
  {
    id: '3',
    year: '2021 — 2025',
    title: "Bachelor's in Information Technology",
    organization: 'Foundation University',
    description: 'CGPA: 3.57. Focused on software engineering, database systems, and mobile development.',
    type: 'education',
  },
  {
    id: '4',
    year: '2023',
    title: 'Open Source Contributor',
    organization: 'GitHub',
    description: 'Active contributor with multiple repositories showcasing full-stack and mobile projects.',
    type: 'achievement',
  },
  {
    id: '5',
    year: '2022',
    title: 'Hackathon Participant',
    organization: 'Development Competitions',
    description: 'Participated in development competitions and hackathons, building solutions under tight deadlines.',
    type: 'achievement',
  },
];
