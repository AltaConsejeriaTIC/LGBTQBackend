'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { Admin } = require('../../database/models/admin');
var util = require('util');
var admin = require('../../database/models/admin');
const AdminHelper = require('../helpers/admin_helper');
let adminData;
module.exports = {
    login: login,
    deleteAdminToken
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
            res.status(200).send({ token: adminData[0].token, id: adminData[0].id  });
        })
        .catch((e) => console.error(e));
}


function deleteAdminToken(req, res){
  const id = req.swagger.params.id.value;
  const token = req.headers.token;

  AdminHelper.isAuthenticate(token)
      .then((dataAdmin) => {
          if (dataAdmin.length === 1) {
            findAdminById(id)
                  .then(admin => {
                      if( admin.length === 1){
                        tokenDelete( id )
                              .then(response => {
                                  res.status(200).send({ message: 'Token has been deleted successfully' });
                              })
                              .catch((e) => console.error(e));
                      }
                      else{
                        res.status(400).send({ message: 'Invalid ID' });
                      }
                  })
                  .catch((e) => console.error(e));
          } else {
              res.status(403).send({ message: 'Forbidden permissions' });
          }
      })
      .catch(e => console.error(e));
}

const findAdminById = (id) => Admin.query().where('id', id);

const tokenDelete = ( id ) => Admin.query()
    .patchAndFetchById(id, {
        token: null
    });

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