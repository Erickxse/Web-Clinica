// Crear formulario
const formulario = document.createElement('form');
formulario.setAttribute('id', 'login-form');

// Crear campos de formulario
const usuarioInput = document.createElement('input');
usuarioInput.setAttribute('type', 'text');
usuarioInput.setAttribute('name', 'usuario');
usuarioInput.setAttribute('placeholder', 'Usuario');

const contraseñaInput = document.createElement('input');
contraseñaInput.setAttribute('type', 'password');
contraseñaInput.setAttribute('name', 'contraseña');
contraseñaInput.setAttribute('placeholder', 'Contraseña');

const enviarButton = document.createElement('button');
enviarButton.setAttribute('type', 'submit');
enviarButton.textContent = 'Iniciar Sesión';

// Agregar campos al formulario
formulario.appendChild(usuarioInput);
formulario.appendChild(document.createElement('br'));
formulario.appendChild(contraseñaInput);
formulario.appendChild(document.createElement('br'));
formulario.appendChild(enviarButton);

// Agregar formulario al contenedor en el DOM
const formularioContainer = document.getElementById('formulario-container');
formularioContainer.appendChild(formulario);

// Manejar el evento submit del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener los valores de los campos de formulario
    const usuario = usuarioInput.value;
    const contraseña = contraseñaInput.value;
    
    // Aquí puedes hacer lo que necesites con los valores del formulario, por ejemplo, enviar una solicitud al servidor para autenticar al usuario
    
    // Ejemplo: Mostrar un mensaje de bienvenida en lugar del formulario
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = `¡Bienvenido, ${usuario}!`;
    
    // Limpiar el formulario después del envío
    usuarioInput.value = '';
    contraseñaInput.value = '';
});