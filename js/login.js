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
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Simulação de lógica de autenticação no lado do cliente (não seguro para produção)
    if (email === 'usuario@email.com' && password === 'senha123') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

function register() {
    var name = document.getElementById('register-name').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var cpf = document.getElementById('register-cpf').value;
    var dob = document.getElementById('register-dob').value;
    var city = document.getElementById('register-city').value;
    var state = document.getElementById('register-state').value;

    // Simulação de lógica de cadastro no lado do cliente (não seguro para produção)
    alert('Cadastro realizado com sucesso!\nNome: ' + name + '\nEmail: ' + email + '\nCPF: ' + cpf + '\nData de Nascimento: ' + dob + '\nCidade: ' + city + '\nEstado: ' + state);
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