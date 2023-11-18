document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetching values from all form fields
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Creating an object to hold form data
    const formData = {
        firstName: fName,
        lastName: lName,
        email: email,
        message: message
    };

    // Sending the form data object
    fetch('/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch((error) => console.error('Error:', error));
});

