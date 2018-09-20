'use strict';

var util = require('util');
var user = require('../../database/models/user');

module.exports = {
	login: login
};

function login(req, res)
{
	let user;

	console.log("Hellooo");
	res.json("Hello");
}