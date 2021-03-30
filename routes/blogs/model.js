const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },
  author: {
    type: String,
  },
  body: {
    type: String,
    required: "Body text is required",
  },
  tags: {
    type: [],
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
