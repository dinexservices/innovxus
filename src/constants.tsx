
import { Event, GalleryImage, Testimonial } from './types';

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Pulse 2024: Music Fest',
    date: 'April 15, 2024',
    day: '15',
    month: 'APR',
    location: 'Central Stadium, London',
    description: 'A night of electrifying beats and soul-stirring melodies featuring top international DJs.',
    image: 'https://images.unsplash.com/photo-1459749411177-042180ceea72?q=80&w=800&auto=format&fit=crop',
    category: 'Music',
    goingCount: 124,
    attendees: [
      'https://i.pravatar.cc/150?u=1',
      'https://i.pravatar.cc/150?u=2',
      'https://i.pravatar.cc/150?u=3'
    ]
  },
  {
    id: '2',
    title: 'CodeRed Hackathon',
    date: 'May 02, 2024',
    day: '02',
    month: 'MAY',
    location: 'Tech Hub Arena, Silicon Valley',
    description: '48 hours of intense coding, innovation, and red-hot competition.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    category: 'Tech',
    goingCount: 89,
    attendees: [
      'https://i.pravatar.cc/150?u=4',
      'https://i.pravatar.cc/150?u=5',
      'https://i.pravatar.cc/150?u=6'
    ]
  }
];

export const PAST_EVENTS: Event[] = [
  {
    id: 'p1',
    title: 'Zenith Conclave 2023',
    date: 'Dec 12, 2023',
    day: '12',
    month: 'DEC',
    location: 'Grand Hyatt Auditorium',
    description: 'The flagship leadership summit that brought together 50+ CEOs and 2000+ ambitious students for a day of transformative mentorship and visionary keynotes. We bridged the gap between academia and industry through interactive fire-side chats.',
    image: 'https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?q=80&w=1200&auto=format&fit=crop',
    category: 'Workshop',
    goingCount: 2150,
    attendees: []
  },
  {
    id: 'p2',
    title: 'Hyperdrive Esports',
    date: 'Oct 15, 2023',
    day: '15',
    month: 'OCT',
    location: 'Nexus Gaming Arena',
    description: 'A massive inter-college gaming tournament featuring 64 teams competing in Valorant and League of Legends. With a 4K live broadcast and professional casting, it set a new standard for campus esports events.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    category: 'Sports',
    goingCount: 850,
    attendees: []
  },
  {
    id: 'p3',
    title: 'Velvet Night Gala',
    date: 'Aug 05, 2023',
    day: '05',
    month: 'AUG',
    location: 'The Royal Pavilion',
    description: 'An evening of sophisticated culture, fashion, and performing arts. Students from across the state showcased their creative talents in a high-production runway show and musical performances under the stars.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop',
    category: 'Cultural',
    goingCount: 1200,
    attendees: []
  }
];

export const COLLEGE_PARTNERS = [
  { name: 'Stanford University', logo: 'https://logo.clearbit.com/stanford.edu' },
  { name: 'MIT', logo: 'https://logo.clearbit.com/mit.edu' },
  { name: 'Oxford University', logo: 'https://logo.clearbit.com/ox.ac.uk' },
  { name: 'Harvard University', logo: 'https://logo.clearbit.com/harvard.edu' },
  { name: 'Cambridge', logo: 'https://logo.clearbit.com/cam.ac.uk' },
  { name: 'Imperial College', logo: 'https://logo.clearbit.com/imperial.ac.uk' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=1000&auto=format&fit=crop', caption: 'Bass Drop' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop', caption: 'Festival Vibes' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop', caption: 'Grand Stage' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop', caption: 'Neon Moments' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1520242739010-44e95bde329e?q=80&w=1000&auto=format&fit=crop', caption: 'Tech Talk' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1000&auto=format&fit=crop', caption: 'Live Energy' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Student Coordinator',
    content: 'Innovxus transformed our college fest. The professionalism and energy they brought were unmatched!',
    avatar: 'https://i.pravatar.cc/150?u=sj'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Tech Lead',
    content: 'CodeRed was the best organized hackathon I have ever attended. Seamless execution.',
    avatar: 'https://i.pravatar.cc/150?u=mc'
  }
];
