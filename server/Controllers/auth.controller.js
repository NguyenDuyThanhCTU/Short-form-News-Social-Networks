const user = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authController = {};

generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      admin: user.admin,
      contentCreator: user.contentCreator,
    },
    process.env.SecretKey,
    {
      expiresIn: "30d",
    },
  );
};

refreshAccesToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      admin: user.admin,
      contentCreator: user.contentCreator,
    },
    process.env.RefreshKey,
    { expiresIn: "365d" },
  );
};

// @route POST /register
// @desc Register user
// @access Public
authController.registerController = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const User = await user.findOne({ username });
    const Email = await user.findOne({ email });

    if (User || Email)
      return res
        .status(200)
        .json({ succes: false, message: "Tai khoan hoac so dien thoai da ton tai" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new user({ username, password: hashPassword, email });
    await newUser.save();

    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ succes: false, message: "Loi server" });
  }
};

// @route POST /login
// @desc login
// @access Public
authController.loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const User = await user.findOne({ username });
    const valdPassword = await bcrypt.compare(password, User.password);

    if (valdPassword) {
      const accessToken = generateAccessToken({ username });
      const refreshToken = refreshAccesToken({ username });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });

      res.status(200).json({ username, accessToken });
    } else
      return res
        .status(401)
        .json({ succes: false, messae: "tai khoan hoac mat khau khong chinh xac" });
  } catch (error) {
    res.status(500).json({ succes: false, message: "Loi server" });
  }
};

// @route POST /forgotpassword
// @desc forgot password
// @access Public
authController.forgotPasswordController = async (req, res) => {
  const email = req.body;
  const emailDB = await user.findOne(email);
  if (emailDB) return res.status(200).json(emailDB.email);
  else {
    return res.status(400).json({ succes: false, messae: "SDT khong dung" });
  }
};

authController.RefreshToken = async (req, res) => {
  const RefreshToken = req.cookies.refreshToken;
  if (!RefreshToken) return res.status(400).json({ succes: false, message: "Chua co token" });

  jwt.verify(RefreshToken, process.env.RefreshKey, (err, user) => {
    if (user) {
      const newAccessToken = generateAccessToken(RefreshToken);
      const newRefreshToken = refreshAccesToken(RefreshToken);
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({ accessToken: newAccessToken });
    } else res.status(400).json({ succes: false, messae: "Token khong dung" });
  });
};

module.exports = authController;
