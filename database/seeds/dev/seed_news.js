exports.seed = function(knex, Promise) {
    return knex('news').del()
        .then(function() {
            return knex('news').insert([{
                    id: 1,
                    title: 'Pareja de lesbianas denunció discriminación de género en TransMilenio',
                    description: 'Una joven pareja de mujeres lesbianas denunció a través de las redes sociales que fue víctima de discriminación de género,' +
                        ' en un incidente que se presentó el pasado 23 de agosto mientras viajaban en la ruta G47 con trayecto final al Portal del Sur.' +
                        ' Las mujeres, una de ellas menor de edad, contaron mediante un comunicado que el conductor del articulado les tomó fotografías' +
                        ' desde su celular y les hizo un fuerte reclamo por darse muestras públicas de afecto. De acuerdo con el escrito, el 23 de agosto' +
                        ' abordaron el bus en la estación de San Victorino, en el centro de Bogotá. Se subieron a la ruta M47 que, luego de cruzar por la estación' +
                        ' del Museo Nacional, cambia a la G47 y toma el destino del Portal del Sur. Las jóvenes se acomodaron en las sillas de adelante del articulado,' +
                        ' justamente diagonal al conductor del vehículo.',
                    source: 'eltiempo.com',
                    source_link: 'https://www.eltiempo.com/justicia/delitos/pareja-de-lesbianas-denuncio-discriminacion-de-genero-en-transmilenio-261806',
                    date: '2018-10-28',
                    image_owner: 'Archivo/El TIEMPO',
                    image: '/images/noticia01.jpg',
                    state: true;
                },
                {
                    id: 2,
                    title: '\'Huellas Diversas\': Robinson Chaparro y la causa LGBTI en Guaviare',
                    description: 'Cientos de miembros y simpatizantes del colectivo LGTB en la India salieron este sábado a las calles de la ciudad india de Bombay' +
                        ' para reclamar que el Tribunal Supremo tumbe el artículo 377 del Código Penal indio, que criminaliza las relaciones homosexuales.' +
                        ' Los participantes del desfile del orgullo gay en Bombay fueron convocados bajo el lema "377 Quit India" ("377 Fuera de la India"),' +
                        ' en referencia a la campaña por la independencia india de los británicos que lideró el mahatma Gandhi. "Reclamamos la igualdad de derechos,' +
                        ' pero igualdad de derechos en relación a la legalización (de la homosexualidad), lo que significa que el artículo 377 debe ser eliminado",' +
                        ' afirmó a Efe Vivek Anand, uno de los organizadores del desfile. Anand, que dirige también la ONG en defensa del colectivo LGTB The Humsafar Trust,' +
                        ' remarcó que "hasta que los actos homosexuales sean despenalizados" no será posible solicitar más derechos, como los de igualdad, matrimonio o adopción.',
                    source: 'eltiempo.com',
                    source_link: 'https://canaltrece.com.co/noticias/la-lucha-lgbti-que-lidera-robinson-chaparro-en-guaviare/',
                    date: '2018-02-03',
                    image_owner: 'Publímetro.co',
                    image: '/images/noticia02.jpg',
                    state: true;
                }
            ]);
        });
};