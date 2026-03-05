import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const links = t('footer', 'links') as string[];
    return (
        <footer className="bg-theme-bg py-16 border-t border-theme-border transition-colors duration-700">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
                <a href="#" className="font-serif text-3xl tracking-widest text-gold uppercase mb-8 transition-transform hover:scale-105">
                    {t('navbar', 'brand')}
                </a>

                <div className="flex gap-8 mb-10">
                    <a href="#" className="text-theme-text hover:text-gold transition-colors p-2 border border-theme-border rounded-full hover:border-gold">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-theme-text hover:text-gold transition-colors p-2 border border-theme-border rounded-full hover:border-gold">
                        <FaYoutube size={20} />
                    </a>
                    <a href="#" className="text-theme-text hover:text-gold transition-colors p-2 border border-theme-border rounded-full hover:border-gold">
                        <FaTwitter size={20} />
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-theme-text-muted text-xs uppercase tracking-widest mb-10">
                    {links.map((link, index) => (
                        <a key={index} href="#" className="hover:text-theme-text transition-colors">{link}</a>
                    ))}
                </div>

                <p className="text-theme-text-muted opacity-60 text-xs font-light tracking-wide">
                    &copy; {new Date().getFullYear()}{t('footer', 'copyright')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
