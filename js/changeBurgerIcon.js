let isBurgerEpx = false;

function changeBurgerIcon() {
    const burgerIcon = document.getElementById("header_burger_default");
    burgerIcon.classList.toggle("burger-hidden");

    const burgerIconExp = document.getElementById("header_burger_expanded");
    burgerIconExp.classList.toggle("burger-hidden");
    
    isBurgerEpx = !isBurgerEpx;

    setBlur();
    openSubHeader();
}

function setBlur() {
    const blurBlock = document.getElementById("header-blur");
    blurBlock.classList.toggle("blur-hidden");
}

function openSubHeader() {
    const subHeader = document.getElementById("sub-header");
    subHeader.classList.toggle("sub-header-hidden")
}