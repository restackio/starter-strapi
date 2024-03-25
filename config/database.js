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

const db = {
  mysql,
  mysql2,
  sqlite,
  postgres,
  mariadb,
};

module.exports = {
  //connection: process.env.DB ? db[process.env.DB] || db.sqlite : db.sqlite,
  connection: {
    client: 'postgres',
    connection: {
      database: process.env.DATABASE_NAME ? process.env.DATABASE_NAME : 'strapi',
      user: process.env.DATABASE_USERNAME ? process.env.DATABASE_USERNAME : 'strapi',
      password: process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : 'strapi',
      port: process.env.DATABASE_PORT ? process.env.DATABASE_PORT : 5432,
      host: process.env.DATABASE_HOST ? process.env.DATABASE_HOST : '127.0.0.1',
    },
  }
};
