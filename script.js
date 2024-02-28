// script.js
function toggleLanguage() {
    // Simple language toggle for demonstration purposes
    const languageToggle = document.getElementById('languageToggle');
    const currentLanguage = languageToggle.textContent;

    if (currentLanguage === 'Switch Language') {
        languageToggle.textContent = 'Changer de Langue';
    } else {
        languageToggle.textContent = 'Switch Language';
    }
}
