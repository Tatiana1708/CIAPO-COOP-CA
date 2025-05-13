import React from 'react';
import Hero from '../components/home/Hero';
import ProgramHighlights from '../components/home/ProgramHighlights';
import PlatformsPreview from '../components/home/PlatformsPreview';
import LatestNews from '../components/home/LatestNews';
import Partners from '../components/home/Partners';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'CIAPO COOP-CA | Formation & Entrepreneuriat Agricole';
  }, []);

  return (
    <div>
      <Hero />
      <ProgramHighlights />
      <PlatformsPreview />
      <LatestNews />
      <Partners />
      <CallToAction />
    </div>
  );
};

export default HomePage;