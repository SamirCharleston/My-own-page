const menu = document.querySelector(".menu-bottom");
const menuHidden = document.querySelector("header .menu-bottom img");
const buttonHiddenMenu = document.getElementById("hidden-menu");
const mediaMobileLength = window.matchMedia('(max-width: 480px)');
let menuIsShowing = false;

buttonHiddenMenu.addEventListener("click", () => {
    showMenu();
});

/*When the page is scrolled, the last three options disappear*/
mediaMobileLength.addEventListener("resize", (event) => {
    if (mediaMobileLength.matches && menuIsShowing) {
        hideMenu();
    } else {
        showMenu();
    }

    window.alert(menuIsShowing);
})

hideMenu();

function showMenu() {
    menu.style.height = "31px";
    menu.style.fontSize = "1em";
    menuHidden.style.height = "unset";
    buttonHiddenMenu.style.display = "none";
    menuIsShowing = true;
}

function hideMenu() {
    menu.style.height = "0";
    menu.style.fontSize = "0";
    menuHidden.style.height = "0";
    buttonHiddenMenu.style.display = "unset";
    menuIsShowing = false;
}