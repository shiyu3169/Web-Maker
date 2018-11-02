import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WidgetService } from "src/app/services/widget.service.client";

@Component({
  selector: "app-widget-edit",
  templateUrl: "./widget-edit.component.html",
  styleUrls: ["./widget-edit.component.css"]
})
export class WidgetEditComponent implements OnInit {
  wgid: string;
  widget: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private widgetService: WidgetService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wgid = params["wgid"];
      this.widget = this.widgetService.findWidgetById(this.wgid);
    });
  }
}
