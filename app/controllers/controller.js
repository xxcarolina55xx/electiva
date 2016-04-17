// la siguiente funcion es exportada
module.exports = (Cat) => {
	var kitty = new Cat({ name: 'Zildjian' });
	kitty.save(function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('meow');
	}
});
}