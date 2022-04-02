const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
  },

  email: {
    type: "string",
    unique: [true, "email already exist"],
    required: [true, "you must have an email"],
  },

  phone: {
    type: "string",
    required: [true, "you must have phone number"],
  },

  password: {
    type: "string",
    required: [true, "you must have password"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
