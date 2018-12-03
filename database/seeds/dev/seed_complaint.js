exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('complaints').del()
        .then(function() {
            // Inserts seed entries
            return knex('complaints').insert([{
                    first_name: 'José',
                    last_name: 'Buitrago',
                    document_type: 'Cédula de ciudadania',
                    document_number: '100879457',
                    email: 'aaa@eee.com',
                    phone: '3155555555',
                    event_day: '2018-08-11',
                    event_place: 'XXXXX',
                    description: 'XXXXX',
                },
                {
                    first_name: 'Pedro',
                    last_name: 'Carreño',
                    document_type: 'Cédula de ciudadania',
                    document_number: '100879458',
                    email: 'bbb@eee.com',
                    phone: '3155555556',
                    event_day: '2018-11-15',
                    event_place: 'XXXXX',
                    description: 'XXXXX',
                },
                {
                    first_name: 'Diana',
                    last_name: 'Pineda',
                    document_type: 'Cédula de ciudadania',
                    document_number: '100879459',
                    email: 'ccc@eee.com',
                    phone: '3155555556',
                    event_day: '2018-11-23',
                    event_place: 'XXXXX',
                    description: 'XXXXX',
                }
            ]);
        });
};