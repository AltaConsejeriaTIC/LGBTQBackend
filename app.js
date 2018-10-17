'use strict';

const Knex = require('knex')
const morgan = require('morgan')
const knexConfig = require('./knexfile');
const { Model } = require('objection');

const SwaggerExpress = require('swagger-express-mw');
const helmet = require('helmet');
const express = require('express');
var app = express();
const fileUpload = require('express-fileupload');

module.exports = app;

var config = {
    appRoot: __dirname
};

const knex = Knex(knexConfig.development);

Model.knex(knex);

app.use(helmet());

app.use(express.static('public'));

app.use(fileUpload());

app.post('/upload', (req, res) => {
    let EDFile = req.files.file
    EDFile.mv(`./public/${EDFile.name}`, err => {
        if (err) return res.status(500).send({ message: err })

        return res.status(200).send({ message: 'File upload' })
    })
})

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