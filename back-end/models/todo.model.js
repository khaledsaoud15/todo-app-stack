const mongoose = require("mongoose");

const todoModel = mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Todos", todoModel);
