import house1 from '@/assets/house-1.jpg';
import house2 from '@/assets/house-2.jpg';
import house3 from '@/assets/house-3.jpg';
import house4 from '@/assets/house-4.jpg';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  features: string[];
  gallery: string[];
  year: number;
  status: 'For Sale' | 'For Rent' | 'Sold';
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    location: 'Beverly Hills, CA',
    price: '$2,850,000',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: house1,
    description: 'A stunning contemporary villa featuring clean architectural lines, floor-to-ceiling windows, and premium finishes throughout. This property exemplifies modern luxury living with its open-concept design and seamless indoor-outdoor flow.',
    features: [
      'Open concept floor plan',
      'Floor-to-ceiling windows',
      'Premium kitchen appliances',
      'Private garden',
      'Two-car garage',
      'Smart home technology',
      'Energy efficient design',
      'High-end finishes'
    ],
    gallery: [house1, house2, house3, house4],
    year: 2023,
    status: 'For Sale'
  },
  {
    id: '2',
    title: 'Classic Victorian Charm',
    location: 'San Francisco, CA',
    price: '$1,950,000',
    type: 'Victorian',
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    image: house2,
    description: 'Beautifully restored Victorian home that seamlessly blends historic charm with modern amenities. Located in one of San Francisco\'s most desirable neighborhoods, this property offers timeless elegance and contemporary comfort.',
    features: [
      'Historic architectural details',
      'Restored original hardwood floors',
      'Modern kitchen renovation',
      'Period-appropriate fixtures',
      'Private rear garden',
      'Updated electrical and plumbing',
      'Original crown molding',
      'Clawfoot bathtub'
    ],
    gallery: [house2, house1, house4, house3],
    year: 1902,
    status: 'For Sale'
  },
  {
    id: '3',
    title: 'Downtown Penthouse Suite',
    location: 'Manhattan, NY',
    price: '$8,500/month',
    type: 'Penthouse',
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    image: house3,
    description: 'Luxury penthouse apartment with breathtaking panoramic city views. This sophisticated urban retreat features floor-to-ceiling windows, premium finishes, and access to world-class building amenities in the heart of Manhattan.',
    features: [
      'Panoramic city views',
      'Floor-to-ceiling windows',
      'Premium appliances',
      'Building concierge',
      'Rooftop terrace access',
      'Fitness center',
      'In-unit laundry',
      'Walk-in closets'
    ],
    gallery: [house3, house4, house1, house2],
    year: 2020,
    status: 'For Rent'
  },
  {
    id: '4',
    title: 'Oceanfront Paradise Villa',
    location: 'Malibu, CA',
    price: '$5,200,000',
    type: 'Beachfront Villa',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: house4,
    description: 'Spectacular beachfront villa offering direct ocean access and unparalleled luxury. This architectural masterpiece features an infinity pool, expansive terraces, and panoramic ocean views from every room.',
    features: [
      'Direct beach access',
      'Infinity pool',
      'Ocean views from every room',
      'Outdoor entertainment areas',
      'Wine cellar',
      'Home theater',
      'Guest house',
      'Private dock'
    ],
    gallery: [house4, house3, house2, house1],
    year: 2021,
    status: 'For Sale'
  }
];

export const getFeaturedProperties = () => properties.slice(0, 3);
export const getPropertyById = (id: string) => properties.find(p => p.id === id);