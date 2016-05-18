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
			// suficientemente inteligente como para ver un
			// string de varias lineas
			"CREATE TABLE `telefonos` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`id_usuario` INT NOT NULL," +
				"`numero` INT NOT NULL," +
				"PRIMARY KEY (`id`)," +
				"INDEX (`id_usuario`)" +
			") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla telefonos");
			else
				console.log("la tabla telefonos ya existe");
		});
	}
	agregar() {
		console.log("luego se creara");
	}
	eliminar() {
		console.log("luego se creara");
	}
	editar() {
		console.log("luego se creara");
	}
	ver() {
		console.log("luego se creara");
	}
	ver_por_usuario() {
		console.log("luego se creara");
	}
}