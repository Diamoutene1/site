
// Fonction pour insérer les projets dans le DOM
function insertProjects() {
    if (!Array.isArray(projectss) || projectss.length === 0) {
        //console.error('Aucun projet dans le tableau projectss.');
        return;
    }

    projectss.forEach((project, index) => {
        try {
            const section = document.getElementById(`${project.section}-projects`); // Récupère la section du projet
            if (!section) {
               // console.error(`La section ${project.section}-projects n'existe pas dans le DOM.`);
                return;
            }

            // Création d'un élément div pour chaque projet
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.style.opacity = 0; // Commence avec une opacité de 0 pour l'animation
            projectItem.id = `project-${index}`; // Assigne un ID unique pour chaque projet

            // Log pour vérifier l'ajout du projet
           // console.log(`Ajout du projet : ${project.title}, Section : ${project.section}`);

            // Création d'un titre pour chaque projet
            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = project.title; // Insère le titre du projet
            projectItem.appendChild(projectTitle);

            // Création du bouton "Voir les détails"
            const detailsButton = document.createElement('button');
            detailsButton.classList.add('details-button');// details-button est une classe css que j'attribue a mon element html cree(button)
            detailsButton.textContent = 'Voir les détails';
            detailsButton.setAttribute('aria-expanded', 'false');
            projectItem.appendChild(detailsButton);

            // Création du conteneur pour les détails du projet
            const projectDetails = document.createElement('div');
            projectDetails.classList.add('project-details');// project-details est une classe css  cree que j'attribue a l'element html cree(div)
            projectDetails.style.display = 'none'; // Masque initialement les détails
            projectItem.appendChild(projectDetails);

            // Ajout de la description et des technologies utilisées
            const description = document.createElement('p');
            description.innerHTML = `<strong>Description :</strong> ${project.description}`;
            projectDetails.appendChild(description);

            const technologies = document.createElement('p');
            technologies.innerHTML = `<strong>Technologies utilisées :</strong> ${project.technologies}`;
            projectDetails.appendChild(technologies);

            // Ajout des vidéos
            if (project.video) {
                const videoWrapper = document.createElement('div');
                videoWrapper.classList.add('video-wrapper');
                if (Array.isArray(project.video)) {
                    project.video.forEach(videoSrc => {
                        const video = document.createElement('video');
                        video.setAttribute('controls', '');
                        const source = document.createElement('source');
                        source.setAttribute('src', videoSrc);
                        source.setAttribute('type', 'video/mp4');
                        video.appendChild(source);
                        videoWrapper.appendChild(video);
                    });
                } else {
                    const video = document.createElement('video');
                    video.setAttribute('controls', '');
                    const source = document.createElement('source');
                    source.setAttribute('src', project.video);
                    source.setAttribute('type', 'video/mp4');
                    video.appendChild(source);
                    videoWrapper.appendChild(video);
                }
                projectDetails.appendChild(videoWrapper);
            }

            // Ajout des images
                    // Ajout des images (dans un seul image-wrapper pour tout le projet)
            if (project.image && Array.isArray(project.image)) {
                const imageWrapper = document.createElement('div');
                imageWrapper.classList.add('image-wrapper');
                
                project.image.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.setAttribute('src', imgSrc);
                    img.setAttribute('alt', project.title);
                    imageWrapper.appendChild(img);
                });

                projectDetails.appendChild(imageWrapper);
            }

            // Ajout des détails supplémentaires
            if (project.details) {
                const ul = document.createElement('ul');
                project.details.forEach(detail => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${detail.title} :</strong> ${detail.description}`;
                    ul.appendChild(li);

                    // Vérifiez s'il y a des images ou vidéos à afficher
                    if (detail.image) {
                        const imageWrapper = document.createElement('div');
                        imageWrapper.classList.add('image-wrapper');
                    
                        if (Array.isArray(detail.image)) {
                            detail.image.forEach(imgSrc => {
                                const img = document.createElement('img');
                                img.setAttribute('src', imgSrc);
                                img.setAttribute('alt', detail.title);
                                imageWrapper.appendChild(img);
                            });
                        } else {
                            const img = document.createElement('img');
                            img.setAttribute('src', detail.image);
                            img.setAttribute('alt', detail.title);
                            imageWrapper.appendChild(img);
                        }
                    
                        li.appendChild(imageWrapper);
                    }
                    

                    if (detail.video) {
                        const videoWrapper = document.createElement('div');
                        videoWrapper.classList.add('video-wrapper');
                        const video = document.createElement('video');
                        video.setAttribute('controls', '');
                        const source = document.createElement('source');
                        source.setAttribute('src', detail.video);
                        source.setAttribute('type', 'video/mp4');
                        video.appendChild(source);
                        videoWrapper.appendChild(video);
                        li.appendChild(videoWrapper);
                    }
                });
                projectDetails.appendChild(ul);
            }

            // Ajout d'un lien vers le projet en ligne
            if (project.link) {
                const projectLink = document.createElement('p');
                projectLink.innerHTML = `<strong>Voir le projet en ligne :</strong> <a href="${project.link}" target="_blank">${project.title}</a>`;
                projectDetails.appendChild(projectLink);
            }

            // Ajout d'un lien ou bouton pour le fichier PDF
            if (project.pdf) {
                const pdfLink = document.createElement('p');
                pdfLink.innerHTML = `<strong>Documentation PDF :</strong> <a href="${project.pdf}" target="_blank">Télécharger ou consulter</a>`;
                projectDetails.appendChild(pdfLink);
            }

            // Ajout du projet à la section correspondante
            section.appendChild(projectItem);

            // Animation d'apparition des projets au chargement
            setTimeout(() => {
                projectItem.style.opacity = 1; // Modifie l'opacité pour faire apparaître le projet
                projectItem.style.transition = 'opacity 0.6s ease'; // Ajoute une transition d'opacité
            }, index * 200); // Décale l'animation pour chaque projet

           // console.log(`Projet ajouté : ${project.title}, ID du projet : ${projectItem.id}`);
        } catch (error) {
           // console.error(`Erreur lors de l'insertion du projet ${project.title}: `, error);
        }
    });
}

// Appel de la fonction pour insérer les projets au chargement de la page
insertProjects();
