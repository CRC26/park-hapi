import { County } from "./county.js";

export const countyMongoStore = {
  async getAllCounties() {
    const counties = await County.find().lean();
    return counties;
  },

  async findById(id) {
    const county = await County.findOne({ _id: id }).lean();
    return county;
  },

  async findByName(countyFirst, countySecond) {
    const county = await County.findOne({
      countyFirst,
      countySecond,
    });
    return county;
  },
};