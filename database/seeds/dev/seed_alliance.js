exports.seed = function(knex, Promise) {
    return knex('alliances').del()
        .then(function() {
            return knex('alliances').insert([
              // {
              //       name: 'Talento diverso',
              //       description: 'El programa talento diverso tiene como objetivo mejorar las condiciones laborales de la' +
              //           ' población LGBT en Colombia, generando estrategias que faciliten la empleabilidad en entornos' +
              //           ' de trabajo diversos e incluyentes, que aporten a la consolidación de empresas más productivas y competitivas.',
              //       offer: 'A través de este portal en línea, miembros de la comunidad LGBT podrán enviar sus hojas de vida' +
              //           ' y dar a conocer sus habilidades personales y profesionales.\n' +
              //           '\nTalento diverso incluye un programa de capacitación dirigido a los Departamentos de Talento Humano' +
              //           ' de las entidades públicas y privadas con el fin de apoyar y brindar herramientas para crear las condiciones' +
              //           ' del medio y entornos de trabajo inclusivos. Así mismo, otro programa paralelo está dirigido a desarrollar' +
              //           ' habilidades de trabajo en los miembros de la comunidad LGBT que buscan empleo o desean mejorar sus condiciones de empleabilidad.',
              //       website: 'https://www.talentodiverso.com.co/',
              //       phone: '(+571) 9260404',
              //       email: 'talentodiverso@cclgbt.co',
              //       state: true,
              //       finish_date: '2018-11-12',
              //       image: '/images/Aliado01.jpg',
              //   },
              //   {
              //       name: 'Cámara de Comerciantes LGBT de Colombia',
              //       description: 'La Cámara de Comerciantes LGBT de Colombia - CCLGBTco, es una institución privada, sín ánimo de lucro,' +
              //           ' que nació en el año 2012, como una iniciativa dirigida a fortalecer y empoderar económica y socialmente a la comunidad LGBTI del país',
              //       offer: 'Potenciamos el desarrollo de negocios, emprendimientos y productos e innovaciones dirigidos al segmento LGBT,' +
              //           ' uno de los más dinámicos de la economía colombiana. Ofrecemos acceso preferencial a eventos, descuentos especiales' +
              //           ' en sus cursos y diplomados / Descuentos especiales en el alquiler de sus instalaciones para la realización de eventos comerciales.',
              //       website: 'https://www.ccb.org.co/',
              //       phone: '(+57) 1 383 0330',
              //       email: 'info@ccb.org.co',
              //       state: true,
              //       finish_date: '2018-12-02',
              //       image: '/images/Aliado02.jpg',
              //   },
              //   {
              //       name: 'Tostao',
              //       description: 'En TOSTAO’ Café & Pan tenemos el compromiso de ofrecerte productos de la más alta calidad a precios justos,' +
              //           ' cumpliendo con la promesa de valor de ser un modelo #sinestratos.',
              //       offer: 'Estamos buscando auxiliares de cocina en varios puntos de la franquicia.' +
              //           ' Este mes estamos contratando con preferencia a personas trans.',
              //       website: 'http://tostaocafeypan.com',
              //       phone: null,
              //       email: 'info@tostaocafeypan.com',
              //       state: true,
              //       finish_date: '2018-11-30',
              //       image: '/images/Aliado03.jpg',
              //   }
            ]);
        });
};