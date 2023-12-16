const mongoose = require("mongoose");

const test = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Test", test);
