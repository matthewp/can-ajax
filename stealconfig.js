steal.config({
	map: {
		"*": {
			"jquery/jquery.js" : "jquery",
			"can/util/util.js": "bower_components/canjs/steal/canjs/util/jquery/jquery.js"
		}
	},
	paths: {
    "can/": "bower_components/canjs/steal/canjs/",
		"jquery": "bower_components/jquery/jquery.js"
	},
	shim : {
		jquery: {
			exports: "jQuery"
		}
	},
	ext: {
		js: "js",
		css: "css",
		less: "steal/less/less.js",
		mustache: "can/view/mustache/mustache.js"
	}
})
