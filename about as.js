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
            aboutSpan: "من نحن",
            aboutHeading: "شيخ الجنابي",
            aboutParagraph: "يعد معرض شيخ الجنابي لصاحبه ( ابو يحيى غمدان الهندوان ) أحد المعارض الرائدة في تقديم الجنابي وخدمات عالية الجودة لعملائنا في جميع أقطار اليمن، نتميز بتوفير مجموعة متنوعة من الجنابي من خلال شبكة واسعة من الشركاء والموردين، نحرص على توفير منتجات ذات جودة عالية وبأسعار تنافسية",
            aboutBtn: "الرئيسية",
            footerDesigner: "الحميقاني"
        },
        en: {
            logo: "Abu Yahya Al-Janabi",
            navHome: "Home",
            navAbout: "About Us",
            navMenu: "Janabi Menu",
            navService: "Our Services",
            navContact: "Contact Us",
            aboutSpan: "About Us",
            aboutHeading: "Sheikh Al-Janabi",
            aboutParagraph: "Sheikh Al-Janabi Exhibition, owned by (Abu Yahya Ghamdan Al-Hindwan), is one of the leading exhibitions in providing janabis and high-quality services to our customers across Yemen. We excel in offering a diverse range of janabis through a wide network of partners and suppliers, ensuring high-quality products at competitive prices.",
            aboutBtn: "Home",
            footerDesigner: "Al-Humaiqani"
        }
    };

    function updateTexts(language) {
        document.getElementById("logo").innerText = texts[language].logo;
        document.getElementById("nav-home").innerText = texts[language].navHome;
        document.getElementById("nav-about").innerText = texts[language].navAbout;
        document.getElementById("nav-menu").innerText = texts[language].navMenu;
        document.getElementById("nav-service").innerText = texts[language].navService;
        document.getElementById("nav-contact").innerText = texts[language].navContact;
        document.getElementById("about-span").innerText = texts[language].aboutSpan;
        document.getElementById("about-heading").innerText = texts[language].aboutHeading;
        document.getElementById("about-paragraph").innerText = texts[language].aboutParagraph;
        document.getElementById("about-btn").innerText = texts[language].aboutBtn;
        document.getElementById("footer-designer").innerText = texts[language].footerDesigner;

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
