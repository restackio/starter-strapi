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
    database: env('DATABASE_NAME', 'strapi'),
    user: env('DATABASE_USERNAME', 'strapi'),
    password: env('DATABASE_PASSWORD', 'strapi'),
    port: env.int('DATABASE_PORT', 5432),
    host: env('DATABASE_HOST', 'localhost'),
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
