var mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: "",
  database: process.env.DATABASE,
});

module.exports = db