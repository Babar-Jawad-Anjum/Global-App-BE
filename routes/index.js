var express = require("express");
const { executeQuery } = require("../db");
const {
  getCustomers,
  getSuppliers,
  getStocks,
  getBanks,
  getAverage,
} = require("../controllers");
var router = express.Router();

/* GET home page. */
router.get("/getCustomers/:CCode", getCustomers);
router.get("/getSuppliers/:CCode", getSuppliers);
router.get("/getStocks/:CCode", getStocks);
router.get("/getBanks/:CCode", getBanks);
router.get("/getAverage/:CCode", getAverage);

module.exports = router;
