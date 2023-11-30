function showRegister() {
    document.getElementById('login-container').classList.add('vortex');
    fadeOutAndHide('login-container');
    setTimeout(() => {
        fadeIn('register-container');
    }, 500);
}

function showLogin() {
    document.getElementById('register-container').classList.add('vortex');
    fadeOutAndHide('register-container');
    setTimeout(() => {
        fadeIn('login-container');
    }, 500);
}

function fadeIn(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'flex';
    element.classList.remove('vortex');
    setTimeout(() => {
        element.style.opacity = '1';
    }, 100);
}

function fadeOutAndHide(elementId) {
    var element = document.getElementById(elementId);
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.display = 'none';
    }, 500);
}

function login() {
    
}

function register() {
    
}

document.getElementById('toggle-btn').addEventListener('click', function () {
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');

    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    }
});