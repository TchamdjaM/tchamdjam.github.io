document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupérer les valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construire l'objet FormData
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // URL de l'endpoint Formspree (remplacez par votre propre endpoint si vous utilisez un autre service)
    const apiUrl = 'https://formspree.io/f/vpzokgey';

    // Envoi des données à Formspree avec la méthode POST
    fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Afficher une confirmation à l'utilisateur (vous pouvez personnaliser ceci)
        alert('Formulaire soumis avec succès !');

        // Réinitialiser le formulaire
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        // Afficher un message d'erreur à l'utilisateur (vous pouvez personnaliser ceci)
        alert('Une erreur s\'est produite lors de l\'envoi du formulaire.');
    });
});