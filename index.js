const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
const home = require(__dirname + "./routes/home");
app.set('view engine', 'ejs');





app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));





// Routes
app.use("/", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
