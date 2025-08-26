import { Dialect } from 'sequelize';

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

const getDialect = (envVar: string | undefined): Dialect => {
  const validDialects: Dialect[] = ['mysql', 'postgres', 'sqlite', 'mariadb', 'mssql'];
  if (!envVar || !validDialects.includes(envVar as Dialect)) {
    throw new Error(`Invalid or missing DB_DIALECT: ${envVar}`);
  }
  return envVar as Dialect;
}

const dbConfig: { [env: string]: DBConfig } = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'dev_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: getDialect(process.env.DB_DIALECT),
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: getDialect(process.env.DB_DIALECT),
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'prod_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: getDialect(process.env.DB_DIALECT),
  },
};

export { dbConfig }
