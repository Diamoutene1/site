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
const roles = ["Automaticien", "Informaticien Industriel", "Développeur Système Embarqué"];
let index = 0;

function changeText() {
    changesText.textContent = roles[index];
    index = (index + 1) % roles.length; // Passe au mot suivant, retourne au début à la fin de la liste
}

setInterval(changeText, 4000); // Change le texte toutes les 4 secondes
changeText(); // Initialise le texte au chargement
