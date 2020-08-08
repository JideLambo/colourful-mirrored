
window.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const header = document.querySelector("header");
  const hamburgerMenu = document.querySelectorAll('.hamburger-menu');
  const searchBar = document.getElementById('js-searchbar');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const tabPillsOneItems = document.querySelectorAll('.tab-pills-1');
  const tabPillsTwoItems = document.querySelectorAll('.tab-pills-2');
  const carouselNextButton = document.getElementById('js-next-carousel');
  const carouselPrevButton = document.getElementById('js-prev-carousel');
  const carouselTriggers = document.querySelectorAll('.carousel-trigger');
  const searchBarToggleButton = document.getElementById('js-toggle-searchbar');
  let carouselId = 'carousel-1';
  const carouselIdList = ['carousel-1', 'carousel-2', 'carousel-3', 'carousel-4'];
  const lastIndex = 3; // The JavaScript biggest index of the carouselIdList

  // Event listener to toggle the menu on mobile devices
  hamburgerMenu.forEach((menuIcon) => {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.add('hidden');
      Array.from(menuIcon.classList).includes('switch-menu')
        ? document.querySelector('.close-menu').classList.remove('hidden')
        : document.querySelector('.switch-menu').classList.remove('hidden');
      mobileMenu.classList.toggle('hidden');
      header.classList.toggle('fixed-mobile-menu');
    })
  })

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
   * Pure Javascript function to toggle through the carousel
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

  // Event Listener for toggling search bar open and close
  searchBarToggleButton.addEventListener('click', () => {
    Array.from(searchBar.classList).includes('invisible')
      ? searchBar.classList.remove('invisible')
      : searchBar.classList.add('invisible');
  });

  // Event listener for tab-pills-1 active state toggling
  tabPillsOneItems.forEach((tabPill) => {
    tabPill.addEventListener('click', () => {
      removeAllActiveStates(tabPillsOneItems);
      tabPill.classList.add('active');
      // Switch the content on display
    });
  });

  // Event listener for tab-pills-1 active state toggling
  tabPillsTwoItems.forEach((tabPill) => {
    tabPill.addEventListener('click', ({ target }) => {
      tabPillsTwoItems.forEach((element) => {
        element.classList.add('bg-color-white2', 'text-black')
        element.classList.remove('bg-black', 'text-white')
      });
      tabPill.classList.remove('bg-color-white2', 'text-black',)
      tabPill.classList.add('bg-black', 'text-white');
      // Switch the content on display
      document.querySelectorAll('.news-content').forEach((element) => {
        element.classList.add('hidden');
      });
      document.getElementById(`${target.id}-content`).classList.remove('hidden');
    });
  });
});