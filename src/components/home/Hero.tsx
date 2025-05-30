import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 lg:pt-32 relative">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="container-custom relative z-10 pb-20 lg:pb-32">
        <div className="text-white">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Rejoignez-nous aux Salons des Métiers d'Avenir
          </motion.h1>
          <motion.h4 
            className="text-4xl lg:text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Technologie • Formation • Entrepreneuriat • Emploi
          </motion.h4>
          
          <motion.p 
            className="text-lg lg:text-xl mb-8 text-neutral-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            La Coopérative Internationale d'Amélioration Professionnelle et d'Orientation (CIAPO) vous invite à découvrir les opportunités qui façonneront votre avenir ! 
            S'engage à accompagner la jeunesse vers l'excellence professionnelle en facilitant le montage de projets innovants, proposant des formations adaptées 
            aux réalités du terrain, et créant des ponts stratégiques entre compétences et opportunités d'emploi.            
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link to="/programs" className="button-primary">
              Découvrir nos programmes
              <ChevronRight size={18} className="ml-1" />
            </Link>
            <Link to="/elearning" className="button bg-white text-primary-600 hover:bg-neutral-100">
              Formation en ligne
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-0"></div>
    </section>
  );
};

export default Hero;