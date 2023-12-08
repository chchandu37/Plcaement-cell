import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['placed', 'not_placed'],
    default: 'not_placed'
  },
  courseScores: {
    dsaFinalScore: {
      type: Number,
      default: 0
    },
    webDFinalScore: {
      type: Number,
      default: 0
    },
    reactFinalScore: {
      type: Number,
      default: 0
    }
  },
  interviews: [
    {
      companyName: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      }
    }
  ],
  results: [
    {
      companyName: {
        type: String,
        required: true
      },
      result: {
        type: String,
        enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'],
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('Student', studentSchema);
