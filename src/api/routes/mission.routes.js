const express = require("express");
const MissionService = require("../services/mission.service");
const geoIP = require("geoip-lite");

const router = express.Router();
const service = new MissionService();

router.get("/", async (req, res, next) => {
  try {
    const songs = await service.find();
    return res.status(200).json(songs).end();
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await service.findOne(id);
    res.json(song);
  } catch (error) {
    next(error);
  }
});

router.post("/start", async (req, res, next) => {
  try {
    const { missionName } = req.body;
    const originIP = req.ip;

    // Check if mission exists
    const mission = await service.findByName(missionName);
    if (!mission) {
      console.log(
        `🟠 Mission "${missionName}" has not been registered in the system`
      );
      return res.status(404).send("Mission not found").end();
    }

    // Get origin IP
    const { country } = geoIP.lookup(originIP);
    let origin = mission.origins.find((o) => o.country === country);
    if (!origin) {
      origin = { country: country, count: 1 };
      mission.origins.push(origin);
    }
    origin.count++;

    // Update mission data
    console.log(`🟢 Mission start registered: ${mission}`);
    service.update(mission.id, mission);
    res.json(mission);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    let song = await service.findOne(id);

    if (song) {
      song = {
        name: body.name || song.name,
        artist: body.artist || song.artist,
        album: body.album || song.album,
        cover: body.cover || song.cover,
        url: body.url || song.url,
        lyrics: body.lyrics || song.lyrics,
      };

      service.update(id, song);
      res.json(song);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(201).json({ id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
