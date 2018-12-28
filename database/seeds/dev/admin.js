const bcrypt = require('bcrypt')

let hashedPassword = null;

exports.seed = function(knex, Promise) {
    return knex('admins').del()
        .then(function() {
            hashedPassword = bcrypt.hashSync('acuerdo371', 10);
            hashedPassword2 = bcrypt.hashSync('371acuerdo', 10);
            return knex('admins').insert([
                { email: 'diversidadsexual@sdp.gov.co', password_digest: hashedPassword },
                { email: 'diversidadsexual1@sdp.gov.co', password_digest: hashedPassword2 }
            ]);
        });
};