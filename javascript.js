document.getElementById('hashForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    var hash = document.getElementById('hashInput').value.trim();
  
    // Aquí iría la lógica para validar el hash de blockchain
    // Por ahora, solo mostraremos un mensaje de validación
    if (validateHash(hash)) {
      document.getElementById('validationResult').innerText = 'El hash es válido.';
    } else {
      document.getElementById('validationResult').innerText = 'El hash no es válido.';
    }
  });
  
  function validateHash(hash) {
    // Esta función debería contener la lógica para validar el hash de blockchain
    // Por ahora, simplemente retornamos true si el hash no está vacío
    return hash !== '';
  }
  
  fetch('https://hackavaxbogota-server.onrender.com/items', {
    method: 'GET',
    mode: 'no-cors'
})
.then(response => {
    // No puedes acceder al contenido de la respuesta en modo no-cors
    if (response.ok) {
        Toastify({
            text: "Formulario enviado correctamente",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "#28a745",
            stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
    } else {
        Toastify({
            text: "Error al enviar el formulario",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "#dc3545",
            stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
    }
})
.catch(error => {
    console.error('Error:', error);
    Toastify({
        text: "Error al enviar el formulario",
        duration: 3000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "#dc3545",
        stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
});
