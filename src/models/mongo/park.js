import Mongoose from "mongoose";

const { Schema } = Mongoose;

const parkSchema = new Schema({
  parkName: String,
  countyName: String,
  lat: Number,
  lng: Number,
  reviewer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Park = Mongoose.model("Park", parkSchema);