const api = require("../Services/Api");
const Dev = require("../Models/Dev");
const toStringFromArray = require("./../Utils/toStringFromArray");

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;
    const techsArray = toStringFromArray(techs);
    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },

      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });
    return res.json({ devs });
  }
};
