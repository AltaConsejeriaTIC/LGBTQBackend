exports.seed = function(knex, Promise) {
    return knex('events').del()
        .then(function() {
            return knex('events').insert([{
                    id: 1,
                    title: 'Ciclo Rosa 2018 - Muestras audiovisuales',
                    description: 'El Ciclo Rosa celebra 17 años de ediciones anuales en la capital y se une a la conmemoración de los 10 años de la política pública LGBT del Distrito. A un año de cumplir la mayoría de edad, este ciclo sigue teniendo además programación en Medellín y Cali, con una muestra de la programación que inicia en Bogotá el 28 de junio y culmina el 10 de julio en la Cinemateca Distrital.',
                    place: 'Cinemateca Distrital',
                    address: 'Carrera 7 No. 22-79',
                    start_date: '2018-10-28',
                    finish_date: '2018-10-28',
                    start_time: '2:00 P.M.',
                    finish_time: '5:00 A.M',
                    state: true,
                    image: '/images/evento01.jpg',
                    latitude: 4.609549,
                    longitude: -74.070948
                },
                {
                    id: 2,
                    title: 'Shakespeare enamorado',
                    description: 'Género: Una comedia romántica que te hará reir de principio a fin con su ' +
                        'fino humor inglés.Es una producción con toda la magia y calidad de Disney.En 1999 ' +
                        'Shakespeare enamorado ganó el Oscar a mejor película.' +
                        '\n\n- Duración: En hora y media disfrutará de una puesta en escena que divertirá y enamorará a todos los asistentes.' +
                        '\n\n- Elenco: Nicolás Montero y Carolina Ramírez, dos de los actores colombianos más queridos' +
                        'y aclamados por la crítica serán los protagonistas de la obra.(El elenco de la obra Shakespeare ' +
                        'enamorado,estará sujeto a modificaciones)' +
                        '\n\n- Dirección: Diego León Hoyos' +
                        '\n\n- Escenografía: Laura Villegas ',
                    place: 'Teatro Colón',
                    address: 'Calle 10 # 5 -32',
                    start_date: '2018-10-21',
                    finish_date: '2018-10-13',
                    start_time: '5:30 P.M.',
                    finish_time: '7:30 P.M.',
                    state: true,
                    image: '/images/evento02.jpg',
                    latitude: 4.596973,
                    longitude: -74.074396
                },
                {
                    id: 3,
                    title: 'Marcha por el orgullo LGBT en Bogotá',
                    description: 'La marcha número 12 por el orgullo gay recorrerá este domingo desde el Parque Nacional hasta la Plaza de Bolívar. La carrera séptima será el punto de partida. Gays, transexuales, transformistas, lesbianas, intersexuales y heterosexuales se reunierán el primero de julio y celebrarán la diversidad bajo un cielo azul claro y un sol intenso, digno de un domingo en Bogotá.',
                    place: 'Parque Nacional',
                    address: 'Calle 35 #3-50',
                    start_date: '2018-07-01',
                    finish_date: '2018-10-13',
                    start_time: '9:30 A.M.',
                    finish_time: '11:30 A.M.',
                    state: true,
                    image: '/images/evento03.jpg',
                    latitude: 4.623472,
                    longitude: -74.063663
                },
                {
                    id: 4,
                    title: 'Festival Internacional Ni con el pétalo de una rosa',
                    description: 'El festival nace de la campaña liderada por la actriz y directora e Casa E, Alejandra Borrero, Ni con el pétalo de una rosa, que es una iniciativa que ha generado varias acciones en el transcurso de los últimos años. El festival busca ser un encuentro para la reflexión sobre la violencia que ha sufrido la mujer a través de la historia del país y su nuevo papel en el posible postconflicto.',
                    place: 'Casa ensamble',
                    address: 'Cra. 25 # 41-39',
                    start_date: '2018-11-24',
                    finish_date: '2018-11-30',
                    start_time: '7:00 P.M.',
                    finish_time: '9:00 P.M.',
                    state: true,
                    image: '/images/evento04.jpg',
                    latitude: 4.632349,
                    longitude: -74.075251
                },
                {
                    id: 5,
                    title: 'Exilia2 Teatro - Las mujeres de Lorca',
                    description: 'Obra que gira en torno a cuatro mujeres icónicas del poeta Federico García Lorca en la que se origina un encuentro inédito en torno a las pasiones, alegrías y sufrimientos que motivan la existencia de cada una de ellas.',
                    place: 'Teatro Mayor Julio Mario Santo Domingo',
                    address: 'Cl. 170 # 67-51',
                    start_date: '2018-10-01',
                    finish_date: '2018-10-07',
                    start_time: '8:00 P.M.',
                    finish_time: '10:00 P.M.',
                    state: true,
                    image: '/images/evento05.jpg',
                    latitude: 4.756900,
                    longitude: -74.062581
                },{
                    id: 6,
                    title: '2.0-Ciclo Rosa 2018 - Muestras audiovisuales',
                    description: 'El Ciclo Rosa celebra 17 años de ediciones anuales en la capital y se une a la conmemoración de los 10 años de la política pública LGBT del Distrito. A un año de cumplir la mayoría de edad, este ciclo sigue teniendo además programación en Medellín y Cali, con una muestra de la programación que inicia en Bogotá el 28 de junio y culmina el 10 de julio en la Cinemateca Distrital.',
                    place: 'Cinemateca Distrital',
                    address: 'Carrera 7 No. 22-79',
                    start_date: '2018-11-28',
                    finish_date: '2018-11-30',
                    start_time: '2:00 P.M.',
                    finish_time: '5:00 A.M',
                    state: false,
                    image: '/images/evento01.jpg',
                    latitude: 4.609549,
                    longitude: -74.070948
                },
                {
                    id: 7,
                    title: '2.0-Shakespeare enamorado',
                    description: 'Género: Una comedia romántica que te hará reir de principio a fin con su ' +
                        'fino humor inglés.Es una producción con toda la magia y calidad de Disney.En 1999 ' +
                        'Shakespeare enamorado ganó el Oscar a mejor película.' +
                        '\n\n- Duración: En hora y media disfrutará de una puesta en escena que divertirá y enamorará a todos los asistentes.' +
                        '\n\n- Elenco: Nicolás Montero y Carolina Ramírez, dos de los actores colombianos más queridos' +
                        'y aclamados por la crítica serán los protagonistas de la obra.(El elenco de la obra Shakespeare ' +
                        'enamorado,estará sujeto a modificaciones)' +
                        '\n\n- Dirección: Diego León Hoyos' +
                        '\n\n- Escenografía: Laura Villegas ',
                    place: 'Teatro Colón',
                    address: 'Calle 10 # 5 -32',
                    start_date: '2018-10-13',
                    finish_date: '2018-11-21',
                    start_time: '5:30 P.M.',
                    finish_time: '7:30 P.M.',
                    state: false,
                    image: '/images/evento02.jpg',
                    latitude: 4.596973,
                    longitude: -74.074396
                },
                {
                    id: 8,
                    title: '2.0-Marcha por el orgullo LGBT en Bogotá',
                    description: 'La marcha número 12 por el orgullo gay recorrerá este domingo desde el Parque Nacional hasta la Plaza de Bolívar. La carrera séptima será el punto de partida. Gays, transexuales, transformistas, lesbianas, intersexuales y heterosexuales se reunierán el primero de julio y celebrarán la diversidad bajo un cielo azul claro y un sol intenso, digno de un domingo en Bogotá.',
                    place: 'Parque Nacional',
                    address: 'Calle 35 #3-50',
                    start_date: '2018-07-01',
                    finish_date: '2018-11-25',
                    start_time: '9:30 A.M.',
                    finish_time: '11:30 A.M.',
                    state: false,
                    image: '/images/evento03.jpg',
                    latitude: 4.623472,
                    longitude: -74.063663
                },
                {
                    id: 9,
                    title: '2.0-Festival Internacional Ni con el pétalo de una rosa',
                    description: 'El festival nace de la campaña liderada por la actriz y directora e Casa E, Alejandra Borrero, Ni con el pétalo de una rosa, que es una iniciativa que ha generado varias acciones en el transcurso de los últimos años. El festival busca ser un encuentro para la reflexión sobre la violencia que ha sufrido la mujer a través de la historia del país y su nuevo papel en el posible postconflicto.',
                    place: 'Casa ensamble',
                    address: 'Cra. 25 # 41-39',
                    start_date: '2018-11-24',
                    finish_date: '2018-11-30',
                    start_time: '7:00 P.M.',
                    finish_time: '9:00 P.M.',
                    state: false,
                    image: '/images/evento04.jpg',
                    latitude: 4.632349,
                    longitude: -74.075251
                },
                {
                    id: 10,
                    title: '2.0-Exilia2 Teatro - Las mujeres de Lorca',
                    description: 'Obra que gira en torno a cuatro mujeres icónicas del poeta Federico García Lorca en la que se origina un encuentro inédito en torno a las pasiones, alegrías y sufrimientos que motivan la existencia de cada una de ellas.',
                    place: 'Teatro Mayor Julio Mario Santo Domingo',
                    address: 'Cl. 170 # 67-51',
                    start_date: '2018-11-01',
                    finish_date: '2018-11-27',
                    start_time: '8:00 P.M.',
                    finish_time: '10:00 P.M.',
                    state: false,
                    image: '/images/evento05.jpg',
                    latitude: 4.756900,
                    longitude: -74.062581
                }

            ]);
        });
};