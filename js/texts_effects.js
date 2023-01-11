const titlePresentation = document.getElementById("title-presentation");

typeWriterEffect();

function typeWriterEffect() {
    let letters = titlePresentation.innerHTML.split('');
    titlePresentation.innerHTML = "";

    letters.forEach((letter, i) => {

        let phrase += letter;

        if (letter !== "-") {
            setTimeout(() => {
                titlePresentation.innerHTML += letter;
            }, 80 * i);
        } else {
            setTimeout(() => {
                titlePresentation.innerHTML += "<br>";
            }, 80 * i);
        }
    })
}