const menu = document.querySelector(".menu-bottom");
const menuHidden = document.querySelector("header .menu-bottom img");
const buttonHiddenMenu = document.getElementById("hidden-menu");


buttonHiddenMenu.addEventListener("click", () => {

    menu.style.height = "31px";
    menu.style.fontSize = "1em";
    menuHidden.style.height = "unset";
    buttonHiddenMenu.style.display = "none";
});

/*When the page is scrolled, the last three options disappear*/
window.onscroll = () => {
    menu.style.height = "0";
    menu.style.fontSize = "0";
    menuHidden.style.height = "0";
    buttonHiddenMenu.style.display = "unset";
};
