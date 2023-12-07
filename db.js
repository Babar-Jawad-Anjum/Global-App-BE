const sql = require("mssql");

// Configuration for the database connection
const config = {
  user: "apps_dba",
  password: "Apps@*786",
  server: "66.165.248.146",
  database: "GS_Apps",
  options: {
    encrypt: false, // Set to true if using Azure
    trustServerCertificate: true,
  },
};

// Function to connect to the database
async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log("Connected to SQL Server");
  } catch (err) {
    console.error("Error connecting to SQL Server:", err);
  }
}

// Function to execute a query
async function executeQuery(query) {
  try {
    const result = await sql.query(query);
    return result.recordset;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}

// Function to close the database connection
async function closeDatabaseConnection() {
  try {
    await sql.close();
    console.log("Connection closed.");
  } catch (err) {
    console.error("Error closing connection:", err);
  }
}

module.exports = {
  connectToDatabase,
  executeQuery,
  closeDatabaseConnection,
};
