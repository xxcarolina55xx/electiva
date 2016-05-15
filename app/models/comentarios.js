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
			"CREATE TABLE `comentarios` (" +
				"`id` int(11) NOT NULL," +
				"`id_pregunta` int(11) NOT NULL," +
				"`id_respuesta` int(11) NOT NULL," +
				"`id_usuario` int(11) NOT NULL" +
			") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;", function(err) {
			if (!err)
				console.log("creando la tabla comentarios");
			else
				console.log("la tabla comentarios ya existe");
		});
	}
	comentar() {
		console.log("luego se creara");
	}
	eliminar() {
		console.log("luego se creara");
	}
	ver() {
		console.log("luego se creara");
	}
	ver_de_inmobiliaria() {
		console.log("luego se creara");
	}
}