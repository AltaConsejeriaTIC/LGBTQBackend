'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { User } = require('../../database/models/user');
const knex = require('knex');
var util = require('util');

function getUsers(req, res) {
    findUsers()
        .then((users) => {
            res.status(200).send(users);
        })
        .catch((e) => console.error(e));
}

const findUsers = () => User.query().where('finish_date', ">=", getCurrentDate());

function getCurrentDate() {
    return new Date();
    //return new Date().toISOString().split('T')[0];
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