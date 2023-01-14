/**
 * This code is to animate the title text with a typeWriter effect
 */

const titlePresentation = document.getElementById("title-presentation");
const titleSentence = ["Hi, I'm Samir", "Be Welcome!", "here you will find all my projects", "real and academic projects", "the technologies I work with", "my trajectory", "my goals", "my achievements", "and more important", "how I can help you to improve your business or your company", "leave a message or", "Contact-me :)"];

let i = 0, j = 0, timeOut = 70, erase = false, write = true, timeReset = 3000, tempWord = "", delay = false, firstTime = true;

titlePresentation.innerHTML = "";

typeWriterEffect();

function typeWriterEffect() {

    if (write) {
        if (j < titleSentence[i].length) {
            titlePresentation.innerHTML += titleSentence[i][j];
            j++;
        }

        if (j == titleSentence[i].length) {
            write = false;
            erase = true;
            delay = true;
        }

        timeOut = 70;
    }

    if (i == titleSentence.length) {
        i = 0;
        firstTime = true;
        return;
    }

    if (timeOut == timeReset) {
        timeOut = 30;
    }

    if (delay) {
        timeOut = timeReset;
        tempWord = titlePresentation.innerHTML.split("");
        i++;
        delay = false;
    }

    if (erase) {

        let phrase = "";

        for (let count in tempWord) {
            phrase += tempWord[count];
        }

        titlePresentation.innerHTML = phrase;

        tempWord.pop();

        j--;

        if (j == 0) {
            erase = false;
            write = true;
            titlePresentation.innerHTML = "";
            timeOut = 70;
        }
    }

    if (firstTime && j - 1 == titleSentence[i].length) {
        timeOut = 3000;
        firstTime = false;
    }

    setTimeout(typeWriterEffect, timeOut);
}




/**
 * The code below is to show effects phrases in the first section.
 * With a simple aimation.
 * 
 * The phrases were requested from an API
 */

const rootProperty = document.querySelector(":root");
const motivationalTextElement = document.querySelector(".section-top .text-presentation");
const motivationalParagraph = document.querySelector(".section-top .text-presentation p");
const motivationalAuthor = document.querySelector(".section-top .text-presentation small");
let requestToServer, serverResponse, iCounter = 0;

requestEffectPhrases();

function requestEffectPhrases() {
    try {
        requestToServer = fetch('https://type.fit/api/quotes').then((res) => res.json())
            .then((res) => {
                setTimeout(() => showEffectPhrases(res), 1000);
            })
            .catch((err) => console.log(err));
    } catch (err) {
        console.log(err);
    }
}

function showEffectPhrases(phrases) {

    let randomValue = 0, maxTry = 0;
    let regex = /[^null]/, validPhrase, validAuthor;

    do {
        randomValue = Math.random() * phrases.length;
        randomValue = Math.ceil(randomValue);
        validPhrase = regex.test(phrases[randomValue].text);
        validAuthor = regex.test(phrases[randomValue].author);
        maxTry++;
    } while (!(validAuthor && validPhrase) && maxTry < 10);

    motivationalTextElement.style.opacity = "1";

    if (validPhrase && validAuthor) {
        motivationalTextElement.innerHTML = "";
        smoothWriter(phrases[randomValue].text,
            phrases[randomValue].author,
            motivationalTextElement);
    } else {
        smoothWriter(motivationalParagraph.innerText,
            motivationalAuthor.innerText,
            motivationalTextElement);
    }
}

function smoothWriter(phrase, author, elementToInsertText, word = "") {

    if (iCounter == 0) {
        phrase = phrase.split("");
    }

    if (iCounter < phrase.length) {
        word += phrase[iCounter];
        elementToInsertText.innerHTML = `<p>${word}</p>`;
        iCounter++;
    } else {
        rootProperty.style.setProperty("--opacity-cursor", "0");
        elementToInsertText.innerHTML += `<small>${author}</small>`;
        iCounter = 0;
        return;
    }

    setTimeout(() => smoothWriter(phrase, author, elementToInsertText, word), 10);
}




/**
 * This section is for animate the titles when the page is scrolled
 */

const animatedElement = document.querySelectorAll("[data-animated]");
const classAnimatedElement = "animated-element";
let controlOfAnimation = true;

window.addEventListener("scroll", () => {

    if (controlOfAnimation) {
        controlOfAnimation = false;
        console.log("Entrou no if");
        setTimeout(() => {
            animatedScroll(classAnimatedElement);
        }, 200);
    }
});

function animatedScroll(classAnimatedElement) {

    let positionToAnimate = window.pageYOffset + (window.innerHeight * 0.75);
    controlOfAnimation = true;

    animatedElement.forEach((element) => {

        if (positionToAnimate > element.offsetTop) {
            element.classList.add(classAnimatedElement);
        } else {
            element.classList.remove(classAnimatedElement);
        }
    })
}