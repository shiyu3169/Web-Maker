module.exports = function(app) {
  const widgetModel = require("../models/widget/widget.model.server");
  // Create Widget
  app.post("/api/widget", createWidget);
  // Find All Widgets For Page
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  // Find Widget By Id
  app.get("/api/widget/:wgid", findWidgetById);
  // Update Widget
  app.put("/api/widget", updateWidget);
  // Delete Widget
  app.delete("/api/widget/:wgid", deleteWidget);

  async function createWidget(req, res) {
    let widget = req.body;
    const data = await widgetModel.createWidget(widget);
    res.json(data);
  }

  async function findAllWidgetsForPage(req, res) {
    const pid = req.params["pid"];
    const data = await widgetModel.findAllWidgetsForPage(pid);
    res.json(data);
  }

  async function findWidgetById(req, res) {
    const wgid = req.params["wgid"];
    const data = await widgetModel.findById(wgid);
    res.json(data);
  }

  async function updateWidget(req, res) {
    const widget = req.body;
    const wgid = widget._id;
    const data = await widgetModel.updateWidget(wgid, widget);
    res.json(data);
  }

  async function deleteWidget(req, res) {
    const wgid = req.params["wgid"];
    const data = await widgetModel.deleteWidget(wgid);
    res.json(data);
  }
};
