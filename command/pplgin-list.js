'use strict'
const config = require('../templates')

module.exports = () => {
	console.log(config.tmpl);
	process.exit()
}