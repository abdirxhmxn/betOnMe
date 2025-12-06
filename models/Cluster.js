const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  cluster_name: {
    type: String,
    required: true,
  },
  creator_user_id:{
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cluster", ClusterSchema);
