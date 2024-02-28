document.addEventListener('DOMContentLoaded', function () {
    // Ensure the DOM is fully loaded before attaching the event listener

    document.querySelector('.contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Build FormData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        // Formspree endpoint URL
        const apiUrl = 'https://formspree.io/f/vpzokgey';

        // Send data to Formspree using POST method
        fetch(apiUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Display a confirmation message to the user
            alert('Formulaire soumis avec succès !');

            // Reset the form
            document.querySelector('.contact-form').reset();
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi du formulaire :', error);
            // Display an error message to the user
            alert('Une erreur s\'est produite lors de l\'envoi du formulaire.');
        });
    });
});
