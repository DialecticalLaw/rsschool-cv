const fallingSyntax = document.querySelector('.falling-syntax');

const jsSyntax = ['return', 'if', 'else', 'switch', 'for', 'while', 'break', 'case', 'this', 'typeof', 'addEventListener', 'querySelector', 'document', 'function', 'undefined', 'null', 'NaN', 'true', 'false', 'let', 'const', 'i++', 'i--', '||', '&amp;&amp;'];

setInterval(() => {
    showDepartingElements()
}, 550);

function showDepartingElements() {
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

const navContacts = document.querySelector('[href="#contacts"]');
const navSummary = document.querySelector('[href="#summary"]');
const navSkills = document.querySelector('[href="#skills"]');
const navEducation = document.querySelector('[href="#education"]');
const navLanguages = document.querySelector('[href="#languages"]');
const navProjects = document.querySelector('[href="#projects"]');
const navCode = document.querySelector('[href="#code"]');


document.addEventListener('click', highlightSection);

function highlightSection(event) {
    const requiredElem = document.querySelector(`#${event.target.getAttribute('href').slice(1)}`);
    requiredElem.style['background-color'] = '#47b466';
    requiredElem.style.filter = 'drop-shadow(0px 0px 12px #47b466)';
    requiredElem.style.color = '#000000';
    requiredElem.style['text-shadow'] = 'none';
    setTimeout(() => {
        requiredElem.removeAttribute('style');
    }, 2000);
}