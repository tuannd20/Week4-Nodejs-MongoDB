const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const userModel = require("../database/models/user");

router.get("/register", function (req, res, next) {
  res.render("template/register", { title: "Create account" });
});

// Register function
// Route POST api/auth/register
// router.post("/register", AuthController.createAccount);
router.post("/register", async function (req, res, next) {
  const { username, password, email, roleId } = req.body;

  // Simple validatetion
  if (!username || !password || !email)
    return res
      .status(400)
      .json({ state: false, message: "Missing username, password or email" });
  try {
    // Check for existing user
    const user = await userModel.findOne({ username });

    if (user)
      return res
        .status(400)
        .json({ state: false, message: "Username already taken" });

    // All handling is good
    const hashedPassword = await argon2.hash(password);
    const newUser = new userModel({
      username,
      password: hashedPassword,
      email,
      roleId,
    });
    newUser.populate("Roles");
    await newUser.save();

    // Return token
    const accessedToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "7d" }
    );
    res
      .json({
        state: true,
        message: "Account created successfully",
        accessedToken,
      })
      .render("template/index", { title: "Week 4" });
    console.log("Create account successfully");
    console.log(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ state: false, message: "Server error" });
  }
});

router.get("/login", function (req, res, next) {
  res.render("template/login_page", { title: "Login page" });
});

// Login function
// Route POST api/auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Simple validatetion
  if (!username || !password)
    return res
      .status(400)
      .json({ state: false, message: "Missing username or password" });

  try {
    // Check for existing user
    const user = await userModel.findOne({ username });
    // user.populate("Roles");
    if (!user)
      return res
        .status(400)
        .json({ state: false, message: "Incorrect username and password." });

    // Check password
    if (!password)
      return res
        .status(400)
        .json({ state: false, message: "Incorrect username and password." });
    if (username)
      res
        .json({
          state: true,
          message: "Logined successfully",
          user,
        })
        .render("template/index", { title: "Week 4", username });
    console.log(user);
  } catch (err) {
    console.log(error);
    res.status(500).json({ state: false, message: "Server error" });
  }
});

// Export router
module.exports = router;
