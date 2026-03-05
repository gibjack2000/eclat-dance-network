import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academies from './components/Academies';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Start with true to maintain the current dark design default
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen antialiased selection:bg-gold selection:text-theme-bg">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Academies />
        <Gallery />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
