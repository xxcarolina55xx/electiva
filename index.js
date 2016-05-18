// el siguiente archivo es el principal del proyecto, aqui va toda 
// las configuraciones de los distintos paquetes a usar y las 
// configuraciones de la aplicacion la separaremos
// para mantener una distancia entre configuracion de las bibliotecas
// y configuracion de nuestra aplicacion web, nuestra area de trabajo
// es la carpeta app

"use strict";

var Twig = require("twig"),
	express = require('express'),
	app = express(),
	router = require("./config/router.js"),
	twig = require("./config/twig.js");
	port = 8080,
	models = require('./config/models.js');

// inversion de control, en esta tecnica se le pasa el control del
// programa a un modulo externo para evitar codigos muy complejo
// y ademas se puede usar para hacer modulos inteligentes
twig(app);
router(app);

app.listen(port);
console.log("servidor alojado en localhost:" + port)