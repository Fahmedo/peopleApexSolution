let cards = document.querySelectorAll('.card');
let navItem = document.querySelectorAll('.nav-item');
let stackArea = document.querySelector('.stack-area');
let navOption = document.querySelector('.nav-option');
let openBtn = document.querySelector('.open-button');
let closeBtn = document.querySelector('.close-button');

function rotateCards() {
  let angle = 0;
  cards.forEach((card) => {
    if (card.classList.contains('active')) {
      card.style.transform = `translate(-50%, -230vh) rotate(-48deg)`;
    } else {
      card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      angle = angle - 5;
    }
  });
}

rotateCards();

window.addEventListener('scroll', () => {
  let proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
  if (proportion <= 0) {
    let n = cards.length;
    let index = Math.ceil((proportion * n) / 2);
    index = Math.abs(index) - 1;
    for (let i = 0; i < n; i++) {
      if (i <= index) {
        cards[i].classList.add('active');
      } else {
        cards[i].classList.remove('active');
      }
    }
    rotateCards();
  }
});

//Code for responsiveness

// function adjust() {
//   let windowWidth = window.innerWidth;
//   let left = document.querySelector('.left');
//   left.remove();
//   if (windowWidth < 800) {
//     stackArea.insertAdjacentElement('beforebegin', left);
//   } else {
//     stackArea.insertAdjacentElement('afterbegin', left);
//   }
// }
// adjust();
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
//detect Resize

// window.addEventListener('resize', adjust);
