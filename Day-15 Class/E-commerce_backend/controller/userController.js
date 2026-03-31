const Users = require("../model/UserModel");
const bcrypt = require("bcrypt");
//register
const register = async (req, res) => {
  try {
    const { name, email, phone, gender, state, password, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await Users.create({
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      state: state,
      password: hashedPassword,
      address: address,
    });
    res.status(200).json({ message: "Register successfully" });
  } catch (error) {
    res.status(500).json({ message: "server not found failed to register" });
  }
};

// login

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const foundUser = await Users.findOne({ email: username });

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const comparedPassword = await bcrypt.compare(password, foundUser.password);
    if (!comparedPassword) {
      return res.status(401).json({ message: "Please enter correct password" });
    }

    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ message: "failed to login " });
  }
};

//get all users
const getAllUsers = async (req, res) => {
  try {
    const registeredUsers = await Users.find();
    if (!registeredUsers) {
      res.status(400).json({ message: "Users not Found" });
    }
    res.status(200).json({ registeredUsers });
  } catch (error) {
    res.status(500).json({ message: "server not found " });
  }
};

// update profile

const updateProfile = async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        state: req.body.state,
        address: req.body.address,
      },
      { new: true },
    );

    res.status(200).json({ message: "updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "failed to user details" });
  }
};

module.exports = { register, login, getAllUsers, updateProfile };
