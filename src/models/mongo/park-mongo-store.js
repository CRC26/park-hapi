import { Park } from "./park.js";

export const parkMongoStore = {

  async addPark(parkName, countyName, lat, lng) {
    const newPark = new Park({
    parkName,
    countyName,
    lat,
    lng,
    });
    await newPark.save();
    return newPark;
  },

  async deleteAll() {
    await Park.deleteMany({});
  },

  async getAllParks() {
    const parks = await Park.find().lean();
    return parks;
  },
};