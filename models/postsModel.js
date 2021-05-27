const mongoose = require("mongoose");

//export du Modele 
const PostsModel = mongoose.model(
  "node-api",
  {
    author: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  "posts"
);

module.exports = { PostsModel };