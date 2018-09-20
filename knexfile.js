require('dotenv').config()

const pg = require('pg')

module.exports =
{
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL_DEV,
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds/dev'
        },
        useNullAsDefault: true
    },
    test: {
        client: 'pg',
        connection: process.env.DATABASE_URL_TEST,
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds/test'
        },
        useNullAsDefault: true
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds/production'
        },
        useNullAsDefault: true
    }
};
