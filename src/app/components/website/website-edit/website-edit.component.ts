import { Component, OnInit } from "@angular/core";
import { WebsiteService } from "src/app/services/website.service.client";
import { ActivatedRoute, Router } from "@angular/router";
import { Website } from "src/app/models/website.model.client";

@Component({
  selector: "app-website-edit",
  templateUrl: "./website-edit.component.html",
  styleUrls: ["./website-edit.component.css"]
})
export class WebsiteEditComponent implements OnInit {
  websites: Website[];
  uid: string;
  wid: string;
  website: Website;

  constructor(
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.websiteService
        .findWebsitesByUser(this.uid)
        .subscribe((websites: Website[]) => {
          this.websites = websites;
        });
      this.websiteService
        .findWebsiteById(this.wid)
        .subscribe((website: Website) => {
          this.website = website;
        });
    });
  }

  update() {
    const newWeb: Website = {
      name: this.website.name,
      description: this.website.description,
      _id: this.wid,
      developerId: this.uid
    };

    this.websiteService.updateWebsite(newWeb).subscribe((website: Website) => {
      this.router.navigate(["user", this.uid, "website"]);
    });
  }

  delete() {
    this.websiteService
      .deleteWebsite(this.wid)
      .subscribe((websites: Website[]) => {
        this.router.navigate(["user", this.uid, "website"]);
      });
  }
}
