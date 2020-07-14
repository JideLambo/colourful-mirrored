
const switchmenu = document.querySelector(".switch-menu");
const mobileMenu = document.querySelector(".mobile-menu");

switchmenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})