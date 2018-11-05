import { Injectable } from "@angular/core";
import { User } from "../models/user.model.client";

// injecting service into module
@Injectable()
export class UserService {
  constructor() {}

  users: User[] = [
    {
      _id: "123",
      username: "alice",
      password: "alice",
      firstName: "Alice",
      lastName: "Wonder",
      email: "alice@gmail.com"
    },
    {
      _id: "234",
      username: "bob",
      password: "bob",
      firstName: "Bob",
      lastName: "Marley",
      email: "bob@whatever.com"
    },
    {
      _id: "345",
      username: "charly",
      password: "charly",
      firstName: "Charly",
      lastName: "Garcia",
      email: "charly@hotmail.com"
    },
    {
      _id: "456",
      username: "shiyu",
      password: "shiyu",
      firstName: "Shiyu",
      lastName: "Wang",
      email: "swang@ulem.org"
    }
  ];

  createUser(user: User) {
    user._id = Math.random().toString();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
  }

  findUserByUsername(username: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username) {
        return this.users[i];
      }
    }
  }

  findUserByCredentials(username: string, password: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].username === username &&
        this.users[i].password === password
      ) {
        return this.users[i];
      }
    }
  }

  updateUser(user: User) {
    const oldUser = this.findUserById(user._id);
    const index = this.users.indexOf(oldUser);
    this.users[index] = user;
  }
}
