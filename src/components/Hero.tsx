import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const frameCount = 120;
        const images: HTMLImageElement[] = [];
        let imagesLoaded = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const formattedFrame = i.toString().padStart(3, '0');
            img.src = `/Assets1/ezgif-frame-${formattedFrame}.png`;
            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === 1) {
                    canvas.width = img.width;
                    canvas.height = img.height;
                }
            };
            images.push(img);
        }

        let currentFrame = 0;
        let animationFrameId: number;
        let lastTime = 0;
        const fps = 30;
        const interval = 1000 / fps;

        const render = (time: number) => {
            animationFrameId = requestAnimationFrame(render);
            if (imagesLoaded === 0) return;

            const deltaTime = time - lastTime;

            if (deltaTime > interval) {
                lastTime = time - (deltaTime % interval);

                const img = images[currentFrame];
                if (img.complete && img.naturalHeight !== 0) {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }

                currentFrame = (currentFrame + 1) % frameCount;
            }
        };

        animationFrameId = requestAnimationFrame(render);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image Sequence */}
            <div className="absolute inset-0 w-full h-full bg-theme-bg">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                ></canvas>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-semibold"
                >
                    {t('hero', 'subtitle')}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-theme-text mb-8 leading-tight tracking-wide drop-shadow-2xl"
                >
                    {t('hero', 'title1')} <br className="md:hidden" />
                    <span className="italic text-crimson stroke-black">{t('hero', 'title2')}</span> <br className="md:hidden" />
                    {t('hero', 'title3')}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="max-w-2xl text-center"
                >
                    <p className="text-gray-300 text-lg md:text-xl font-sans font-light leading-relaxed mb-10">
                        {t('hero', 'description')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <a href="#consultation" className="bg-gold text-theme-bg px-10 py-4 uppercase tracking-widest text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] hover:bg-theme-text hover:text-theme-bg transition-all duration-150 hover:-translate-y-1 active:scale-95 whitespace-nowrap">
                        {t('hero', 'bookBtn')}
                    </a>
                    <a href="#academies" className="border border-theme-border bg-theme-card backdrop-blur-sm text-theme-text px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-theme-card transition-all duration-300">
                        {t('hero', 'exploreBtn')}
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-400 text-xs tracking-widest uppercase">{t('hero', 'scroll')}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
