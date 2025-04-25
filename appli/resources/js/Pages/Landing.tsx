import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import EGLayout from '@/Layouts/EGLayout';
import './../../css/app.css';

// Ajout des styles pour les animations de la modal
const modalStyles = `
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.3s ease-out forwards;
}
`;

// Définition du type pour les projets
type ProjectType = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    category: string;
    description: string;
    points: string[];
}

type TeamMember = {
    id: number;
    name: string;
    role: string;
    description?: string;
    photo: string;
    color: string;
}

export default function Landing() {
    const [showAccelerateurModal, setShowAccelerateurModal] = useState(false);
    // État pour le modal des projets
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    // Liste des projets pour les réalisations
    const projects: ProjectType[] = [
        {
            id: 1,
            title: "GAVI / Ministère de la Santé",
            subtitle: "Renforcement des capacités institutionnelles",
            image: "/img/realisations/gavi-mshp.jpg",
            category: "Renforcement des capacités",
            description: "Renforcement des capacités institutionnelles : PEV + Service Genre et Équité",
            points: [
                "Renforcement des capacités en gestion, planification stratégique, coordination et suivi-évaluation",
                "Élaboration de documents stratégiques : Stratégie Nationale de Vaccination et Plan Stratégique Genre et Équité du MSHP",
                "Appui à la mobilisation de subventions pour environ 50 millions USD (CDS3, FAE, FPP, TCA 2023–2025)"
            ]
        },
        {
            id: 2,
            title: "UNICEF / Ministère de la Santé",
            subtitle: "Digitalisation d'outils de gestion du PEV",
            image: "/img/realisations/unicef-mshp.jpg",
            category: "Digitalisation",
            description: "Digitalisation d'outils de gestion du PEV Guinée",
            points: [
                "Création d'un outil pour suivre et optimiser la chaîne du froid",
                "Formation des équipes pour une meilleure utilisation et maintenance",
                "Réduction des pertes et meilleure disponibilité des vaccins"
            ]
        },
        {
            id: 3,
            title: "UE / Expertise France",
            subtitle: "Déploiement d'outils de gestion digitaux",
            image: "/img/realisations/ue-expertise-france.jpg",
            category: "Outils digitaux",
            description: "Déploiement d'outils de gestion digitaux",
            points: [
                "Cartographie des initiatives nutritionnelles en Guinée",
                "Formation des parties prenantes à l'usage de la cartographie",
                "Renforcement de la planification et coordination"
            ]
        },
        {
            id: 4,
            title: "Institut Français de Guinée",
            subtitle: "Intégration de l'IA dans les processus de gestion",
            image: "/img/realisations/institut-francais.jpg",
            category: "Intelligence Artificielle",
            description: "Intégration de l'IA dans les processus de gestion",
            points: [
                "Agents IA pour améliorer gestion, communication et suivi des OSC",
                "Formations pour professionnaliser les OSC guinéennes",
                "Meilleure efficacité organisationnelle et impact local"
            ]
        },
        {
            id: 5,
            title: "Banque Mondiale (PDAIG)",
            subtitle: "Restructuration d'une entreprise de transformation agricole",
            image: "/img/realisations/banque-mondiale-pdaig.jpg",
            category: "Restructuration",
            description: "Restructuration d'une entreprise de transformation agricole – Sydam",
            points: [
                "Diagnostic organisationnel : identifier les axes d'amélioration",
                "Plan de redressement : optimisation des coûts et rentabilité",
                "Formation des dirigeants pour une gestion durable"
            ]
        },
        {
            id: 6,
            title: "Harpie Group",
            subtitle: "Restructuration d'une entreprise de transformation d'huile de palme",
            image: "/img/realisations/harpie-group.jpg",
            category: "Transformation agricole",
            description: "Restructuration d'une entreprise de transformation d'huile de palme en Guinée",
            points: [
                "Diagnostic approfondi des enjeux de l'unité de transformation",
                "Élaboration de dossiers de financement",
                "Business plan et projections stratégiques"
            ]
        },
        {
            id: 7,
            title: "Institutions financières internationales",
            subtitle: "Mise en place de processus de gestion digitaux pour banques européennes",
            image: "/img/realisations/institutions-financieres.jpg",
            category: "Finance internationale",
            description: "Mise en place de processus de gestion digitaux pour banques européennes",
            points: [
                "+10 projets complexes menés selon les normes internationales",
                "Gestion de plusieurs milliards d'actifs pour : BNP Paribas, JP Morgan, AFD, Aviva...",
                "Structuration de dossiers et outils de stress-test pour la résilience financière"
            ]
        }
    ];

    // Membres de l'équipe
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Oumar CAMARA",
            role: "Directeur Général",
            description: "Expert en finance, stratégie et gestion de projets d'envergure.",
            photo: "/img/team/oumar-camara.jpg", // À remplacer par la vraie photo
            color: "eg-primary"
        },
        {
            id: 2,
            name: "Mariama DIALLO",
            role: "Assistante Administrative et Financière",
            description: "Spécialiste en gestion administrative et finances.",
            photo: "/img/team/mariama-diallo.jpg", // À remplacer par la vraie photo
            color: "eg-secondary"
        },
        {
            id: 3,
            name: "Ibrahim SYLLA",
            role: "Responsable des Projets",
            description: "Expert en gestion de projets et suivi-évaluation.",
            photo: "/img/team/ibrahim-sylla.jpg", // À remplacer par la vraie photo
            color: "eg-tertiary"
        },
        {
            id: 4,
            name: "Fatoumata SOUMAH",
            role: "Informaticienne",
            description: "Experte en développement web et solutions digitales.",
            photo: "/img/team/fatoumata-soumah.jpg", // À remplacer par la vraie photo
            color: "eg-accent"
        },
        {
            id: 5,
            name: "Mohamed BAH",
            role: "Data Scientist",
            description: "Spécialiste en analyse de données et intelligence artificielle.",
            photo: "/img/team/mohamed-bah.jpg", // À remplacer par la vraie photo
            color: "eg-highlight"
        }
    ];

    // Consultants régionaux
    type Consultant = {
        id: number;
        name: string;
        region: string;
        photo: string;
    }

    const consultants: Consultant[] = [
        { id: 1, name: "Mohamed Sylla", region: "Conakry", photo: "/img/team/consultants/consultant1.jpg" },
        { id: 2, name: "Fatoumata Bah", region: "Kindia", photo: "/img/team/consultants/consultant2.jpg" },
        { id: 3, name: "Mamadou Diallo", region: "Boké", photo: "/img/team/consultants/consultant3.jpg" },
        { id: 4, name: "Aminata Camara", region: "Labé", photo: "/img/team/consultants/consultant4.jpg" },
        { id: 5, name: "Ibrahim Sow", region: "Kankan", photo: "/img/team/consultants/consultant5.jpg" },
        { id: 6, name: "Mariama Touré", region: "Faranah", photo: "/img/team/consultants/consultant6.jpg" },
        { id: 7, name: "Ousmane Barry", region: "N'Zérékoré", photo: "/img/team/consultants/consultant7.jpg" },
        { id: 8, name: "Kadiatou Baldé", region: "Mamou", photo: "/img/team/consultants/consultant8.jpg" }
    ];

    // Analystes
    type Analyste = {
        id: number;
        name: string;
        specialite: string;
        photo: string;
    }

    const analystes: Analyste[] = [
        { id: 1, name: "Moussa Kourouma", specialite: "Données financières", photo: "/img/team/analystes/analyste1.jpg" },
        { id: 2, name: "Aissatou Diallo", specialite: "Études de marché", photo: "/img/team/analystes/analyste2.jpg" },
        { id: 3, name: "Souleymane Camara", specialite: "Analyse sectorielle", photo: "/img/team/analystes/analyste3.jpg" },
        { id: 4, name: "Fatima Koné", specialite: "Évaluation de projets", photo: "/img/team/analystes/analyste4.jpg" }
    ];

    // Fonction pour ouvrir le modal de projet
    const openProjectModal = (project: ProjectType) => {
        setSelectedProject(project);
    };

    // Fonction pour fermer le modal de projet
    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    return (
        <EGLayout title="Efficience Globale - Conseil stratégique et opérationnel pour un impact durable en Afrique de l'Ouest">
            <Head>
                <title>Efficience Globale - Conseil stratégique et opérationnel pour un impact durable en Afrique de l'Ouest</title>
                <meta name="description" content="Efficience Globale développe des solutions de conseil stratégique et opérationnel sur mesure pour les entreprises et organisations en Afrique de l'Ouest." />
            </Head>

            {/* Hero Section */}
            <section id="hero" className="relative bg-eg-primary-dark overflow-hidden min-h-[90vh] flex items-center">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-eg-highlight/20 to-transparent transform rotate-180 opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-eg-primary/30 to-transparent opacity-60"></div>

                {/* Motif décoratif */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        backgroundSize: '60px'
                    }}>
                </div>

                {/* Background image avec overlay */}
                <div className="absolute inset-0 bg-cover bg-center transform scale-[1.02] animate-subtle-zoom"
                    style={{ backgroundImage: `url('/img/background_eg.png')` }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-eg-primary/90 via-eg-primary/75 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 w-full">
                    <div className="max-w-3xl opacity-0 translate-y-4 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
                            Des solutions <span className="text-eg-tertiary relative inline-block">
                                stratégiques
                                <span className="absolute bottom-2 left-0 w-full h-1 bg-eg-tertiary opacity-30"></span>
                            </span> pour un impact durable en Afrique de l'Ouest
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light">
                        Efficience Globale est un cabinet de conseil en stratégie et gestion de projets à impact en Afrique de l'Ouest.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 translate-y-4 animate-fade-in-up-delay">
                            <a
                                href="#contact"
                                className="group px-8 py-4 bg-eg-secondary hover:bg-eg-secondary-dark text-white font-medium rounded-lg shadow-eg transition-all duration-300 text-center text-lg relative overflow-hidden"
                            >
                                <span className="relative z-10">Nous contacter</span>
                                <span className="absolute inset-0 bg-eg-secondary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></span>
                            </a>
                            <a
                                href="#approche"
                                className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-eg-secondary font-medium rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 text-center text-lg relative overflow-hidden"
                            >
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Découvrir notre approche</span>
                                <span className="absolute inset-0 bg-eg-secondary/40 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></span>
                            </a>
                        </div>
                    </div>

                    {/* Indicateur de défilement */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                        <a href="#presentation" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('presentation')?.scrollIntoView({ behavior: 'smooth' });
                        }} className="text-eg-secondary hover:text-eg-secondary-light transition-colors duration-300 block transform hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* À propos de nous - Design professionnel et élégant */}
            <section id="presentation" className="py-16 bg-white relative overflow-hidden">
                {/* Éléments décoratifs subtils */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#549E39]/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#549E39]/5 rounded-tr-full"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* En-tête de section avec style épuré */}
                    <div className="text-center mb-10">
                        <div className="inline-block">
                            <span className="bg-[#549E39] text-white px-5 py-2 rounded-md text-sm font-semibold">À PROPOS DE NOUS</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4 relative inline-block">
                            Notre Histoire & Notre Vision
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#549E39] rounded-full"></span>
                        </h2>
                    </div>

                    {/* Carte de présentation avec design épuré */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 border border-gray-100">
                        <div className="md:flex">
                            <div className="md:w-2/5 bg-[#455F51] p-6 md:p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Qui sommes-nous ?</h3>
                                    <p className="text-white/90 text-base">
                                        Fondée en juillet 2022 à Conakry, Efficience Globale est votre partenaire stratégique pour un impact durable en Afrique de l'Ouest.
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-3/5 p-6 md:p-8">
                                <div className="mb-4 flex items-start">
                                    <div className="flex-shrink-0 mr-3">
                                        <div className="w-8 h-8 bg-eg-secondary/10 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-eg-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 text-base leading-relaxed">
                                        Efficience Globale se distingue par son <span className="font-semibold text-eg-secondary">approche innovante</span> et sa profonde connaissance des dynamiques locales et régionales de l'Afrique de l'Ouest.
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex items-start">
                                    <div className="flex-shrink-0 mr-3">
                                        <div className="w-8 h-8 bg-eg-secondary/10 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-eg-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 text-base leading-relaxed">
                                            Notre mission est de développer et d'implémenter des <span className="font-semibold text-eg-secondary">solutions sur mesure</span> qui s'inscrivent parfaitement dans le contexte local de l'Afrique de l'Ouest, particulièrement en Guinée.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-3">
                                        <div className="w-8 h-8 bg-eg-secondary/10 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-eg-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 text-base leading-relaxed">
                                            Notre ambition est de créer un <span className="font-semibold text-eg-secondary">impact durable</span> sur les communautés que nous servons, en alliant connaissances locales et meilleures pratiques internationales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline simple avec cercles et lignes */}
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Notre parcours en <span className="text-eg-secondary">5 étapes clés</span></h3>

                    {/* Version desktop de la timeline avancée */}
                    <div className="hidden lg:block relative mb-10">
                        <div className="max-w-6xl mx-auto px-4 relative">
                            {/* Ligne horizontale avec dégradé pour montrer la progression */}
                            <div className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-eg-secondary via-eg-secondary to-eg-secondary/30" style={{ top: '40px' }}></div>

                            {/* Connecteurs entre les cercles */}
                            <div className="absolute left-[22%] w-4 h-4 transform rotate-45 border-t-2 border-r-2 border-eg-secondary" style={{ top: '38px' }}></div>
                            <div className="absolute left-[42%] w-4 h-4 transform rotate-45 border-t-2 border-r-2 border-eg-secondary" style={{ top: '38px' }}></div>
                            <div className="absolute left-[62%] w-4 h-4 transform rotate-45 border-t-2 border-r-2 border-eg-secondary" style={{ top: '38px' }}></div>
                            <div className="absolute left-[82%] w-4 h-4 transform rotate-45 border-t-2 border-r-2 border-eg-secondary" style={{ top: '38px' }}></div>

                            {/* Étapes */}
                            <div className="relative grid grid-cols-5 gap-4">
                                {/* Étape 1 - Juillet 2022 avec indicateur de date partagée */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white mb-4 z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-eg-secondary to-eg-secondary/70"></div>
                                            <div className="absolute top-0 left-0 w-full h-full border-t-4 border-white/30 rounded-full"></div>
                                            <span className="text-sm font-semibold relative z-10">Juillet</span>
                                            <span className="text-xl font-bold relative z-10">2022</span>
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-eg-secondary text-xs font-bold">1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                                        <h4 className="text-lg font-bold text-center mb-2">Création à Conakry</h4>
                                        <p className="text-sm text-gray-700 text-center opacity-80 group-hover:opacity-100">Vision de proposer des solutions sur mesure dans le conseil en stratégie et gestion, avec une spécialisation dans le contexte africain.</p>
                                    </div>
                                </div>

                                {/* Étape 2 - Juillet 2022 avec indicateur de date partagée */}
                                <div className="flex flex-col items-center group">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white mb-4 z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-bl from-eg-secondary to-eg-secondary/70"></div>
                                            <div className="absolute top-0 left-0 w-full h-full border-b-4 border-white/30 rounded-full"></div>
                                            <span className="text-sm font-semibold relative z-10">Juillet</span>
                                            <span className="text-xl font-bold relative z-10">2022</span>
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-eg-secondary text-xs font-bold">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                                        <h4 className="text-lg font-bold text-center mb-2">Collaboration dans l'Éducation</h4>
                                        <p className="text-sm text-gray-700 text-center opacity-80 group-hover:opacity-100">Début d'une collaboration significative dans le domaine de l'éducation, avec un focus sur l'innovation pédagogique.</p>
                                    </div>
                                </div>

                                {/* Étape 3 */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white mb-4 z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)]">
                                        <span className="text-sm font-semibold">Septembre</span>
                                        <span className="text-xl font-bold">2022</span>
                                    </div>
                                    <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                                        <h4 className="text-lg font-bold text-center mb-2">Premier grand projet</h4>
                                        <p className="text-sm text-gray-700 text-center opacity-80 group-hover:opacity-100">Accompagnement de la relance de la plus grande unité industrielle de transformation d'huile de palme en Guinée.</p>
                                    </div>
                                </div>

                                {/* Étape 4 */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white mb-4 z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)]">
                                        <span className="text-sm font-semibold">Janvier</span>
                                        <span className="text-xl font-bold">2023</span>
                                    </div>
                                    <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                                        <h4 className="text-lg font-bold text-center mb-2">Engagement dans la Santé publique</h4>
                                        <p className="text-sm text-gray-700 text-center opacity-80 group-hover:opacity-100">Accompagnement du Service Genre et Équité du MSHP pour renforcer la gestion, la planification et la coordination.</p>
                                    </div>
                                </div>

                                {/* Étape 5 */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white mb-4 z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)]">
                                        <span className="text-sm font-semibold">Janvier</span>
                                        <span className="text-xl font-bold">2024</span>
                                    </div>
                                    <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                                        <h4 className="text-lg font-bold text-center mb-2">Soutien au PEV</h4>
                                        <p className="text-sm text-gray-700 text-center opacity-80 group-hover:opacity-100">Intensification de l'implication dans le secteur de la santé avec l'accompagnement du Programme Élargi de Vaccination (PEV).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Version mobile/tablette - Timeline verticale avancée */}
                    <div className="lg:hidden relative mb-10 px-4">
                        {/* Ligne verticale avec dégradé pour montrer la progression */}
                        <div className="absolute left-8 top-0 bottom-0 w-1.5 bg-gradient-to-b from-eg-secondary via-eg-secondary to-eg-secondary/30"></div>

                        {/* Étape 1 */}
                        <div className="mb-12 pl-20 relative group">
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-eg-secondary to-eg-secondary/70"></div>
                                <div className="absolute top-0 left-0 w-full h-full border-t-4 border-white/30 rounded-full"></div>
                                <span className="text-xs font-semibold relative z-10">Juillet</span>
                                <span className="text-sm font-bold relative z-10">2022</span>
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-eg-secondary text-[10px] font-bold">1</span>
                                </div>
                            </div>
                            {/* Connecteur */}
                            <div className="absolute left-[18px] top-[60px] h-[40px] w-1.5 bg-eg-secondary transform rotate-[30deg] origin-top"></div>
                            <div className="transform transition-all duration-300 group-hover:translate-x-2">
                                <h4 className="text-lg font-bold mb-2">Création à Conakry</h4>
                                <p className="text-sm text-gray-700 opacity-80 group-hover:opacity-100">Vision de proposer des solutions sur mesure dans le conseil en stratégie et gestion, avec une spécialisation dans le contexte africain.</p>
                            </div>
                        </div>

                        {/* Étape 2 */}
                        <div className="mb-12 pl-20 relative group">
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-bl from-eg-secondary to-eg-secondary/70"></div>
                                <div className="absolute top-0 left-0 w-full h-full border-b-4 border-white/30 rounded-full"></div>
                                <span className="text-xs font-semibold relative z-10">Juillet</span>
                                <span className="text-sm font-bold relative z-10">2022</span>
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-eg-secondary text-[10px] font-bold">2</span>
                                </div>
                            </div>
                            {/* Connecteur */}
                            <div className="absolute left-[18px] top-[60px] h-[40px] w-1.5 bg-eg-secondary transform rotate-[30deg] origin-top"></div>
                            <div className="transform transition-all duration-300 group-hover:translate-x-2">
                                <h4 className="text-lg font-bold mb-2">Collaboration dans l'Éducation</h4>
                                <p className="text-sm text-gray-700 opacity-80 group-hover:opacity-100">Début d'une collaboration significative dans le domaine de l'éducation, avec un focus sur l'innovation pédagogique.</p>
                            </div>
                        </div>

                        {/* Étape 3 */}
                        <div className="mb-12 pl-20 relative group">
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)]">
                                <span className="text-xs font-semibold">Septembre</span>
                                <span className="text-sm font-bold">2022</span>
                            </div>
                            {/* Connecteur */}
                            <div className="absolute left-[18px] top-[60px] h-[40px] w-1.5 bg-eg-secondary transform rotate-[30deg] origin-top"></div>
                            <div className="transform transition-all duration-300 group-hover:translate-x-2">
                                <h4 className="text-lg font-bold mb-2">Premier grand projet</h4>
                                <p className="text-sm text-gray-700 opacity-80 group-hover:opacity-100">Accompagnement de la relance de la plus grande unité industrielle de transformation d'huile de palme en Guinée.</p>
                            </div>
                        </div>

                        {/* Étape 4 */}
                        <div className="mb-12 pl-20 relative group">
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)]">
                                <span className="text-xs font-semibold">Janvier</span>
                                <span className="text-sm font-bold">2023</span>
                            </div>
                            {/* Connecteur */}
                            <div className="absolute left-[18px] top-[60px] h-[40px] w-1.5 bg-eg-secondary transform rotate-[30deg] origin-top"></div>
                            <div className="transform transition-all duration-300 group-hover:translate-x-2">
                                <h4 className="text-lg font-bold mb-2">Engagement dans la Santé publique</h4>
                                <p className="text-sm text-gray-700 opacity-80 group-hover:opacity-100">Accompagnement du Service Genre et Équité du MSHP pour renforcer la gestion, la planification et la coordination.</p>
                            </div>
                        </div>

                        {/* Étape 5 */}
                        <div className="mb-8 pl-20 relative group">
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-eg-secondary flex flex-col items-center justify-center text-white z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(84,158,57,0.3)] group-hover:shadow-[0_0_20px_rgba(84,158,57,0.5)]">
                                <span className="text-xs font-semibold">Janvier</span>
                                <span className="text-sm font-bold">2024</span>
                            </div>
                            <div className="transform transition-all duration-300 group-hover:translate-x-2">
                                <h4 className="text-lg font-bold mb-2">Soutien au PEV</h4>
                                <p className="text-sm text-gray-700 opacity-80 group-hover:opacity-100">Intensification de l'implication dans le secteur de la santé avec l'accompagnement du Programme Élargi de Vaccination (PEV).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Domaines d'expertise - Design moderne et impressionnant */}
            <section id="domaines" className="py-20 bg-gradient-to-br from-eg-primary to-eg-primary-dark relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
                    <div className="absolute top-1/2 -left-20 w-64 h-64 bg-white opacity-5 rounded-full"></div>
                    <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-white opacity-5 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block">
                            <span className="bg-white text-eg-primary px-5 py-2 rounded-md text-sm font-semibold">DOMAINES D'INTERVENTION</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4 relative inline-block">
                            Nos expertises
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full"></span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-white/90 text-lg">
                            Nous intervenons dans des secteurs stratégiques pour le développement durable de l'Afrique de l'Ouest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Santé */}
                        <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            {/* Image de fond */}
                            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/img/domaines/sante-afrique.jpg')" }}></div>
                            {/* Overlay au survol */}
                            <div className="absolute inset-0 bg-gradient-to-br from-eg-primary to-eg-primary-dark opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-0"></div>
                            <div className="h-1 bg-eg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 bg-eg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
                                    <svg className="w-8 h-8 text-eg-primary group-hover:text-white transition-colors duration-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Santé Globale</h3>
                                <p className="text-white/90">
                                Nous apportons des solutions innovantes aux défis de la santé publique, en mettant l'accent sur l'accessibilité et l'efficacité des services de santé.
                                </p>
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <a href="#contact" onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        // Présélectionner le sujet Santé dans le formulaire
                                        const subjectSelect = document.getElementById('subject') as HTMLSelectElement;
                                        if (subjectSelect) subjectSelect.value = 'sante';
                                    }} className="text-white font-semibold flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
                                        Découvrir
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Éducation */}
                        <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            {/* Image de fond */}
                            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/img/domaines/education-afrique.jpg')" }}></div>
                            {/* Overlay au survol */}
                            <div className="absolute inset-0 bg-gradient-to-br from-eg-secondary to-eg-secondary-dark opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-0"></div>
                            <div className="h-1 bg-eg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Éducation</h3>
                                <p className="text-white/90">
                                Notre engagement envers l'éducation se traduit par des stratégies visant à révolutionner les méthodes pédagogiques et à améliorer l'expérience d'apprentissage.
                                </p>
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <a href="#contact" onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        // Présélectionner le sujet Éducation dans le formulaire
                                        const subjectSelect = document.getElementById('subject') as HTMLSelectElement;
                                        if (subjectSelect) subjectSelect.value = 'education';
                                    }} className="text-white font-semibold flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
                                        Découvrir
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Industrie */}
                        <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            {/* Image de fond */}
                            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/img/domaines/industrie-afrique.jpg')" }}></div>
                            {/* Overlay au survol */}
                            <div className="absolute inset-0 bg-gradient-to-br from-eg-accent to-eg-accent-dark opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-0"></div>
                            <div className="h-1 bg-eg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Industrie</h3>
                                <p className="text-white/90">
                                Nous apportons des solutions innovantes pour stimuler la croissance industrielle, en mettant l'accent sur la transformation des ressources locales, l'optimisation des chaînes d'approvisionnement.
                                </p>
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <a href="#contact" onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        // Présélectionner le sujet Industrie dans le formulaire
                                        const subjectSelect = document.getElementById('subject') as HTMLSelectElement;
                                        if (subjectSelect) subjectSelect.value = 'industrie';
                                    }} className="text-white font-semibold flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
                                        Découvrir
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RSE */}
                        <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            {/* Image de fond */}
                            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/img/domaines/rse-afrique.jpg')" }}></div>
                            {/* Overlay au survol */}
                            <div className="absolute inset-0 bg-gradient-to-br from-eg-lime to-eg-lime-dark opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-0"></div>
                            <div className="h-1 bg-eg-lime transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="p-8 relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">RSE</h3>
                                <p className="text-white/90">
                                Accompagnement des organisations publiques et privées dans l'intégration de l'équité, du genre et des enjeux environnementaux dans leurs stratégies de responsabilité sociétale.
                                </p>
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <a href="#contact" onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        // Présélectionner le sujet RSE dans le formulaire
                                        const subjectSelect = document.getElementById('subject') as HTMLSelectElement;
                                        if (subjectSelect) subjectSelect.value = 'rse';
                                    }} className="text-white font-semibold flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
                                        Découvrir
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos services */}
            <section id="services" className="py-24 bg-gradient-to-br from-white to-eg-gray-light relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-eg-primary opacity-5 rounded-full"></div>
                    <div className="absolute top-1/3 -left-32 w-64 h-64 bg-eg-secondary opacity-5 rounded-full"></div>
                    <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-eg-accent opacity-5 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block animate-fade-in-up opacity-0">
                            <span className="bg-eg-primary text-white px-5 py-2 rounded-md text-sm font-semibold shadow-eg">NOS SERVICES</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-eg-dark mt-6 mb-4 relative inline-block animate-fade-in-up opacity-0" style={{animationDelay: '100ms'}}>
                            Nous proposons les accompagnements suivants
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-eg-tertiary rounded-full"></span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-eg-gray-dark text-lg animate-fade-in-up opacity-0" style={{animationDelay: '200ms'}}>
                            Notre équipe d'experts propose un accompagnement sur mesure pour répondre à vos défis spécifiques.
                        </p>
                    </div>

                    {/* Conteneur vertical pour tous les services avec ligne de progression */}
                    <div className="relative space-y-8 pb-8">
                        {/* Ligne de progression verticale */}
                        <div className="absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-eg-primary via-eg-secondary to-eg-tertiary rounded-full hidden sm:block"></div>

                        {/* Service 1 - Renforcement des capacités institutionnelles - Sans retrait */}
                        <div className="group relative animate-fade-in-up opacity-0" style={{animationDelay: '250ms'}}>
                            {/* Indicateur numéroté */}
                            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
                                <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-eg-primary flex items-center justify-center font-bold text-eg-primary">1</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-eg overflow-hidden transform transition-all duration-500 hover:shadow-eg-lg group-hover:-translate-y-2 sm:pl-12 relative z-0">
                                <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-eg-primary-light/10 to-transparent transition-all duration-700 ease-out group-hover:w-full"></div>
                                <div className="h-2 bg-eg-primary w-full"></div>
                                <div className="p-6 md:p-7 relative">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-eg-primary-light rounded-2xl flex items-center justify-center text-white shadow-md transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-eg-primary mb-3 group-hover:text-eg-secondary transition-colors duration-300">
                                                RENFORCEMENT DES CAPACITÉS INSTITUTIONNELLES
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                                    <span className="text-eg-secondary mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Delivery Units :</strong> Création de delivery units pour une meilleure coordination et suivi des projets</span>
                                        </li>
                                        <li className="flex items-start">
                                                    <span className="text-eg-secondary mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Formulation de politiques et stratégies :</strong> Pour aborder des défis complexes, basé sur des données probantes</span>
                                        </li>
                                        <li className="flex items-start">
                                                    <span className="text-eg-secondary mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Études d'impact et évaluation :</strong> Mesure de l'efficacité des interventions et de leur impact</span>
                                        </li>
                                    </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 - Optimisation des ressources disponibles - Avec retrait */}
                        <div className="group relative animate-fade-in-up opacity-0" style={{animationDelay: '350ms'}}>
                            {/* Indicateur numéroté */}
                            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
                                <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-eg-secondary flex items-center justify-center font-bold text-eg-secondary">2</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-eg overflow-hidden transform transition-all duration-500 hover:shadow-eg-lg group-hover:-translate-y-2 sm:ml-24 md:ml-32 lg:ml-64 sm:pr-12 relative z-0">
                                <div className="absolute top-0 right-0 w-0 h-full bg-gradient-to-l from-eg-secondary-light/10 to-transparent transition-all duration-700 ease-out group-hover:w-full"></div>
                                <div className="h-2 bg-eg-secondary w-full"></div>
                                <div className="p-6 md:p-7 relative">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-eg-secondary-light rounded-2xl flex items-center justify-center text-white shadow-md transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-eg-secondary mb-3 group-hover:text-eg-primary transition-colors duration-300">
                                                OPTIMISATION DES RESSOURCES DISPONIBLES
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                                    <span className="text-eg-tertiary mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Cartographie des Ressources :</strong> Utilisation de SIG et bases de données centralisées</span>
                                        </li>
                                        <li className="flex items-start">
                                                    <span className="text-eg-tertiary mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Cadre de gouvernance avec Suivi et Évaluation :</strong> Définir des KPI et effectuer des audits réguliers</span>
                                        </li>
                                    </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 - Mobilisation des ressources financières - Sans retrait */}
                        <div className="group relative animate-fade-in-up opacity-0" style={{animationDelay: '450ms'}}>
                            {/* Indicateur numéroté */}
                            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
                                <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-eg-tertiary flex items-center justify-center font-bold text-eg-tertiary">3</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-eg overflow-hidden transform transition-all duration-500 hover:shadow-eg-lg group-hover:-translate-y-2 sm:pl-12 relative z-0">
                                <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-eg-tertiary-light/10 to-transparent transition-all duration-700 ease-out group-hover:w-full"></div>
                                <div className="h-2 bg-eg-tertiary w-full"></div>
                                <div className="p-6 md:p-7 relative">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-eg-tertiary rounded-2xl flex items-center justify-center text-white shadow-md transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-eg-tertiary mb-3 group-hover:text-eg-highlight transition-colors duration-300">
                                                MOBILISATION DES RESSOURCES FINANCIÈRES
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                                    <span className="text-eg-accent mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Partenariats Public-Privé (PPP) :</strong> Facilitation des collaborations stratégiques et partage des risques</span>
                                        </li>
                                        <li className="flex items-start">
                                                    <span className="text-eg-accent mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Financements Internationaux :</strong> Banque mondiale, FMI, banques régionales de développement</span>
                                        </li>
                                    </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 4 - Innovation digitale - Avec retrait */}
                        <div className="group relative animate-fade-in-up opacity-0" style={{animationDelay: '550ms'}}>
                            {/* Indicateur numéroté */}
                            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
                                <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-eg-highlight flex items-center justify-center font-bold text-eg-highlight">4</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-eg overflow-hidden transform transition-all duration-500 hover:shadow-eg-lg group-hover:-translate-y-2 sm:ml-24 md:ml-32 lg:ml-64 sm:pr-12 relative z-0">
                                <div className="absolute top-0 right-0 w-0 h-full bg-gradient-to-l from-eg-highlight/10 to-transparent transition-all duration-700 ease-out group-hover:w-full"></div>
                                <div className="h-2 bg-eg-highlight w-full"></div>
                                <div className="p-6 md:p-7 relative">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-eg-highlight rounded-2xl flex items-center justify-center text-white shadow-md transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-eg-highlight mb-3 group-hover:text-eg-accent transition-colors duration-300">
                                                INNOVATION DIGITALE
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                                    <span className="text-eg-secondary mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Outils de Productivité :</strong> Développement d'applications pour améliorer l'efficacité des processus</span>
                                        </li>
                                        <li className="flex items-start">
                                                    <span className="text-eg-secondary mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Automatisation et IA :</strong> Optimisation des processus décisionnels et de gestion</span>
                                        </li>
                                    </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 5 - Autre assistance technique - Sans retrait */}
                        <div className="group relative animate-fade-in-up opacity-0" style={{animationDelay: '650ms'}}>
                            {/* Indicateur numéroté */}
                            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
                                <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-eg-accent flex items-center justify-center font-bold text-eg-accent">5</div>
                            </div>
                            <div className="bg-white rounded-xl shadow-eg overflow-hidden transform transition-all duration-500 hover:shadow-eg-lg group-hover:-translate-y-2 sm:pl-12 relative z-0">
                                <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-eg-accent/10 to-transparent transition-all duration-700 ease-out group-hover:w-full"></div>
                                <div className="h-2 bg-eg-accent w-full"></div>
                                <div className="p-6 md:p-7 relative">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-eg-accent rounded-2xl flex items-center justify-center text-white shadow-md transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-eg-accent mb-3 group-hover:text-eg-tertiary transition-colors duration-300">
                                                AUTRE ASSISTANCE TECHNIQUE
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                                    <span className="text-eg-highlight mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Gestion des Risques et Développement de Politiques :</strong> Mise en place de systèmes d'aide à la décision</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-eg-highlight mr-2 mt-1 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <span><strong className="text-eg-gray-dark">Collecte et analyse de données :</strong> Amélioration de la collecte et utilisation des données pour des décisions éclairées</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bouton "En savoir plus" - À SUPPRIMER */}
                    {/* <div className="text-center mt-12 mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '750ms'}}>
                        <button
                            onClick={() => setShowAccelerateurModal(true)}
                            className="bg-eg-primary hover:bg-eg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-eg hover:shadow-eg-lg transform hover:-translate-y-1 flex items-center mx-auto"
                        >
                            <span>Pour aller plus loin</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div> */}

                    {/* Section CTA */}
                    <div className="mt-16 text-center animate-fade-in-up opacity-0" style={{animationDelay: '300ms'}}>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                            <a href="#contact"
                               onClick={(e) => {
                                   e.preventDefault();
                                   document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                               }}
                               className="inline-flex items-center px-8 py-4 bg-eg-primary text-white font-semibold rounded-xl shadow-eg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-eg-lg hover:bg-eg-secondary"
                            >
                                Discuter de vos besoins
                                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>

                            <button
                                onClick={() => setShowAccelerateurModal(true)}
                                className="inline-flex items-center px-8 py-4 bg-white text-eg-primary border-2 border-eg-primary font-semibold rounded-xl shadow-eg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-eg-lg hover:bg-eg-primary hover:text-white"
                            >
                                Pour aller plus loin
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Réalisations clés */}
            <section id="realisations" className="py-16 bg-gradient-to-br from-eg-primary to-eg-primary-dark relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
                    <div className="absolute top-1/2 -left-20 w-64 h-64 bg-white opacity-5 rounded-full"></div>
                    <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-white opacity-5 rounded-full"></div>
                </div>

                {/* Pas de motif décoratif */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block">
                            <span className="bg-white text-eg-primary px-5 py-2 rounded-md text-sm font-semibold">RÉALISATIONS</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4 relative inline-block">
                            Nos projets clés
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full"></span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-white/90 text-lg">
                            Des projets concrets qui témoignent de notre expertise et de notre capacité à créer de la valeur.
                        </p>
                    </div>

                    {/* Grille des réalisations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {/* Génération dynamique des projets */}
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`group relative h-64 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] cursor-pointer ${
                                    project.id === 7 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                                onClick={() => openProjectModal(project)}
                            >
                                {/* Image de fond */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{backgroundImage: `url('${project.image}')`}}
                                ></div>

                                {/* Overlay avec dégradé subtil */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>

                                {/* Tag de catégorie */}
                                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Contenu */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-bold text-white mb-2 transform group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                    <p className="text-white/80 text-sm mb-6 line-clamp-2 transform group-hover:translate-y-0 transition-transform duration-300">{project.subtitle}</p>

                                    {/* Bouton "Voir plus" qui apparaît au survol */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <button className="text-white text-sm font-medium flex items-center">
                                            Voir détails
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                        </button>
                                </div>
                            </div>

                                {/* Bouton d'info */}
                                <button
                                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors duration-300"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openProjectModal(project);
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                        </div>

                    {/* Bouton d'action */}
                    <div className="mt-12 text-center">
                        <a href="#contact"
                           onClick={(e) => {
                               e.preventDefault();
                               document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                           }}
                           className="inline-flex items-center px-8 py-4 bg-white text-eg-primary hover:bg-eg-lime hover:text-white font-semibold rounded-xl shadow-eg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-eg-lg group"
                        >
                            <span>Discuter de votre projet</span>
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                        </a>
                                </div>
                            </div>

                {/* Modal pour les détails du projet */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeProjectModal}>
                        <div
                            className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full animate-fade-in-down max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image d'en-tête */}
                            <div className="relative h-56 bg-cover bg-center" style={{backgroundImage: `url('${selectedProject.image}')`}}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-2">
                                        {selectedProject.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                                </div>
                                <button
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-300"
                                    onClick={closeProjectModal}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                        </div>

                            {/* Contenu */}
                            <div className="p-6 overflow-y-auto">
                                <p className="text-gray-700 mb-6 text-lg">{selectedProject.description}</p>

                                <h4 className="text-lg font-semibold text-eg-primary mb-4">Points clés du projet</h4>
                                <ul className="space-y-3">
                                    {selectedProject.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg className="h-6 w-6 text-eg-secondary flex-shrink-0 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                            <span className="text-gray-700">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                </div>

                            {/* Pied de page du modal */}
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                <div className="flex justify-end">
                                    <button
                                        className="px-6 py-2 bg-eg-primary text-white rounded-lg hover:bg-eg-primary-dark transition-colors duration-300 flex items-center"
                                        onClick={closeProjectModal}
                                    >
                                        Fermer
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </section>

            {/* Section Notre équipe */}
            <section id="equipe" className="py-24 bg-gradient-to-br from-white to-eg-gray-light relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-eg-primary opacity-5 rounded-full"></div>
                    <div className="absolute top-1/3 -left-32 w-64 h-64 bg-eg-secondary opacity-5 rounded-full"></div>
                    <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-eg-accent opacity-5 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-block">
                            <span className="bg-eg-primary text-white px-5 py-2 rounded-md text-sm font-semibold shadow-eg">NOTRE ÉQUIPE</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-eg-dark mt-6 mb-4 relative inline-block">
                            Une équipe pluridisciplinaire
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-eg-tertiary rounded-full"></span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-eg-gray-dark text-lg">
                            Notre force réside dans la diversité de nos talents et leur expertise complémentaire.
                        </p>
                    </div>

                    {/* Direction et équipe principale - Nouvelle disposition */}
                    <div className="flex flex-col lg:flex-row gap-10 mb-20">
                        {/* Directeur à gauche */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-xl shadow-eg p-8 transform transition-all duration-500 hover:-translate-y-2 h-full flex flex-col items-center justify-center">
                                <div className="relative">
                                    <div className="w-56 h-56 rounded-full overflow-hidden mb-8 shadow-xl border-4 border-white relative transition-transform duration-500 hover:scale-105">
                                        {/* Cercle d'effet de lumière */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-eg-primary to-eg-primary-dark opacity-10 z-10"></div>

                                        {/* Image ou placeholder */}
                                        {teamMembers[0].photo ? (
                                            <img
                                                src={teamMembers[0].photo}
                                                alt={teamMembers[0].name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-eg-primary/10 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 text-eg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                        )}

                                        {/* Élément décoratif de bordure */}
                                        <div className="absolute inset-0 border-4 border-eg-primary/30 rounded-full"></div>
                                </div>

                                    {/* Badge décoratif */}
                                    <div className="absolute -bottom-2 -right-2 bg-eg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transform rotate-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <h3 className="text-2xl font-bold text-eg-dark mb-2">{teamMembers[0].name}</h3>
                                    <div className="inline-block bg-eg-primary/10 px-4 py-1 rounded-full mb-4">
                                        <p className="text-xl text-eg-primary font-semibold">{teamMembers[0].role}</p>
                                    </div>
                                    <p className="text-center text-eg-gray-dark">
                                        {teamMembers[0].description}
                                    </p>
                                </div>
                                    </div>
                                </div>

                        {/* Équipe principale à droite */}
                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-full">
                                {teamMembers.slice(1).map((member) => (
                                    <div key={member.id} className="group h-full">
                                        <div className="bg-white rounded-xl shadow-eg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl h-full">
                                            {/* Bande colorée en haut */}
                                            <div className={`h-2 bg-${member.color} w-full`}></div>

                                            <div className="p-6 flex flex-col items-center h-full">
                                                {/* Photo (circulaire) */}
                                                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-500">
                                                    {member.photo ? (
                                                        <img
                                                            src={member.photo}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className={`w-full h-full bg-${member.color}/10 flex items-center justify-center`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-14 w-14 text-${member.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                                    )}
                                    </div>

                                                {/* Informations */}
                                                <h3 className={`text-lg font-bold text-${member.color} mb-2 text-center`}>{member.name}</h3>
                                                <p className="text-eg-gray-dark font-medium mb-3 text-center">{member.role}</p>

                                                {member.description && (
                                                    <p className="text-eg-gray text-center text-sm mb-4">{member.description}</p>
                                                )}

                                                {/* Ligne décorative */}
                                                <div className={`w-10 h-1 bg-${member.color} rounded-full mt-auto group-hover:w-20 transition-all duration-500`}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>

                    {/* Section Consultants et Analystes */}
                    <div className="mt-20 grid md:grid-cols-2 gap-8">
                        {/* Consultants régionaux - Inspiré de l'image */}
                        <div className="bg-[#C0CF3A]/10 border-2 border-dashed border-[#8AB833] rounded-xl p-6 relative">
                            <h3 className="text-2xl font-bold text-center uppercase mb-8 text-[#455F51]">Niveau régional</h3>

                            {/* Bloc central avec texte */}
                            <div className="bg-[#549E39] rounded-xl text-white p-4 text-center mx-auto max-w-xs mb-4">
                                <p className="font-bold text-xl">8 Consultants</p>
                                <p>expérimentés dans les 8 Régions administratives</p>
                                </div>

                            {/* Photos en cercle */}
                            <div className="relative min-h-[180px]">
                                {/* Positions des consultants autour du centre */}
                                {consultants.length > 0 && (
                                    <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {consultants[0].photo ? (
                                                <img
                                                    src={consultants[0].photo}
                                                    alt={consultants[0].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#C0CF3A]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#8AB833] font-medium">{consultants[0].name.substring(0, 2)}</span>
                            </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{consultants[0].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#549E39] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {consultants[0].region}
                                        </div>
                                    </div>
                                )}

                                {consultants.length > 1 && (
                                    <div className="absolute top-[15px] left-0">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {consultants[1].photo ? (
                                                <img
                                                    src={consultants[1].photo}
                                                    alt={consultants[1].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#549E39]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#549E39] font-medium">{consultants[1].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{consultants[1].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#549E39] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {consultants[1].region}
                                        </div>
                                    </div>
                                )}

                                {consultants.length > 2 && (
                                    <div className="absolute top-[80px] left-[-5px]">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {consultants[2].photo ? (
                                                <img
                                                    src={consultants[2].photo}
                                                    alt={consultants[2].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#8AB833]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#8AB833] font-medium">{consultants[2].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{consultants[2].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#549E39] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {consultants[2].region}
                                        </div>
                                    </div>
                                )}

                                {consultants.length > 3 && (
                                    <div className="absolute bottom-0 left-[15%]">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {consultants[3].photo ? (
                                                <img
                                                    src={consultants[3].photo}
                                                    alt={consultants[3].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#C0CF3A]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#C0CF3A] font-medium">{consultants[3].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{consultants[3].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#549E39] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {consultants[3].region}
                                        </div>
                                    </div>
                                )}

                                {consultants.length > 4 && (
                                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {consultants[4].photo ? (
                                                <img
                                                    src={consultants[4].photo}
                                                    alt={consultants[4].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#549E39]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#549E39] font-medium">{consultants[4].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{consultants[4].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#549E39] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {consultants[4].region}
                                        </div>
                                    </div>
                                )}

                                {consultants.length > 5 && (
                                    <div className="absolute bottom-0 right-[15%]">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {consultants[5].photo ? (
                                                <img
                                                    src={consultants[5].photo}
                                                    alt={consultants[5].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#8AB833]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#8AB833] font-medium">{consultants[5].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{consultants[5].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#549E39] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {consultants[5].region}
                                        </div>
                                    </div>
                                )}

                                {consultants.length > 6 && (
                                    <div className="absolute top-[80px] right-[-5px]">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {consultants[6].photo ? (
                                                <img
                                                    src={consultants[6].photo}
                                                    alt={consultants[6].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#029676]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#029676] font-medium">{consultants[6].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{consultants[6].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#549E39] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {consultants[6].region}
                                        </div>
                                    </div>
                                )}

                                {consultants.length > 7 && (
                                    <div className="absolute top-[15px] right-0">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {consultants[7].photo ? (
                                                <img
                                                    src={consultants[7].photo}
                                                    alt={consultants[7].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#455F51]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#455F51] font-medium">{consultants[7].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{consultants[7].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#549E39] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {consultants[7].region}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Analystes - Avec la même structure que les consultants */}
                        <div className="bg-[#455F51]/10 border-2 border-dashed border-[#029676] rounded-xl p-6 relative">
                            <h3 className="text-2xl font-bold text-center uppercase mb-8 text-[#455F51]">Niveau central</h3>

                            {/* Bloc central avec texte */}
                            <div className="bg-[#029676] rounded-xl text-white p-4 text-center mx-auto max-w-xs mb-4">
                                <p className="font-bold text-xl">4 Analystes</p>
                                <p>spécialisés dans différents domaines d'expertise</p>
                            </div>

                            {/* Photos en cercle - Moins de photos pour les analystes */}
                            <div className="relative min-h-[180px]">
                                {analystes.length > 0 && (
                                    <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {analystes[0].photo ? (
                                                <img
                                                    src={analystes[0].photo}
                                                    alt={analystes[0].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#549E39]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#549E39] font-medium">{analystes[0].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{analystes[0].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#029676] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {analystes[0].specialite}
                                        </div>
                                    </div>
                                )}

                                {analystes.length > 1 && (
                                    <div className="absolute top-[50px] left-[10%]">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {analystes[1].photo ? (
                                                <img
                                                    src={analystes[1].photo}
                                                    alt={analystes[1].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#8AB833]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#8AB833] font-medium">{analystes[1].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{analystes[1].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#029676] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {analystes[1].specialite}
                                        </div>
                                    </div>
                                )}

                                {analystes.length > 2 && (
                                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {analystes[2].photo ? (
                                                <img
                                                    src={analystes[2].photo}
                                                    alt={analystes[2].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#C0CF3A]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#C0CF3A] font-medium">{analystes[2].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{analystes[2].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#029676] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {analystes[2].specialite}
                                        </div>
                                    </div>
                                )}

                                {analystes.length > 3 && (
                                    <div className="absolute top-[50px] right-[10%]">
                                        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden bg-white group relative">
                                            {analystes[3].photo ? (
                                                <img
                                                    src={analystes[3].photo}
                                                    alt={analystes[3].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#029676]/10 flex items-center justify-center">
                                                    <span className="text-xs text-[#029676] font-medium">{analystes[3].name.substring(0, 2)}</span>
                                                </div>
                                            )}
                                            {/* Tooltip qui apparaît au survol */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                                <span className="text-white text-xs font-medium">{analystes[3].name}</span>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#029676] text-white text-[8px] px-1 rounded-sm leading-tight whitespace-nowrap">
                                            {analystes[3].specialite}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Contact */}
            <section id="contact" className="py-20 bg-gradient-to-br from-[#455F51] to-[#395244] text-white relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#C0CF3A] opacity-10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#549E39] opacity-10 rounded-tr-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white opacity-5 rounded-full"></div>
                    <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#C0CF3A] opacity-5 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* En-tête de section */}
                    <div className="text-center mb-16">
                        <div className="inline-block">
                            <span className="bg-white text-eg-primary px-5 py-2 rounded-md text-sm font-semibold">CONTACT</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4 relative inline-block">
                            Contactez-nous
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full"></span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-white/90 text-lg">
                            Notre équipe est disponible pour répondre à vos besoins et vous accompagner dans vos projets à travers l'Afrique.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Cartes d'informations de contact */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Carte Nous joindre */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#C0CF3A] p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold ml-4">Nous joindre</h3>
                                </div>

                                <div className="space-y-3">
                                    <p className="flex items-center text-white/80">
                                        <span className="inline-block w-8 text-[#C0CF3A]">+224</span>
                                        XX XX XX XX
                                    </p>
                                    <p className="flex items-center text-white/80">
                                        <span className="inline-block w-8 text-[#C0CF3A]">+224</span>
                                        XX XX XX XX
                                    </p>
                                    </div>
                                </div>

                            {/* Carte Nous écrire */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#C0CF3A] p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold ml-4">Nous écrire</h3>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-white/80">
                                        contact@efficienceglobale.com
                                    </p>
                                    <p className="text-white/80">
                                        info@eg-conseil.com
                                    </p>
                                    </div>
                                </div>

                            {/* Carte Nous rencontrer */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#C0CF3A] p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold ml-4">Nous rencontrer</h3>
                                    </div>

                                <div className="space-y-3">
                                    <p className="text-white/80">
                                        <span className="block font-medium text-white">Siège social</span>
                                        Conakry, Guinée
                                    </p>
                                    <p className="text-white/80">
                                        <span className="block font-medium text-white">Bureau régional</span>
                                        Dakar, Sénégal
                                    </p>
                                </div>
                            </div>

                            {/* Pays d'intervention */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#C0CF3A] p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold ml-4">Pays d'intervention</h3>
                        </div>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#549E39]/20 text-white">Guinée</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#549E39]/20 text-white">Cameroun</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#549E39]/20 text-white">RDC</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#549E39]/20 text-white">Côte d'Ivoire</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#549E39]/20 text-white">Gabon</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#549E39]/20 text-white">Comores</span>
                                </div>
                            </div>
                        </div>

                        {/* Formulaire de contact */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <div className="flex items-center mb-6">
                                    <div className="flex-shrink-0 bg-[#455F51] rounded-lg p-3 mr-4">
                                        <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#455F51]">Entrer en contact avec nous</h2>
                                        <p className="text-gray-600">
                                            Nous sommes à votre écoute pour toute demande
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                    <input
                                        type="text"
                                                id="nom"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#549E39] focus:border-transparent transition-all duration-300"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                        <div>
                                            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                                            <input
                                                type="text"
                                                id="prenom"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#549E39] focus:border-transparent transition-all duration-300"
                                                placeholder="Votre prénom"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#549E39] focus:border-transparent transition-all duration-300"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Téléphone <span className="text-gray-400">(optionnel)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="telephone"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#549E39] focus:border-transparent transition-all duration-300"
                                                placeholder="+224 XX XX XX XX"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
                                                Sujet
                                            </label>
                                    <select
                                                id="sujet"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#549E39] focus:border-transparent transition-all duration-300"
                                            >
                                                <option value="">Sélectionnez un sujet</option>
                                                <option value="collaboration">Proposition de collaboration</option>
                                                <option value="service">Demande de service</option>
                                                <option value="recrutement">Recrutement</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                        </div>
                                </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#549E39] focus:border-transparent transition-all duration-300"
                                            placeholder="Décrivez votre demande, projet ou question..."
                                    ></textarea>
                                </div>

                                    <div className="flex items-center">
                                        <input
                                            id="consent"
                                            type="checkbox"
                                            className="h-4 w-4 text-[#549E39] focus:ring-[#549E39] border-gray-300 rounded"
                                        />
                                        <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                                            J'accepte que mes données soient traitées pour me recontacter
                                        </label>
                                    </div>

                                    <div>
                                <button
                                    type="submit"
                                            className="w-full bg-[#549E39] hover:bg-[#455F51] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                                >
                                            <span>Envoyer ma demande</span>
                                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                </button>
                                    </div>
                            </form>

                                {/* Réseaux sociaux */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-sm text-gray-700 mb-3">Suivez-nous sur les réseaux sociaux</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300">
                                            <svg className="w-5 h-5 text-[#455F51]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300">
                                            <svg className="w-5 h-5 text-[#455F51]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300">
                                            <svg className="w-5 h-5 text-[#455F51]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Accélérateurs */}
            {showAccelerateurModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowAccelerateurModal(false)}>
                    <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in-down" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setShowAccelerateurModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-8">
                            {/* Nos Accélérateurs */}
                            <div className="mb-12">
                                <div className="border-l-4 border-eg-primary pl-4 mb-6">
                                    <h2 className="text-3xl font-bold text-eg-dark">Nos Accélérateurs</h2>
                                    <p className="text-eg-gray-dark italic">Des éléments clés qui renforcent notre impact</p>
                                </div>

                                <div className="space-y-8">
                                    {/* Expertise internationale */}
                                    <div className="bg-white rounded-lg p-6 shadow-eg">
                                        <h3 className="text-xl font-bold text-eg-primary mb-3 flex items-center">
                                            <span className="bg-eg-primary-light text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            EXPERTISE INTERNATIONALE ADAPTÉE AU CONTEXTE LOCAL
                                        </h3>
                                        <div className="pl-11 text-eg-gray-dark">
                                            <p className="mb-2">Nous intégrons l'excellence de l'expertise internationale en l'adaptant aux réalités et aux besoins spécifiques de l'Afrique de l'Ouest.</p>
                                            <p>Notre approche est d'appliquer les meilleures pratiques globales tout en respectant les nuances et les particularités culturelles, économiques et sociales locales.</p>
                                        </div>
                                    </div>

                                    {/* Partenariat stratégique */}
                                    <div className="bg-white rounded-lg p-6 shadow-eg">
                                        <h3 className="text-xl font-bold text-eg-secondary mb-3 flex items-center">
                                            <span className="bg-eg-secondary-light text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                </svg>
                                            </span>
                                            PARTENARIAT STRATÉGIQUE
                                        </h3>
                                        <div className="pl-11 text-eg-gray-dark">
                                            <p className="mb-2">Collaboration avec des expertises sectorielles pointues pour notre proposition de valeur et encore mieux servir nos clients.</p>
                                            <p>Actuellement nous avons des partenariats stratégiques dans les secteurs suivants : Technologie, Mines et industrie agroalimentaire</p>
                                        </div>
                                    </div>

                                    {/* Nouvelles technologies */}
                                    <div className="bg-white rounded-lg p-6 shadow-eg">
                                        <h3 className="text-xl font-bold text-eg-tertiary mb-3 flex items-center">
                                            <span className="bg-eg-tertiary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            UTILISATION DES NOUVELLES TECHNOLOGIES POUR DÉCUPLER NOTRE PRODUCTIVITÉ
                                        </h3>
                                        <div className="pl-11 text-eg-gray-dark">
                                            <p className="mb-4">Notre utilisation de manière responsable de l'intelligence artificielle générative permet de :</p>
                                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                                <li>Accélérer le processus d'apprentissage, d'analyse et de création</li>
                                                <li>Gagner en productivité et en justesse</li>
                                                <li>Améliorer la communication</li>
                                            </ul>
                                            <p>L'utilisation responsable de l'IA implique de tenir compte des risques liés à la sécurité des données clients, aux biais et approximations des outils, à la propriété intellectuelle.</p>
                                        </div>
                                    </div>

                                    {/* Réseau d'experts */}
                                    <div className="bg-white rounded-lg p-6 shadow-eg">
                                        <h3 className="text-xl font-bold text-eg-highlight mb-3 flex items-center">
                                            <span className="bg-eg-highlight text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                </svg>
                                            </span>
                                            UN RÉSEAU D'EXPERTS SUR DES PROBLÉMATIQUES POINTUES
                                        </h3>
                                        <div className="pl-11 text-eg-gray-dark">
                                            <p className="mb-2">Nous avons formé un réseau d'experts hautement qualifiés, chacun spécialisé dans des domaines précis et essentiels à la compréhension et à la résolution des problématiques complexes de nos clients.</p>
                                            <p>Ce pool d'experts est mobilisable rapidement pour fournir des analyses approfondies, des recommandations stratégiques et des solutions innovantes sur mesure.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Accompagnement IA en 4 phases */}
                            <div>
                                <div className="border-l-4 border-eg-accent pl-4 mb-6">
                                    <h2 className="text-3xl font-bold text-eg-dark">Accompagnement IA en 4 phases</h2>
                                    <p className="text-eg-gray-dark italic">Une approche structurée pour l'intégration de l'IA</p>
                                </div>

                                <div className="relative">
                                    {/* Ligne de progression verticale */}
                                    <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-eg-primary via-eg-tertiary to-eg-accent"></div>

                                    <div className="space-y-8 relative">
                                        {/* Phase 1 */}
                                        <div className="flex pl-12 relative">
                                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-eg-primary flex items-center justify-center text-white font-bold">1</div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-eg-primary mb-2">Analyse des besoins</h3>
                                                <div className="bg-white rounded-lg p-5 shadow-eg">
                                                    <p className="font-semibold mb-2">L'analyse des besoins (processus et environnement)</p>
                                                    <ul className="space-y-2 text-eg-gray-dark">
                                                        <li className="flex items-start">
                                                            <span className="text-eg-primary mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Évaluation des processus actuels pour identifier les domaines où le LLM pourrait avoir l'impact le plus significatif</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-eg-primary mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Définition des objectifs clairs pour l'intégration de l'IA générative (productivité, qualité, prise de décision…)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phase 2 */}
                                        <div className="flex pl-12 relative">
                                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-eg-secondary flex items-center justify-center text-white font-bold">2</div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-eg-secondary mb-2">Personnalisation</h3>
                                                <div className="bg-white rounded-lg p-5 shadow-eg">
                                                    <p className="font-semibold mb-2">Développement et/ou personnalisation de solutions LLM</p>
                                                    <ul className="space-y-2 text-eg-gray-dark">
                                                        <li className="flex items-start">
                                                            <span className="text-eg-secondary mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Création de modèles d'IA sur mesure</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-eg-secondary mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Intégration fluide avec les systèmes existants</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-eg-secondary mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Garantie de la protection des données</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phase 3 */}
                                        <div className="flex pl-12 relative">
                                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-eg-tertiary flex items-center justify-center text-white font-bold">3</div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-eg-tertiary mb-2">Déploiement et formation</h3>
                                                <div className="bg-white rounded-lg p-5 shadow-eg">
                                                    <p className="font-semibold mb-2">Formation et renforcement des capacités</p>
                                                    <ul className="space-y-2 text-eg-gray-dark">
                                                        <li className="flex items-start">
                                                            <span className="text-eg-tertiary mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Programmes de formation : organiser des sessions de formation pour les utilisateurs clés, en mettant l'accent sur l'utilisation efficace et éthique</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-eg-tertiary mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Soutien technique régulier pour résoudre les problèmes et optimiser l'utilisation des solutions</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phase 4 */}
                                        <div className="flex pl-12 relative">
                                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-eg-accent flex items-center justify-center text-white font-bold">4</div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-eg-accent mb-2">Support et adoption</h3>
                                                <div className="bg-white rounded-lg p-5 shadow-eg">
                                                    <p className="font-semibold mb-2">Promotion pour l'adoption et sensibilisation</p>
                                                    <ul className="space-y-2 text-eg-gray-dark">
                                                        <li className="flex items-start">
                                                            <span className="text-eg-accent mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Élaborer et mettre en œuvre une stratégie de communication pour informer et sensibiliser toutes les parties prenantes aux avantages de l'utilisation des outils LLM</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-eg-accent mr-2 mt-1 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </span>
                                                            <span>Encourager la collaboration entre les parties prenantes pour soutenir l'intégration et la mise à l'échelle de l'IA générative</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Section Partenaires - Ils nous font déjà confiance */}
            <section className="py-16 bg-gradient-to-br from-white to-eg-gray-light relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-eg-primary opacity-5 rounded-full"></div>
                    <div className="absolute top-1/3 -left-32 w-64 h-64 bg-eg-secondary opacity-5 rounded-full"></div>
                    <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-eg-accent opacity-5 rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* En-tête de section */}
                    <div className="text-center mb-12">
                        <div className="inline-block">
                            <span className="bg-eg-primary text-white px-5 py-2 rounded-md text-sm font-semibold shadow-eg">PARTENAIRES</span>
                        </div>
                        <h2 className="text-4xl font-bold text-eg-dark mt-6 mb-4 relative inline-block">
                            Ils nous font déjà confiance
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-eg-tertiary rounded-full"></span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-eg-gray-dark text-lg">
                            Des institutions et organisations de premier plan nous ont accordé leur confiance pour mener à bien leurs projets à travers l'Afrique.
                        </p>
                    </div>

                    {/* Carrousel de logos */}
                    <div className="relative mt-12 px-10 overflow-hidden">
                        {/* Flèche gauche */}
                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-100 transition-all z-10"
                            onClick={() => {
                                const container = document.getElementById('logo-carousel');
                                if (container) {
                                    container.scrollLeft -= 300;
                                }
                            }}
                        >
                            <svg className="w-6 h-6 text-eg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Conteneur de logos avec défilement automatique */}
                        <div className="carousel-container overflow-hidden relative">
                            <div
                                id="logo-carousel"
                                className="flex items-center animate-marquee whitespace-nowrap py-6"
                            >
                                {/* Première série de logos */}
                                <div className="flex space-x-8 logo-slide">
                                    {/* Logo 1 - Gavi */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/gavi-logo.png"
                                                alt="Gavi Alliance"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Gavi Alliance
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 2 - UNICEF */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/unicef-logo.png"
                                                alt="UNICEF"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                UNICEF
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 3 - Ministère de la santé */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/ministere-sante-logo.png"
                                                alt="Ministère de la santé"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Ministère de la santé
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 4 - Université Kofi Annan */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/kofi-annan-logo.png"
                                                alt="Université Kofi Annan de Guinée"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Université Kofi Annan
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 5 - Expertise France */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/expertise-france-logo.png"
                                                alt="Expertise France"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Expertise France
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 6 - Institut Français */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/institut-francais-logo.png"
                                                alt="Institut Français de Guinée"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Institut Français de Guinée
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 7 - Banque Mondiale */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/world-bank-logo.png"
                                                alt="The World Bank"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                The World Bank
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 8 - Aguipel */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/aguipel-logo.png"
                                                alt="Aguipel"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Aguipel
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Deuxième série de logos (dupliqués pour créer l'effet de boucle infinie) */}
                                <div className="flex space-x-8 logo-slide">
                                    {/* Logo 1 - Gavi (dupliqué) */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/gavi-logo.png"
                                                alt="Gavi Alliance"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Gavi Alliance
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 2 - UNICEF (dupliqué) */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/unicef-logo.png"
                                                alt="UNICEF"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                UNICEF
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 3 - Ministère de la santé (dupliqué) */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/ministere-sante-logo.png"
                                                alt="Ministère de la santé"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Ministère de la santé
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 4 - Université Kofi Annan (dupliqué) */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/kofi-annan-logo.png"
                                                alt="Université Kofi Annan de Guinée"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Université Kofi Annan
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo 5 - Expertise France (dupliqué) */}
                                    <div className="flex-shrink-0 flex flex-col items-center w-48 group">
                                        <div className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C0CF3A] h-32 flex items-center justify-center transition-all duration-300 relative">
                                            <img
                                                src="/img/partners/expertise-france-logo.png"
                                                alt="Expertise France"
                                                className="max-h-20 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-[#455F51] text-white text-center text-sm py-1 rounded-b-xl transition-opacity duration-300">
                                                Expertise France
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Flèche droite */}
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-100 transition-all z-10"
                            onClick={() => {
                                const container = document.getElementById('logo-carousel');
                                if (container) {
                                    container.scrollLeft += 300;
                                }
                            }}
                        >
                            <svg className="w-6 h-6 text-eg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Styles pour l'animation du carrousel */}
                    <style dangerouslySetInnerHTML={{ __html: `
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-100%); }
                        }

                        .animate-marquee {
                            animation: marquee 25s linear infinite;
                        }

                        .carousel-container:hover .animate-marquee {
                            animation-play-state: paused;
                        }
                    ` }} />
                </div>
            </section>
        </EGLayout>
    );
}
