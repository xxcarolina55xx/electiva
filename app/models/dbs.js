var mysql = require("../../config/mysql.js")

module.exports = new class {
	constructor() {
		this.crear();
	}
	// crear base de datos
	crear() {
		mysql.query("CREATE DATABASE `inm_azul` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;", function(err) {
			if (!err)
				console.log("creando base de datos");
			else
				console.log("la base de datos inm_azul ya existe");
		});
	}
}