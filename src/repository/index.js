import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

const basename = path.basename(__filename);
const db = {};

let sequelize;

const loadDatabase = async () => {
  sequelize = new Sequelize(process.env.DB, process.env.USERNAME, "", {
    host: process.env.HOST,
    port: 3307,
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  try {
    await sequelize.authenticate();
    console.log("", "", "Connection has been established successfully.");
  } catch (error) {
    console.log(
      "",
      "",
      "Unable to connect to the database:" + JSON.stringify(error)
    );
  }

  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize);
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
};

setTimeout(() => loadDatabase(), 2000);

export default db;
