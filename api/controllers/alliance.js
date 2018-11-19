'use strict';

const { Alliance } = require('../../database/models/alliance');


function getAlliances(req, res) {
    findAlliances()
        .then((news) => {
            res.status(200).send(news);
        })
        .catch((e) => console.error(e));
}

const findAlliances = () => Alliance.query();

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

const insert = (alliance) => Alliance.query().insert(alliance);

function updateAlliance(req, res) {

    const id = req.swagger.params.id.value;

    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
    .then( (dataAdmin)=>{
      if( dataAdmin.length === 1 ){
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
      }else{
        res.status(403).send({ message: 'Forbidden permissions' });
      }
    })
    .catch(e => console.error(e));    
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
        updated_at: getCurrentDate()
    });


module.exports = {
    getAlliances,
    getAlliance,
    postAlliance,
    updateAlliance
};