import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import EGLayout from '@/Layouts/EGLayout';

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Dans un cas réel, cette fonction enverrait le formulaire au backend
        alert('Formulaire envoyé avec succès (simulation)');
        reset();
    };

    return (
        <EGLayout title="Contact | EG Conseil">
            {/* Bannière */}
            <section className="bg-eg-dark text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
                        <p className="text-xl text-white/90">
                            Notre équipe est à votre disposition pour répondre à vos questions
                            et vous accompagner dans vos projets.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section principale */}
            <section className="py-16 bg-eg-gray-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            {/* Informations de contact */}
                            <div className="bg-eg-primary text-white p-8 md:p-12 md:w-2/5">
                                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium">Adresse</h3>
                                            <p className="mt-1 text-white/80">
                                                Conakry, Guinée<br />
                                                Afrique de l'Ouest
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium">Téléphone</h3>
                                            <p className="mt-1 text-white/80">+224 XX XX XX XX</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium">Email</h3>
                                            <p className="mt-1 text-white/80">contact@eg-conseil.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium">Horaires</h3>
                                            <p className="mt-1 text-white/80">
                                                Lundi - Vendredi: 8h00 - 17h00<br />
                                                Samedi: 9h00 - 13h00<br />
                                                Dimanche: Fermé
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h3 className="text-lg font-medium mb-4">Suivez-nous</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a href="#" className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Formulaire de contact */}
                            <div className="p-8 md:p-12 md:w-3/5">
                                <h2 className="text-2xl font-bold text-eg-gray-dark mb-6">Envoyez-nous un message</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Nom complet <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-eg-primary focus:border-eg-primary"
                                                placeholder="Votre nom"
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                required
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-eg-primary focus:border-eg-primary"
                                                placeholder="Votre email"
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                required
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Téléphone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-eg-primary focus:border-eg-primary"
                                                placeholder="Votre numéro de téléphone"
                                                value={data.phone}
                                                onChange={e => setData('phone', e.target.value)}
                                            />
                                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                                Entreprise / Organisation
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-eg-primary focus:border-eg-primary"
                                                placeholder="Votre entreprise"
                                                value={data.company}
                                                onChange={e => setData('company', e.target.value)}
                                            />
                                            {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Sujet <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-eg-primary focus:border-eg-primary"
                                            placeholder="Le sujet de votre message"
                                            value={data.subject}
                                            onChange={e => setData('subject', e.target.value)}
                                            required
                                        />
                                        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-eg-primary focus:border-eg-primary"
                                            placeholder="Votre message"
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            required
                                        ></textarea>
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-eg-primary hover:bg-eg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eg-primary disabled:opacity-50"
                                            disabled={processing}
                                        >
                                            {processing ? 'Envoi en cours...' : 'Envoyer le message'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carte */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-eg-gray-dark mb-4">Notre localisation</h2>
                        <p className="max-w-3xl mx-auto text-gray-600">
                            Rendez-nous visite à notre siège situé au cœur de Conakry, Guinée.
                        </p>
                    </div>

                    <div className="bg-eg-gray-light p-2 rounded-lg shadow-md">
                        <div className="aspect-[16/9] bg-eg-gray-light rounded-lg overflow-hidden">
                            {/* Dans un cas réel, intégration Google Maps ou OpenStreetMap */}
                            <div className="w-full h-full flex items-center justify-center text-eg-gray-dark bg-gray-200">
                                <p className="text-center">
                                    Carte interactive à intégrer<br/>
                                    (Google Maps ou OpenStreetMap)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </EGLayout>
    );
}