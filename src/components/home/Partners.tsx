import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';
import { partners } from '../../data/mockData';

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <SectionTitle 
          title="Nos Partenaires" 
          subtitle="Ils nous font confiance et soutiennent notre mission"
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center w-64 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img 
                src={partner.logoUrl} 
                alt={partner.name} 
                className="h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center mb-1">{partner.name}</h3>
              <p className="text-sm text-neutral-500 text-center">{partner.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;