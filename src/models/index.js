import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { fileURLToPath } from 'url';
import config from '../config/config.cjs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

const db = {};

// list files in this directory and ignore the current file
const files = fs
  .readdirSync(dirname)
  .filter(file =>
    file.indexOf('.') !== 0 &&
    file !== path.basename(filename) &&   // skip this index.js file regardless of name
    file.endsWith('.js')
  );

for (const file of files) {
  // use the dirname you computed above (not __dirname)
  const fileUrl = new URL(file, import.meta.url);
  const imported = await import(fileUrl.href);

  // assume default export is a function that returns a model
  const model = imported.default(sequelize);

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
