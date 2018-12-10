'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { Event } = require('../../database/models/event');
const knex = require('knex');
var util = require('util');
const AdminHelper = require('../helpers/admin_helper');
const Joi = require('joi');

const schema = Joi.object().keys({
    id: Joi.number(),
    title: Joi.string().max(50).required(),
    description: Joi.string().min(150).max(800).required(),
    place: Joi.string(),
    address: Joi.string().required(),
    start_date: Joi.date().required(),
    finish_date: Joi.date().required(),
    start_time: Joi.string().required(),
    finish_time: Joi.string().required(),
    image: Joi.string().required(),
    state: Joi.boolean().default(true),
    latitude: Joi.number(),
    longitude: Joi.number(),
    created_at: Joi.date(),
    updated_at: Joi.date()
  });
  
  
function getEvents(req, res) {
    findEvents()
        .then((events) => {
            res.status(200).send(events);
        })
        .catch((e) => console.error(e));
}

const findEvents = () => Event.query().where('finish_date', ">=", new Date() ).andWhere('state', true).orderBy('start_date');

function getAllEvents(req, res) {
    findAllEvents()
        .then((events) => {
            res.status(200).send(events);
        })
        .catch((e) => console.error(e));
}

const findAllEvents = () => Event.query().where('finish_date', ">=", new Date() ).orderBy('start_date');

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

const insert = (event) => Event.query().insert(event);

function updateStateEvent(req, res) {

    const id = req.swagger.params.id.value;
    const token = req.headers.token;

    AdminHelper.isAuthenticate(token)
        .then((dataAdmin) => {
            if (dataAdmin.length === 1) {
                findEvent(id)
                    .then(event => {
                        if (!event) {
                            res.status(400).send({ message: 'Invalid ID' });
                        } else {
                            stateUpdated(event.state, id)
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

function updateEvent(req, res) {

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
                  } else {
                      res.status(403).send({ message: 'Forbidden permissions' });
                  }
              })
              .catch(e => console.error(e));
      }
  });
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
        finish_time: data.finish_time,
        image: data.image,
        state: data.state,
        latitude: data.latitude,
        longitude: data.longitude,
        updated_at: new Date()
    });

const stateUpdated = (data, id) => Event.query()
    .patchAndFetchById(id, {
        state: !data,
        updated_at: new Date()
    });


module.exports = {
    getEvents,
    getAllEvents,
    getEvent,
    postEvent,
    updateEvent,
    updateStateEvent
};