
window.addEventListener('DOMContentLoaded', (event) => {
  const switchmenu = document.querySelector(".switch-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const carouselTriggers = document.querySelectorAll('.carousel-trigger');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselArrowButton = document.getElementById('js-next-carousel');
  let carouselId = '';

  switchmenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  })

  const removeAllActiveStates = (elementsList) => {
    elementsList.forEach((element) => element.classList.remove('active'));
  }

  const setAllCarouselItemsToHidden = () => {
    carouselItems.forEach((item) => item.classList.add('carousel-transition'));
  }

  carouselTriggers.forEach((carouselElement) => {
    carouselElement.addEventListener('click', ({ target }) => {
      removeAllActiveStates(carouselTriggers);
      target.classList.add('active');
      carouselId = target.id.substring(8);
      setAllCarouselItemsToHidden()
      document.getElementById(carouselId).classList.remove('carousel-transition');
      document.getElementById(carouselId).classList.add('active');
    });
  });

  carouselArrowButton.addEventListener('click', ({ target }) => {
    console.log(carouselId);
  });
});