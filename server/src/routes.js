const { Router } = require("express");
const db = require("./services/mysql");
const getUser = require("./middlewares/getUsers");

const router = Router();

// LISTAR TODOS OS USUÁRIOS
router.get("/usuarios", (request, response) => {
  let sql = `SELECT * FROM usuario`;

  db.query(sql, (error, data, fields) => {
    if (error) throw error;

    response.json({
      status: 200,
      data,
      message: "Lista de usuário renderizada com sucesso",
    });
  });
});

// LISTAR USUÁRIO INDIVIDUAL
router.get("/usuarios/:id", getUser, (request, response) => {
  const { usuario } = request;

  response.json({
    status: 200,
    usuario,
    message: "Usuario retornado com sucesso!",
  });
});

// CRIAR UM USUáRIO
router.post("/usuarios", (request, response) => {
  let sql = `INSERT INTO usuario(nome, sobrenome, email, profissao_id) VALUES (?)`;

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

// DELETER UM USUÁRIO
router.delete("/usuarios/:id", (request, response) => {
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

// ATUALIZAR DADOS DE UM USUÁRIO
router.put("/usuarios/:id", getUser, (request, response) => {
  const { usuario } = request;

  // const { nome, sobrenome, email } = request.body;
  const { nome } = request.body;
  const { sobrenome } = request.body;
  const { email } = request.body;

  let sql = `UPDATE usuario SET nome = ?, sobrenome = ?, email = ? WHERE id = ?`;

  const novosDados = [
    nome ? nome : usuario[0].nome,
    sobrenome ? sobrenome : usuario[0].sobrenome,
    email ? email : usuario[0].email,
    usuario[0].id,
  ];

  db.query(sql, novosDados, (error, data, fields) => {
    if (error) throw error;

    response.json({
      status: 200,
      data,
      message: "Usuário alterado com sucesso",
    });
  });
});

module.exports = router;

// Upload de foto (URL)
// Autenticação Github
// Autenticação
