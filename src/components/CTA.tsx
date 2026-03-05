import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const CTA = () => {
    const { t } = useLanguage();
    return (
        <section id="consultation" className="py-32 relative overflow-hidden bg-crimson/10">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-crimson/5 blur-3xl rounded-full mix-blend-screen"></div>
                <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl rounded-full mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">{t('cta', 'subtitle')}</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-theme-text mb-8">{t('cta', 'title')}<span className="italic text-crimson">{t('cta', 'titleHighlight')}</span></h2>
                    <p className="text-theme-text-muted font-light text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                        {t('cta', 'description')}
                    </p>

                    <form className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder={t('cta', 'placeholder')}
                            className="bg-theme-bg-alt border border-theme-border text-theme-text px-6 py-4 outline-none focus:border-gold transition-colors flex-grow placeholder-theme-text-muted font-sans font-light"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gold text-theme-bg px-10 py-4 uppercase tracking-widest text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] hover:bg-theme-text hover:text-theme-bg transition-all duration-150 hover:-translate-y-1 active:scale-95 whitespace-nowrap"
                        >
                            {t('cta', 'button')}
                        </button>
                    </form>

                    <p className="text-theme-text-muted opacity-70 text-xs mt-6 tracking-wide">
                        {t('cta', 'disclaimer')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
