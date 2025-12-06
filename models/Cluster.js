const mongoose = require("mongoose");

const clusterSchema = new mongoose.Schema({
  cluster_name: {
    type: String,
    required: true,
  },
  creator_user_id:{
    type: String,
    required: true,
  },
  cluster_members:{
    type: [String],
    required: true,
  },
  member_count:{
    type: Number,
    required: true,
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

module.exports = mongoose.model("Cluster", clusterSchema);
