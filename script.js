const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // если прокрутили больше 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});