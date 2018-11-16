exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('table_name').del()
        .then(function() {
            // Inserts seed entries
            return knex('table_name').insert([
                { id: 1, section_id: 4, section: 'event' },
                { id: 1, section_id: 6, section: 'event' },
                { id: 1, section_id: 2, section: 'news' }
            ]);
        });
};