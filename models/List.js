const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    note: {
      type: String,
      required: [true, "please enter the note"],
    },
    desc: {
      type: String,
      required: [true, "please enter the description"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("list", listSchema);
