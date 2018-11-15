import { Component, OnInit } from "@angular/core";
import { WebsiteService } from "src/app/services/website.service.client";
import { ActivatedRoute, Router } from "@angular/router";
import { Website } from "src/app/models/website.model.client";

@Component({
  selector: "app-website-new",
  templateUrl: "./website-new.component.html",
  styleUrls: ["./website-new.component.css"]
})
export class WebsiteNewComponent implements OnInit {
  websites: Website[];
  uid: string;
  name: string;
  description: string;

  constructor(
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.websiteService
        .findWebsitesByUser(this.uid)
        .subscribe((websites: Website[]) => {
          this.websites = websites;
        });
    });
  }

  createWebsite() {
    const website: Website = {
      name: this.name,
      description: this.description,
      developerId: this.uid
    };
    this.websiteService.createWebsite(website).subscribe((website: Website) => {
      this.router.navigate(["user", this.uid, "website"]);
    });
  }
}
