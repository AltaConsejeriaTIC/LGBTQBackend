'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { Admin } = require('../../database/models/admin');
var util = require('util');
var admin = require('../../database/models/admin');
let adminData;
module.exports = {
    login: login
};

function login(req, res) {
    const form = {
        email: req.body.email,
        password: req.body.password
    };

    findAdmin(form.email)
        .then((foundAdmin) => {
            adminData = foundAdmin;
            return checkPassword(form.password, foundAdmin);
        })
        .then((res) => createToken())
        .then((token) => updateAdmintoken(token))
        .then(() => {
            res.status(200).send({ token: adminData[0].token });
        })
        .catch((e) => console.error(e));
}

const createToken = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (e, data) => {
            e ? reject(e) : resolve(data.toString('base64'));
        });
    });
};

const findAdmin = (email) => Admin.query().where('email', email);

const checkPassword = (password, foundAdmin) => {
    return new Promise((resolve, reject) =>
        bcrypt.compare(password, foundAdmin[0].password_digest, (e, response) => {
            if (e) {
                reject(e);
            } else if (response) {
                resolve(response);
            } else {
                reject(new Error('Wrong password'));
            }
        })
    );
};

const updateAdmintoken = (genToken) => {
    adminData[0].token = genToken;
    return Admin.query()
        .patch({ token: genToken })
        .where('id', adminData[0].id);
};