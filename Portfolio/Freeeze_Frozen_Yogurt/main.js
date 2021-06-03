// Hamburger menu design: when screens are smaller than 769px,

const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');


mobileMenu.addEventListener('click', function() { // and the hamburger is clicked,
    mobileMenu.classList.toggle('is-active'); // the hamburger turns into an X
    navMenu.classList.toggle('active'); // and the navMenu slides out from the left.
});

navMenu.addEventListener('click', function() { // and a navMenu item is clicked,
    mobileMenu.classList.remove('is-active'); // change the X back into a hamburger
    navMenu.classList.remove('active'); // and slide the navMenu off screen to the left,
});
