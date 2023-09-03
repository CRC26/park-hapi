import { Park } from "./park.js";

export const parkMongoStore = {
  async getAllParks() {
    const parks = await Park.find().populate("user").populate("county").lean();
    return parks;
  },

  async getParksByCounty(id) {
    const parks = await Park.find({ county: id });
    return parks;
  },

  async addPark(parkName, rating, lat, lng, user, county) {
    const newPark = new Park({
      parkName,
      rating,
      lat,
      lng,
      user: user._id,
      county: county._id,
    });
    await newPark.save();
    return newPark;
  },

  async deleteAll() {
    await Park.deleteMany({});
  },
};