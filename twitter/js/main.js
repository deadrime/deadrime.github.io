var menu = document.getElementsByClassName('top-nav__menu')[0];

var btn = document.getElementsByClassName('top-nav__mobile-btn')[0];

btn.addEventListener('click', function () {
    menu.classList.toggle('top-nav__menu--active')
});