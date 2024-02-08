// Crear formulario
const formulario = document.createElement('form');
formulario.setAttribute('id', 'receta-form');

// Crear campos de formulario
const medicamentoInput = document.createElement('select');
medicamentoInput.setAttribute('name', 'medicamento');

// Opciones para el select de medicamentos
const opcionesMedicamentos = ['Medicamento 1', 'Medicamento 2', 'Medicamento 3']; // Ejemplo de opciones
opcionesMedicamentos.forEach(opcion => {
    const option = document.createElement('option');
    option.textContent = opcion;
    medicamentoInput.appendChild(option);
});

const NOMBREInput = document.createElement('input');
cantidadInput.setAttribute('type', 'text');
cantidadInput.setAttribute('name', 'nombre');
cantidadInput.setAttribute('placeholder', 'Nombre');

const cantidadInput = document.createElement('input');
cantidadInput.setAttribute('type', 'number');
cantidadInput.setAttribute('name', 'cantidad');
cantidadInput.setAttribute('placeholder', 'Cantidad');

const unidadInput = document.createElement('input');
unidadInput.setAttribute('type', 'text');
unidadInput.setAttribute('name', 'unidad');
unidadInput.setAttribute('placeholder', 'Unidad (g, mg)');

const duracionInput = document.createElement('input');
duracionInput.setAttribute('type', 'text');
duracionInput.setAttribute('name', 'duracion');
duracionInput.setAttribute('placeholder', 'Duración');

const dosisInput = document.createElement('input');
dosisInput.setAttribute('type', 'text');
dosisInput.setAttribute('name', 'dosis');
dosisInput.setAttribute('placeholder', 'Dosis');

const indicacionesInput = document.createElement('textarea');
indicacionesInput.setAttribute('name', 'indicaciones');
indicacionesInput.setAttribute('placeholder', 'Indicaciones');

const guardarButton = document.createElement('button');
guardarButton.setAttribute('type', 'button'); // Cambiado a tipo button para evitar envío del formulario
guardarButton.textContent = 'Guardar Receta';

// Agregar campos al formulario
formulario.appendChild(medicamentoInput);
formulario.appendChild(document.createElement('br'));
formulario.appendChild(cantidadInput);
formulario.appendChild(document.createElement('br'));
formulario.appendChild(unidadInput);
formulario.appendChild(document.createElement('br'));
formulario.appendChild(duracionInput);
formulario.appendChild(document.createElement('br'));
formulario.appendChild(dosisInput);
formulario.appendChild(document.createElement('br'));
formulario.appendChild(indicacionesInput);
formulario.appendChild(document.createElement('br'));
formulario.appendChild(guardarButton);

// Agregar formulario al contenedor en el DOM
const formularioContainer = document.getElementById('formulario-container');
formularioContainer.appendChild(formulario);

// Manejar el evento de clic en el botón de guardar
guardarButton.addEventListener('click', function() {
    // Obtener los valores de los campos de formulario
    const medicamento = medicamentoInput.value;
    const cantidad = cantidadInput.value;
    const unidad = unidadInput.value;
    const duracion = duracionInput.value;
    const dosis = dosisInput.value;
    const indicaciones = indicacionesInput.value;
    
    // Ejemplo: Mostrar un mensaje de éxito
    alert('Receta guardada exitosamente.');
    
    // Limpiar el formulario después de guardar la receta
    formulario.reset();
});