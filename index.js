const fallingSyntax = document.querySelector('.falling-syntax');

const jsSyntax = ['return', 'if', 'else', 'switch', 'for', 'while', 'break', 'case', 'this', 'typeof', 'addEventListener', 'querySelector', 'document', 'function', 'undefined', 'null', 'NaN', 'true', 'false', 'let', 'const', '++', '&ndash;&ndash;', '||', '&amp;&amp;'];

setInterval(() => {
    showDepartingElements()
}, 550);

function showDepartingElements() { // animation in the code section
    const randomSyntax = Math.floor(Math.random() * 25);
    const randomLeft = Math.floor(Math.random() * 101);

    if (randomSyntax <= 9) {
        const newElem = document.createElement('code');
        newElem.classList.add('js-syntax');
        newElem.innerHTML = jsSyntax[randomSyntax];
        newElem.setAttribute('style', `left: ${randomLeft}%; display: block; color: rgb(254, 148, 254);`);
        fallingSyntax.insertAdjacentElement('afterbegin', newElem);

        setTimeout(() => {
            newElem.style.transform = 'translateY(550%)';
            newElem.style.opacity = '0';
            setTimeout(() => {
                newElem.remove();
            }, 3000);
        }, 30);
    } else if (randomSyntax >= 10 && randomSyntax <= 11) {
        const newElem = document.createElement('code');
        newElem.classList.add('js-syntax');
        newElem.innerHTML = jsSyntax[randomSyntax];
        newElem.setAttribute('style', `left: ${randomLeft}%; display: block; color: rgb(211, 211, 104);`);
        fallingSyntax.insertAdjacentElement('afterbegin', newElem);

        setTimeout(() => {
            newElem.style.transform = 'translateY(550%)';
            newElem.style.opacity = '0';
            setTimeout(() => {
                newElem.remove();
            }, 3000);
        }, 30);
        
    } else if (randomSyntax >= 12 && randomSyntax <= 20) {
        const newElem = document.createElement('code');
        newElem.classList.add('js-syntax');
        newElem.innerHTML = jsSyntax[randomSyntax];
        newElem.setAttribute('style', `left: ${randomLeft}%; display: block; color: rgb(125, 159, 255);`);
        fallingSyntax.insertAdjacentElement('afterbegin', newElem);

        setTimeout(() => {
            newElem.style.transform = 'translateY(550%)';
            newElem.style.opacity = '0';
            setTimeout(() => {
                newElem.remove();
            }, 3000);
        }, 30);
    } else {
        const newElem = document.createElement('code');
        newElem.classList.add('js-syntax');
        newElem.innerHTML = jsSyntax[randomSyntax];
        newElem.setAttribute('style', `left: ${randomLeft}%; display: block;`);
        fallingSyntax.insertAdjacentElement('afterbegin', newElem);

        setTimeout(() => {
            newElem.style.transform = 'translateY(550%)';
            newElem.style.opacity = '0';
            setTimeout(() => {
                newElem.remove();
            }, 3000);
        }, 30);
    }
}

// animation when navigating \/

const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const burgerButton = document.querySelector('.header-burger-button');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-link');

const navContacts = document.querySelector('[href="#contacts"]');
const navSummary = document.querySelector('[href="#summary"]');
const navSkills = document.querySelector('[href="#skills"]');
const navEducation = document.querySelector('[href="#education"]');
const navLanguages = document.querySelector('[href="#languages"]');
const navProjects = document.querySelector('[href="#projects"]');
const navCode = document.querySelector('[href="#code"]');


nav.addEventListener('click', highlightSection);

function highlightSection(event) {
    if (event.target === nav || event.target === navList) {
        return;
    }

    const requiredElem = document.querySelector(`#${event.target.getAttribute('href').slice(1)}`);
    requiredElem.setAttribute('style', 'background-color: #47b466; filter: drop-shadow(0px 0px 12px #47b466); color: #000000; text-shadow: none;');

    setTimeout(() => {
        requiredElem.removeAttribute('style');
    }, 2000);
}

// burger menu \/

burgerButton.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu(event) {
    nav.classList.toggle('nav-active');
    burgerButton.classList.toggle('burger-in-active-menu');
    body.classList.toggle('lock');
}

document.addEventListener('click', closeBurgerMenu);

function closeBurgerMenu(event) {
    if (nav.classList.contains('nav-active')) {
        if (!nav.contains(event.target) && !burgerButton.contains(event.target) || event.target.classList.contains('nav-link')) {
            nav.classList.toggle('nav-active');
            burgerButton.classList.toggle('burger-in-active-menu');
            body.classList.toggle('lock');
        }
    }
}