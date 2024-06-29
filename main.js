// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}
 
// Scroll Reveal
const sr = ScrollReveal ({
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
})


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
