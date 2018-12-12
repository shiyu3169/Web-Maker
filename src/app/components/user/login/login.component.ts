import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service.client";
import { Router } from "@angular/router";
import { User } from "../../../models/user.model.client";
import { SharedService } from "../../../services/shared.service.client";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorFlag: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}

  login() {
    this.userService.login(this.username, this.password).subscribe(
      (data: any) => {
        this.sharedService.user = data;
        this.router.navigate(["/profile"]);
      },
      (error: any) => {
        this.errorFlag = true;
      }
    );
  }
}
