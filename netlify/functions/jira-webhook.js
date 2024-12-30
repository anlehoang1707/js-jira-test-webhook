const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Webhook route
app.post("/webhook", (req, res) => {
  const webhookData = req.body;

  // Log the data for debugging
  console.log("Webhook received:", webhookData);

  // Respond back to Jira
  res.status(200).json({
    message: "Webhook received successfully",
  });
});

module.exports.handler = serverless(app);
