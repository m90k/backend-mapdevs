const api = require("../Services/Api");
const Dev = require("../Models/Dev");
const toStringFromArray = require("./../Utils/toStringFromArray");
module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiGithub = await api.get(github_username);
      const { name = login, avatar_url, bio } = apiGithub.data;

      const techsArray = toStringFromArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return res.json(dev);
  },

  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  }
};
