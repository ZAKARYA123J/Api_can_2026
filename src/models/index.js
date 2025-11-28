import fs from "fs";
import path from "path";
import Sequelize, { DataTypes } from "sequelize"; // Added DataTypes import for common use
//  Added pathToFileURL to correctly convert paths to file URLs
import { fileURLToPath, pathToFileURL } from "url";
import config from "../config/config.cjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || "development";
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
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== "index.js" && file.endsWith(".js")
  );

for (const file of files) {
  
  const filePath = path.join(__dirname, file);

  
  const fileUrl = pathToFileURL(filePath).href;

 
  const module = await import(fileUrl); 

  const model = module.default(sequelize, DataTypes);

  if (!model || !model.name) {
    throw new Error(`Model in ${file} is not exporting correctly`);
  }

  db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
