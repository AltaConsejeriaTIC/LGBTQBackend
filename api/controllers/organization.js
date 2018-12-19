'use strict';

const { Organization } = require('../../database/models/organization');
const AdminHelper = require('../helpers/admin_helper');
const Joi = require('joi');

const schema = Joi.object().keys({
    id: Joi.number(),
    name: Joi.string().max(45).required(),
    description: Joi.string().min(200).max(700).required(),
    website: Joi.string().allow(''),
    address: Joi.string().allow(''),
    email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]{2,}$/i).required(),
    phone: Joi.string().regex(/^([\(]?\+?[0-9]{1,3}[\)]?){0,2}[0-9\s]{7,20}((ext|ext\.|Ext|Ext\.){1}\s[0-9\s]{1,7})?$/).required(),
    state: Joi.boolean().default(true),
    deleted: Joi.boolean().default(false),
    image: Joi.string().required(),
    created_at: Joi.date(),
    updated_at: Joi.date()
});

function getAllOrganizations(req, res) {
    findAllOrganizations()
        .then((news) => {
            res.status(200).send(news);
        })
        .catch((e) => console.error(e));
}

const findAllOrganizations = () => Organization.query().where('deleted',false).orderBy('updated_at','desc');

function getOrganizations(req, res) {
    findOrganizations()
        .then((news) => {
            res.status(200).send(news);
        })
        .catch((e) => console.error(e));
}

const findOrganizations = () => Organization.query().where('state', true).andWhere('deleted', false).orderBy('updated_at','desc');

function getOrganization(req, res) {
    const id = req.swagger.params.id.value;

    findOrganization(id)
        .then(organization => {
            if (!organization) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                res.status(200).send(organization);
            }
        })
        .catch((e) => console.error(e));
}

const findOrganization = (id) => Organization.query().where('id', id).first();

function postOrganization(req, res) {

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

const insert = (organization) => Organization.query().insert(organization);

function updateOrganization(req, res) {

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
                        findOrganization(id)
                            .then(organization => {
                                if (!organization) {
                                    res.status(400).send({ message: 'Invalid ID' });
                                } else {
                                    organizationUpdated(req.body, id)
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

const organizationUpdated = (data, id) => Organization.query()
    .patchAndFetchById(id, {
        name: data.name,
        description: data.description,
        website: data.website,
        address: data.address,
        email: data.email,
        phone: data.phone,
        state: data.state,
        image: data.image,
        deleted: data.deleted,
        updated_at: new Date()
    });

function updateStateOrganization(req, res) {

    const id = req.swagger.params.id.value;
    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
        .then((dataAdmin) => {
            if (dataAdmin.length === 1) {
                findOrganization(id)
                    .then(organization => {
                        if (!organization) {
                            res.status(400).send({ message: 'Invalid ID' });
                        } else {
                            stateUpdated(organization.state, id)
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

function updateDeleteOrganization(req, res) {

  const id = req.swagger.params.id.value;
  const token = req.headers.token;
  AdminHelper.isAuthenticate(token)
      .then((dataAdmin) => {
          if (dataAdmin.length === 1) {
              findOrganization(id)
                  .then(organization => {
                      if (!organization) {
                          res.status(400).send({ message: 'Invalid ID' });
                      } else {

                           deleteUpdate(req.body.deleted, id)
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

const stateUpdated = (data, id) => Organization.query()
    .patchAndFetchById(id, {
        state: !data,
        updated_at: new Date()
    });

const deleteUpdate = (data, id) => Organization.query()
    .patchAndFetchById(id, {
        deleted: data,
        updated_at: new Date()
    });


module.exports = {
    getOrganizations,
    getAllOrganizations,
    getOrganization,
    postOrganization,
    updateOrganization,
    updateStateOrganization,
    updateDeleteOrganization
};