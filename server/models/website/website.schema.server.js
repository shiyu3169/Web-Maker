const mongoose = require("mongoose");

const WebsiteSchema = mongoose.Schema(
  {
    name: String,
    developerId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    description: String,
    dateCreated: { type: Date, dafault: Date.now }
  },
  { collection: "website" }
);

module.exports = WebsiteSchema;
