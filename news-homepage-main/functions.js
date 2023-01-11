const CloseMenu = document.querySelector('.close-menu-sect');
const NavWrap = document.querySelector('.nav-wrapper');

CloseMenu.addEventListener('click', () => {
    NavWrap.classList.toggle('hide');
})
