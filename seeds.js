const mongoose = require("mongoose");
const Mission = require("./src/api/models/mission.model");
const { config } = require("./src/config");
const URI = config.mongoUrl;

mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(
      "☑️ The server has successfully connected to the database ... "
    );
  })
  .catch((error) =>
    console.log(
      `⛔️ An error occurred in the database connection ...\n[Error] ${error}`
    )
  );

const seedMissions = [
  {
    name: "compost",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "english-for-agronomist",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "soil-analysis",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "learning-spanish",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "pineapple",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "nitrogen",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "bio-inputs",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "bio-digester",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "growth-control",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "water-energy",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "remote-sensing",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
  {
    name: "precision-agriculture",
    attemptsMade: 0,
    attemptsCompleted: 0,
    abandonedAttempts: 0,
    errors: 0,
    origins: [],
  },
];

const seedDB = async () => {
  try {
    // Check is db is seeded
    await Mission.deleteMany({});
    await Mission.insertMany(seedMissions);
    console.log(`🟢 Database seeded`);
  } catch (error) {
    console.log(error);
  }
};

seedDB().then(() => mongoose.connection.close());
