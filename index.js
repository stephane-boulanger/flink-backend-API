require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.get("/", async (req, res) => {
  try {
    await axios({
      method: "get",
      url: "https://lereacteur-bootcamp-api.herokuapp.com/api/flink",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4MzBlNzNiOWZiODAwMTYyZjUxMzEiLCJlbWFpbCI6InN0ZXBoYW5lLmFobWVkYm91bGFuZ2VyQGdtYWlsLmNvbSIsImV4cGlyYXRpb25EYXRlIjoiMjAyMi0xMS0yNlQwMDowMDowMC4wMDBaIiwiaXNUcmFpbmluZyI6dHJ1ZSwiaWF0IjoxNjYyMTk5NzU5fQ.kYr7whuDU7N-eQ7ixTBpIv_r4rbHeOeEoWsJZctmeyk",
      },
    })
      .then(function (response) {
        console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/locations", async (req, res) => {
  try {
    await axios({
      method: "get",
      url: "https://lereacteur-bootcamp-api.herokuapp.com/api/flink/locations/hubs",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4MzBlNzNiOWZiODAwMTYyZjUxMzEiLCJlbWFpbCI6InN0ZXBoYW5lLmFobWVkYm91bGFuZ2VyQGdtYWlsLmNvbSIsImV4cGlyYXRpb25EYXRlIjoiMjAyMi0xMS0yNlQwMDowMDowMC4wMDBaIiwiaXNUcmFpbmluZyI6dHJ1ZSwiaWF0IjoxNjYyMTk5NzU5fQ.kYr7whuDU7N-eQ7ixTBpIv_r4rbHeOeEoWsJZctmeyk",
      },
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/categories", async (req, res) => {
  try {
    await axios({
      method: "get",
      url: "https://lereacteur-bootcamp-api.herokuapp.com/api/flink/categories",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4MzBlNzNiOWZiODAwMTYyZjUxMzEiLCJlbWFpbCI6InN0ZXBoYW5lLmFobWVkYm91bGFuZ2VyQGdtYWlsLmNvbSIsImV4cGlyYXRpb25EYXRlIjoiMjAyMi0xMS0yNlQwMDowMDowMC4wMDBaIiwiaXNUcmFpbmluZyI6dHJ1ZSwiaWF0IjoxNjYyMTk5NzU5fQ.kYr7whuDU7N-eQ7ixTBpIv_r4rbHeOeEoWsJZctmeyk",
      },
    })
      .then(function (response) {
        console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/products", async (req, res) => {
  try {
    await axios({
      method: "get",
      url: "https://lereacteur-bootcamp-api.herokuapp.com/api/flink/products",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4MzBlNzNiOWZiODAwMTYyZjUxMzEiLCJlbWFpbCI6InN0ZXBoYW5lLmFobWVkYm91bGFuZ2VyQGdtYWlsLmNvbSIsImV4cGlyYXRpb25EYXRlIjoiMjAyMi0xMS0yNlQwMDowMDowMC4wMDBaIiwiaXNUcmFpbmluZyI6dHJ1ZSwiaWF0IjoxNjYyMTk5NzU5fQ.kYr7whuDU7N-eQ7ixTBpIv_r4rbHeOeEoWsJZctmeyk",
      },
      data: data,
    })
      .then(function (response) {
        console.log(response.data);
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(4000, () => {
  console.log("Server has started !");
});
