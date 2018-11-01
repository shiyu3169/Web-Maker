import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service.client";

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
  user;
  oldUsername: string;
  userError: boolean;
  successFlag: boolean;
  users;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.user = this.userService.findUserById(this.uid);
      this.oldUsername = this.user.username;
    });
  }

  update() {
    if (this.user.username === this.oldUsername) {
      this.userError = false;
      this.successFlag = true;
      this.userService.updateUser(this.user);
    } else {
      const user = this.userService.findUserByUsername(this.user.username);
      if (user) {
        this.userError = true;
        this.successFlag = false;
      } else {
        this.userError = false;
        this.successFlag = true;
        this.userService.updateUser(this.user);
      }
    }
  }
}
