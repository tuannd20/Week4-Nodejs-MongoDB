const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema(
  {
    roleName: { type: String, required: true, default: "user" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "Roles",
  }
);

// Create the model
const roleModel = mongoose.model("Roles", roleSchema);

// roleModel.create({
//   roleName: "admin",
// });

// Export the model
module.exports = roleModel;
