// jshint esverion: 6

const express = require("express");
const path = require("path");
const fs = require("file-system");
const Excel = require("exceljs");

//sample
const app = express();

const port = 4000;
const myhost = "0.0.0.0";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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

const workbook = new Excel.Workbook();
const sheet = workbook.addWorksheet("L&M consumers");
sheet.columns = [
  { header: "ConsumerId", key: "id", width: 10 },
  { header: "Name", key: "name", width: 30 },
  { header: "Product", key: "product", width: 30, outlineLevel: 1 },
  { header: "Sale", key: "sale", width: 20, outlineLevel: 1 }
];
const iftWorkbook = new Excel.Workbook();
const iftSheet = iftWorkbook.addWorksheet("IFT files");
iftSheet.columns = [
  { header: "Consumer ID", key: "id", width: 10 },
  { header: "Name", key: "name", width: 30 },
  { header: "Product ID", key: "productId", width: 30, outlineLevel: 1 },
  { header: "Product Name", key: "productName", width: 20, outlineLevel: 1 },
  { header: "Product Count", key: "productCount", width: 20, outlineLevel: 1 }
];

let rowCounter = 1;

app.get("/", (req, res) => {
  console.log("Sent res on how to struct data\n\n");
  console.log(template);
  res.send(template);
});

app.post("/", (req, res) => {
  console.log(req.body);

  sheet.addRow({
    id: rowCounter,
    name: req.body.name,
    product: req.body.product.prodName,
    sale: "some value"
  });
  workbook.xlsx.writeFile("LM-xlsxSheet").then(() => {
    console.log("updated File, L&M xlsx");
  });
  workbook.csv.writeFile("LM-csvSheet").then(() => {
    console.log("updated File, L&M csv");
  });

  iftSheet.addRow({
    id: rowCounter,
    name: req.body.name,
    productId: req.body.product.prodId,
    productName: req.body.product.prodName,
    productCount: req.body.product.prodCount
  });
  iftWorkbook.xlsx.writeFile("IFT-xlsxSheet").then(() => {
    console.log("updated File, ift xlsx");
  });
  iftWorkbook.csv.writeFile("IFT-csvSheet").then(() => {
    console.log("updated File, ift csv");
  });

  rowCounter++;
  res.send(req.body);
});

app.listen(port, myhost, () => {
  console.log(`Server is listening at ${myhost}:${port}...`);
});
