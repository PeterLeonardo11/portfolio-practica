const toggleBtn = document.querySelector('.menu-toggle');
const toggleIcon = document.querySelector('.menu-toggle i');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    toggleIcon.classList.toggle('fa-bars');
    toggleIcon.classList.toggle('fa-times');
});