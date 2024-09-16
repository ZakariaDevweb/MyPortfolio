
const containerProjects = document.querySelector("#project-containers");

async function fetchProjects() {
    try {
        const response = await fetch("./projects.json");

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const json = await response.json();

        json.forEach(project => {
            const competencesHtml = project.competences.map(competence => `<div>${competence}</div>`).join('');

            const projectHtml =
                `<div class="project">
                <a href="${project.urlrender}">
                    <div class="header-project">${project.name}</div>
                    <div class="body-project"><img src="${project.pathimage}"></div>
                </a>
                <a href="${project.githubrepo}">
                    <div class="competences-project">
                        <span>${competencesHtml}</span>
                    </div>
                    <div class="description-project">${project.description}</div>
                    <div class="footer-project">Lien Github</div>
                </a>
            </div>`

            containerProjects.innerHTML += projectHtml;
        })

    } catch (error) {
        console.error(`Impossible d'obtenir les projets : ${error}`);
    }
}

fetchProjects();