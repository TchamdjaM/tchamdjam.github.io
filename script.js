document.getElementById('languageToggle').addEventListener('click', function() {
    var buttonText = this.textContent;
    this.textContent = buttonText === "Changer de langue" ? "Switch Language" : "Changer de langue";
    // Implémentez ici la logique pour changer les textes des autres éléments du site si nécessaire
});

// Ajoutez ici le code JavaScript pour gérer l'envoi du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implémentez ici la logique pour envoyer les informations de contact, par exemple, via un API ou un service d'email
    alert("Message envoyé !");
});
