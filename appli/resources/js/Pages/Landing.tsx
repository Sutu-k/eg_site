import React from 'react';
import { Link, Head } from '@inertiajs/react';
import EGLayout from '@/Layouts/EGLayout';

export default function Landing() {
    return (
        <EGLayout title="EG Conseil - Conseil stratégique et opérationnel pour un impact durable en Afrique de l'Ouest">
            <Head>
                <title>EG Conseil - Conseil stratégique et opérationnel pour un impact durable en Afrique de l'Ouest</title>
                <meta name="description" content="EG Conseil développe des solutions de conseil stratégique et opérationnel sur mesure pour les entreprises et organisations en Afrique de l'Ouest." />
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
                            EG Conseil est un cabinet de conseil en stratégie et gestion de projets à impact en Afrique de l'Ouest.
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
                                        Fondée en juillet 2022 à Conakry, EG Conseil est votre partenaire stratégique pour un impact durable en Afrique de l'Ouest.
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
                                            EG Conseil se distingue par son <span className="font-semibold text-eg-secondary">approche innovante</span> et sa profonde connaissance des dynamiques locales et régionales de l'Afrique de l'Ouest.
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

            {/* Domaines d'expertise */}
            <section id="domaines" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="bg-eg-primary-light text-eg-dark px-4 py-2 rounded-full text-sm font-semibold">NOS EXPERTISES</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Domaines d'intervention</h2>
                        <p className="max-w-3xl mx-auto text-gray-700">
                            Nous intervenons dans des secteurs stratégiques pour le développement durable de l'Afrique de l'Ouest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Santé */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-3 bg-eg-primary"></div>
                            <div className="p-6">
                                <div className="w-12 h-12 bg-eg-primary-light rounded-lg flex items-center justify-center text-eg-dark mb-4">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Santé Globale</h3>
                                <p className="text-gray-600 mb-4">
                                    Solutions innovantes aux défis de la santé publique, accessibilité et efficacité des services de santé.
                                </p>
                            </div>
                        </div>

                        {/* Éducation */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-3 bg-eg-secondary"></div>
                            <div className="p-6">
                                <div className="w-12 h-12 bg-eg-secondary/20 rounded-lg flex items-center justify-center text-eg-secondary mb-4">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Éducation</h3>
                                <p className="text-gray-600 mb-4">
                                    Transformation des approches pédagogiques et amélioration des systèmes éducatifs pour un apprentissage de qualité.
                                </p>
                            </div>
                        </div>

                        {/* Industrie */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-3 bg-eg-accent"></div>
                            <div className="p-6">
                                <div className="w-12 h-12 bg-eg-accent/20 rounded-lg flex items-center justify-center text-eg-accent mb-4">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrie</h3>
                                <p className="text-gray-600 mb-4">
                                    Développement industriel durable, valorisation des ressources locales et optimisation des chaînes d'approvisionnement.
                                </p>
                            </div>
                        </div>

                        {/* RSE */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-3 bg-eg-lime"></div>
                            <div className="p-6">
                                <div className="w-12 h-12 bg-eg-lime/20 rounded-lg flex items-center justify-center text-eg-lime mb-4">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">RSE</h3>
                                <p className="text-gray-600 mb-4">
                                    Intégration des principes de responsabilité sociétale, d'équité de genre et de durabilité environnementale dans les organisations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos services */}
            <section id="services" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="bg-eg-primary-light text-eg-dark px-4 py-2 rounded-full text-sm font-semibold">NOS SERVICES</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Comment nous pouvons vous aider</h2>
                        <p className="max-w-3xl mx-auto text-gray-700">
                            Notre équipe d'experts propose un accompagnement sur mesure pour répondre à vos défis spécifiques.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Service 1 */}
                        <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0 mr-4">
                                <div className="w-12 h-12 bg-eg-primary-light rounded-lg flex items-center justify-center text-eg-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Renforcement des capacités</h3>
                                <p className="text-gray-600">
                                    Formation sur mesure et coaching pour développer les compétences des équipes locales
                                    et favoriser l'autonomie des organisations.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0 mr-4">
                                <div className="w-12 h-12 bg-eg-primary-light rounded-lg flex items-center justify-center text-eg-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Structuration de projets</h3>
                                <p className="text-gray-600">
                                    Conception, planification et suivi de projets complexes, avec une méthodologie rigoureuse
                                    adaptée au contexte local.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0 mr-4">
                                <div className="w-12 h-12 bg-eg-primary-light rounded-lg flex items-center justify-center text-eg-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Outils de gestion</h3>
                                <p className="text-gray-600">
                                    Développement et implémentation d'outils de suivi, d'évaluation et de reporting
                                    pour une prise de décision éclairée.
                                </p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="flex items-start p-6 bg-gray-50 rounded-lg">
                            <div className="flex-shrink-0 mr-4">
                                <div className="w-12 h-12 bg-eg-primary-light rounded-lg flex items-center justify-center text-eg-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation digitale</h3>
                                <p className="text-gray-600">
                                    Intégration de solutions technologiques adaptées pour optimiser les processus
                                    et améliorer l'efficacité opérationnelle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Réalisations clés */}
            <section id="realisations" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="bg-eg-primary-light text-eg-dark px-4 py-2 rounded-full text-sm font-semibold">RÉFÉRENCES</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Nos réalisations clés</h2>
                        <p className="max-w-3xl mx-auto text-gray-700">
                            Quelques projets marquants qui illustrent notre expertise et notre impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Projet 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-eg-primary-light text-eg-dark text-xs font-medium rounded-full mb-4">Santé</span>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Programme Élargi de Vaccination (PEV)</h3>
                                <p className="text-gray-600 mb-4">
                                    Accompagnement du MSHP dans la mise en œuvre du PEV financé par Gavi,
                                    avec renforcement des capacités nationales et locales.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-eg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    2023 - En cours
                                </div>
                            </div>
                        </div>

                        {/* Projet 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-eg-secondary/20 text-eg-secondary text-xs font-medium rounded-full mb-4">Éducation</span>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Projet d'innovation pédagogique</h3>
                                <p className="text-gray-600 mb-4">
                                    Collaboration avec UNICEF pour développer et déployer des approches pédagogiques
                                    innovantes dans les écoles primaires et secondaires.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-eg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    2022 - 2023
                                </div>
                            </div>
                        </div>

                        {/* Projet 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-eg-lime/20 text-eg-dark text-xs font-medium rounded-full mb-4">Industrie</span>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Relance unité industrielle d'huile de palme</h3>
                                <p className="text-gray-600 mb-4">
                                    Accompagnement de Harpie Group dans la relance de la plus grande unité industrielle
                                    de transformation d'huile de palme en Guinée.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-eg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section IA/Approche innovante */}
            <section id="approche" className="py-16 bg-white relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute -left-40 -top-20 w-96 h-96 rounded-full bg-eg-primary-light opacity-20"></div>
                <div className="absolute -right-40 bottom-0 w-80 h-80 rounded-full bg-eg-primary-light opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:flex lg:items-center lg:space-x-12">
                        <div className="lg:w-1/2 mb-10 lg:mb-0">
                            <span className="bg-eg-primary-light text-eg-dark px-4 py-2 rounded-full text-sm font-semibold">INNOVATION</span>
                            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Notre approche IA</h2>
                            <p className="text-gray-700 mb-6">
                                Chez EG Conseil, nous intégrons les technologies d'intelligence artificielle les plus avancées
                                pour améliorer l'efficacité et la qualité de nos services de conseil.
                            </p>
                            <p className="text-gray-700 mb-8">
                                Nos agents LLM (Large Language Models) personnalisés permettent d'analyser rapidement
                                de grands volumes de données, d'automatiser les tâches répétitives et de générer
                                des insights précieux pour la prise de décision.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="h-5 w-5 text-eg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="text-lg font-semibold text-gray-900">Gain de temps significatif</h4>
                                        <p className="text-gray-600">Réduction de 70% du temps consacré à l'analyse documentaire et à la génération de rapports.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="h-5 w-5 text-eg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="text-lg font-semibold text-gray-900">Qualité accrue</h4>
                                        <p className="text-gray-600">Analyses plus précises et recommandations plus pertinentes grâce au traitement avancé des données.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="h-5 w-5 text-eg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="text-lg font-semibold text-gray-900">Adaptation locale</h4>
                                        <p className="text-gray-600">Nos modèles sont formés sur des données spécifiques au contexte ouest-africain pour des résultats plus pertinents.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="aspect-video bg-gradient-to-r from-eg-primary to-eg-accent rounded-xl shadow-xl flex items-center justify-center text-white">
                                <div className="text-center p-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <h3 className="text-2xl font-bold mb-2">Innovation au service du développement</h3>
                                    <p className="text-lg opacity-90">
                                        Combiner intelligence artificielle et expertise humaine pour des solutions durables
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Contact */}
            <section id="contact" className="py-16 bg-eg-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            <h2 className="text-3xl font-bold mb-6">Discutons de votre projet</h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                Contactez-nous dès aujourd'hui pour explorer comment notre expertise peut soutenir vos objectifs.
                                Premier entretien sans engagement.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-eg-secondary mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-eg-lime">Adresse</h4>
                                        <p className="text-gray-300">Quartier Camayenne, Commune de Dixinn, Conakry, Guinée</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-eg-secondary mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-eg-lime">Téléphone</h4>
                                        <p className="text-gray-300">+224 621 XX XX XX</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-eg-secondary mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-eg-lime">Email</h4>
                                        <p className="text-gray-300">contact@eg-conseil.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 bg-white text-gray-900 rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6">Formulaire de contact</h3>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom complet</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eg-primary"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eg-primary"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eg-primary"
                                    >
                                        <option value="">Sélectionner un sujet</option>
                                        <option value="conseil">Conseil stratégique</option>
                                        <option value="projet">Projet spécifique</option>
                                        <option value="partenariat">Partenariat</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eg-primary"
                                        placeholder="Décrivez votre projet ou posez vos questions..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 bg-eg-primary hover:bg-eg-primary-dark text-white font-medium rounded-md shadow transition duration-300"
                                >
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </EGLayout>
    );
}
