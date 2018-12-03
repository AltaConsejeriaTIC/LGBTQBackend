exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('organizations', table => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.text('description').notNullable();
            table.string('website');
            table.string('address');
            table.string('email').notNullable();
            table.string('phone').notNullable();
            table.string('state').notNullable();
            table.string('image').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('organizations')
    ])
};