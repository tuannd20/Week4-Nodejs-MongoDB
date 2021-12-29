const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    fullname: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "Staffs",
  }
);

// Create the model
const staffModel = mongoose.model("Staffs", staffSchema);

// Export the model
module.exports = staffModel;
