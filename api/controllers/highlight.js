'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { Highlight } = require('../../database/models/highlight');
const knex = require('knex');
var util = require('util');
const AdminHelper = require('../helpers/admin_helper');

function getHighlights(req, res) {
    findHighlights()
        .then((highlights) => {
            res.status(200).send(highlights);
        })
        .catch((e) => console.error(e));

}

const findHighlights = () => Highlight.query();

function getHighlight(req, res) {
    const id = req.swagger.params.id.value;

    findHighlight(id)
        .then(highlight => {
            if (!highlight) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                res.status(200).send(highlight);
            }
        })
        .catch((e) => console.error(e));
}

const findHighlight = (id) => Highlight.query().where('id', id).first();

function postHighlight(req, res) {

    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
        .then((dataAdmin) => {

            findHighlights()
                .then((highlights) => {
                    console.log('TAMAÑO===', highlights.length);
                    if (dataAdmin.length === 1 && highlights.length < 3) {
                        insert(req.body)
                            .then(response => {
                                res.status(201).send({ id: response.id });
                            })
                            .catch(e => console.error(e));

                    } else if (highlights.length >= 3) {
                        res.status(422).send({ message: 'Full Highlights capacity, only three allow' });
                    } else {
                        res.status(403).send({ message: 'Forbidden permissions' });
                    }

                })
                .catch((e) => console.error(e));


        })
        .catch(e => console.error(e));
}

function deleteHighlight(req, res) {
    const id = req.swagger.params.id.value;
    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
        .then((dataAdmin) => {
            if (dataAdmin.length === 1) {
                findHighlight(id)
                    .then(highlight => {
                        if (!highlight) {
                            res.status(400).send({ message: 'Invalid ID' });
                        } else {
                            highlightDeleted(id)
                                .then(response => {
                                    console.log('response', response);
                                    res.status(200).send({ success: response, description: 'Success highligh deleted' });
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

const insert = (highlight) => Highlight.query().insert(highlight);


const highlightDeleted = (id) => Highlight.query().deleteById(id)

module.exports = {
    getHighlights,
    getHighlight,
    postHighlight,
    deleteHighlight
};