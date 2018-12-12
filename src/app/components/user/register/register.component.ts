import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service.client";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model.client";
import { SharedService } from "src/app/services/shared.service.client";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  verifyPassword: string;
  passwordError: boolean;
  userError: boolean;
  constructor(
    private userService: UserService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}

  register() {
    if (this.password !== this.verifyPassword) {
      this.passwordError = true;
      this.userError = false;
    } else {
      this.passwordError = false;
      this.userService
        .findUserByUsername(this.username)
        .subscribe((data: any) => {
          if (!data) {
            const newUser: User = {
              username: this.username,
              password: this.password,
              firstName: "",
              lastName: "",
              email: ""
            };
            this.userService.register(newUser).subscribe(
              (data: User) => {
                this.sharedService.user = data;
                this.router.navigate(["profile"]);
              },
              (error: any) => {
                this.userError = true;
              }
            );
          } else {
            this.userError = true;
          }
        });
    }
  }
}
