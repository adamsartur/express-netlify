const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    test: "hi!",
  });
});

router.get("/api-test", (req, res) => {
  res.json({
    test: "hi!",
  });
});

app.use(``, router);

module.exports = app;
module.exports.handler = serverless(app);
