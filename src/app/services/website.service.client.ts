import { Injectable } from "@angular/core";
import { Website } from "../models/website.model.client";

// injecting service into module
@Injectable()
export class WebsiteService {
  constructor() {}
  websites: Website[] = [
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

  createWebsite(website: Website) {
    website._id = Math.random().toString();
    this.websites.push(website);
    return website;
  }

  findWebsitesByUser(userId: string) {
    let result = [];
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i].developerId === userId) {
        result.push(this.websites[i]);
      }
    }
    return result;
  }

  findWebsiteById(websiteId: string) {
    for (let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        return this.websites[i];
      }
    }
  }

  updateWebsite(website: Website) {
    const oldWeb = this.findWebsiteById(website._id);
    const index = this.websites.indexOf(oldWeb);
    this.websites[index] = website;
  }

  deleteWebsite(websiteId: string) {
    const website = this.findWebsiteById(websiteId);
    const index = this.websites.indexOf(website);
    this.websites.splice(index, 1);
  }
}
