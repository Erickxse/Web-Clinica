//start.js
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var contentSection = document.querySelector('.content');
  var burgerIcon = document.querySelector('.burger-icon');
  var imgTitulo = document.querySelector('.img-titulo');
  var imgLogo = document.querySelector('.img-logo');
  var dropdownMenu = document.getElementById('dropdownMenu');
  

  const navOptions = document.querySelectorAll('#navOptions li');

  
  burgerIcon.addEventListener('click', function () {
    navbar.classList.toggle('hide-navbar');
    contentSection.classList.toggle('expand-content');

    imgTitulo.classList.add('shrink');

    setTimeout(function () {
      if (imgTitulo.src.includes('ClinicaRenacer.png')) {
        imgTitulo.src = '../images/estetoscopio-logo.png'; 
        imgTitulo.alt = 'Estetoscopio';
        imgTitulo.style.height = '30px'; 
        imgTitulo.style.width = '30px';
      } else {
        imgTitulo.src = '../images/ClinicaRenacer.png'; 
        imgTitulo.alt = 'Titulo';
        imgTitulo.style.height = '40px'; 
        imgTitulo.style.width = '300px';
      }

      imgTitulo.classList.remove('shrink');
    }, 300);

    
  });

  var isDropdownVisible = false;

  imgLogo.addEventListener('click', function () {
    if (isDropdownVisible) {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }

    isDropdownVisible = !isDropdownVisible;
  });
  
  imgLogo.addEventListener('mouseover', function () {
    imgLogo.classList.add('flip');
    imgLogo.src = '../images/engranaje-logo.png';
  });

  imgLogo.addEventListener('mouseout', function () {
    imgLogo.classList.remove('flip');
    imgLogo.src = '../images/clinic-logo.png';
  });


  navOptions.forEach(option => {
    option.addEventListener('click', function () {
      var pagePath = this.dataset.page; // Asegúrate de tener el atributo data-page en tus elementos li

      // Restaltar la opción seleccionada
      navOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');

      // Redirigir a la página correspondiente
      window.location.href = pagePath;
    });
  });
});