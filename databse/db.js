const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_db'
        /* host: 'jesmerado.salesianas.es',
        port: '8443',
        user: 'jesmerado',
        password: '#Javier01#',
        database: 'jesmeado_crud_nodejs_db' */
})

conexion.connect((err) => {
    if (err) {
        console.log('Error inesperado: ' + err);
        return
    }
    console.log('¡Conectado a la BD!');
})

module.exports = conexion;