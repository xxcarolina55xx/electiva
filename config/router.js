// este codigo es meramente nuestro enrutador usando expressjs, 
// y el render twig para mandarle los datos de la base de datos 
// que se renderizara sobre la plantilla de nuestros frondend

// la siguiente funcion es exportada, ella recibe la instancia
// de expressjs
"use strict";
var path = require("path");

var express = require('express'),
	app = express(),
	puerto = 8080,
	twig = require("./twig.js");

// y aqui simplemente programamos los router
app.get('/', function(req, res){
	res.render('index.twig', {
		message : "Hello World"
	});
});
app.get('/a', function(req, res){
	res.render('hi.twig', {
		message : "Hello World"
	});
});
app.get('/publicacion', function(req, res){
	res.render('publicacion.twig');
});
app.get('/login', function(req, res){
	res.render('login.twig');
});
app.get('/register', function(req, res){
	res.render('register.twig');
});
app.get('/reset', function(req, res){
	res.render('reset.twig');
});
/*
app.get('/css/MyCSS.css', function(req, res){
  res.sendFile(__dirname + '/public/css/MyCSS.css');
});
*/

// configuraciones
//app.use(express.static('/public'));
app.use('/public', express.static(path.resolve("./public")));
app.listen(puerto);
console.log("servidor alojado en localhost:" + puerto)

twig(app);