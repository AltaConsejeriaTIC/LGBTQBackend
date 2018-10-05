'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { Event } = require('../../database/models/event');
const knex = require('knex');
var util = require('util');


function getEvents(req, res) {
    findEvents()
        .then(events => {
            res.status(200).send(events);
        })
        .catch((e) => console.error(e));
}

function findEvents() {
    return Event.query().where(1, 1);
}

module.exports = {
    getEvents
}