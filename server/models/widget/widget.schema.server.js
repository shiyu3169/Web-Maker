const mongoose = require("mongoose");

const WidgetSchema = mongoose.Schema(
  {
    pageId: { type: mongoose.Schema.Types.ObjectId, ref: "PageModel" },
    widgetType: { type: String, enum: ["HEADING", "IMAGE", "YOUTUBE"] },
    name: String,
    text: String,
    url: String,
    width: String,
    size: Number,
    dateCreated: { type: Date, defualt: Date.now }
  },
  { collection: "widget" }
);

module.exports = WidgetSchema;
