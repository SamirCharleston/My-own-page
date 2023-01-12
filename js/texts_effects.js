const titlePresentation = document.getElementById("title-presentation");

let wordSequence = (titlePresentations) => new Promise((resolve, reject) => {

    let phrase = titlePresentations.innerHTML.split("-");
    let i = 0, j = 0, permissionToResolve = 0, words = [];


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
    }


})

wordSequence(titlePresentation).then((titlePresentations) => {
    console.log(titlePresentations);
}).catch(() => {
    console.log("cheguei no Catch");
})

function typeWriterEffect() {
    let letters = titlePresentation.innerHTML.split('');
    let totalPhrases = 0;

    titlePresentation.innerHTML = "";

    for (i in letters) {
        if (letters[i] === '-') {
            totalPhrases++;
        }
    }
}

function typeWrite(word, callback) {

}

function typeErase(word, callback) {

}