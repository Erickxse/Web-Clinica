//start.js


document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var contentSection = document.querySelector('.content');
  var burgerIcon = document.querySelector('.burger-icon');

  burgerIcon.addEventListener('click', function () {
    navbar.classList.toggle('hide-navbar');
    contentSection.classList.toggle('expand-content');
  });
});

