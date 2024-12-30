const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Request received:");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  res.status(200).json({ message: "Webhook received successfully" });
});

module.exports.handler = serverless(app);
