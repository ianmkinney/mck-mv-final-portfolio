const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { noteRouter, authRouter, toneRouter } = require("./routers/index");
const PORT = process.env.PORT || 7500;

const app = express();

// connect to db


app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Serve static files from React build
app.use(express.static(path.join(__dirname, "client/build")));

// Add routes
app.use("/api/note", noteRouter);
app.use("/auth", authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ message: err.message });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on ${PORT}`);
});
