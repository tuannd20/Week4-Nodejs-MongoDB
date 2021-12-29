const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourSchema = new Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    },
    time: {
      type: String,
    },
    location: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    collection: "Tours",
  }
);

// Create the model
const TourModel = mongoose.model("Tours", TourSchema);

// Export the model
module.exports = TourModel;
