const express = require('express');
const bodyParser = require('body-parser');
//const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());

// Conexión a la base de datos
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mi_base_de_datos'
// });

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});


app.post('/api/demografica', (req, res) => {
    const { tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, contraseña, numero_celular } = req.body;

    // Inserción en la base de datos
    const query = 'INSERT INTO demografica (tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, contraseña, numero_celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, contraseña, numero_celular], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error al guardar los datos' });
        }
        res.status(200).json({ success: true, message: 'Datos guardados correctamente' });
    });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto  🚀 3000');
});
