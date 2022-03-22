var mongoose = require('mongoose');

var dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {});

        console.log('Base de datos en linea');
    } catch (error) {
        console.error(error);
        throw new Error('Error trying to connect');
    }

}

module.exports = {
    //esportamos la funsion dbConnection base de datos para usarla en otro lugar
    //lo vamos a importar en el index.js
    dbConnection
}