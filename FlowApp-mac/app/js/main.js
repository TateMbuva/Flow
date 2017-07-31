
var app = require('./js/appModules/app');

$('document').ready(function(){

  var rootEl = 'contentone';
  var rootFile = 'layout';

  //app.render.loadRoot(rootEl, rootFile);

  $('button').on('click', function(e) { 
  		e.preventDefault();
  		
  		//$('.appSideMenu').attr('class', 'slideOutLeft');
  		 $('.appSideMenu').toggle(600, "linear");

  		
  		//$('.appMain').toggleClass('col-md-7', 1000).toggleClass('col-md-9', 800);
  });





  

 



  });










 


 