requirejs.config({
	baseUrl : "js/",
	paths   : {
		"jquery"        : "vendors/jquery.min",
		"jsx"           : "vendors/jsx",
		"JSXTransformer": "vendors/JSXTransformer",
		"react"         : "vendors/react.min"
	}
});

require([
	'jsx!application/Application'
], function (Application) {

	Application.initialize()

});

