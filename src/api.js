const express = require("express");
const serverless = require("serverless-http");
import STRIPE_PK from "./js/apikey";

const app = express();
const router = express.Router();

const newString = "STRIPE_PK";

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    test: newString,
  });
});

router.get("/api-test", (req, res) => {
  res.json({
    test: "hi!",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
