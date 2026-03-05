import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'academies', label: t('navbar', 'academies') },
    { id: 'styles', label: t('navbar', 'styles') },
    { id: 'alumni', label: t('navbar', 'alumni') },
    { id: 'contact', label: t('navbar', 'contact') }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-theme-bg/90 backdrop-blur-md py-4 border-b border-theme-border' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl tracking-widest text-gold uppercase transition-transform hover:scale-105">
          {t('navbar', 'brand')}
        </a>
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-semibold">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-gold transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="text-theme-text-muted hover:text-gold transition-colors text-xs font-semibold tracking-widest flex items-center gap-1"
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'text-theme-text' : ''}>EN</span>
            <span className="opacity-30">|</span>
            <span className={language === 'hu' ? 'text-theme-text' : ''}>HU</span>
          </button>

          <button
            onClick={toggleTheme}
            className="text-theme-text hover:text-gold transition-colors p-2"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <button className="hidden md:block border border-gold text-gold px-6 py-2 uppercase text-xs tracking-widest transition-all hover:bg-gold hover:text-theme-bg">
            {t('navbar', 'book')}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
