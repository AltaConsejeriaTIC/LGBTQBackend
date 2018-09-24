'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const {User} = require('../../database/models/user');
var util = require('util');
var user = require('../../database/models/user');
let userData;
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
		userData = foundUser;
		return checkPassword(form.password, foundUser)
	})
	.then((res) => createToken())
	.then(token => updateUsertoken(token))
	.then(() => {
		delete user.password_digest
		res.status(200).json({"token" : user})
	})
	.catch((e) => console.error(e));

}

const createToken= () => {
	return new Promise((resolve, reject) => {
		crypto.randomBytes(16, (e, data) => {
			e ? reject(e) : resolve(data.toString('base64'))
		})
	})
}

const findUser = (email) => {
	return User.query().where('email', email);
};

const checkPassword = (password, foundUser) => {
	return new Promise((resolve, reject) =>
	bcrypt.compare(password, foundUser[0].password_digest, (e, response) => {
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
};

const updateUsertoken = (genToken) => {
	return User.query().patch({token: genToken}).where('id', userData[0].id)
};