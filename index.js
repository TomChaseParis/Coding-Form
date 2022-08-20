// Déclaration des constantes
const displayForm = _('displayForm');
const forLogin = _('forLogin');
const loginForm = _('loginForm');
const forRegister = _('forRegister');
const registerForm = _('registerForm');
const formContainer = _('formContainer');



// Gestion de la connexion
forLogin.addEventListener('click', () => {
    forLogin.classList.add('active');
    forRegister.classList.remove('active');
    if(loginForm.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(0%)';
        formContainer.style.transition = 'transform .5s';
        registerForm.classList.add('toggleForm');
        loginForm.classList.remove('toggleForm')
        }

})

// Gestion de l'inscription
    displayForm.addEventListener('click', showForm);
    forRegister.addEventListener('click', () => {
    forLogin.classList.remove('active');
    forRegister.classList.add('active');
    if(registerForm.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(-100%)';
        formContainer.style.transition = 'transform .5s';
        registerForm.classList.remove('toggleForm');
        loginForm.classList.add('toggleForm');
    }
})


// Création des fonctions principales
function _(e) {
    return document.getElementById(e);
}

function showForm() {
    document.querySelector('.form-wrapper .card').classList.toggle('show');
}

