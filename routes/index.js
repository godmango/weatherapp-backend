var express = require("express");
var router = express.Router();
const weatherController = require("../controller/weatherController");

/* GET home page. */
router.get("/city", weatherController.getWeatherData);
router.get("/", weatherController.getCurrentLocationData);

module.exports = router;
