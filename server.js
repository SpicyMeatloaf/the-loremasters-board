const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override');
const port = process.env.PORT || '3000';
require("./config/database");

const indexRouter = require("./routes/index");
const homeRouter = require("./routes/creatures");

const app = express();

// modules
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

app.use("/", indexRouter);
app.use("/home", homeRouter);


app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
  });
  