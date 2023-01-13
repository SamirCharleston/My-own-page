/**
 * This code is to animate the title text with a typeWriter effect
 */

const titlePresentation = document.getElementById("title-presentation");
const titleSentence = ["Hi, I'm Samir", "Be Welcome!", "Here you will find all my projects", "Real and academic projects", "the technologies I work with", "My trajectory", "My goals", "My achievements", "and more important", "how I can help you to improve your business or your company", "Leave a message", "Contact-me :)"];

let i = 0, j = 0, timeOut = 70, erase = false, write = true, timeReset = 3000, tempWord = "", delay = false;

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
let requestToServer, serverResponse, iCounter = 0;

requestEffectPhrases();

function requestEffectPhrases() {
    try {
        requestToServer = fetch('https://type.fit/api/quotes').then((res) => res.json())
            .then((res) => showEffectPhrases(res))
            .catch((err) => console.log(err));
    } catch (err) {
        console.log(err);
    }
}

function showEffectPhrases(phrases) {

    let randomValue = Math.random() * phrases.length;
    let maxTry = 0;

    do {
        randomValue = Math.ceil(randomValue);
        phrases[randomValue].text;
        phrases[randomValue].author;
        maxTry++;
    } while (phrases[randomValue].author === null && maxTry < 10);

    motivationalTextElement.innerHTML = "";

    smoothWriter(phrases[randomValue].text,
        phrases[randomValue].author,
        motivationalTextElement);
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

    setTimeout(() => smoothWriter(phrase, author, elementToInsertText, word), 1);
}