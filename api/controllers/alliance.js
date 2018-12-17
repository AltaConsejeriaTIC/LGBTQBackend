'use strict';

const { Alliance } = require('../../database/models/alliance');
const AdminHelper = require('../helpers/admin_helper');
const Joi = require('joi');

const schema = Joi.object().keys({
    id: Joi.number(),
    name: Joi.string().max(45).required(),
    description: Joi.string().min(150).max(300).required(),
    offer: Joi.string().min(300).max(700).required(),
    website: Joi.string().allow(''),
    phone: Joi.string().regex(/^([\(]?\+[0-9]{1,3}[\)]?)?[0-9\s]{7,20}$/).allow(''),
    email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]{2,}$/i).required(),
    state: Joi.boolean().default(true),
    finish_date: Joi.date().required(),
    image: Joi.string().required(),
    created_at: Joi.date(),
    updated_at: Joi.date()
});

function getAllAlliances(req, res) {
    findAllAlliances()
        .then((news) => {
            res.status(200).send(news);
        })
        .catch((e) => console.error(e));
}

const findAllAlliances = () => Alliance.query().orderBy('updated_at','desc');

function getAlliances(req, res) {
    findAlliances()
        .then((news) => {
            res.status(200).send(news);
        })
        .catch((e) => console.error(e));
}

const findAlliances = () => Alliance.query().where('state', true).orderBy('updated_at','desc');

function getAlliance(req, res) {
    const id = req.swagger.params.id.value;

    findAlliance(id)
        .then(alliance => {
            if (!alliance) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                res.status(200).send(alliance);
            }
        })
        .catch((e) => console.error(e));
}

const findAlliance = (id) => Alliance.query().where('id', id).first();

function postAlliance(req, res) {
    const token = req.headers.token;
    const data = req.body;
    Joi.validate(data, schema, (err, value) => {

        if (err) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                error: err
            });
        } else {
            AdminHelper.isAuthenticate(token)
                .then((dataAdmin) => {
                    if (dataAdmin.length === 1) {
                        insert(req.body)
                            .then(response => {
                                res.status(201).send({ id: response.id });
                            })
                            .catch(e => console.error(e));
                    } else {
                        res.status(403).send({ message: 'Forbidden permissions' });
                    }
                })
                .catch(e => console.error(e));
        }

    });
}

const insert = (alliance) => Alliance.query().insert(alliance);

function updateAlliance(req, res) {

    const id = req.swagger.params.id.value;
    const data = req.body;
    const token = req.headers.token;
    Joi.validate(data, schema, (err, value) => {

        if (err) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                error: err
            });
        } else {
            AdminHelper.isAuthenticate(token)
                .then((dataAdmin) => {
                    if (dataAdmin.length === 1) {
                        findAlliance(id)
                            .then(alliance => {
                                if (!alliance) {
                                    res.status(400).send({ message: 'Invalid ID' });
                                } else {
                                    allianceUpdated(req.body, id)
                                        .then(response => {
                                            res.status(201).send({ id: response.id });
                                        })
                                        .catch((e) => console.error(e));

                                }
                            })
                            .catch((e) => console.error(e));
                    } else {
                        res.status(403).send({ message: 'Forbidden permissions' });
                    }
                })
                .catch(e => console.error(e));
        }
    });
}

const allianceUpdated = (data, id) => Alliance.query()
    .patchAndFetchById(id, {
        name: data.name,
        description: data.description,
        offer: data.offer,
        website: data.website,
        email: data.email,
        phone: data.phone,
        state: data.state,
        finish_date: data.finish_date,
        image: data.image,
        updated_at: new Date()
    });

function updateStateAlliance(req, res) {

    const id = req.swagger.params.id.value;
    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
        .then((dataAdmin) => {
            if (dataAdmin.length === 1) {
                findAlliance(id)
                    .then(alliance => {
                        if (!alliance) {
                            res.status(400).send({ message: 'Invalid ID' });
                        } else {
                            stateUpdated(alliance.state, id)
                                .then(response => {
                                    res.status(200).send({ id: response.id });
                                })
                                .catch((e) => console.error(e));

                        }
                    })
                    .catch((e) => console.error(e));
            } else {
                res.status(403).send({ message: 'Forbidden permissions' });
            }
        })
        .catch(e => console.error(e));
}

const stateUpdated = (data, id) => Alliance.query()
    .patchAndFetchById(id, {
        state: !data,
        updated_at: new Date()
    });


module.exports = {
    getAlliances,
    getAllAlliances,
    getAlliance,
    postAlliance,
    updateAlliance,
    updateStateAlliance,
};