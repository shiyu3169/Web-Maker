import { Component, OnInit } from "@angular/core";
import { WebsiteService } from "src/app/services/website.service.client";
import { ActivatedRoute } from "@angular/router";
import { Website } from "src/app/models/website.model.client";

@Component({
  selector: "app-website-list",
  templateUrl: "./website-list.component.html",
  styleUrls: ["./website-list.component.css"]
})
export class WebsiteListComponent implements OnInit {
  websites: Website[];
  uid: string;

  constructor(
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.websites = this.websiteService.findWebsitesByUser(this.uid);
    });
  }
}
