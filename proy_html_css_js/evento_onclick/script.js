
function hideButton(button) {
    button.style.display = "none";
}

function toggleLogin() {
    var loginButton = document.querySelector('.btn.logout');
    if (loginButton.innerText === 'Login') {
        loginButton.innerText = 'Logout';
    } else {
        loginButton.innerText = 'Login';
    }
}

function showAlert() {
    alert("Ninja was Liked");
}