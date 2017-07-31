 var app;
 var pubsub = require('./pubsub');
 var router = require('./router');
 var render = require('./renderer');
 var models = require('./models');
 var controllers =require('./controllers');



function loadapp(nav,appView,appState) {


 }


 app = {
 	 //make all major modules avaliable through the app object...
 		ps: pubsub,
 		router: router,
 		render: render,
 		models: models,
 		ctrls: controllers,
 		loadApp: loadapp

	 };

module.exports = app;