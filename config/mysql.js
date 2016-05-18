// archivo de configuracion de mysql
"use strict";

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'inm_azul'
});
connection.connect();

// la siguiente funcion ejecuta un sql pero recive como parametro
// un llamado "callback", ¿pero que es esto? pues un callback
// es un argumento que recibe una funcion y luego la ejecuta pero
// dentro de otro contexto en este caso nuestra funcion sera
// ejecutada al pasar por connection.query, es aconsejable 
// documentarse sobre este termino
module.exports.query = (sql, callback) => {
	connection.query(sql, callback);

}