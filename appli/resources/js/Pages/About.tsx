import React from 'react';
import { Head } from '@inertiajs/react';
import EGLayout from '@/Layouts/EGLayout';

// Composant pour la timeline
interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    isRight?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, isRight = false }) => {
    return (
        <div className={`flex ${isRight ? 'flex-row-reverse' : 'flex-row'} md:contents`}>
            <div className={`col-start-1 col-end-2 mr-10 md:mx-auto relative ${isRight ? 'md:ml-10' : 'md:mr-10'}`}>
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-eg-primary pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-eg-primary shadow"></div>
            </div>
            <div className={`bg-white p-6 rounded-xl shadow-md my-4 md:my-8 ${isRight ? 'text-right md:mr-10' : 'md:ml-10'} w-full md:w-2/5`}>
                <span className="font-bold text-eg-primary">{date}</span>
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

// Composant pour les valeurs
interface ValueCardProps {
    number: string;
    title: string;
    description: string;
    color: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ number, title, description, color }) => {
    return (
        <div className={`p-6 rounded-lg shadow-lg ${color}`}>
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    {number}
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-white/90">{description}</p>
        </div>
    );
};

// Composant pour l'équipe
interface TeamMemberProps {
    name: string;
    role: string;
    imageSrc?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
    return (
        <div className="bg-white rounded-lg shadow-eg overflow-hidden">
            <div className="aspect-square bg-eg-gray-light relative">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=4CAF50&color=fff&size=256`;
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-eg-primary text-5xl font-bold">
                        {name.charAt(0)}
                    </div>
                )}
            </div>
            <div className="p-4 text-center">
                <h3 className="font-bold text-eg-gray-dark">{name}</h3>
                <p className="text-gray-600 text-sm">{role}</p>
            </div>
        </div>
    );
};

export default function About() {
    const timelineItems = [
        {
            date: 'Juillet 2022',
            title: 'Création d\'EG Conseil à Conakry',
            description: 'Vision de proposer des solutions sur mesure dans le conseil en stratégie et gestion, avec une spécialisation dans le contexte africain.'
        },
        {
            date: 'Septembre 2022',
            title: 'Premier grand projet',
            description: 'Accompagnement de la relance de la plus grande unité industrielle de transformation d\'huile de palme en Guinée dans le cadre d\'un projet à impact social.'
        },
        {
            date: 'Juillet 2022',
            title: 'Début dans l\'éducation',
            description: 'Début d\'une collaboration significative dans le domaine de l\'éducation, avec un focus sur l\'innovation pédagogique pour les niveaux primaire, collège et lycée.'
        },
        {
            date: 'Janvier 2023',
            title: 'Engagement dans la santé publique',
            description: 'Accompagnement du Service Genre et Équité du MSHP pour renforcer la gestion, la planification et la coordination.'
        },
        {
            date: 'Janvier 2024',
            title: 'Soutien au PEV',
            description: 'Intensification de l\'implication dans le secteur de la santé avec l\'accompagnement du Programme Élargi de Vaccination (PEV) financé par Gavi.'
        }
    ];

    const values = [
        {
            number: '01',
            title: 'Transparence',
            description: 'Nous opérons avec une honnêteté et une ouverture qui renforcent la confiance de nos partenaires et clients.',
            color: 'bg-eg-primary'
        },
        {
            number: '02',
            title: 'Innovation',
            description: 'Nous valorisons et cultivons la pensée innovante pour rester à l\'avant-garde des solutions stratégiques.',
            color: 'bg-eg-secondary'
        },
        {
            number: '03',
            title: 'Durabilité',
            description: 'Nous envisageons des stratégies qui servent les intérêts actuels sans compromettre ceux des générations futures.',
            color: 'bg-eg-lime'
        },
        {
            number: '04',
            title: 'Efficience',
            description: 'Nous visons une optimisation constante pour offrir la meilleure valeur à nos clients.',
            color: 'bg-eg-accent'
        }
    ];

    const teamMembers = [
        {
            name: 'Directeur Général',
            role: 'Direction & Stratégie'
        },
        {
            name: 'Assistante administrative',
            role: 'Administration & Finance'
        },
        {
            name: 'Responsable des projets',
            role: 'Gestion de projets'
        },
        {
            name: 'Informaticienne',
            role: 'Développement & Support'
        },
        {
            name: 'Data Scientist',
            role: 'Analyse de données'
        },
        {
            name: 'Personnel polyvalent',
            role: 'Support opérationnel'
        }
    ];

    return (
        <EGLayout title="À Propos | EG Conseil">
            {/* Bannière */}
            <section className="bg-eg-dark text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-6">À Propos d'EG Conseil</h1>
                        <p className="text-xl text-white/90">
                            Découvrez notre histoire, notre mission et les valeurs qui guident
                            chaque action que nous entreprenons.
                        </p>
                    </div>
                </div>
            </section>

            {/* Notre Mission */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-16">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <div className="relative">
                                <div className="aspect-video bg-eg-primary/10 rounded-lg overflow-hidden">
                                    <img
                                        src="/img/mission.jpg"
                                        alt="Notre mission"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=Notre+Mission';
                                        }}
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-eg-primary text-white p-6 rounded-lg shadow-xl hidden md:block">
                                    <span className="text-3xl font-bold">2022</span>
                                    <p className="text-sm">Année de fondation</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-eg-gray-dark mb-6">Notre Mission et Notre Vision</h2>
                            <p className="text-gray-600 mb-6">
                                La mission d'EG Conseil est de développer et d'implémenter des
                                solutions sur mesure qui s'inscrivent parfaitement dans le contexte
                                local de l'Afrique de l'Ouest, particulièrement en Guinée.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Notre ambition est de créer un impact durable sur les communautés
                                que nous servons, en alliant connaissances locales et meilleures
                                pratiques internationales. Cette combinaison nous donne un
                                positionnement unique pour relever les défis complexes auxquels sont
                                confrontés nos clients.
                            </p>
                            <div className="bg-eg-gray-light p-6 rounded-lg border-l-4 border-eg-primary">
                                <p className="italic text-eg-gray-dark">
                                    "EG Conseil est défini non seulement par l'expertise et la qualité de ses services
                                    mais également par un ensemble de valeurs fondamentales et un
                                    engagement ferme envers des principes qui guident chaque décision et chaque
                                    action que nous entreprenons."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre Histoire - Timeline */}
            <section className="py-16 md:py-24 bg-eg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">Notre Histoire</h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            L'histoire d'Efficience Globale (EG Conseil) est marquée par une croissance rapide et une
                            diversification stratégique dans plusieurs secteurs clés. Voici les moments charnières qui
                            façonnent notre parcours.
                        </p>
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
                        {timelineItems.map((item, index) => (
                            <TimelineItem
                                key={index}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                                isRight={index % 2 === 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Nos Valeurs */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">Nos Convictions</h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            Notre but est de générer un impact positif et durable, en mettant en place
                            des solutions qui favorisent la résilience et la prospérité des communautés sur le
                            long terme.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <ValueCard
                                key={index}
                                number={value.number}
                                title={value.title}
                                description={value.description}
                                color={value.color}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Notre Équipe */}
            <section className="py-16 md:py-24 bg-eg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">Notre Équipe</h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            Notre équipe diversifiée et hautement qualifiée travaille en collaboration
                            pour offrir des solutions adaptées aux besoins spécifiques de nos clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMember
                                key={index}
                                name={member.name}
                                role={member.role}
                            />
                        ))}
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-eg-gray-dark mb-6">Niveau Régional</h3>
                        <p className="text-gray-600 mb-6">
                            Notre présence s'étend à travers les 8 régions administratives de Guinée grâce à
                            notre réseau de consultants expérimentés, nous permettant d'offrir des services adaptés
                            aux réalités locales.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="w-20 h-20 bg-eg-primary/10 rounded-full flex items-center justify-center text-eg-primary">
                                    <span className="font-bold">Région {index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </EGLayout>
    );
}