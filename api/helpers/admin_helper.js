'user strict';

const { Admin } = require('../../database/models/admin');

const authenticate = ( token ) => new Promise( (resolve,reject) => {
  findUserByToken( token )
  .then ( (Admin) => {
    resolve( Admin );
  })
  .catch((e) => reject(e) );
})


const findUserByToken = (token) => { return Admin.query().where('token', token) }

const getDummyFile = ( something ) => { return `guitar+${something}` }

module.exports = {
  authenticate,
  getDummyFile
}