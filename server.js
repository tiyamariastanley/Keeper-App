require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const router = require('./routes/index');
const path = require("path");
const _dirname = path.resolve(path.dirname(''));

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false});
mongoose.connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use("/api", router);

app.use((err,req,res,next) =>{
  res.status(500).send({message: err.message});
})

if(process.env.NODE_ENV === "production"){
  app.use(express.static('frontend/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

let port = process.env.PORT||5000;
app.listen(port, function() {
  console.log("Server started on port " +port);
});
