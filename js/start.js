//start.js


document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var contentSection = document.querySelector('.content');
  var burgerIcon = document.querySelector('.burger-icon');
  var imgTitulo = document.querySelector('.img-titulo');

  burgerIcon.addEventListener('click', function () {
    navbar.classList.toggle('hide-navbar');
    contentSection.classList.toggle('expand-content');

    // Cambiar la imagen de img-titulo al hacer clic
    imgTitulo.classList.add('shrink');

    setTimeout(function () {
      if (imgTitulo.src.includes('ClinicaRenacer.png')) {
        imgTitulo.src = 'images/estetoscopio-logo.png'; 
        imgTitulo.alt = 'Estetoscopio';
        imgTitulo.style.height = '30px'; 
        imgTitulo.style.width = '30px';
      } else {
        imgTitulo.src = 'images/ClinicaRenacer.png'; 
        imgTitulo.alt = 'Titulo';
        imgTitulo.style.height = '40px'; 
        imgTitulo.style.width = '300px';
      }

      imgTitulo.classList.remove('shrink');
    }, 300);
  });
});




