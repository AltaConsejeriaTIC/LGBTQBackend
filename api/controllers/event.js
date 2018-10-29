'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { Event } = require('../../database/models/event');
const knex = require('knex');
var util = require('util');

function getEvents(req, res) {
    findEvents()
        .then((events) => {
            res.status(200).send(events);
        })
        .catch((e) => console.error(e));
}

const findEvents = () => Event.query().where('finish_date', ">=", getCurrentDate());

function getAllEvents(req, res) {
    findAllEvents()
        .then((events) => {
            res.status(200).send(events);
        })
        .catch((e) => console.error(e));
}

const findAllEvents = () => Event.query()

function getCurrentDate() {
    return new Date();
    //return new Date().toISOString().split('T')[0];
}

function getEvent(req, res) {
    const id = req.swagger.params.id.value;

    findEvent(id)
        .then(event => {
            if (!event) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                res.status(200).send(event);
            }
        })
        .catch((e) => console.error(e));
}

const findEvent = (id) => Event.query().where('id', id).first();

function postEvent(req, res) {
    insert(req.body)
        .then(response => {
            res.status(201).send({ id: response.id });
        })
        .catch(e => console.error(e));
}

const insert = (event) => Event.query().insert(event);

function updateEvent(req, res) {

    const id = req.swagger.params.id.value;

    findEvent(id)
        .then(event => {
            if (!event) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                eventUpdated(req.body, id)
                    .then(response => {
                        res.status(201).send({ id: response.id });
                    })
                    .catch((e) => console.error(e));

            }
        })
        .catch((e) => console.error(e));
}

const eventUpdated = (data, id) => Event.query()
    .patchAndFetchById(id, {
        title: data.title,
        description: data.description,
        place: data.place,
        address: data.address,
        start_date: data.start_date,
        finish_date: data.finish_date,
        start_time: data.start_time,
        finish_time: data.finish_date,
        image: data.image,
        state: data.state,
        latitude: data.latitude,
        longitude: data.longitude,
        updated_at: getCurrentDate()
    });


module.exports = {
    getEvents,
    getAllEvents,
    getEvent,
    postEvent,
    updateEvent
};