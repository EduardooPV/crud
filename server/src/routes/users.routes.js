const Router = require("express");
const getUser = require("../Users/middlewares/getUsers");
const Users = require("../users");

const usersRoutes = Router();

usersRoutes.get("/:email", (request, response) => {
  Users.listOnlyOneUser(request, response);
});

usersRoutes.get("/", (request, response) => {
  Users.listUsers(request, response);
});

usersRoutes.post("/", (request, response) => {
  Users.createUser(request, response);
});

usersRoutes.delete("/:email", getUser, (request, response) => {
  Users.deleteUser(request, response);
});

usersRoutes.put("/:email", getUser, (request, response) => {
  Users.editUser(request, response);
});

module.exports = usersRoutes;
