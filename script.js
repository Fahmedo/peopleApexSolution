let navItem = document.querySelectorAll('.nav-item');
let navOption = document.querySelector('.nav-option');
let openBtn = document.querySelector('.open-button');
let closeBtn = document.querySelector('.close-button');
let toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  let windowHeight = window.scrollY;
  if (windowHeight > 500) {
    console.log('scroll');
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
function showMenu() {
  navOption.style.display = 'flex';
  closeBtn.style.display = 'block';
}
function hideMenu() {
  navOption.style.display = 'none';
  closeBtn.style.display = 'none';
}
function itemClose() {
  hideMenu();
}
