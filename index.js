
window.addEventListener('DOMContentLoaded', (event) => {
  const switchmenu = document.querySelector('.switch-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const carouselTriggers = document.querySelectorAll('.carousel-trigger');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselArrowButton = document.getElementById('js-next-carousel');
  let carouselId = 'carousel-1';
  const carouselIdList = ['carousel-1', 'carousel-2', 'carousel-3', 'carousel-4'];
  const lastIndex = 3; // The JavaScript biggest index of the carouselIdList

  switchmenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  const removeAllActiveStates = (elementsList) => {
    elementsList.forEach((element) => element.classList.remove('active'));
  }

  const setAllCarouselItemsToHidden = () => {
    carouselItems.forEach((item) => item.classList.add('carousel-transition'));
  }

  const toggleTrigger = (target, arrowToggle = false) => {
    removeAllActiveStates(carouselTriggers);
    target.classList.add('active');
    carouselId = arrowToggle ? target.id : target.id.substring(8);
    setAllCarouselItemsToHidden();
    document.getElementById(carouselId).classList.remove('carousel-transition');
    arrowToggle
      ? document.getElementById(carouselId).classList.add('active-carousel')
      : document.getElementById(carouselId).classList.add('active');
  }

  carouselTriggers.forEach((carouselElement) => {
    carouselElement.addEventListener('click', ({ target }) => toggleTrigger(target));
  });

  carouselArrowButton.addEventListener('click', () => {
    const currentIndex = carouselIdList.findIndex(id => id === carouselId);
    const target = currentIndex === lastIndex
      ? document.getElementById(carouselIdList[0])
      : document.getElementById(carouselIdList[currentIndex + 1]);
    toggleTrigger(target, true);
  });
});