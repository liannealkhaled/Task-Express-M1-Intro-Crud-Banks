const express = require("express");
const accountRoutes = require("./api/accounts/routes");
const app = express();

app.use(express.json());

app.use("/", accountRoutes);

app.listen(8000, () => {
  console.log("hello there");
});
