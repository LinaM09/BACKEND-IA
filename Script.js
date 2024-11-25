// Variables globales
let userId;

// Función para iniciar sesión
function login() {
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;

  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, contrasena }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Login exitoso') {
        userId = data.user.id_usuario;
        window.location.href = 'informacion_demografica.html';
      } else {
        alert(data.message);
      }
    })
    .catch(error => alert('Error en el login: ' + error));
}

// Función para guardar la información demográfica
function guardarDemografica() {
  const edad = document.getElementById('edad').value;
  const direccion = document.getElementById('direccion').value;

  fetch('http://localhost:3000/api/demografica', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id_usuario: userId,
      demografica: { edad, direccion }
    }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      window.location.href = 'test.html';
    })
    .catch(error => alert('Error al guardar información demográfica: ' + error));
}

// Función para guardar las respuestas del test
function guardarTest() {
  const respuesta1 = document.getElementById('respuesta1').value;
  const respuesta2 = document.getElementById('respuesta2').value;

  fetch('http://localhost:3000/api/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id_usuario: userId,
      respuestas: { respuesta1, respuesta2 }
    }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      // Puedes redirigir a otra página o hacer lo que necesites
    })
    .catch(error => alert('Error al guardar respuestas del test: ' + error));
}
