// Clothes menu
function openClothesMenu() {
    setSubHeader();
    setClothesMenu();
}
function closeClothesMenu() {
    setSubHeader();
    setClothesMenu();
}
function setClothesMenu() {
    const clothesMenu = document.getElementById("sub-header-clothes");
    clothesMenu.classList.toggle("sub-header-clothes-hidden");
}

// Shoes menu
function openShoesMenu() {
    setSubHeader();
    setShoesMenu();
}
function closeShoesMenu() {
    setSubHeader();
    setShoesMenu();
}
function setShoesMenu() {
    const shoesMenu = document.getElementById("sub-header-shoes");
    shoesMenu.classList.toggle("sub-header-shoes-hidden");
}

// Accessories menu
function openAccessoriesMenu() {
    setSubHeader();
    setAccessoriesMenu();
}
function closeAccessoriesMenu() {
    setSubHeader();
    setAccessoriesMenu();
}
function setAccessoriesMenu() {
    const accessoriesMenu = document.getElementById("sub-header-accessories");
    accessoriesMenu.classList.toggle("sub-header-accessories-hidden");
}

// Brands menu
function openBrandsMenu() {
    setSubHeader();
    setBrandsMenu();
}
function closeBrandsMenu() {
    setSubHeader();
    setBrandsMenu();
}
function setBrandsMenu() {
    const brandsMenu = document.getElementById("sub-header-brands");
    brandsMenu.classList.toggle("sub-header-brands-hidden");
}

// Brands menu
function openHelpMenu() {
    setSubHeader();
    setHelpMenu();
}
function closeHelpMenu() {
    setSubHeader();
    setHelpMenu();
}
function setHelpMenu() {
    const helpMenu = document.getElementById("sub-header-help");
    helpMenu.classList.toggle("sub-header-help-hidden");
}