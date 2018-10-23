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
                    state: true,
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
                    state: true,
                },
                {
                    id: 3,
                    title: 'Justicia facilitará que los menores trans cambien el nombre del registro.',
                    description: 'Los menores trans tendrán más fácil cambiar el nombre que figura en el Registro Civil.' +
                        ' Tras una reunión que han mantenido esta mañana la ministra de Justicia, Dolores Delgado, el director general de Registros y Notariado,' +
                        ' Pedro José Garrido, y representantes de la Asociación Chrisallys de familias de niños trans,' +
                        ' fuentes del ministerio han informado de que se emitirá una instrucción para que se facilite y unifique el trámite.' +
                        ' "Es una manera de dar una respuesta rápida", afirman fuentes de Justicia, a la espera de que el Congreso tramite' +
                        ' una proposición de ley del PSOE al respecto presentada en febrero del año pasado.\n' +
                        ' \nEsa iniciativa regula también el cambio del sexo registrado, pero la instrucción atenderá "lo que para los afectados' +
                        ' es lo más importante", según fuentes de Justicia. Natalia Aventín Ballarín, presidenta de Chrisallys, coincide: "Esa letra, ' +
                        ' la h –de hombre o de hembra–, o la m –de mujer o masculino– no les importa tanto, pero el nombre, sí".',
                    source: 'elpais.com',
                    source_link: 'https://elpais.com/sociedad/2018/10/17/actualidad/1539779587_691507.html',
                    date: '2018-10-17',
                    image_owner: 'VICTOR J BLANCO (GTRES)',
                    image: '/images/noticia03.jpg',
                    state: true,
                },
                {
                    id: 4,
                    title: '439 personas cambiaron de sexo y nombre en Colombia en 2016',
                    description: 'La oficina de planeación de la Superintendencia de Notariado y Registro (SNR), dio a conocer que entre enero de 2016 ' +
                        ' y el mismo mes de 2017 un total de 439 personas acudieron a las diferentes notarías del país para cambiar su nombre por uno del sexo opuesto.' +
                        ' \nEntre los datos, destaca la cifra de hombres que ejercieron este derecho, siendo 340 los casos de cambio de nombres de género de' +
                        ' masculino a femenino, lo que equivale al 77,4%, sobrepasando de manera considerable los cambios de nombre de género de femenino a masculino que sumaron 99' +
                        ' \nEl decreto que reglamenta el cambio de sexo en el registro civil es el 1227 de 2015 firmado por el para entonces ministro de justicia ' +
                        ' Yesid Reyes y el actual ministro del interior Juan Fernando Cristo.',
                    source: 'eltiempo.com',
                    source_link: 'https://www.dinero.com/pais/articulo/cuantas-personas-cambiaron-de-sexo-en-colombia-en-2016/242740',
                    date: '2018-08-03',
                    image_owner: 'TRANSGÉNERO',
                    image: '/images/noticia04.jpg',
                    state: true,
                },
                {
                    id: 5,
                    title: 'Homosexualidad en el mundo: de la pena de muerte al matrimonio',
                    description: 'La homosexualidad, que la Corte Suprema de la India acaba de despenalizar, sigue siendo reprimida o incluso castigada con la pena de muerte en muchos países.' +
                        ' En otros, en cambio, se reconoce plenamente y se permite el matrimonio entre personas del mismo sexo.\n' +
                        ' \nUn crimen en África\n' +
                        'En un continente donde 30 países prohíben la homosexualidad, Sudáfrica es una excepción: El Gobierno sudafricano legalizó el matrimonio gay en el 2006.\n' +
                        ' \nAdemás, la adopción, la procreación médicamente asistida (PMA) y la subrogación (vientre de alquiler) están permitidas. Sin embargo, las relaciones entre personas,' +
                        ' del mismo sexo son castigadas con la muerte en Sudán, Somalía y Mauritania. Solo unos pocos países (Gabón, Costa de Marfil, Malí, Chad,' +
                        ' Mozambique o la República Democrática del Congo) la han despenalizado.',
                    source: 'elperiodico.com',
                    source_link: 'https://www.elperiodico.com/es/internacional/20180906/homosexualidad-en-el-mundo-7021092',
                    date: '2018-09-06',
                    image_owner: 'MANJUNATH KIRAN (AFP)',
                    image: '/images/noticia05.jpg',
                    state: true,
                },
            ]);
        });
};