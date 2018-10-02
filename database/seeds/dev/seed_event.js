exports.seed = function(knex, Promise) {
    return knex('events').del()
        .then(function() {
            return knex('events').insert([{
                    id: 1,
                    title: 'Titulo 1',
                    description: 'more lorem ipsum',
                    place: 'Lugar 1',
                    address: ' Clle 140 7 1',
                    start_date: '2018-10-01',
                    finish_date: '2018-10-01',
                    start_time: '',
                    finish_time: '',
                    image: '/images/evento1.jpg'
                },
                {
                    id: 2,
                    title: 'Titulo 2',
                    description: 'more lorem ipsum',
                    place: 'Lugar 2',
                    address: ' Clle 140 7 1',
                    start_date: '2018-10-02',
                    finish_date: '2018-10-03',
                    start_time: '',
                    finish_time: '',
                    image: '/images/evento2.jpg'
                },
                {
                    id: 3,
                    title: 'Titulo 3',
                    description: 'more lorem ipsum',
                    place: 'Lugar 3',
                    address: ' Clle 140 7 3',
                    start_date: '2018-10-03',
                    finish_date: '2018-10-06',
                    start_time: '',
                    finish_time: '',
                    image: '/images/evento3.jpg'
                }
            ]);
        });
};