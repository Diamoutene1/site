// Animation d'entrée du texte et des images pour la page d'accueil
window.addEventListener('load', function() {
    const textElements = document.querySelectorAll('.text h1, .text h2, .text p, .btn, .cercle img');
    textElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 200); // Échelonnement des animations
    });
});

// Effet de rotation sur le bouton de téléchargement du CV
const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', () => {
    btn.style.transform = 'rotate(5deg)';
    btn.style.transition = 'transform 0.2s';
});

btn.addEventListener('mouseout', () => {
    btn.style.transform = 'rotate(0deg)';
});

// Sélectionne l'élément HTML qui contiendra le texte animé
const changesText = document.querySelector('.changes-text');

// Liste des rôles à afficher dans l'animation
const roles = ["Automaticien", "Informaticien Industriel", "Développeur Embarqué"];

// Initialise un index pour parcourir les rôles
let index = 0;

/**
 * Fonction pour changer le texte affiché
 * - Ajoute une animation de fondu (opacity) pour une transition fluide
 * - Change le texte après une brève pause
 */
function changeText() {
    // Diminue l'opacité à 0 pour créer un effet de disparition
    changesText.style.opacity = 0;

    // Change le texte après 500 ms (le temps que l'effet de disparition soit visible)
    setTimeout(() => {
        changesText.textContent = roles[index]; // Modifie le contenu du texte avec le rôle actuel
        changesText.style.opacity = 1; // Rétablit l'opacité à 1 pour réapparaître
        index = (index + 1) % roles.length; // Passe au rôle suivant (retourne au début à la fin de la liste)
    }, 500);
}

// Met en place un intervalle pour appeler la fonction `changeText` toutes les  secondes
setInterval(changeText, 3000);

// Appelle immédiatement `changeText` pour afficher le premier rôle au chargement de la page
changeText();
