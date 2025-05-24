import { Program, NewsItem, Partner, Course, Product, Service, Location } from '../types';
import Aviculture from '../assets/elevage.jpg';
import Agriculture from '../assets/agriculture.jpg';
import Agroalimentaire from '../assets/transform_cacao.png';
import Pisculture from '../assets/piscicultre.jpg';
import Comptabilité from '../assets/gestion.jpeg';
import Santé from '../assets/sante.jpeg';
import Commerce from '../assets/gestion.jpeg';
import Technologie from '../assets/techno.jpeg';
import Professionnel from '../assets/professionnelle.jpg';
import elevageImage from '../assets/elevage.jpg';
import tomateImage from '../assets/tomates.jpg';
import mielImage from '../assets/miel.jpg';

export const programs: Program[] = [
  {
    id: '1',
    title: 'Entrepreneuriat Agricole',
    description: 'Formation complète sur les aspects techniques et commerciaux de l\'entrepreneuriat agricole. Apprenez à gérer une exploitation rentable et durable.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    title: 'Aviculture Moderne',
    description: 'Apprenez les techniques modernes d\'élevage de volailles, de la gestion de l\'alimentation aux stratégies de commercialisation des œufs et poulets.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: Aviculture
  },
  {
    id: '3',
    title: 'Agriculture Durable',
    description: 'Découvrez les pratiques agricoles durables, y compris l\'agroécologie, la conservation des sols et la gestion de l\'eau pour une production respectueuse de l\'environnement.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: Agriculture
  },
  {
    id: '4',
    title: 'Transformation Agroalimentaire',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: Agroalimentaire
  },
  {
    id: '5',
    title: 'Pisculture Moderne',
    description: 'Apprenez les techniques modernes d\'élevage, de la gestion de l\'alimentation aux stratégies de commercialisation.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: Pisculture
  },
  {
    id: '6',
    title: 'Comptabilité et Gestion',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '1 mois',
    cost: '260 000 FCFA',
    imageUrl: Comptabilité
  },
  {
    id: '7',
    title: 'Santé Médicale',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '265 000 FCFA',
    imageUrl: Santé
  },
  {
    id: '8',
    title: 'Commerce et Gestion',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '260 000 FCFA',
    imageUrl: Commerce
  },
  {
    id: '9',
    title: 'Technologie',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '350 000 FCFA',
    imageUrl: Technologie
  },
  {
    id: '10',
    title: 'Département Professionnel',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '265 000 FCFA',
    imageUrl: Professionnel
  },
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Inauguration du nouveau restaurant bar services à Ebolowa',
    excerpt: 'Le CIAPO COOP-CA renforce sa présence avec un nouveau centre ultramoderne',
    content: 'Le CIAPO COOP-CA a inauguré son nouveau centre de formation agricole à Yamoussoukro. Équipé des dernières technologies, ce centre permettra de former plus de 200 jeunes agriculteurs par an aux techniques agricoles modernes et à l\'entrepreneuriat.',
    date: '2025-05-30',
    category: 'Évènements',
    imageUrl: 'src/assets/restau.jpeg',
    author: 'Admin CIAPO'
  },
  {
    id: '2',
    title: 'Remise de certificats à 50 nouveaux entrepreneurs agricoles',
    excerpt: 'Une nouvelle génération d\'agriculteurs prête à transformer le secteur',
    content: 'Lors d\'une cérémonie officielle à Abidjan, 50 jeunes formés par le CIAPO COOP-CA ont reçu leurs certificats d\'entrepreneur agricole. Ces jeunes ont déjà commencé à mettre en œuvre leurs projets agricoles dans diverses régions du pays.',
    date: '2025-12-30',
    category: 'Succès',
    imageUrl: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Admin CIAPO'
  },
  {
    id: '3',
    title: 'Nouvelle technique d\'irrigation économe en eau adoptée par nos centres',
    excerpt: 'Innovation durable pour faire face aux défis climatiques',
    content: 'Le CIAPO COOP-CA a adopté une nouvelle technique d\'irrigation goutte-à-goutte qui permet d\'économiser jusqu\'à 60% d\'eau par rapport aux méthodes traditionnelles. Cette technique est désormais enseignée dans tous nos programmes de formation.',
    date: '2025-01-10',
    category: 'Innovation',
    imageUrl: 'src/assets/systeme-irrigation.png',
    author: 'Admin CIAPO'
  }
];

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Ministère de l\'Agriculture',
    description: 'Partenaire institutionnel soutenant nos programmes de formation',
    logoUrl: 'https://placehold.co/200x100/png?text=Min.+Agriculture',
    website: 'https://agriculture.gouv.ci'
  },
  {
    id: '2',
    name: 'Banque Africaine de Développement',
    description: 'Soutien financier pour nos projets d\'expansion',
    logoUrl: 'https://placehold.co/200x100/png?text=BAD',
    website: 'https://www.afdb.org'
  },
  {
    id: '3',
    name: 'Organisation des Nations Unies pour l\'alimentation et l\'agriculture (FAO)',
    description: 'Partenaire technique pour les méthodes agricoles durables',
    logoUrl: 'https://placehold.co/200x100/png?text=FAO',
    website: 'https://www.fao.org'
  },
  {
    id: '4',
    name: 'Cohimms Anglo Saxon Universite Professionnelle De Douala',
    description: 'Partenaire de formation universitaire',
    logoUrl: 'src/assets/COHIMMS.png',
    website: 'https://www.cohimms.org'
  },
  {
    id: '5',
    name: 'Société Camerounaises des Postes Télécommunications et Travaux Electrique (SCPTTE Sarl)',
    description: 'Partenaire technique pour les installations électriques',
    logoUrl: 'src/assets/SCPTTE.png',
    website: 'https://www.scpttesarl.org'
  },
  {
    id: '6',
    name: 'Groupe Initiative comme des Agriculteurs de Yemyema\'a (GIC ABMY)',
    description: 'Partenaire soutenant les projets agricoles ',
    logoUrl: 'src/assets/GICAMBY.png',
    website: 'https://www.gicamby.org'
  },
  {
    id: '7',
    name: 'Afripionnier Investissements Sarl (API)',
    description: 'Partenaire financier pour les projets agricoles',
    logoUrl: 'src/assets/API.png',
    website: 'https://www.apisarl.org'
  }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction à l\'Entrepreneuriat Agricole',
    description: 'Ce cours en ligne couvre les bases de l\'entrepreneuriat dans le secteur agricole, avec un focus sur l\'analyse de marché et la planification d\'affaires.',
    level: 'Débutant',
    duration: '4 semaines',
    instructor: 'Dr. Kouamé Akissi',
    imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600',
    modules: 6,
    enrolledStudents: 120
  },
  {
    id: '2',
    title: 'Techniques Avancées d\'Aviculture',
    description: 'Approfondissez vos connaissances en élevage de volailles avec ce cours couvrant la nutrition, la santé animale et les installations modernes.',
    level: 'Intermédiaire',
    duration: '6 semaines',
    instructor: 'Prof. Bakayoko Mamadou',
    imageUrl: 'https://images.pexels.com/photos/6862157/pexels-photo-6862157.jpeg?auto=compress&cs=tinysrgb&w=600',
    modules: 8,
    enrolledStudents: 85
  },
  {
    id: '3',
    title: 'Gestion Financière pour Agriculteurs',
    description: 'Apprenez à gérer les finances de votre exploitation agricole, y compris la comptabilité de base, la budgétisation et l\'accès au crédit.',
    level: 'Tous niveaux',
    duration: '5 semaines',
    instructor: 'Mme. Touré Fatou',
    imageUrl: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600',
    modules: 7,
    enrolledStudents: 98
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Poulets de Chair',
    description: 'Poulets de chair élevés naturellement, sans antibiotiques',
    price: 3000,
    unit: 'pièce',
    category: 'Volaille',
    imageUrl: elevageImage,
    seller: {
      id: '101',
      name: 'Ferme Avicole Kouassi',
      location: 'Bingerville',
      rating: 4.8
    },
    available: true
  },
  {
    id: '2',
    name: 'Tomates Bio',
    description: 'Tomates cultivées sans pesticides chimiques',
    price: 1500,
    unit: 'kg',
    category: 'Légumes',
    imageUrl: tomateImage,
    seller: {
      id: '102',
      name: 'Coopérative Maraîchère d\'Anyama',
      location: 'Anyama',
      rating: 4.5
    },
    available: true
  },
  {
    id: '3',
    name: 'Miel Naturel',
    description: 'Miel pur récolté dans les forêts du centre-ouest',
    price: 4000,
    unit: 'litre',
    category: 'Produits transformés',
    imageUrl: mielImage,
    seller: {
      id: '103',
      name: 'Apiculteurs de Daloa',
      location: 'Daloa',
      rating: 4.9
    },
    available: true
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Location de Tracteur',
    description: 'Location de tracteur avec chauffeur pour labour et préparation des sols',
    price: 25000,
    provider: {
      id: '201',
      name: 'Agri-Services Plus',
      location: 'Bouaké',
      rating: 4.7
    },
    category: 'Équipement',
    imageUrl: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    title: 'Conseil en Certification Bio',
    description: 'Services de consultation pour l\'obtention de certifications biologiques',
    price: 50000,
    provider: {
      id: '202',
      name: 'Bio-Cert Consulting',
      location: 'Abidjan',
      rating: 4.6
    },
    category: 'Conseil',
    imageUrl: 'https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const locations: Location[] = [
  {
    id: '1',
    name: 'Siège CIAPO COOP-CA',
    address: 'Mvan Essakoe',
    city: 'Ebolowa',
    region: 'Sud Cameroun',
    coordinates: {
      lat: 5.341,
      lng: -4.024
    },
    type: 'headquarters',
    phone: '+237 652 498 313 / +237 621 752 020',
    email: 'ciapocoopca@gmail.com'
  },
  {
    id: '2',
    name: 'Centre de Formation Agricole',
    address: 'Mvan Essakoe',
    city: 'Ebolowa',
    region: 'Sud Cameroun',
    coordinates: {
      lat: 5.350,
      lng: -3.885
    },
    type: 'training-center',
    phone: '+237 652 498 313 / +237 621 752 020',
    email: 'formation@ciapo-coop-ca.org'
  },
  {
    id: '3',
    name: 'Centre de Formation COHIMMS',
    address: 'Douala',
    city: 'Douala',
    region: 'Cameroun',
    coordinates: {
      lat: 6.827,
      lng: -5.289
    },
    type: 'training-center',
    phone: '+237 652 498 313 / +237 621 752 020',
    email: 'cohimms@ciapo-coop-ca.org'
  }
];