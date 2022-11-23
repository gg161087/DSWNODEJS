const GLOBAL_CONSTS = require('../../const/globalConsts');

module.exports = {

  "development": {
    "username": GLOBAL_CONSTS.DB_USERNAME,
    "password": GLOBAL_CONSTS.DB_PASSWORD,
    "database": GLOBAL_CONSTS.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
