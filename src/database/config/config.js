const global_Consts = require('../../const/globalConsts');

module.exports = {

  "development": {
    "username": global_Consts.DB_USERNAME,
    "password": global_Consts.DB_PASSWORD,
    "database": global_Consts.DB_NAME,
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
