const { Schema, model, ObjectId } = require("mongoose");

const ReportSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  userName: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reportDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("report", ReportSchema);
