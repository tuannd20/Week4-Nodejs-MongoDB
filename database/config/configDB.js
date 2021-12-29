const mongoose = require("mongoose");

const testConnection = async (req, res, next) => {
  try {
    // Connect to mongodb atlas

    // await mongoose.connect(
    //   "mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@duytuan.nxxpy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    // );
    await mongoose.connect("mongodb://localhost/Smartdev");
    console.log("Connected to mongDB");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { testConnection };
