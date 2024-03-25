'use strict';

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "127.0.0.1"),
        port: env("SMTP_PORT", 25),
        auth: {
          user: env("SMTP_USERNAME", ""),
          pass: env("SMTP_PASSWORD", ""),
        },
        secure: false,
      },
      settings: {
        defaultFrom: env("SMTP_FROM_EMAIL"),
        defaultReplyTo: env("SMTP_FROM_EMAIL"),
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',

      defaultLimit: 25,
      maxLimit: 100,

      apolloServer: {
        tracing: true,
      },
    },
  },
  documentation: {
    config: {
      info: {
        version: '1.0.0',
      },
    },
  },
  myplugin: {
    enabled: true,
    resolve: `./src/plugins/local-plugin`, // From the root of the project
    config: {
      testConf: 3,
    },
  },
});
