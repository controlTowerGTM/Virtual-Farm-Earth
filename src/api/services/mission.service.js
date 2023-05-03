const boom = require("@hapi/boom");
const Mission = require("../models/mission.model");

class MissionService {
  constructor() {}

  async create(mission) {
    const newMission = new Mission({ ...mission });
    await newMission.save();
    return newMission;
  }

  async find() {
    const missionList = await Mission.find();
    return missionList;
  }

  async findByName(missionName) {
    const mission = await Mission.findOne({
      name: `${missionName}`,
    });
    return mission;
  }

  async findOne(id) {
    const mission = await Mission.findById(id);
    if (!mission) {
      throw boom.notFound("Mission not found");
    }
    return mission;
  }

  async updateAttempts() {
    const missionList = await this.find();
    missionList.forEach(async (mission) => {
      mission.abandonedAttempts =
        mission.attemptsMade - mission.attemptsCompleted;
      if (mission.abandonedAttempts < 0) mission.abandonedAttempts = 0;
      await this.update(mission.id, mission);
    });
    return missionList;
  }

  async update(id, changes) {
    const mission = Mission.findByIdAndUpdate(id, changes);
    return mission;
  }

  async delete(id) {
    const mission = Mission.deleteOne({ _id: id });
    return mission;
  }
}

module.exports = MissionService;
