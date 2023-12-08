import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Interview', interviewSchema);
