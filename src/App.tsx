import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StaticBar from './components/StaticBar';
import LoadingSpinner from './components/LoadingSpinner';
import { useBlurOnScroll } from './hooks/useBlurOnScroll';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useBlurOnScroll();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col fade-in relative">
      <StaticBar />
      <main className="flex-1">
        <div className="container-fluid">
          <Header />
          <Hero />
          <Projects />
          <WorkExperience />
          <TechStack />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </main>
      <StaticBar /> {/* <— Separate overlay bar */}
    </div>
  );
}

export default App;
