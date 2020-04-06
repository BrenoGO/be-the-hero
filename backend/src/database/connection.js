const knex = require('knex');
const config = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? config.test : config.development
const connection = knex(config);

module.exports = connection;