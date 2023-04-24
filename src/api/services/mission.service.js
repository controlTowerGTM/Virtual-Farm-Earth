const boom = require("@hapi/boom");
const Mission = require("../models/mission.model");

class MissionService {
  constructor() {}

  async create(mission) {
    const newSong = new Mission({ ...mission });
    await newSong.save();
    return newSong;
  }

  async find() {
    const missionList = await Mission.find();
    return missionList;
  }

  async findByName(missionName) {
    const song = await Mission.findOne({
      name: `${missionName}`,
    });
    return song;
  }

  async findOne(id) {
    const mission = await Mission.findById(id);
    if (!mission) {
      throw boom.notFound("Mission not found");
    }
    return mission;
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
