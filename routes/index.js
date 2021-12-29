var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

const verifyToken = require("../middleware/auth.middleware");

/* GET home page. */
router.get("/:token", (req, res, next) => {
  res.render("template/index", { title: "Home page" });
});

module.exports = router;
