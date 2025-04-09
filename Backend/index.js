const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app'); // importa tu app.js o app.ts con Express configurado

module.exports = serverlessExpress({ app });
