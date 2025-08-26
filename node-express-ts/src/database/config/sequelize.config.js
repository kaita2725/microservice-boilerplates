require("dotenv").config();
require("ts-node/register");
require("tsconfig-paths/register");

const { dbConfig } = require("./sequelize.con.ts");

const env = process.env.NODE_ENV || "development";

module.exports = dbConfig[env];
