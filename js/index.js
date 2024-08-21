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
