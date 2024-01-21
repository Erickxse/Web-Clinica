<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HISTORIAS CLINICAS | CLINICA</title>
  <link rel="stylesheet" href="css/start.css">
</head>
<body>

  <header>
    <section class="header-container">
      <img class="img-titulo" src="images/ClinicaRenacer.png" alt="Titulo">
    </section>
    <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (isset($_POST["nombre"])) {
                    $nombre = $_POST["nombre"];
                    echo "<p style='margin-left: 900px;'>Bienvenido! $nombre</p>";
                }
            }
            ?>
    <img class="img-logo" src="images/clinic-logo.png" alt="Logo">
  </header>

  <nav>
    <ul class="nav-options">
      <li><a href="#">Calendario</a></li>
      <li><a href="#">Historia Clinica</a></li>
      <li><a href="#">Control de Citas</a></li>
      <li><a href="#">Certificado</a></li>
      <li><a href="#">Documentos</a></li>
      <li><a href="#">Recetario</a></li>
      <li><a href="#">Calendario</a></li>
      <li><a href="#">Graficas Pediatria</a></li>
      <li><a href="#">Informes Medicos</a></li>
    </ul>
  </nav>

  <section class="content">
    <section class="patient-form">
      <h2>Historia Clínica - Datos del Paciente</h2>
      <form action="forms/datos.php" method="post" enctype="multipart/form-data">
        <label for="ci">Cédula de Identidad:</label>
        <input type="number" id="ci" name="ci" required>

        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required>

        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" name="fechaNacimiento" required>

        <label for="sexo">Sexo:</label>
        <select id="sexo" name="sexo" required>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>

        <label for="sintomas">Síntomas:</label>
        <textarea id="sintomas" name="sintomas" rows="4" required></textarea>

        <label for="diagnostico">Diagnóstico:</label>
        <input type="text" id="diagnostico" name="diagnostico">

        <label for="medicamentos">Medicamentos Recetados:</label>
        <textarea id="medicamentos" name="medicamentos" rows="4"></textarea>

        <label for="archivo">Adjuntar Archivo (imagen):</label>
        <input type="file" id="archivo" name="archivo" accept="image/*">

        <button type="submit" name="guardarHistoria">Guardar Historia Clínica</button>
      </form>
    </section>

    <section class="section-info">
        <img src="images/servicios.jpg" alt="servicios">
        <section class="privacy-policy">
            <h2>Política de Privacidad</h2>
            <p>Nos regimos por principios éticos y legales que garantizan la confidencialidad y protección de los datos personales. Solo el personal médico autorizado tiene acceso a dicha información, y se han establecido medidas de seguridad avanzadas para prevenir accesos no autorizados.</p>
          </section>
    </section>

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
