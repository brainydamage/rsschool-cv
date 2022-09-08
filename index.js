const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('opened');
  overlay.classList.toggle('opened');
});

const links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    burgerMenu.classList.toggle('opened');
    overlay.classList.toggle('opened');
  });
}