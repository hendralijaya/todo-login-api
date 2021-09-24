const Account = require("../models/Account");

module.exports.register_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const account = await Account.create({ email, password });
    res.status(201).send("Account has been created").json({ account });
  } catch (err) {
    console.log(err);
  }
};
