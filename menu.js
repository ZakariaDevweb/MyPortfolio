let onglets = document.getElementById("links");
let hamburger = document.getElementById("hamburger");
let toggle = document.getElementById("nav-toggle");
let isToggled = false;

function toggleBurger() {
    toggle.classList.toggle("active");
    isToggled = !isToggled;

    if (onglets.style.display === "flex") {
        onglets.style.display = "none";
    } else {
        onglets.style.display = "flex";
    }
}

function adjustTabs() {
    // version pc
    if (window.innerWidth > 1024) {
        console.log(window.innerWidth);
        onglets.style.display = "flex";
    }
    // version tablette
    if (window.innerWidth < 1023 && window.innerWidth > 729 && !isToggled) {
        console.log(window.innerWidth);
        onglets.style.display = "none";
    }

    // version mobile
    if (window.innerWidth > 0 && window.innerWidth < 728 && !isToggled) {
        console.log(window.innerWidth);
        onglets.style.display = "none";
    }
}

window.addEventListener('load', adjustTabs);

window.addEventListener('resize', adjustTabs);

toggle.addEventListener('click', toggleBurger);