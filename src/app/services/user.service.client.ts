import { Injectable } from "@angular/core";
import { User } from "../models/user.model.client";
import { Http, Response, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
// injecting service into module
import { SharedService } from "./shared.service.client";
import { Router } from "@angular/router";

@Injectable()
export class UserService {
  constructor(
    private http: Http,
    private sharedService: SharedService,
    private router: Router
  ) {}

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  login(username: string, password: string) {
    this.options.withCredentials = true;
    const url = this.baseUrl + "/api/login";
    const user = {
      username: username,
      password: password
    };
    return this.http.post(url, user, this.options).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  logout() {
    this.options.withCredentials = true;
    const url = this.baseUrl + "/api/logout";
    return this.http.post(url, "", this.options).pipe(
      map((res: Response) => {
        this.sharedService.user = 0;
        return res;
      })
    );
  }

  register(user: User) {
    // this communication will be secured
    this.options.withCredentials = true;
    const url = this.baseUrl + "/api/register";
    return this.http.post(url, user, this.options).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http
      .post(this.baseUrl + "/api/loggedIn", "", this.options)
      .pipe(
        map((res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this.router.navigate(["/login"]);
            return false;
          }
        })
      );
  }

  adminLoggedIn() {
    this.options.withCredentials = true;
    return this.http
      .post(this.baseUrl + "/api/loggedIn", "", this.options)
      .pipe(
        map((res: Response) => {
          const user = res.json();
          if (user !== 0 && user.admin) {
            return true;
          } else {
            this.router.navigate(["/profile"]);
            return false;
          }
        })
      );
  }

  createUser(user: User) {
    const url = this.baseUrl + "/api/user";
    return this.http.post(url, user).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  findUserById(userId: string) {
    const url = this.baseUrl + "/api/user/" + userId;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  findUserByUsername(username: string) {
    const url = this.baseUrl + "/api/user?username=" + username;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  findUserByCredentials(username: string, password: string) {
    const url =
      this.baseUrl + "/api/user?username=" + username + "&password=" + password;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }

  updateUser(user: User) {
    const url = this.baseUrl + "/api/user";
    return this.http.put(url, user).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
}
