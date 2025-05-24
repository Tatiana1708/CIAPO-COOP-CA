import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Clock, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { programs } from '../data/mockData';

const ProgramDetailPage: React.FC = () => {
  const { id } = useParams();
  const program = programs.find(p => p.id === id);

  React.useEffect(() => {
    if (program) {
      document.title = `${program.title} | CIAPO COOP-CA`;
    }
  }, [program]);

  if (!program) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Programme non trouvé</h1>
        <Link to="/programs" className="text-primary-600 hover:text-primary-700">
          Retour aux programmes
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${program.imageUrl})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="flex items-center text-neutral-200 text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="hover:text-white">Accueil</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/programs" className="hover:text-white">Programmes</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-white font-medium">{program.title}</span>
          </motion.div>

          <motion.h1 
            className="text-4xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {program.title}
          </motion.h1>
          
          <motion.p 
            className="text-lg text-neutral-100 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {program.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center text-white">
              <Calendar size={20} className="mr-2" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center text-white">
              <Clock size={20} className="mr-2" />
              <span>35 heures/semaine</span>
            </div>
            <div className="flex items-center text-white">
              <Users size={20} className="mr-2" />
              <span>20 places disponibles</span>
            </div>
            <div className="flex items-center text-white">
              <MapPin size={20} className="mr-2" />
              <span>Centre de formation Bingerville</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Objectifs de la Formation</h2>
                <ul className="space-y-4">
                  {[
                    "Maîtriser les techniques agricoles modernes",
                    "Développer des compétences en gestion d'entreprise",
                    "Comprendre les enjeux du marché agricole local",
                    "Acquérir une expertise pratique sur le terrain"
                  ].map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Programme Détaillé</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Module 1: Introduction à l'Agriculture Moderne",
                      duration: "2 semaines",
                      topics: [
                        "Fondamentaux de l'agriculture durable",
                        "Analyse des sols et climat",
                        "Planification des cultures"
                      ]
                    },
                    {
                      title: "Module 2: Techniques de Production",
                      duration: "3 semaines",
                      topics: [
                        "Méthodes de culture optimisées",
                        "Gestion de l'irrigation",
                        "Protection des cultures"
                      ]
                    },
                    {
                      title: "Module 3: Gestion d'Entreprise Agricole",
                      duration: "3 semaines",
                      topics: [
                        "Business plan agricole",
                        "Gestion financière",
                        "Marketing et vente"
                      ]
                    }
                  ].map((module, index) => (
                    <div key={index} className="bg-neutral-50 p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">{module.title}</h3>
                        <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                          {module.duration}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-neutral-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Inscription</h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {program.cost}
                  </div>
                  <p className="text-neutral-600">Formation complète avec certification</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                    <span>Accès aux ressources pédagogiques</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                    <span>Suivi personnalisé</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                    <span>Certification officielle</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                    <span>Stage pratique inclus</span>
                  </div>
                </div>

                
                <div className="space-y-4 mb-6">
                <p className="text-neutral-600">Avantages</p>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                    <span>Assurance risque inclu</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                    <span>Déjeuner offert</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                    <span>Possibilité d'auto-emploi ou entreprenariat</span>
                  </div>
                </div>
                
                <button className="button-primary w-full mb-4">
                  S'inscrire à la formation
                </button>
                
                <button className="button-outline w-full">
                  Télécharger la brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetailPage;