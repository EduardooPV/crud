const express = require("express");
var mysql = require("mysql"); 

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log("Server is running...");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usuarios_teste",
});

db.connect();

// READ
app.get("/usuarios", (request, response) => {
  let sql = `SELECT * FROM usuario`;

  db.query(sql, (error, data, fields) => {
    if (error) throw err;

    response.json({
      status: 200,
      data,
      message: "Lista de usuário renderizada com sucesso",
    });
  });
});

// CREATE
app.post("/usuarios", (request, response) => {
  let sql = `INSERT INTO usuario(nome, sobrenome, email, profissao_id) VALUES (?)`;

  console.log(request.body);

  const usuario = [
    request.body.nome,
    request.body.sobrenome,
    request.body.email,
    request.body.profissao_id,
  ];

  db.query(sql, [usuario], (error, data, fields) => {
    if (error) throw error;

    response.json({
      status: 200,
      message: "Usuário cadastrado com sucesso",
    });
  });
});

// DELETE
app.delete("/usuarios/:id", (request, response) => {
  const { id } = request.params;

  let sql = `DELETE FROM usuario WHERE id = ?`;

  db.query(sql, id, (error, data, fields) => {
    if (error) throw err;

    response.json({
      status: 200,
      message: "Usuário deletado",
    });
  });
});

// UPDATE
