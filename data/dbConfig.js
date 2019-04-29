const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = db;

// or
//  module.exports = knex(knexConfig.development)
