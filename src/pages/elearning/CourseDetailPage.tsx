import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { courses } from '../../data/mockData';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  React.useEffect(() => {
    if (course) {
      document.title = `${course.title} | E-Learning CIAPO COOP-CA`;
    }
  }, [course]);

  if (!course) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Cours non trouvé</h1>
        <Link to="/elearning/courses" className="text-primary-600 hover:text-primary-700">
          Retour aux cours
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32">
      <div className="container-custom">
        <motion.div 
          className="flex items-center text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-neutral-500 hover:text-neutral-700">Accueil</Link>
          <ChevronRight size={16} className="mx-2 text-neutral-400" />
          <Link to="/elearning" className="text-neutral-500 hover:text-neutral-700">E-Learning</Link>
          <ChevronRight size={16} className="mx-2 text-neutral-400" />
          <span className="text-neutral-900 font-medium">{course.title}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-8">
                <img 
                  src={course.imageUrl} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {course.level}
              </span>

              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-neutral-600">
                  <Clock size={20} className="mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <Users size={20} className="mr-2" />
                  <span>{course.enrolledStudents} étudiants</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <BookOpen size={20} className="mr-2" />
                  <span>{course.modules} modules</span>
                </div>
              </div>

              <div className="prose max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-4">Description du cours</h2>
                <p className="text-neutral-600 mb-6">{course.description}</p>

                <h2 className="text-2xl font-bold mb-4">Ce que vous apprendrez</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Comprendre les fondamentaux de l'agriculture moderne",
                    "Maîtriser les techniques de production durable",
                    "Gérer efficacement une exploitation agricole",
                    "Optimiser la commercialisation des produits",
                    "Appliquer les bonnes pratiques environnementales",
                    "Utiliser les outils numériques agricoles"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                <div className="bg-neutral-800 flex items-center justify-center">
                  <Play size={48} className="text-white opacity-80" />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Gratuit</h3>
                <p className="text-neutral-600">Accès complet au cours</p>
              </div>

              <button className="button-primary w-full mb-4">
                Commencer le cours
              </button>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                  <span>Accès illimité</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                  <span>Certificat de réussite</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 size={18} className="text-primary-600 mr-3" />
                  <span>Support communautaire</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;