window.addEventListener('DOMContentLoaded', () => {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselNextButton = document.getElementById('js-next-carousel');
  const carouselPrevButton = document.getElementById('js-prev-carousel');
  const carouselTriggers = document.querySelectorAll('.carousel-trigger');
  let carouselId = 'carousel-1';
  const carouselIdList = ['carousel-1', 'carousel-2', 'carousel-3', 'carousel-4'];
  const lastIndex = 3; // The JavaScript biggest index of the carouselIdList

  /**
   * Function to remove all active classes from html elements NodeList
   * @param {Array} elementsList 
   */
  const removeAllActiveStates = (elementsList) => {
    elementsList.forEach((element) => element.classList.remove('active'));
  }

  /**
   * Fuction to set all carousel items to hidden
   */
  const setAllCarouselItemsToHidden = () => {
    carouselItems.forEach((item) => item.classList.add('carousel-transition'));
  }

  /**
   * Function to toggle through the carousel
   * @param {HTML Element} target - The Target element
   * @param {Boolean} arrowToggle - A boolean indicating if the event is a click of the prev/next arrows
   */
  const toggleTrigger = (target, arrowToggle = false) => {
    removeAllActiveStates(carouselTriggers);
    carouselId = arrowToggle ? target.id : target.id.substring(8);
    arrowToggle
      ? document.getElementById(`trigger-${carouselId}`).classList.add('active')
      : target.classList.add('active');
    setAllCarouselItemsToHidden();
    document.getElementById(carouselId).classList.remove('carousel-transition');
    arrowToggle
      ? document.getElementById(carouselId).classList.add('active-carousel')
      : document.getElementById(carouselId).classList.add('active');
  }

  // Event listener for carousel triggers
  carouselTriggers.forEach((carouselElement) => {
    carouselElement.addEventListener('click', ({ target }) => toggleTrigger(target));
  });

  // Event Listener for carousel next (arrow) button
  carouselNextButton.addEventListener('click', () => {
    const currentIndex = carouselIdList.findIndex(id => id === carouselId);
    const target = currentIndex === lastIndex
      ? document.getElementById(carouselIdList[0])
      : document.getElementById(carouselIdList[currentIndex + 1]);
    toggleTrigger(target, true);
  });

  // Event Listener for carousel prev (arrow) button
  carouselPrevButton.addEventListener('click', () => {
    const currentIndex = carouselIdList.findIndex(id => id === carouselId);
    const target = currentIndex === 0
      ? document.getElementById(carouselIdList[lastIndex])
      : document.getElementById(carouselIdList[currentIndex - 1]);
    toggleTrigger(target, true);
  });
});
