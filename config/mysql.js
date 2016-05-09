// archivo de configuracion de mysql

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
/*console.log(connection);

console.log(dbs(connection));
*/





/*
connection.query("CREATE TABLE `a` (`id` int(11) NOT NULL, `expediente` varchar(15) COLLATE utf8_spanish_ci NOT NULL, `distribucion` varchar(15) COLLATE utf8_spanish_ci NOT NULL, `sala` varchar(15) COLLATE utf8_spanish_ci NOT NULL, `fecha` varchar(15) COLLATE utf8_spanish_ci NOT NULL, `id_usuario` int(11) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;", function(err, rows, fields) {
	if (!err)
		console.log('The solution is: ', rows);
	else
		console.log('Error while performing Query.');
});
*/
//connection.end();