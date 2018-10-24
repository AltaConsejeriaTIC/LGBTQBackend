exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('alliances', table => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.text('description').notNullable();
            table.text('offer').notNullable();
            table.string('website');
            table.string('phone');
            table.string('email');
            table.boolean('state').notNullable();
            table.date('finish_date').notNullable();
            table.string('image').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('alliances')
    ])
};