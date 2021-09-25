const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    validate: [isEmail, "Enter a valid email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

// Sebelum dimasukkan ke MongoDB
accountSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// membuat statics login
accountSchema.statics.login = async function (email, password) {
  const account = await this.findOne({ email });
  if (account) {
    const auth = await bcrypt.compare(password, account.password);
    if (auth) {
      return account;
    }
    throw Error("Wrong credentials");
  }
  throw Error("Wrong credentials");
};

const Account = mongoose.model("account", accountSchema);

module.exports = Account;
