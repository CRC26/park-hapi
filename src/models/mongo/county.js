import Mongoose from "mongoose";

const { Schema } = Mongoose;

const countySchema = Schema({
  countyFirst: String,
  countySecond: String,
});

export const County = Mongoose.model("County", countySchema);