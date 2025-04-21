/**
 * Gère le défilement fluide vers une ancre spécifique lorsqu'un lien est cliqué.
 *
 * @param e L'événement de clic
 * @param offset Offset en pixels à appliquer (pour tenir compte des headers fixes)
 */
export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, offset: number = 100): void => {
    // Récupérer l'href du lien
    const href = e.currentTarget.getAttribute('href');

    // Vérifier si c'est un lien d'ancrage vers une section de la même page
    if (href && href.startsWith('/#')) {
        e.preventDefault();

        // Extraire l'ID de la section cible
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculer la position de la cible avec l'offset
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            // Scroll fluide vers la cible
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Mettre à jour l'URL avec l'ancre pour référence
            window.history.pushState({}, '', href);
        }
    }
};

/**
 * Fonction pour gérer le défilement automatique vers une ancre lors du chargement de la page
 * si l'URL contient une ancre.
 *
 * @param offset Offset en pixels à appliquer (pour tenir compte des headers fixes)
 */
export const scrollToAnchorOnLoad = (offset: number = 100): void => {
    // Vérifier si l'URL contient une ancre
    if (window.location.hash) {
        // Attendre un court instant pour que la page soit bien chargée
        setTimeout(() => {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
};