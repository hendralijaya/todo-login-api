const Account = require("../models/Account");

module.exports.register_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const account = await Account.create({ email, password });
    res.status(201).json({ account: account.email, msg: "Account has been created" });
  } catch (err) {
    console.log(err);
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const account = await Account.login(email, password);
    res.status(200).json({ account: account.email, msg: "Successfully login" });
  } catch (err) {
    console.log(err);
  }
};
