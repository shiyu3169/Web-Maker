const mongoose = require("mongoose");
const WidgetSchema = require("./widget.schema.server");
const WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;

function createWidget(widget) {
  return WidgetModel.create(widget);
}

function findAllWidgetsForPage(pid) {
  return WidgetModel.find({ pageId: pid });
}

function findWidgetById(wgid) {
  return WidgetModel.findById(wgid);
}

function updateWidget(wgid, widget) {
  return WidgetModel.updateOne({ _id: wgid }, widget);
}

function deleteWidget(wgid) {
  return WidgetModel.deleteOne({ _id: wgid });
}

module.exports = WidgetModel;
