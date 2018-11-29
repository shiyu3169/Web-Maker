module.exports = function(app) {
  var websiteModel = require("../models/website/website.model.server");

  // Create Website
  app.post("/api/website", createWebsite);
  // Find Websites For User
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  // Find Website By Id
  app.get("/api/website/:wid", findWebsiteById);
  // Update Website
  app.put("/api/website", updateWebsite);
  // Delete Website
  app.delete("/api/website/:wid", deleteWebsite);

  async function createWebsite(req, res) {
    let website = req.body;
    const data = await websiteModel.createWebsiteForUser(website);
    res.json(data);
  }

  async function findAllWebsitesForUser(req, res) {
    var uid = req.params["uid"];
    const data = await websiteModel.findAllWebsitesForUser(uid);
    res.json(data);
  }

  async function findWebsiteById(req, res) {
    const wid = req.params["wid"];
    const data = await websiteModel.findWebsiteById(wid);
    res.json(data);
  }
  async function updateWebsite(req, res) {
    const website = req.body;
    const wid = website._id;
    const data = await websiteModel.updateWebsite(wid, website);
    res.json(data);
  }
  async function deleteWebsite(req, res) {
    const websiteId = req.params["wid"];
    const data = await websiteModel.deleteWebsite(websiteId);
    res.json(data);
  }
};
