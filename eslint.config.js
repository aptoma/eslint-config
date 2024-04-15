'use strict';
const aptoma = require('./lib');
module.exports = [
	aptoma,
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'commonjs'
		}
	}
];
