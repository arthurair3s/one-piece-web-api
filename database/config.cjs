const fs = require('fs');
const path = require('path');

let envPath = path.resolve(__dirname, '../.env');
if (!fs.existsSync(envPath)) {
  envPath = path.resolve(__dirname, '../../.env');
}

require('dotenv').config({
  path: envPath,
});

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || 'postgres',
  seederStorage: 'sequelize',
};

module.exports = {
  development: config,
  production: config,
  test: config,
};