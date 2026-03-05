import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Academies = () => {
    const { t } = useLanguage();
    const hungarianAcademies = t('academies', 'items') as { city: string, name: string, address: string, description: string }[];
    return (
        <section id="academies" className="py-32 bg-theme-bg-alt transition-colors duration-700">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">{t('academies', 'subtitle')}</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-theme-text mb-6">{t('academies', 'title')}<span className="text-crimson italic">{t('academies', 'titleHighlight')}</span></h2>
                    <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        {t('academies', 'description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hungarianAcademies.map((academy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-theme-card border border-theme-border transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-2xl hover:shadow-black/70 hover:border-gold/30 p-8 flex flex-col h-full cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="font-serif text-2xl text-theme-text group-hover:text-gold transition-colors">{academy.city}</h3>
                                <span className="text-crimson text-xl opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">→</span>
                            </div>
                            <h4 className="text-gold text-sm uppercase tracking-widest font-semibold mb-2">{academy.name}</h4>
                            <p className="text-gray-500 text-xs mb-6 font-light">{academy.address}</p>
                            <p className="text-theme-text-muted font-light text-sm leading-relaxed mt-auto">
                                {academy.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academies;
