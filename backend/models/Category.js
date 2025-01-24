const mongoose = require("mongoose");

// create a category data object model using mongoose library
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", CategorySchema);