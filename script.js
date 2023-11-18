document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    emailInput.addEventListener('input', function(event) {
        if (emailInput.validity.valid) {
            emailError.textContent = ''; // Clear the error message
            emailError.style.display = 'none'; // Hide the error span
        } else {
            showEmailError(); // Function to show email error
        }
    });

    messageInput.addEventListener('input', function(event) {
        if (messageInput.value.trim() !== '') {
            messageError.textContent = '';
            messageError.style.display = 'none';
        } else {
            messageError.textContent = 'Message is required';
            messageError.style.display = 'block';
        }
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        if (!emailInput.validity.valid) {
            showEmailError();
            event.preventDefault(); // Prevent form submission
        }
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            messageError.style.display = 'block';
            event.preventDefault();
        }
    });

    function showEmailError() {
        if (emailInput.validity.typeMismatch) {
            emailError.textContent = 'Please enter a valid email address.';
        } else if (emailInput.validity.valueMissing) {
            emailError.textContent = 'Email is required.';
        }
        emailError.style.display = 'block';
    }
});


