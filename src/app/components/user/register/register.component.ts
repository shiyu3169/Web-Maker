import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service.client";
import { Router } from "@angular/router";

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
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  register() {
    if (this.password === this.verifyPassword) {
      const user = this.userService.findUserByUsername(this.username);
      if (user) {
        this.userError = true;
        this.passwordError = false;
      } else {
        const newUser = {
          username: this.username,
          password: this.password,
          verifyPassword: this.verifyPassword
        };
        const currentUser = this.userService.createUser(newUser);
        this.router.navigate(["user", currentUser._id]);
      }
    } else {
      this.passwordError = true;
      this.userError = false;
    }
  }
}
