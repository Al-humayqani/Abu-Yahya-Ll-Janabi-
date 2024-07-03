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
            servicesHeading: "خدماتنا",
            serviceBox1Title: "تشكيلة واسعة",
            serviceBox1Desc: "أفضل الجنابي متوفرة لدينا",
            serviceBox2Title: "دعم فني",
            serviceBox2Desc: "دعم فني على مدار الساعة لحل مشاكلك",
            serviceBox3Title: "عمل عالي الجودة",
            serviceBox3Desc: "يتم تنفيذ جميع اعمالنا باعلئ درجات الكفاءه",
            serviceBox3Btn: "الرئيسية",
            footerDesigner: "الحميقاني"
        },
        en: {
            logo: "Abu Yahya Al-Janabi",
            navHome: "Home",
            navAbout: "About Us",
            navMenu: "Janabi Menu",
            navService: "Our Services",
            navContact: "Contact Us",
            servicesHeading: "Our Services",
            serviceBox1Title: "Wide Variety",
            serviceBox1Desc: "The best janabis are available with us",
            serviceBox2Title: "Technical Support",
            serviceBox2Desc: "24/7 technical support to solve your problems",
            serviceBox3Title: "High-Quality Work",
            serviceBox3Desc: "All our work is carried out with the highest levels of efficiency",
            serviceBox3Btn: "Home",
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
            servicesHeading: document.getElementById("services-heading"),
            serviceBox1Title: document.getElementById("service-box-1-title"),
            serviceBox1Desc: document.getElementById("service-box-1-desc"),
            serviceBox2Title: document.getElementById("service-box-2-title"),
            serviceBox2Desc: document.getElementById("service-box-2-desc"),
            serviceBox3Title: document.getElementById("service-box-3-title"),
            serviceBox3Desc: document.getElementById("service-box-3-desc"),
            serviceBox3Btn: document.getElementById("service-box-3-btn"),
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
