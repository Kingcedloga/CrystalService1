import { TrackingStatus, NewsArticle, JobOffer } from '../types';
import logo1 from '../images/logopart1.jpg'; ;

export const mockTrackingData: Record<string, TrackingStatus[]> = {
  'EXP001234': [
    { id: '1', status: 'Créé', location: 'Kinshasa', date: '2025-01-10', time: '09:00', description: 'Expédition créée et prise en charge', completed: true },
    { id: '2', status: 'Enlevé', location: 'Kinshasa', date: '2025-01-10', time: '14:30', description: 'Marchandise enlevée chez l\'expéditeur', completed: true },
    { id: '3', status: 'Sortie douane', location: 'Kinshasa', date: '2025-01-11', time: '10:15', description: 'Dédouanement effectué avec succès', completed: true },
    { id: '4', status: 'En transit', location: 'Matadi', date: '2025-01-12', time: '08:45', description: 'En cours de transport vers la destination', completed: true },
    { id: '5', status: 'Arrivé', location: 'Lubumbashi', date: '2025-01-13', time: '16:20', description: 'Marchandise arrivée au centre de tri', completed: false },
    { id: '6', status: 'En livraison', location: 'Lubumbashi', date: '', time: '', description: 'Sortie pour livraison finale', completed: false },
    { id: '7', status: 'Livré', location: 'Lubumbashi', date: '', time: '', description: 'Livraison effectuée au destinataire', completed: false },
  ],
  'MAR567890': [
    { id: '1', status: 'Créé', location: 'Matadi', date: '2025-01-08', time: '11:00', description: 'Expédition maritime créée', completed: true },
    { id: '2', status: 'Enlevé', location: 'Matadi', date: '2025-01-08', time: '15:30', description: 'Conteneur pris en charge au port', completed: true },
    { id: '3', status: 'Sortie douane', location: 'Matadi', date: '2025-01-09', time: '09:15', description: 'Formalités douanières terminées', completed: true },
    { id: '4', status: 'En transit', location: 'En mer', date: '2025-01-10', time: '06:00', description: 'Navire en route vers Pointe-Noire', completed: true },
    { id: '5', status: 'Arrivé', location: 'Pointe-Noire', date: '2025-01-15', time: '14:30', description: 'Arrivée au port de destination', completed: true },
    { id: '6', status: 'En livraison', location: 'Pointe-Noire', date: '2025-01-16', time: '09:00', description: 'Préparation pour livraison finale', completed: false },
    { id: '7', status: 'Livré', location: 'Pointe-Noire', date: '', time: '', description: 'Livraison au destinataire final', completed: false },
  ]
};

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Nouvelle ligne de transport maritime vers l\'Afrique de l\'Ouest',
    excerpt: 'Nous sommes fiers d\'annoncer l\'ouverture d\'une nouvelle ligne maritime reliant Matadi aux principaux ports de l\'Afrique de l\'Ouest.',
    content: 'Cette nouvelle ligne maritime représente un investissement majeur dans notre capacité de transport...',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
    publishedAt: '2025-01-15',
    category: 'Transport Maritime'
  },
  {
    id: '2',
    title: 'Digitalisation des procédures douanières',
    excerpt: 'Découvrez notre nouvelle plateforme digitale qui simplifie et accélère toutes vos démarches douanières.',
    content: 'La digitalisation de nos services douaniers permet désormais un traitement plus rapide...',
    image: 'https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg',
    publishedAt: '2025-01-12',
    category: 'Douane'
  },
  {
    id: '3',
    title: 'Expansion de notre réseau d\'agences de voyage',
    excerpt: 'Ouverture de nouvelles agences à Bukavu et Goma pour mieux servir la région du Kivu.',
    content: 'Dans le cadre de notre expansion géographique, nous ouvrons deux nouvelles agences...',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
    publishedAt: '2025-01-10',
    category: 'Agence de Voyage'
  }
];

export const mockJobs: JobOffer[] = [
  {
    id: '1',
    title: 'Agent de Transit',
    department: 'Opérations Douanières',
    location: 'Kinshasa',
    type: 'CDI',
    description: 'Nous recherchons un agent de transit expérimenté pour rejoindre notre équipe de Kinshasa.',
    requirements: [
      'Bac+3 minimum en commerce international ou équivalent',
      '3 ans d\'expérience minimum en transit douanier',
      'Maîtrise des procédures douanières RDC',
      'Excellente maîtrise du français et de l\'anglais',
      'Compétences informatiques (logiciels de transit)'
    ],
    postedAt: '2025-01-15'
  },
  {
    id: '2',
    title: 'Conseiller Voyage',
    department: 'Agence de Voyage',
    location: 'Lubumbashi',
    type: 'CDI',
    description: 'Rejoignez notre équipe d\'experts en voyage pour conseiller nos clients sur leurs déplacements.',
    requirements: [
      'Formation en tourisme ou hôtellerie',
      '2 ans d\'expérience en agence de voyage',
      'Connaissance des destinations africaines',
      'Maîtrise des systèmes de réservation (Amadeus, Galileo)',
      'Sens du service client développé'
    ],
    postedAt: '2025-01-12'
  }
];

export const offices = [
  {
    city: 'Kinshasa',
    district: 'Gombe',
    address: 'Avenue des Cliniques, Immeuble Forescom, 2ème étage',
    phone: '+243 81 234 5678',
    whatsapp: '+243 81 234 5678',
    email: 'kinshasa@crystalservices.cd',
    coordinates: { lat: -4.3317, lng: 15.3139 }
  },
  {
    city: 'Matadi',
    district: 'Centre-ville',
    address: 'Avenue Inga 6, Matadi, Kongo Central',
    phone: '+243 81 345 6789',
    whatsapp: '+243 81 345 6789',
    email: 'matadi@crystalservices.org',
    coordinates: { lat: -5.8386, lng: 13.4617 }
  },
  {
    city: 'Lubumbashi',
    district: 'Katuba',
    address: 'Avenue Mobutu, Quartier Résidentiel',
    phone: '+243 81 456 7890',
    whatsapp: '+243 81 456 7890',
    email: 'lubumbashi@crystalservices.cd',
    coordinates: { lat: -11.6645, lng: 27.4794 }
  },
  {
    city: 'Beni',
    district: 'Kivu',
    address: 'Avenue de la Paix, Centre Commercial Beni',
    phone: '+243 81 567 8901',
    whatsapp: '+243 81 567 8901',
    email: 'beni@crystalservices.cd',
    coordinates: { lat: 0.4951, lng: 29.4734 }
  }
];

export const stats = [
  { label: 'Années d\'expérience', value: '15+' },
  { label: 'Clients satisfaits', value: '2,500+' },
  { label: 'Expéditions traitées', value: '50,000+' },
  { label: 'Partenaires actifs', value: '200+' }
];

export const mockPartnersLogos = [
  {
    id: '1',
    name: 'Malcon Sarl',
    logo: logo1
  },
  {
    id: '1',
    name: 'Malcon Sarl',
    logo: logo1
  },
  {
    id: '1',
    name: 'Malcon Sarl',
    logo: logo1
  },
  {
    id: '1',
    name: 'Malcon Sarl',
    logo: logo1
  },

]

export const mockTeamMembers = [
  {
    id: '1',
    name: 'Roger MUAKA',
    position: 'Directeur Général',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    description: '15 ans d\'expérience dans la logistique internationale. Expert en développement commercial en Afrique centrale.',
    linkedin: 'https://linkedin.com/in/jb-mukendi'
  },
  {
    id: '2',
    name: 'Mango MATABISHI',
    position: 'Directeur Général Adjoint',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    description: 'Spécialiste en relations clients et développement de partenariats stratégiques. MBA en Commerce International.',
    linkedin: 'https://linkedin.com/in/marie-kalala'
  },
  {
    id: '3',
    name: 'Freddy MVIKA',
    position: 'Responsable des opérations',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    description: 'Expert en réglementations douanières RDC et CEMAC. 12 ans d\'expérience en transit international.',
    linkedin: 'https://linkedin.com/in/patrick-mbuyi'
  }
];