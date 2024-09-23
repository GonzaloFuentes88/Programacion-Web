document.getElementById('tipoUsuario').addEventListener('change', function() {
    const tipoUsuario = this.value;
    
    const formAlumno = document.getElementById('formAlumno');
    const formEmpresa = document.getElementById('formEmpresa');

    // Ocultar ambos formularios al inicio
    formAlumno.classList.add('d-none');
    formEmpresa.classList.add('d-none');

    // Mostrar el formulario correspondiente según la selección
    if (tipoUsuario === 'alumno') {
        formAlumno.classList.remove('d-none');
    } else if (tipoUsuario === 'empresa') {
        formEmpresa.classList.remove('d-none');
    }
});

// Validación de los formularios (Opcional)
document.getElementById('formAlumno').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Solicitud de Alumno enviada.');
});

document.getElementById('formEmpresa').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Solicitud de Empresa enviada.');
});
