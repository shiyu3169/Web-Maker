const mongoose = require("mongoose");
const UserSchema = require("./user.schema.server");
const UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(uid) {
  return UserModel.findById(uid);
}

function findUserByUsername(username) {
  return UserModel.findOne({ username: username });
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({ username: username, password: password });
}

function updateUser(uid, user) {
  return UserModel.update({ _id: uid }, user);
}

module.exports = UserModel;
