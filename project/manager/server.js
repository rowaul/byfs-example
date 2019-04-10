// jshint esverion: 6

const express = require("express");
const path = require("path");
const fs = require("file-system");

//sample
const app = express();

const port = 3050;
const myhost = "0.0.0.0";

app.use(express.json());

const template = {
  name: "test",
  company: "test",
  date: "test",
  product: {
    prodName: "test",
    prodCount: "test",
    prodID: "test",
    prodLoc: "test"
  }
};
app.get("/", (req, res) => {
  console.log("Sent res on how to struct data\n\n");
  console.log(template);
  res.send(template);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, myhost, () => {
  console.log(`Server is listening at ${myhost}:${port}...`);
});
