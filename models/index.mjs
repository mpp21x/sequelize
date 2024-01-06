import {Sequelize, DataTypes} from 'sequelize';
import fs from 'fs';
import path from 'path';
import process from 'process';

var db = {};

const sequelize = new Sequelize('app', 'root', 'root', {
  host: 'app-db',
  dialect: 'mysql', // mysql, sqlite, postgresql
});

await sequelize.authenticate();
console.log('Connection has been established successfully.');

const folderPath = `${process.cwd()}/models`;
const files = fs.readdirSync(folderPath);

for(const file of files) {
  if(file.includes('index.')){
    continue;
  }
  const model = (await import(`${folderPath}/${file}`)).default(sequelize, DataTypes);
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