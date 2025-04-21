import React from 'react';
import { Head, Link } from '@inertiajs/react';
import EGLayout from '@/Layouts/EGLayout';

interface DomainCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    color: string;
}

const DomainCard: React.FC<DomainCardProps> = ({ title, description, icon, href, color }) => {
    return (
        <div className="relative group">
            <div className={`absolute -inset-0.5 ${color} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300`}></div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                <div className={`w-14 h-14 ${color} rounded-lg flex items-center justify-center mb-4`}>
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-eg-gray-dark mb-2">{title}</h3>
                <div className="prose text-gray-600 mb-4 flex-grow">
                    <p>{description}</p>
                </div>
                <Link
                    href={href}
                    className="text-eg-primary hover:text-eg-primary-dark font-medium flex items-center mt-2 self-start"
                >
                    En savoir plus
                    <svg className="ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

interface FeatureProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
    return (
        <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-eg-primary text-white">
                    {icon}
                </div>
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-medium text-eg-gray-dark">{title}</h3>
                <p className="mt-1 text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default function Domains() {
    const domains = [
        {
            title: "Santé Globale",
            description: "Nous accompagnons les acteurs de la santé dans le renforcement de leur système de gestion, l'élaboration de stratégies efficaces et la mise en place de programmes innovants. Nos interventions couvrent tant les aspects administratifs que techniques.",
            icon: (
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            href: "/domaines/sante",
            color: "bg-eg-primary",
        },
        {
            title: "Éducation",
            description: "EG Conseil développe des programmes pédagogiques adaptés au contexte local, forme les enseignants aux méthodes modernes et accompagne les établissements dans l'amélioration continue de la qualité de l'enseignement dispensé.",
            icon: (
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            href: "/domaines/education",
            color: "bg-eg-secondary",
        },
        {
            title: "Industrie",
            description: "Notre expertise industrielle se concentre sur l'optimisation des processus de production, la gestion efficace de la chaîne d'approvisionnement et la valorisation des ressources locales pour un développement économique durable.",
            icon: (
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            href: "/domaines/industrie",
            color: "bg-eg-accent",
        },
        {
            title: "RSE",
            description: "Nous aidons les organisations à intégrer les principes de responsabilité sociétale dans leur stratégie globale, avec une attention particulière portée aux questions d'équité, de genre et d'environnement dans le contexte ouest-africain.",
            icon: (
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            href: "/domaines/rse",
            color: "bg-eg-lime",
        },
    ];

    const features = [
        {
            title: "Expertise locale",
            description: "Notre connaissance approfondie des réalités locales nous permet d'adapter nos solutions aux spécificités du contexte ouest-africain.",
            icon: (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            title: "Approche multidisciplinaire",
            description: "Nos équipes combinent diverses expertises pour offrir des solutions complètes et cohérentes qui adressent tous les aspects de votre problématique.",
            icon: (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: "Orientation résultats",
            description: "Nous nous engageons à livrer des résultats tangibles et mesurables qui contribuent directement à la réalisation de vos objectifs.",
            icon: (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            title: "Innovation adaptée",
            description: "Nous proposons des solutions innovantes tout en veillant à leur pertinence et à leur applicabilité dans le contexte local.",
            icon: (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
        },
    ];

    return (
        <EGLayout title="Domaines d'Intervention | EG Conseil">
            {/* Bannière */}
            <section className="bg-eg-dark text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-6">Nos Domaines d'Intervention</h1>
                        <p className="text-xl text-white/90">
                            EG Conseil intervient dans plusieurs secteurs clés du développement économique et social,
                            en apportant une expertise adaptée aux défis spécifiques de chaque domaine.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-eg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                        <div className="md:flex md:items-center md:space-x-8">
                            <div className="md:w-1/3 mb-8 md:mb-0">
                                <img
                                    src="/img/domains-intro.jpg"
                                    alt="Domaines d'intervention"
                                    className="w-full h-auto rounded-lg shadow-md"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://via.placeholder.com/600x400/4CAF50/FFFFFF?text=EG+Conseil+-+Domaines';
                                    }}
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-3xl font-bold text-eg-gray-dark mb-6">Une approche intégrée et adaptée</h2>
                                <p className="text-gray-600 mb-6">
                                    Chez EG Conseil, nous comprenons que les défis auxquels font face les organisations
                                    en Afrique de l'Ouest sont multidimensionnels et interdépendants. C'est pourquoi
                                    notre approche transcende les frontières traditionnelles entre secteurs pour offrir
                                    des solutions intégrées qui abordent les problématiques dans leur globalité.
                                </p>
                                <p className="text-gray-600">
                                    Notre expertise couvre quatre domaines d'intervention principaux, chacun bénéficiant
                                    de méthodologies spécifiques et d'une connaissance approfondie du contexte local.
                                    Que vous opériez dans la santé, l'éducation, l'industrie ou que vous cherchiez à
                                    renforcer votre responsabilité sociétale, nos équipes sont prêtes à vous accompagner
                                    avec des solutions sur mesure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Domaines d'intervention */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">
                            Explorez nos domaines d'expertise
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            Découvrez comment notre expertise dans ces quatre secteurs clés peut vous aider
                            à relever vos défis spécifiques et à atteindre vos objectifs de développement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {domains.map((domain, index) => (
                            <DomainCard
                                key={index}
                                title={domain.title}
                                description={domain.description}
                                icon={domain.icon}
                                href={domain.href}
                                color={domain.color}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Notre approche */}
            <section className="py-16 md:py-24 bg-eg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:space-x-12">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h2 className="text-3xl font-bold text-eg-gray-dark mb-6">
                                Notre approche: excellence et pertinence
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Quelle que soit la nature de votre projet, notre équipe s'engage à offrir un niveau
                                d'excellence constant, en s'appuyant sur quatre piliers fondamentaux qui définissent
                                notre méthodologie d'intervention dans tous les secteurs.
                            </p>
                            <div className="space-y-8">
                                {features.map((feature, index) => (
                                    <Feature
                                        key={index}
                                        title={feature.title}
                                        description={feature.description}
                                        icon={feature.icon}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-eg-primary mb-6">Notre méthode en 4 étapes</h3>
                                <ol className="space-y-6">
                                    <li className="relative pl-10">
                                        <span className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 bg-eg-primary text-white rounded-full font-bold">1</span>
                                        <h4 className="text-lg font-semibold text-eg-gray-dark">Diagnostic approfondi</h4>
                                        <p className="text-gray-600 mt-1">
                                            Nous commençons par une analyse complète de votre contexte, de vos contraintes
                                            et de vos objectifs pour comprendre précisément vos besoins spécifiques.
                                        </p>
                                    </li>
                                    <li className="relative pl-10">
                                        <span className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 bg-eg-primary text-white rounded-full font-bold">2</span>
                                        <h4 className="text-lg font-semibold text-eg-gray-dark">Conception sur mesure</h4>
                                        <p className="text-gray-600 mt-1">
                                            Nous élaborons des solutions personnalisées qui s'intègrent parfaitement
                                            à votre environnement opérationnel et répondent directement aux enjeux identifiés.
                                        </p>
                                    </li>
                                    <li className="relative pl-10">
                                        <span className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 bg-eg-primary text-white rounded-full font-bold">3</span>
                                        <h4 className="text-lg font-semibold text-eg-gray-dark">Mise en œuvre accompagnée</h4>
                                        <p className="text-gray-600 mt-1">
                                            Nous déployons les solutions avec vous, en assurant un transfert de compétences
                                            complet et un soutien constant tout au long du processus.
                                        </p>
                                    </li>
                                    <li className="relative pl-10">
                                        <span className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 bg-eg-primary text-white rounded-full font-bold">4</span>
                                        <h4 className="text-lg font-semibold text-eg-gray-dark">Évaluation et amélioration</h4>
                                        <p className="text-gray-600 mt-1">
                                            Nous mesurons rigoureusement les résultats obtenus et ajustons nos interventions
                                            pour garantir l'atteinte de vos objectifs et l'optimisation continue des solutions.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-eg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="p-8 md:p-12 md:w-2/3">
                                <h3 className="text-2xl font-bold text-eg-gray-dark mb-4">
                                    Prêt à collaborer avec nous ?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Contactez notre équipe pour discuter de votre projet et découvrir comment
                                    notre expertise peut vous aider à relever vos défis spécifiques.
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
                                        Découvrir nos services
                                    </Link>
                                </div>
                            </div>
                            <div className="md:w-1/3 bg-eg-secondary/20 p-8 md:p-12 flex items-center justify-center">
                                <img
                                    src="/img/collaboration.jpg"
                                    alt="Collaboration avec EG Conseil"
                                    className="max-h-48 rounded-lg shadow-md"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://via.placeholder.com/300x200/8BC34A/FFFFFF?text=Collaboration';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </EGLayout>
    );
}