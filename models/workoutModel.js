const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  exercise: { type: String, required: true },
  reps: { type: Number, default: 0, required: true },
  sets: { type: Number, default: 0, required: true },
  weight: { type: Number, default: 0, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const workoutModel = mongoose.model("Workout", workoutSchema);

module.exports = workoutModel;
