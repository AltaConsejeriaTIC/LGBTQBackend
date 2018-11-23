'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { User } = require('../../database/models/user');
const knex = require('knex');
var util = require('util');
const  AdminHelper = require('../helpers/admin_helper');

function getUsers(req, res) {
    findUsers()
        .then((users) => {
            res.status(200).send(users);
        })
        .catch((e) => console.error(e));
}

const findUsers = () => User.query();

function getCurrentDate() {
    return new Date();
}

function getUser(req, res) {
    const id = req.swagger.params.id.value;

    findUser(id)
        .then(user => {
            if (!user) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                res.status(200).send(user);
            }
        })
        .catch((e) => console.error(e));
}

const findUser = (id) => User.query().where('id', id).first();

function postUser(req, res) {
    insert(req.body)
        .then(response => {
            res.status(201).send({ id: response.id });
        })
        .catch(e => console.error(e));
}

const insert = (user) => User.query().insert(user);

function updateUser(req, res) {

    const id = req.swagger.params.id.value;
    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
    .then( (dataAdmin)=>{
      if( dataAdmin.length === 1 ){
        findUser(id)
        .then(user => {
            if (!user) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                userUpdated(req.body, id)
                    .then(response => {
                        res.status(201).send({ id: response.id });
                    })
                    .catch((e) => console.error(e));

            }
        })
        .catch((e) => console.error(e));
      }else{
        res.status(403).send({ message: 'Forbidden permissions' });
      }
    })
    .catch(e => console.error(e));

    
}

const userUpdated = (data, id) => User.query()
    .patchAndFetchById(id, {
        document_type: data.document_type,
        document_number: data.document_number,
        first_name: data.first_name,
        last_name: data.last_name,
        addres: data.addres,
        email: data.email,
        phone: data.phone,
        image: data.image,
        sex_birth: data.sex_birth,
        sexual_orientation: data.sexual_orientation,
        gender: data.gender,
        birth_day: data.birth_day,
        updated_at: getCurrentDate()
    });


module.exports = {
    getUsers,
    getUser,
    postUser,
    updateUser
};