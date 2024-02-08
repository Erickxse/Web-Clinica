document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe por defecto

    // Obtener los valores del formulario
    var medicamento = document.getElementById("medicamento").value;
    var cantidad = document.getElementById("cantidad").value;
    var unidad = document.getElementById("unidad").value;

    // Aquí puedes agregar código para validar los campos si es necesario

    // Ejemplo de mostrar los valores del formulario en la consola
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Mensaje: " + mensaje);

    // Aquí podrías enviar los datos del formulario a través de una petición AJAX o hacer cualquier otra acción

    // Por ejemplo, podrías mostrar un mensaje de éxito al usuario
    alert("¡Mensaje enviado correctamente!");
  });