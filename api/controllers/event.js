'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { Event } = require('../../database/models/event');
var util = require('util');



module.exports = {
    async getPosts() {
        const Events = await Event.find({})
            // El sort se encaraga de ordenar los posts de más reciente a menos usando releaseDate, que es la fecha de lanzamiento de estos.
        return Events
    },
};