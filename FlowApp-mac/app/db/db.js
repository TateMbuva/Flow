const ipcRenderer = require('electron').ipcRenderer;
var loki = require('lokijs');

var db = new loki('db.json');
var pfiles = db.addCollection('pfiles');

pfiles.insert({name:'Sleipnir', legs: 8});
pfiles.insert({name:'Jormungandr', legs: 0});
pfiles.insert({name:'Hel', legs: 2});


var file = pfiles.get(2);







ipcRenderer.send('db-status', file);
