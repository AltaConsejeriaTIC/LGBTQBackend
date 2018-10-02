exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('events', table => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.text('description');
            table.string('place');
            table.string('address');
            table.date('start_date');
            table.date('finish_date');
            table.string('start_time');
            table.string('finish_time');
            table.string('image');
            table.timestamp('created_at');

        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('events')
    ])
};