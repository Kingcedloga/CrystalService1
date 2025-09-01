export interface TrackingStatus {
  id: string;
  status: string;
  location: string;
  date: string;
  time: string;
  description: string;
  completed: boolean;
}

export interface QuoteRequest {
  id: string;
  serviceType: string;
  incoterm?: string;
  weight: number;
  volume: number;
  origin: string;
  destination: string;
  value: number;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
  createdAt: string;
}

export interface TravelRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  route: string;
  departureDate: string;
  returnDate?: string;
  budget: string;
  travelers: number;
  notes?: string;
  createdAt: string;
}

export interface PartnerRequest {
  id: string;
  companyName: string;
  sector: string;
  services: string[];
  contactPerson: {
    name: string;
    position: string;
    email: string;
    phone: string;
  };
  description: string;
  createdAt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
  category: string;
}

export interface JobOffer {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  postedAt: string;
}