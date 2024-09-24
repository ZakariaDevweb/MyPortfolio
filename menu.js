let onglets = document.getElementById("links");
let hamburger = document.getElementById("hamburger");
let toggle = document.getElementById("nav-toggle");
let isToggled = false;
let navToggled = document.querySelector('nav');
let logoToggled = document.querySelector('.logo-holder');
let mainToggled = document.querySelector('main');
let menuToggled = document.querySelector('.menu');
let linksToggled = document.querySelector('.links');

mainToggled.classList.add('mainNotToggled');


function toggleBurger() {
    toggle.classList.toggle("active");
    isToggled = !isToggled;

    if (onglets.style.display === "flex") {
        onglets.style.display = "none";
    } else {
        onglets.style.display = "flex";
    }
    // si isToggled est sur true
    if (isToggled) {
        navToggled.classList.add('navToggled');
        logoToggled.classList.add('logoToggled');

        mainToggled.classList.add('mainToggled');
        mainToggled.classList.remove('mainNotToggled');

        menuToggled.classList.add('menuToggled');
        linksToggled.classList.add('linksToggled');
    } else {
        navToggled.classList.remove('navToggled');
        logoToggled.classList.remove('logoToggled');

        mainToggled.classList.remove('mainToggled');
        mainToggled.classList.add('mainNotToggled');

        menuToggled.classList.remove('menuToggled');
        linksToggled.classList.remove('linksToggled');
    }
    // alors on ajoute la classe toggled au menu
    // sinon on retire la classe toggled et on met la classe notToggled a la place
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