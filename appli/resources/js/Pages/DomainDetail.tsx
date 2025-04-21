import React, { useMemo } from 'react';
import { Head } from '@inertiajs/react';
import EGLayout from '@/Layouts/EGLayout';
import { Link } from '@inertiajs/react';

// Interface pour les sections de contenu
interface ContentSection {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
    backgroundColor?: string;
}

// Interface pour les études de cas
interface CaseStudy {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    client: string;
    year: string;
    results: string[];
}

// Interface pour les services
interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
}

// Interface pour les propriétés de la page
interface DomainDetailProps {
    domain: 'sante' | 'education' | 'industrie' | 'rse';
}

// Composant pour une section de contenu
const ContentBlock: React.FC<ContentSection> = ({
    title,
    description,
    image,
    imageAlt,
    imagePosition = 'right',
    backgroundColor = 'bg-white'
}) => {
    // Utilisation de React.useState pour gérer l'échec de chargement des images
    const [imgSrc, setImgSrc] = React.useState(image || `https://via.placeholder.com/800x600/3F51B5/FFFFFF?text=${title.replace(' ', '+')}`);

    // Fonction de gestion d'erreur de chargement d'image
    const handleImageError = () => {
        // Définir un placeholder avec le titre de la section
        setImgSrc(`https://via.placeholder.com/800x600/3F51B5/FFFFFF?text=${title.replace(' ', '+')}`);
    };

    return (
        <section className={`py-16 ${backgroundColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`md:flex md:items-center md:space-x-8 ${imagePosition === 'left' ? 'flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img
                            src={imgSrc}
                            alt={imageAlt || title}
                            className="w-full h-auto rounded-lg shadow-lg"
                            onError={handleImageError}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-eg-gray-dark mb-6">{title}</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Composant pour une carte de service
const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-eg-primary rounded-lg flex items-center justify-center mb-4 text-white">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-eg-gray-dark mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

// Composant pour une carte d'étude de cas
const CaseStudyCard: React.FC<CaseStudy> = ({ title, description, image, imageAlt, client, year, results }) => {
    // Utilisation de React.useState pour gérer l'échec de chargement des images
    const [imgSrc, setImgSrc] = React.useState(image);

    // Fonction de gestion d'erreur de chargement d'image
    const handleImageError = () => {
        // Définir un placeholder coloré avec le titre de l'étude de cas
        setImgSrc(`https://via.placeholder.com/800x400/4CAF50/FFFFFF?text=${title.replace(' ', '+')}`);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <img
                src={imgSrc}
                alt={imageAlt || title}
                className="w-full h-64 object-cover"
                onError={handleImageError}
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-eg-gray-dark mb-2">{title}</h3>
                <p className="text-sm text-eg-primary mb-4">Client: {client} | {year}</p>
                <p className="text-gray-600 mb-4">{description}</p>
                {results.length > 0 && (
                    <div>
                        <h4 className="text-md font-semibold text-eg-gray-dark mb-2">Résultats clés:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {results.map((result, index) => (
                                <li key={index}>{result}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function DomainDetail({ domain }: DomainDetailProps) {
    // Définition des données spécifiques à chaque domaine
    const domainData = useMemo(() => {
        switch (domain) {
            case 'sante':
                return {
                    title: "Santé Globale",
                    description: "Notre approche intégrée de la santé permet d'adresser les multiples facteurs qui influencent le bien-être des populations en Afrique de l'Ouest.",
                    color: "bg-eg-primary",
                    icon: (
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    ),
                    headerImage: "https://placehold.co/1920x600/4CAF50/FFFFFF?text=Santé+Globale",
                    sections: [
                        {
                            title: "Renforcement des systèmes de santé",
                            description: "Nous accompagnons les ministères de la santé, les ONG et les hôpitaux dans l'élaboration et la mise en œuvre de politiques sanitaires efficaces. Notre expertise couvre l'organisation des services, la planification stratégique, la gestion des ressources humaines et l'optimisation des systèmes d'information sanitaire. Nous développons des approches adaptées au contexte local pour maximiser l'impact des interventions en santé publique.",
                            image: "https://placehold.co/800x600/4CAF50/FFFFFF?text=Système+de+Santé",
                            imagePosition: 'right' as 'right',
                            backgroundColor: "bg-white"
                        },
                        {
                            title: "Santé maternelle et infantile",
                            description: "EG Conseil met son expertise au service des programmes de santé maternelle et infantile, un domaine crucial pour le développement humain en Afrique de l'Ouest. Nous concevons et évaluons des stratégies innovantes pour réduire la mortalité maternelle et infantile, améliorer l'accès aux soins prénatals et postnatals, et renforcer les compétences des professionnels de santé dans la prise en charge des complications obstétricales et néonatales.",
                            image: "https://placehold.co/800x600/81C784/FFFFFF?text=Santé+Maternelle",
                            imagePosition: 'left' as 'left',
                            backgroundColor: "bg-eg-gray-light"
                        },
                        {
                            title: "Prévention et contrôle des maladies",
                            description: "Notre équipe développe des stratégies efficaces pour la prévention et le contrôle des maladies transmissibles et non transmissibles. Nous aidons les organisations à mettre en place des systèmes de surveillance épidémiologique, à élaborer des plans de contingence pour les épidémies et à concevoir des campagnes de sensibilisation ciblées. Notre approche intègre les déterminants sociaux de la santé pour une prévention plus efficace.",
                            image: "https://placehold.co/800x600/A5D6A7/FFFFFF?text=Prévention+Maladies",
                            imagePosition: 'right' as 'right',
                            backgroundColor: "bg-white"
                        }
                    ],
                    services: [
                        {
                            title: "Planification stratégique sanitaire",
                            description: "Élaboration de plans stratégiques nationaux et régionaux pour le secteur de la santé, alignés sur les ODD et les priorités locales.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            )
                        },
                        {
                            title: "Formation du personnel médical",
                            description: "Développement de programmes de formation continue pour les professionnels de santé, adaptés aux réalités locales et aux dernières avancées médicales.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            )
                        },
                        {
                            title: "Gestion des programmes de santé",
                            description: "Soutien à la conception, mise en œuvre, suivi et évaluation des programmes de santé publique pour maximiser leur impact et leur durabilité.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            )
                        },
                        {
                            title: "Digitalisation des services de santé",
                            description: "Intégration des technologies numériques dans les systèmes de santé pour améliorer l'efficacité des services et la qualité des soins.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            )
                        }
                    ],
                    caseStudies: [
                        {
                            title: "Renforcement du système de santé primaire",
                            description: "Programme de renforcement des capacités des centres de santé communautaires dans trois régions, touchant plus de 500,000 personnes.",
                            image: "https://placehold.co/800x400/4CAF50/FFFFFF?text=Étude+de+Cas+Santé+1",
                            client: "Ministère de la Santé",
                            year: "2021-2022",
                            results: [
                                "Augmentation de 35% de la fréquentation des centres de santé",
                                "Réduction de 25% de la mortalité infantile dans les zones ciblées",
                                "Formation de 150 professionnels de santé communautaire"
                            ]
                        },
                        {
                            title: "Campagne de vaccination communautaire",
                            description: "Conception et mise en œuvre d'une stratégie innovante pour améliorer la couverture vaccinale en zones rurales difficiles d'accès.",
                            image: "https://placehold.co/800x400/81C784/FFFFFF?text=Étude+de+Cas+Santé+2",
                            client: "ONG Internationale",
                            year: "2023",
                            results: [
                                "Couverture vaccinale passée de 45% à 80% en 12 mois",
                                "Implication de 75 leaders communautaires comme ambassadeurs",
                                "Système de suivi digital permettant un monitoring en temps réel"
                            ]
                        }
                    ]
                };
            case 'education':
                return {
                    title: "Éducation",
                    description: "Nous contribuons à l'amélioration des systèmes éducatifs en développant des approches pédagogiques innovantes et adaptées au contexte local.",
                    color: "bg-eg-secondary",
                    icon: (
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    ),
                    headerImage: "https://placehold.co/1920x600/FF9800/FFFFFF?text=Éducation+de+Qualité",
                    sections: [
                        {
                            title: "Programmes éducatifs adaptés",
                            description: "Nous concevons des programmes éducatifs qui prennent en compte les spécificités culturelles et socio-économiques des communautés. Nos approches pédagogiques s'appuient sur des méthodes actives et participatives qui favorisent l'apprentissage par l'expérience et le développement de compétences pratiques. Nous travaillons en étroite collaboration avec les acteurs locaux pour assurer la pertinence et l'appropriation des programmes.",
                            image: "https://placehold.co/800x600/FFB74D/FFFFFF?text=Programmes+Éducatifs",
                            imagePosition: 'right' as 'right',
                            backgroundColor: "bg-white"
                        },
                        {
                            title: "Formation des enseignants",
                            description: "Notre expertise en matière de formation des enseignants s'articule autour de méthodes pédagogiques innovantes et adaptées au contexte local. Nous développons des modules de formation qui allient théorie et pratique, permettant aux enseignants d'acquérir les compétences nécessaires pour dispenser un enseignement de qualité. Nos formations portent sur la pédagogie active, la gestion de classe, l'évaluation des apprentissages et l'utilisation des TIC.",
                            image: "https://placehold.co/800x600/FFA726/FFFFFF?text=Formation+Enseignants",
                            imagePosition: 'left' as 'left',
                            backgroundColor: "bg-eg-gray-light"
                        },
                        {
                            title: "Gestion et gouvernance scolaire",
                            description: "Nous accompagnons les établissements scolaires dans l'amélioration de leur gestion et de leur gouvernance. Notre approche vise à renforcer les capacités des directeurs d'école et des comités de gestion scolaire dans la planification stratégique, la gestion financière, la mobilisation communautaire et le suivi-évaluation. Nous promouvons également des pratiques de gouvernance participative qui impliquent tous les acteurs de la communauté éducative.",
                            image: "https://placehold.co/800x600/FFD180/FFFFFF?text=Gouvernance+Scolaire",
                            imagePosition: 'right' as 'right',
                            backgroundColor: "bg-white"
                        }
                    ],
                    services: [
                        {
                            title: "Élaboration de curricula",
                            description: "Conception de programmes scolaires adaptés aux contextes locaux et aux standards internationaux, intégrant les compétences du 21e siècle.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            )
                        },
                        {
                            title: "Formation pédagogique continue",
                            description: "Programmes de développement professionnel pour enseignants et formateurs, axés sur les pédagogies actives et l'inclusion.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            )
                        },
                        {
                            title: "Évaluation des acquis scolaires",
                            description: "Développement d'outils d'évaluation pertinents et mise en place de systèmes de suivi des performances des élèves.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            )
                        },
                        {
                            title: "Technologies éducatives",
                            description: "Intégration des TIC dans l'enseignement, développement de contenus numériques et déploiement de solutions adaptées aux contextes à faibles ressources.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            )
                        }
                    ],
                    caseStudies: [
                        {
                            title: "Réforme du programme scolaire",
                            description: "Accompagnement d'un ministère de l'Éducation dans la révision complète des programmes du primaire selon l'approche par compétences.",
                            image: "https://placehold.co/800x400/FF9800/FFFFFF?text=Étude+de+Cas+Éducation+1",
                            client: "Ministère de l'Éducation",
                            year: "2020-2022",
                            results: [
                                "Nouveau curriculum mis en œuvre dans 1,200 écoles",
                                "Formation de 3,500 enseignants aux nouvelles approches",
                                "Amélioration de 27% des résultats d'apprentissage en lecture"
                            ]
                        },
                        {
                            title: "Projet d'écoles numériques",
                            description: "Conception et déploiement d'une solution éducative numérique dans des zones rurales, combinant formation des enseignants et contenus locaux.",
                            image: "https://placehold.co/800x400/FFB74D/FFFFFF?text=Étude+de+Cas+Éducation+2",
                            client: "ONG + Gouvernement local",
                            year: "2021-2023",
                            results: [
                                "20 écoles équipées de solutions solaires et de tablettes éducatives",
                                "Développement de 150 leçons digitales en langues locales",
                                "Augmentation de 40% du taux de rétention scolaire"
                            ]
                        }
                    ]
                };
            case 'industrie':
                return {
                    title: "Industrie",
                    description: "Nous accompagnons les entreprises et les acteurs publics dans le développement industriel durable et inclusif en Afrique de l'Ouest.",
                    color: "bg-eg-accent",
                    icon: (
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    ),
                    headerImage: "https://placehold.co/1920x600/607D8B/FFFFFF?text=Développement+Industriel",
                    sections: [
                        {
                            title: "Optimisation des processus de production",
                            description: "Notre équipe d'experts accompagne les entreprises dans l'analyse et l'amélioration de leurs processus de production. Nous utilisons des méthodologies éprouvées telles que le Lean Management et le Six Sigma pour identifier les gaspillages, réduire les coûts et améliorer la qualité des produits. Notre approche prend en compte les spécificités du contexte ouest-africain pour proposer des solutions adaptées et durables.",
                            image: "https://placehold.co/800x600/78909C/FFFFFF?text=Optimisation+Processus",
                            imagePosition: 'right' as 'right',
                            backgroundColor: "bg-white"
                        },
                        {
                            title: "Valorisation des ressources locales",
                            description: "EG Conseil accompagne les acteurs publics et privés dans la mise en place de stratégies et de projets de valorisation des ressources locales. Nous intervenons dans l'identification des potentialités, l'étude de faisabilité, la planification stratégique et opérationnelle, et le suivi-évaluation des projets. Notre expertise s'étend à plusieurs secteurs, notamment l'agroalimentaire, les matériaux de construction et les produits forestiers non ligneux.",
                            image: "https://placehold.co/800x600/90A4AE/FFFFFF?text=Ressources+Locales",
                            imagePosition: 'left' as 'left',
                            backgroundColor: "bg-eg-gray-light"
                        },
                        {
                            title: "Développement de filières industrielles",
                            description: "Nous accompagnons les gouvernements et les organisations régionales dans l'élaboration et la mise en œuvre de politiques et de programmes de développement industriel. Notre approche intégrée prend en compte les aspects économiques, sociaux et environnementaux pour promouvoir un développement industriel durable et inclusif. Nous travaillons à renforcer les chaînes de valeur existantes et à développer de nouvelles filières porteuses.",
                            image: "https://placehold.co/800x600/B0BEC5/FFFFFF?text=Filières+Industrielles",
                            imagePosition: 'right' as 'right',
                            backgroundColor: "bg-white"
                        }
                    ],
                    services: [
                        {
                            title: "Analyses sectorielles",
                            description: "Études approfondies des secteurs industriels et identification des opportunités de développement et d'investissement.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            )
                        },
                        {
                            title: "Optimisation de la chaîne d'approvisionnement",
                            description: "Amélioration de la gestion des flux de matières, d'informations et financiers le long de la chaîne de valeur.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )
                        },
                        {
                            title: "Formation technique et managériale",
                            description: "Renforcement des compétences des équipes dans les domaines techniques spécifiques et en gestion industrielle.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            )
                        },
                        {
                            title: "Transfert de technologies",
                            description: "Facilitation de l'acquisition et de l'adaptation de technologies appropriées pour améliorer la productivité industrielle.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            )
                        }
                    ],
                    caseStudies: [
                        {
                            title: "Modernisation d'une unité de transformation agroalimentaire",
                            description: "Accompagnement d'une PME dans l'optimisation de ses processus de production et la mise aux normes de ses installations.",
                            image: "https://placehold.co/800x400/607D8B/FFFFFF?text=Étude+de+Cas+Industrie+1",
                            client: "Entreprise agroalimentaire",
                            year: "2022",
                            results: [
                                "Augmentation de 40% de la productivité",
                                "Réduction de 25% des coûts de production",
                                "Obtention de la certification ISO 22000"
                            ]
                        },
                        {
                            title: "Développement d'une filière de textile local",
                            description: "Projet d'appui à la structuration et au développement d'une filière textile basée sur le coton local, de la production à la commercialisation.",
                            image: "https://placehold.co/800x400/78909C/FFFFFF?text=Étude+de+Cas+Industrie+2",
                            client: "Ministère de l'Industrie + Organisation de producteurs",
                            year: "2020-2023",
                            results: [
                                "Création de 3 unités de transformation semi-industrielles",
                                "Formation de 200 artisans aux techniques modernes",
                                "Augmentation de 60% de la valeur ajoutée locale"
                            ]
                        }
                    ]
                };
            case 'rse':
                return {
                    title: "Responsabilité Sociétale des Entreprises",
                    description: "Nous accompagnons les organisations dans l'intégration des principes de développement durable et de responsabilité sociétale dans leurs stratégies et leurs opérations.",
                    color: "bg-eg-lime",
                    icon: (
                        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    headerImage: "https://placehold.co/1920x600/8BC34A/FFFFFF?text=Responsabilité+Sociétale",
                    sections: [
                        {
                            title: "Stratégie et politique RSE",
                            description: "EG Conseil accompagne les entreprises dans l'élaboration et la mise en œuvre de stratégies RSE adaptées à leur contexte et alignées sur les standards internationaux. Notre approche prend en compte les attentes des parties prenantes et les enjeux spécifiques du secteur d'activité. Nous aidons les organisations à intégrer la RSE dans leur gouvernance et à définir des objectifs clairs et mesurables.",
                            image: "https://placehold.co/800x600/9CCC65/FFFFFF?text=Stratégie+RSE",
                            imagePosition: 'right' as 'right',
                            backgroundColor: "bg-white"
                        },
                        {
                            title: "Équité et inclusion",
                            description: "Nous accompagnons les organisations dans la promotion de l'équité et de l'inclusion, avec une attention particulière portée aux questions de genre. Notre expertise couvre l'analyse des politiques et pratiques existantes, l'élaboration de plans d'action, la sensibilisation et la formation des équipes, et la mise en place de mécanismes de suivi et d'évaluation. Nous travaillons à créer des environnements qui valorisent la diversité et favorisent l'égalité des chances.",
                            image: "https://placehold.co/800x600/AED581/FFFFFF?text=Équité+Inclusion",
                            imagePosition: 'left' as 'left',
                            backgroundColor: "bg-eg-gray-light"
                        },
                        {
                            title: "Gestion des impacts environnementaux",
                            description: "EG Conseil aide les entreprises à identifier, évaluer et réduire leurs impacts environnementaux. Nous intervenons dans la réalisation de diagnostics environnementaux, l'élaboration de plans de gestion environnementale, la mise en place de systèmes de management environnemental et la formation des équipes. Notre approche vise à concilier performance économique et préservation de l'environnement.",
                            image: "https://placehold.co/800x600/C5E1A5/FFFFFF?text=Impacts+Environnementaux",
                            imagePosition: 'right' as 'right',
                            backgroundColor: "bg-white"
                        }
                    ],
                    services: [
                        {
                            title: "Diagnostic et reporting RSE",
                            description: "Évaluation des pratiques existantes et mise en place de systèmes de reporting conformes aux standards internationaux (GRI, ISO 26000).",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            )
                        },
                        {
                            title: "Engagement communautaire",
                            description: "Conception et mise en œuvre de programmes d'investissement social et de développement communautaire à fort impact.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            )
                        },
                        {
                            title: "Formation et sensibilisation",
                            description: "Développement de programmes de formation et de sensibilisation sur les enjeux de la RSE adaptés aux différents niveaux de l'organisation.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            )
                        },
                        {
                            title: "Efficacité énergétique",
                            description: "Audit énergétique et mise en place de solutions pour optimiser la consommation d'énergie et réduire l'empreinte carbone.",
                            icon: (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            )
                        }
                    ],
                    caseStudies: [
                        {
                            title: "Déploiement d'une stratégie RSE intégrée",
                            description: "Accompagnement d'un groupe industriel dans la définition et la mise en œuvre d'une stratégie RSE alignée sur les ODD et adaptée au contexte local.",
                            image: "https://placehold.co/800x400/8BC34A/FFFFFF?text=Étude+de+Cas+RSE+1",
                            client: "Groupe industriel multinational",
                            year: "2021-2023",
                            results: [
                                "Réduction de 30% de l'empreinte carbone",
                                "Mise en place d'un programme de diversité touchant 450 employés",
                                "Publication du premier rapport RSE conforme aux standards GRI"
                            ]
                        },
                        {
                            title: "Programme d'investissement communautaire",
                            description: "Conception et mise en œuvre d'un programme d'investissement social pour renforcer les relations avec les communautés locales et contribuer au développement durable.",
                            image: "https://placehold.co/800x400/9CCC65/FFFFFF?text=Étude+de+Cas+RSE+2",
                            client: "Entreprise minière",
                            year: "2020-2022",
                            results: [
                                "Construction de 5 infrastructures communautaires (école, centre de santé)",
                                "Formation professionnelle de 120 jeunes des communautés riveraines",
                                "Création de 15 micro-entreprises locales"
                            ]
                        }
                    ]
                };
            default:
                return {
                    title: "Domaine d'Intervention",
                    description: "Explorez nos domaines d'expertise et découvrez comment nous pouvons vous accompagner.",
                    color: "bg-eg-primary",
                    icon: null,
                    headerImage: "https://placehold.co/1920x600/3F51B5/FFFFFF?text=Domaine+d'Intervention",
                    sections: [],
                    services: [],
                    caseStudies: []
                };
        }
    }, [domain]);

    // Création d'une référence background pour la bannière
    const [bannerBgUrl, setBannerBgUrl] = React.useState(domainData.headerImage);

    // Gestion des erreurs de chargement d'image de bannière
    React.useEffect(() => {
        // Créer une instance d'Image pour tester si l'URL est valide
        const img = new Image();
        img.onload = () => {
            // L'image existe, continuer avec l'URL fournie
            setBannerBgUrl(domainData.headerImage);
        };
        img.onerror = () => {
            // L'image n'existe pas, utiliser un placeholder
            const placeholderColor = domainData.color.replace('bg-', '') || 'eg-primary';
            setBannerBgUrl(`https://via.placeholder.com/1920x600/${placeholderColor}/FFFFFF?text=${domainData.title.replace(/ /g, '+')}`);
        };
        img.src = domainData.headerImage;
    }, [domainData.headerImage, domainData.title, domainData.color]);

    return (
        <EGLayout title={`${domainData.title} | EG Conseil`}>
            <Head>
                <title>{`${domainData.title} | EG Conseil`}</title>
                <meta name="description" content={domainData.description} />
            </Head>

            {/* Bannière avec image */}
            <section className="relative">
                <div
                    className="h-96 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bannerBgUrl})` }}
                >
                    <div className="absolute inset-0 bg-eg-dark bg-opacity-60"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <div className={`${domainData.color} rounded-full p-4 inline-flex mb-6`}>
                            {domainData.icon}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{domainData.title}</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">{domainData.description}</p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-6">Notre expertise en {domainData.title.toLowerCase()}</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            EG Conseil dispose d'une expertise approfondie dans le domaine de la {domainData.title.toLowerCase()},
                            développée au fil de nombreuses interventions auprès d'organisations diverses en Afrique de l'Ouest.
                            Notre approche combine connaissance du contexte local, rigueur méthodologique et innovation pour
                            apporter des solutions adaptées aux défis spécifiques de ce secteur.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sections de contenu */}
            {domainData.sections.map((section, index) => (
                <ContentBlock
                    key={index}
                    title={section.title}
                    description={section.description}
                    image={section.image}
                    imageAlt={section.title}
                    imagePosition={section.imagePosition}
                    backgroundColor={section.backgroundColor}
                />
            ))}

            {/* Services */}
            <section className="py-16 bg-eg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">Nos services en {domainData.title.toLowerCase()}</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Découvrez notre gamme complète de services adaptés aux besoins spécifiques
                            des organisations dans le secteur de la {domainData.title.toLowerCase()}.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {domainData.services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Études de cas */}
            {domainData.caseStudies.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">Études de cas</h2>
                            <p className="max-w-3xl mx-auto text-lg text-gray-600">
                                Des exemples concrets de notre expertise en action dans le domaine
                                de la {domainData.title.toLowerCase()}.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {domainData.caseStudies.map((caseStudy, index) => (
                                <CaseStudyCard
                                    key={index}
                                    title={caseStudy.title}
                                    description={caseStudy.description}
                                    image={caseStudy.image}
                                    imageAlt={caseStudy.title}
                                    client={caseStudy.client}
                                    year={caseStudy.year}
                                    results={caseStudy.results}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 bg-eg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="p-8 md:p-12 md:w-2/3">
                                <h3 className="text-2xl font-bold text-eg-gray-dark mb-4">
                                    Intéressé par nos services en {domainData.title.toLowerCase()} ?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Contactez-nous pour discuter de votre projet et découvrir comment notre expertise
                                    en {domainData.title.toLowerCase()} peut vous aider à atteindre vos objectifs.
                                </p>
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Link
                                        href="/contact"
                                        className="px-6 py-3 bg-eg-primary hover:bg-eg-primary-dark text-white font-medium rounded-md shadow transition duration-300 text-center"
                                    >
                                        Prendre rendez-vous
                                    </Link>
                                    <Link
                                        href="/domaines"
                                        className="px-6 py-3 bg-eg-gray-light hover:bg-gray-200 text-eg-gray-dark font-medium rounded-md shadow transition duration-300 text-center"
                                    >
                                        Autres domaines d'expertise
                                    </Link>
                                </div>
                            </div>
                            <div className={`md:w-1/3 ${domainData.color} p-8 md:p-12 flex items-center justify-center`}>
                                <div className="text-white text-center">
                                    <div className="text-4xl font-bold mb-2">15+</div>
                                    <p className="text-lg">Années d'expertise en {domainData.title.toLowerCase()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </EGLayout>
    );
}