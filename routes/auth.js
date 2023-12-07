var express = require("express");
const { userLogin } = require("../controllers/auth");
var router = express.Router();

/* GET home page. */
router.post("/login", userLogin);

module.exports = router;
