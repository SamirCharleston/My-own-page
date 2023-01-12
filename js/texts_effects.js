const titlePresentation = document.getElementById("title-presentation");

let wordSequence = (titlePresentations) => new Promise((resolve, reject) => {

    resolve(titlePresentations => {
        let phrase = titlePresentations.innerHTML.split("-");

        console.log("Cheguei na parte de cima");
    });
})

wordSequence(titlePresentation).then(() => {
    console.log("cheguei na parte de baixo");
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