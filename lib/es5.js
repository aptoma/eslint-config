'use strict';
var path = require('path'); // eslint-disable-line no-var

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	rules: {
		'vars-on-top': 0,
		'no-var': 0,
		'prefer-arrow-callback': 0,
		'object-shorthand': 0
	}
};
