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
			"CREATE TABLE `usuarios` (" +
				"`id` int(11) NOT NULL," +
				"`nombres` varchar(30) NOT NULL," +
				"`apellidos` varchar(30) NOT NULL," +
				"`cedula` int(8) NOT NULL," +
				"`usuario` varchar(30) NOT NULL," +
				"`contrasena` varchar(30) NOT NULL," +
				"`tipo` varchar(30) NOT NULL," +
				"`email` varchar(50) NOT NULL," +
				"`foto` varchar(100) NOT NULL," +
				"`id_inmueble` int(11) NOT NULL," +
				"`id_telefono` int(11) NOT NULL," +
				"`id_comentarios` int(11) NOT NULL" +
			") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;", function(err) {
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