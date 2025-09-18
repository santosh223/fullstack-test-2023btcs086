const express = require("express");
const routes = express.Router();


const {ContactForm} = require("../controller/ContactFormController");

routes.post("/contactForm", ContactForm);

module.exports = routes;