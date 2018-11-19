'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { Complaint } = require('../../database/models/complaint');
const knex = require('knex');
var util = require('util');

function getComplaints(req, res) {
    findComplaints()
        .then((complaints) => {
            res.status(200).send(complaints);
        })
        .catch((e) => console.error(e));
}

const findComplaints = () => Complaint.query();

function getCurrentDate() {
    return new Date();
    //return new Date().toISOString().split('T')[0];
}

function getComplaint(req, res) {
    const id = req.swagger.params.id.value;

    findComplaint(id)
        .then(complaint => {
            if (!complaint) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                res.status(200).send(complaint);
            }
        })
        .catch((e) => console.error(e));
}

const findComplaint = (id) => Complaint.query().where('id', id).first();

function postComplaint(req, res) {
    insert(req.body)
    .then(response => {
        res.status(201).send({ id: response.id });
    })
    .catch(e => console.error(e));
}

const insert = (complaint) => Complaint.query().insert(complaint);

function updateComplaint(req, res) {

    const id = req.swagger.params.id.value;
    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
    .then( (dataAdmin)=>{
      if( dataAdmin.length === 1 ){
        findComplaint(id)
        .then(complaint => {
            if (!complaint) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                complaintUpdated(req.body, id)
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

const complaintUpdated = (data, id) => Complaint.query()
    .patchAndFetchById(id, {
        document_type: data.document_type,
        document_number: data.document_number,
        first_name: data.first_name,
        last_name: data.last_name,
        addres: data.addres,
        email: data.email,
        phone: data.phone,
        image: data.image,
        sex_birth: data.sex_birth,
        sexual_orientation: data.sexual_orientation,
        gender: data.gender,
        birth_day: data.birth_day,
        updated_at: getCurrentDate()
    });


module.exports = {
    getComplaints,
    getComplaint,
    postComplaint,
    updateComplaint
};