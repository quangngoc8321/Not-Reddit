const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    avaUrl: {
      type: String,
    },
    theme: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
