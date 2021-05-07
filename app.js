const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');


mobileMenu.addEventListener('click', function() { // and the hamburger is clicked,
    mobileMenu.classList.toggle('is-active'); // the hamburger turns into an X,
    navMenu.classList.toggle('active'); // the navMenu slides out from the left,

    if (header.classList === 'box-shadow') { // and IF the header has a shadow (which it does on page load),
        header.classList.remove('box-shadow'); // remove the shadow on the header,
    } else {
        header.classList.toggle('box-shadow'); // otherwise (on second click), leave the shadow on the header alone.
    }
});

navMenu.addEventListener('click', function() { // and a navMenu item is clicked,
    mobileMenu.classList.remove('is-active'); // change the X back into a hamburger,
    navMenu.classList.remove('active'); // slide the navMenu off screen to the left,
    header.classList.add('box-shadow'); // and put the shadow back on the header.
});
