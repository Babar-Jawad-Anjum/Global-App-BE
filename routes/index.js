var express = require("express");
const {
  getCustomers,
  getSuppliers,
  getStocks,
  getBanks,
  getAverage,
  getLedgerData,
} = require("../controllers");
var router = express.Router();

/* GET home page. */
router.get("/getCustomers/:CCode", getCustomers);
router.get("/getSuppliers/:CCode", getSuppliers);
router.get("/getStocks/:CCode", getStocks);
router.get("/getBanks/:CCode", getBanks);
router.get("/getAverage/:CCode", getAverage);
router.post("/getLedgerData", getLedgerData);

module.exports = router;
