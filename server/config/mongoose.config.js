const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/castillo_webdevelopment', {})
    .then(res => console.log('Conexión con base de datos exitose'))
    .catch(res =>console.log('No se pudo conectar a la base de datos'))