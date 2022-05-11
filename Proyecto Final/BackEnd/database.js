const mongoose = require('mongoose');

//conexión a la base de datos
const URI = 'mongodb://localhost/crud';

//promesa para asegurar la conexión de la base
mongoose.connect(URI)
    .then(db => console.log('conectado a base de datos'))
    .catch(err =>console.log(err));


module.exports = mongoose; //devuelve conexión