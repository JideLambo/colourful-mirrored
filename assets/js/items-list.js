window.addEventListener('DOMContentLoaded', () => {
  let isNewestDropdownOpen = false;
  const dropdownTrigger = document.getElementById('newest-item-dropdown-trigger');
  const dropdownMenu = document.getElementById('newest-item-dropdown-menu');
  const videoPlayerWrapper = document.getElementById('video-player-wrapper');
  const videoTrigger = document.querySelectorAll('.video-trigger');
  const videoPlayer = document.getElementById('video-player');
  

  dropdownTrigger.addEventListener('click', () => {
    isNewestDropdownOpen = !isNewestDropdownOpen;
    isNewestDropdownOpen
      ? dropdownMenu.classList.remove('hidden')
      : dropdownMenu.classList.add('hidden');
  })

  videoTrigger.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      // Set the new url for the videoPlayer. For example
      // videoPlayer.src = "https://www.youtube.com/watch?v=39iyB787lsw"
      videoPlayerWrapper.classList.remove('hidden');
    })
  })
})