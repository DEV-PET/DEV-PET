//====================================LOGIN-BUTTON====================================\\
document.addEventListener('DOMContentLoaded', function () {
    const login = document.getElementById('login');

    // ACTION LISTENERS
    login.addEventListener('click', loginRedirect);

    // FUNCTIONS
    function loginRedirect() {
        window.location.href = '../html/login.html';
    }
});

//====================================MENU====================================\\
document.getElementById('arrow');

//EVENT LISTENERS
