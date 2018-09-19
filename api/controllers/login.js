'use strict';

var util = require('util');

module.exports = {
	login: login
};

function login(req, res)
{
	console.log("Hellooo");
	res.json("Hello");
}