import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PageService } from "src/app/services/page.service.client";

@Component({
  selector: "app-page-new",
  templateUrl: "./page-new.component.html",
  styleUrls: ["./page-new.component.css"]
})
export class PageNewComponent implements OnInit {
  wid: string;
  uid: string;
  name: string;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageService: PageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wid = params["wid"];
      this.uid = params["uid"];
    });
  }

  createPage() {
    const page = {
      name: this.name,
      title: this.title,
      websiteId: this.wid
    };
    this.pageService.createPage(page);
    this.router.navigate(["user", this.uid, "website", this.wid, "page"]);
  }
}
