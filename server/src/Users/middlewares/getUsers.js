const db = require("../../services/mysql");

function getUser(request, response, next) {
  const { email } = request.params;

  let sql = `SELECT * FROM usuario WHERE email = ?`;

  db.query(sql, email, (error, data, fields) => {
    if (error) throw error;

    if (!data) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }

    request.usuario = data[0];

    return next();
  });
}

module.exports = getUser;
