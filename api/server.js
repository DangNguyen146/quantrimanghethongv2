// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./DB.js");
const personsRoute = require("./persons.route");

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/persons", personsRoute);

app.listen(process.env.PORT || 4000);
