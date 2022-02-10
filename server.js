const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const hbs = require("express-handlebars");
var helpers = require("handlebars-helpers")();
const cookierParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();

// Load app routes
// const auth = require("./routes/auth");
// const dashboard = require('./routes/dashboard');
const root = require("./routes/root");
const admin = require("./routes/admin");

const app = express();

app.engine("hbs", hbs({ extname: "hbs", helpers: helpers }));
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "hbs");

app.use(express.static("public"));

app.use(cookierParser(process.env.cookie_key));

// Enable cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set the app to make use of the routes
app.use("/", root);
app.use("/admin", admin);

// Connect to the mongodb
// mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => console.log(err));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App has Started on port ${port}`);
});

// bebelinda was here