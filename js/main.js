const menu = document.querySelector(".menu-bottom");
const menuHidden = document.querySelector("header .menu-bottom img");
const buttonHiddenMenu = document.getElementById("hidden-menu");
const media = window.matchMedia('(max-width: 480px)');


buttonHiddenMenu.addEventListener("click", () => {

    menu.style.height = "31px";
    menu.style.fontSize = "1em";
    menuHidden.style.height = "unset";
    buttonHiddenMenu.style.display = "none";
});

/*When the page is scrolled, the last three options disappear*/
window.onscroll = () => {

    if (media.matches) {
        menu.style.height = "0";
        menu.style.fontSize = "0";
        menuHidden.style.height = "0";
        buttonHiddenMenu.style.display = "unset";
    }
};
