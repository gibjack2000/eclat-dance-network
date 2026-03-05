import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
    '/classical_ballet.png',
    '/contemporary.png',
    '/urban.png',
    '/latin.png'
];

const Gallery = () => {
    const { t } = useLanguage();
    const translatedStyles = t('gallery', 'items') as { name: string, description: string }[];
    const styles = translatedStyles.map((item, index) => ({
        ...item,
        id: index + 1,
        image: images[index]
    }));
    return (
        <section id="styles" className="py-32 bg-theme-bg transition-colors duration-700">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-theme-text mb-6">{t('gallery', 'title')}<span className="text-gold italic">{t('gallery', 'titleHighlight')}</span></h2>
                    <div className="w-16 h-1 bg-crimson mx-auto mb-6"></div>
                    <p className="text-theme-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                        {t('gallery', 'description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {styles.map((style, index) => (
                        <motion.div
                            key={style.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative h-[450px] overflow-hidden cursor-pointer rounded-sm transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-2xl hover:shadow-black/70"
                        >
                            <div className="absolute inset-0 bg-theme-bg z-10 opacity-30 group-hover:opacity-10 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent z-10"></div>

                            <img
                                src={style.image}
                                alt={style.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                                loading="lazy"
                            />

                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-serif text-2xl text-gold mb-2">{style.name}</h3>
                                    <p className="text-gray-300 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {style.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
