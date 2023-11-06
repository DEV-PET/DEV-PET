//====================================LOGIN-BUTTON====================================\\
const login = document.getElementById('login');

// EVENT LISTENERS
login.addEventListener('click', loginRedirect);

// FUNCTIONS
function loginRedirect() {
    window.location.href = '../html/login.html';
}

//====================================MENU====================================\\
document.getElementById('arrow');
document.getElementById('logo');

// EVENT LISTENERS
logo.addEventListener('click', homeRedirect)

// FUNCTIONS
function homeRedirect() {
    window.location.href = '../index.html';
}