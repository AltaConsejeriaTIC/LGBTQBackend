const bcrypt = require('bcrypt')

let hashedPassword = null;

exports.seed = function(knex, Promise) {
    return knex('admins').del()
        .then(function() {
            hashedPassword = bcrypt.hashSync('acuerdo371', 10);
            return knex('admins').insert([
                { email: 'diversidadsexual@sdp.gov.co', password_digest: hashedPassword },
                { email: 'vivelabbogota@gmail.com', password_digest: hashedPassword },
                { email: 'laura@gmail.com', password_digest: hashedPassword },
                { email: 'brigitte@gmail.com', password_digest: hashedPassword },
                { email: 'dds@gmail.com', password_digest: hashedPassword },
                { email: 'test@gmail.com', password_digest: hashedPassword },
                { email: 'something@gmail.com', password_digest: hashedPassword }
            ]);
        });
};