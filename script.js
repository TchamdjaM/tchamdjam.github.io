document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        fr: {
            title: "Tchamdja Mélissa - Portfolio",
            navHome: "Accueil",
            navAbout: "À propos de moi",
            navProjects: "Projets",
            navSkills: "Compétences",
            navContact: "Contact",
            languageToggle: "FR - EN", // Changement du libellé du bouton
            welcomeTitle: "Bienvenue sur mon Portfolio",
            welcomeText: "Découvrez mes projets, compétences et expériences.",
            aboutTitle: "À propos de moi",
            aboutText: "Passionnée par l'analyse de données, je cherche à exploiter le pouvoir des données pour révéler des insights et informer les décisions.",
            projectsTitle: "Projets",
            project1Title: "Analyse de données sur les genres de films",
            project1Desc: "Ce projet illustre comment les données peuvent être utilisées pour découvrir des tendances dans l'industrie cinématographique.",
            project2Title: "Dashboard Power BI pour l'analyse des ventes",
            project2Desc: "Création d'un tableau de bord interactif pour suivre les performances des ventes en temps réel.",
            skillsTitle: "Compétences",
            contactTitle: "Contact",
            namePlaceholder: "Votre nom",
            emailPlaceholder: "Votre email",
            messagePlaceholder: "Votre message",
            submitButton: "Envoyer",
            footerConnect: "Retrouvez-moi sur :"
        },
        en: {
            title: "Tchamdja Mélissa - Portfolio",
            navHome: "Home",
            navAbout: "About Me",
            navProjects: "Projects",
            navSkills: "Skills",
            navContact: "Contact",
            languageToggle: "FR - EN", // Changement du libellé du bouton
            welcomeTitle: "Welcome to my Portfolio",
            welcomeText: "Discover my projects, skills, and experiences.",
            aboutTitle: "About Me",
            aboutText: "Passionate about data analysis, I seek to harness the power of data to unveil insights and inform decisions.",
            projectsTitle: "Projects",
            project1Title: "Data Analysis on Movie Genres",
            project1Desc: "This project illustrates how data can be used to uncover trends within the movie industry.",
            project2Title: "Power BI Dashboard for Sales Analysis",
            project2Desc: "Creation of an interactive dashboard to monitor sales performance in real-time.",
            skillsTitle: "Skills",
            contactTitle: "Contact",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            submitButton: "Send",
            footerConnect: "Connect with me on:"
        }
    };

    let currentLang = 'fr';

    document.getElementById('languageToggle').addEventListener('click', function() {
        this.classList.toggle('fr'); // Ajoute ou supprime la classe "fr"
      });

    function translatePage() {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if(translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });
    }

    function submitForm() {
        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Construct the email body
        const emailBody = `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`;

        // Open the user's email client with a new email
        window.location.href = `mailto:tchamdjamelissa@gmail.com?subject=Message%20from%20Portfolio&body=${encodeURIComponent(emailBody)}`;
    }

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm();
    });

    translatePage(); // Traduit la page dans la langue initiale (français) au chargement.
});
