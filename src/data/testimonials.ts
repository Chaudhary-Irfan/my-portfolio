export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Product Manager',
    company: 'Tech Startup',
    content:
      'Irfan delivered our mobile app ahead of schedule with exceptional attention to detail. The UI feels premium and the performance is flawless.',
    rating: 5,
    avatar: 'SM',
  },
  {
    id: '2',
    name: 'James Chen',
    role: 'CTO',
    company: 'Enterprise Solutions',
    content:
      'Working with Irfan on our full-stack project was seamless. He understood our requirements deeply and built a scalable solution that exceeded expectations.',
    rating: 5,
    avatar: 'JC',
  },
  {
    id: '3',
    name: 'Aisha Khan',
    role: 'Founder',
    company: 'E-commerce Brand',
    content:
      'The e-commerce platform Irfan built transformed our online presence. Clean code, beautiful design, and reliable delivery — exactly what we needed.',
    rating: 5,
    avatar: 'AK',
  },
  {
    id: '4',
    name: 'Michael Torres',
    role: 'Engineering Lead',
    company: 'SaaS Company',
    content:
      'Irfan\'s React Native expertise saved us months of development time. His cross-platform apps feel truly native on both iOS and Android.',
    rating: 5,
    avatar: 'MT',
  },
];
