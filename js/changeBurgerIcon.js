function openSubHeader() {
    changeBurgerIcon();
    setSubHeader();
    setBlur();
}

function setSubHeader() {
    const subHeader = document.getElementById("sub-header");
    subHeader.classList.toggle("sub-header-hidden");
}

function changeBurgerIcon() {
    setBurgerDefIcon();
    setBurgerExpIcon();
}

function setBurgerDefIcon() {
    const burgerIcon = document.getElementById("header_burger_default");
    burgerIcon.classList.toggle("burger-hidden");
}

function setBurgerExpIcon() {
    const burgerIconExp = document.getElementById("header_burger_expanded");
    burgerIconExp.classList.toggle("burger-hidden");
}

function setBlur() {
    const blurBlock = document.getElementById("header-blur");
    blurBlock.classList.toggle("blur-hidden");
}

function closeSubHeader() {
    const subHeader = document.getElementById("sub-header");
    const subHeaderClothes = document.getElementById("sub-header-clothes");
    const subHeaderShoes = document.getElementById("sub-header-shoes");
    const subHeaderAccessories = document.getElementById("sub-header-accessories");
    const subHeaderBrands = document.getElementById("sub-header-brands");
    const subHeaderHelp = document.getElementById("sub-header-help");

    subHeader.classList.remove("sub-header-shown");
    subHeader.classList.add("sub-header-hidden");

    subHeaderClothes.classList.remove("sub-header-clothes-shown");
    subHeaderClothes.classList.add("sub-header-clothes-hidden");

    subHeaderShoes.classList.remove("sub-header-shoes-shown");
    subHeaderShoes.classList.add("sub-header-shoes-hidden");

    subHeaderAccessories.classList.remove("sub-header-accessories-shown");
    subHeaderAccessories.classList.add("sub-header-accessories-hidden");

    subHeaderBrands.classList.remove("sub-header-brands-shown");
    subHeaderBrands.classList.add("sub-header-brands-hidden");

    subHeaderHelp.classList.remove("sub-header-help-shown");
    subHeaderHelp.classList.add("sub-header-help-hidden");

    changeBurgerIcon();
    setBlur();
}