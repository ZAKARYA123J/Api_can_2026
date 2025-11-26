import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Load config
import configFile from '../config/config.js';
const config = configFile[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export default (async () => {
  const files = fs.readdirSync(__dirname).filter(
    (file) =>
      file !== basename &&
      file.endsWith('.js') &&
      !file.endsWith('.test.js')
  );

  for (const file of files) {
    const module = await import(path.join(__dirname, file));
    const model = module.default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }


  Object.values(db).forEach((model) => {
    if (model.associate) {
      model.associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
})();
