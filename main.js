const header = document.querySelector('header');
const navItemBorders = document.getElementsByClassName('.border__bottom');
const hamburgerContainer = document.querySelector('.hamburger__container');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__mobile');
const sub_items_mobile = document.querySelector('.sub-item');
const dropdownsMobile = document.querySelector('.dropdowns')
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add("shrinked");
    } else {
        header.classList.remove("shrinked");
    }
});

hamburgerContainer.addEventListener('click', () => {
    hamburgerContainer.classList.toggle('open');
    navMobile.classList.toggle('open');
});

dropdownsMobile.addEventListener('click', () => {
    sub_items_mobile.classList.toggle('open')
})