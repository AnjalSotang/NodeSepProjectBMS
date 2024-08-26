const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize(process.env.DB_DBNAME, process.env.DB_USERNAME , process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
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