// Validación del formulario de contacto
document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const motivo = document.getElementById('motivo').value;
    const email = document.getElementById('email').value;

    // Validar que los campos no estén vacíos
    if (nombre === '' || motivo === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Si todo es válido, mostrar un mensaje de éxito
    alert('Formulario enviado con éxito.');
});
