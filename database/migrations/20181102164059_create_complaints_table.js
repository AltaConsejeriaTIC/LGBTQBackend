exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('complaints', table => {
            table.increments('id').primary();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('document_type').notNullable();
            table.string('document_number').notNullable();
            table.string('email').notNullable();
            table.string('phone').notNullable();
            table.date('event_day').notNullable();
            table.string('event_place').notNullable();
            table.string('description').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('complaints')
    ])
};