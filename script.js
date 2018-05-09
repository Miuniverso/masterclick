var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector('.menu__list');

hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('visible');
  });
