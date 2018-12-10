const mongoose = require("mongoose");

const PageSchema = mongoose.Schema(
  {
    websiteId: { type: mongoose.Schema.Types.ObjectId, ref: "WebsiteModel" },
    name: String,
    title: String,
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "page" }
);

module.exports = PageSchema;
