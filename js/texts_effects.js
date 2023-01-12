const titlePresentation = document.getElementById("title-presentation");
// let wordPosition = 0;

let wordSequence = (titlePresentations) => new Promise((resolve, reject) => {

    // let phrase = titlePresentations.innerHTML.split("-");
    // let multiplierOfTime = 0, permissionToResolve = 0, control = 0;
    // let letters = phrase[wordPosition].split("");
    // titlePresentation.innerHTML = "";


    // setTimeout(() => { /*Time for show the phrase*/
    //     for (let letter of letters) {
    //         setTimeout(() => {/*Time for show letter by letter*/
    //             titlePresentation.innerHTML += letter;
    //             control++;
    //             if (control == letters.length) {
    //                 setTimeout(() => {
    //                     typeErase(letters, titlePresentation);
    //                     console.log("oi")
    //                 }, (wordPosition * 3000));
    //             }
    //         }, 70 * multiplierOfTime);
    //         multiplierOfTime++;
    //     }
    // }, 3000 * wordPosition);

    // wordPosition++;

    /*
    for (let word of phrase) {
        setTimeout(() => {
            j = 0;
            titlePresentation.innerHTML = "";

            for (let letter of word) {
                setTimeout(() => {

                    titlePresentation.innerHTML += letter;
                }, 70 * j);

                j++;
            }

            permissionToResolve++;

            if (permissionToResolve == phrase.length) {
                resolve(phrase);
            }

        }, 4000 * i);

        i++;
    }*/

})

wordSequence(titlePresentation).then((titlePresentations) => {
    console.log(titlePresentations);
}).catch(() => {
    console.log("cheguei no Catch");
});

typeWriteEffect(titlePresentation);

function typeWriteEffect(elementToType) {

    let phrase = elementToType.innerHTML.split("-");
    let vet = [];

    // phrase.forEach((cb, i) => {
    //     vet[i] = (typeWrite(true, phrase[i], i));
    // });

    for (i in phrase) {
        vet[i] = (typeWrite(true, phrase[i], i));
    }

}

function typeWrite(eraseAfter, wordToType, wordPosition) {

    let multiplierOfTime = 0, control = 0;
    let letters = wordToType.split("");

    console.log(wordToType.length);

    titlePresentation.innerHTML = "";

    setTimeout(() => { /*Time for show the phrase*/
        for (let letter of letters) {
            setTimeout(() => {/*Time for show letter by letter*/
                titlePresentation.innerHTML += letter;
                control++;
                if (control == letters.length) {
                    setTimeout(() => { /**Time to erase the sentence after writing it*/
                        console.log("Set apagar")
                        if (eraseAfter) {
                            typeErase(letters, titlePresentation);
                        }
                    }, wordPosition * 1000);
                }
                console.log("Segundo set")
            }, 70 * multiplierOfTime);
            multiplierOfTime++;
        }
        console.log("Primeiro set")
        wordPosition++;
    }, 5000 * wordPosition);
}

function typeErase(word, titlePresentation) {

    word.forEach((char, i) => {
        setTimeout(() => {

            let decreasingWord = "";
            word.pop();

            for (j in word) {
                decreasingWord += word[j];
            }

            titlePresentation.innerHTML = decreasingWord;
        }, 20 * i);
    });
}