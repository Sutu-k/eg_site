import React, { useState, ReactNode } from 'react';
import { Link, Head } from '@inertiajs/react';

interface EGLayoutProps {
    title: string;
    children: ReactNode;
}

const EGLayout: React.FC<EGLayoutProps> = ({ title, children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const menuItems = [
        { text: 'Accueil', href: '/' },
        { text: 'À Propos', href: '/a-propos' },
        { text: 'Domaines d\'Intervention', href: '/domaines' },
        { text: 'Services', href: '/services' },
        { text: 'Réalisations', href: '/realisations' },
        { text: 'Actualités', href: '/actualites' },
        { text: 'Contact', href: '/contact' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Head title={title} />

            {/* En-tête */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/">
                                <span className="flex items-center">
                                    <span className="text-eg-primary text-3xl font-bold">EG</span>
                                    <span className="ml-2 text-eg-dark text-xl">Conseil</span>
                                </span>
                            </Link>
                        </div>

                        {/* Menu de navigation - Desktop */}
                        <nav className="hidden md:flex space-x-6">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-eg-gray-dark hover:text-eg-primary transition-colors duration-200 font-medium"
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </nav>

                        {/* Bouton devis */}
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-eg-primary hover:bg-eg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eg-primary"
                            >
                                Demander un devis
                            </Link>
                        </div>

                        {/* Bouton menu mobile */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="p-2 rounded-md inline-flex items-center justify-center text-eg-gray-dark hover:text-eg-primary hover:bg-eg-gray-light focus:outline-none"
                                onClick={toggleMobileMenu}
                            >
                                <span className="sr-only">Ouvrir le menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu mobile */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-eg-gray-dark hover:text-eg-primary hover:bg-eg-gray-light"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.text}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="block w-full text-center mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-eg-primary hover:bg-eg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eg-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Demander un devis
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Contenu principal */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Pied de page */}
            <footer className="bg-eg-dark text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo et description */}
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center">
                                <span className="text-white text-3xl font-bold">EG</span>
                                <span className="ml-2 text-eg-secondary text-xl">Conseil</span>
                            </div>
                            <p className="mt-4 text-sm text-gray-300">
                                EG Conseil, fondée le 27 juillet 2022 à Conakry, est une société de
                                conseil en stratégie et gestion, qui se distingue par son approche
                                innovante et sa profonde connaissance des dynamiques locales et
                                régionales de l'Afrique de l'Ouest.
                            </p>
                        </div>

                        {/* Liens rapides */}
                        <div>
                            <h3 className="text-sm font-semibold text-eg-secondary uppercase tracking-wider">
                                Navigation
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-gray-300 hover:text-white"
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Domaines d'intervention */}
                        <div>
                            <h3 className="text-sm font-semibold text-eg-secondary uppercase tracking-wider">
                                Domaines d'intervention
                            </h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link href="/domaines/sante" className="text-sm text-gray-300 hover:text-white">Santé Globale</Link></li>
                                <li><Link href="/domaines/education" className="text-sm text-gray-300 hover:text-white">Éducation</Link></li>
                                <li><Link href="/domaines/industrie" className="text-sm text-gray-300 hover:text-white">Industrie</Link></li>
                                <li><Link href="/domaines/rse" className="text-sm text-gray-300 hover:text-white">RSE</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-sm font-semibold text-eg-secondary uppercase tracking-wider">
                                Contact
                            </h3>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-eg-secondary mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-2 text-sm text-gray-300">Conakry, Guinée</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-eg-secondary mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span className="ml-2 text-sm text-gray-300">contact@eg-conseil.com</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-eg-secondary mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="ml-2 text-sm text-gray-300">+224 XX XX XX XX</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Séparateur */}
                    <div className="mt-12 border-t border-eg-primary-dark pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-sm text-gray-300">
                                &copy; {new Date().getFullYear()} EG Conseil. Tous droits réservés.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                {/* Réseaux sociaux */}
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EGLayout;