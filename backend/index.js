const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.BACKEND_PORT;

app.use("/auth", require("./router/auth.js"));
app.use("/forgotpass", require("./router/forgotpass.js"));

connectToMongo();

app.listen(port, () => {
  console.log(`Example listening at port http://localhost:${port}`);
});
