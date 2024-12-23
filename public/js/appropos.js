// Animation de défilement pour les paragraphes
const paragraphs = document.querySelectorAll('.container p');

window.addEventListener('scroll', function() {
    paragraphs.forEach((p) => {
        const rect = p.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            p.style.opacity = 1;
            p.style.transform = 'translateY(0)';
            p.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
    });
});
// Animation de transition pour la navigation
document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector(".navbar");
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("menu-toggle");
    toggleButton.innerHTML = "☰";

    // Ajouter le bouton toggle avant la navigation
    const nav = document.querySelector("nav");
    nav.insertBefore(toggleButton, navBar);

    // Ajouter un événement de clic au bouton
    toggleButton.addEventListener("click", () => {
        navBar.classList.toggle("active");
        toggleButton.classList.toggle("open");
    });
});
