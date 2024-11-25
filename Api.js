const express = require('express');
const router = express.Router();

// Simulación de una base de datos
const users = [];


router.post('/login', (req, res) => {
  const { email, contrasena } = req.body;


  const user = users.find(u => u.email === email && u.contrasena === contrasena);
  if (user) {
    res.json({ success: true, message: 'Login exitoso', user });
  } else {
    res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
  }
});

// Ruta para guardar información demográfica
router.post('/demografica', (req, res) => {
  const { id_usuario, demografica } = req.body;


  const user = users.find(u => u.id_usuario === id_usuario);
  if (user) {
    user.demografica = demografica;
    res.json({ success: true, message: 'Información demográfica guardada' });
  } else {
    res.status(404).json({ success: false, message: 'Usuario no encontrado' });
  }
});

// Ruta para manejar el test
router.post('/test', (req, res) => {
  const { id_usuario, respuestas } = req.body;

  // Encuentra al usuario y guarda las respuestas del test
  const user = users.find(u => u.id_usuario === id_usuario);
  if (user) {
    user.test = respuestas;
    res.json({ success: true, message: 'Test guardado' });
  } else {
    res.status(404).json({ success: false, message: 'Usuario no encontrado' });
  }
});

module.exports = router;
