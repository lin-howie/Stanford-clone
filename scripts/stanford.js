// Screen length watchers
function updateHeaderText() {
  const stanfordText = document.querySelector('.stanford-university-text');

  if(window.innerWidth <= 570) {
    stanfordText.innerText = 'Stanford'
  } else {
    stanfordText.innerText = 'Stanford University'
  }
  console.log('function ran');
}

// run on load
updateHeaderText(); // same as window.addEventListener('load', updateHeaderText());
// run on resize
window.addEventListener('resize', updateHeaderText);
