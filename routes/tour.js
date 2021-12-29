const express = require("express");
const { models } = require("mongoose");
const router = express.Router();
const verifyToken = require("../middleware/auth.middleware");

const TourModel = require("../database/models/tour");

// Tuors section
// Get Tours page
router.get("/", function (req, res, next) {
  res.render("template/master", {
    title: "Tour Page",
    content: "../tour/index",
  });
});

// Create new tour -> api/tours
// access private
router.post("/createTours", async (req, res, next) => {
  const { title, price, image, location, time } = req.body;

  if (!title)
    return res
      .status(400)
      .json({ status: false, message: "Title is required" });

  try {
    const newTour = new TourModel({
      title,
      price,
      image,
      location,
      time,
    });

    await newTour.save();
    res.json({
      success: true,
      message: "Add new tour successfully",
      tour: newTour,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ state: false, message: "Server error" });
  }
});

module.exports = router;
