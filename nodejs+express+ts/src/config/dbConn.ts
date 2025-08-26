import { Sequelize } from "sequelize";
import { dbConfig } from "../database/config/sequelize.con";
const env = process.env.NODE_ENV || 'development'
const config = dbConfig[env]

const connectDB = new Sequelize({
    database: config.database,
    username: config.username,
    password: config.password,
    host: config.host,
    dialect: config.dialect,
    logging: env === 'development' ? console.log : false,
})

export default connectDB;