const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

mongoose.connect("mongodb+srv://tiyamaria:timast96@cluster0.l99fr.mongodb.net/keeperDB",{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false});
mongoose.connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

//app.use("/", router);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, function() {
  console.log("Server started on port " +port);
});
