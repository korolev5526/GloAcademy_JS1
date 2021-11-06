const buttonAuth = document.querySelector(".button-auth");
const buttonAuthOut = document.querySelector(".button-out");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const loginForm = document.getElementById("logInForm");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");
const userName = document.querySelector('.user-name');

const login = (user) => {
    buttonAuth.style.display = 'none';

    buttonAuthOut.style.display = 'flex';
    userName.textContent = user.login;
    userName.style.display = 'flex';
    modalAuth.style.display = 'none';
}

const logout = () => {
    buttonAuth.style.display = 'flex';

    buttonAuthOut.style.display = 'none';
    userName.textContent = "";
    userName.style.display = 'none';
    localStorage.removeItem('user');
}

buttonAuth.addEventListener("click", () => {
    modalAuth.style.display = 'flex';
})

closeAuth.addEventListener("click", () => {
    modalAuth.style.display = 'none';
})

buttonAuthOut.addEventListener('click', () => {
    logout();
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = {
        login: inputLogin.value,
        password: inputPassword.value,
    }


    localStorage.setItem('user', JSON.stringify(user));
    login(user);
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}