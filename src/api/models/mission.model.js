const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema(
  {
    name: String,
    attemptsMade: Number,
    attemptsCompleted: Number,
    errors: Number,
    origins: [
      {
        country: String,
        count: Number,
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = Mission = mongoose.model("missions", missionSchema);
