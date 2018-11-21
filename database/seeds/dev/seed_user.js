exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([{
                    id: 1,
                    document_type: 'Cédula de ciudadania',
                    document_number: '100879457',
                    first_name: 'José',
                    last_name: 'Buitrago',
                    address: 'cll 1 # 1 - 1',
                    email: 'aaa@eee.com',
                    phone: '3155555555',
                    sex_birth: 'Hombre',
                    sexual_orientation: 'XXXXX',
                    gender: 'XXXXX',
                    birth_day: '1995-11-11',
                    education: 'Ninguno'
                },
                {
                    id: 2,
                    document_type: 'Cédula de ciudadania',
                    document_number: '100879458',
                    first_name: 'Pedro',
                    last_name: 'Carreño',
                    address: 'cll 1 # 1 - 2',
                    email: 'bbb@eee.com',
                    phone: '3155555556',
                    sex_birth: 'Mujer',
                    sexual_orientation: 'XXXXX',
                    gender: 'XXXXX',
                    birth_day: '1996-06-15',
                    education: 'Básica primaria'
                },
                {
                    id: 3,
                    document_type: 'Cédula de ciudadania',
                    document_number: '100879459',
                    first_name: 'Diana',
                    last_name: 'Pineda',
                    address: 'cll 1 # 1 - 3',
                    email: 'ccc@eee.com',
                    phone: '3155555556',
                    sex_birth: 'Hombre',
                    sexual_orientation: 'XXXXX',
                    gender: 'XXXXX',
                    birth_day: '1997-03-04',
                    education: 'Tecnólogo'
                }
            ]);
        });
};