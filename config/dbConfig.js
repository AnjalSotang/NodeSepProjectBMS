module.exports = {
    development: {
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || null,
      database: process.env.DB_DBNAME,
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: 'mysql',
    },
    test: {
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || null,
      database: 'database_test',
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: 'mysql',
    },
    production: {
      username: 'root',
      password: 'LsBCmYIbsELtURExIRmNtOjJmSJHtIoM',
      database: 'railway',
      host: 'mysql.railway.internal',
      dialect: 'mysql',
    },
  };