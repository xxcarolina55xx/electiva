var comentarios = require("../models/comentarios.js");
var preguntas = require("../models/comentarios.js");
var respuestas = require("../models/comentarios.js");

module.exports = new class {
	constructor() {
		
	}
	// crear base de datos
	comentar() {
		mysql.query("CREATE DATABASE `inm_azul` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;", function(err) {
			if (!err)
				console.log("creando base de datos");
			else
				console.log("la base de datos inm_azul ya existe");
		});
	}
}