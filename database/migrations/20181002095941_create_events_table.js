exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('events', table => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.text('description').notNullable();
            table.string('place');
            table.string('address').notNullable();
            table.date('start_date').notNullable();
            table.date('finish_date').notNullable();
            table.string('start_time').notNullable();
            table.string('finish_time').notNullable();
            table.string('image').notNullable();
            table.string('state').notNullable();
            table.float('latitude').notNullable();
            table.float('longitude').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('events')
    ])
};