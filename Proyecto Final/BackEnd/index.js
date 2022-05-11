const express = require('express'); //solicitar el modulo y reutilizar 
const req = require('express/lib/request');
const morgan = require('morgan');
const cors = require('cors');
const app = express(); //funcionalidad del server
const {mongoose} = require('./database');



//Configración del servidor
app.set('port',process.env.PORT||3000); //utilizar el puerto generado por el navegador o el puerto asignado (3000)


//Procesamiento de datos (Middlewares)
app.use(morgan('dev')); //que hace al llegar una petición en consola
app.use(express.json()); //convertir datos de tipo json que vienen del navegador
app.use(cors({origin: 'http://localhost:4200'})); //conexión de servidores


//Rutas
app.use('/api/productos',require('./routes/productos.routes'));


//Inicio del servidor
app.listen(app.get('port'),()=>{
    console.log("Servidor corriendo en el puerto",app.get('port'));
});
