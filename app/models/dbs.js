var mysql = require("../../config/mysql.js")

module.exports = new class {
	constructor() {
		this.crear();
	}
	// crear base de datos
	crear() {
		mysql.query("CREATE DATABASE `inm_azul` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;", (err) => {
			if (!err)
				console.log("creando base de datos inm_azul");
			else
				// evitar que inprima el objeto con un string vacio
				console.warn("" + err);
		});
	}
}