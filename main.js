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

document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const contactIcons = document.getElementById('contactIcons');
    let isOpen = false;

    chatButton.addEventListener('click', () => {
        if (isOpen) {
            chatButton.innerHTML = '<img src="images/chat-icon.png" alt="أيقونة الدردشة">'; // تحديث الصورة هنا أيضًا
            contactIcons.style.display = 'none';
            chatButton.style.transform = 'rotate(0deg)';
        } else {
            chatButton.innerHTML = '<div class="close-icon"></div>';
            contactIcons.style.display = 'flex';
            chatButton.style.transform = 'rotate(360deg)';
        }
        isOpen = !isOpen;
    });
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
            homeTitle: "شيخ الجنابي",
            homeSubtitle: "ابو يحيى<br>غمدان الهندوان",
            homeBtn: "نبذه عن جنابينا",
            aboutSpan: "من نحن",
            aboutTitle: "شيخ الجنابي",
            aboutDesc: "يعد معرض شيخ الجنابي لصاحبه ( ابو يحيى غمدان الهندوان ) أحد المعارض الرائدة في تقديم الجنابي وخدمات عالية الجودة لعملائنا في جميع أقطار اليمن، نتميز بتوفير مجموعة متنوعة من الجنابي من خلال شبكة واسعة من الشركاء والموردين، نحرص على توفير منتجات ذات جودة عالية وبأسعار تنافسية",
            aboutBtn: "الرئيسية",
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
            servicesSpan: "خدماتنا",
            servicesItem1Title: "تشكيلة واسعة",
            servicesItem1Desc: "أفضل الجنابي متوفرة لدينا",
            servicesItem2Title: "دعم فني",
            servicesItem2Desc: "دعم فني على مدار الساعة لحل مشاكلك",
            servicesItem3Title: "عمل عالي الجودة",
            servicesItem3Desc: "يتم تنفيذ جميع اعمالنا باعلئ درجات الكفاءه",
            connectSpan: "تواصل معنا",
            connectBtn: "اتصل الان",
            contactTitle: "شيخ الجنابي",
            contactSpan: "للتواصل معنا عبر",
            menuLinksTitle: "Menu Links",
            navHome2: "الرئيسية",
            navAbout2: "من نحن",
            navMenu2: "قائمة الجنابي",
            navServices2: "خدماتنا",
            navContact2: "التواصل معنا",
            quickLinksTitle: "Quick Links",
            privacyLink: "سياسة الخصوصية",
            navAbout3: "من نحن",
            contactInfoTitle: "للتواصل",
            contactInfoAddress: "شارع مارب ، صنعاء ، اليمن",
            contactInfoPhone: "+967777775854",
            designer: "الحميقاني"
        },
        en: {
            logo: "Abu Yahya for Janabi",
            navHome: "Home",
            navAbout: "About Us",
            navMenu: "Janabi Menu",
            navServices: "Our Services",
            navContact: "Contact Us",
            homeTitle: "Sheikh of Janabi",
            homeSubtitle: "Abu Yahya<br>Ghmdan Alhindwan",
            homeBtn: "About Our Janabi",
            aboutSpan: "About Us",
            aboutTitle: "Sheikh of Janabi",
            aboutDesc: "The Sheikh of Janabi exhibition, owned by (Abu Yahya Ghmdan Alhindwan), is one of the leading exhibitions in providing Janabi and high-quality services to our customers throughout Yemen. We are distinguished by providing a variety of Janabi through an extensive network of partners and suppliers. We are keen to provide high-quality products at competitive prices.",
            aboutBtn: "Home",
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
            servicesSpan: "Our Services",
            servicesItem1Title: "Wide Selection",
            servicesItem1Desc: "The best Janabi available",
            servicesItem2Title: "Technical Support",
            servicesItem2Desc: "24/7 technical support to solve your problems",
            servicesItem3Title: "High Quality Work",
            servicesItem3Desc: "All our work is carried out with the highest levels of efficiency",
            connectSpan: "Contact Us",
            connectBtn: "Call Now",
            contactTitle: "Sheikh of Janabi",
            contactSpan: "Contact us via",
            menuLinksTitle: "Menu Links",
            navHome2: "Home",
            navAbout2: "About Us",
            navMenu2: "Janabi Menu",
            navServices2: "Our Services",
            navContact2: "Contact Us",
            quickLinksTitle: "Quick Links",
            privacyLink: "Privacy Policy",
            navAbout3: "About Us",
            contactInfoTitle: "Contact Info",
            contactInfoAddress: "Marib Street, Sana'a, Yemen",
            contactInfoPhone: "+967777775854",
            designer: "Alhamiqani"
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
        document.getElementById("home-title").innerHTML = texts[language].homeTitle;
        document.getElementById("home-subtitle").innerHTML = texts[language].homeSubtitle;
        document.getElementById("home-btn").innerText = texts[language].homeBtn;
        document.getElementById("about-span").innerText = texts[language].aboutSpan;
        document.getElementById("about-title").innerText = texts[language].aboutTitle;
        document.getElementById("about-desc").innerText = texts[language].aboutDesc;
        document.getElementById("about-btn").innerText = texts[language].aboutBtn;
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
        document.getElementById("services-span").innerText = texts[language].servicesSpan;
        document.getElementById("services-item1-title").innerText = texts[language].servicesItem1Title;
        document.getElementById("services-item1-desc").innerText = texts[language].servicesItem1Desc;
        document.getElementById("services-item2-title").innerText = texts[language].servicesItem2Title;
        document.getElementById("services-item2-desc").innerText = texts[language].servicesItem2Desc;
        document.getElementById("services-item3-title").innerText = texts[language].servicesItem3Title;
        document.getElementById("services-item3-desc").innerText = texts[language].servicesItem3Desc;
        document.getElementById("connect-span").innerText = texts[language].connectSpan;
        document.getElementById("connect-btn").innerText = texts[language].connectBtn;
        document.getElementById("contact-title").innerText = texts[language].contactTitle;
        document.getElementById("contact-span").innerText = texts[language].contactSpan;
        document.getElementById("menu-links-title").innerText = texts[language].menuLinksTitle;
        document.getElementById("nav-home2").innerText = texts[language].navHome2;
        document.getElementById("nav-about2").innerText = texts[language].navAbout2;
        document.getElementById("nav-menu2").innerText = texts[language].navMenu2;
        document.getElementById("nav-services2").innerText = texts[language].navServices2;
        document.getElementById("nav-contact2").innerText = texts[language].navContact2;
        document.getElementById("quick-links-title").innerText = texts[language].quickLinksTitle;
        document.getElementById("privacy-link").innerText = texts[language].privacyLink;
        document.getElementById("nav-about3").innerText = texts[language].navAbout3;
        document.getElementById("contact-info-title").innerText = texts[language].contactInfoTitle;
        document.getElementById("contact-info-address").innerText = texts[language].contactInfoAddress;
        document.getElementById("contact-info-phone").innerText = texts[language].contactInfoPhone;

        // Toggle button text
        languageToggle.innerText = language === "ar" ? "English" : "Arabic";
    }

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === "ar" ? "en" : "ar";
        updateTexts(currentLanguage);
    });

    // Initialize with default language
    updateTexts(currentLanguage);
});
