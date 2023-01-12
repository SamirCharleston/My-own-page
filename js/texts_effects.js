const titlePresentation = document.getElementById("title-presentation");
const sentence = ["Hi, I'm Samir", "Be Welcome!", "Here you will find all my projects", "Real projects", "and academic projects", "the technologies I work with", "My trajectory", "My goals", "My achievements", "and more important", "how I can help you to improve your business or your company", "Leave a message", "Contact-me :)"];

let i = 0, j = 0, timeOut = 70, erase = false, write = true, timeReset = 3000, tempWord = "";
let delay = false;

titlePresentation.innerHTML = "";

typeWriterEffect();

function typeWriterEffect() {

    if (write) {
        if (j < sentence[i].length) {
            titlePresentation.innerHTML += sentence[i][j];
            j++;
        }

        if (j == sentence[i].length) {
            write = false;
            erase = true;
            delay = true;
        }

        timeOut = 70;
    }

    if (i == sentence.length) {
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


// let wordPosition = 0;

// let wordSequence = (titlePresentations) => new Promise((resolve, reject) => {

//     // let phrase = titlePresentations.innerHTML.split("-");
//     // let multiplierOfTime = 0, permissionToResolve = 0, control = 0;
//     // let letters = phrase[wordPosition].split("");
//     // titlePresentation.innerHTML = "";


//     // setTimeout(() => { /*Time for show the phrase*/
//     //     for (let letter of letters) {
//     //         setTimeout(() => {/*Time for show letter by letter*/
//     //             titlePresentation.innerHTML += letter;
//     //             control++;
//     //             if (control == letters.length) {
//     //                 setTimeout(() => {
//     //                     typeErase(letters, titlePresentation);
//     //                     console.log("oi")
//     //                 }, (wordPosition * 3000));
//     //             }
//     //         }, 70 * multiplierOfTime);
//     //         multiplierOfTime++;
//     //     }
//     // }, 3000 * wordPosition);

//     // wordPosition++;

//     /*
//     for (let word of phrase) {
//         setTimeout(() => {
//             j = 0;
//             titlePresentation.innerHTML = "";

//             for (let letter of word) {
//                 setTimeout(() => {

//                     titlePresentation.innerHTML += letter;
//                 }, 70 * j);

//                 j++;
//             }

//             permissionToResolve++;

//             if (permissionToResolve == phrase.length) {
//                 resolve(phrase);
//             }

//         }, 4000 * i);

//         i++;
//     }*/

// })

// wordSequence(titlePresentation).then((titlePresentations) => {
//     console.log(titlePresentations);
// }).catch(() => {
//     console.log("cheguei no Catch");
// });

// typeWriteEffect(titlePresentation);

// function typeWriteEffect(elementToType) {

//     let phrase = elementToType.innerHTML.split("-");
//     let vet = [];

//     // phrase.forEach((cb, i) => {
//     //     vet[i] = (typeWrite(true, phrase[i], i));
//     // });

//     for (i in phrase) {
//         vet[i] = (typeWrite(true, phrase[i], i));
//     }

// }

// function typeWrite(eraseAfter, wordToType, wordPosition) {

//     let multiplierOfTime = 0, control = 0;
//     let letters = wordToType.split("");

//     console.log(wordToType.length);

//     titlePresentation.innerHTML = "";

//     setTimeout(() => { /*Time for show the phrase*/
//         for (let letter of letters) {
//             setTimeout(() => {/*Time for show letter by letter*/
//                 titlePresentation.innerHTML += letter;
//                 control++;
//                 if (control == letters.length) {
//                     setTimeout(() => { /**Time to erase the sentence after writing it*/
//                         console.log("Set apagar")
//                         if (eraseAfter) {
//                             typeErase(letters, titlePresentation);
//                         }
//                     }, wordPosition * 1000);
//                 }
//                 console.log("Segundo set")
//             }, 70 * multiplierOfTime);
//             multiplierOfTime++;
//         }
//         console.log("Primeiro set")
//         wordPosition++;
//     }, 5000 * wordPosition);
// }

// function typeErase(word, titlePresentation) {
//     let control = 0;

//     word.forEach((char, i) => {
//         setTimeout(() => {

//             let decreasingWord = "";
//             word.pop();

//             for (j in word) {
//                 decreasingWord += word[j];
//             }

//             control++;

//             if (control == word.length - 1) {
//                 typeWriteEffect(titlePresentation);
//             }

//             titlePresentation.innerHTML = decreasingWord;
//         }, 20 * i);
//     });
// }

