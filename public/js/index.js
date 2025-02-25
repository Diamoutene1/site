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
const changesText = document.querySelector('.changes-text');
const roles = ["Automaticien", "Électrotechnicien"];
let index = 0;

function changeText() {
    // Diminue l'opacité pour créer un effet de sortie
    changesText.style.opacity = 0;

    // Change le texte après une brève pause
    setTimeout(() => {
        changesText.textContent = roles[index];
        index = (index + 1) % roles.length; // Boucle à travers les rôles
        changesText.style.opacity = 1; // Restaure l'opacité pour créer un effet d'entrée
    }, 500); // Pause pour l'effet de disparition
}

// Change le texte toutes les 3 secondes
setInterval(changeText, 3000);

// Initialisation immédiate
changeText();