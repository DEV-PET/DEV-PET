//====================================MENU====================================\\
var logo = document.getElementById('logo');

// EVENT LISTENERS
logo.addEventListener('click', function () {
    if (!window.location.pathname.endsWith('/index.html')) {
        homeRedirect();
    }
});

// FUNCTIONS
function homeRedirect() {
    window.location.href = '../index.html';
}

//====================================SIDE-MENU====================================\\
const sideMenu = document.getElementById('sideMenu');
const arrow = document.getElementById('arrow');
var cSideMenu = 0;
let isRotated = false;

//EVENT LISTENERS
arrow.addEventListener('click', showSideMenu);

//FUNCTIONS
function showSideMenu() {
    if (cSideMenu == 0) {
        sideMenu.style.display = 'flex';
        cSideMenu = 1;
    } else {
        sideMenu.style.display = 'none';
        cSideMenu = 0;
    }
}


arrow.addEventListener("click", () => {
    if (isRotated) {
        arrow.style.transform = "rotate(0deg)";
        isRotated = false;
    } else {
        arrow.style.transform = "rotate(90deg)";
        isRotated = true;
    }
});