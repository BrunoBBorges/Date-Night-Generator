require("dotenv").config();

module.exports = {
  development: {
    username: "admin",
    password: "",
    database: "date_DB",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: "admin",
    password: "",
    database: "date_DB",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
};