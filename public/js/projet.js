// Effet de zoom sur les projets (optimisé avec requestAnimationFrame)
function initZoomEffects() {
    const projects = document.querySelectorAll('.project-item'); // Sélectionne tous les éléments de projet
    if (projects.length === 0) {
        console.error('Aucun projet trouvé dans le DOM.');
    } else {
        projects.forEach(project => {
            // Écoute l'événement "mouseover" pour zoomer sur le projet
            project.addEventListener('mouseover', () => {
                console.log(`Survol sur le projet : ${project.id}`); // Test du survol
                try {
                    requestAnimationFrame(() => {
                        project.style.transform = 'scale(1.05)'; // Applique un agrandissement au survol
                        project.style.transition = 'transform 0.3s ease'; // Ajoute une transition fluide
                    });
                } catch (error) {
                    console.error(`Erreur lors de l'animation de zoom pour le projet ${project.id}: `, error);
                }
            });

            // Écoute l'événement "mouseout" pour restaurer la taille normale du projet
            project.addEventListener('mouseout', () => {
                console.log(`Fin du survol du projet : ${project.id}`); // Test de la fin du survol
                try {
                    requestAnimationFrame(() => {
                        project.style.transform = 'scale(1)'; // Restaure la taille normale du projet
                    });
                } catch (error) {
                    console.error(`Erreur lors de la restauration du zoom pour le projet ${project.id}: `, error);
                }
            });
        });
    }
}

// Gestion de l'affichage des détails des projets après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.details-button'); // Sélectionne tous les boutons "Voir les détails"
    if (buttons.length === 0) {
        console.error('Aucun bouton "Voir les détails" trouvé dans le DOM.');
    } else {
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                console.log(`Bouton cliqué pour le projet : ${this.parentNode.id}`); // Affiche l'ID du projet dont le bouton est cliqué

                const details = this.nextElementSibling; // Récupère le div qui suit immédiatement le bouton
                // Vérifie si les détails sont déjà visibles ou cachés
                try {
                    if (details.style.display === 'none' || details.style.display === '') {
                        details.style.display = 'block'; // Affiche les détails
                        this.textContent = 'Masquer les détails'; // Change le texte du bouton
                        this.setAttribute('aria-expanded', 'true'); // Met à jour l'attribut ARIA pour signifier que les détails sont affichés
                    } else {
                        details.style.display = 'none'; // Masque les détails
                        this.textContent = 'Voir les détails'; // Change le texte du bouton
                        this.setAttribute('aria-expanded', 'false'); // Met à jour l'attribut ARIA pour signifier que les détails sont masqués
                    }
                } catch (error) {
                    console.error(`Erreur lors de la gestion des détails pour le projet ${this.parentNode.id}: `, error);
                }
            });
        });
    }

    // Initialisation des effets de zoom après le chargement des projets
    initZoomEffects();
});

