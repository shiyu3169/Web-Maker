import { Injectable } from "@angular/core";
import { User } from "../models/user.model.client";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
// injecting service into module
@Injectable()
export class UserService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

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
