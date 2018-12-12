import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "./user.service.client";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate() {
    return this.userService.adminLoggedIn();
  }
}
