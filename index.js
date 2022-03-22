//despues de instalar esta libreria para leer archivos .env
require('dotenv').config();

var express = require('express')

//instalamos -> npm i cors    
var cors = require('cors');


//Importamos la base de datos
var { dbConnection } = require('./database/config');

var app = express();

//Configurar CORS
//Cada vea que se haga una petición para por este CORS
app.use(cors());

//BASE DE DATOS
// tiene que estar depues de la coneccion de express
dbConnection();

// RUTAS
//req -> es la solicitud de cliente
//res -> es la respuesta del servidor
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });

});

//nuestro puerto esta en la variable PORT del archivo .env
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});