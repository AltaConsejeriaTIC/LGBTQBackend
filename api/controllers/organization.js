'use strict';

const { Organization } = require('../../database/models/organization');


function getOrganizations(req, res) {
    findOrganizations()
        .then((news) => {
            res.status(200).send(news);
        })
        .catch((e) => console.error(e));
}

const findOrganizations = () => Organization.query();

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
    AdminHelper.isAuthenticate(token)
    .then( (dataAdmin)=>{
      if( dataAdmin.length === 1 ){
        insert(req.body)
        .then(response => {
            res.status(201).send({ id: response.id });
        })
        .catch(e => console.error(e));
      }else{
        res.status(403).send({ message: 'Forbidden permissions' });
      }
    })
    .catch(e => console.error(e));
    
}

const insert = (organization) => Organization.query().insert(organization);

function updateOrganization(req, res) {

    const id = req.swagger.params.id.value;
    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
    .then( (dataAdmin)=>{
      if( dataAdmin.length === 1 ){
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
      }else{
        res.status(403).send({ message: 'Forbidden permissions' });
      }
    })
    .catch(e => console.error(e));
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
        updated_at: getCurrentDate()
    });


module.exports = {
    getOrganizations,
    getOrganization,
    postOrganization,
    updateOrganization
};