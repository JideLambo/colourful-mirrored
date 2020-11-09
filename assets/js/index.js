window.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const header = document.querySelector("header");
  const hamburgerMenu = document.querySelectorAll(".hamburger-menu");
  const searchBar = document.getElementById("js-searchbar");
  const searchBarToggleButton = document.getElementById("js-toggle-searchbar");

  // Event listener to toggle the menu on mobile devices
  hamburgerMenu.forEach((menuIcon) => {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.add("hidden");
      Array.from(menuIcon.classList).includes("switch-menu")
        ? document.querySelector(".close-menu").classList.remove("hidden")
        : document.querySelector(".switch-menu").classList.remove("hidden");
      mobileMenu.classList.toggle("hidden");
      header.classList.toggle("fixed-mobile-menu");
    });
  });

  // Event Listener for toggling search bar open and close
  searchBarToggleButton.addEventListener("click", () => {
    Array.from(searchBar.classList).includes("customInvisible")
      ? searchBar.classList.remove("customInvisible")
      : searchBar.classList.add("customInvisible");
  });
});
