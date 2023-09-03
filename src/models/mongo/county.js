import Mongoose from "mongoose";

const { Schema } = Mongoose;

const countySchema = Schema({
  countyName: String,
});

export const County = Mongoose.model("County", countySchema);