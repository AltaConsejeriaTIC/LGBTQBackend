'user strict';

const { Admin } = require('../../database/models/admin');

const authenticate = ( token ) => {
    
  findUserByToken( token )
    .then ( (Admin) => {
      console.log(' printing response: \n', Admin  );
      return true;
    })
    .catch((e) => console.error(e));
}

const findUserByToken = (token) => { return Admin.query().where('token', token) }

const getDummyFile = ( something ) => { return `guitar+${something}` }

module.exports = {
  authenticate,
  getDummyFile
}