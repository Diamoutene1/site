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
// Sélection des éléments du DOM
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.innerText = 'Menu';
document.querySelector('nav').appendChild(menuToggle);

const navbar = document.querySelector('.navbar');

// Fonction pour basculer l'affichage du menu
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Fermer le menu si un lien est cliqué
navbar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    }
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
const roles = ["Automaticien / Roboticien", "Informaticien Industriel"];
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

// Change le texte toutes les 4 secondes
setInterval(changeText, 3000);

// Initialisation immédiate
changeText();