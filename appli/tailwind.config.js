import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Couleurs principales d'EG Conseil selon l'ordre d'importance
                'eg-primary': '#455F51',         // Vert foncé (principale)
                'eg-secondary': '#549E39',       // Vert moyen
                'eg-tertiary': '#8AB833',        // Vert clair
                'eg-accent': '#C0CF3A',          // Vert lime
                'eg-highlight': '#029676',       // Turquoise

                // Variations des couleurs principales
                'eg-primary-light': '#5A7668',   // Version plus claire du vert foncé
                'eg-primary-dark': '#364A40',    // Version plus foncée du vert foncé
                'eg-secondary-light': '#6AB84C', // Version plus claire du vert moyen
                'eg-secondary-dark': '#458730',  // Version plus foncée du vert moyen

                // Couleurs fonctionnelles
                'eg-gray-dark': '#424242',       // Gris foncé
                'eg-gray-light': '#F5F5F5',      // Gris clair
            },
            backgroundImage: {
                'hero-pattern': "url('/img/hero-bg.jpg')",
                'footer-pattern': "linear-gradient(90deg, var(--tw-colors-eg-primary) 0%, var(--tw-colors-eg-secondary) 100%)",
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '2rem',
            },
            boxShadow: {
                'eg': '0 10px 25px -5px rgba(69, 95, 81, 0.1), 0 8px 10px -6px rgba(69, 95, 81, 0.1)',
                'eg-lg': '0 20px 25px -5px rgba(69, 95, 81, 0.2), 0 8px 10px -6px rgba(69, 95, 81, 0.2)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-in-out',
                'subtle-zoom': 'subtleZoom 20s ease-in-out infinite alternate',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'fade-in-up-delay': 'fadeInUp 1s 0.3s ease-out forwards',
                'float': 'float 6s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                subtleZoom: {
                    '0%': { transform: 'scale(1.02)' },
                    '100%': { transform: 'scale(1.08)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
        },
    },

    plugins: [forms],
};
