'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const User = require('../../database/models/user');
var util = require('util');
var user = require('../../database/models/user');

module.exports = {
	login: login
};

function login(req, res)
{
	const form = {
		email: req.body.email,
		password: req.body.password
	};

	findUser(form.email)
	.then(foundUser => {
		user = foundUser
		return checkPassword(form.password, foundUser)
	})
	.then((res) => createToken())
	.then(token => updateUsertoken(token, user))
	.then(() => {
		delete user.password_digest
		res.status(200).json(user)
	})
	.catch((e) => console.error(e));

}

const findUser = (email) => {
	return user.query().where('email', email);
}

const checkPassword = (password, foundUser) => {
	return new Promise((resolve, reject) =>
	bcrypt.compare(password, foundUser.password_digest, (e, response) => {
		if(e){
			reject(e)
		}
		else if (response) {
			resolve(response)
		} else {
			reject(new Error('Wrong password'))
		}
	})
	)
}

const updateUserToken = (genToken, user) => {
	return user.query().patch({token: genToken}).where('id', user.id)
}