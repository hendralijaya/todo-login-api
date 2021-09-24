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
    const account = await Account.findOne({ email });
    if (account) {
      if (password === account.password) {
        res.status(200).json({ account: account.email, msg: "Login successfully" });
      } else {
        res.status(400).json({ msg: "Wrong password" });
      }
    } else {
      res.status(400).json({ msg: "Wrong email" });
    }
  } catch (err) {
    console.log(err);
  }
};
