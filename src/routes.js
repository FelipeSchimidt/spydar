const express = require("express");

const route = express.Router();

route.get("/test", (req, res) => {
  res.json({ msg: "teste de rota" });
});

module.exports = route;
