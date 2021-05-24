// Hamburger menu design for screens that are smaller than 769px

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


// Rock Paper Scissors

let userScore = 0;
const userScore_span = document.getElementById('user-score');

let compScore = 0;
const compScore_span = document.getElementById('comp-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getCompChoice () {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};


function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    } else {
        return "Scissors";
    };
};


function win(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {
        userChoice_div.classList.remove('green-glow')
    }, 500);
};


function lose(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    compScore ++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(compChoice)}. You lost.`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {
        userChoice_div.classList.remove('red-glow')
    }, 500);
};


function tie(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} and ${convertToWord(compChoice)} are the same. It's a tie.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {
        userChoice_div.classList.remove('gray-glow')
    }, 500);
};


function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, compChoice);
            break;
    }
};


function main () {
    rock_div.addEventListener('click', function () {
        game("r");
    });
    
    paper_div.addEventListener('click', function () {
        game("p");
    });
    
    scissors_div.addEventListener('click', function () {
        game("s");
    });
};

main();
