const header = document.querySelector('header');
const navItemBorders = document.getElementsByClassName('.border__bottom')

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 0) {
        header.classList.add("shrinked")
    } else {
        header.classList.remove("shrinked")
    }
});