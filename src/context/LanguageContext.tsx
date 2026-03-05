import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language } from '../translations';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (section: keyof typeof translations['en'], key?: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'hu' : 'en'));
    };

    // Helper to extract nested properties safely without full typing overhead for this MVP
    const t = (section: keyof typeof translations['en'], key?: string) => {
        const sectionData = translations[language][section] as any;
        if (key && sectionData) {
            return sectionData[key];
        }
        return sectionData;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
