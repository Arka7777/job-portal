import mongoose from "mongoose";

const apllicationSchema=new mongoose.Schema({
  job:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"job",
    required:true
  },
  applicant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  status:{
    type:String,
    enum:["pending","accepted","rejected"],
    default:"pending"
  }

},{timestamps:true})
export const Application=mongoose.model("Application", apllicationSchema)