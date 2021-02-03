'use strict';

//element selector

const exitBtn = document.querySelector('.exit');
const navbarUl = document.querySelector('.navbar-ul__mobile');
const menuBtn = document.querySelector('.menu');
const logo = document.querySelector('.mobile__logo');
const menuBackground = document.querySelector('.menuBackground');


//click on menu button
menuBtn.addEventListener('click', function () {
    navbarUl.classList.remove('hidden');
    exitBtn.classList.remove('hidden');
    menuBackground.classList.remove('hidden');
    menuBtn.classList.add('hidden');
    // logo.classList.add('invisible');


});

//click on exit
exitBtn.addEventListener('click', function () {
    navbarUl.classList.add('hidden');
    exitBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
    // logo.classList.remove('invisible');
    menuBackground.classList.add('hidden');
});

