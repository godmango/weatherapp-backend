const weatherController = {};
require("dotenv").config();
const apikey = process.env.OPEN_WEATHER_KEY;
const axios = require("axios");

weatherController.getWeatherData = async (req, res, next) => {
	try {
		// console.log("req:", req);
		const city = req.query.q;
		console.log("thats req", req.query.name, req.query.city);
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
		// console.log("the url", url);
		let response = await axios.get(url);
		// console.log("the response", response);
		res.send({ status: "get data successful", data: response.data });
	} catch (err) {
		res.send({ status: "fail", data: err.message });
	}
};

weatherController.getCurrentLocationData = async (req, res, next) => {
	try {
		// console.log("location query", req.query.lat);
		const latitude = req.query.lat;
		const longitude = req.query.lon;
		console.log(latitude, longitude);
		url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
		console.log(url);
		let response = await axios.get(url);
		console.log("yoo", response);
		res.send({ status: "successful current location", data: response.data });
	} catch (err) {
		console.log(err.message);
		res.send({ status: "fail", data: err.message });
	}
};

module.exports = weatherController;
