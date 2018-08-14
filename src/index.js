const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const property = require('./routes/property');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// routes
app.get("/property", property);
app.post("/property", property);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error(`Not Found: ${req.url}`);
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    const content = {
      success: false,
      status: err.status,
      url: req.url,
      method: req.method,
      error: "Internal error",
    };
    res.status(err.status || 500).json(content);
    next(err);
});


server = http.createServer(app);
server.listen(8000, () => {
    console.log("App is listening in port 8000");
});