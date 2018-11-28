var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "user" }
);

module.exports = UserSchema;
