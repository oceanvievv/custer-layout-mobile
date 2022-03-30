const burgerDef = document.getElementById("header_burger_default");
const burgerExp = document.getElementById("header_burger_expanded");
const logo = document.getElementById("header_logo");
const searchIcon = document.getElementById("menu_search");
const cartIcon = document.getElementById("menu_cart");

const elements = [
    burgerDef,
    burgerExp,
    logo,
    searchIcon,
    cartIcon
];

function hideHeaderElements() {
    for (let el of elements) {
        el.classList.toggle("header-elements-hidden")
    }
    
    const header = document.getElementById("header-mobile");
    const search = document.getElementById("search");

    header.classList.remove("header-mobile");
    header.classList.add("header-mobile-with-search");

    search.classList.toggle("search-wrapper-hidden")
}

function showHeaderElements() {
    for (let el of elements) {
        el.classList.toggle("header-elements-hidden")
    }
}