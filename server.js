require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const router = require('./routes/index');
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))
app.use("/", router);
//app.use(morgan("tiny"));

mongoose.connect("mongodb+srv://tiyamaria:timast96@cluster0.l99fr.mongodb.net/keeperDB",{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false});
mongoose.connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

let port = process.env.PORT||5000;
app.listen(port, function() {
  console.log("Server started on port " +port);
});