import { Program, NewsItem, Partner, Course, Product, Service, Location } from '../types';
import {Target, BookOpen, ShoppingBag, Wrench } from 'lucide-react';
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
import COHIMMSlogo from '../assets/COHIMMS.png';
import SCPTTElogo from '../assets/SCPTTE.png';
import GICAMBYlogo from '../assets/GICAMBY.png';
import APIlogo from '../assets/API.png';
import MINADER from '../assets/MINADER.jpeg';
import FAO from '../assets/FAO.jpeg';
import BAD from '../assets/BAD.jpeg';
import restau from '../assets/restau.jpeg';
import irrigation from '../assets/systeme-irrigation.png';
import gest_Agri from '../assets/compta_agricol.jpeg';
import Techno from '../assets/technologie.jpg';
import Prof from '../assets/dep_pro.jpg';
import AviBrochure from '../assets/teams/BROCHURE_AVICULTURE.pdf';
import GestBrochure from '../assets/teams/BROCHURE_GESTION_FINANCIERE_AGRICULTEURS.pdf';
import Formation from '../assets/missions/formation.jpg';
import Production from '../assets/missions/vente.png';
import Projets from '../assets/missions/mont_projet.jpeg';
import Phytosanitaires from '../assets/missions/phytosanit.jpeg';
import Prestations from '../assets/missions/prestation.jpg';

export const programs: Program[] = [
  {
    id: '1',
    title: 'Entrepreneuriat Agricole',
    description: 'Formation complète sur les aspects techniques et commerciaux de l\'entrepreneuriat agricole. Apprenez à gérer une exploitation rentable et durable.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600',
    pdfUrl: AviBrochure
  },
  {
    id: '2',
    title: 'Aviculture Moderne',
    description: 'Apprenez les techniques modernes d\'élevage de volailles, de la gestion de l\'alimentation aux stratégies de commercialisation des œufs et poulets.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: Aviculture,
    pdfUrl: '../assets/teams/BROCHURE _AVICULTURE.pdf'
  },
  {
    id: '3',
    title: 'Agriculture Durable',
    description: 'Découvrez les pratiques agricoles durables, y compris l\'agroécologie, la conservation des sols et la gestion de l\'eau pour une production respectueuse de l\'environnement.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: Agriculture,
    pdfUrl: '../assets/teams/BROCHURE _AVICULTURE.pdf'
  },
  {
    id: '4',
    title: 'Transformation Agroalimentaire',
    description: 'Maîtrisez les techniques de transformation agroalimentaire pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: Agroalimentaire,
    pdfUrl: '../assets/teams/BROCHURE _AVICULTURE.pdf'
  },
  {
    id: '5',
    title: 'Pisculture Moderne',
    description: 'Apprenez les techniques modernes d\'élevage, de la gestion de l\'alimentation aux stratégies de commercialisation.',
    duration: '1 mois',
    cost: '70 000 FCFA',
    imageUrl: Pisculture,
    pdfUrl: '../assets/teams/BROCHURE _AVICULTURE.pdf'
  },
  {
    id: '6',
    title: 'Comptabilité et Gestion',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '1 mois',
    cost: '260 000 FCFA',
    imageUrl: Comptabilité,
    pdfUrl: '../assets/teams/BROCHURE _AVICULTURE.pdf'
  },
  {
    id: '7',
    title: 'Santé Médicale',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '265 000 FCFA',
    imageUrl: Santé,
    pdfUrl: '../assets/teams/BROCHURE _AVICULTURE.pdf'
  },
  {
    id: '8',
    title: 'Commerce et Gestion',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '260 000 FCFA',
    imageUrl: Commerce,
    pdfUrl: GestBrochure
  },
  {
    id: '9',
    title: 'Technologie',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '350 000 FCFA',
    imageUrl: Technologie,
    pdfUrl: '../assets/teams/BROCHURE _AVICULTURE.pdf'
  },
  {
    id: '10',
    title: 'Département Professionnel',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '265 000 FCFA',
    imageUrl: Professionnel,
    pdfUrl: '../assets/teams/BROCHURE _AVICULTURE.pdf'
  },
  {
    id: '11',
    title: 'Gestion Financière pour Agriculteurs',
    description: 'Maîtrisez les techniques de transformation des produits agricoles pour augmenter leur valeur ajoutée et prolonger leur durée de conservation.',
    duration: '12 mois',
    cost: '265 000 FCFA',
    imageUrl: gest_Agri,
    pdfUrl: GestBrochure
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
    imageUrl: restau,
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
    imageUrl: irrigation,
    author: 'Admin CIAPO'
  },
  {
    id: "4",
    title: "C1APO COOP-CA - Produits locaux et services traiteur",
    excerpt: "Découvrez nos produits préparés et non préparés, ainsi que nos services de formation et traiteur",
    content: "Le C1APO COOP-CA propose une gamme variée de produits locaux, incluant des plats cuisinés bio, des conserves artisanales, des jus naturels ainsi que des matières premières agricoles brutes. Nous offrons également des services traiteur pour événements et des formations pratiques sur la transformation des produits agricoles, l'hygiène alimentaire et le marketing. Nos produits sont disponibles sur les marchés locaux, en ligne et dans des boutiques partenaires.",
    date: "2025-05-25",
    category: "Évènements",
    imageUrl: "whatsapp_image_2025-05-25_at_20.12.29.jpeg",
    author: "Équipe C1APO",
    // "contact": {
    //     "phone1": "652 49 83 13",
    //     "phone2": "621 75 20 20"
    // }
}
];

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Ministère de l\'Agriculture',
    description: 'Partenaire institutionnel soutenant nos programmes de formation',
    logoUrl: MINADER,
    website: 'https://www.minader.cm/'
  },
  {
    id: '2',
    name: 'Banque Africaine de Développement',
    description: 'Soutien financier pour nos projets d\'expansion',
    logoUrl: BAD,
    website: 'https://www.afdb.org'
  },
  {
    id: '3',
    name: 'Organisation des Nations Unies pour l\'alimentation et l\'agriculture (FAO)',
    description: 'Partenaire technique pour les méthodes agricoles durables',
    logoUrl: FAO,
    website: 'https://www.fao.org'
  },
  {
    id: '4',
    name: 'Cohimms Anglo Saxon Universite Professionnelle De Douala',
    description: 'Centre de formation professionnelle, partenaire reconnu par arrêté ministériel, prévoit d\'ouvrir une succursale dans le village d\'Ebolowa (Sud Cameroun). Conformément à la convention en cours entre les deux structures, l\'exclusivité des responsabilités et des charges sera confiée à la coopérative CIAPO',
    logoUrl: COHIMMSlogo,
    website: 'https://www.cohimms.org'
  },
  {
    id: '5',
    name: 'Société Camerounaises des Postes Télécommunications et Travaux Electrique (SCPTTE Sarl)',
    description: 'Partenaire technique pour la fourniture et installations électriques et travaux de télécommunications et marketing digital et construction des bâtiments et montage des appels d\'offres publics et privés ',
    logoUrl: SCPTTElogo,
    website: 'https://www.scpttesarl.org'
  },
  {
    id: '6',
    name: 'Groupe des Agriculteurs Biologique  de Yemyema\'a (GIC ABMY)',
    description: 'Partenaire soutenant les projets agricoles ',
    logoUrl: GICAMBYlogo,
    website: 'https://www.gicamby.org'
  },
  {
    id: '7',
    name: 'Afripionnier Investissements Sarl (API)',
    description: 'Partenaire pour les prestations de services en transport et logistique travaux publics et privés, bâtiments, énergie solaire, financement des projets, et distribution des produits diverses import-export ',
    logoUrl: APIlogo,
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
    imageUrl: Aviculture,
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
    imageUrl: gest_Agri,
    modules: 7,
    enrolledStudents: 98
  },
  {
    id: '4',
    title: 'Formation en Santé Médicale',
    description: 'Formation de base en santé préventive et gestes d\’urgence pour renforcer la résilience communautaire.',
    level: 'Tous niveaux',
    duration: '4 semaines',
    instructor: 'Mme. ',
    imageUrl: Santé,
    modules: 4,
    enrolledStudents: 8
  },
  {
    id: '5',
    title: 'Formation en Commerce Et Gestion',
    description: 'Développer les compétences essentielles en création, gestion et suivi de petites activités économiques.',
    level: 'Tous niveaux',
    duration: '4 semaines',
    instructor: 'M. ',
    imageUrl: Commerce,
    modules: 4,
    enrolledStudents: 10
  },
  {
    id: '6',
    title: 'Formation en Technologie',
    description: 'Intégrer les outils numériques dans la gestion, la communication et la productivité quotidienne.',
    level: 'Tous niveaux',
    duration: '4 semaines',
    instructor: 'Mme. ',
    imageUrl: Techno,
    modules: 4,
    enrolledStudents: 5
  },
  {
    id: '7',
    title: 'Formation en Département Professionnel',
    description: 'Préparer efficacement l’insertion professionnelle ou le lancement d’un projet personnel viable.',
    level: 'Tous niveaux',
    duration: '4 semaines',
    instructor: 'M. ',
    imageUrl: Prof,
    modules: 4,
    enrolledStudents: 4
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

export const missions = [
  {
    icon: BookOpen,
    imageUrl: Formation,
    title: 'Formation',
    description: 'Formation professionnelle et académique dans le secteur agricole'
  },
  {
    icon: ShoppingBag,
    imageUrl: Production,
    title: 'Production et Commerce',
    description: 'Production, commercialisation, achat et vente en gros et en détail de produits agricoles'
  },
  {
    icon: Target,
    imageUrl: Projets,
    title: 'Montage de Projets',
    description: 'Montage des projets et réalisations dans le secteur agricole'
  },
  {
    icon: Wrench,
    imageUrl: Phytosanitaires,
    title: 'Services Phytosanitaires',
    description: 'Prestations de services et entretien phytosanitaires'
  },
  {
    icon: Wrench,
    imageUrl: Prestations,
    title: 'Prestations Services',
    description: 'Prestations de services et entretien phytosanitaires'
  }
];
