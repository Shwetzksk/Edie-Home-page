'use strict';

//element selector

const exitBtn = document.querySelector('.exit');
const navbarUlMobile = document.querySelector('.navbar-ul__mobile');
const menuBtn = document.querySelector('.menu');
const logo = document.querySelector('.mobile__logo');
const menuBackground = document.querySelector('.menuBackground');
const sections = document.querySelectorAll('.reveal-section');
const navbar = document.querySelector('nav');
const sectionIntro = document.querySelector('.introduction');
const navLinks = document.querySelector('.navbar-ul');


//click on menu button
menuBtn.addEventListener('click', function () {
    navbarUlMobile.classList.remove('hidden');
    exitBtn.classList.remove('hidden');
    menuBackground.classList.remove('hidden');
    menuBtn.classList.add('hidden');



});

//click on exit
exitBtn.addEventListener('click', function () {
    navbarUlMobile.classList.add('hidden');
    exitBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
    menuBackground.classList.add('hidden');
});
navbarUlMobile.addEventListener('click', function (e) {

    if (e.target.classList.contains('navbar__link')) {
        navbarUlMobile.classList.add('hidden');
        exitBtn.classList.add('hidden');
        menuBtn.classList.remove('hidden');
        menuBackground.classList.add('hidden');
    }
});

//smooth scroll
navLinks.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('navbar__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});


//sticky navbar
const options = {
    root: null,
    threshold: 0.15,
    // rootMargin: '-90px',
}
function stickynav(entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {

        navbar.classList.add('nav---sticky');
    } else {
        navbar.classList.remove('nav---sticky');
    }
}
const navObserver = new IntersectionObserver(stickynav, options);
navObserver.observe(sectionIntro);

//revealing on scroll 
const sectionOption = { root: null, threshold: 0.15, };
function revealSection(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    sectionRevealObserver.unobserve(entry.target);
}
const sectionRevealObserver = new IntersectionObserver(revealSection, sectionOption);

sections.forEach((section) => {

    sectionRevealObserver.observe(section);
    section.classList.add('section--hidden');

})
