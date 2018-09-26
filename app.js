'use strict';

const Knex = require('knex')
const morgan = require('morgan')
const knexConfig = require('./knexfile');
const { Model } = require('objection');

const SwaggerExpress = require('swagger-express-mw');
const helmet = require('helmet');
var app = require('express')();
module.exports = app;

var config = {
  appRoot: __dirname
};

const knex = Knex(knexConfig.development);

Model.knex(knex);

app.use(helmet())

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 8080;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
