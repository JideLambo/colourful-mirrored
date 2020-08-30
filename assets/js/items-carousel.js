window.addEventListener('DOMContentLoaded', () => {
  const tabPillsOneItems = document.querySelectorAll('.tab-pills-1');
  const itemContents = document.querySelectorAll('.item-content');

  /**
   * Function to remove all active classes from html elements NodeList
   * @param {Array} elementsList 
   */
  const removeAllActiveStates = (elementsList) => {
    elementsList.forEach((element) => element.classList.remove('active'));
  }

  const addHiddenClass = (elementsList) => {
    elementsList.forEach((element) => element.classList.add('hidden'));
  }

  // Event listener for tab-pills-1 active state toggling
  tabPillsOneItems.forEach((tabPill) => {
    tabPill.addEventListener('click', () => {
      removeAllActiveStates(tabPillsOneItems);
      tabPill.classList.add('active');
      // Switch the content on display
      addHiddenClass(itemContents);
      const clickedTabContent = document.getElementById(`${tabPill.id}-content`);
      clickedTabContent.classList.remove('hidden');
    });
  });
});