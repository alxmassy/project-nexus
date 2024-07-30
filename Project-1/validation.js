const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const error_message = document.getElementById('error-message');
form.addEventListener('submit', (e) => {
    let errors = [];
    errors = getLoginFormErrors(username, password);
    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    }
});

function getLoginFormErrors(username, password) {
    let errors = [];
    if (username === '' || username == null) {
        errors.push('Username is required');
        username.parentElement.classList.add("incorrect");
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        password.parentElement.classList.add("incorrect");
    }
    return errors;
}

const allInputs = [username, password];
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains("incorrect")) {
            input.parentElement.classList.remove("incorrect");
            error_message.innerText = '';
        }
    });
});