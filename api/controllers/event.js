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

const findEvents = () => Event.query();

function getEvent(req, res) {
    const id = req.swagger.params.id.value;

    findEvent(id)
        .then((event) => {
            if (!event) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                res.status(200).send(event);
            }
        })
        .catch((e) => console.error(e));
}

const findEvent = (id) =>
    Event.query()
    .where('id', id)
    .first();

module.exports = {
    getEvents,
    getEvent
};