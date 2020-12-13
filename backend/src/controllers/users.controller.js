const userCtrl = {};

userCtrl.getUsers = (req, res) => res.send("<h1>Users Routes</h1>");
userCtrl.createUser = (req, res) => res.send("<h1>Users Routes</h1>");
userCtrl.deleteUser = (req, res) => res.send("<h1>User Deleted</h1>");

module.exports = userCtrl;
