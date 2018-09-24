const { Model } = require("objection");
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const bcrypt = require('bcrypt');
const crypto = require('crypto');

class User extends Model {

    static  get tableName(){
        return "users";
    };
}


module.exports = { User };