const express = require("express");

//importing parsers
const bodyParser = require("body-parser");

const app = express();

//adding parser middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.app.listen(3000);
