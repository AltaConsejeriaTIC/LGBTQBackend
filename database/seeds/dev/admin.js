const bcrypt = require('bcrypt')

let hashedPassword = null;

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
    	hashedPassword = bcrypt.hashSync('asd321', 10);
	    return knex('users').insert([
	        {id: 1, email: 'xnazgul@gmail.com', password_digest: hashedPassword}
	    ]);
    });
};
