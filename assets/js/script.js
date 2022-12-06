const listMenuMobile = document.querySelector('.list-menu-mobile');
const button = document.querySelector('.button');
const menuImage = document.querySelector('.menu-mobile');
const headerContainer = document.querySelector('header .container');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function ativaMenu() {
    listMenuMobile.classList.toggle('desativa');
    button.classList.toggle('desativa');
    headerContainer.classList.toggle('grid-1-gap');
    main.classList.toggle('desativa');
    footer.classList.toggle('desativa');
}

menuImage.addEventListener('click', ativaMenu);
