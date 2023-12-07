require("dotenv").config();
const jwt = require("jsonwebtoken");
const { executeQuery } = require("../db");

async function userLogin(req, res) {
  const { Username, Password } = req.body;

  const query = `SELECT * FROM Users where UserName=\'${Username}\' AND Passward=\'${Password}\'`;

  try {
    // Execute the query using the executeQuery function
    const results = await executeQuery(query);
    if (results.length === 0) {
      return res.send({ error: "Invalid Credentials / User Not Exist" });
    }

    const user = results[0];

    const payload = {
      CCode: user.CCode,
      UserId: user.UserId,
      Username: user.UserName,
    };

    // Generate a JWT tokenni
    const token = jwt.sign(payload, "12jk@i%4^&&!&1hjkbh@UhjbnY67tyuGJ", {
      expiresIn: "1h",
    });

    console.log(user);

    return res.status(200).send({
      success: "Logged in",
      token: token,
      CCode: user.CCode,
      UserId: user.UserId,
      Username: user.UserName,
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = { userLogin };
