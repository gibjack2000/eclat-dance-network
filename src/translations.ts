export type Language = 'en' | 'hu';

export const translations = {
    en: {
        navbar: {
            brand: 'Eclat',
            academies: 'Academies',
            styles: 'Styles',
            alumni: 'Elite Alumni',
            contact: 'Contact',
            book: 'Book Consultation'
        },
        hero: {
            subtitle: 'An Elite Network of Dance Academies',
            title1: 'Precision.',
            title2: 'Passion.',
            title3: 'Perfection.',
            description: 'Bespoke professional tuition for the world\'s most promising dancers, guided by legendary instructors.',
            bookBtn: 'Book Consultation',
            exploreBtn: 'Explore Academies',
            scroll: 'Scroll'
        },
        academies: {
            subtitle: 'Our Locations',
            title: 'Hungarian',
            titleHighlight: 'Prestiges',
            description: 'Discover our premier training facilities strategically located across Hungary\'s most vibrant cultural hubs.',
            items: [
                {
                    city: 'Budapest',
                    name: 'Eclat Grand Academy',
                    address: 'Andrássy út 12, 1061 Budapest',
                    description: 'Our flagship academy in the heart of the capital, offering unparalleled masterclasses in classical ballet and contemporary forms.'
                },
                {
                    city: 'Debrecen',
                    name: 'Eclat Eastern Steps',
                    address: 'Kossuth tér 1, 4024 Debrecen',
                    description: 'A modern facility specializing in dynamic urban choreography and rigorous technical conditioning.'
                },
                {
                    city: 'Szeged',
                    name: 'Eclat Southern Arts',
                    address: 'Dóm tér 1-4, 6720 Szeged',
                    description: 'Fusing traditional disciplines with avant-garde expressive movement in a culturally rich environment.'
                },
                {
                    city: 'Miskolc',
                    name: 'Eclat Highland Studio',
                    address: 'Városház tér 8, 3530 Miskolc',
                    description: 'An intensive training ground focused on stamina, strength, and structural perfection.'
                },
                {
                    city: 'Pécs',
                    name: 'Eclat Mediterrán',
                    address: 'Széchenyi tér 1, 7621 Pécs',
                    description: 'Embracing passionate latin forms and contemporary lyricism in the historical center.'
                }
            ]
        },
        gallery: {
            title: 'Disciplines of ',
            titleHighlight: 'Distinction',
            description: 'Mastery across a spectrum of movement. Our network covers the foundational classical techniques and the raw edge of modern expression.',
            items: [
                {
                    name: 'Classical Ballet',
                    description: 'Foundation of grace and precise technical execution.'
                },
                {
                    name: 'Contemporary',
                    description: 'Expressive movement breaking traditional boundaries.'
                },
                {
                    name: 'Urban & Hip-Hop',
                    description: 'Rhythmic, dynamic, and culturally rooted choreography.'
                },
                {
                    name: 'Latin & Ballroom',
                    description: 'Passionate, structured partnered performances.'
                }
            ]
        },
        stats: {
            items: [
                { value: '15+', label: 'Years of Excellence' },
                { value: '500+', label: 'Active Talents' },
                { value: '50+', label: 'Global Awards' },
                { value: '100%', label: 'Commitment' }
            ]
        },
        testimonials: {
            title: 'Voices of ',
            titleHighlight: 'Experience',
            items: [
                {
                    quote: "The rigorous curriculum and unparalleled mentorship transformed my technique, bridging the gap between potential and prima. Eclat is where legends are forged.",
                    name: "Aurelia Vance",
                    role: "Principal Dancer, Royal City Ballet"
                },
                {
                    quote: "Finding an academy that respects the classical foundations while pushing the boundaries of contemporary expression is rare. This network achieves that delicate balance perfectly.",
                    name: "Julian Thorne",
                    role: "Choreographer & Artistic Director"
                }
            ]
        },
        cta: {
            subtitle: 'Take the First Step',
            title: 'Begin Your Legacy With ',
            titleHighlight: 'Eclat',
            description: 'Join an exclusive network dedicated to artistic excellence. Whether securing a place in our masterclasses or arranging a private audition, your journey toward perfection starts here.',
            placeholder: 'Enter your email',
            button: 'Request Access',
            disclaimer: 'Enrollment is highly selective. Submitting this form initiates the pre-screening process.'
        },
        footer: {
            links: [
                'About Us',
                'Programs',
                'Auditions',
                'Contact',
                'Privacy Policy'
            ],
            copyright: ' Eclat Dance Network. All rights reserved. Designed for excellence.'
        }
    },
    hu: {
        navbar: {
            brand: 'Eclat',
            academies: 'Akadémiák',
            styles: 'Stílusok',
            alumni: 'Elit Öregdiákok',
            contact: 'Kapcsolat',
            book: 'Konzultáció Foglalása'
        },
        hero: {
            subtitle: 'Táncakadémiák Elit Hálózata',
            title1: 'Precizitás.',
            title2: 'Szenvedély.',
            title3: 'Tökéletesség.',
            description: 'Személyre szabott, professzionális oktatás a világ legígéretesebb táncosai számára, legendás mesterek irányításával.',
            bookBtn: 'Konzultáció Foglalása',
            exploreBtn: 'Akadémiák Felfedezése',
            scroll: 'Görgetés'
        },
        academies: {
            subtitle: 'Helyszíneink',
            title: 'Magyar ',
            titleHighlight: 'Presztízs',
            description: 'Fedezze fel premier képzési létesítményeinket, melyek Magyarország legpezsgőbb kulturális központjaiban találhatók.',
            items: [
                {
                    city: 'Budapest',
                    name: 'Eclat Grand Akadémia',
                    address: 'Andrássy út 12, 1061 Budapest',
                    description: 'Zászlóshajó akadémiánk a főváros szívében, páratlan mesterkurzusokat nyújtva a klasszikus balett és a kortárs formák terén.'
                },
                {
                    city: 'Debrecen',
                    name: 'Eclat Eastern Steps',
                    address: 'Kossuth tér 1, 4024 Debrecen',
                    description: 'Modern létesítményünk, mely a dinamikus urbánus koreográfiára és a szigorú technikai kondicionálásra specializálódott.'
                },
                {
                    city: 'Szeged',
                    name: 'Eclat Southern Arts',
                    address: 'Dóm tér 1-4, 6720 Szeged',
                    description: 'A hagyományos diszciplínák és az avantgárd, expresszív mozgás fúziója egy kulturálisan gazdag környezetben.'
                },
                {
                    city: 'Miskolc',
                    name: 'Eclat Highland Stúdió',
                    address: 'Városház tér 8, 3530 Miskolc',
                    description: 'Intenzív edzőközpont, melynek fókuszában az állóképesség, az erő és a strukturális tökéletesség áll.'
                },
                {
                    city: 'Pécs',
                    name: 'Eclat Mediterrán',
                    address: 'Széchenyi tér 1, 7621 Pécs',
                    description: 'A szenvedélyes latin formák és a kortárs líraiság kiteljesedése a történelmi belvárosban.'
                }
            ]
        },
        gallery: {
            title: 'A Kiválóság ',
            titleHighlight: 'Diszciplínái',
            description: 'A mozgás teljes spektrumának mesterfokú művelése. Hálózatunk lefedi az alapvető klasszikus technikákat és a modern kifejezésmód nyers erejét.',
            items: [
                {
                    name: 'Klasszikus Balett',
                    description: 'A kecsesség és a precíz technikai kivitelezés alapja.'
                },
                {
                    name: 'Kortárs',
                    description: 'Expresszív mozgás, mely áttöri a hagyományos határokat.'
                },
                {
                    name: 'Urbánus és Hip-Hop',
                    description: 'Ritmikus, dinamikus és kulturálisan gyökerező koreográfia.'
                },
                {
                    name: 'Latin és Társastánc',
                    description: 'Szenvedélyes, strukturált, páros előadásmód.'
                }
            ]
        },
        stats: {
            items: [
                { value: '15+', label: 'Év Kiválóság' },
                { value: '500+', label: 'Aktív Tehetség' },
                { value: '50+', label: 'Nemzetközi Díj' },
                { value: '100%', label: 'Elkötelezettség' }
            ]
        },
        testimonials: {
            title: 'A Tapasztalat ',
            titleHighlight: 'Hangjai',
            items: [
                {
                    quote: "A szigorú tanterv és a páratlan mentorálás átalakította a technikámat, áthidalva a szakadékot a potenciál és a prímabalerina között. Az Eclat az a hely, ahol a legendák születnek.",
                    name: "Aurelia Vance",
                    role: "Elsőtáncos, Royal City Ballet"
                },
                {
                    quote: "Ritka az olyan akadémia, amely tiszteletben tartja a klasszikus alapokat, miközben feszegeti a kortárs kifejezés határait. Ez a hálózat tökéletesen eléri ezt a kényes egyensúlyt.",
                    name: "Julian Thorne",
                    role: "Koreográfus és Művészeti Igazgató"
                }
            ]
        },
        cta: {
            subtitle: 'Tegye Meg Az Első Lépést',
            title: 'Kezdje El Örökségét Az ',
            titleHighlight: 'Eclat-val',
            description: 'Csatlakozzon a művészeti kiválóság iránt elkötelezett exkluzív hálózathoz. Legyen szó mesterkurzusaink egyikének biztosításáról vagy egy privát meghallgatás megszervezéséről, útja a tökéletesség felé itt kezdődik.',
            placeholder: 'Adja meg e-mail címét',
            button: 'Hozzáférés Kérése',
            disclaimer: 'A felvétel rendkívül szelektív. Ezen űrlap elküldése elindítja az előszűrési folyamatot.'
        },
        footer: {
            links: [
                'Rólunk',
                'Programok',
                'Meghallgatások',
                'Kapcsolat',
                'Adatvédelmi Irányelvek'
            ],
            copyright: ' Eclat Tánchálózat. Minden jog fenntartva. Kiválóságra tervezve.'
        }
    }
};
