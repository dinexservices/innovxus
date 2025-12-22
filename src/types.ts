
export interface Event {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  location: string;
  description: string;
  image: string;
  category: 'Music' | 'Workshop' | 'Tech' | 'Sports' | 'Cultural';
  goingCount: number;
  attendees: string[];
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
