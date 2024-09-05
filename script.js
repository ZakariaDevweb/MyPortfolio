const containers = document.getElementById("project-containers");

async function getProjects() {
    try {
        const response = await fetch("projects.json");
        if (!response.ok) {
            throw new Error(`error client : ${response.status}`);

        }
        const projects = await response.json();
        projects.forEach(project => {
            const projectHtml = `<div class=" project">
                <a href="${project.urlrender}">
                    <div class="header-project">${project.name}</div>
                    <div class="body-project"><img src="${project.pathimage}"></div>
                </a>
                <a href="${project.githubrepo}">
                    <div class="footer-project">👑 Lien Github 👑</div>
                </a>
            </div>`
            containers.innerHTML += projectHtml


        });

     
    } catch (error) {
        console.error(`les projets sont impossible a charger: ${error}`);

    }

};

getProjects();

