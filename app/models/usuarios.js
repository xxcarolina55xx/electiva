"use strict";
var mysql = require("../../config/mysql.js");

module.exports = new class {
	constructor() {
		this.crear();
	}
	// crear tabla
	crear() {
		mysql.query(
			// esto es una concatenacion ya que javascript no es lo 
			// suficientemente INTeligente como para ver un
			// string de varias lineas
			"CREATE TABLE `usuarios` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`nombres` VARCHAR(30) NOT NULL," +
				"`apellidos` VARCHAR(30) NOT NULL," +
				"`cedula` INT(8) NOT NULL," +
				"`usuario` VARCHAR(30) NOT NULL," +
				"`contrasena` VARCHAR(30) NOT NULL," +
				"`id_tipo` INT NOT NULL," +
				"`email` VARCHAR(50) NOT NULL," +
				"`foto` VARCHAR(100) NOT NULL," +
				"PRIMARY KEY (`id`)," +
				"INDEX (`id_tipo`)" +
			") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla usuarios");
			else
				console.log("la tabla usuarios ya existe");
		});
	}
	registrar() {
		console.log("luego se creara");
	}
	entrar() {
		console.log("luego se creara");
	}
	ver() {
		console.log("luego se creara");
	}
}