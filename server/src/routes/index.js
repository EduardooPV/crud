const Router = require("express");

const usersRoutes = require("./users.routes");

const router = Router();

router.use("/usuarios", usersRoutes);

module.exports = router;
