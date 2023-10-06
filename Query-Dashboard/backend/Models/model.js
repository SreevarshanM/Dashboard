const mongoose = require("mongoose");

//////Query Schema /////////

const schemaQuery = new mongoose.Schema({
  trackingNo: {
    type: Number,
    required: [true, "Tracking No Must Be Defined!!!"],
    unique: true,
  },
  Location: {
    type: String,
    mimlength: [5, "Location must have more or equal than 5 characters"],
  },
  Gender: {
    type: String,
    required: [true, "Gender must be defined"],
  },
  date: {
    type: String,
    required: [true, "Date Must Be Defined!!!"],
  },
  status: {
    type: Number,
    required: [true, "Status must be defined"],
  },
  name: {
    type: String,
    required: [true, "Name must be defined"],
  },
  description: {
    type: String,
  },
});

exports.queries = mongoose.model("queries", schemaQuery);
