const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "development";
const config = require('./config.json')[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

const models = {
    Tracks: sequelize.import('./track'),
    Users: sequelize.import('./user')
}

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;