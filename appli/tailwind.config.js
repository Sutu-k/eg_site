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
                // Couleurs principales d'EG Conseil
                'eg-primary': '#4CAF50',          // Vert principal
                'eg-secondary': '#8BC34A',        // Vert clair
                'eg-lime': '#CDDC39',             // Vert lime
                'eg-dark': '#2E7D32',             // Vert forêt
                'eg-accent': '#009688',           // Turquoise
                'eg-gray-dark': '#424242',        // Gris foncé
                'eg-gray-light': '#F5F5F5',       // Gris clair

                // Nuances supplémentaires
                'eg-primary-light': '#66BB6A',    // Vert principal plus clair
                'eg-primary-dark': '#388E3C',     // Vert principal plus foncé
                'eg-accent-light': '#26A69A',     // Turquoise clair
                'eg-accent-dark': '#00796B',      // Turquoise foncé
            },
            backgroundImage: {
                'hero-pattern': "url('/img/hero-bg.jpg')",
                'footer-pattern': "linear-gradient(90deg, var(--tw-colors-eg-dark) 0%, var(--tw-colors-eg-primary) 100%)",
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '2rem',
            },
            boxShadow: {
                'eg': '0 10px 25px -5px rgba(76, 175, 80, 0.1), 0 8px 10px -6px rgba(76, 175, 80, 0.1)',
                'eg-lg': '0 20px 25px -5px rgba(76, 175, 80, 0.2), 0 8px 10px -6px rgba(76, 175, 80, 0.2)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-in-out',
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
            },
        },
    },

    plugins: [forms],
};
