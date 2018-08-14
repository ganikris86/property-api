const express = require("express");
const router = express.Router();
const { filterProperty } = require("../services/propertyService");
const { validateSchema } = require("../lib/jsonValidator");

router.get("/property", (req, res) => {
  res.send("Property details...");
});

function processProperty(req, res) {
  validateSchema(req.body).then(function(result) {
    if (result.trim() === "") {
      const { payload } = req.body;
      return res.send({ response: filterProperty(payload) });
    } else {
      return res
        .status(400)
        .send({ error: "Could not decode request: JSON parsing failed" });
    }
  });
}

router.post("/property", (req, res) => processProperty(req, res));

router.get("/", (req, res) => {
  res.send("Property details...");
});

router.post("/", (req, res) => processProperty(req, res));

module.exports = router;
