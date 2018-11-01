exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', table => {
            table.increments('id').primary();
            table.string('document_type').notNullable();
            table.string('document_number').notNullable();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('addres').notNullable();
            table.string('email').notNullable();
            table.string('phone').notNullable();
            table.string('image').notNullable();
            table.string('sex_birth').notNullable();
            table.string("sexual_orientation").notNullable();
            table.string('gender').notNullable();
            table.date('birth_day').notNullable()

        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ])
};