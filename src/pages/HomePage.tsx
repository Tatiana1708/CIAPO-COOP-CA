import React from 'react';
import Hero from '../components/home/Hero';
import ProgramHighlights from '../components/home/ProgramHighlights';
import PlatformsPreview from '../components/home/PlatformsPreview';
import AdminTeam from '../components/home/AdminTeam';
import LatestNews from '../components/home/LatestNews';
import Partners from '../components/home/Partners';
import CallToAction from '../components/home/CallToAction';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'CIAPO COOP-CA | Formation & Entrepreneuriat Agricole';
  }, []);

  return (
    <div>
      <Hero />
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Qui somme nous?</h2>
              <p className="text-neutral-600 mb-6">
              CIAPO-COOP-CA est une coopérative agropastorale qui accompagne les jeunes dans toutes ses dimensions.              
              </p>
              <p className="text-neutral-600 mb-6">
              Nous offrons des cours en vidéo conférence et sur site           
              </p>
              <ul className="space-y-4">
                {[
                  "Formation pratique en agropastoral (élevage, cultures, gestion de projets).",
                  "Services conseils : Orientation professionnelle, implantation de projets, suivi technique.",
                  "Production agricole : Cacao, soja, banane, tomate, manioc, maïs, arachides, palmier à huile, produits maraîchers, céréales, etc.",
                  "Élevage & pisciculture : Aviculture, apiculture, aquaculture, escargots, etc. Protection de l’environnement et agroécologie.",
                  "Lutter contre le chômage, l’exode rural et les risques sociaux (délinquance, grossesses précoces, etc.).",
                  "Renforcer l’autonomie financière pour soutenir les familles et briser le cycle de la pauvreté."
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 opacity-90"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white opacity-5"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white opacity-5"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      ></motion.div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Activitées Secondaires
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-neutral-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="space-y-4">
                {[
                  "Transformation : Cacao, produits agricoles et dérivés.",
                  "Marché des intrants : Vente groupée de semences et outils agro-pastoraux. ",
                  "Commercialisation : Centralisation des besoins, promotion des ventes groupées.",
                  "Diversification : Santé, BTP, audiovisuel, éducation, restauration ",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
          </motion.p>
          
        </div>
      </div>
    </section>
      <ProgramHighlights />
      <PlatformsPreview />
      <AdminTeam />
      {/* <LatestNews /> */}
      <Partners />
      <CallToAction />
    </div>
  );
};

export default HomePage;