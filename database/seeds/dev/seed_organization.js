exports.seed = function(knex, Promise) {
    return knex('organizations').del()
        .then(function() {
            return knex('organizations').insert([
              // {
              //       name: 'Ágora Club',
              //       description: 'ÁGORA Club, es el nombre adoptado por un grupo de personas interesadas en el trabajo' +
              //           ' en pro de la construcción de lo que hemos llamado “ciudadanía LGBT” en el municipio de Pasto' +
              //           ' y el Departamento de Nariño, conformado por jóvenes profesionales, universitarios y estudiantes' +
              //           ' de colegio de esta ciudad.',
              //       website: null,
              //       address: null,
              //       email: 'jotavillota2007@yahoo.com',
              //       phone: '+57 (2) 7203733',
              //       state: true,
              //       image: '/images/organización01.jpg',
              //   },
              //   {
              //       name: 'Armario Abierto',
              //       description: 'Somos una organización autónoma, no gubernamental, privada y sin ánimo de lucro que nace' +
              //           ' en el año 2010 en Manizales, para promover iniciativas que buscan aportar a la construcción de condiciones' +
              //           ' de existencia más justas y respaldar la garantía de vidas libres de violencias para las personas que asumen' +
              //           ' identidades de género y/o ejercen sexualidades diversas. Enfocamos nuestras acciones especialmente en las' +
              //           ' mujeres trans que por las condiciones en las que ejercen el trabajo sexual se encuentran en situación de vulnerabilidad.',
              //       website: 'www.wix.com/armarioabierto1/armarioabierto',
              //       address: null,
              //       email: 'armarioabierto.lgbti@gmail.com',
              //       phone: '(+57) 4831237',
              //       state: true,
              //       image: '/images/organización02.jpg',
              //   },
              //   {
              //       name: 'Colombia Diversa',
              //       description: 'Colombia Diversa nace luego de un diagnóstico sobre la situación de las personas LGBT en Colombia,' +
              //           ' en el cual se identificaron varios vacíos conceptuales e imaginarios negativos o erróneos sobre la población' +
              //           ' LGBT que se convertía en un obstáculo para asegurar su inclusión.',
              //       website: null,
              //       address: 'Calle 30A No. 6-22 Oficina 1102, Bogotá D.C',
              //       email: 'info@colombiadiversa.org',
              //       phone: '(+57) 4831237',
              //       state: true,
              //       image: '/images/organización03.JPG',
              //   },
              //   {
              //       name: 'Armario Abierto',
              //       description: 'Somos una organización autónoma, no gubernamental, privada y sin ánimo de lucro que nace' +
              //           ' en el año 2010 en Manizales, para promover iniciativas que buscan aportar a la construcción de condiciones' +
              //           ' de existencia más justas y respaldar la garantía de vidas libres de violencias para las personas que asumen' +
              //           ' identidades de género y/o ejercen sexualidades diversas. Enfocamos nuestras acciones especialmente en las' +
              //           ' mujeres trans que por las condiciones en las que ejercen el trabajo sexual se encuentran en situación de vulnerabilidad.',
              //       website: 'www.wix.com/armarioabierto1/armarioabierto',
              //       address: null,
              //       email: 'armarioabierto.lgbti@gmail.com',
              //       phone: '(+57) 4831237',
              //       state: true,
              //       image: '/images/organización02.jpg',
              //   }
            ]);
        });
};