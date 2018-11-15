import { Injectable } from "@angular/core";
import { Website } from "../models/website.model.client";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

// injecting service into module
@Injectable()
export class WebsiteService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createWebsite(website: Website) {
    const url = this.baseUrl + "/api/website";
    return this.http.post(url, website).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  findWebsitesByUser(userId: string) {
    const url = this.baseUrl + `/api/user/${userId}/website`;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  findWebsiteById(websiteId: string) {
    const url = this.baseUrl + "/api/website/" + websiteId;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  updateWebsite(website: Website) {
    const url = this.baseUrl + "/api/website";
    return this.http.put(url, website).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  deleteWebsite(websiteId: string) {
    const url = this.baseUrl + "/api/website/" + websiteId;
    return this.http.delete(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
}
