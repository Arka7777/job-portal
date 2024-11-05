import { create } from "domain";
import { Job } from "../models/jobmodel.js";

//admin post karega job idhar
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobtype,
      experienceLevel,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobtype ||
      !experienceLevel ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      reuirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobtype,
      experienceLevel,
      position,
      company: companyId,
      created_by: userId,
    });
    res.status(201).json({
      message: "new job created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//studenst ke liye
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({
      path:"company"
    }).sort({createdAt:-1})
      
    //kuch ayega idhar

    if (!jobs) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    //ayega kuch
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//admin kitne job create kra hai abhi tak

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId });
    //kuch ayega yad haina
    if (!jobs) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
