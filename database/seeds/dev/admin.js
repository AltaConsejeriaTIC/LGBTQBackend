const bcrypt = require('bcrypt')

let hashedPassword = null;

exports.seed = function(knex, Promise) {
    return knex('admins').del()
        .then(function() {
            hashedPassword = bcrypt.hashSync('asd321', 10);
            hashedPassword2 = bcrypt.hashSync('Bogota2018*', 10);
            return knex('admins').insert([
                { email: 'xnazgul@gmail.com', password_digest: hashedPassword },
                { email: 'btrujillo@gmail.com', password_digest: hashedPassword2 }
            ]);
        });
};