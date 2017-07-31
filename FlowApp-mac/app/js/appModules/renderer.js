var renderer;
//var handlebars = require('handlebars');


function loadroot(root, template){

	$('#' + root ).load('./templates/' + template + '.html');

};



renderer = {
	//Provide render functions
	//hbs: handlebars,
	loadRoot: loadroot

};

module.exports = renderer;
