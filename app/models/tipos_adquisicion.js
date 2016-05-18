"use strict";
var mysql = require("../../config/mysql.js")

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
			"CREATE TABLE `tipos_adquisicion` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`tipo` VARCHAR(30) NOT NULL," +
				"PRIMARY KEY (`id`)" +
			") ENGINE=InnoDB;", (err) => {
			if (!err) {
				console.log("creando la tabla tipos_adquisicion");
				this.llenar();
			}
			else
				console.log("la tabla tipos_adquisicion ya existe");
		});
	}
	llenar() {
		mysql.query(
			// esto es una concatenacion ya que javascript no es lo 
			// suficientemente inteligente como para ver un
			// string de varias lineas
			"INSERT INTO `tipos_adquisicion` (`id`, `tipo`) VALUES (NULL, 'venta'), (NULL, 'alquiler');", function(err) {
			if (!err)
				console.log("llenando la tabla tipos_adquisicion");
			else
				console.log("ha ocurrido un error mientras se llenaba la tabla tipos_adquisicion");
		});
	}
}