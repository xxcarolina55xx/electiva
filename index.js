// el siguiente archivo es el principal del proyecto, aqui va toda 
// las configuraciones de los distintos paquetes a usar y las 
// configuraciones de la aplicacion la separaremos
// para mantener una distancia entre configuracion de las bibliotecas
// y configuracion de nuestra aplicacion web, nuestra area de trabajo
// es la carpeta app

"use strict";

var Twig = require("twig"),
	router = require("./config/router.js"),
	models = require('./config/models.js');