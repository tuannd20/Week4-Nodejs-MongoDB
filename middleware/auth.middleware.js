const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Access token not found" });

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.accountId = decodedToken.accountId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = verifyToken;
