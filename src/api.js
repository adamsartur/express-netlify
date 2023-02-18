const express = require("express");
const serverless = require("serverless-http");

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_PK);

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    test: "newString",
  });
});

router.get("/api-test", async (req, res) => {
  const products = await stripe.products
    .list({
      limit: 3,
    })
    .then((products) => {
      res.json({
        test: products,
      });
    });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
