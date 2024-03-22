const sqlite = {
  client: 'sqlite',
  connection: {
    filename: '.tmp/data.db',
  },
  useNullAsDefault: true,
};

const postgres = {
  client: 'postgres',
  connection: {
    database: 'strapi',
    user: 'strapi',
    password: 'strapi',
    port: 5432,
    host: 'localhost',
  },
};

const mysql = {
  client: 'mysql',
  connection: {
    database: 'strapi',
    user: 'strapi',
    password: 'strapi',
    port: 3306,
    host: 'localhost',
  },
};

const mysql2 = {
  client: 'mysql2',
  connection: {
    database: 'strapi',
    user: 'strapi',
    password: 'strapi',
    port: 3306,
    host: 'localhost',
  },
};

const mariadb = {
  client: 'mysql',
  connection: {
    database: 'strapi',
    user: 'strapi',
    password: 'strapi',
    port: 3307,
    host: 'localhost',
  },
};

const restack_postgres = {
  client: 'postgres',
  connection: {
    database: process.env.DATABASE_NAME ? db[process.env.DATABASE_NAME] || 'strapi' : 'strapi',
    user: process.env.DATABASE_USERNAME ? db[process.env.DATABASE_USERNAME] || 'strapi' : 'strapi',
    password: process.env.DATABASE_PASSWORD ? db[process.env.DATABASE_PASSWORD] || 'strapi' : 'strapi',
    port: process.env.DATABASE_PORT ? db[process.env.DATABASE_PORT] || 5432 : 5432,
    host: process.env.DATABASE_HOST ? db[process.env.DATABASE_HOST] || '0.0.0.0' : '0.0.0.0',
  },
};

const db = {
  mysql,
  mysql2,
  sqlite,
  postgres,
  mariadb,
  restack_postgres,
};

module.exports = {
  //connection: process.env.DB ? db[process.env.DB] || db.sqlite : db.sqlite,
  connection: db.restack_postgres,
};
