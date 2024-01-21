<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/datos.css">
    <title>Datos del Paciente | CLINICA RENACER</title>
</head>

<body>

    <header>
        <h1 style="margin: 0 50px 0 0;">CLINICA RENACER</h1>
        <img src="../images/clinic-logo.png" alt="Logo" style="height: 30px; width: 30px; margin-left: auto;">
    </header>

    <div class="patient-info">
        <h2>Información del Paciente</h2>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["nombre"])) {
          
            $nombre = $_POST["nombre"];
            $apellido = $_POST["apellido"];
            $ci = $_POST["ci"];
            $fechaNacimiento = $_POST["fechaNacimiento"];
            $sexo = $_POST["sexo"];
            $sintomas = $_POST["sintomas"];
            $diagnostico = isset($_POST["diagnostico"]) ? $_POST["diagnostico"] : "No especificado";
            $medicamentos = isset($_POST["medicamentos"]) ? $_POST["medicamentos"] : "No especificado";
            $archivoNombre = isset($_FILES["archivo"]["name"]) ? $_FILES["archivo"]["name"] : "";

            if ($archivoNombre != "") {
              echo "<label>Foto: </label><img src='../images/$archivoNombre' alt='Archivo Adjunto'>";
          }
            echo "<label>Nombre:</label><p>$nombre</p>";
            echo "<label>Apellido:</label><p>$apellido</p>";
            echo "<label>Cédula de Identidad:</label><p>$ci</p>";
            echo "<label>Fecha de Nacimiento:</label><p>$fechaNacimiento</p>";
            echo "<label>Sexo:</label><p>$sexo</p>";
            echo "<label>Síntomas:</label><p>$sintomas</p>";
            echo "<label>Diagnóstico:</label><p>$diagnostico</p>";
            echo "<label>Medicamentos Recetados:</label><p>$medicamentos</p>";

            
        } else {
            echo "<p>No se recibieron datos del formulario.</p>";
        }
        ?>
    </div>

    <footer>
        <section class="section-footer">
            <a href="https://web.whatsapp.com/"><img src="../images/whatsapp-logo.png" alt="Logo WhatsApp"
                    style="height: 30px; width: 30px; margin-right: auto;"></a>
            <p>© 2023 CLINICADMIN</p>
            <a href="https://instagram.com"><img src="../images/insta-logo.png" alt="Logo Instagram"
                    style="height: 30px; width: 30px; margin-left: auto;"></a>
        </section>
    </footer>

</body>

</html>
