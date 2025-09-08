// Initially show login form
document.getElementById('login-form').style.display = 'block';

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    alert("Login functionality placeholder.\nEmail: " + email + "\nPassword: " + password);
}

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    alert("Signup functionality placeholder.\nName: " + name + "\nEmail: " + email + "\nPassword: " + password);
}

// Show login form when clicking the login button in nav
document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    toggleForms();
});
