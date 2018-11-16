exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('highlights', table => {
            table.increments('id').primary();
            table.integer('section_id').notNullable();
            table.string('section');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('highlights')
    ])
};