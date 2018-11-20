'user strict';

const { Admin } = require('../../database/models/admin');

const isAuthenticate = ( token ) => new Promise( (resolve,reject) => {
  findUserByToken( token )
  .then ( (Admin) => {
    resolve( Admin );
  })
  .catch((e) => reject(e) );
})


const findUserByToken = (token) => { return Admin.query().where('token', token) }


module.exports = {
  isAuthenticate
}