import { Component, OnInit } from "@angular/core";
import { PageService } from "src/app/services/page.service.client";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-list",
  templateUrl: "./page-list.component.html",
  styleUrls: ["./page-list.component.css"]
})
export class PageListComponent implements OnInit {
  constructor(
    private pageService: PageService,
    private activatedRoute: ActivatedRoute
  ) {}

  uid: string;
  wid: string;
  pages: any[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.pages = this.pageService.findPagesByWebsiteId(this.wid);
    });
  }
}
