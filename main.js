const header = document.querySelector('header');
const navItemBorders = document.getElementsByClassName('.border__bottom')
const hamburgerContainer = document.querySelector('.hamburger__container')
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__mobile')
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 0) {
        header.classList.add("shrinked")
    } else {
        header.classList.remove("shrinked")
    }
});

hamburgerContainer.addEventListener('click', (e) => {
    hamburgerContainer.classList.toggle('open')
    navMobile.classList.toggle('open')
})