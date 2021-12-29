const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roleId: { type: Schema.Types.ObjectId, required: true, ref: "Roles" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "Users",
  }
);

// Create the model
const userModel = mongoose.model("Users", userSchema);

// Export the model
module.exports = userModel;
