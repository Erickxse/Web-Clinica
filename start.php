<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HISTORIAS CLINICAS | CLINICA</title>
  <script src="https://kit.fontawesome.com/2e20a61ec9.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="css/start.css">
  <script src="js/start.js"></script>
</head>
<body>

  <header>
    <section class="header-container">
      <a href="start.php" class="img-titulo-link">
        <img class="img-titulo estetoscopio-logo" src="images/ClinicaRenacer.png" alt="Titulo">
      </a>
      <img class="burger-icon" src="images/burguer-icon.png" alt="MenuBurger">
    </section>
    <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
          if (isset($_POST["nombre"])) {
              $nombre = $_POST["nombre"];
              echo "<p style='margin-left: 900px;'>Bienvenido! $nombre</p>";
          }
      }
    ?>
    <section class="logo-container">
      <img class="img-logo" src="images/clinic-logo.png" alt="Logo">
      <img class="engranaje-logo" src="images/engranaje-logo.png" alt="Engranaje" id="engranaje-icon">
    </section>
    <section class="dropdown-menu" id="dropdownMenu">
      <ul>
      <li><a href="#"><i class="fas fa-user"></i>Perfil</a></li>
      <li><a href="#"><i class="fas fa-cog"></i>Ajustes</a></li>
      <li><a href="#"><i class="fas fa-sign-out-alt"></i>Cerrar Sesión</a></li>
      </ul>
    </section>
  </header>

  <nav id="navbar">
    <ul>MENU</ul>
    <ul class="nav-options">
      <li><i class="fa-solid fa-hospital-user"></i><a href="#">Historia Clinica</a></li>
      <li data-page="pages/ControlCitas.html"><i class="fa-solid fa-laptop-medical"></i><a href="#">Control de Citas</a></li>
      <li><i class="fa-solid fa-sheet-plastic"></i><a href="#">Certificado</a></li>
      <li><i class="fa-solid fa-folder"></i><a href="#">Documentos</a></li>
      <li><i class="fa-solid fa-file-prescription"></i><a href="#">Recetario</a></li>
      <li><i class="fa-regular fa-calendar-days"></i><a href="#">Calendario</a></li>
      <li><i class="fa-solid fa-chart-column"></i><a href="#">Graficas Pediatria</a></li>
      <li><i class="fa-solid fa-book-medical"></i><a href="#">Informes Medicos</a></li>
    </ul>
  </nav>

  <section class="content" id="mainContent">

  </section>

  <footer>
    <section class="section-footer">
      <a href="https://web.whatsapp.com/"><img class="img-wp" src="images/whatsapp-logo.png" alt="Logo WhatsApp"></a>
      <p>© 2023 CLINICADMIN</p>
      <a href="https://instagram.com"><img class="img-ig" src="images/insta-logo.png" alt="Logo Instagram"></a>
    </section>
  </footer>
</body>
</html>