exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('news', table => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.text('description').notNullable();
            table.string('source');
            table.string('source_link');
            table.date('date').notNullable();
            table.string('image_owner');
            table.string('image').notNullable();
            table.boolean('state').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('news')
    ])
};