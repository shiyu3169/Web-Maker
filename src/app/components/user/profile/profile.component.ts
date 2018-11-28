import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service.client";
import { User } from "src/app/models/user.model.client";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  uid: string;
  user: User = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  oldUsername: string;
  userError: boolean;
  successFlag: boolean;
  users: User[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.userService.findUserById(this.uid).subscribe((user: User) => {
        this.user = user;
        this.oldUsername = this.user.username;
      });
    });
  }

  update() {
    if (this.user.username === this.oldUsername) {
      this.userService.updateUser(this.user).subscribe((user: User) => {
        this.userError = false;
        this.successFlag = true;
      });
    } else {
      this.userService
        .findUserByUsername(this.user.username)
        .subscribe((data: any) => {
          if (!data) {
            this.userService.updateUser(this.user).subscribe((user: User) => {
              this.userError = false;
              this.successFlag = true;
            });
          } else {
            this.userError = true;
            this.successFlag = false;
          }
        });
    }
  }
}
