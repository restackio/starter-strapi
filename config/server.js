'use strict';

const cronTasks = require('./src/cron-tasks');

module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  //url: env('BASE_URL', 'http://localhost:1337'),
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2']),
  },
  webhooks: {
    // TODO: V5, set to false by default
    // Receive populated relations in webhook and db lifecycle payloads
    // This only populates relations in all content-manager endpoints
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', true),
  },
  http: {
    serverOptions: {
      requestTimeout: 1000 * 60 * 10, // set request timeout to 600000ms (10 minutes)
    },
  },
});
