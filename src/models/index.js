import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { fileURLToPath } from 'url';
import config from '../config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

const db = {};

const files = fs
  .readdirSync(__dirname)
  .filter(file =>
    file.indexOf('.') !== 0 &&
    file !== 'index.js' &&
    file.endsWith('.js')
  );

for (const file of files) {
  const module = await import(path.join(__dirname, file));

  // ✅ THIS IS THE FIX
  const model = module.default(sequelize);

  if (!model || !model.name) {
    throw new Error(`Model in ${file} is not exporting correctly`);
  }

  db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
