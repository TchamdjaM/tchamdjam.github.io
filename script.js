function submitForm() {
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construct the email body
    const emailBody = `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Open the user's email client with a new email
    window.location.href = `mailto:tchamdjamel@gmail.com?subject=Message%20from%20Portfolio&body=${encodeURIComponent(emailBody)}`;
}
