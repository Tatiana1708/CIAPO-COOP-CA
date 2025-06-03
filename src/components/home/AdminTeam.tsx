import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import OYONO from '../../assets/teams/MICHEL.png';
import sandrine from '../../assets/teams/SANDRINE.png';
import Charly from '../../assets/teams/CHARLY.png';
import marie from '../../assets/teams/MARIE.png';
import Nickson from '../../assets/teams/NICKSON.jpeg';
import Yaya from '../../assets/teams/YAYA.png';
import Boris from '../../assets/teams/BORIS.png';
import Florence from '../../assets/teams/FLORENCE.png';

const AdminTeam: React.FC = () => {
  const team = [
    {
      name: 'M. Oyono Platini Michel',
      role: 'Directeur Général',
      image: OYONO,
      bio: 'Chefs d\'entreprises promoteurs ciapo président conseil d\'administration',
      email: 'ciapocoopca@gmail.com',
      phone: '+237 621 752 020',
      linkedin: 'https://linkedin.com',
       location: 'Ebolowa, Sud Cameroun'
    },
    {
      name: 'Mme. Evina Marie Noëlle E. ',
      role: ' Présidente Du Conseil De Surveillance',
      image: marie,
      bio: 'Présidente De Surveillance Conseil D\'administration à CIAPO ',
      email: 'ciapocoopca@gmail.com',
      phone: '+237 652 498 313',
      linkedin: 'https://linkedin.com',
       location: 'Ebolowa, Sud Cameroun'
    },
    {
      name: 'Mme. Ngo Kona Sandrine',
      role: 'Secrétaire Générale ',
      image: sandrine,
      bio: 'Secrétaire Générale À CIAPO',
      email: 'ciapocoopca@gmail.com',
      phone: '+237 652 498 313',
      linkedin: 'https://linkedin.com',
      location: 'Ebolowa, Sud Cameroun'
    },
    {
      name: 'M. Ndzana Franky Charly',
      role: 'Directeur Technique',
      image: Charly,
      bio: 'Msc en Analyse Agroenvironnement /Ingénieur Agroeconomiste',
      email: 'technique@ciapo-coop-ca.org',
      phone: '+237 652 498 313',
      linkedin: 'https://linkedin.com',
       location: 'Yaoundé, Centre Cameroun'
    },
    {
      name: 'M. Gamogha Djantcha Geldas Nickson ',
      role: 'Chef De Projet',
      image: Nickson,
      bio: 'Ingénieur Du Genie Rural Chef De Projet CIAPO-COOP-CA',
      email: 'technique@ciapo-coop-ca.org',
      phone: '+237 652 498 313',
      linkedin: 'https://linkedin.com',
       location: 'Bafoussam, Ouest Cameroun'
    },
    {
      name: 'Mme. Kowssima Marly Yaya ',
      role: 'Partenaire Agronome',
      image: Yaya,
      bio: 'Ingénieur agronome option : Production Animale et Aquaculture Prestataire indépendante',
      email: 'technique@ciapo-coop-ca.org',
      phone: '+237 652 498 313',
      linkedin: 'https://linkedin.com',
       location: 'Douala, Littoral Cameroun'
    },
    {
      name: 'M. Ndongo Mve Andre Boris',
      role: 'Informaticien',
      image: Boris,
      bio: 'Informaticien (Infographiste, Maintenancier) ',
      email: 'technique@ciapo-coop-ca.org',
      phone: '+237 652 498 313',
      linkedin: 'https://linkedin.com',
       location: 'Ebolowa, Sud Cameroun'
    },
    {
      name: 'Mme. Florence Eba Metende',
      role: 'Partenaire Informaticienne',
      image: Florence,
      bio: 'Ingénieur Informaticienne/ Développeur',
      email: 'developpeur@ciapo-coop-ca.org',
      phone: '+237 691 918 168',
      linkedin: 'https://linkedin.com',
       location: 'Douala, Littoral Cameroun'
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Équipe Administrative</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Une équipe expérimentée dédiée au développement de l'agriculture et à la formation des futurs entrepreneurs agricoles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-neutral-200">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-neutral-600 mb-4">{member.bio}</p>
                
                <div className="space-y-2">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    <Mail size={18} className="mr-2" />
                    <span>{member.email}</span>
                  </a>
                  
                  <a 
                    href={`tel:${member.phone}`}
                    className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    <span>{member.phone}</span>
                  </a>
                  
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    <Linkedin size={18} className="mr-2" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={`tel:${member.location}`}
                    className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    <MapPin size={18} className="mr-2" />
                    <span>{member.location}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminTeam;