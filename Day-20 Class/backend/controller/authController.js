const Users = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_SECRET, { expiresIn: "7d" });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await Users.create({ name, email, password: hashed });

  res.status(200).json({ message: "user registered" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "User not found " });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({ message: "Invalid Credentials" });
  }

  const payload = { id: user._id, role: user.role };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  console.log( "accessToken : ",accessToken);
  console.log("refreshToken : ",refreshToken);

  res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: false });

  res.json({ accessToken });
};

const refreshToken = (req, res) => {
  const token = req.cookie.refreshToken;
  if (!token) {
    res.sendStatus(401);
  }
  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(403);
    }

    const accessToken = generateAccessToken({
      id: user._id,
      role: user.role,
    });
    res.json({ accessToken });
  });
};

module.exports = {
  register,
  login,
  refreshToken,
};
