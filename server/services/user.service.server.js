module.exports = function(app) {
  // Create User
  app.post("/api/user", createUser);
  // Get User By Id
  app.get("/api/user/:uid", findUserById);
  // Get User
  app.get("/api/user", findUser);
  // Update User
  app.put("/api/user", updateUser);

  users = [
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

  function createUser(req, res) {
    var user = req.body;
    user._id = Math.random().toString();
    users.push(user);
    res.json(user);
  }

  function findUserById(req, res) {
    const userId = req.params["uid"];
    let user = selectUserById(userId);
    res.json(user);
  }

  function findUser(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    if (username && password) {
      let user;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          user = users[i];
        }
      }
      res.json(user);
      return;
    }

    if (username) {
      let user;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          user = users[i];
        }
      }
      res.json(user);
      return;
    }
  }

  function selectUserById(uid) {
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === uid) {
        return users[x];
      }
    }
  }

  function updateUser(req, res) {
    const user = req.body;
    const oldUser = selectUserById(user._id);
    const index = users.indexOf(oldUser);
    this.users[index] = user;
    res.json(user);
  }
};
