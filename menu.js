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
    const texts = {
        ar: {
            logo: "ابو يحيى للجنابي",
            navHome: "الرئيسية",
            navAbout: "من نحن",
            navMenu: "قائمه الجنابي",
            navServices: "خدماتنا",
            navContact: "التواصل معنا",
            menuSpan: "قائمة الجنابي",
            menuTitle: "نبذه عن جنابينا",
            menuItem1Title: "جنبيه صيفاني",
            menuItem1Desc: "جنبيه اصيله",
            menuItem2Title: "جنبيه زراف",
            menuItem2Desc: "جنبيه اصيله",
            menuItem3Title: "جنبيه حميريه",
            menuItem3Desc: "جنبيه ملكيه",
            menuItem4Title: "جنبيه زراف",
            menuItem4Desc: "جنبيه نجرانيه",
            menuItem5Title: "جنبيه زراف",
            menuItem5Desc: "جنبيه صنعاني",
            menuItem6Title: "جنبيه عزيري",
            menuItem6Desc: "جنبيه لب",
            aboutBtn: "الرئيسية"
        },
        en: {
            logo: "Abu Yahya for Janabi",
            navHome: "Home",
            navAbout: "About Us",
            navMenu: "Janabi Menu",
            navServices: "Our Services",
            navContact: "Contact Us",
            menuSpan: "Janabi List",
            menuTitle: "About Our Janabi",
            menuItem1Title: "Saifani Janabi",
            menuItem1Desc: "Authentic Janabi",
            menuItem2Title: "Zaraf Janabi",
            menuItem2Desc: "Authentic Janabi",
            menuItem3Title: "Himyari Janabi",
            menuItem3Desc: "Royal Janabi",
            menuItem4Title: "Zaraf Janabi",
            menuItem4Desc: "Najrani Janabi",
            menuItem5Title: "Zaraf Janabi",
            menuItem5Desc: "Sana'ani Janabi",
            menuItem6Title: "Azeri Janabi",
            menuItem6Desc: "Lub Janabi",
            aboutBtn: "Home"
        }
    };

    const languageToggle = document.getElementById("language-toggle");
    let currentLanguage = "ar";

    function updateTexts(language) {
        document.getElementById("logo").innerText = texts[language].logo;
        document.getElementById("nav-home").innerText = texts[language].navHome;
        document.getElementById("nav-about").innerText = texts[language].navAbout;
        document.getElementById("nav-menu").innerText = texts[language].navMenu;
        document.getElementById("nav-services").innerText = texts[language].navServices;
        document.getElementById("nav-contact").innerText = texts[language].navContact;
        document.getElementById("menu-span").innerText = texts[language].menuSpan;
        document.getElementById("menu-title").innerText = texts[language].menuTitle;
        document.getElementById("menu-item1-title").innerText = texts[language].menuItem1Title;
        document.getElementById("menu-item1-desc").innerText = texts[language].menuItem1Desc;
        document.getElementById("menu-item2-title").innerText = texts[language].menuItem2Title;
        document.getElementById("menu-item2-desc").innerText = texts[language].menuItem2Desc;
        document.getElementById("menu-item3-title").innerText = texts[language].menuItem3Title;
        document.getElementById("menu-item3-desc").innerText = texts[language].menuItem3Desc;
        document.getElementById("menu-item4-title").innerText = texts[language].menuItem4Title;
        document.getElementById("menu-item4-desc").innerText = texts[language].menuItem4Desc;
        document.getElementById("menu-item5-title").innerText = texts[language].menuItem5Title;
        document.getElementById("menu-item5-desc").innerText = texts[language].menuItem5Desc;
        document.getElementById("menu-item6-title").innerText = texts[language].menuItem6Title;
        document.getElementById("menu-item6-desc").innerText = texts[language].menuItem6Desc;
        document.getElementById("about-btn").innerText = texts[language].aboutBtn;
    }

    languageToggle.addEventListener("click", function() {
        currentLanguage = currentLanguage === "ar" ? "en" : "ar";
        updateTexts(currentLanguage);
        languageToggle.innerText = currentLanguage === "ar" ? "English" : "العربية";
    });
});
