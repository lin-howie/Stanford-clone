// Screen length watchers
function updateHeaderText() {
  const stanfordHeaderText = document.querySelector('.stanford-university-text');
  const stanfordHeroText = document.querySelector('.stanford-hero-text');
  let windowWidth = window.innerWidth;

  console.log(windowWidth);
  if(windowWidth <= 570) {
    stanfordHeaderText.innerText = 'Stanford'
  } else if (windowWidth >= 570 && windowWidth <= 620) {
    stanfordHeaderText.innerText = 'Stanford University'
  } else {
    stanfordHeaderText.innerText = 'Stanford University Clone'
  }

  if(windowWidth < 690) {
    stanfordHeroText.innerText = "Stanford"
  } else {
    stanfordHeroText.innerText = "Stanford Clone"
  }
}

// run on load
updateHeaderText(); // same as window.addEventListener('load', updateHeaderText());
// run on resize
window.addEventListener('resize', updateHeaderText);
