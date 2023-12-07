var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var db = require("./db");

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);
app.use("/api/auth", authRouter);
app.use("/", (req, res) => {
  res.send("Sever is running!");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

//Db connection
// Connect to the database (call this once at the start of your application)
db.connectToDatabase();

// Handle Ctrl+C (SIGINT) and graceful shutdown
process.on("SIGINT", () => {
  console.log("Received SIGINT. Closing database connection...");
  db.closeDatabaseConnection()
    .then(() => {
      console.log("Database connection closed.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Error closing database connection:", err);
      process.exit(1);
    });
});

// Handle graceful shutdown on SIGTERM (e.g., when using process managers like PM2)
process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Closing database connection...");
  db.closeDatabaseConnection()
    .then(() => {
      console.log("Database connection closed.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Error closing database connection:", err);
      process.exit(1);
    });
});

module.exports = app;
// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const db = require("./db");

// const indexRouter = require("./routes/index");
// const authRouter = require("./routes/auth");

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));

// app.use("/", indexRouter);
// app.use("/auth", authRouter);

// // Db connection
// db.connectToDatabase();

// module.exports = app;
