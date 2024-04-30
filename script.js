document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        fr: {
            title: "Tchamdja Mélissa - Portfolio",
            navHome: "Accueil",
            navAbout: "À propos de moi",
            navProjects: "Projets",
            navSkills: "Compétences",
            navContact: "Contact",
            languageToggle: "FR -> EN", // Changement du libellé du bouton
            welcomeTitle: "Bienvenue sur mon Portfolio",
            welcomeText: "Découvrez mes projets, compétences et expériences.",
            aboutTitle: "À propos de moi",
            aboutText: "Je suis Tchamdja Mélissa, une étudiante en Data Analyst / Business Analyst avec une forte inclinaison pour la visualisation de données impactantes. À travers ce portfolio, je souhaite partager avec vous les projets sur lesquels j'ai travaillé, qui illustrent mon approche méthodique et ma capacité à transformer les données brutes en informations actionnables.",
            projectsTitle: "Projets",
            project1Title: "Analyse de données sur les genres de films",
            project1Desc: "Ce projet illustre comment les données peuvent être utilisées pour découvrir des tendances dans l'industrie cinématographique.",
            project2Title: "Dashboard Power BI pour l'analyse des films",
            project2Desc: "Création d'un tableau de bord pour suivre les performances des films en fonction des genres.",
            project3Desc: "Création d'un wordcloud pour visualiser les mots du livre 'Orgueil et Préjugés' de jane Austen en R",
            tech1: "Technologies utilisées: Python, Matplotlib, Pandas",
            tech2: "Technologies utilisées: Power BI, Excel",
            tech3: "Technologies utilisées: R, Stats, ggplot",
            voir: "Voir le projet",
            skillsTitle: "Compétences",
            contactTitle: "Contact",
            namePlaceholder: "Votre nom",
            emailPlaceholder: "Votre email",
            messagePlaceholder: "Votre message",
            submitButton: "Envoyer",
            droit: "@ 2024 Tchamdja Mélissa. Tous droits réservés",
            footerConnect: "Retrouvez-moi sur :"
        },
        en: {
            title: "Tchamdja Mélissa - Portfolio",
            navHome: "Home",
            navAbout: "About Me",
            navProjects: "Projects",
            navSkills: "Skills",
            navContact: "Contact",
            languageToggle: "EN -> FR", // Changement du libellé du bouton
            welcomeTitle: "Welcome to my Portfolio",
            welcomeText: "Discover my projects, skills, and experiences.",
            aboutTitle: "About Me",
            aboutText: " I am Tchamdja Mélissa, a student in Data Analyst / Business Analyst with a strong inclination for impactful data visualization. Through this portfolio, I want to share with you the projects I have worked on, which illustrate my methodical approach and my ability to transform raw data into actionable insights.",
            projectsTitle: "Projects",
            project1Title: "Data Analysis on Movie Genres",
            project1Desc: "This project illustrates how data can be used to uncover trends within the movie industry.",
            project2Title: "Power BI Dashboard for Movie Analysis",
            project2Desc: "Creation of a dashboard to track movie performances by genre.",
            project3Desc:"Creation of a wordcloud to visualize the words from Jane Austen's 'Pride and Prejudice' in R.",
            tech1: "Technologies used: Python, Matplotlib, Pandas",
            tech2: "Technologies used: Power BI, Excel",
            tech3: "Technologies used: R, Stats, ggplot",
            voir: "See the project",
            skillsTitle: "Skills",
            contactTitle: "Contact",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            submitButton: "Send",
            droit: "@ 2024 Tchamdja Mélissa. All rights reserved",
            footerConnect: "Connect with me on:"
        }
    };

    let currentLang = 'fr';

    document.getElementById('languageToggle').addEventListener('click', function() {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        translatePage();
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
