const db = require("../services/mysql");

function getUser(request, response, next) {
  const { id } = request.params;

  let sql = `SELECT * FROM usuario WHERE id = ?`;

  db.query(sql, id, (error, data, fields) => {
    if (error) throw err;

    if (!data) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }

    request.usuario = data;

    return next();
  });
}

module.exports = getUser;
