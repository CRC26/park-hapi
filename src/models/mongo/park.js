import Mongoose from "mongoose";

const { Schema } = Mongoose;

const parkSchema = new Schema({
  parkName: String,
  rating: Number,
  lat: String,
  lng: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  county: {
    type: Schema.Types.ObjectId,
    ref: "County",
  },
});

export const Park = Mongoose.model("Park", parkSchema);