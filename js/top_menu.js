const menu = document.querySelector(".menu-bottom");
const menuHiddenImg = document.querySelector("header .menu-bottom img");
const buttonHiddenMenu = document.getElementById("hidden-menu");
const mediaMobileLength = window.matchMedia('(max-width: 480px)');
const rootNode = document.getRootNode();

let menuIsShowing = true;

buttonHiddenMenu.addEventListener("click", () => {
    showMenu();
});

/*When the page is resized, the last three options were disappear*/
mediaMobileLength.addEventListener("resize", () => decideIfShowMenu());

menu.addEventListener("mouseleave", () => decideIfShowMenu());

window.addEventListener("scroll", () => {
    decideIfShowMenu();
});

function decideIfShowMenu() {
    if (menuIsShowing && mediaMobileLength.matches) {
        hideMenu();
    } else if (!menuIsShowing && !mediaMobileLength.matches) {
        showMenu();
    }
}

function changeThemeColor() {

    rootNode.documentElement.style.setProperty("--color-about-me", `rgb(${color[0]}, ${color[1]}, ${color[2]})`);
}

function showMenu() {
    menu.style.height = "31px";
    menu.style.fontSize = "1em";
    menuHiddenImg.style.height = "unset";
    buttonHiddenMenu.style.display = "none";
    menuIsShowing = true;
}

function hideMenu() {
    menu.style.height = "0";
    menu.style.fontSize = "0";
    menuHiddenImg.style.height = "0";
    buttonHiddenMenu.style.display = "unset";
    menuIsShowing = false;
}