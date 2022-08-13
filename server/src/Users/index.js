const db = require("../services/mysql");

class User {
  listOnlyOneUser(request, response) {
    const { email } = request.params;

    let sql = "SELECT * FROM usuario WHERE email = ?";

    db.query(sql, email, (error, data, fields) => {
      if (error) throw error;

      console.log(data);

      if (data.length === 0) {
        return response.status(404).json({ error: "Usuário não encontrado" });
      }

      response.json({
        status: 200,
        message: "Usuario retornado com sucesso!",
        data,
      });
    });
  }

  listUsers(request, response) {
    let sql = `SELECT * FROM usuario`;

    db.query(sql, (error, data, fields) => {
      if (error) throw error;

      return response.status(200).json({
        status: 200,
        message: "Lista de usuário renderizada com sucesso.",
        data,
      });
    });
  }

  createUser(request, response) {
    let sql = `INSERT INTO usuario(nome, sobrenome, email, profissao_id) VALUES (?)`;

    const usuario = [
      request.body.nome,
      request.body.sobrenome,
      request.body.email,
      request.body.profissao_id,
    ];

    db.query(sql, [usuario], (error, data, fields) => {
      if (error) throw error;

      return response.status(201).json({
        status: 200,
        message: "Usuário cadastrado com sucesso.",
        usuario,
      });
    });
  }

  deleteUser(request, response) {
    const { usuario } = request;

    if (!usuario) {
      return response
        .status(404)
        .json({ status: 404, message: "Usuário não encontrado." });
    }

    let sql = `DELETE FROM usuario WHERE email = ?`;

    db.query(sql, usuario.email, (error, data, fields) => {
      if (error) throw error;

      return response.status(200).json({
        status: 200,
        message: `Usuário com e-mail: ${usuario.email} deleteado com sucesso.`,
      });
    });
  }

  editUser(request, response) {
    const { usuario } = request;

    if (!usuario) {
      return response
        .status(404)
        .json({ status: 404, message: "Usuário não encontrado." });
    }

    const { nome, sobrenome, email } = request.body;

    let sql = `UPDATE usuario SET nome = ?, sobrenome = ?, email = ? WHERE id = ?`;

    const novosDados = [
      nome ? nome : usuario.nome,
      sobrenome ? sobrenome : usuario.sobrenome,
      email ? email : usuario.email,
      usuario.id,
    ];

    db.query(sql, novosDados, (error, data, fields) => {
      if (error) throw error;

      response.json({
        status: 200,
        message: "Usuário alterado com sucesso",
      });
    });
  }
}

module.exports = new User();
