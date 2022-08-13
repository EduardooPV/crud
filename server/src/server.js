const express = require("express");
const cors = require("cors");

const router = require("./routes/index");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running in port: :${port}`);
});
