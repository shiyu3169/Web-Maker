import { Component, OnInit } from "@angular/core";
import { PageService } from "src/app/services/page.service.client";
import { ActivatedRoute } from "@angular/router";
import { Page } from "src/app/models/page.model.client";

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
  pages: Page[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.pageService
        .findPagesByWebsiteId(this.wid)
        .subscribe((pages: Page[]) => {
          this.pages = pages;
        });
    });
  }
}
