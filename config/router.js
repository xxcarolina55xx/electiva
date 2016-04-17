// este codigo es meramente nuestro enrutador usando expressjs, 
// y el render twig para mandarle los datos de la base de datos 
// que se renderizara sobre la plantilla de nuestros frondend

// la siguiente funcion es exportada, ella recibe la instancia
// de expressjs
module.exports = (app) => {
	// y aqui simplemente programamos los router
	app.get('/', function(req, res){
		res.render('index.twig', {
			message : "Hello World"
		});
	});
}