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
      Apprenez des nouvelles Technologie par l'intermédiaire de notre groupe d'experts CIAPO, <br />
      (jeune réussit grâce par la force du nombre)
    </motion.h4>
    
    <motion.p 
      className="text-lg lg:text-xl mb-8 text-neutral-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      La Coopérative Internationale d'Amélioration Professionnelle et d'Orientation (CIAPO) vous invite à découvrir les opportunités qui façonneront votre avenir ! <br />
      Nous nous engageons à accompagner la jeunesse vers l'excellence professionnelle en facilitant leurs montages des projets innovants, proposant des exercices adaptés aux réalités du terrain, et créant des ponts stratégiques entre compétences et opportunités de développer et d'expérimenter, financement stratégie pour la mise en œuvre du projet dans le but de soutenir l'auto-emploi et entrepreneuriat jeunes, réduire le chômage et promouvoir le développement durable dans nos zones rurales et urbaines, et dire non à la pauvreté et aux communautés riveraines des villages sous-développés.
    </motion.p>

    <motion.div 
      className="mb-8 text-neutral-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <h5 className="font-bold text-2xl mb-4">Avantages</h5>
      <ul className="list-disc list-inside space-y-2">
        <li>Délivrance d'un certificat de participation</li>
        <li>Assurance risque pour les exercices pratiques terrain</li>
        <li>Pause déjeuner offerte en pleine séminaire d'apprentissage et de démonstration</li>
      </ul>
    </motion.div>

    <motion.p 
      className="text-lg lg:text-xl mb-8 text-neutral-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      Découvrez nos programmes d'actions collectives de notre groupe d'experts et partenaires d'affaires. Vous pouvez également nous contacter pour les prestations de services dans vos différents projets.
    </motion.p>
    
    <motion.div 
      className="flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
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