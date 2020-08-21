window.addEventListener('DOMContentLoaded', () => {
  let isNewestDropdownOpen = false;
  const dropdownTrigger = document.getElementById('newest-item-dropdown-trigger');
  const dropdownMenu = document.getElementById('newest-item-dropdown-menu');

  dropdownTrigger.addEventListener('click', () => {
    isNewestDropdownOpen = !isNewestDropdownOpen;
    isNewestDropdownOpen
      ? dropdownMenu.classList.remove('hidden')
      : dropdownMenu.classList.add('hidden');
  })
})