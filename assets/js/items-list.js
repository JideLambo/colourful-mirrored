window.addEventListener('DOMContentLoaded', () => {
  let isNewestDropdownOpen = false;
  const dropdownTrigger = document.getElementById('newest-item-dropdown-trigger');
  const dropdownMenu = document.getElementById('newest-item-dropdown-menu');
  const videoPlayerDiv = document.getElementById('video-player');
  const videoTrigger = document.querySelectorAll('.video-trigger');
  const isPlayerOpen = false;
  

  dropdownTrigger.addEventListener('click', () => {
    isNewestDropdownOpen = !isNewestDropdownOpen;
    isNewestDropdownOpen
      ? dropdownMenu.classList.remove('hidden')
      : dropdownMenu.classList.add('hidden');
  })

  videoTrigger.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      videoPlayerDiv.classList.remove('hidden');
    })
  })
})