const { Sequelize } = require('sequelize');
const dbConfig = require('../config/dbConfig');

// Determine environment (default to development)
const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

// Initialize Sequelize instance
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
  });


const checkingConnectivity = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unfortunately! The connection was not successful:", error);
    }
}

checkingConnectivity();

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.blog = require("./blog")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);

module.exports = db;