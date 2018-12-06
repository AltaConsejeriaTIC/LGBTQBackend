'use strict';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const { Complaint } = require('../../database/models/complaint');
const knex = require('knex');
var util = require('util');
const  AdminHelper = require('../helpers/admin_helper');
const UtilityHelper = require('../helpers/utility_helpe ');
const Joi = require('joi');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');

const schema = Joi.object().keys({

  first_name: Joi.string().regex(/^[a-záéíóúñüçA-ZÁÉÍÓÚ´ÑÜÇ\s]*$/i).required(),
  last_name: Joi.string().regex(/^[a-záéíóúñüçA-ZÁÉÍÓÚ´ÑÜÇ\s]*$/i).required(),
  document_type: Joi.string().max(20).required(),
  document_number: Joi.string().max(15).required(),
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]{2,}$/i).required(),
  phone: Joi.string().regex(/^[0-9]*$/).required(),
  event_day: Joi.date().max('now').required(),
  event_place: Joi.string().required(),
  description: Joi.string().required()

});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: 'diversidadsexual@sdp.gov.co',
    clientId: '788019342140-ts5tlhr23etdn902imrlgvq8ad2185b0.apps.googleusercontent.com',
    clientSecret: 'PiSpgLkk3cRyCYOpJ8gLG3SX',
    refreshToken: '1/u-ALWdCIyOST2tHJ_-uc9xXZCq7sJWeQ_07Po-RnD9k'
  }
 })

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
    const data = req.body;
    Joi.validate(data, schema, (err, value) => {

        if (err) {
          res.status(422).json({
              status: 'error',
              message: 'Invalid request data',
              error: err
          });
        } else {
  
        insert(data)
          .then(response => {
            
            const mailOptions = {
              from: 'Diversidad Sexual <diversidadsexual@sdp.gov.co>',
              to: 'diversidadsexual@sdp.gov.co',
              subject: `APP Denuncia de: ${data.first_name} ${data.last_name}`,
              text: '',
              html: UtilityHelper.getHtmlDesign( data, getCurrentDate(), response.id  ),
              attachments: [{
                filename: 'sign-dds',
                path: `./public/images/sign-dds.png`,
                cid: 'unique@kreata.ee'
            }]
            }

            transporter.sendMail(mailOptions, function (err, res) { 
              if(err){
                  console.log('Error sending email');
                  console.log(err)
              } else {
                  console.log('Email Sent');
              }
            })
            
            res.status(201).send({ id: response.id });
          })
          .catch(e => console.error(e));
    }

    }); 
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