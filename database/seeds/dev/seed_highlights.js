exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('highlights').del()
        .then(function() {
            // Inserts seed entries
            return knex('highlights').insert([
                // { section_id: 4, section: 'event' },
                // { section_id: 6, section: 'event' },
                // { section_id: 2, section: 'news' }
            ]);
        });
};