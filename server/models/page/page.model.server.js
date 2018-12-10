const mongoose = require("mongoose");
const PageSchema = require("./page.schema.server");
const PageModel = mongoose.model("PageModel", PageSchema);

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

function createPage(page) {
  return PageModel.create(page);
}

function findAllPagesForWebsite(wid) {
  return PageModel.find({ websiteId: wid });
}

function findPageById(pid) {
  //   return PageModel.findOne({ _id: pid });
  return PageModel.findById(pid);
}

function updatePage(pid, page) {
  return PageModel.updateOne({ _id: pid }, page);
}

function deletePage(pid) {
  return PageModel.deleteOne({ _id: pid });
}

module.exports = PageModel;
