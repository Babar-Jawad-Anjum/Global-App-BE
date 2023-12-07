const { executeQuery } = require("../db");

async function getCustomers(req, res) {
  try {
    const CCode = req.params.CCode;
    const query = `SELECT * FROM GS_CustomerBalances where CCode='${CCode}'`;

    // Execute the query using the executeQuery function
    const results = await executeQuery(query);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
}
async function getSuppliers(req, res) {
  try {
    const CCode = req.params.CCode;
    const query = `SELECT * FROM GS_SupplierBalances where CCode='${CCode}'`;

    // Execute the query using the executeQuery function
    const results = await executeQuery(query);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
}
async function getStocks(req, res) {
  try {
    const CCode = req.params.CCode;
    const query = `SELECT * FROM GS_StockBalances where CCode='${CCode}'`;

    // Execute the query using the executeQuery function
    const results = await executeQuery(query);
    console.log(results);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
}
async function getBanks(req, res) {
  try {
    const CCode = req.params.CCode;
    const query = `SELECT * FROM GS_BankBalances where CCode='${CCode}'`;

    // Execute the query using the executeQuery function
    const results = await executeQuery(query);
    console.log(results);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
}
async function getAverage(req, res) {
  try {
    const CCode = req.params.CCode;
    const query = `SELECT * FROM GS_Average where CCode='${CCode}'`;

    // Execute the query using the executeQuery function
    const results = await executeQuery(query);
    console.log(results);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCustomers,
  getSuppliers,
  getStocks,
  getBanks,
  getAverage,
};
