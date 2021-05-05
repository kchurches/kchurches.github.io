const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

// On hamburger menu click, turn hamburger menu into X, open nav menu, and add or remove 'box-shadow' class to the header depending on status
mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('is-active');
    navMenu.classList.toggle('active');

    if (header.classList === 'box-shadow') {
        header.classList.remove('box-shadow');
    } else {
        header.classList.toggle('box-shadow');
    };
});

// On nav menu click, turn X back into hamburger menu, close nav menu, and add 'box-shadow' class to header
navMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('is-active');
    navMenu.classList.remove('active');
    header.classList.toggle('box-shadow');
});
