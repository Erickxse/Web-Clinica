//start.js

document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a elementos HTML
    const icono = document.querySelector('.burger-icon');
    const nav = document.querySelector('nav');
    const imgTitulo = document.querySelector('.img-titulo'); // Cambiado a .img-titulo
  
    // Manejar el clic en el icono
    icono.addEventListener('click', function() {
      // Alternar la visibilidad del nav
      nav.classList.toggle('oculto');
  
      // Cambiar la imagen del título
      if (imgTitulo.src.includes('ClinicaRenacer.png')) {
        imgTitulo.src = '../images/estetoscopio-logo.png'; 
      } else {
        imgTitulo.src = '../images/ClinicaRenacer.png'; 
      }
    });
  });
  