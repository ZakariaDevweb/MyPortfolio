const containers = document.getElementById("project-containers");

async function getProjects() {
    try {
        const response = await fetch("projects.json");
        if (!response.ok) {
            throw new Error(`error client : ${response.status}`);

        }
        const projects = await response.json();
        projects.forEach(project => {
            const projectHtml = `<div class="project">
                <div class="openModal">
                    <div class="header-project">${project.name}</div>
                    <div class="body-project"><img src="${project.pathimage}"></div>
                </div>
                <a href="${project.githubrepo}">
                    <div class="footer-project">👑 Lien Github 👑</div>
                </a>
            </div>`
            containers.innerHTML += projectHtml


        });

        const lstCard = document.getElementsByClassName("openModal");
        console.log(lstCard)
        Array.from(lstCard).forEach(item => {
            item.addEventListener("click", () => {
                createModalElements();
            })
        })
    } catch (error) {
        console.error(`les projets sont impossible a charger: ${error}`);

    }

};
let modalContainer = "";
let modal = "";
let modalGallery = "";

function createModalElements() {
    const body = document.body;
    modalContainer = document.createElement("div");

    modalContainer.classList.add("modal-container");
    body.appendChild(modalContainer);


    modal = document.createElement("div");
    modal.classList.add("modal");
    modalContainer.appendChild(modal);

    modalTitle = document.createElement("h1");
    modalTitle.classList.add("modal-title");
    modalTitle.innerHTML = "Galerie photo";
    modal.appendChild(modalTitle);

    modalGallery = document.createElement("div");
    modalGallery.classList.add("modal-content", "modal-gallery");
    modal.appendChild(modalGallery);



}


getProjects();

