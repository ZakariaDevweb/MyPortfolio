const containers = document.getElementById("project-containers");

async function getProjects() {
    try {
        const response = await fetch("projects.json");
        if (!response.ok) {
            throw new Error(`error client : ${response.status}`);

        }
        const projects = await response.json();
        projects.forEach(project => {
            let competenceshtml = project.competences.map(competence => `<div>${competence}</div>`).join("")
            const projectHtml = `<div class=" project">
                <a href="${project.urlrender}">
                    <div class="header-project">${project.name}</div>
                    <div class="body-project"><img src="${project.pathimage}"></div>
                </a>
                <a href="${project.githubrepo}">
                    <div class="footer-project">👑 Lien Github 👑</div>
                </a>
                 <a "${project.description}">
                 <div class="description-project">${project.description}</div>
                 <div class="competences-project">${competenceshtml}</div>
                </a>
            </div>`
            containers.innerHTML += projectHtml


        });

     
    } catch (error) {
        console.error(`les projets sont impossible a charger: ${error}`);

    }

};

getProjects();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_42hzjhn', 'template_5agjrio', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

