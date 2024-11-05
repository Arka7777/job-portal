import mongoose, { Schema } from "mongoose";
const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reuired: true,
      unique: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    logo: {
      type: String, //url
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("company", companySchema);
