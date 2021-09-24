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

const Account = mongoose.model("account", accountSchema);

module.exports = Account;
