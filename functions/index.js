const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51MiKknSFw2QbcGxaNRQ0JIzEJT249Tfz9uQuwlTFgP5VS7uHdBhB4MhrWppbpC6JNDVIKz2wWpmoAyLQ8MQB2c8r00OeiWFwFN",
);

// API

// App config

const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// Api routes --'/'
app.get("/", (request, response) => response.status(200).send("Hello World!"));


// Listen command
exports.api = functions.https.onRequest(app)