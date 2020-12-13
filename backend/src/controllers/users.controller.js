const userCtrl = {};
const User = require("../models/User");

//Nos muestra todos los usuarios que hay en la BD
userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

//Crea un usuario nuevo en la BD
userCtrl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();

  res.status(201).json({ message: "User created" });
};

userCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
};

module.exports = userCtrl;
