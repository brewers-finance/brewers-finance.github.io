
const checkbox = document.getElementById('human-check');
const button = document.getElementById('verify-btn');

checkbox.addEventListener('change', function() {
    button.disabled = !this.checked;
});

button.addEventListener('click', function() {
    window.location.href = "login.html";
});
