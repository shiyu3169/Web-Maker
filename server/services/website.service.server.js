module.exports = function(app) {
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

  websites = [
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
    { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    {
      _id: "567",
      name: "Tic Tac Toe",
      developerId: "123",
      description: "Lorem"
    },
    { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
  ];

  function createWebsite(req, res) {
    let website = req.body;
    website._id = Math.random().toString();
    websites.push(website);
    res.json(website);
  }
  function findAllWebsitesForUser(req, res) {
    let result = [];
    const userId = req.params["uid"];
    for (let i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        result.push(websites[i]);
      }
    }
    res.json(result);
  }

  function selectWebsiteById(wid) {
    for (let i = 0; i < websites.length; i++) {
      if (websites[i]._id === wid) {
        return websites[i];
      }
    }
  }

  function findWebsiteById(req, res) {
    const wid = req.params["wid"];
    const website = selectWebsiteById(wid);
    res.json(website);
  }
  function updateWebsite(req, res) {
    const website = req.body;
    const oldWeb = selectWebsiteById(website._id);
    const index = websites.indexOf(oldWeb);
    this.websites[index] = website;
    res.json(website);
  }
  function deleteWebsite(req, res) {
    const websiteId = req.params["wid"];
    const website = selectWebsiteById(websiteId);
    const index = websites.indexOf(website);
    websites.splice(index, 1);
    res.json(websites);
  }
};
