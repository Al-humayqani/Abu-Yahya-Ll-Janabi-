// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');
let darkmode = document.querySelector('#darkmode');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
    }
});

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
    navbar.classList.remove('active'); // إزالة الصنف النشط من القائمة عند النقر على زر الدارك مود
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 700,
    reset: true
});

sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
});
document.addEventListener("DOMContentLoaded", function() {
    const languageToggle = document.getElementById("language-toggle");

    let currentLanguage = localStorage.getItem('language') || "ar";

    const texts = {
        ar: {
            logo: "ابو يحيى للجنابي",
            navHome: "الرئيسية",
            navAbout: "من نحن",
            navMenu: "قائمه الجنابي",
            navService: "خدماتنا",
            navContact: "التواصل معنا",
            contactHeading: "شيخ الجنابي",
            contactSubheading: "للتواصل معنا عبر",
            menuLinksHeading: "روابط القائمة",
            menuLinksHome: "الرئيسية",
            menuLinksAbout: "من نحن",
            menuLinksMenu: "قائمة الجنابي",
            menuLinksService: "خدماتنا",
            menuLinksContact: "التواصل معنا",
            quickLinksHeading: "روابط سريعة",
            privacyPolicy: "سياسة الخصوصية",
            quickLinksAbout: "من نحن",
            contactHeading2: "للتواصل",
            address: "شارع مارب ، صنعاء ، اليمن",
            phone: "+967777775854",
            homeButton: "الرئيسية",
            footerDesigner: "الحميقاني"
        },
        en: {
            logo: "Abu Yahya Al-Janabi",
            navHome: "Home",
            navAbout: "About Us",
            navMenu: "Janabi Menu",
            navService: "Our Services",
            navContact: "Contact Us",
            contactHeading: "Sheikh Al-Janabi",
            contactSubheading: "Contact us via",
            menuLinksHeading: "Menu Links",
            menuLinksHome: "Home",
            menuLinksAbout: "About Us",
            menuLinksMenu: "Janabi Menu",
            menuLinksService: "Our Services",
            menuLinksContact: "Contact Us",
            quickLinksHeading: "Quick Links",
            privacyPolicy: "Privacy Policy",
            quickLinksAbout: "About Us",
            contactHeading2: "Contact Us",
            address: "Mareb Street, Sana'a, Yemen",
            phone: "+967777775854",
            homeButton: "Home",
            footerDesigner: "Al-Humaiqani"
        }
    };

    function updateTexts(language) {
        const elements = {
            logo: document.getElementById("logo"),
            navHome: document.getElementById("nav-home"),
            navAbout: document.getElementById("nav-about"),
            navMenu: document.getElementById("nav-menu"),
            navService: document.getElementById("nav-service"),
            navContact: document.getElementById("nav-contact"),
            contactHeading: document.getElementById("contact-heading"),
            contactSubheading: document.getElementById("contact-subheading"),
            menuLinksHeading: document.getElementById("menu-links-heading"),
            menuLinksHome: document.getElementById("menu-links-home"),
            menuLinksAbout: document.getElementById("menu-links-about"),
            menuLinksMenu: document.getElementById("menu-links-menu"),
            menuLinksService: document.getElementById("menu-links-service"),
            menuLinksContact: document.getElementById("menu-links-contact"),
            quickLinksHeading: document.getElementById("quick-links-heading"),
            privacyPolicy: document.getElementById("privacy-policy"),
            quickLinksAbout: document.getElementById("quick-links-about"),
            contactHeading2: document.getElementById("contact-heading2"),
            address: document.getElementById("address"),
            phone: document.getElementById("phone"),
            homeButton: document.getElementById("home-button"),
            footerDesigner: document.getElementById("footer-designer")
        };

        for (const key in elements) {
            if (elements[key]) {
                elements[key].innerText = texts[language][key];
            }
        }

        // تحديث نص زر اللغة
        languageToggle.innerText = language === "ar" ? "English" : "العربية";
    }

    languageToggle.addEventListener("click", function() {
        currentLanguage = currentLanguage === "ar" ? "en" : "ar";
        localStorage.setItem('language', currentLanguage);
        updateTexts(currentLanguage);
    });

    // تحديث النصوص عند تحميل الصفحة
    updateTexts(currentLanguage);
});
