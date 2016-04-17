// la siguiente funcion es exportada, ella recibe la instancia
// de expressjs
module.exports = (app) => {
	// el siguiente codigo configura twig en expressjs
	app.set("twig options", {
		strict_variables: false
	});
	app.set('views', './app/views');
}