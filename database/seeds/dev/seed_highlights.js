exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('highlights').del()
        .then(function() {
            // Inserts seed entries
            return knex('highlights').insert([
                { id: 1, section_id: 4, section: 'event' },
                { id: 2, section_id: 6, section: 'event' },
                { id: 3, section_id: 2, section: 'news' }
            ]);
        });
};