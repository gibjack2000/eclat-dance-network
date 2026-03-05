import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Stats = () => {
    const { t } = useLanguage();
    const stats = t('stats', 'items') as { value: string, label: string }[];
    return (
        <section className="relative py-32 bg-theme-bg transition-colors duration-700">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 parallax-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1508215885820-4585e5610ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/80 z-0"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-y border-white/10 py-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center relative border-r border-white/5 last:border-0 md:last:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(3)]:border-r"
                        >
                            <h4 className="text-5xl md:text-6xl font-serif text-theme-text mb-4 tracking-tighter drop-shadow-lg">
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold to-yellow-600">{stat.value}</span>
                            </h4>
                            <p className="uppercase text-xs tracking-widest text-theme-text-muted font-semibold">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
