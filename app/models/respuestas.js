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
			"CREATE TABLE `respuestas` (" +
				"`id` INT NOT NULL AUTO_INCREMENT," +
				"`id_comentario` INT NOT NULL," +
				"`respuesta` VARCHAR(100) NOT NULL," +
				"PRIMARY KEY (`id`)," +
				"INDEX (`id_comentario`)" +
			") ENGINE=InnoDB;", (err) => {
			if (!err)
				console.log("creando la tabla respuestas");
			else
				console.log("la tabla respuestas ya existe");
		});
	}
}