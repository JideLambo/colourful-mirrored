window.addEventListener('DOMContentLoaded', () => {
  const tabPillsTwoItems = document.querySelectorAll('.tab-pills-2');

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