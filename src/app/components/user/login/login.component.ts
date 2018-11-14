import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service.client";
import { Router } from "@angular/router";
import { User } from "../../../models/user.model.client";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorFlag: boolean;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.userService
      .findUserByCredentials(this.username, this.password)
      .subscribe(
        (user: User) => {
          this.router.navigate(["user", user._id]);
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }
}
