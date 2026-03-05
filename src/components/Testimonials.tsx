import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
    "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
];

const Testimonials = () => {
    const { t } = useLanguage();
    const translatedTestimonials = t('testimonials', 'items') as { quote: string, name: string, role: string }[];
    const testimonials = translatedTestimonials.map((item, index) => ({
        ...item,
        image: images[index]
    }));
    return (
        <section className="py-32 bg-gradient-to-b from-theme-bg to-theme-bg-alt transition-colors duration-700">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-theme-text mb-6">{t('testimonials', 'title')}<span className="text-gold italic">{t('testimonials', 'titleHighlight')}</span></h2>
                    <div className="w-16 h-1 bg-crimson mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative p-10 bg-theme-card border border-theme-border backdrop-blur-sm rounded-sm transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-2xl hover:shadow-black/70"
                        >
                            <div className="absolute top-0 right-10 -mt-6 text-6xl text-gold/20 font-serif leading-none">"</div>
                            <p className="text-theme-text-muted font-light italic text-lg lg:text-xl leading-relaxed mb-8 relative z-10">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-6 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-gold/50"
                                    loading="lazy"
                                />
                                <div>
                                    <h5 className="font-serif text-gold text-lg">{testimonial.name}</h5>
                                    <p className="text-theme-text-muted text-xs uppercase tracking-widest">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
