module.exports = ({ config }) => {
  const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: config.db.host,
      port: config.db.port,
      user: config.db.username,
      password: config.db.password,
      database: config.db.database,
    },
  });

  return knex;
};
