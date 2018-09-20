
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('users', table => {
          table.increments('id').primary();
          table.string('email').notNullable();
          table.string('token');
          table.string('password_digest');
          table.timestamp('created_at')
      })
  ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ])
};
