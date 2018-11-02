import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { WidgetService } from "src/app/services/widget.service.client";

@Component({
  selector: "app-widget-heading",
  templateUrl: "./widget-heading.component.html",
  styleUrls: ["./widget-heading.component.css"]
})
export class WidgetHeadingComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.pid = params["pid"];
      this.wgid = params["wgid"];
      this.widget = this.widgetService.findWidgetById(this.wgid);
    });
  }

  update() {
    this.widgetService.updateWidget(this.widget);
    this.router.navigate([
      "user",
      this.uid,
      "website",
      this.pid,
      "page",
      this.pid,
      "widget"
    ]);
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
    this.router.navigate([
      "user",
      this.uid,
      "website",
      this.pid,
      "page",
      this.pid,
      "widget"
    ]);
  }
}
