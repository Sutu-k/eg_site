import React from 'react';
import { Link, Head } from '@inertiajs/react';
import EGLayout from '@/Layouts/EGLayout';

// Types pour les composants
interface DomainCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
    href: string;
}

interface StatCardProps {
    value: string;
    label: string;
    icon: React.ReactNode;
}

interface TestimonialCardProps {
    content: string;
    author: string;
    role: string;
    company: string;
}

// Composant pour les cartes de domaines d'intervention
const DomainCard: React.FC<DomainCardProps> = ({ title, icon, description, href }) => (
    <div className="bg-white rounded-lg shadow-eg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-eg-lg">
        <div className="p-6">
            <div className="w-12 h-12 bg-eg-primary rounded-full flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-eg-gray-dark mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link
                href={href}
                className="text-eg-primary hover:text-eg-primary-dark font-medium flex items-center"
            >
                En savoir plus
                <svg className="ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>
    </div>
);

// Composant pour les statistiques
const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
    <div className="bg-white rounded-lg shadow-eg p-6 text-center">
        <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-eg-secondary/20 rounded-full flex items-center justify-center text-eg-primary">
                {icon}
            </div>
        </div>
        <div className="text-3xl font-bold text-eg-primary mb-2">{value}</div>
        <div className="text-gray-600">{label}</div>
    </div>
);

// Composant pour les témoignages
const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, author, role, company }) => (
    <div className="bg-white rounded-lg shadow-eg p-6">
        <div className="mb-4">
            <svg className="w-8 h-8 text-eg-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
        </div>
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="flex items-center">
            <div className="w-10 h-10 bg-eg-gray-light rounded-full flex items-center justify-center text-eg-primary font-bold">
                {author.charAt(0)}
            </div>
            <div className="ml-3">
                <div className="font-semibold text-eg-gray-dark">{author}</div>
                <div className="text-sm text-gray-500">{role}, {company}</div>
            </div>
        </div>
    </div>
);

export default function Home() {
    return (
        <EGLayout title="Accueil | EG Conseil">
            {/* Section Hero / Bannière */}
            <section className="relative bg-eg-dark overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-eg-dark/80 to-eg-primary/50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                            Solutions de conseil stratégique pour l'Afrique de l'Ouest
                        </h1>
                        <p className="text-xl text-white/90 mb-8 animate-slide-up">
                            EG Conseil développe des solutions sur mesure adaptées au contexte local,
                            en combinant connaissances locales et meilleures pratiques internationales.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-eg-primary hover:bg-eg-primary-dark text-white font-medium rounded-md shadow-lg transition duration-300 text-center"
                            >
                                Nous contacter
                            </Link>
                            <Link
                                href="/services"
                                className="px-6 py-3 bg-white hover:bg-eg-gray-light text-eg-primary font-medium rounded-md shadow-lg transition duration-300 text-center"
                            >
                                Nos services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Présentation */}
            <section className="py-16 md:py-24 bg-eg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold text-eg-gray-dark mb-6">
                                Qui sommes-nous ?
                            </h2>
                            <p className="text-gray-600 mb-6">
                                EG Conseil, fondée le 27 juillet 2022 à Conakry, est une société de
                                conseil en stratégie et gestion, qui se distingue par son approche
                                innovante et sa profonde connaissance des dynamiques locales et
                                régionales de l'Afrique de l'Ouest.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Notre mission est de développer et d'implémenter des
                                solutions sur mesure qui s'inscrivent parfaitement dans le contexte
                                local de l'Afrique de l'Ouest, particulièrement en Guinée.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-eg-primary/20 flex items-center justify-center text-eg-primary">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-eg-dark">Expertise locale</h3>
                                    <p className="text-sm text-gray-600">Connaissance approfondie du contexte local</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-12 h-12 rounded-full bg-eg-secondary/20 flex items-center justify-center text-eg-secondary">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-eg-dark">Solutions innovantes</h3>
                                    <p className="text-sm text-gray-600">Approches adaptées aux réalités du terrain</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-12 h-12 rounded-full bg-eg-accent/20 flex items-center justify-center text-eg-accent">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-eg-dark">Efficacité prouvée</h3>
                                    <p className="text-sm text-gray-600">Résultats mesurables et impacts durables</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src="/img/team-meeting.jpg"
                                    alt="L'équipe EG Conseil"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://via.placeholder.com/500x400/4CAF50/FFFFFF?text=EG+Conseil';
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-eg-dark/80 to-transparent p-6">
                                    <span className="text-white font-semibold text-xl">Notre équipe d'experts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Domaines d'intervention */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">
                            Nos domaines d'intervention
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            EG Conseil intervient dans différents secteurs clés avec une approche
                            adaptée aux spécificités locales et aux besoins de nos clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <DomainCard
                            title="Santé Globale"
                            icon={
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            }
                            description="Solutions innovantes aux défis de la santé publique, accessibilité et efficacité des services de santé."
                            href="/domaines/sante"
                        />
                        <DomainCard
                            title="Éducation"
                            icon={
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            }
                            description="Stratégies visant à révolutionner les méthodes pédagogiques et à améliorer l'expérience d'apprentissage."
                            href="/domaines/education"
                        />
                        <DomainCard
                            title="Industrie"
                            icon={
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            }
                            description="Solutions pour stimuler la croissance industrielle, transformation des ressources locales et optimisation des chaînes d'approvisionnement."
                            href="/domaines/industrie"
                        />
                        <DomainCard
                            title="RSE"
                            icon={
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            description="Accompagnement des organisations publiques et privées dans l'intégration de l'équité, du genre et des enjeux environnementaux."
                            href="/domaines/rse"
                        />
                    </div>
                </div>
            </section>

            {/* Section Chiffres clés */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-eg-dark to-eg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Nos réalisations en chiffres
                        </h2>
                        <p className="max-w-3xl mx-auto opacity-90">
                            Des résultats concrets et mesurables qui témoignent de notre expertise et de notre engagement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <StatCard
                            value="15+"
                            label="Projets réalisés"
                            icon={
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            }
                        />
                        <StatCard
                            value="8"
                            label="Régions couvertes"
                            icon={
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        />
                        <StatCard
                            value="20+"
                            label="Professionnels mobilisés"
                            icon={
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            }
                        />
                        <StatCard
                            value="4"
                            label="Secteurs d'intervention"
                            icon={
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Section Témoignages */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">
                            Ce que disent nos clients
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            Des partenaires satisfaits témoignent de notre professionnalisme et de l'efficacité de nos interventions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard
                            content="L'approche innovante d'EG Conseil a permis d'améliorer significativement l'efficacité administrative de notre organisation. Leur connaissance du contexte local a été déterminante."
                            author="Amadou Diallo"
                            role="Directeur Général"
                            company="Organisation Nationale de Santé"
                        />
                        <TestimonialCard
                            content="Nous avons été impressionnés par la capacité d'EG Conseil à comprendre nos besoins spécifiques et à proposer des solutions adaptées qui ont révolutionné notre système éducatif."
                            author="Marie Camara"
                            role="Directrice"
                            company="Institut de Formation Professionnelle"
                        />
                        <TestimonialCard
                            content="Grâce à EG Conseil, notre projet agro-industriel a pu bénéficier d'une structuration optimale et d'un accompagnement rigoureux, permettant d'atteindre nos objectifs dans les délais impartis."
                            author="Jean Soumah"
                            role="Responsable de Projet"
                            company="Agro-Business International"
                        />
                    </div>
                </div>
            </section>

            {/* Section CTA (Call to Action) */}
            <section className="py-16 bg-eg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-2/3 p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-eg-gray-dark mb-4">
                                    Prêt à transformer votre organisation ?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir
                                    comment notre expertise peut vous aider à atteindre vos objectifs.
                                </p>
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                    <Link
                                        href="/contact"
                                        className="px-6 py-3 bg-eg-primary hover:bg-eg-primary-dark text-white font-medium rounded-md shadow transition duration-300 text-center"
                                    >
                                        Nous contacter
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="px-6 py-3 bg-eg-gray-light hover:bg-gray-200 text-eg-gray-dark font-medium rounded-md shadow transition duration-300 text-center"
                                    >
                                        En savoir plus
                                    </Link>
                                </div>
                            </div>
                            <div className="md:w-1/3 bg-eg-secondary/20 p-8 md:p-12 flex flex-col justify-center">
                                <div className="text-eg-primary text-center">
                                    <svg className="w-16 h-16 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <h4 className="text-xl font-semibold mb-2">Newsletter</h4>
                                    <p className="text-gray-600 mb-4">
                                        Abonnez-vous pour recevoir nos actualités et conseils
                                    </p>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            placeholder="Votre email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:ring-eg-primary focus:border-eg-primary"
                                        />
                                        <button className="w-full px-4 py-2 bg-eg-primary hover:bg-eg-primary-dark text-white font-medium rounded-md transition duration-300">
                                            S'abonner
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </EGLayout>
    );
}