import mongoose from "mongoose";
const restorantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Restorant title is required"],
    },
    imageUrl: {
      type: String,
    },
    foods: {
      type: Array,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    time: {
      type: String,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logoUrl: {
      type: String,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: Number,
      default: 1,
    },
    code: {
      type: String,
    },
    coords: {
      id: { type: String },
      lat: { type: Number },
      latDelta: { type: Number },
      lng: { type: Number },
      lngDelta: { type: Number },
      address: {
        type: String,
      },
      title: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Restorant", restorantSchema);
